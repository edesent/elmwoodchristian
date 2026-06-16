import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to enroll at Elmwood Christian Academy in Brighton, Colorado: apply online, pay the registration fee, complete placement testing and a family interview, and submit records. Preschool through 12th grade.",
};

const steps = [
  {
    n: "01",
    title: "Apply",
    body: "Complete our online Application for Enrollment, or download the printable form. It only takes a few minutes and is sent straight to our office.",
  },
  {
    n: "02",
    title: "Registration Fee",
    body: "A non-refundable registration fee of $75 per student accompanies the application. See the Tuition Information sheet for current rates and payment plans.",
  },
  {
    n: "03",
    title: "Placement Testing",
    body: "Students entering 5th grade or higher complete a diagnostic test in each subject ($25, due at testing) so we can place them at their exact academic level.",
  },
  {
    n: "04",
    title: "Family Interview",
    body: "All new students and parents meet with the principal—often scheduled together with testing—to get to know one another and answer your questions.",
  },
  {
    n: "05",
    title: "Submit Records",
    body: "Bring your child's birth certificate, current immunization record, and most recent report card and achievement test results to the testing appointment.",
  },
  {
    n: "06",
    title: "Final Registration",
    body: "Once the registration fee is paid, testing is complete, and all records are received, your child's enrollment is finalized. Welcome to Elmwood!",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Admissions"
        title="Welcome your child to Elmwood"
        subtitle="A simple, personal process—because choosing a school is a big decision."
      />

      {/* Apply CTA */}
      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Start Here</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Apply online in minutes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body max-w-2xl mx-auto">
              Our online application walks you through each section and creates a
              completed PDF that&rsquo;s sent to our office. Prefer paper? You can
              download the printable forms below.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                Start the Application
              </Link>
              <a
                href="/forms/enrollment-1st-12th.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-crimson/30 text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
              >
                Download Printable Form
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl">
            <p className="eyebrow text-crimson">How to Enroll</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Six steps to enrollment
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.n} delay={i * 80}>
                <div className="h-full bg-paper border border-line rounded-sm p-8">
                  <div className="font-serif text-4xl text-crimson/80">{s.n}</div>
                  <div className="mt-3 h-px w-10 bg-crimson/40" />
                  <h3 className="mt-4 font-serif text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-text-body">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Required documents + fees */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">What to Bring</p>
            <h3 className="mt-4 font-serif text-3xl text-ink">Required documents</h3>
            <ul className="mt-5 space-y-3 text-text-body">
              {[
                "Student's birth certificate",
                "Current immunization record (or signed exemption)",
                "Most recent report card",
                "Most recent achievement test results",
              ].map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-crimson mt-1">—</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <p className="eyebrow text-crimson">Fees &amp; Tuition</p>
            <h3 className="mt-4 font-serif text-3xl text-ink">Costs at a glance</h3>
            <ul className="mt-5 space-y-3 text-text-body">
              <li className="flex justify-between border-b border-line pb-2 gap-4">
                <span>Registration fee (per student, non-refundable)</span>
                <span className="font-semibold text-ink whitespace-nowrap">$75</span>
              </li>
              <li className="flex justify-between border-b border-line pb-2 gap-4">
                <span>Diagnostic testing (5th grade &amp; up)</span>
                <span className="font-semibold text-ink whitespace-nowrap">$25</span>
              </li>
              <li className="flex justify-between border-b border-line pb-2 gap-4">
                <span>Tuition (by grade &amp; payment plan)</span>
                <span className="font-semibold text-ink whitespace-nowrap">See sheet</span>
              </li>
            </ul>
            <p className="mt-5 text-sm text-text-muted leading-relaxed">
              Three payment plans are available (10-month, 12-month, or paid in
              full with a 5% discount).
            </p>
            <a
              href="/forms/tuition-information.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-crimson font-semibold uppercase tracking-[0.12em] text-sm"
            >
              Tuition Information (PDF) →
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="bg-stone py-24 md:py-28 border-t border-line">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Visit &amp; Contact</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              We&rsquo;d love to hear from you
            </h2>
            <dl className="mt-9 space-y-6 text-text-body">
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">Campus</dt>
                <dd className="mt-1 text-lg">13100 E 144th Ave<br />Brighton, CO 80601</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">Phone</dt>
                <dd className="mt-1 text-lg">
                  <a href="tel:+13036593818" className="hover:text-crimson transition-colors">303.659.3818</a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href="mailto:office@elmwoodchristianacademy.org" className="hover:text-crimson transition-colors break-words">
                    office@elmwoodchristianacademy.org
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">Office Hours</dt>
                <dd className="mt-1 text-lg">Monday–Friday · 7:30 AM – 3:30 PM</dd>
              </div>
            </dl>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="overflow-hidden rounded-sm border border-line shadow-[0_18px_50px_rgba(32,29,27,0.10)]">
              <iframe
                title="Elmwood Christian Academy location"
                src="https://www.google.com/maps?q=13100+E+144th+Ave,+Brighton,+CO+80601&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
