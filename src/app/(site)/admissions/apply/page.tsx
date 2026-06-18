import type { Metadata } from "next";
import SubpageHero from "@/components/SubpageHero";
import EnrollmentForm from "@/components/EnrollmentForm";

export const metadata: Metadata = {
  title: "Apply for Enrollment",
  description:
    "Apply online to Elmwood Christian Academy in Brighton, Colorado. Complete our enrollment application step by step—we'll follow up about placement testing and a personal interview.",
};

export default function ApplyPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Admissions"
        title="Application for Enrollment"
        subtitle="A few short steps — your application goes straight to our office."
      />
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Old-fashioned / printable option */}
          <div className="mb-12 max-w-7xl mx-auto rounded-sm border border-line bg-stone p-6 sm:flex sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-serif text-xl text-ink">Prefer to fill it out by hand?</p>
              <p className="mt-1 text-sm leading-relaxed text-text-body">
                Download the printable application and mail it, fax it to
                720.685.9005, or drop it by the school office at 13100 E 144th
                Ave, Brighton, CO 80601.
              </p>
            </div>
            <a
              href="/forms/enrollment-1st-12th.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-flex shrink-0 items-center justify-center border border-crimson/30 text-crimson font-semibold px-6 py-3 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
            >
              Download PDF Form
            </a>
          </div>
          <EnrollmentForm />
        </div>
      </section>
    </>
  );
}
