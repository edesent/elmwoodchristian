// Curated articles migrated from ebabrighton.org/news (rebranded to "Elmwood Christian Academy").
// Faithful to the originals; authors & dates preserved.

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string; // display date
  iso: string; // for sorting / datetime
  excerpt: string;
  body: Block[];
}

export const ARTICLES: Article[] = [
  {
    slug: "why-christian-education-uses-ace",
    title: "Why A.C.E.?",
    author: "Joshua Lehman",
    date: "April 24, 2014",
    iso: "2014-04-24",
    excerpt:
      "Once a student reaches 5th grade, Elmwood uses Accelerated Christian Education. Here's why a PACE beats a textbook—and how mastery learning produces a far superior academic experience.",
    body: [
      { type: "p", text: "Elmwood uses a nontraditional approach to learning once a student reaches the 5th grade. This approach has been proven to be very effective in training up students to be leaders. Students leave Elmwood ready for their next step of life, wherever that may be. The program that we use is Accelerated Christian Education (A.C.E.). One of the distinctives that makes A.C.E. preferable is that the basic learning tool is a PACE rather than a textbook." },
      { type: "p", text: "PACE is an acronym for Packet of Accelerated Christian Education. In the A.C.E. program, students work in PACEs through the twelfth grade level. Each academic subject for each level consists of 12 PACEs, and each student should complete a minimum of 60–72 PACEs in a school year." },
      { type: "p", text: "In a traditional school setting, a student is given a textbook that contains all of the information the student is supposed to learn that year. Time, money, student ability, test grades, and teacher desire all weigh in to how much of the textbook is actually taught. On average, a student will learn approximately 50% of what the original authors determined should be learned. This type of approach to learning is failing." },
      { type: "p", text: "A PACE, however, is written so that the student learns all of the information. The student must pass each test with an 80% or above in order to move forward. If the student does not pass, he or she repeats the material until the concepts are mastered. This mastery-based approach creates a far superior academic experience for the student." },
      { type: "h", text: "Notable features of every PACE" },
      { type: "ul", items: [
        "Bite-sized units of self-instructional material enhanced with illustrations and examples.",
        "Specific, understandable goals for the student to read before he begins work.",
        "Controlled vocabulary with pronunciations and definitions.",
        "Appropriate activities for drill, practice, and mastery of each concept.",
        "Checkups, score strips, and a Self Test for assessment and learning control.",
        "Character-story features for Biblical character patterning.",
        "Scripture and wisdom principles that provide encouragement and guidance.",
      ]},
      { type: "h", text: "Why PACEs are better than textbooks" },
      { type: "ul", items: [
        "Students see tangible results of their progress. Each completed PACE brings a new one with new character stories—something to get excited about and look forward to.",
        "PACEs teach responsibility in ways textbooks cannot. The student completes activities, Checkups, and the Self Test, scoring his own work and making his own corrections.",
        "PACEs are geared to mastery learning—new material is introduced in bite-sized pieces, practiced, and then tested for true understanding.",
        "PACEs provide instruction at the child's maturity level and allow him to learn and master concepts at his own pace.",
        "PACEs combine self-instruction, mastery, and individualization—rather than delivering information to a whole group at once.",
      ]},
      { type: "p", text: "Yes, A.C.E. is distinctively different … and better." },
    ],
  },
  {
    slug: "is-christian-education-worth-the-cost",
    title: "Is Christian Education Worth the Cost?",
    author: "Joshua Lehman",
    date: "May 21, 2014",
    iso: "2014-05-21",
    excerpt:
      "Three ways the secular system can harm Christian students—and what a meta-analysis of 90 studies found about the academic advantage of religious schools.",
    body: [
      { type: "p", text: "The education of our children is a grave responsibility for every parent. For years we have counseled Christian parents to either homeschool their children or place them in a quality Christian school. One of the primary reasons our own children are serving the Lord today is because we gave them a Christian education." },
      { type: "p", text: "Though there are many dedicated public-school teachers who truly care about their students, the public school can be very damaging to the Christian student, for the following reasons:" },
      { type: "h", text: "1. The Secular World View" },
      { type: "p", text: "In 1962, by Supreme Court decision, prayer was outlawed in our public schools. In 1963 the Court followed by outlawing Bible reading. The Bible says that the beginning of wisdom is the fear of God; with the exclusion of God, our educational system could not do anything but decline. The humanistic philosophy of our present society has great influence in public schools and a harmful effect on Christian students." },
      { type: "h", text: "2. Teachers Who Are Anti-God" },
      { type: "p", text: "Many good, Bible-believing Christian teachers serve in public schools. However, the vast majority of teachers are not Christians. Psalm 1 says, “Blessed is the man that walketh not in the counsel of the ungodly.” If God doesn't want us, as adults, to sit there, why would we send our children to be taught by men and women who deny the Lord Jesus Christ?" },
      { type: "h", text: "3. Negative Peer Pressure" },
      { type: "p", text: "By far the most negative thing about the public-school system is the negative peer pressure Christian children receive—a constant pressure to conform to the fads of this world in dress, music, lifestyle, and morality. Romans 12:2 says, “And be not conformed to this world: but be ye transformed by the renewing of your mind.”" },
      { type: "p", text: "Having said all that, consider a study published in The Peabody Journal of Education (vol. 87, issue 3). A meta-analysis of 90 studies by William Jeynes, senior fellow at the Witherspoon Institute, found that students in religious schools enjoy a significant academic advantage over their counterparts in traditional public schools and charter schools." },
      { type: "p", text: "Christian education is the choice of even secular educators today. I would encourage you to consider that as you prepare to enroll your child for the next school year." },
    ],
  },
  {
    slug: "the-importance-of-individualization",
    title: "The Importance of Individualization",
    author: "Joshua Lehman",
    date: "May 9, 2018",
    iso: "2018-05-09",
    excerpt:
      "How do children actually learn? Five research-backed factors that shape your child's learning—and how an individualized program meets each one.",
    body: [
      { type: "p", text: "“How do children learn?” The answer to this question can unlock the door to achievement for your child. Research on how children learn indicates that children:" },
      { type: "ul", items: [
        "Have varying IQs and learn at different rates.",
        "Must learn specific developmental skills.",
        "Process information differently at different developmental levels.",
        "Learn best through mastery with repetition and then review.",
        "Vary in their abilities to learn through visual, auditory, and kinesthetic/tactile stimuli.",
      ]},
      { type: "p", text: "An individualized educational package addresses each of these issues. Consider these five factors that so critically impact your child's learning:" },
      { type: "p", text: "1. Since children have different IQs and learn at different rates, testing to determine each child's knowledge and performance level is critical—including standardized testing and a diagnostic test with an educational prescription for your child." },
      { type: "p", text: "2. Testing reveals whether a child has attained certain developmental skills—sequencing, recognition of colors and shapes, relationships, and coordination—prerequisites mastered in our kindergarten program." },
      { type: "p", text: "3. Children process information differently at varying stages of development. Nearly all children from preschool to puberty can answer “who, what, when, and where.” At puberty, most become able to answer “how and why.” The curriculum concentrates on the former below 7th level and heavily addresses the latter at and above 7th level—building the deductive reasoning your child needs for college and life." },
      { type: "p", text: "4. The program is mastery-based. Most children need a concept repeated several times for mastery, so vocabulary and academic concepts are introduced, repeated, practiced, and then mastered with repetition and review." },
      { type: "p", text: "5. The program lets students learn using multiple forms of stimuli—visual, auditory, and kinesthetic—rather than only a child's single dominant medium." },
      { type: "p", text: "Children learn on an individual basis, and an individualized program meets each child's specific educational needs. To God be the glory—great things He has done and is doing for our children!" },
    ],
  },
  {
    slug: "the-influence-of-a-godly-teacher",
    title: "The Influence of a Godly Teacher",
    author: "Joshua Lehman",
    date: "July 31, 2014",
    iso: "2014-07-31",
    excerpt:
      "From the example of Diotrephes in 3 John, five characteristics of a teacher whose influence shapes students for a lifetime.",
    body: [
      { type: "p", text: "Leadership has many traits. One that characterizes godly leadership is being a good influence. If God has placed you in a classroom, you hold a position to be managed with Biblical principles, approached with a God-given vision of what can be accomplished." },
      { type: "p", text: "A good teacher keeps in mind his vision for the students he is teaching. They may not appear to be nearing completion (James 1:4), but with prayer, encouragement, and godly direction, they can fulfill God's purpose for their lives. The book of Third John tells us of a man named Diotrephes; from his poor example, we can examine positive leadership characteristics we should have." },
      { type: "h", text: "A godly teacher is a servant" },
      { type: "p", text: "Diotrephes desired to have the preeminence (3 John 9). A good servant knows his place and is not concerned about receiving recognition." },
      { type: "h", text: "A godly teacher is teachable" },
      { type: "p", text: "Diotrephes did not receive John's writing. A child once came home after his first day of kindergarten; his mother asked what he learned, and he replied, “Not enough. I have to go back tomorrow.” Do you have that attitude toward learning?" },
      { type: "h", text: "A godly teacher guards his words" },
      { type: "p", text: "A father is commanded not to provoke his child to wrath—a good command for every adult who works with children. Diotrephes used malicious words against church leaders. The tongue is often the enemy of justice." },
      { type: "h", text: "A godly teacher is content" },
      { type: "p", text: "The great enemy of contentment is comparison. Second Corinthians 10:12 warns against measuring ourselves by ourselves. Diotrephes was malcontent, and as a result a detriment to the work of the Lord." },
      { type: "h", text: "A godly teacher is hospitable" },
      { type: "p", text: "To be hospitable requires a humble, servant's spirit. Do not be so busy meeting your own needs that you miss the needs of those around you. How is your influence? Is it what the Lord wants it to be?" },
    ],
  },
  {
    slug: "christian-education-mandate-or-option",
    title: "Christian Education: Mandate or Option?",
    author: "Troy Calvert",
    date: "November 23, 2013",
    iso: "2013-11-23",
    excerpt:
      "Who teaches your children is every bit as important as what is taught. A look at the hours children spend in the classroom—and why those hours matter eternally.",
    body: [
      { type: "p", text: "Who teaches your children is every bit as important as what is taught to your children. God, through the pen of Paul, gives us a strong warning: “Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ” (Colossians 2:8). We are to be on guard because man's philosophy is empty." },
      { type: "p", text: "Think about the simple fact that your child will spend between 15,000 and 16,000 hours in the classroom between kindergarten and 12th grade. Compare that with an average of only 2,000 hours in church during that same time period; then ask yourself, does it really matter what they are taught during the hours they spend in school?" },
      { type: "p", text: "Is it realistic to think that the false teaching of the world can be washed out of your child's mind when he spends eight hours in school for every one hour he spends at church? The world serves a different god—self. The end of Romans 16:19 admonishes us, “…I would have you wise unto that which is good, and simple concerning evil.”" },
      { type: "p", text: "Kim Stegall writes, “Sometimes more harm is done by what is left unsaid. A secular science textbook discusses babies, and bees, and rainbows but never mentions the God who made them all.” We do well to remember that “the wisdom of this world is foolishness with God” (1 Corinthians 3:19)." },
      { type: "p", text: "These same concerns apply to post-secondary education as well. By various surveys, a majority of children from evangelical households who attend a non-Christian university will effectively walk away from their faith before they graduate. A God-sensitive mind is a terrible thing to waste." },
      { type: "p", text: "The decision of where and how your children are educated is one of the most important you will make. We would count it a privilege to partner with you in that calling." },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
