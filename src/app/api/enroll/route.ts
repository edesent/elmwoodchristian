import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import { STEPS } from "@/lib/enrollment";

export const runtime = "nodejs";

const CRIMSON = rgb(0.545, 0.133, 0.2);
const INK = rgb(0.13, 0.12, 0.11);
const MUTED = rgb(0.42, 0.4, 0.37);

// Helvetica (WinAnsi) can't encode arbitrary unicode — reduce to safe ASCII.
function ascii(s: string): string {
  return (s || "")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/…/g, "...")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "");
}

function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = ascii(text).split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (font.widthOfTextAtSize(test, size) > maxWidth && line) {
      lines.push(line);
      line = w;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [""];
}

async function buildPdf(data: Record<string, string>, tables: Record<string, Array<Record<string, string>>>): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  const W = 612, H = 792, M = 54;
  const maxW = W - M * 2;
  let page: PDFPage = doc.addPage([W, H]);
  let y = H - M;

  const ensure = (need: number) => {
    if (y - need < M) {
      page = doc.addPage([W, H]);
      y = H - M;
    }
  };
  const text = (s: string, x: number, size: number, f: PDFFont, color = INK) => {
    page.drawText(ascii(s), { x, y, size, font: f, color });
  };

  // Header
  page.drawRectangle({ x: 0, y: H - 84, width: W, height: 84, color: CRIMSON });
  page.drawText("ELMWOOD CHRISTIAN ACADEMY", { x: M, y: H - 42, size: 18, font: bold, color: rgb(1, 1, 1) });
  page.drawText("Application for Enrollment", { x: M, y: H - 64, size: 12, font, color: rgb(1, 1, 1) });
  y = H - 84 - 28;

  for (const step of STEPS) {
    const fieldsWithValues = step.fields.filter((f) => (data[f.name] || "").trim());
    const tableRows = step.table
      ? tables?.[step.table.name]?.filter((r) => Object.values(r).some((v) => (v || "").trim())) ?? []
      : [];
    if (!fieldsWithValues.length && !tableRows.length) continue;

    ensure(40);
    // Section bar
    page.drawRectangle({ x: M, y: y - 4, width: maxW, height: 20, color: rgb(0.96, 0.94, 0.9) });
    text(step.title.toUpperCase(), M + 8, 11, bold, CRIMSON);
    y -= 30;

    if (step.table && tableRows.length) {
      text(step.table.label, M, 9, bold, MUTED);
      y -= 14;
      for (const r of tableRows) {
        const row = step.table.columns.map((c) => r[c.name]).filter(Boolean).join("   |   ");
        for (const ln of wrap(row, font, 10, maxW - 10)) {
          ensure(14);
          text(ln, M + 10, 10, font);
          y -= 14;
        }
      }
      y -= 6;
    }

    for (const f of fieldsWithValues) {
      const val = data[f.name];
      if (f.type === "checkbox") {
        const lines = wrap(`[X] ${f.label}`, font, 9.5, maxW - 6);
        for (const ln of lines) { ensure(13); text(ln, M + 6, 9.5, font); y -= 13; }
        continue;
      }
      const label = `${f.label}:`;
      const labelW = bold.widthOfTextAtSize(label, 10);
      const valX = M + labelW + 10;
      ensure(14);
      text(label, M, 10, bold, MUTED);
      const valLines = wrap(val, font, 10, maxW - labelW - 14);
      text(valLines[0], valX, 10, font);
      y -= 14;
      for (let i = 1; i < valLines.length; i++) {
        ensure(13);
        text(valLines[i], valX, 10, font);
        y -= 13;
      }
    }
    y -= 10;
  }

  ensure(20);
  text(`Submitted ${new Date().toISOString().slice(0, 10)} via elmwoodchristianacademy.org`, M, 8, font, MUTED);

  return doc.save();
}

export async function POST(req: Request) {
  let body: { data?: Record<string, string>; tables?: Record<string, Array<Record<string, string>>> };
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }
  const data = body.data || {};
  const tables = body.tables || {};

  if (!data.lastName || !data.firstName || !data.email) {
    return Response.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  let pdf: Uint8Array;
  try {
    pdf = await buildPdf(data, tables);
  } catch (e) {
    console.error("PDF generation failed", e);
    return Response.json({ ok: false, error: "Could not generate the application PDF." }, { status: 500 });
  }

  const pdfBase64 = Buffer.from(pdf).toString("base64");
  const studentName = `${data.firstName} ${data.lastName}`.trim();
  const fileName = `Elmwood-Application-${data.lastName || "Applicant"}.pdf`;

  // Email via Resend (optional — works once RESEND_API_KEY is set)
  let emailed = false;
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);
      const to = process.env.ENROLL_TO || "office@elmwoodchristianacademy.org";
      const from = process.env.ENROLL_FROM || "Elmwood Admissions <onboarding@resend.dev>";
      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: data.email,
        subject: `New Enrollment Application — ${studentName} (${data.gradeApplying || "grade n/a"})`,
        html: `<p>A new enrollment application has been submitted.</p>
          <ul>
            <li><strong>Student:</strong> ${escapeHtml(studentName)}</li>
            <li><strong>Grade applying:</strong> ${escapeHtml(data.gradeApplying || "")}</li>
            <li><strong>Parent email:</strong> ${escapeHtml(data.email)}</li>
            <li><strong>Best phone:</strong> ${escapeHtml(data.cellPhone || data.homePhone || "")}</li>
          </ul>
          <p>The completed application is attached as a PDF.</p>`,
        attachments: [{ filename: fileName, content: pdfBase64 }],
      });
      emailed = !error;
      if (error) console.error("Resend error", error);
    } catch (e) {
      console.error("Email send failed", e);
    }
  }

  return Response.json({ ok: true, emailed, pdfBase64, fileName });
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] || c));
}
