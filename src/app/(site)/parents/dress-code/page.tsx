import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Dress Code",
  description:
    "The dress code for Elmwood Christian Academy in Brighton, Colorado: modest, neat, and honoring to Christ. Standards for boys, girls, and preschool, K-4 through 12th grade.",
};

const boys = [
  "Pants: navy blue, black, dark grey, or khaki dress pants in good condition, with a solid black or brown belt (K-4 and K-5 exempt from the belt). Buckles require office approval.",
  "Shirts: collared, loose-fitting polo shirts in solid colors (2–4 buttons); only Elmwood logos permitted; kept buttoned except the top button; no visible undergarments except turtlenecks or long sleeves.",
  "Shoes: solid black, brown, or navy dress shoes or boots for the classroom (no athletic or casual shoes); K-4 and K-5 may wear athletic or casual shoes; non-marking athletic shoes for P.E.",
  "Hair: cut and neatly groomed; not touching the ears or collar, not covering the eyebrows; tapered cuts only—no trendy cuts such as bowl cuts or mohawks; no facial hair or sideburns.",
  "General: no jewelry, sunglasses, hats, or hooded jackets indoors; backpacks and lunch boxes may not display movies, music groups, actors, or teen/adult icons.",
];

const girls = [
  "Skirts: a modest, loose-fitting skirt (no culottes) to mid-calf; no denim or jean skirts; loose-fitting jumpers are an acceptable alternative.",
  "Shirts: collared, loose-fitting polo shirts in solid colors (2–4 buttons; Elmwood logo only); buttoned except the top button; nothing that reveals or shows the outline of an undergarment; no form-fitting or see-through shirts.",
  "Shoes: solid black, brown, or navy dress shoes or boots for the classroom; no sandals or open-toed shoes; K-4 and K-5 may wear athletic or casual shoes; non-marking athletic shoes for P.E.",
  "Makeup: none under age 14; ages 14+ may apply lightly in natural tones—no bright colors.",
  "Hair: natural colors, styled in a way becoming to a Christian young lady; not hanging over the face or eyes; no streaking or unnatural colors.",
  "Jewelry: one earring per ear on the lobe; no dangling earrings or unconventional placements.",
  "General: no hats indoors; same backpack and lunch-box restrictions as above.",
];

const preschoolBoys = [
  "Navy, black, dark grey, or khaki pants in good condition.",
  "Collared, loose-fitting 2–4 button polo of any color or pattern, buttoned except the top button.",
  "Dress shoes or solid black/brown/navy casual or athletic shoes.",
  "Hair cut and neatly groomed.",
  "An extra set of dress-code clothing kept at school for accidents.",
];

const preschoolGirls = [
  "A modest, loose-fitting skirt or jumper to mid-calf (no culottes).",
  "Collared, loose-fitting 2–4 button polo of any color or pattern.",
  "Dresses that cover the shoulders and reach below the knee.",
  "Dress shoes or solid black/brown/navy casual shoes (no open-toed shoes or sandals).",
  "No makeup; one stud earring per ear lobe.",
  "Shorts worn underneath dresses or skirts.",
  "An extra set of clothing kept at school for accidents.",
];

export default function DressCodePage() {
  return (
    <>
      <SubpageHero
        eyebrow="Parent&rsquo;s Corner"
        title="Dress code"
        subtitle="Modest, neat, and honoring to Christ."
      />

      {/* Philosophy */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Our Standard</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Pleasing and honoring to Christ
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Each student&rsquo;s appearance should be such that Christ would be
              pleased and honored. No immodest dress is allowed. Our standards
              rest on three biblical principles: modesty is essential, needlessly
              offending others is wrong, and our dress should honor God and avoid
              the appearance of evil.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Boys */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">K-4 through 12th Grade</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Boys
            </h2>
            <ul className="mt-8 space-y-5">
              {boys.map((item, i) => (
                <li key={i} className="flex gap-4 text-lg leading-relaxed text-text-body">
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-crimson" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Girls */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">K-4 through 12th Grade</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Girls
            </h2>
            <ul className="mt-8 space-y-5">
              {girls.map((item, i) => (
                <li key={i} className="flex gap-4 text-lg leading-relaxed text-text-body">
                  <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-crimson" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Preschool */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Ages 2&ndash;3 Years</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Preschool
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid md:grid-cols-2 gap-14">
            <AnimateOnScroll>
              <h3 className="font-serif text-2xl text-ink">Boys</h3>
              <div className="mt-3 h-px w-10 bg-crimson/40" />
              <ul className="mt-6 space-y-5">
                {preschoolBoys.map((item, i) => (
                  <li key={i} className="flex gap-4 text-lg leading-relaxed text-text-body">
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-crimson" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <h3 className="font-serif text-2xl text-ink">Girls</h3>
              <div className="mt-3 h-px w-10 bg-crimson/40" />
              <ul className="mt-6 space-y-5">
                {preschoolGirls.map((item, i) => (
                  <li key={i} className="flex gap-4 text-lg leading-relaxed text-text-body">
                    <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-crimson" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Parent&rsquo;s Corner</p>
            <span className="rule mt-4 mx-auto" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              More parent resources
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body max-w-2xl mx-auto">
              Find daily procedures, school forms, and everything else you need
              for the school day.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/parents"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                Back to Parent Resources
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
