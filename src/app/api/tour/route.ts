import { Resend } from "resend";

export const runtime = "nodejs";

function escapeHtml(s: string): string {
  return (s || "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] || c));
}

const FIELDS: { name: string; label: string }[] = [
  { name: "parentName", label: "Parent/guardian" },
  { name: "email", label: "Email" },
  { name: "phone", label: "Phone" },
  { name: "childGrades", label: "Grade(s) of interest" },
  { name: "numChildren", label: "Number of children" },
  { name: "preferredDate", label: "Preferred date" },
  { name: "altDate", label: "Alternate date" },
  { name: "preferredTime", label: "Preferred time" },
  { name: "hearAbout", label: "How they heard about us" },
  { name: "message", label: "Message" },
];

export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = (await req.json())?.data || {};
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (!data.parentName || !data.email || !data.phone) {
    return Response.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  let emailed = false;
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const to = process.env.ENROLL_TO || "office@elmwoodbaptist.org";
      const from = process.env.ENROLL_FROM || "Elmwood Admissions <onboarding@resend.dev>";
      const rows = FIELDS.filter((f) => (data[f.name] || "").trim())
        .map((f) => `<li><strong>${f.label}:</strong> ${escapeHtml(data[f.name])}</li>`)
        .join("");
      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: data.email,
        subject: `Tour Request — ${data.parentName}${data.childGrades ? ` (${data.childGrades})` : ""}`,
        html: `<p>A family has requested a campus tour.</p><ul>${rows}</ul>
          <p>Reply to this email to reach the family directly.</p>`,
      });
      emailed = !error;
      if (error) console.error("Resend error", error);
    } catch (e) {
      console.error("Tour email failed", e);
    }
  }

  return Response.json({ ok: true, emailed });
}
