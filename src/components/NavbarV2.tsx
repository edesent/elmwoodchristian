"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/athletics", label: "Athletics" },
  { href: "/parents", label: "Parents" },
  { href: "/news", label: "News" },
];

export default function NavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden md:block transition-colors duration-300 ${
          solid ? "bg-crimson-deep" : "bg-black/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-end gap-6 h-9 text-[0.72rem] tracking-wide text-white/80">
          <span className="text-white/55">Brighton, Colorado</span>
          <a href="tel:+13036593818" className="hover:text-white transition-colors">
            303.659.3818
          </a>
          <a
            href="mailto:office@elmwoodchristianacademy.org"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          solid ? "bg-paper shadow-[0_1px_24px_rgba(32,29,27,0.12)]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[78px]">
          <Link href="/" aria-label="Elmwood Christian Academy — home" className="flex items-center gap-3">
            <Image
              src="/brand/newer-crest.png"
              alt=""
              width={71}
              height={90}
              priority
              className={`h-11 w-auto`}
            />
            <span className="flex flex-col leading-none">
              <span
                className={`font-serif font-semibold text-[1.5rem] tracking-[0.06em] ${
                  solid ? "text-ink" : "text-white"
                }`}
              >
                ELMWOOD
              </span>
              <span
                className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em] ${
                  solid ? "text-crimson" : "text-white/70"
                }`}
              >
                Christian Academy
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            <ul className="flex items-center gap-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[0.95rem] font-medium tracking-wide transition-colors ${
                      solid ? "text-charcoal hover:text-crimson" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <Link
                href="/schedule-a-tour"
                className={`text-sm font-semibold px-5 py-2.5 rounded-sm uppercase tracking-[0.08em] border transition-colors ${
                  solid
                    ? "border-crimson/40 text-crimson hover:bg-crimson/5"
                    : "border-white/50 text-white hover:bg-white/10"
                }`}
              >
                Visit
              </Link>
              <Link
                href="/admissions/apply"
                className="text-sm font-semibold px-6 py-2.5 rounded-sm uppercase tracking-[0.08em] bg-crimson text-white hover:bg-crimson-dark transition-colors"
              >
                Apply
              </Link>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle navigation"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`w-6 h-0.5 rounded transition-all ${solid ? "bg-crimson" : "bg-white"} ${
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
        className={`lg:hidden overflow-hidden bg-paper border-b border-line transition-[max-height] duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-3 text-base font-medium text-charcoal border-b border-line/60 hover:text-crimson transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 grid grid-cols-2 gap-3">
            <Link
              href="/schedule-a-tour"
              onClick={() => setMenuOpen(false)}
              className="text-center border border-crimson/40 text-crimson font-semibold px-4 py-3 rounded-sm uppercase tracking-[0.08em] text-sm"
            >
              Visit
            </Link>
            <Link
              href="/admissions/apply"
              onClick={() => setMenuOpen(false)}
              className="text-center bg-crimson text-white font-semibold px-4 py-3 rounded-sm uppercase tracking-[0.08em] text-sm"
            >
              Apply
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
