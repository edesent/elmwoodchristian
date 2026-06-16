import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const distinctives = [
  {
    n: "I",
    title: "Christ-Centered",
    body: "Scripture frames every subject and every school day. We help Christian families raise children who know the Lord and live with conviction.",
  },
  {
    n: "II",
    title: "Mastery-Based",
    body: "Our individualized, mastery curriculum lets each student build on a true foundation—moving ahead only once material is genuinely understood.",
  },
  {
    n: "III",
    title: "Personalized Pace",
    body: "Students learn at the level that fits them, with goals set and met daily. Diligence, ownership, and confidence become habits.",
  },
  {
    n: "IV",
    title: "Character & Excellence",
    body: "Academic rigor and godly character grow together—shaping young men and women of integrity, humility, and purpose.",
  },
];

const levels = [
  { name: "Early Enrichment", grades: "Ages 2–3", note: "A gentle, nurturing first step." },
  { name: "Preschool & Kindergarten", grades: "PreK–K", note: "Phonics, numbers, and wonder." },
  { name: "Elementary", grades: "Grades 1–6", note: "Foundations built to last." },
  { name: "Junior & Senior High", grades: "Grades 7–12", note: "College-prepared, character-formed." },
];

const stats = [
  { value: "50+", label: "Years of Excellence" },
  { value: "PreK–12", label: "A Complete Education" },
  { value: "1:15", label: "Personalized Attention" },
  { value: "100%", label: "Christ-Centered" },
];

export default function Home() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative bg-crimson-deep overflow-hidden">
        <Image
          src="/brand/crest.png"
          alt=""
          width={71}
          height={90}
          priority
          aria-hidden
          className="pointer-events-none select-none absolute right-[-4rem] top-1/2 -translate-y-1/2 h-[120%] w-auto opacity-[0.07] brightness-0 invert"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(162,51,68,0.4),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-[150px] md:pt-[190px] pb-24 md:pb-32 min-h-[90vh] flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="eyebrow text-white/55 animate-fade-up">
              Brighton, Colorado · Established 1973
            </p>
            <h1 className="mt-6 font-serif text-[2.9rem] leading-[1.04] md:text-7xl font-semibold text-white animate-fade-up animation-delay-200">
              A Christ-centered education that forms both mind and character.
            </h1>
            <p className="mt-7 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl animate-fade-up animation-delay-400">
              For more than fifty years, Elmwood has helped Christian families in
              the Brighton area educate their children in a loving, disciplined,
              Christ-honoring environment—preschool through twelfth grade.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-600">
              <Link
                href="/schedule-a-tour"
                className="inline-flex items-center justify-center bg-white text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-stone transition-colors"
              >
                Schedule a Tour
              </Link>
              <Link
                href="/academics"
                className="inline-flex items-center justify-center border border-white/40 text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-white/10 transition-colors"
              >
                Explore Academics
              </Link>
            </div>
          </div>
        </div>
        {/* hero stat rail */}
        <div className="relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="py-7 px-4 text-center">
                <div className="font-serif text-3xl md:text-4xl text-white">{s.value}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Welcome / Mission ─────────────────────── */}
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-20 items-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Welcome to Elmwood</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              A school built on faith, family, and a love of learning.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="text-lg leading-relaxed text-text-body">
              Elmwood Christian Academy exists to help Christian parents educate
              their children in a loving, caring, Christ-centered environment.
              We pair a time-tested, mastery-based curriculum with attentive
              teachers who know each student by name.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-text-body">
              The result is more than good grades. It is graduates who think
              clearly, work diligently, and walk in godly wisdom and personal
              responsibility—ready for college, career, and a lifetime of faith.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 mt-8 text-crimson font-semibold uppercase tracking-[0.12em] text-sm"
            >
              Our Story &amp; Mission
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─────────────────────── The Elmwood Difference ─────────────────────── */}
      <section className="bg-stone py-24 md:py-32 border-y border-line">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-crimson">The Elmwood Difference</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Four convictions that shape every day
            </h2>
            <span className="rule mt-7" />
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {distinctives.map((d, i) => (
              <AnimateOnScroll key={d.title} delay={i * 100}>
                <div className="h-full bg-paper p-9 hover:bg-white transition-colors">
                  <div className="font-serif text-3xl text-crimson/80">{d.n}</div>
                  <h3 className="mt-4 font-serif text-2xl text-ink">{d.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-text-body">
                    {d.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Academics preview ─────────────────────── */}
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <AnimateOnScroll>
              <p className="eyebrow text-crimson">Academics</p>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight max-w-xl">
                One school, every stage of growth
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={120}>
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 text-crimson font-semibold uppercase tracking-[0.12em] text-sm whitespace-nowrap"
              >
                View the Curriculum <span>→</span>
              </Link>
            </AnimateOnScroll>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((l, i) => (
              <AnimateOnScroll key={l.name} delay={i * 90}>
                <div className="group h-full border border-line rounded-sm p-7 hover:border-crimson/40 hover:shadow-[0_12px_40px_rgba(32,29,27,0.07)] transition-all">
                  <div className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                    {l.grades}
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-ink leading-snug">
                    {l.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{l.note}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Pull quote ─────────────────────── */}
      <section className="bg-crimson text-white py-24 md:py-28 relative overflow-hidden">
        <Image
          src="/brand/crest.png"
          alt=""
          width={71}
          height={90}
          aria-hidden
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-10 h-16 w-auto opacity-20 brightness-0 invert"
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-3xl md:text-4xl leading-[1.3] mt-12">
            “The teachers truly know our children. Elmwood gave them a strong
            foundation in their faith and their studies—and a confidence we see
            every day.”
          </p>
          <p className="mt-8 eyebrow text-white/60">An Elmwood Family</p>
        </div>
      </section>

      {/* ─────────────────────── Closing CTA ─────────────────────── */}
      <section className="bg-stone py-24 md:py-32 border-t border-line">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Visit Us</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Come see Elmwood for yourself
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body max-w-2xl mx-auto">
              The best way to understand an Elmwood education is to walk our
              halls, meet our teachers, and see our students at work. We would be
              honored to show you around.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
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
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
