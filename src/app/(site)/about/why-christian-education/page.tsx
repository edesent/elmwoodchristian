import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Why Christian Education",
  description: "Why a Christ-centered education matters.",
};

const sections = [
  {
    heading: "The Vision",
    body: "Christian parents desire an education aligned with biblical values—where Jesus Christ, God, and the Bible are honored throughout all learning, and where children are taught the truth rather than facing a conflict between what is taught at home and in the classroom.",
  },
  {
    heading: "The Purpose",
    body: "While many schools prepare students primarily for careers and university, Christian education helps children understand their God-given gifts and abilities so as to serve Him and others in society—pursuing the wisdom from above, which is pure, peace-loving, gentle, and full of mercy and good fruit.",
  },
  {
    heading: "The Role of Parents",
    body: "Parents are responsible for raising and educating their children; in fact, 85% of parents believe they have the primary responsibility for teaching their children about their faith. A Christian school is a partner that helps parents fulfill this responsibility—never a replacement for it.",
  },
  {
    heading: "The Influence of Teachers",
    body: "Students spend roughly 1,200 hours a year in school over twelve years. That makes a teacher’s influence substantial. Christian teachers integrate a biblical perspective throughout every subject—not merely in an isolated religion class.",
  },
  {
    heading: "Education Is Not Neutral",
    body: "Every curriculum reflects underlying beliefs. Schools that claim neutrality still rest on a humanistic foundation in which man, rather than God, is treated as primary. Christian education deliberately integrates a biblical worldview throughout all subjects.",
  },
  {
    heading: "Salt and Light",
    body: "Far from isolating children, the school years are preparation for a lifetime of Christian witness—grounding that enables students to live as salt and light more effectively.",
  },
  {
    heading: "The Real World",
    body: "Like a greenhouse that nurtures young plants so they can thrive outdoors, a Christian school provides a supportive environment that prepares students to engage the world from a biblical perspective.",
  },
  {
    heading: "Counting the Cost",
    body: "A Christian education requires financial sacrifice, but it reflects a family’s priorities. As Jesus taught, ‘where your treasure is, there will your heart be also.’",
  },
];

export default function WhyChristianEducationPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Why Christian Education"
        title="More than academics"
        subtitle="Forming how students see God, themselves, and the world."
      />

      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Why It Matters</p>
            <span className="rule mt-4" />
          </AnimateOnScroll>

          <div className="mt-12 space-y-12">
            {sections.map((s, i) => (
              <AnimateOnScroll key={s.heading} delay={i * 50}>
                <div>
                  <h2 className="font-serif text-3xl text-ink leading-tight">
                    {s.heading}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-text-body">
                    {s.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone py-20 md:py-24 border-t border-line">
        <div className="max-w-3xl mx-auto px-6 text-center">
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
