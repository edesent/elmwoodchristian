"use client";

import { useState, useEffect, useCallback } from "react";

// Real testimonials migrated from ebabrighton.org (names as published; rebranded to "Elmwood").
const reviews = [
  {
    quote:
      "Elmwood encouraged me to be ready for whatever the next step in life was. As a result, I was well-prepared to tackle the obstacles and challenges of college.",
    name: "Wilson G.",
    role: "Elmwood alumnus · General Studies",
  },
  {
    quote:
      "I attended Elmwood from 4th grade to graduation. I appreciate the Academy very much and look forward to enrolling my own kids there someday!",
    name: "Trent R.",
    role: "Elmwood alumnus · Pastoral Theology",
  },
  {
    quote:
      "With every passing year I gratefully praise God for the privilege my son has of attending this Christ-centered school.",
    name: "An Elmwood Parent",
    role: "Current family",
  },
  {
    quote:
      "The courses here exceeded my expectations in many regards, especially in the depth of information supplied. In a non-threatening environment, I learned key principles I can implement immediately.",
    name: "Matlin L.",
    role: "Elmwood alumna · Hospitality",
  },
];

interface Props {
  accent?: "crimson" | "brown";
}

export default function ReviewsCarousel({ accent = "crimson" }: Props) {
  const [i, setI] = useState(0);
  const n = reviews.length;
  const go = useCallback((d: number) => setI((p) => (p + d + n) % n), [n]);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % n), 7000);
    return () => clearInterval(t);
  }, [n]);

  const c =
    accent === "brown"
      ? {
          bg: "bg-cream-warm-2",
          kicker: "text-red-spark",
          quote: "text-brown-seal",
          name: "text-brown-seal/60",
          role: "text-brown-seal/45",
          star: "text-red-spark",
          arrow: "border-brown-seal/25 text-brown-seal hover:bg-brown-seal hover:text-white",
          dotOn: "bg-red-spark",
          dotOff: "bg-brown-seal/25 hover:bg-brown-seal/40",
          font: "var(--font-editorial)",
        }
      : {
          bg: "bg-stone",
          kicker: "text-crimson",
          quote: "text-ink",
          name: "text-text-body",
          role: "text-text-muted",
          star: "text-crimson",
          arrow: "border-crimson/25 text-crimson hover:bg-crimson hover:text-white",
          dotOn: "bg-crimson",
          dotOff: "bg-crimson/25 hover:bg-crimson/45",
          font: "var(--font-cormorant)",
        };

  return (
    <section className={`${c.bg} py-24 md:py-28 border-y border-line`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className={`eyebrow ${c.kicker}`}>What Families Say</p>

        <div className={`mt-5 flex justify-center gap-1 ${c.star}`} aria-hidden>
          {Array.from({ length: 5 }).map((_, s) => (
            <svg key={s} viewBox="0 0 20 20" className="h-5 w-5 fill-current">
              <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8z" />
            </svg>
          ))}
        </div>

        <div className="relative mt-8 min-h-[230px] md:min-h-[190px]">
          {reviews.map((rev, idx) => (
            <blockquote
              key={idx}
              aria-hidden={idx !== i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                idx === i ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <p
                className={`text-2xl md:text-[2.1rem] leading-[1.3] ${c.quote}`}
                style={{ fontFamily: c.font }}
              >
                “{rev.quote}”
              </p>
              <footer className={`mt-6 text-[0.8rem] font-semibold uppercase tracking-[0.18em] ${c.name}`}>
                {rev.name} · <span className={c.role}>{rev.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className={`grid place-items-center h-11 w-11 rounded-full border transition-colors ${c.arrow}`}
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                aria-current={idx === i}
                className={`h-2.5 rounded-full transition-all ${
                  idx === i ? `w-7 ${c.dotOn}` : `w-2.5 ${c.dotOff}`
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className={`grid place-items-center h-11 w-11 rounded-full border transition-colors ${c.arrow}`}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
