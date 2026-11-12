import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

// TOP PHOTO
// Leave empty ("") to show a "photo goes here" panel. Once the photo is
// uploaded, put its path here, for example "/img/tax-credit-students.jpg".
const heroPhoto: string = "/img/smiling-students-at-school-entrance.png";

const facts = [
  { figure: "$1,700", label: "Up to $1,700 per person, each year" },
  { figure: "$3,400", label: "Up to $3,400 per joint filing, each year" },
  { figure: "Jan. 1, 2027", label: "First day a gift can qualify" },
  { figure: "5 years", label: "To carry forward any credit you cannot use" },
];

// FUNDING CHART NUMBERS
// Change the amounts (whole dollars) or labels below. You can add or remove
// rows. The total in the heading and the length of every bar are worked out
// automatically. These are SAMPLE numbers until the real ones are supplied.
const fundingAreSampleNumbers = true;
const funding = [
  { label: "from tuition and fees", amount: 600000, color: "bg-crimson-deep" },
  { label: "from church support and gifts", amount: 250000, color: "bg-crimson" },
  { label: "from fundraising", amount: 50000, color: "bg-brass" },
];
const fundingTotal = funding.reduce((sum, f) => sum + f.amount, 0);

function formatMoney(n: number) {
  if (n >= 1_000_000) {
    const m = n / 1_000_000;
    return "$" + (Number.isInteger(m) ? m : m.toFixed(1)) + " million";
  }
  return "$" + n.toLocaleString("en-US");
}

