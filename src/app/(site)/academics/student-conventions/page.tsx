import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Student Conventions",
  description:
    "Through Accelerated Christian Education, Elmwood Christian Academy students develop leadership skills and God-given gifts at Regional and International Student Conventions.",
};

const suggestions = [
  {
    n: "01",
    title: "Select your event",
    body: "Choose from Academics, Athletics, Exhibits, Music, and Platform events that develop your gifts for Christian service.",
  },
  {
    n: "02",
    title: "Plan a schedule",
    body: "Use the Student Preparation Handbook to plan the steps for a successful entry.",
  },
  {
    n: "03",
    title: "Seek advice",
    body: "Consult godly adults in your family and church who have expertise in your chosen area.",
  },
  {
    n: "04",
    title: "Practice, practice, practice",
    body: "Practice in settings similar to the actual competition, such as before your church or school group.",
  },
  {
    n: "05",
    title: "Pray",
    body: "Pray that your performance brings glory to the Lord and that lives will be transformed.",
  },
  {
    n: "06",
    title: "Do your best",
    body: "Good, better, best; never let it rest, till your good is better, and your better is best.",
  },
  {
    n: "07",
    title: "Have confidence",
    body: "Commitment to practice matters more than the size of your school or your age.",
  },
];

export default function StudentConventionsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Academics"
        title="Regional & International Student Conventions"
        subtitle="Developing God-given gifts for a dynamic ministry."
      />

      {/* Intro */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Student Conventions</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              A stage to develop your gifts
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Through Accelerated Christian Education, Elmwood gives Christian
              young people the opportunity to develop leadership skills through
              Regional Student Conventions and the International Student
              Convention. A student&rsquo;s journey begins at the Regional
              level&mdash;a challenging, inspirational, and fun-filled event where
              students develop their gifts and talents. Choose from over 140
              events in five categories: Music, Speech/Drama, Athletics, Arts,
              and Academics. Conventions are for youth 13 years of age and older.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Music", "Speech/Drama", "Athletics", "Arts", "Academics"].map(
                (c) => (
                  <span
                    key={c}
                    className="bg-stone border border-line rounded-sm px-3 py-1 text-sm"
                  >
                    {c}
                  </span>
                ),
              )}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Seven suggestions */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl">
            <p className="eyebrow text-crimson">Getting Started</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Seven suggestions for getting started
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {suggestions.map((s, i) => (
              <AnimateOnScroll key={s.n} delay={i * 90}>
                <div className="h-full bg-paper border border-line rounded-sm p-8">
                  <div className="font-serif text-4xl text-crimson/80">
                    {s.n}
                  </div>
                  <div className="mt-3 h-px w-10 bg-crimson/40" />
                  <h3 className="mt-4 font-serif text-2xl text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-text-body">
                    {s.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Ready to Learn More?</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Come see Elmwood in person
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Visit our campus and discover how Elmwood helps students develop
              their God-given gifts for a lifetime of Christian service.
            </p>
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
                Apply Now
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
