"use client";

import { useMemo, useRef, useState } from "react";
import { STEPS, type Step, type Field } from "@/lib/enrollment";

type Data = Record<string, string>;
type Tables = Record<string, Array<Record<string, string>>>;

function initTables(): Tables {
  const t: Tables = {};
  for (const s of STEPS) {
    if (s.table) {
      t[s.table.name] = Array.from({ length: s.table.rows }, () =>
        Object.fromEntries(s.table!.columns.map((c) => [c.name, ""]))
      );
    }
  }
  return t;
}

export default function EnrollmentForm() {
  const [data, setData] = useState<Data>({});
  const [tables, setTables] = useState<Tables>(initTables);
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [emailed, setEmailed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const visibleSteps = useMemo(() => STEPS.filter((s) => !s.showIf || s.showIf(data)), [data]);
  const total = visibleSteps.length + 1; // + review
  const isReview = step >= visibleSteps.length;
  const current: Step | undefined = isReview ? undefined : visibleSteps[step];

  const setField = (name: string, value: string) => setData((d) => ({ ...d, [name]: value }));
  const setCell = (table: string, row: number, col: string, value: string) =>
    setTables((t) => {
      const copy = { ...t, [table]: t[table].map((r) => ({ ...r })) };
      copy[table][row][col] = value;
      return copy;
    });

  const next = () => {
    if (formRef.current && !formRef.current.reportValidity()) return;
    setStep((s) => Math.min(s + 1, visibleSteps.length));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  async function submit() {
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data, tables }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Submission failed");
      if (json.pdfBase64) downloadPdf(json.pdfBase64, json.fileName || "elmwood-application.pdf");
      setEmailed(Boolean(json.emailed));
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-2xl mx-auto text-center py-10">
        <div className="mx-auto mb-6 grid place-items-center h-16 w-16 rounded-full bg-crimson/10 text-crimson text-3xl">✓</div>
        <h2 className="font-serif text-3xl md:text-4xl text-ink">Application submitted</h2>
        <p className="mt-4 text-lg text-text-body leading-relaxed">
          Thank you for applying to Elmwood Christian Academy. A copy of your
          application has been downloaded to your device
          {emailed ? " and emailed to our office" : ""}. Our office will be in
          touch about next steps—placement testing and a personal interview.
        </p>
        {!emailed && (
          <p className="mt-4 text-sm text-text-muted">
            Please email your downloaded PDF to office@elmwoodchristianacademy.org
            or bring it to the school office to complete your application.
          </p>
        )}
        <a
          href="/admissions"
          className="inline-flex items-center justify-center mt-8 bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
        >
          Back to Admissions
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-crimson uppercase tracking-[0.14em] text-xs">
            {isReview ? "Review" : current?.title}
          </span>
          <span className="text-text-muted">Step {step + 1} of {total}</span>
        </div>
        <div className="mt-3 h-1.5 rounded-full bg-stone-2 overflow-hidden">
          <div className="h-full bg-crimson transition-all duration-500" style={{ width: `${((step + 1) / total) * 100}%` }} />
        </div>
      </div>

      <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
        {current && <StepBody step={current} data={data} tables={tables} setField={setField} setCell={setCell} />}
        {isReview && <Review data={data} tables={tables} steps={visibleSteps} />}
      </form>

      {status === "error" && (
        <p className="mt-6 rounded-sm bg-crimson/8 border border-crimson/25 text-crimson px-4 py-3 text-sm">
          {errorMsg} Please try again, or email office@elmwoodchristianacademy.org.
        </p>
      )}

      <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="px-6 py-3 rounded-sm border border-line text-charcoal font-semibold text-sm disabled:opacity-40 hover:border-crimson/40 transition-colors"
        >
          ← Back
        </button>
        {!isReview ? (
          <button
            type="button"
            onClick={next}
            className="px-8 py-3 rounded-sm bg-crimson text-white font-semibold uppercase tracking-[0.08em] text-sm hover:bg-crimson-dark transition-colors"
          >
            Continue →
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={status === "submitting"}
            className="px-8 py-3 rounded-sm bg-crimson text-white font-semibold uppercase tracking-[0.08em] text-sm hover:bg-crimson-dark transition-colors disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting…" : "Submit Application"}
          </button>
        )}
      </div>
    </div>
  );
}

