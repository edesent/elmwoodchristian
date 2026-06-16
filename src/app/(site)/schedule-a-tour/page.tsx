import type { Metadata } from "next";
import SubpageHero from "@/components/SubpageHero";
import TourForm from "@/components/TourForm";

export const metadata: Metadata = {
  title: "Schedule a Tour",
  description:
    "Schedule a personal campus tour of Elmwood Christian Academy in Brighton, Colorado. Meet our teachers, see our students at work, and find out if Elmwood is the right fit for your family.",
};

export default function ScheduleTourPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Visit Us"
        title="Schedule a tour"
        subtitle="The best way to know Elmwood is to walk our halls and meet our teachers."
      />
      <section className="bg-paper py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg leading-relaxed text-text-body">
            Tell us a little about your family and when you&rsquo;d like to visit.
            We&rsquo;ll follow up to confirm a time and answer any questions—there&rsquo;s
            no obligation, just a chance to see Elmwood for yourself.
          </p>
          <div className="mt-10">
            <TourForm />
          </div>
        </div>
      </section>
    </>
  );
}
