import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Bible Curriculum",
  description:
    "This year Elmwood Christian Academy students are studying Freedom from Bondage, a ten-lesson guide through the book of Exodus, as part of our daily Bible instruction.",
};

export default function BibleCurriculumPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Academics"
        title="Bible Curriculum"
        subtitle="Daily instruction in God's Word, for every grade level."
      />

      {/* Intro + this year's study */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_0.8fr] gap-10 md:gap-16 items-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">This Year&rsquo;s Study</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Freedom from Bondage
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Every grade level at Elmwood receives Bible instruction as a
              regular part of the school day. This year our students are
              working through <em>Freedom from Bondage</em>, a study guide by
              Paul Chappell, published by Striving Together Publications.
            </p>
            <div className="mt-8 border-l-2 border-crimson/70 pl-6 py-1">
              <p className="font-serif italic text-xl md:text-2xl text-ink leading-relaxed">
                The Israelites stood trapped between Pharaoh&rsquo;s army and
                the waters of the Red Sea&mdash;until God parted the sea,
                carried His people across on dry ground, and delivered them
                from their enemies.
              </p>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Over ten lessons, the guide walks students through the book of
              Exodus and the larger story it tells: how God brought Israel out
              of slavery, sustained them through the wilderness, and led them,
              step by step, toward the Promised Land. It is a story about a
              God who keeps His word&mdash;who sees His people trapped, and
              acts.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Students are invited to see themselves in that story. Everyone,
              at some point, feels trapped by a difficulty, a struggle, or a
              sin they can&rsquo;t seem to escape. This study encourages
              students to bring that honestly before God, trusting that the
              same Lord who parted the Red Sea still goes before His people
              and walks with them through whatever lies ahead&mdash;turning
              obstacles into opportunities to see His power at work.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Each week&rsquo;s lesson includes five short personal devotions,
              along with thought-provoking questions and space for students to
              journal their own reflection and application&mdash;building a
              habit of daily time in God&rsquo;s Word that extends well beyond
              the classroom.
            </p>
            <div className="mt-8">
              <Link
                href="https://strivingtogether.com/products/freedom-from-bondage-study-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-crimson font-semibold uppercase tracking-[0.12em] text-sm"
              >
                View the Publisher&rsquo;s Page &rarr;
              </Link>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={120}>
            <Image
              src="/academics/freedom-from-bondage-instagramtitle.jpg"
              alt="Freedom from Bondage Bible study guide, this year's Bible curriculum for Elmwood students"
              width={800}
              height={1000}
              className="w-full max-w-md mx-auto h-auto rounded-sm shadow-md"
            />
          </AnimateOnScroll>
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
