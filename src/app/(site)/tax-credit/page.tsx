import type { Metadata } from "next";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FaqAccordion from "@/components/FaqAccordion";
import type { Faq } from "@/components/faqData";

// HIDDEN DRAFT PAGE
// This page is not linked in the menu or footer, is not in the sitemap,
// and asks search engines not to list it. To launch it later:
//   1. Remove the `robots` block below.
//   2. Remove the "Draft" notice bar near the top of the page.
//   3. Add "/tax-credit" to src/app/sitemap.ts and link it from the menu.
export const metadata: Metadata = {
  title: "Education Freedom Tax Credit",
  description:
    "Beginning in 2027, a new federal tax credit lets you turn up to $1,700 of your federal income tax into scholarships for students at Elmwood Christian Academy.",
  robots: { index: false, follow: false },
};

const facts = [
  { figure: "$1,700", label: "Maximum credit per taxpayer, each year" },
  { figure: "100%", label: "Dollar for dollar credit on your federal income tax" },
  { figure: "Jan. 1, 2027", label: "First day a gift can qualify" },
  { figure: "5 years", label: "To carry forward any credit you cannot use" },
];

const steps = [
  {
    title: "Give",
    body: "On or after January 1, 2027, make a gift of up to $1,700 to an approved scholarship granting organization and choose to support Elmwood students.",
  },
  {
    title: "Keep your receipt",
    body: "The scholarship organization sends you a receipt for your gift. Hold on to it with your tax records.",
  },
  {
    title: "Claim the credit",
    body: "When you file your 2027 federal return, your gift comes off the tax you owe, dollar for dollar.",
  },
  {
    title: "A student receives a scholarship",
    body: "The scholarship organization awards the funds to eligible families, who use them toward tuition and other approved school costs.",
  },
];

const supporterFaqs: Faq[] = [
  {
    q: "What is the Education Freedom Tax Credit?",
    a: "It is a new federal tax credit created by Congress in 2025. Beginning January 1, 2027, an individual who gives to an approved scholarship granting organization can take that gift, up to $1,700 a year, directly off the federal income tax owed. You may also see it called the Federal Scholarship Tax Credit. Both names refer to the same program.",
  },
  {
    q: "How is a credit different from a deduction?",
    a: "A deduction only lowers the income you are taxed on. A credit lowers the tax itself. If you owe $5,000 in federal income tax and give $1,700, you owe $3,300. The gift costs you nothing beyond what you were already going to pay.",
  },
  {
    q: "Who can give?",
    a: "Any individual who owes federal income tax, whether or not you have children at Elmwood. Grandparents, church members, alumni, neighbors, and friends in any state may take part. Businesses are not eligible for this credit.",
  },
  {
    q: "Can my spouse and I both give?",
    a: "The limit is $1,700 per taxpayer. Scholarship organizations are advising that a married couple filing jointly may claim up to $3,400 when each spouse makes a gift. Final IRS rules are still being written, so please confirm with your tax advisor.",
  },
  {
    q: "What if I do not owe $1,700 in federal income tax?",
    a: "The credit cannot bring your tax below zero and it is not paid out as a refund. Any amount you cannot use may be carried forward for up to five years.",
  },
  {
    q: "Can I also take a charitable deduction for the same gift?",
    a: "No. You may claim the credit or a deduction for a gift, but not both.",
  },
  {
    q: "Can I direct my gift to my own child or to a particular student?",
    a: "No. Federal law does not allow a gift to be set aside for a specific student. Scholarships are awarded by the scholarship organization to families who qualify.",
  },
  {
    q: "Does Elmwood receive government money through this program?",
    a: "No. Every dollar comes from a private individual who chooses to give, and it goes to an independent nonprofit scholarship organization. Families then choose where to use their scholarship. Elmwood does not receive state or federal funding and remains fully independent in its mission, curriculum, and standards.",
  },
];

