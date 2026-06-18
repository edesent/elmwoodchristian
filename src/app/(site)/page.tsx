import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import HeroSlider from "@/components/HeroSlider";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const quickActions = [
  { label: "Apply", note: "Begin enrollment", href: "/admissions/apply" },
  { label: "Visit", note: "Schedule a tour", href: "/schedule-a-tour" },
  { label: "Request Info", note: "Learn about Elmwood", href: "/admissions" },
];

const stats = [
  { value: "50+", label: "Years of Excellence" },
  { value: "PreK–12", label: "One Campus" },
  { value: "1:15", label: "Teacher Ratio" },
  { value: "Accredited", label: "& Accountable" },
];

const programs = [
  { grades: "Ages 2–3", name: "Early Enrichment", body: "A gentle, nurturing first step into learning." },
  { grades: "PreK–K", name: "Preschool & Kindergarten", body: "Phonics, numbers, and the joy of discovery." },
  { grades: "Grades 1–6", name: "Elementary", body: "A mastery foundation built to last." },
  { grades: "Grades 7–12", name: "Junior & Senior High", body: "College-prepared, character-formed." },
];

const life = [
  { src: "/img/life-1.jpg", alt: "Elementary students reading together" },
  { src: "/img/life-2.jpg", alt: "A teacher leading a classroom" },
  { src: "/img/life-3.jpg", alt: "A student writing in class" },
  { src: "/img/life-4.jpg", alt: "Graduates celebrating commencement" },
];

export default function Home() {
  return (
    <>
      {/* ───────────────────────── Hero (2-slide) ───────────────────────── */}
      <HeroSlider />

      {/* ─────────────────── Quick actions (overlap) ─────────────────── */}
      <section className="relative z-10 -mt-16 md:-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-px bg-line shadow-[0_24px_60px_rgba(32,29,27,0.18)]">
            {quickActions.map((a) => (
              <Link
                key={a.label}
                href={a.href}
                className="group bg-paper hover:bg-white p-7 md:p-8 flex items-center justify-between transition-colors"
              >
                <span>
                  <span className="block font-serif text-2xl text-ink">{a.label}</span>
                  <span className="block mt-1 text-sm text-text-muted">{a.note}</span>
                </span>
                <span className="text-crimson text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Welcome ─────────────────────── */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Welcome to Elmwood</p>
            <span className="rule mt-4 mx-auto block w-14" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              A school built on faith, family, and a love of learning
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              For more than fifty years, Elmwood has helped Christian families in
              the Brighton area raise children who think clearly, work diligently,
              and walk in godly wisdom—ready for college, career, and a lifetime
              of faith.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─────────────────────── Feature split ─────────────────────── */}
      <section className="bg-stone border-y border-line">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch">
          <div className="relative min-h-[340px] md:min-h-[560px]">
            <Image
              src="/img/feature.jpg"
              alt="A young student focused on her reading"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <AnimateOnScroll className="flex items-center">
            <div className="px-6 md:px-16 py-16 md:py-20">
              <p className="eyebrow text-crimson">The Elmwood Difference</p>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
                An education that forms the whole child
              </h2>
              <ul className="mt-8 space-y-5">
                {[
                  ["Christ at the center", "Scripture frames every subject and every school day."],
                  ["Mastery-based learning", "Students advance only once they have truly mastered the material."],
                  ["A personalized pace", "Each child learns at the level that fits them—meeting goals daily."],
                  ["Character and excellence", "Academic rigor and godly character grow together."],
                ].map(([t, d]) => (
                  <li key={t} className="flex gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-crimson" />
                    <span>
                      <span className="block font-serif text-xl text-ink">{t}</span>
                      <span className="block text-text-body leading-relaxed">{d}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 mt-9 text-crimson font-semibold uppercase tracking-[0.12em] text-sm"
              >
                Our Story &amp; Mission
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─────────────────────── Stats band ─────────────────────── */}
      <section className="bg-crimson text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {stats.map((s) => (
            <div key={s.label} className="py-10 px-4 text-center">
              <div className="font-serif text-4xl md:text-5xl">{s.value}</div>
              <div className="mt-2 text-[0.7rem] uppercase tracking-[0.18em] text-white/65">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────── Programs ─────────────────────── */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-crimson">Academics</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              One school, every stage of growth
            </h2>
            <span className="rule mt-7 mx-auto block w-14" />
          </AnimateOnScroll>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p, i) => (
              <AnimateOnScroll key={p.name} delay={i * 90}>
                <Link
                  href="/academics"
                  className="group block h-full bg-paper border border-line rounded-sm p-7 hover:border-crimson/40 hover:shadow-[0_14px_44px_rgba(32,29,27,0.08)] transition-all"
                >
                  <div className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                    {p.grades}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-ink leading-snug">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{p.body}</p>
                  <span className="mt-5 inline-block text-crimson text-lg transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Life at Elmwood (mosaic) ─────────────────────── */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-crimson">Life at Elmwood</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              A community where children thrive
            </h2>
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4">
            {life.map((img, i) => {
              const span =
                i === 0
                  ? "col-span-2 row-span-2"
                  : i === 1
                  ? "col-span-2 md:col-span-2"
                  : "col-span-1";
              return (
                <AnimateOnScroll key={img.src} delay={i * 80} className={`${span} h-full`}>
                  <div className="relative h-full w-full overflow-hidden rounded-sm group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Testimonials ─────────────────────── */}
      <ReviewsCarousel />

      {/* ─────────────────────── Visit band ─────────────────────── */}
      <section className="relative py-28 md:py-36">
        <Image
          src="/img/campus.jpg"
          alt="Elmwood campus"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <p className="eyebrow text-white/70">Visit Us</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight">
            Come see Elmwood for yourself
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85 max-w-2xl mx-auto">
            The best way to understand an Elmwood education is to walk our halls,
            meet our teachers, and see our students at work.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-a-tour"
              className="inline-flex items-center justify-center bg-white text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-stone transition-colors"
            >
              Schedule a Tour
            </Link>
            <a
              href="tel:+13036593818"
              className="inline-flex items-center justify-center border border-white/50 text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-white/10 transition-colors"
            >
              Call 303.659.3818
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
