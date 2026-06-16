import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQS } from "@/components/faqData";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Elmwood Christian Academy in Brighton, Colorado—grades served, curriculum, accreditation, tuition, class size, and how to enroll.",
};

export default function FaqPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Questions & Answers"
        title="Frequently asked questions"
        subtitle="Everything you need to know about an Elmwood education."
      />

      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <FaqAccordion items={FAQS} accent="crimson" />
        </div>
      </section>

      <section className="bg-stone py-20 md:py-24 border-t border-line">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Still have questions?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-body">
            We'd love to talk. Reach out and we'll answer anything we can—and
            help you plan a visit.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-a-tour"
              className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
            >
              Schedule a Tour
            </Link>
            <a
              href="tel:+13036593818"
              className="inline-flex items-center justify-center border border-crimson/30 text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
            >
              Call 303.659.3818
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
