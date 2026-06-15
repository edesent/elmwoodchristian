import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Elmwood Christian Academy offers a Christ-centered, mastery-based education from Early Enrichment through 12th grade in Brighton, Colorado—individualized learning that builds a lasting foundation.",
};

const levels = [
  {
    grades: "Ages 2–3",
    name: "Early Enrichment",
    body: "A warm, nurturing introduction to school. Little ones grow in language, motor skills, and social confidence through play, story, and song—surrounded by caring teachers.",
  },
  {
    grades: "PreK–Kindergarten",
    name: "Preschool & Kindergarten",
    body: "Phonics, early reading, numbers, and the joy of discovery. We lay strong academic foundations while nurturing a child's natural wonder and love for learning.",
  },
  {
    grades: "Grades 1–6",
    name: "Elementary",
    body: "Students master the essentials—reading, writing, mathematics, science, and history—through an individualized, mastery-based curriculum that ensures no gaps are left behind.",
  },
  {
    grades: "Grades 7–12",
    name: "Junior & Senior High",
    body: "A college-preparatory program that challenges students academically while deepening their faith and character—preparing graduates for college, career, and a life of purpose.",
  },
];

const pillars = [
  {
    title: "Mastery, not memorization",
    body: "Students advance only once they have genuinely mastered the material. Learning is broken into achievable goals, so every step rests on a solid foundation.",
  },
  {
    title: "An individualized pace",
    body: "Each student works at the level that fits them—reinforcing where needed and accelerating where ready. Progress is personal, measurable, and celebrated daily.",
  },
  {
    title: "Faith woven throughout",
    body: "Scripture and biblical character are integrated across every subject, so students learn to think Christianly about the whole of life.",
  },
  {
    title: "Diligence and ownership",
    body: "Setting goals, meeting them, and taking responsibility become daily habits—building the self-discipline that serves students for a lifetime.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Academics"
        title="A foundation built to last"
        subtitle="Christ-centered, mastery-based learning from preschool through twelfth grade."
      />

      {/* Approach */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl">
            <p className="eyebrow text-crimson">Our Approach</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Mastery-based learning, tailored to every student
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Elmwood uses a proven, individualized curriculum that lets each
              student learn at their own pace and truly master each concept before
              moving on. Instead of pushing the whole class forward at once, we
              meet every child where they are—and take them as far as they can go.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 90}>
                <div className="h-full border-l-2 border-crimson/70 pl-6 py-1">
                  <h3 className="font-serif text-2xl text-ink">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-text-body">{p.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-crimson">Programs</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Every stage, under one roof
            </h2>
            <span className="rule mt-7" />
          </AnimateOnScroll>

          <div className="mt-16 space-y-px bg-line border border-line">
            {levels.map((l, i) => (
              <AnimateOnScroll key={l.name} delay={i * 80}>
                <div className="bg-paper grid md:grid-cols-[260px_1fr] gap-6 md:gap-10 p-8 md:p-10 hover:bg-white transition-colors">
                  <div>
                    <div className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                      {l.grades}
                    </div>
                    <h3 className="mt-2 font-serif text-3xl text-ink leading-snug">
                      {l.name}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-text-body md:text-lg md:self-center">
                    {l.body}
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
          <p className="eyebrow text-crimson">Ready to Learn More?</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
            Find the right starting point
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-text-body">
            Tell us about your child and we will help you understand where they
            would begin and how Elmwood can serve your family.
          </p>
          <div className="mt-9">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
            >
              Begin Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
