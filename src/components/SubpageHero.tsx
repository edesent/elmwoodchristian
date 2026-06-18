import Image from "next/image";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SubpageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="relative bg-crimson-deep overflow-hidden pt-[150px] md:pt-[170px] pb-20">
      {/* crest header background */}
      <Image
        src="/brand/crest-header.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden
        className="object-cover object-right pointer-events-none select-none"
      />
      <div className="absolute inset-0 bg-crimson-deep/25" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {eyebrow && <p className="eyebrow text-white/55 mb-4">{eyebrow}</p>}
        <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="font-serif italic text-lg md:text-2xl text-white/75 mt-5 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <span className="rule mt-8 bg-white/70" />
      </div>
    </header>
  );
}
