"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Wordmark from "./Wordmark";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-paper transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_24px_rgba(32,29,27,0.10)]" : ""
      }`}
    >
      {/* Slim utility bar */}
      <div className="hidden md:block bg-crimson-deep text-white/90">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-[0.72rem] tracking-wide">
          <span className="flex items-center gap-2">
            <span className="text-white/60">Brighton, Colorado</span>
            <span className="text-white/30">·</span>
            <span className="text-white/60">Christ-Centered Since 1973</span>
          </span>
          <a
            href="tel:+13036593818"
            className="hover:text-white transition-colors font-medium tracking-[0.08em]"
          >
            303.659.3818
          </a>
        </div>
      </div>

      <nav className="border-b border-line">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[74px]">
          <Wordmark />

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-[0.95rem] font-medium tracking-wide transition-colors ${
                      active ? "text-crimson" : "text-charcoal hover:text-crimson"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-4 right-4 -bottom-[1px] h-[2px] bg-crimson transition-transform origin-left ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
            <li className="ml-4">
              <Link
                href="/schedule-a-tour"
                className="inline-flex items-center gap-2 bg-crimson text-white text-sm font-semibold px-6 py-2.5 rounded-sm tracking-[0.08em] uppercase hover:bg-crimson-dark transition-colors"
              >
                Schedule a Tour
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle navigation"
          >
            <span className={`w-6 h-0.5 bg-crimson rounded transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-0.5 bg-crimson rounded transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-crimson rounded transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

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
                className="block px-2 py-3 text-base font-medium text-charcoal border-b border-line/60 hover:text-crimson transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-3">
            <Link
              href="/schedule-a-tour"
              className="block text-center bg-crimson text-white font-semibold px-6 py-3 rounded-sm uppercase tracking-[0.08em] hover:bg-crimson-dark transition-colors"
            >
              Schedule a Tour
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
