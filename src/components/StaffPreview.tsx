import Link from "next/link";
import Image from "next/image";
import { STAFF } from "@/lib/staff";

export default function StaffPreview() {
  const featured = STAFF.slice(0, 8);
  return (
    <section className="bg-paper py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((m) => (
            <div key={m.slug} className="group">
              <div className="relative aspect-square overflow-hidden rounded-sm border border-line">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
