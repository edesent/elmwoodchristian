"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    src: "/img/hero.jpg",
    alt: "A teacher reading with young students at Elmwood Christian Academy",
    eyebrow: "Brighton, Colorado · Christ-Centered Since 1973",
    title: "Where faith and learning grow together.",
    copy: "A college-preparatory education rooted in Scripture and shaped by teachers who know your child by name—preschool through twelfth grade.",
  },
  {
    src: "/img/hero-v3.jpg",
    alt: "Students raising their hands in an Elmwood Christian Academy classroom",
    eyebrow: "Established 1973 · Brighton, Colorado",
    title: "Faith and learning, inseparable.",
    copy: "Christ-centered, mastery-based education that forms both mind and character—every student known, challenged, and loved.",
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const n = slides.length;
  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 6500);
    return () => clearInterval(t);
  }, [n]);

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={s.src}
          aria-hidden={idx !== i}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-in-out ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={idx === i ? s.alt : ""}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-crimson-deep/95 via-crimson-deep/55 to-ink/40" />
        </div>
      ))}

      <div className="relative w-full max-w-7xl mx-auto px-6 pb-28 md:pb-36 pt-40">
        <div className="max-w-3xl min-h-[300px] md:min-h-[340px]">
          {slides.map((s, idx) => (
            <div
              key={s.src}
              aria-hidden={idx !== i}
              className={`transition-opacity duration-700 ${
                idx === i ? "opacity-100" : "opacity-0 absolute inset-x-6 pointer-events-none"
              }`}
            >
              <p className="eyebrow text-white/70">{s.eyebrow}</p>
              <h1 className="mt-5 font-serif text-[3rem] leading-[1.02] md:text-7xl font-semibold text-white">
                {s.title}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl">
                {s.copy}
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center justify-center bg-white text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-stone transition-colors"
                >
                  Apply Now
                </Link>
                <Link
                  href="/schedule-a-tour"
                  className="inline-flex items-center justify-center border border-white/50 text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-white/10 transition-colors"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide controls — aligned to the header width */}
      <div className="absolute bottom-28 md:bottom-36 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-end gap-3">
        <button
          onClick={() => go(-1)}
          aria-label="Previous slide"
          className="hidden sm:grid place-items-center h-10 w-10 rounded-full border border-white/40 text-white hover:bg-white/15 transition-colors"
        >
          ←
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={idx === i}
              className={`h-2.5 rounded-full transition-all ${
                idx === i ? "w-7 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next slide"
          className="hidden sm:grid place-items-center h-10 w-10 rounded-full border border-white/40 text-white hover:bg-white/15 transition-colors"
        >
          →
        </button>
        </div>
      </div>
    </section>
  );
}
