import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQS } from "@/components/faqData";

export const metadata: Metadata = {
  title: "Elmwood Christian Academy",
  description:
    "A Christ-centered, college-preparatory school in Brighton, Colorado—preschool through 12th grade since 1973.",
  robots: { index: false, follow: false },
};

const stories = [
  {
    src: "/img/life-1.jpg",
    tag: "Academics",
    title: "Why mastery learning changes everything",
    body: "How our individualized, mastery-based approach lets every student build on a foundation that truly holds.",
  },
  {
    src: "/img/feature.jpg",
    tag: "Faith & Character",
    title: "Education for the whole person",
    body: "At Elmwood, Scripture isn't a single class—it's the lens for every subject and every school day.",
  },
  {
    src: "/img/life-3.jpg",
    tag: "Student Life",
    title: "A day in the life at Elmwood",
    body: "From morning devotions to the final bell, see what a Christ-centered school day looks like.",
  },
];

const glance = [
  { value: "1973", label: "Founded" },
  { value: "PreK–12", label: "One campus, every stage" },
  { value: "1:15", label: "Teacher-to-student" },
  { value: "100%", label: "Christ-centered" },
];

const programs = [
  { n: "01", name: "Early Enrichment", grades: "Ages 2–3" },
  { n: "02", name: "Preschool & Kindergarten", grades: "PreK–K" },
  { n: "03", name: "Elementary", grades: "Grades 1–6" },
  { n: "04", name: "Junior & Senior High", grades: "Grades 7–12" },
];

