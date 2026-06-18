import type { Metadata } from "next";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Support Elmwood",
  description:
    "Simple ways to support Elmwood Christian Academy at little or no cost to you: King Soopers gift cards, Box Tops for Education, Target Circle, and Office Depot / OfficeMax rewards.",
};

const ways = [
  {
    title: "King Soopers Gift Cards",
    body: "Reloadable King Soopers gift cards (pre-loaded with $50) are available through the school office. Elmwood receives 5% each time you reload (up to $500 per reload), and the cards work for both groceries and gas.",
  },
  {
    title: "Box Tops for Education",
    body: "Clip Box Tops from participating products—just make sure they show a valid, unexpired date. Bonus Box Tops are worth even more. Send them to the school office or your child’s teacher.",
  },
  {
    title: "Target Circle",
    body: "Designate Elmwood through your Target account to direct community giving our way. Call 1-800-316-6142 or register at target.com.",
  },
  {
    title: "Office Depot / OfficeMax",
    body: "Through the Back-to-School program, Elmwood earns 5% back in credits toward free supplies. Give our school ID 70009472 at checkout.",
  },
];

export default function SupportPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Get Involved"
        title="Support Elmwood"
        subtitle="Simple ways to help&mdash;at little or no cost to you."
      />

      {/* Intro */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Get Involved</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Every bit helps
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              There are several easy ways to support Elmwood Christian Academy as
              you go about everyday shopping. Every bit helps us keep a quality
              Christian education affordable for our families.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Ways to give */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Ways to Give</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Ways to give
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ways.map((w, i) => (
              <AnimateOnScroll key={w.title} delay={i * 90}>
                <div className="h-full border border-line rounded-sm p-7 bg-paper">
                  <h3 className="font-serif text-2xl text-ink">{w.title}</h3>
                  <div className="mt-3 h-px w-10 bg-crimson/40" />
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-text-body">
                    {w.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Questions?</p>
            <span className="rule mt-4 mx-auto" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Questions about supporting Elmwood?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body max-w-2xl mx-auto">
              Call the school office and we&rsquo;ll be glad to help you get
              started.
            </p>
            <div className="mt-9">
              <a
                href="tel:+13036593818"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                Call 303.659.3818
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
