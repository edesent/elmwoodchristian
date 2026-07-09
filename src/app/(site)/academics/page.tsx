import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Christ-centered, mastery-based learning from preschool through twelfth grade at Elmwood Christian Academy—every subject taught from a biblical worldview and integrated with the truth of God's Word.",
};

const levels = [
  {
    grades: "Ages 2–3",
    name: "Early Enrichment",
    body: "A preschool environment filled with safety, comfort, and creativity. We emphasize social-emotional development and problem-solving through colors, shapes, beginning literacy, math and science concepts, imaginative play, art, music, games, and field trips—with the ABeka curriculum introducing letters and numbers and a foundation in the Bible.",
  },
  {
    grades: "PreK (K-4)",
    name: "Kindergarten",
    body: "A four-year-old classroom built on adventure, friendships, and fun—matching or exceeding traditional full-day kindergarten. Students learn to write numbers and letters, begin phonics-based reading (reading simple words by mid-February), and study the Bible from creation through the resurrection of Jesus Christ.",
  },
  {
    grades: "K-5",
    name: "Advanced Kindergarten",
    body: "Designed to challenge five-year-olds and prepare them for elementary school with a strong foundation in reading and writing. The ABeka curriculum covers vowel and consonant sounds, blends, and sentence comprehension; number skills through 100 with simple addition, subtraction, time, and money; and Bible doctrine with historical accounts from Scripture.",
  },
  {
    grades: "Grades 1–6",
    name: "Elementary",
    body: "A firm foundation of basic skills. Students receive instruction in Language, Reading, Vocabulary, Spelling, Writing, Handwriting, Math, Science, Bible, and Social Studies, as well as Computers, Art, Music, and Physical Education—using curriculum from ABeka and Accelerated Christian Education.",
  },
  {
    grades: "Grades 7–12",
    name: "Junior & Senior High",
    body: "As students progress, Elmwood challenges them to achieve more—becoming high-functioning and independent, and well prepared for college or the workforce without the remediation many students require.",
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

      {/* Overview */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-center">
          <AnimateOnScroll>
            <Image
              src="/brand/newer-crest.png"
              alt="Elmwood Christian Academy crest"
              width={154}
              height={189}
              className="w-full max-w-[16rem] mx-auto h-auto"
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <p className="eyebrow text-crimson">Overview</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Excellence, integrated with the Word of God
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Elmwood strives to maintain a high quality of education for all
              students, challenging them to excel across a wide variety of
              academic disciplines. Our curriculum draws on several
              publishers&mdash;all integrated with the truth of God&rsquo;s
              Word&mdash;and our teachers are highly trained in the subjects they
              teach. Each subject is taught from a Christian worldview, so
              students learn to evaluate facts in the light of biblical
              revelation.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              We believe a strong education balanced with traditional moral
              standards is the prerequisite for success in business and life.
              Whether preparing students for a career or for higher education,
              Elmwood is committed to quality preparation for the future.
            </p>
            <div className="mt-8 border-l-2 border-crimson/70 pl-6 py-1">
              <p className="font-serif italic text-xl md:text-2xl text-ink leading-relaxed">
                Elmwood students have consistently scored well above the national
                norms on the Stanford Achievement Testing program.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Approach / Mastery */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Our Approach</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Mastery-based learning
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Rather than advancing students by age, Elmwood uses mastery-based
              learning: students demonstrate true mastery of material before
              moving forward. Modern mastery learning was pioneered by Benjamin
              Bloom of the University of Chicago, who observed that while students
              learn at different rates, virtually all learn well when given the
              necessary time and appropriate conditions.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Teachers organize content into short units; after instruction, a
              formative assessment (not a final grade) identifies gaps, students
              receive individualized corrective work, then take a parallel
              assessment. Students must demonstrate mastery&mdash;passing at 80%
              or above&mdash;to advance. We use the A Beka curriculum in the
              youngest grades and Accelerated Christian Education (A.C.E.) from
              the upper-elementary years through 12th grade.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <div className="mt-9 flex flex-col sm:flex-row gap-6">
              <Link
                href="/academics/student-conventions"
                className="inline-flex items-center gap-2 text-crimson font-semibold uppercase tracking-[0.12em] text-sm"
              >
                Student Conventions &rarr;
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* By level */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-crimson">Programs</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              One school, every stage
            </h2>
            <span className="rule mt-7" />
          </AnimateOnScroll>

          <div className="mt-16 space-y-px bg-line border border-line">
            {levels.map((l, i) => (
              <AnimateOnScroll key={l.name} delay={i * 90}>
                <div className="bg-paper grid md:grid-cols-[260px_1fr] gap-6 md:gap-10 p-8 md:p-10 hover:bg-white transition-colors">
                  <div>
                    <div className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                      {l.grades}
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-ink leading-snug">
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
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Ready to Learn More?</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              See it for yourself
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Visit our campus, meet our teachers, and discover where your child
              would begin and how Elmwood can serve your family.
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
