import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elmwood Christian Academy has helped Christian parents educate their children in a loving, Christ-centered environment since 1973. Learn our story, mission, and beliefs.",
};

const levels = [
  {
    title: "Knowledge",
    body: "The facts and information: the who, what, where, and when.",
  },
  {
    title: "Understanding",
    body: "The relationships between facts, culture, science, and history: the why and how.",
  },
  {
    title: "Wisdom",
    body: "Most curriculum publishers focus on knowledge. Our program is distinctive in its inclusion of wisdom as a deliberate aspect of the learning process.",
  },
];

const explore = [
  {
    href: "/about/beliefs",
    title: "What We Believe",
    body: "Our statement of faith and convictions.",
  },
  {
    href: "/about/why-christian-education",
    title: "Why Christian Education",
    body: "Why a Christ-centered education matters.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Our Story"
        title="Faithful education since 1973"
        subtitle="Helping Christian parents raise the next generation in wisdom, character, and faith."
      />

      {/* Story */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Established 1973</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Half a century of faithful teaching
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="text-lg leading-relaxed text-text-body">
              For more than fifty years, families in the Brighton area have
              trusted Elmwood to educate their children with academic excellence
              and unwavering faith. Elmwood Christian Academy is a ministry of
              Elmwood Baptist Church, founded in 1973. As we step into our next
              chapter, our mission has not changed: to help Christian parents
              educate their children in a loving, caring, Christ-centered
              environment.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission band */}
      <section className="bg-crimson text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="eyebrow text-white/55">Our Mission</p>
          <p className="mt-6 font-serif text-3xl md:text-4xl leading-[1.35]">
            The mission of Elmwood Christian Academy is to lead students to a
            close and personal relationship with our Lord and Saviour, Jesus
            Christ; to train up the next generation of children for Christ; to
            provide a Biblically based, individualized education; and to prepare
            and guide all students through an arduous program of academic
            excellence by Christ-centered teaching, application, and example.
          </p>
        </div>
      </section>

      {/* The Elmwood Distinctive — Three Levels of Learning */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-crimson">The Elmwood Distinctive</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Three levels of learning
            </h2>
            <span className="rule mt-7" />
            <p className="mt-7 text-lg leading-relaxed text-text-body">
              On the surface, most schools look alike. Elmwood&rsquo;s approach
              to learning is different. For over forty years we have been at the
              forefront of Biblical educational reform, teaching students to see
              life from God&rsquo;s point of view, take responsibility for their
              own learning, and walk in godly wisdom and character.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            {levels.map((l, i) => (
              <AnimateOnScroll key={l.title} delay={i * 100}>
                <div className="h-full bg-paper border border-line rounded-sm p-9">
                  <h3 className="font-serif text-2xl text-ink">{l.title}</h3>
                  <div className="mt-3 h-px w-10 bg-crimson/40" />
                  <p className="mt-4 leading-relaxed text-text-body">{l.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <p className="mt-12 text-lg leading-relaxed text-text-body text-center max-w-7xl mx-auto">
              Throughout the curriculum, 60 character traits&mdash;including
              kindness, loyalty, and honesty&mdash;are woven into daily lessons,
              so students don&rsquo;t just get by; they get ahead.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Accreditation / Leadership */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Accreditation</p>
            <h3 className="mt-4 font-serif text-3xl text-ink">
              Recognized &amp; accountable
            </h3>
            <p className="mt-4 leading-relaxed text-text-body">
              Elmwood Christian Academy is fully accredited through the National
              Association of Private Schools&mdash;a voluntary mark of quality
              meaning the school fulfills its stated purpose with integrity and
              excellence, employs trained teachers, and is committed to
              continuous improvement, so families can enroll with confidence.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="eyebrow text-crimson">Leadership</p>
            <h3 className="mt-4 font-serif text-3xl text-ink">
              A word from our Principal
            </h3>
            <p className="mt-4 leading-relaxed text-text-body">
              We realize that every mom and dad want the very best for their
              children. Elmwood unites with families to educate the whole
              child&mdash;to honor God, love others, and walk in biblical truth.
              Our desire is to see your child grow as a result of our
              staff&rsquo;s teamwork with you.
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.12em] text-crimson font-semibold">
              &mdash; Mr. Rick Lopez, Principal / Administrator
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Explore further */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl">
            <p className="eyebrow text-crimson">Explore Further</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Learn more about Elmwood
            </h2>
          </AnimateOnScroll>
          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {explore.map((e, i) => (
              <AnimateOnScroll key={e.href} delay={i * 100}>
                <Link
                  href={e.href}
                  className="group block h-full bg-paper border border-line rounded-sm p-9 hover:border-crimson/40 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-ink">{e.title}</h3>
                  <p className="mt-3 leading-relaxed text-text-body">{e.body}</p>
                  <span className="inline-flex items-center gap-2 mt-5 text-crimson font-semibold uppercase tracking-[0.12em] text-sm">
                    Read more →
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
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
