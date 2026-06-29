import type { Metadata } from "next";
import SubpageHero from "@/components/SubpageHero";
// Online enrollment is temporarily disabled — showing a "coming soon" notice.
// Re-enable by restoring this import and the <EnrollmentForm /> usage below.
// import EnrollmentForm from "@/components/EnrollmentForm";

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
        subtitle="Download our application below to get started — online enrollment is coming soon."
      />
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Printable application — current way to apply */}
          <div className="mb-12 max-w-7xl mx-auto rounded-sm border border-line bg-stone p-6 sm:flex sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-serif text-xl text-ink">Apply with our printable form</p>
              <p className="mt-1 text-sm leading-relaxed text-text-body">
                Download the application and mail it, fax it to
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

          {/* Online enrollment — coming soon */}
          <div className="mx-auto max-w-3xl rounded-sm border border-line bg-paper p-10 text-center">
            <p className="eyebrow text-crimson">Online Enrollment</p>
            <span className="rule mt-4 mx-auto" />
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-ink leading-tight">
              Coming soon
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-body">
              Our step-by-step online application is on the way. For now, please
              use the printable form above — or call the school office at
              303.659.3818 and we&rsquo;ll be glad to walk you through enrollment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
