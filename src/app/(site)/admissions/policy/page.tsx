import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Admissions Policy",
  description:
    "The admissions policy and non-discrimination statement of Elmwood Christian Academy.",
};

export default function AdmissionsPolicyPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Admissions"
        title="Admissions Policy"
        subtitle="Our commitment to families and our standards as a Christian school."
      />

      {/* Policy statement */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Non-Discrimination &amp; Admissions</p>
            <span className="rule mt-4" />
            <p className="mt-7 text-lg leading-relaxed text-text-body">
              Elmwood Christian Academy admits students of any race, color, or
              national origin to all the rights, privileges, programs, and
              activities generally made available to students at the school, and
              does not discriminate on the basis of race, color, or national or
              ethnic origin in its educational policies, admissions policies, or
              athletic and other school-administered programs.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              As a private institution, Elmwood reserves the right to refuse
              admission to anyone who fails to meet the entrance requirements or
              who professes a lifestyle contrary to that defined by Scripture,
              and to suspend or expel any student who violates the school&rsquo;s
              standards of conduct.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone py-20 md:py-24 border-y border-line">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
              Ready to take the next step?
            </h2>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                Begin Enrollment
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center border border-crimson/40 text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
              >
                Back to Admissions
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
