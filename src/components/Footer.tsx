import Link from "next/link";
import Image from "next/image";

type FooterLink = { href: string; label: string; children?: { href: string; label: string }[] };

const footerLinks: FooterLink[] = [
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about/beliefs", label: "What We Believe" },
      { href: "/staff", label: "Staff" },
      { href: "/athletics", label: "Athletics" },
      { href: "/admissions", label: "Admissions" },
    ],
  },
  { href: "/academics", label: "Academics" },
  { href: "/parents", label: "Parents" },
  { href: "/news", label: "News & Articles" },
  { href: "/support", label: "Support Elmwood" },
];

// TODO: replace "#" with Elmwood's real social profile URLs
const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.9 2 14.56 2 11.76 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer({
  variant = "crimson",
  showVerse = true,
}: {
  variant?: "crimson" | "brown";
  showVerse?: boolean;
}) {
  const bg = variant === "brown" ? "bg-brown-seal-dark" : "bg-crimson-deep";
  return (
    <footer className={`${bg} text-white/75`}>
      {/* Verse band */}
      {showVerse && (
        <div className="border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6 py-12 text-center">
            <p className="font-serif italic text-2xl md:text-3xl text-white/90 leading-snug">
              “Train up a child in the way he should go: and when he is old,
              he will not depart from it.”
            </p>
            <p className="mt-4 eyebrow text-white/45">Proverbs 22:6</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand + address */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/newer-crest.png"
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
          {/* Socials */}
          <div className="mt-6 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid place-items-center h-10 w-10 rounded-full border border-white/25 text-white/85 hover:bg-white hover:text-ink transition-colors"
              >
                {s.icon}
              </a>
            ))}
            <a
              href="mailto:office@elmwoodchristianacademy.org"
              aria-label="Email Elmwood Christian Academy"
              className="grid place-items-center h-10 w-10 rounded-full border border-white/25 text-white/85 hover:bg-white hover:text-ink transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
          <p className="mt-6 text-base leading-relaxed max-w-sm text-white/65">
            Elmwood Christian Academy is fully accredited through the National
            Association of Private Schools.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-white/45 mb-5">Explore</h3>
          <ul className="space-y-3 text-base">
            {footerLinks.map((l) =>
              l.children ? (
                <li key={l.href}>
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none hover:text-white transition-colors [&::-webkit-details-marker]:hidden">
                      <span>{l.label}</span>
                      <span className="text-white/40 text-xs transition-transform duration-200 group-open:rotate-180">
                        ▾
                      </span>
                    </summary>
                    <ul className="mt-3 ml-1 space-y-2.5 border-l border-white/15 pl-4 text-[0.95rem] text-white/60">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="hover:text-white transition-colors">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.2em] text-white/45 mb-5">Contact</h3>
          <ul className="space-y-3 text-base">
            <li className="leading-relaxed">
              13100 E 144th Ave
              <br />
              Brighton, CO 80601
            </li>
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
        <div className="max-w-7xl mx-auto px-6 py-7 text-center text-sm">
          <p className="text-white/45 text-xs">
            © {new Date().getFullYear()} Elmwood Christian Academy · Excellence in
            Education Since 1973
          </p>
        </div>
      </div>
    </footer>
  );
}
