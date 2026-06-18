import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "The statement of faith of Elmwood Christian Academy, a ministry of Elmwood Baptist Church.",
};

const beliefs = [
  {
    lead: "The Scriptures.",
    body: "The verbal inspiration and authority of the Scriptures.",
  },
  {
    lead: "God&rsquo;s revelation.",
    body: "The Bible reveals God, the fall of man, the way of salvation, and God&rsquo;s plan for the ages.",
  },
  {
    lead: "The Trinity.",
    body: "One God, eternally existing in three persons: the Father, the Son, and the Holy Spirit.",
  },
  {
    lead: "Jesus Christ.",
    body: "The deity, virgin birth, and bodily resurrection of Jesus Christ.",
  },
  {
    lead: "Salvation by grace.",
    body: "Salvation is by grace&mdash;plus nothing and minus nothing.",
  },
  {
    lead: "Justification by faith.",
    body: "Justification by faith alone through the merit of the Lord Jesus Christ.",
  },
  {
    lead: "His return.",
    body: "The visible, personal, and pre-millennial return of Jesus Christ.",
  },
  {
    lead: "Eternity.",
    body: "The everlasting conscious blessedness of the saved and the everlasting conscious punishment of the lost.",
  },
  {
    lead: "The preserved Word.",
    body: "The King James Version of the Bible as the preserved Word of God.",
  },
];

export default function BeliefsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="What We Believe"
        title="Our statement of faith"
        subtitle="The convictions beneath everything we teach."
      />

      {/* Statement of faith */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Our Convictions</p>
            <span className="rule mt-4" />
            <p className="mt-7 text-lg leading-relaxed text-text-body">
              Elmwood Christian Academy is a ministry of Elmwood Baptist Church.
              Our teaching flows from these core convictions:
            </p>
          </AnimateOnScroll>

          <ul className="mt-12 space-y-7">
            {beliefs.map((b, i) => (
              <AnimateOnScroll key={b.lead} delay={i * 60}>
                <li className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-crimson" />
                  <p className="text-lg leading-relaxed text-text-body">
                    <span
                      className="font-semibold text-ink"
                      dangerouslySetInnerHTML={{ __html: b.lead }}
                    />{" "}
                    <span dangerouslySetInnerHTML={{ __html: b.body }} />
                  </p>
                </li>
              </AnimateOnScroll>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing note */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="text-lg leading-relaxed text-text-body">
              As a ministry of Elmwood Baptist Church, the Academy comes
              alongside Christian families who desire a Christ-centered education
              for their children.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            See where your child belongs
          </h2>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-a-tour"
              className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/admissions/apply"
              className="inline-flex items-center justify-center border border-crimson/30 text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
            >
              Start the Application
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
