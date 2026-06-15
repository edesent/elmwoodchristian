export interface Faq {
  q: string;
  a: string;
}

// Shared FAQ content — homepage shows the first few; /faq shows all.
export const FAQS: Faq[] = [
  {
    q: "What ages and grades does Elmwood serve?",
    a: "Elmwood serves students from Early Enrichment (ages 2–3) and preschool all the way through 12th grade—one Christ-centered campus for every stage of your child's growth.",
  },
  {
    q: "What curriculum does Elmwood use?",
    a: "We use an individualized, mastery-based curriculum with Scripture and biblical character woven throughout every subject. Students advance only once they have truly mastered the material, so every year builds on a solid foundation.",
  },
  {
    q: "Is Elmwood accredited?",
    a: "Yes. Elmwood Christian Academy is fully accredited through the National Association of Private Schools, reflecting our commitment to high academic standards and qualified teachers.",
  },
  {
    q: "Do we need to belong to a particular church to enroll?",
    a: "No. We welcome Christian families and any family who desires a loving, Christ-centered education for their child. Our mission is to come alongside parents as partners in raising the next generation.",
  },
  {
    q: "How large are classes, and what is the teacher-to-student ratio?",
    a: "Classes are intentionally small—roughly one teacher for every twelve students—so every child is known by name and receives the personal attention they need to thrive.",
  },
  {
    q: "What does tuition cost, and is financial assistance available?",
    a: "We work hard to keep an Elmwood education affordable, with options that fit a range of budgets. Contact our office and we'll walk you through current tuition, fees, and any available assistance for your child's grade level.",
  },
  {
    q: "What are the school hours?",
    a: "Our office is open Monday through Friday, 7:30 AM to 3:30 PM. We're glad to answer questions about the daily schedule for each grade level when you visit.",
  },
  {
    q: "How do I apply or schedule a tour?",
    a: "Simply reach out by phone or email to tell us about your family. We'll answer your questions, schedule a personal tour, and guide you through a straightforward enrollment application.",
  },
];