// Simple line drawings for the four "How it works" steps, in order.
const stepIcons = [
  "M12 20.5s-7.5-4.7-9-9.6C2 7.6 4.2 5 7 5c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 2.8 0 5 2.6 4 5.9-1.5 4.9-9 9.6-9 9.6z",
  "M6 3h12v18l-3-2-3 2-3-2-3 2V3z M9 8h6 M9 12h6",
  "M7 3h7l4 4v14H7V3z M14 3v4h4 M9.5 14.5l2 2 3.5-4",
  "M2 9l10-5 10 5-10 5-10-5z M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5 M22 9v6",
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
    a: "Yes. The credit is up to $1,700 per person and up to $3,400 per joint filing. Each spouse makes a gift of up to $1,700. Please confirm the details of your own return with your tax advisor.",
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
      {/* Top: headline and photo */}
      <header className="relative bg-crimson-deep overflow-hidden pt-[150px] md:pt-[170px] pb-20">
        <Image
          src="/brand/header-crest.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          aria-hidden
          className="object-cover object-right pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-crimson-deep/60" />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-white/60 mb-5">
              Education Freedom Tax Credit
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white leading-[1.08]">
              Sponsor a child&rsquo;s Christian education with tax dollars you
              already owe.
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-white/80 mt-6 leading-relaxed">
              Beginning in 2027, up to $1,700 of your federal income tax can
              go toward a scholarship instead. It costs you nothing extra.
            </p>
            <span className="rule mt-8 bg-white/70" />
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-white text-crimson-deep font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-stone transition-colors"
              >
                See How It Works
              </a>
              <a
                href="#families"
                className="inline-flex items-center justify-center border border-white/70 text-white font-semibold px-8 py-4 rounded-sm uppercase tracking-[0.1em] text-sm hover:bg-white hover:text-crimson-deep transition-colors"
              >
                See Who Qualifies
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-sm overflow-hidden border border-white/25 shadow-2xl">
            {heroPhoto ? (
              <Image
                src={heroPhoto}
                alt="Two Elmwood Christian Academy students in school dress, holding their books"
                fill
                priority
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-stone-2 flex items-center justify-center p-8 text-center">
                <p className="text-xl text-text-body">
                  <strong className="text-ink">Photo goes here.</strong>
                  <br />
                  Two Elmwood students in polo shirts, holding books.
                </p>
              </div>
            )}
          </div>
        </div>
      </header>

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
            <p className="mt-6 text-xl leading-relaxed text-text-body">
              For more than fifty years, Elmwood Christian Academy has operated
              on tuition, fees, and the gifts of God&rsquo;s people. A new
              federal tax credit now gives every taxpayer a simple way to help.
              Instead of sending the full amount of your federal income tax to
              Washington, you may send up to $1,700 per person, or up to $3,400 per joint filing, to a scholarship
              organization that helps families afford a Christ centered
              education.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-text-body">
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
                  <p className="mt-4 text-lg leading-relaxed text-text-body">
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
                <p className="mt-5 text-lg leading-relaxed text-text-body">
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
                <p className="mt-5 text-lg leading-relaxed text-text-body">
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
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimateOnScroll>
              <p className="eyebrow text-crimson">For Supporters</p>
              <span className="rule mt-4" />
              <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
                How it works
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-text-body">
                Say you owe $5,000 in federal income tax for 2027. You give
                $1,700 to a scholarship organization during the year. When you
                file, you owe $3,300. Your total is the same, but $1,700 of it
                went to help a child.
              </p>
              <p className="mt-5 text-xl leading-relaxed text-text-body">
                A credit is not a deduction. It comes straight off the tax you
                owe, dollar for dollar.
              </p>
            </AnimateOnScroll>

            {/* Infographic: where your tax dollars go */}
            <AnimateOnScroll delay={90}>
              <div className="border border-line rounded-sm bg-stone p-7 md:p-10">
                <p className="eyebrow text-crimson">An Example</p>
                <p className="mt-3 font-serif text-3xl text-ink leading-tight">
                  You owe $5,000 in federal income tax
                </p>

                <p className="mt-8 text-lg font-semibold text-ink">
                  Without the credit
                </p>
                <div className="mt-3 flex h-16 rounded-sm overflow-hidden text-white text-lg font-semibold">
                  <div className="w-full bg-charcoal-soft flex items-center justify-center">
                    $5,000 to the IRS
                  </div>
                </div>

                <p className="mt-8 text-lg font-semibold text-ink">
                  With the credit
                </p>
                <div className="mt-3 flex h-16 rounded-sm overflow-hidden text-white text-lg font-semibold">
                  <div
                    className="bg-charcoal-soft flex items-center justify-center"
                    style={{ width: "66%" }}
                  >
                    $3,300 to the IRS
                  </div>
                  <div
                    className="bg-crimson flex items-center justify-center"
                    style={{ width: "34%" }}
                  >
                    $1,700
                  </div>
                </div>
                <div className="mt-2 flex text-base font-semibold text-crimson">
                  <span style={{ width: "66%" }} />
                  <span className="text-center" style={{ width: "34%" }}>
                    to a scholarship
                  </span>
                </div>

                <div className="mt-8 border-t border-line pt-6 flex items-center gap-5">
                  <span className="shrink-0 h-14 w-14 rounded-full bg-crimson text-white flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d={stepIcons[3]} />
                    </svg>
                  </span>
                  <p className="font-serif text-2xl text-ink leading-snug">
                    The same $5,000 leaves your pocket. A child receives a
                    scholarship.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Four steps, connected */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 90}>
                <div className="relative text-center">
                  {i < steps.length - 1 && (
                    <span
                      className="hidden lg:block absolute top-10 h-px bg-crimson/40"
                      style={{ left: "calc(50% + 3rem)", right: "calc(-50% + 1.5rem)" }}
                      aria-hidden
                    />
                  )}
                  <span className="relative mx-auto h-20 w-20 rounded-full bg-crimson text-white flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-9 w-9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d={stepIcons[i]} />
                    </svg>
                    <span className="absolute -top-1 -right-1 h-8 w-8 rounded-full bg-paper border border-crimson text-crimson font-semibold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-ink">
                    {s.title}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-crimson/40 mx-auto" />
                  <p className="mt-4 text-lg leading-relaxed text-text-body">
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
                <p className="mt-3 text-lg text-white/70">from 10 gifts of $1,700</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white">$85,000</p>
                <p className="mt-3 text-lg text-white/70">from 50 gifts of $1,700</p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-white">$170,000</p>
                <p className="mt-3 text-lg text-white/70">from 100 gifts of $1,700</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Funding chart */}
      <section className="bg-paper py-24 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateOnScroll>
            <p className="eyebrow text-crimson">The Need Behind the Numbers</p>
            <span className="rule mt-4" />
            <h2 className="mt-6 font-serif text-4xl md:text-5xl text-ink leading-tight">
              <span className="text-crimson">{formatMoney(fundingTotal)}</span>{" "}
              annual operating cost funded by
            </h2>

            <div className="mt-12 space-y-10">
              {funding.map((f) => (
                <div key={f.label}>
                  <p className="text-xl md:text-2xl text-text-body">
                    <span className="font-semibold text-ink">
                      {formatMoney(f.amount)}
                    </span>{" "}
                    {f.label}
                  </p>
                  <div
                    className="mt-4 h-5 w-full bg-stone-2 rounded-sm overflow-hidden"
                    role="img"
                    aria-label={`${formatMoney(f.amount)} of ${formatMoney(fundingTotal)}`}
                  >
                    <div
                      className={`h-full ${f.color}`}
                      style={{ width: `${(f.amount / fundingTotal) * 100}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-base text-text-muted">
                    of {formatMoney(fundingTotal)}
                  </p>
                </div>
              ))}
            </div>

            {fundingAreSampleNumbers && (
              <p className="mt-10 text-base text-text-muted">
                <strong className="text-ink">Sample numbers.</strong> These
                figures are placeholders and will be replaced with
                Elmwood&rsquo;s actual numbers.
              </p>
            )}
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
            <p className="mt-6 text-xl leading-relaxed text-text-body">
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
                  className="border-b border-line py-5 flex gap-4 text-xl leading-relaxed text-text-body"
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

          <div className="mt-14 grid lg:grid-cols-2 gap-14 [&_p]:text-lg">
            <AnimateOnScroll>
              <h3 className="eyebrow text-crimson mb-6">For Supporters</h3>
              <FaqAccordion items={supporterFaqs} />
            </AnimateOnScroll>
            <AnimateOnScroll delay={90}>
              <h3 className="eyebrow text-crimson mb-6">For Families</h3>
              <FaqAccordion items={familyFaqs} />
            </AnimateOnScroll>
          </div>

          <p className="mt-14 max-w-3xl text-base leading-relaxed text-text-muted">
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
            <p className="mt-6 text-xl leading-relaxed text-text-body max-w-2xl mx-auto">
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
