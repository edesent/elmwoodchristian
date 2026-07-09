"use client";

import { useState } from "react";
import { GRADES } from "@/lib/enrollment";

type Data = Record<string, string>;

export default function TourForm() {
  const [data, setData] = useState<Data>({ preferredTime: "Morning" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [emailed, setEmailed] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const set = (name: string, value: string) => setData((d) => ({ ...d, [name]: value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/tour", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Submission failed");
      setEmailed(Boolean(json.emailed));
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-2xl py-8">
        <div className="mb-6 grid place-items-center h-16 w-16 rounded-full bg-crimson/10 text-crimson text-3xl">✓</div>
        <h2 className="font-serif text-3xl md:text-4xl text-ink">Tour requested</h2>
        <p className="mt-4 text-lg text-text-body leading-relaxed">
          Thank you{data.parentName ? `, ${data.parentName.split(" ")[0]}` : ""}! We&rsquo;ve received your
          request{emailed ? "" : ""} and our office will reach out shortly to confirm a
          time that works for your family.
        </p>
        {!emailed && (
          <p className="mt-4 text-sm text-text-muted">
            If you don&rsquo;t hear from us soon, please call 303.659.3818 or email
            office@elmwoodchristian.org.
          </p>
        )}
        <a
          href="/"
          className="inline-flex items-center justify-center mt-8 bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
        >
          Back to Home
        </a>
      </div>
    );
  }

  const base =
    "w-full rounded-sm border border-line bg-paper px-3.5 py-2.5 text-ink outline-none focus:border-crimson transition-colors";
  const labelCls = "block text-sm font-medium text-ink mb-1.5";

  return (
    <form onSubmit={onSubmit} className="max-w-3xl">
      {status === "error" && (
        <p className="mb-6 rounded-sm bg-crimson/8 border border-crimson/25 text-crimson px-4 py-3 text-sm">
          {errorMsg} Please try again, or call 303.659.3818.
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
        <div className="sm:col-span-2">
          <label className={labelCls}>Parent/guardian name <span className="text-crimson">*</span></label>
          <input required value={data.parentName || ""} onChange={(e) => set("parentName", e.target.value)} className={base} />
        </div>
        <div>
          <label className={labelCls}>Email <span className="text-crimson">*</span></label>
          <input type="email" required value={data.email || ""} onChange={(e) => set("email", e.target.value)} className={base} />
        </div>
        <div>
          <label className={labelCls}>Phone <span className="text-crimson">*</span></label>
          <input type="tel" required value={data.phone || ""} onChange={(e) => set("phone", e.target.value)} className={base} />
        </div>
        <div>
          <label className={labelCls}>Grade(s) of interest</label>
          <select value={data.childGrades || ""} onChange={(e) => set("childGrades", e.target.value)} className={base}>
            <option value="">Select…</option>
            {GRADES.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
            <option value="Multiple grades">Multiple grades</option>
          </select>
        </div>
        <div>
          <label className={labelCls}>Number of children</label>
          <input type="number" min={1} value={data.numChildren || ""} onChange={(e) => set("numChildren", e.target.value)} className={base} />
        </div>
        <div>
          <label className={labelCls}>Preferred date</label>
          <input type="date" value={data.preferredDate || ""} onChange={(e) => set("preferredDate", e.target.value)} className={base} />
        </div>
        <div>
          <label className={labelCls}>Alternate date</label>
          <input type="date" value={data.altDate || ""} onChange={(e) => set("altDate", e.target.value)} className={base} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Preferred time</label>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1.5">
            {["Morning", "Afternoon", "Either"].map((o) => (
              <label key={o} className="inline-flex items-center gap-2 cursor-pointer text-text-body">
                <input
                  type="radio"
                  name="preferredTime"
                  value={o}
                  checked={data.preferredTime === o}
                  onChange={() => set("preferredTime", o)}
                  className="h-4 w-4 accent-crimson"
                />
                {o}
              </label>
            ))}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>How did you hear about us?</label>
          <input value={data.hearAbout || ""} onChange={(e) => set("hearAbout", e.target.value)} className={base} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Anything you&rsquo;d like us to know?</label>
          <textarea rows={4} value={data.message || ""} onChange={(e) => set("message", e.target.value)} className={base} />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-8 py-4 rounded-sm bg-crimson text-white font-semibold uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Request My Tour"}
        </button>
      </div>
    </form>
  );
}
