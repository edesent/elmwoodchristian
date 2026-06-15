import type { Metadata } from "next";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Enroll at Elmwood Christian Academy in Brighton, Colorado. Schedule a tour, learn about our simple admissions process, and request tuition information for preschool through 12th grade.",
};

const steps = [
  {
    n: "01",
    title: "Inquire",
    body: "Reach out by phone or email to tell us about your family and the grade level you're considering. We'll answer your questions and send you what you need.",
  },
  {
    n: "02",
    title: "Visit",
    body: "Schedule a personal tour. Walk our halls, meet our teachers, and see our students at work—the best way to know if Elmwood is the right fit.",
  },
  {
    n: "03",
    title: "Apply",
    body: "Complete a simple enrollment application. We'll review your child's background and, where helpful, do a brief placement assessment.",
  },
  {
    n: "04",
    title: "Enroll",
    body: "Once accepted, we'll welcome your family, finalize enrollment, and help your child get a confident, encouraging start at Elmwood.",
  },
];

export default function AdmissionsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Admissions"
        title="Welcome your child to Elmwood"
        subtitle="A simple, personal process—because choosing a school is a big decision."
      />

      {/* Steps */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl">
            <p className="eyebrow text-crimson">How to Enroll</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Four simple steps
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.n} delay={i * 100}>
                <div className="h-full">
                  <div className="font-serif text-4xl text-crimson/80">{s.n}</div>
                  <div className="mt-3 h-px w-10 bg-crimson/40" />
                  <h3 className="mt-4 font-serif text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-text-body">
                    {s.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section className="bg-crimson text-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow text-white/55">Tuition &amp; Affordability</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl leading-tight">
            A quality Christian education, within reach
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            We work hard to keep an Elmwood education affordable for families,
            with options that fit a range of budgets. Reach out and we'll walk you
            through current tuition, fees, and any available assistance for your
            child's grade level.
          </p>
          <a
            href="mailto:office@elmwoodchristianacademy.org?subject=Tuition%20Information"
            className="inline-flex items-center justify-center mt-9 bg-white text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-stone transition-colors"
          >
            Request Tuition Info
          </a>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Visit &amp; Contact</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              We'd love to hear from you
            </h2>
            <dl className="mt-9 space-y-6 text-text-body">
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                  Campus
                </dt>
                <dd className="mt-1 text-lg">
                  13100 E 144th Ave
                  <br />
                  Brighton, CO 80601
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                  Phone
                </dt>
                <dd className="mt-1 text-lg">
                  <a href="tel:+13036593818" className="hover:text-crimson transition-colors">
                    303.659.3818
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                  Email
                </dt>
                <dd className="mt-1 text-lg">
                  <a
                    href="mailto:office@elmwoodchristianacademy.org"
                    className="hover:text-crimson transition-colors break-words"
                  >
                    office@elmwoodchristianacademy.org
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
                  Office Hours
                </dt>
                <dd className="mt-1 text-lg">Monday–Friday · 7:30 AM – 3:30 PM</dd>
              </div>
            </dl>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="overflow-hidden rounded-sm border border-line shadow-[0_18px_50px_rgba(32,29,27,0.10)]">
              <iframe
                title="Elmwood Christian Academy location"
                src="https://www.google.com/maps?q=13100+E+144th+Ave,+Brighton,+CO+80601&output=embed"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
