import Link from "next/link";
import Image from "next/image";
import { STAFF } from "@/lib/staff";

export default function StaffPreview() {
  const featured = STAFF;
  return (
    <section className="bg-paper py-24 md:py-28">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow text-crimson">Our People</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Teachers who know your child by name
            </h2>
          </div>
          <Link
            href="/staff"
            className="inline-flex items-center gap-2 text-crimson font-semibold uppercase tracking-[0.12em] text-sm whitespace-nowrap"
          >
            Meet our full faculty <span>→</span>
          </Link>
        </div>

        <div className="mt-14 flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featured.map((m) => (
            <div key={m.slug} className="group snap-start shrink-0 w-52 sm:w-60">
              <div className="relative aspect-square overflow-hidden rounded-sm border border-line">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="240px"
                  className="object-cover grayscale-[0.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h3 className="mt-4 font-serif text-xl text-ink leading-tight">{m.name}</h3>
              <p className="text-[0.72rem] uppercase tracking-[0.16em] text-crimson font-semibold mt-1">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
