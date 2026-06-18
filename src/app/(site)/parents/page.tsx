import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Parents",
  description:
    "Parent resources for Elmwood Christian Academy in Brighton, Colorado: daily pick-up and carpool procedures, authorized pick-up, school forms, and our dress code.",
};

const procedures = [
  {
    title: "Afternoon pick-up",
    body: "Please pick up and be off campus by 3:15 PM each day so staff can return to after-school duties. Students remaining after 3:15 PM must be supervised or enrolled in After-Care.",
  },
  {
    title: "Safe driving",
    body: "Student safety is a high priority. The parking-lot speed limit is 10 miles per hour; violators may be subject to fines and removal from campus.",
  },
  {
    title: "Carpool",
    body: "We sometimes need help transporting a couple of students right after school. If you can help, please contact the office at 303.659.3818.",
  },
  {
    title: "Authorized pick-up",
    body: "New families must submit emergency-contact information by August 30th. Every student requires an authorized pick-up form, available from the school office.",
  },
];

const forms = [
  "2025–2026 Re-Enrollment Forms",
  "Supply Lists for All Grades",
  "Elmwood Family Handbook",
];

export default function ParentsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Parent&rsquo;s Corner"
        title="Parent resources"
        subtitle="Everything you need for the school day."
      />

      {/* Welcome */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Welcome</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              In good hands each day
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Dear Elmwood families&mdash;know that your children are in good
              hands each day, under the caring and watchful eye of teachers who
              love God and want to see your kids grow in the nurture and
              admonition of the Lord.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Daily procedures */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Daily Procedures</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              How the school day flows
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {procedures.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 80}>
                <div className="h-full bg-paper border border-line rounded-sm p-8">
                  <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                  <div className="mt-3 h-px w-10 bg-crimson/40" />
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-text-body">
                    {p.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* School forms */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">School Forms</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Forms &amp; handbooks
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              The following are available from the school office:
            </p>
            <ul className="mt-8 space-y-5">
              {forms.map((f) => (
                <li key={f} className="flex gap-4 text-lg leading-relaxed text-text-body">
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-crimson" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Dress code teaser */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Dress Code</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Honoring to Christ
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Our dress code reflects our conviction that each student&rsquo;s
              appearance should be such that Christ would be pleased and honored.
            </p>
            <div className="mt-9">
              <Link
                href="/parents/dress-code"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                View the Dress Code
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Questions?</p>
            <span className="rule mt-4 mx-auto" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              We&rsquo;re here to help
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body max-w-2xl mx-auto">
              Reach out to the school office anytime, or come see Elmwood in
              person on a campus tour.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                Schedule a Tour
              </Link>
              <a
                href="tel:+13036593818"
                className="inline-flex items-center justify-center border border-crimson/30 text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
              >
                Call the Office
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
