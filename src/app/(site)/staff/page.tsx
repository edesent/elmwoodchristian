import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { STAFF } from "@/lib/staff";

export const metadata: Metadata = {
  title: "Faculty & Staff",
  description:
    "Meet the dedicated, Christ-centered faculty and staff of Elmwood Christian Academy in Brighton, Colorado.",
};

export default function StaffPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Our People"
        title="Faculty & staff"
        subtitle="Dedicated teachers who know each student by name."
      />

      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {STAFF.map((m, i) => (
            <AnimateOnScroll key={m.slug} delay={(i % 3) * 90}>
              <div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-5 font-serif text-2xl text-ink leading-tight">{m.name}</h2>
                <p className="text-[0.72rem] uppercase tracking-[0.18em] text-crimson font-semibold mt-1">
                  {m.role}
                </p>
                {m.bio && (
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-text-body">{m.bio}</p>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <section className="bg-stone py-20 md:py-24 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            Come meet our team in person
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-text-body">
            The best way to know Elmwood is to visit. We&rsquo;d love to introduce you
            to the teachers who will walk alongside your child.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-a-tour"
              className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/admissions/apply"
              className="inline-flex items-center justify-center border border-crimson/30 text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
            >
              Begin Admissions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
