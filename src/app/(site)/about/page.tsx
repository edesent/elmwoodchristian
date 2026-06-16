import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Since 1973, Elmwood Christian Academy has helped Christian families in Brighton, Colorado educate their children in a loving, Christ-centered environment. Learn our story, mission, and beliefs.",
};

const beliefs = [
  {
    title: "Christ at the Center",
    body: "We believe the Bible is the foundation for all of life and learning. Faith is not a single class—it is the lens through which every subject is taught.",
  },
  {
    title: "Every Child Matters",
    body: "Each student is made in the image of God, with gifts to discover and a purpose to pursue. We teach to the individual, not just the class.",
  },
  {
    title: "Truth and Excellence",
    body: "A Christian education should be the most rigorous education. We hold high standards in academics and in character, because both honor the Lord.",
  },
  {
    title: "Partnership with Families",
    body: "Parents are the primary educators of their children. Elmwood comes alongside Christian families to reinforce the values taught at home.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Our Story"
        title="Faithful education since 1973"
        subtitle="Helping Christian parents raise the next generation in wisdom, character, and faith."
      />

      {/* Story */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Established 1973</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Half a century of faithful teaching
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="text-lg leading-relaxed text-text-body">
              For more than fifty years, families in the Brighton area have
              trusted Elmwood to educate their children with academic excellence
              and unwavering faith. What began as a small Christian school has
              grown into a community where preschoolers take their first steps in
              learning and high schoolers prepare for college—all under the same
              roof, all rooted in the same conviction.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-text-body">
              As we step into our next chapter as Elmwood Christian Academy, our
              mission has not changed: to help Christian parents educate their
              children in a loving, caring, Christ-centered environment.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission band */}
      <section className="bg-crimson text-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow text-white/55">Our Mission</p>
          <p className="mt-6 font-serif text-3xl md:text-4xl leading-[1.35]">
            To help Christian parents educate their children in a loving, caring,
            Christ-centered environment—forming students of godly character and
            genuine academic excellence.
          </p>
        </div>
      </section>

      {/* Beliefs */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto">
            <p className="eyebrow text-crimson">What We Believe</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              The convictions beneath everything we do
            </h2>
            <span className="rule mt-7" />
          </AnimateOnScroll>
          <div className="mt-16 grid sm:grid-cols-2 gap-8">
            {beliefs.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 100}>
                <div className="h-full bg-paper border border-line rounded-sm p-9">
                  <h3 className="font-serif text-2xl text-ink">{b.title}</h3>
                  <p className="mt-3 leading-relaxed text-text-body">{b.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation / Why */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-start">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Accreditation</p>
            <h3 className="mt-4 font-serif text-3xl text-ink">Recognized & accountable</h3>
            <p className="mt-4 leading-relaxed text-text-body">
              Elmwood is a fully accredited Christian school. Our accreditation
              reflects a commitment to high academic standards, qualified
              teachers, and continual improvement—so families can enroll with
              confidence that an Elmwood diploma carries real weight.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <p className="eyebrow text-crimson">Why Christian Education</p>
            <h3 className="mt-4 font-serif text-3xl text-ink">More than academics</h3>
            <p className="mt-4 leading-relaxed text-text-body">
              Children spend thousands of hours in school during their most
              formative years. A Christian education ensures those hours build not
              only knowledge, but wisdom—shaping how students see God, themselves,
              and the world they are called to serve.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone py-20 md:py-24 border-t border-line">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
            See where your child belongs
          </h2>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-a-tour"
              className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/academics"
              className="inline-flex items-center justify-center border border-crimson/30 text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
            >
              Explore Academics
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
