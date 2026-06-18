import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import DragScroll from "@/components/DragScroll";

export const metadata: Metadata = {
  title: "Athletics",
  description:
    "Elmwood Christian Academy offers middle school, junior-varsity, and varsity sports—volleyball, basketball, soccer, cross country, and track & field—so boys and girls can develop Christ-like character through athletics.",
};

const sports = [
  {
    title: "Volleyball — Girls",
    body: "Season begins August 1 and runs through mid-October, culminating with the A.C.E. Regional tournament in March.",
    img: "/img/volleyball-team.jpg",
    alt: "The Elmwood Eagles girls volleyball team with their coach",
  },
  {
    title: "Basketball — Boys & Girls",
    body: "Season begins November 1 and runs through mid-February, culminating with the A.C.E. Regional tournament in March.",
    img: "/img/basketball-team.jpg",
    alt: "The Elmwood Eagles boys basketball team with their coach",
  },
  {
    title: "Cross Country — Boys & Girls",
    body: "Our runners train and race together through the cross-country season, encouraging one another toward their personal best.",
    img: "/img/cross-country.jpg",
    alt: "Elmwood Eagles cross country runners at a meet",
  },
  {
    title: "Soccer — Boys",
    body: "Season begins August 1 and runs through mid-October.",
    img: null,
    alt: "",
  },
  {
    title: "Track & Field — Boys & Girls",
    body: "In the spring, athletes compete across running, jumping, and throwing events, striving for excellence and personal growth.",
    img: null,
    alt: "",
  },
];

export default function AthleticsPage() {
  return (
    <>
      {/* Athletics banner hero — full width, all the way to the top */}
      <header className="relative w-full aspect-[1983/793]">
        <Image
          src="/brand/athletics-header.jpg"
          alt="Elmwood Eagles — Elmwood Christian School Athletics"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* darker at top (for nav legibility), lighter toward the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-transparent" />
      </header>

      {/* Intro */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Athletics</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Athletics throughout the year
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Elmwood Christian Academy offers middle school, junior-varsity, and
              varsity sports so boys and girls can take part in athletics
              throughout the school year. All eligible students are encouraged to
              participate. Active sports build bodies, character, and teamwork
              while providing a healthy outlet. Our philosophy of athletics flows
              directly from our Christian philosophy of education: the ultimate
              goal is to be conformed to the image of Jesus Christ (Romans 8:29),
              so athletes develop Christ-like character and express it through the
              medium of athletics. As an independent school, we compete against a
              variety of schools at different levels.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Athletic Director: Pastor Joshua Lehman.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Sports & seasons */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Programs</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Sports &amp; seasons
            </h2>
          </AnimateOnScroll>

          <DragScroll className="mt-16 flex gap-6 pb-4">
            {sports.map((s) => (
              <div key={s.title} className="shrink-0 w-[280px] sm:w-[330px]">
                <div className="h-full overflow-hidden border border-line rounded-sm bg-paper">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-3">
                    {s.img ? (
                      <Image
                        src={s.img}
                        alt={s.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-stone-2 to-stone-3">
                        <span className="font-serif text-lg text-text-muted">
                          Photos coming soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-7">
                    <h3 className="font-serif text-2xl text-ink">{s.title}</h3>
                    <div className="mt-3 h-px w-10 bg-crimson/40" />
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-text-body">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </DragScroll>
        </div>
      </section>

      {/* Our athletic vision */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Our Philosophy</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Our athletic vision
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Our commitment is to prepare our athletes for the ultimate test:
              life as a disciple of Jesus Christ. We believe it is our
              responsibility to provide programs that help students identify and
              use their God-given gifts, increase their skill, and grow in a
              Christ-like manner. The true value of athletics is not found solely
              in achieving athletic goals&mdash;though those are pursued with
              diligence&mdash;but in the growth and experiences that the process
              of striving for a goal produces in the lives of everyone involved.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Visit Us</p>
            <span className="rule mt-4 mx-auto" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              See Elmwood for yourself
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body max-w-2xl mx-auto">
              Schedule a tour to learn more about our athletics, academics, and
              the family atmosphere at Elmwood Christian Academy.
            </p>
            <div className="mt-9">
              <Link
                href="/schedule-a-tour"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