export default function V3Home() {
  return (
    <>
      {/* ─────────────────── Spotlight hero (magazine cover) ─────────────────── */}
      <section className="relative min-h-[88vh] flex items-end pt-[76px]">
        <Image
          src="/img/hero-v3.jpg"
          alt="Students raising their hands in an Elmwood Christian Academy classroom"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-seal-dark via-brown-seal-dark/55 to-transparent" />
        <div className="relative w-full max-w-7xl mx-auto px-6 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <span
              className="inline-block bg-red-spark text-white text-[0.7rem] font-semibold uppercase tracking-[0.22em] px-3 py-1.5"
              style={{ fontFamily: "var(--font-geo)" }}
            >
              Elmwood Academy · Est. 1973
            </span>
            <h1 className="mt-6 font-editorial text-[3rem] leading-[1.0] md:text-[5.5rem] font-semibold text-white animate-fade-up">
              Faith and learning,<br className="hidden md:block" /> inseparable.
            </h1>
            <p
              className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-xl animate-fade-up animation-delay-200"
              style={{ fontFamily: "var(--font-geo)" }}
            >
              A Christ-centered, college-preparatory education in Brighton,
              Colorado—preschool through twelfth grade.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400" style={{ fontFamily: "var(--font-geo)" }}>
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center bg-red-spark text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-white hover:text-brown-seal transition-colors"
              >
                Apply to Elmwood
              </Link>
              <Link
                href="/schedule-a-tour"
                className="inline-flex items-center justify-center border border-white/50 text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── Quick actions ─────────────────── */}
      <section className="bg-cream-warm border-b border-brown-seal/12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brown-seal/12">
            {[
              { title: "Schedule a Tour", note: "Come see our campus in person", href: "/schedule-a-tour" },
              { title: "Apply", note: "Begin your child's enrollment", href: "/admissions/apply" },
              // TODO: point School Calendar at the real calendar page / Google Calendar when available
              { title: "School Calendar", note: "Key dates & upcoming events", href: "/admissions" },
            ].map((a) => (
              <Link
                key={a.title}
                href={a.href}
                className="group flex items-center justify-between gap-4 py-9 md:px-9 hover:bg-cream-warm-2 transition-colors"
              >
                <span>
                  <span className="block font-editorial text-[1.65rem] leading-tight text-brown-seal group-hover:text-red-spark transition-colors">
                    {a.title}
                  </span>
                  <span
                    className="mt-1 block text-sm text-brown-seal/60"
                    style={{ fontFamily: "var(--font-geo)" }}
                  >
                    {a.note}
                  </span>
                </span>
                <span className="text-red-spark text-2xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── Lead statement ─────────────────── */}
      <section className="bg-cream-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll>
            <span className="block w-16 h-1 bg-red-spark" />
            <p className="mt-8 font-editorial text-[2rem] md:text-[3.25rem] leading-[1.15] text-brown-seal">
              For more than fifty years, Elmwood has formed students who think
              clearly, work diligently, and walk in <span className="text-red-spark">godly
              wisdom</span>—ready for college, career, and a lifetime of faith.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─────────────────── Stories ─────────────────── */}
      <section className="bg-cream-warm pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between border-b-2 border-brown-seal/15 pb-5">
            <h2 className="font-editorial text-3xl md:text-4xl text-brown-seal">
              From the Academy
            </h2>
            <Link
              href="/about"
              className="text-sm font-semibold text-red-spark hover:text-brown-seal transition-colors"
              style={{ fontFamily: "var(--font-geo)" }}
            >
              More stories →
            </Link>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {stories.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 110}>
                <article className="group">
                  <Link href="/about" className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={s.src}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p
                      className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-red-spark"
                      style={{ fontFamily: "var(--font-geo)" }}
                    >
                      {s.tag}
                    </p>
                    <h3 className="mt-2 font-editorial text-2xl leading-snug text-brown-seal group-hover:text-red-spark transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-brown-seal/70" style={{ fontFamily: "var(--font-geo)" }}>
                      {s.body}
                    </p>
                  </Link>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── At a glance ─────────────────── */}
      <section className="bg-brown-seal text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <p
            className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/55 text-center"
            style={{ fontFamily: "var(--font-geo)" }}
          >
            Elmwood at a glance
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {glance.map((g) => (
              <div key={g.label} className="text-center px-3">
                <div className="font-editorial text-4xl md:text-6xl text-white">{g.value}</div>
                <div
                  className="mt-2 text-[0.78rem] uppercase tracking-[0.14em] text-white/60"
                  style={{ fontFamily: "var(--font-geo)" }}
                >
                  {g.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── Academics (editorial split) ─────────────────── */}
      <section className="bg-cream-warm py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-14 md:gap-20 items-center">
          <AnimateOnScroll>
            <span className="block w-16 h-1 bg-red-spark" />
            <h2 className="mt-7 font-editorial text-4xl md:text-6xl leading-[1.05] text-brown-seal">
              A curriculum that meets every child
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brown-seal/75 max-w-md" style={{ fontFamily: "var(--font-geo)" }}>
              From a child's first day of preschool to a senior's final exam,
              Elmwood guides each student at the pace that fits them—mastery by
              mastery, year by year.
            </p>
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 mt-8 font-semibold text-red-spark hover:text-brown-seal transition-colors"
              style={{ fontFamily: "var(--font-geo)" }}
            >
              Explore academics →
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <ul className="divide-y divide-brown-seal/15 border-y border-brown-seal/15">
              {programs.map((p) => (
                <li key={p.n}>
                  <Link
                    href="/academics"
                    className="group flex items-center gap-6 py-6 hover:px-2 transition-all"
                  >
                    <span
                      className="font-editorial text-2xl text-red-spark/80 w-10"
                    >
                      {p.n}
                    </span>
                    <span className="flex-1">
                      <span className="block font-editorial text-2xl text-brown-seal group-hover:text-red-spark transition-colors">
                        {p.name}
                      </span>
                      <span
                        className="block text-sm text-brown-seal/60 uppercase tracking-[0.12em] mt-0.5"
                        style={{ fontFamily: "var(--font-geo)" }}
                      >
                        {p.grades}
                      </span>
                    </span>
                    <span className="text-red-spark text-xl opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─────────────────── Reviews carousel ─────────────────── */}
      <ReviewsCarousel accent="brown" />

      {/* ─────────────────── FAQ (short) ─────────────────── */}
      <section className="bg-cream-warm py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll className="text-center">
            <p
              className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-red-spark"
              style={{ fontFamily: "var(--font-geo)" }}
            >
              Questions?
            </p>
            <h2 className="mt-4 font-editorial text-4xl md:text-5xl text-brown-seal leading-tight">
              Frequently asked questions
            </h2>
          </AnimateOnScroll>

          <div className="mt-12">
            <FaqAccordion items={FAQS.slice(0, 4)} accent="brown" />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-semibold text-red-spark hover:text-brown-seal transition-colors"
              style={{ fontFamily: "var(--font-geo)" }}
            >
              See all questions &amp; answers →
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────── CTA ─────────────────── */}
      <section className="bg-red-spark text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-editorial text-4xl md:text-6xl leading-[1.05]">
            Find your child&rsquo;s place at Elmwood
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" style={{ fontFamily: "var(--font-geo)" }}>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center bg-white text-red-spark font-semibold px-8 py-4 rounded-full text-sm hover:bg-brown-seal hover:text-white transition-colors"
            >
              Apply Now
            </Link>
            <a
              href="tel:+13036593818"
              className="inline-flex items-center justify-center border border-white/60 text-white font-semibold px-8 py-4 rounded-full text-sm hover:bg-white/10 transition-colors"
            >
              Call 303.659.3818
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
