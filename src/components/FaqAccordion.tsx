"use client";

import { useState } from "react";
import type { Faq } from "./faqData";

interface Props {
  items: Faq[];
  accent?: "crimson" | "brown";
}

export default function FaqAccordion({ items, accent = "crimson" }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  const theme =
    accent === "brown"
      ? { text: "text-brown-seal", sub: "text-brown-seal/70", line: "border-brown-seal/15", mark: "text-red-spark", font: "var(--font-editorial)" }
      : { text: "text-ink", sub: "text-text-body", line: "border-line", mark: "text-crimson", font: "var(--font-cormorant)" };

  return (
    <div className={`border-t ${theme.line}`}>
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div key={item.q} className={`border-b ${theme.line}`}>
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-5 text-left"
            >
              <span
                className={`text-xl md:text-2xl leading-snug ${theme.text}`}
                style={{ fontFamily: theme.font }}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 text-2xl leading-none ${theme.mark} transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className={`pb-6 pr-10 leading-relaxed ${theme.sub}`}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
