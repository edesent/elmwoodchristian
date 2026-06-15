"use client";

import { useState, useEffect, useCallback } from "react";

// Placeholder reviews — swap for real Elmwood family testimonials.
const reviews = [
  {
    quote:
      "The teachers truly know our children. Elmwood gave them a strong foundation in their faith and their studies—and a confidence we see every day.",
    name: "Rebecca H.",
    role: "Parent of a 3rd & 6th grader",
  },
  {
    quote:
      "We were amazed at how quickly our son caught up and then got ahead. The mastery approach meant he never had gaps—he just kept building.",
    name: "Daniel P.",
    role: "Elmwood parent",
  },
  {
    quote:
      "It feels like a family. Our daughter is known, challenged, and loved. We can't imagine a better place to grow up.",
    name: "Karen & Mike S.",
    role: "Parents of three",
  },
  {
    quote:
      "Elmwood graduates leave prepared—for college and for life. The character formation is every bit as strong as the academics.",
    name: "Pastor James W.",
    role: "Community partner",
  },
];

export default function ReviewsCarousel() {
  const [i, setI] = useState(0);
  const n = reviews.length;
  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 7000);
    return () => clearInterval(t);
  }, [n]);

  const r = reviews[i];

  return (
    <section className="bg-cream-warm-2 py-24 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p
          className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-red-spark"
          style={{ fontFamily: "var(--font-geo)" }}
        >
          What Families Say
        </p>

        {/* Stars */}
        <div className="mt-5 flex justify-center gap-1 text-red-spark" aria-hidden>
          {Array.from({ length: 5 }).map((_, s) => (
            <svg key={s} viewBox="0 0 20 20" className="h-5 w-5 fill-current">
              <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <div className="relative mt-8 min-h-[210px] md:min-h-[180px]">
          {reviews.map((rev, idx) => (
            <blockquote
              key={idx}
              aria-hidden={idx !== i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p className="font-editorial text-2xl md:text-[2.1rem] leading-[1.3] text-brown-seal">
                “{rev.quote}”
              </p>
              <footer
                className="mt-6 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-brown-seal/60"
                style={{ fontFamily: "var(--font-geo)" }}
              >
                {rev.name} · <span className="text-brown-seal/45">{rev.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="grid place-items-center h-11 w-11 rounded-full border border-brown-seal/25 text-brown-seal hover:bg-brown-seal hover:text-white transition-colors"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to review ${idx + 1}`}
                aria-current={idx === i}
                className={`h-2.5 rounded-full transition-all ${
                  idx === i ? "w-7 bg-red-spark" : "w-2.5 bg-brown-seal/25 hover:bg-brown-seal/40"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next review"
            className="grid place-items-center h-11 w-11 rounded-full border border-brown-seal/25 text-brown-seal hover:bg-brown-seal hover:text-white transition-colors"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
