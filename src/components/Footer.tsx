import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
];

export default function Footer({
  variant = "crimson",
}: {
  variant?: "crimson" | "brown";
}) {
  const bg = variant === "brown" ? "bg-brown-seal-dark" : "bg-crimson-deep";
  return (
    <footer className={`${bg} text-white/75`}>
      {/* Verse band */}
      <div className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-white/90 leading-snug">
            “Train up a child in the way he should go: and when he is old,
            he will not depart from it.”
          </p>
          <p className="mt-4 eyebrow text-white/45">Proverbs 22:6</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand + address */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/crest.png"
              alt=""
              width={71}
              height={90}
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif font-semibold text-2xl tracking-[0.06em] text-white">
                ELMWOOD
              </span>
              <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-white/55">
                Christian Academy
              </span>
            </span>
          </div>
          <p className="mt-6 text-sm leading-relaxed max-w-sm text-white/65">
            A Christ-centered, college-preparatory school serving preschool
            through 12th grade in Brighton, Colorado.
          </p>
          <p className="mt-5 text-sm leading-relaxed">
            13100 E 144th Ave
            <br />
            Brighton, CO 80601
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="eyebrow text-white/45 mb-5">Explore</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/admissions" className="hover:text-white transition-colors">
                Schedule a Tour
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="eyebrow text-white/45 mb-5">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="tel:+13036593818" className="hover:text-white transition-colors">
                303.659.3818
              </a>
            </li>
            <li>
              <a
                href="mailto:office@elmwoodchristianacademy.org"
                className="hover:text-white transition-colors break-words"
              >
                office@elmwoodchristianacademy.org
              </a>
            </li>
            <li className="text-white/55">Mon–Fri · 7:30 AM – 3:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Elmwood Christian Academy. All rights reserved.</p>
          <p className="tracking-wide">Accredited · Excellence in Education Since 1973</p>
        </div>
      </div>
    </footer>
  );
}
