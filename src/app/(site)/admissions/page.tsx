import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to enroll at Elmwood Christian Academy in Brighton, Colorado: apply online, pay the registration fee, complete placement testing and a family interview, and submit records. Preschool through 12th grade.",
};

const steps = [
  {
    n: "01",
    title: "Apply",
    body: "Complete our online Application for Enrollment, or download the printable form. It only takes a few minutes and is sent straight to our office.",
  },
  {
    n: "02",
    title: "Registration Fee",
    body: "A non-refundable registration fee per student accompanies the application. See the Tuition Information sheet for current rates and payment plans.",
  },
  {
    n: "03",
    title: "Placement Testing",
    body: "Students entering 5th grade or higher complete a diagnostic test in each subject ($25, due at testing) so we can place them at their exact academic level.",
  },
  {
    n: "04",
    title: "Family Interview",
    body: "All new students and parents meet with the principal—often scheduled together with testing—to get to know one another and answer your questions.",
  },
];

const downloads = [
  {
    title: "1st–12th Grade Enrollment Form",
    desc: "Printable application for students entering grades one through twelve.",
    href: "/forms/enrollment-1st-12th.pdf",
  },
  {
    title: "Preschool–Kindergarten Enrollment Form",
    desc: "Printable application for our youngest learners, preschool through kindergarten.",
    href: "/forms/enrollment-prek-k.pdf",
  },
  {
    title: "Tuition & Fees Information",
    desc: "Current tuition rates, fees, and available payment plans.",
    href: "/forms/tuition-information.pdf",
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

      {/* Principal's welcome */}
      <section className="bg-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">A Word of Welcome</p>
            <span className="rule mt-4" />
            <blockquote className="mt-8 font-serif text-2xl md:text-3xl text-ink leading-relaxed italic">
              &ldquo;I am delighted that you are considering Elmwood Christian
              Academy for the education of your child. Deciding where your
              children will spend their formative years is an incredibly
              important decision, and I encourage you to seek the Lord in prayer
              as you consider Elmwood. We are seeking families who want to see
              their children grow in their relationship with Christ and develop
              the academic and social skills to be effective ambassadors for the
              Lord Jesus Christ.&rdquo;
            </blockquote>
            <p className="mt-6 text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">
              Rick Lopez · Principal / Administrator
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-stone py-20 md:py-24 border-y border-line">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Start Here</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Apply online in minutes
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body max-w-2xl mx-auto">
              Our online application walks you through each section and creates a
              completed PDF that&rsquo;s sent to our office. Prefer paper? You can
              download the printable forms below.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/admissions/apply"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                Start the Application
              </Link>
              <Link
                href="/schedule-a-tour"
                className="inline-flex items-center justify-center border border-crimson/30 text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson/5 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl">
            <p className="eyebrow text-crimson">How to Enroll</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Four steps to enrollment
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.n} delay={i * 80}>
                <div className="h-full bg-paper border border-line rounded-sm p-8">
                  <div className="font-serif text-4xl text-crimson/80">{s.n}</div>
                  <div className="mt-3 h-px w-10 bg-crimson/40" />
                  <h3 className="mt-4 font-serif text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-text-body">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The enrollment process (detailed) */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-5xl mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl">
            <p className="eyebrow text-crimson">In Detail</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              The enrollment process
            </h2>
          </AnimateOnScroll>

          <div className="mt-14 space-y-12">
            <AnimateOnScroll>
              <h3 className="font-serif text-2xl md:text-3xl text-ink">
                Complete the application
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-text-body">
                You may apply online or download the forms below and mail,
                deliver, or fax them (fax 720.685.9005) to the school office. The
                registration fee should accompany the application; current
                amounts are listed in the Financial Information.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <h3 className="font-serif text-2xl md:text-3xl text-ink">
                Entrance diagnostic test
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-text-body">
                An entrance diagnostic test must be taken by all students
                advancing into 5th grade or higher. A testing fee of $25.00 is
                due at the time of testing.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <h3 className="font-serif text-2xl md:text-3xl text-ink">
                Principal interview
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-text-body">
                An interview with the Principal is required of all new students
                and their parents. We can often schedule the interview to
                coincide with testing.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <h3 className="font-serif text-2xl md:text-3xl text-ink">
                Records to bring to testing
              </h3>
              <ul className="mt-5 space-y-3 text-lg text-text-body">
                {[
                  "Student’s birth certificate",
                  "Student’s current immunization record",
                  "Copy of the most recent report card and achievement-test results",
                ].map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="text-crimson mt-1">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <h3 className="font-serif text-2xl md:text-3xl text-ink">
                Final registration
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-text-body">
                Registration is complete when the registration fee is paid in
                full, testing is complete, and all necessary records have been
                received.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Forms & downloads */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <AnimateOnScroll className="max-w-2xl">
            <p className="eyebrow text-crimson">Paper Forms</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Forms &amp; downloads
            </h2>
          </AnimateOnScroll>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {downloads.map((d, i) => (
              <AnimateOnScroll key={d.href} delay={i * 80}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col bg-paper border border-line rounded-sm p-8 hover:border-crimson/40 transition-colors"
                >
                  <h3 className="font-serif text-2xl text-ink">{d.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-text-body flex-1">
                    {d.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-crimson font-semibold uppercase tracking-[0.12em] text-sm">
                    Download (PDF) →
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Affordability / tuition band */}
      <section className="bg-crimson py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-white/55">Financial Information</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-white leading-tight">
              Quality education, within reach
            </h2>
            <p className="mt-7 text-lg md:text-xl leading-relaxed text-white/85 max-w-2xl mx-auto">
              Elmwood has one of the lowest private-school tuition rates in the
              area. We believe a quality Christian education should be accessible
              regardless of financial circumstances, and we keep pricing
              affordable without compromising educational quality.
            </p>
            <p className="mt-6 text-sm text-white/60">
              (Rates and requirements are subject to change.)
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="/forms/tuition-information.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center bg-white text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-white/90 transition-colors"
              >
                Tuition &amp; Fees (PDF)
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Admissions policy */}
      <section className="bg-stone py-20 md:py-24 border-y border-line">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Admissions Policy</p>
            <span className="rule mt-4" />
            <p className="mt-7 text-sm leading-relaxed text-text-muted">
              Elmwood Christian Academy admits students of any race, color, or
              national origin to all the rights, privileges, programs, and
              activities generally made available to students at the school, and
              does not discriminate on the basis of race, color, or national or
              ethnic origin in its educational policies, admissions policies, or
              athletic and other school-administered programs. As a private
              institution, Elmwood reserves the right to refuse admission to
              anyone who fails to meet the entrance requirements or who professes
              a lifestyle contrary to that defined by Scripture, and to suspend
              or expel any student who violates the school&rsquo;s standards of
              conduct.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="bg-paper py-24 md:py-28 border-t border-line">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Visit &amp; Contact</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-ink leading-tight">
              We&rsquo;d love to hear from you
            </h2>
            <dl className="mt-9 space-y-6 text-text-body">
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">Campus</dt>
                <dd className="mt-1 text-lg">13100 E 144th Ave<br />Brighton, CO 80601</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">Phone</dt>
                <dd className="mt-1 text-lg">
                  <a href="tel:+13036593818" className="hover:text-crimson transition-colors">303.659.3818</a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">Email</dt>
                <dd className="mt-1 text-lg">
                  <a href="mailto:office@elmwoodchristianacademy.org" className="hover:text-crimson transition-colors break-words">
                    office@elmwoodchristianacademy.org
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-crimson font-semibold">Office Hours</dt>
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
