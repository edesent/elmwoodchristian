export interface Faq {
  q: string;
  a: string;
}

// Combines Elmwood's real FAQs (from ebabrighton.org/about-us/f-a-q) with our
// added questions, adapted to the Elmwood Christian Academy rebrand.
// Homepage shows the first few; /faq shows all.
export const FAQS: Faq[] = [
  {
    q: "What ages and grades does Elmwood serve?",
    a: "Elmwood serves students from Early Enrichment (ages 2–3) and preschool all the way through 12th grade—one Christ-centered campus for every stage of your child's growth.",
  },
  {
    q: "What curriculum does Elmwood use?",
    a: "We use the time-tested A Beka curriculum in our youngest grades (Kindergarten–3rd) and the individualized, mastery-based A.C.E. (Accelerated Christian Education) curriculum from 4th through 12th grade, so each student progresses through every subject at their own academic ability. Scripture and biblical character are woven throughout.",
  },
  {
    q: "Is Elmwood accredited, and can my child go to college with an Elmwood diploma?",
    a: "Elmwood is fully accredited through the National Association of Private Schools. We do not seek or recognize government accreditation or certification—yet our graduates are exceptionally well prepared: every Elmwood graduate over the last decade has been accepted to the college of their choice.",
  },
  {
    q: "Do we need to belong to a particular church to enroll?",
    a: "No. We welcome Christian families and any family who desires a loving, Christ-centered education for their child. Our mission is to come alongside parents as partners in raising the next generation.",
  },
  {
    q: "How long has Elmwood been in existence?",
    a: "Elmwood was founded in 1973 and has served families in the Brighton area for more than fifty years.",
  },
  {
    q: "What is the student-to-teacher ratio?",
    a: "Class sizes are intentionally small and depend on the curriculum: our A Beka classrooms maintain about a 1:20 student-to-teacher ratio, and our individualized A.C.E. classrooms about 1:15—so every student receives personal attention.",
  },
  {
    q: "Are Elmwood's teachers trained and certified?",
    a: "Yes. Every Elmwood teacher is thoroughly trained and certified in the A Beka and A.C.E. systems of education.",
  },
  {
    q: "Is there placement testing for my child?",
    a: "Yes. New students are diagnostically tested in every subject area and placed at the exact point of their individual academic ability—so they are neither held back nor pushed ahead.",
  },
  {
    q: "What does tuition cost, and is financial assistance available?",
    a: "Tuition and fees are set each year by the administration and provided on our Financial Information sheet. Elmwood operates solely on tuition, fees, and gifts. Contact our office and we'll walk you through current costs and any available assistance for your child's grade level.",
  },
  {
    q: "Are Elmwood's staff members committed Christians?",
    a: "Yes. Every staff member is a professing Christian and active church member, and each one passes a complete background investigation before joining Elmwood.",
  },
  {
    q: "Does Elmwood accept state or federal funding?",
    a: "By conviction, Elmwood does not accept state or federal funding, or any government-controlled voucher program. This keeps our Christ-centered mission free, focused, and independent.",
  },
  {
    q: "What are the school hours?",
    a: "Our office is open Monday through Friday, 7:30 AM to 3:30 PM. We're glad to share the daily schedule for each grade level when you visit.",
  },
  {
    q: "How do I apply or schedule a tour?",
    a: "Simply reach out by phone or email to tell us about your family. We'll answer your questions, schedule a personal tour, and guide you through a straightforward enrollment application.",
  },
];
