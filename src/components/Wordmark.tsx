import Image from "next/image";
import Link from "next/link";

interface Props {
  /** "ink" for dark text on light backgrounds, "light" for white text on dark backgrounds */
  tone?: "ink" | "light";
  className?: string;
}

export default function Wordmark({ tone = "ink", className = "" }: Props) {
  const elmwood = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/70" : "text-crimson";

  return (
    <Link
      href="/"
      aria-label="Elmwood Christian Academy — home"
      className={`flex items-center gap-3 group ${className}`}
    >
      <Image
        src="/brand/crest.png"
        alt=""
        width={71}
        height={90}
        priority
        className="h-11 w-auto drop-shadow-sm"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif font-semibold text-[1.5rem] tracking-[0.06em] ${elmwood}`}
        >
          ELMWOOD
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em] ${sub}`}
        >
          Christian Academy
        </span>
      </span>
    </Link>
  );
}