const familyFaqs: Faq[] = [
  {
    q: "Who qualifies for a scholarship?",
    a: "A student must be eligible to enroll in a public elementary or secondary school, and the household income may not exceed 300 percent of the area median gross income. That limit is far higher than most scholarship programs, so many families who would not expect to qualify do.",
  },
  {
    q: "Do current Elmwood students qualify?",
    a: "Yes. Students already enrolled in a private school may apply, as may students coming from public school or homeschool.",
  },
  {
    q: "Which grades are covered?",
    a: "Kindergarten through 12th grade. Preschool and Early Enrichment are not part of the federal program.",
  },
  {
    q: "What can a scholarship pay for?",
    a: "Tuition, fees, books, and other approved school expenses for kindergarten through 12th grade, subject to federal rules and the rules of the scholarship organization.",
  },
  {
    q: "How much will a scholarship be?",
    a: "Award amounts have not been announced. They will depend on how much is given and how many families apply. Meeting the income limit does not guarantee an award.",
  },
  {
    q: "How and when do we apply?",
    a: "Families apply to the scholarship organization, not to the school. We will post the application link and dates here as soon as they are available. In the meantime, call the school office and we will add you to our list.",
  },
];

export default function TaxCreditPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Education Freedom Tax Credit"
        title="Turn your taxes into a scholarship"
        subtitle="Beginning in 2027, up to $1,700 of the federal income tax you already owe can help a child attend Elmwood."
      />

      {/* Draft notice: remove at launch */}
      <div className="bg-stone-2 border-b border-line">
        <p className="max-w-7xl mx-auto px-6 py-3 text-center text-sm text-text-body">
          <strong className="text-ink">Draft for review.</strong> This page is
          not yet linked on the website or listed in search engines.
        </p>
      </div>

      {/* Intro */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">A New Opportunity</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              A gift that costs you nothing extra
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              For more than fifty years, Elmwood Christian Academy has operated
              on tuition, fees, and the gifts of God&rsquo;s people. A new
              federal tax credit now gives every taxpayer a simple way to help.
              Instead of sending the full amount of your federal income tax to
              Washington, you may send up to $1,700 of it to a scholarship
              organization that helps families afford a Christ centered
              education.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-text-body">
              Colorado has elected to take part for 2027, which means Colorado
              students, including students at Elmwood, may receive these
              scholarships.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((f, i) => (
              <AnimateOnScroll key={f.label} delay={i * 90}>
                <div className="h-full border border-line rounded-sm p-7 bg-stone text-center">
                  <p className="font-serif text-4xl md:text-5xl text-crimson leading-none">
                    {f.figure}
                  </p>
                  <div className="mt-4 h-px w-10 bg-crimson/40 mx-auto" />
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-text-body">
                    {f.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="bg-stone py-24 md:py-28 border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Two Paths</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Two paths, one purpose
            </h2>
          </AnimateOnScroll>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <div className="h-full border border-line rounded-sm p-8 md:p-10 bg-paper">
                <p className="eyebrow text-crimson">For Supporters</p>
                <h3 className="mt-4 font-serif text-3xl text-ink">
                  Help a family choose Elmwood
                </h3>
                <div className="mt-4 h-px w-10 bg-crimson/40" />
                <p className="mt-5 leading-relaxed text-text-body">
                  You do not need a child at Elmwood to take part. Parents,
                  grandparents, church members, alumni, and friends may all
                  give, and each gift comes back to you as a credit on your
                  federal return.
                </p>
                <a
                  href="#how-it-works"
                  className="mt-7 inline-flex items-center justify-center bg-crimson text-white font-semibold px-7 py-3.5 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
                >
                  See How It Works
                </a>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={90}>
              <div className="h-full border border-line rounded-sm p-8 md:p-10 bg-paper">
                <p className="eyebrow text-crimson">For Families</p>
                <h3 className="mt-4 font-serif text-3xl text-ink">
                  Could a scholarship help your family?
                </h3>
                <div className="mt-4 h-px w-10 bg-crimson/40" />
                <p className="mt-5 leading-relaxed text-text-body">
                  Scholarships may be used toward tuition and other approved
                  costs for students in kindergarten through 12th grade. The
                  income limit is generous, and current Elmwood families may
                  apply alongside new ones.
                </p>
                <a
                  href="#families"
                  className="mt-7 inline-flex items-center justify-center border border-crimson text-crimson font-semibold px-7 py-3.5 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson hover:text-white transition-colors"
                >
                  See Who Qualifies
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">For Supporters</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              How it works
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Say you owe $5,000 in federal income tax for 2027. You give
              $1,700 to a scholarship organization during the year. When you
              file, you owe $3,300. Your total is the same, but $1,700 of it
              went to help a child.
            </p>
          </AnimateOnScroll>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 90}>
                <div className="h-full border border-line rounded-sm p-7 bg-stone">
                  <p className="font-serif text-5xl text-crimson/70 leading-none">
                    {i + 1}
                  </p>
                  <h3 className="mt-5 font-serif text-2xl text-ink">
                    {s.title}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-crimson/40" />
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-text-body">
                    {s.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Many hands */}
      <section className="bg-crimson-deep py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-white/55">Many Hands</p>
            <span className="rule mt-4 mx-auto bg-white/70" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-white leading-tight">
              One gift helps a child. Many gifts change a school.
            </h2>
            <div className="mt-12 grid sm:grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white">$17,000</p>
                <p className="mt-3 text-white/70">from 10 gifts of $1,700</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white">$85,000</p>
                <p className="mt-3 text-white/70">from 50 gifts of $1,700</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white">$170,000</p>
                <p className="mt-3 text-white/70">from 100 gifts of $1,700</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Families */}
      <section id="families" className="bg-stone py-24 md:py-28 border-b border-line">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">For Families</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Who qualifies for a scholarship
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Families apply to the scholarship organization, which reviews
              each application and makes the awards. Details on award amounts
              and application dates are still being finalized, and we will
              post them here as soon as we have them.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={90}>
            <ul className="border-t border-line">
              {[
                "Your child is in kindergarten through 12th grade and is eligible to enroll in a public school.",
                "Your household income is at or below 300 percent of the area median gross income.",
                "Your child may already attend Elmwood, or may be coming from public school or homeschool.",
                "Meeting these requirements makes a family eligible to apply. It does not guarantee an award.",
              ].map((line) => (
                <li
                  key={line}
                  className="border-b border-line py-5 flex gap-4 text-lg leading-relaxed text-text-body"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateOnScroll className="max-w-3xl">
            <p className="eyebrow text-crimson">Questions</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Frequently asked questions
            </h2>
          </AnimateOnScroll>

          <div className="mt-14 grid lg:grid-cols-2 gap-14">
            <AnimateOnScroll>
              <h3 className="eyebrow text-crimson mb-6">For Supporters</h3>
              <FaqAccordion items={supporterFaqs} />
            </AnimateOnScroll>
            <AnimateOnScroll delay={90}>
              <h3 className="eyebrow text-crimson mb-6">For Families</h3>
              <FaqAccordion items={familyFaqs} />
            </AnimateOnScroll>
          </div>

          <p className="mt-14 max-w-3xl text-sm leading-relaxed text-text-muted">
            This page is general information and is not tax advice. Federal
            rules for this credit are still being finalized. Please consult
            your tax advisor about your own situation.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone py-24 md:py-28 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">Next Step</p>
            <span className="rule mt-4 mx-auto" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              Let us know you are interested
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-body max-w-2xl mx-auto">
              Giving and application links will be posted here when they open.
              Until then, call the school office and we will keep you informed,
              whether you hope to give or hope to apply.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13036593818"
                className="inline-flex items-center justify-center bg-crimson text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson-dark transition-colors"
              >
                Call 303.659.3818
              </a>
              <Link
                href="/schedule-a-tour"
                className="inline-flex items-center justify-center border border-crimson text-crimson font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-crimson hover:text-white transition-colors"
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
