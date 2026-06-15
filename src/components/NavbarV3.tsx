"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
];

export default function NavbarV3() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* red accent rule */}
      <div className="h-1 bg-red-spark" />
      <div
        className={`bg-cream-warm transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_20px_rgba(56,39,28,0.12)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
          <Link href="/v3" aria-label="Elmwood Christian Academy — home" className="flex items-center gap-3">
            <Image
              src="/brand/crest.png"
              alt=""
              width={71}
              height={90}
              priority
              className="h-10 w-auto"
            />
            <span className="flex flex-col leading-none">
              <span
                className="text-[1.55rem] font-semibold tracking-[0.01em] text-brown-seal"
                style={{ fontFamily: "var(--font-editorial)" }}
              >
                Elmwood
              </span>
              <span
                className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-red-spark"
                style={{ fontFamily: "var(--font-geo)" }}
              >
                Christian Academy
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8" style={{ fontFamily: "var(--font-geo)" }}>
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[1.05rem] font-medium text-brown-seal hover:text-red-spark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/admissions"
              className="text-sm font-semibold px-6 py-2.5 rounded-full bg-red-spark text-white hover:bg-brown-seal transition-colors"
            >
              Apply
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle navigation"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-6 h-0.5 rounded bg-brown-seal transition-all ${
                  menuOpen && i === 0 ? "rotate-45 translate-y-[7px]" : ""
                } ${menuOpen && i === 1 ? "opacity-0" : ""} ${
                  menuOpen && i === 2 ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-cream-warm border-b border-brown-seal/15 transition-[max-height] duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{ fontFamily: "var(--font-geo)" }}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3 text-base font-medium text-brown-seal border-b border-brown-seal/10 hover:text-red-spark transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <Link
              href="/admissions"
              onClick={() => setMenuOpen(false)}
              className="block text-center bg-red-spark text-white font-semibold px-6 py-3 rounded-full"
            >
              Apply
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
