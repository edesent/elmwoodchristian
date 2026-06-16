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
        subtitle="A few short steps. Your application is saved to a PDF and sent to our office."
      />
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <EnrollmentForm />
        </div>
      </section>
    </>
  );
}