function StepBody({
  step,
  data,
  tables,
  setField,
  setCell,
}: {
  step: Step;
  data: Data;
  tables: Tables;
  setField: (name: string, value: string) => void;
  setCell: (table: string, row: number, col: string, value: string) => void;
}) {
  const table = step.table;
  return (
    <div>
      <h2 className="font-serif text-3xl md:text-4xl text-ink">{step.title}</h2>
      {step.intro && <p className="mt-3 text-text-body leading-relaxed">{step.intro}</p>}

      {table && (
        <div className="mt-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-crimson mb-3">{table.label}</p>
          <div className="space-y-3">
            {tables[table.name].map((row, ri) => (
              <div
                key={ri}
                className="grid gap-3"
                style={{ gridTemplateColumns: `repeat(${table.columns.length}, minmax(0,1fr))` }}
              >
                {table.columns.map((c) => (
                  <input
                    key={c.name}
                    aria-label={`${c.label} (row ${ri + 1})`}
                    placeholder={ri === 0 ? c.label : ""}
                    value={row[c.name]}
                    onChange={(e) => setCell(table.name, ri, c.name, e.target.value)}
                    className="w-full rounded-sm border border-line bg-paper px-3 py-2.5 text-ink outline-none focus:border-crimson"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-5">
        {step.fields.map((f) => (
          <FieldInput
            key={f.name}
            field={f}
            value={data[f.name] || ""}
            visible={!f.showIf || f.showIf(data)}
            onChange={(v) => setField(f.name, v)}
          />
        ))}
      </div>
    </div>
  );
}

function FieldInput({
  field,
  value,
  visible,
  onChange,
}: {
  field: Field;
  value: string;
  visible: boolean;
  onChange: (v: string) => void;
}) {
  if (!visible) return null;
  const wrap = field.half || field.type === "checkbox" ? "" : "sm:col-span-2";
  const base = "w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-crimson transition-colors";

  if (field.type === "checkbox") {
    return (
      <label className="sm:col-span-2 flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required={field.required}
          checked={value === "Yes"}
          onChange={(e) => onChange(e.target.checked ? "Yes" : "")}
          className="mt-1 h-5 w-5 accent-crimson shrink-0"
        />
        <span className="text-[0.95rem] leading-relaxed text-text-body">
          {field.label}
          {field.required && <span className="text-crimson"> *</span>}
        </span>
      </label>
    );
  }

  return (
    <div className={wrap}>
      <label className="block text-sm font-medium text-ink mb-1.5">
        {field.label}
        {field.required && <span className="text-crimson"> *</span>}
        {field.note && <span className="ml-2 text-xs text-text-muted font-normal">({field.note})</span>}
      </label>

      {field.type === "select" ? (
        <select required={field.required} value={value} onChange={(e) => onChange(e.target.value)} className={base}>
          <option value="">Select…</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      ) : field.type === "radio" ? (
        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1.5">
          {field.options?.map((o) => (
            <label key={o} className="inline-flex items-center gap-2 cursor-pointer text-text-body">
              <input
                type="radio"
                name={field.name}
                value={o}
                required={field.required}
                checked={value === o}
                onChange={() => onChange(o)}
                className="h-4 w-4 accent-crimson"
              />
              {o}
            </label>
          ))}
        </div>
      ) : field.type === "textarea" ? (
        <textarea
          required={field.required}
          value={value}
          rows={4}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      ) : (
        <input
          type={field.type}
          required={field.required}
          value={value}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </div>
  );
}

function Review({ data, tables, steps }: { data: Data; tables: Tables; steps: Step[] }) {
  return (
    <div>
      <h2 className="font-serif text-3xl md:text-4xl text-ink">Review your application</h2>
      <p className="mt-3 text-text-body">Please review before submitting. You can go back to make changes.</p>
      <div className="mt-8 space-y-8">
        {steps.map((s) => (
          <div key={s.id}>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-crimson border-b border-line pb-2">{s.title}</h3>
            <dl className="mt-3 divide-y divide-line/70">
              {s.fields
                .filter((f) => data[f.name] && (!f.showIf || f.showIf(data)))
                .map((f) => (
                  <div key={f.name} className="py-2 grid grid-cols-[1fr_1.4fr] gap-4 text-sm">
                    <dt className="text-text-muted">{f.label}</dt>
                    <dd className="text-ink">{data[f.name]}</dd>
                  </div>
                ))}
              {s.table &&
                tables[s.table.name]
                  .filter((r) => Object.values(r).some((v) => v))
                  .map((r, i) => (
                    <div key={i} className="py-2 text-sm text-ink">
                      {s.table!.columns.map((c) => r[c.name]).filter(Boolean).join(" · ")}
                    </div>
                  ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

function downloadPdf(base64: string, fileName: string) {
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const blob = new Blob([bytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
