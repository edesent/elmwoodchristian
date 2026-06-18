export interface StaffMember {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio?: string;
}

// Photos provided by the school. Roles/bios are verified where noted; the rest are
// listed as Faculty (the old site listed them as instructors). Bios marked TODO
// below should be replaced with each teacher's real bio when available.
export const STAFF: StaffMember[] = [
  {
    slug: "rick-lopez",
    name: "Rick Lopez",
    role: "Principal & Administrator",
    photo: "/staff/rick-lopez.jpg",
    bio: "Rick and his wife, Shannon, have faithfully served the Elmwood family for more than a decade. He administers the Academy and helps lead its ministries with a heart to see every student grow in Christ.",
  },
  {
    slug: "brandon-bowser",
    name: "Brandon Bowser",
    role: "Junior & Senior High",
    photo: "/staff/brandon-bowser.jpg",
    bio: "Pastor Bowser joined Elmwood in December 2019 and teaches grades 7–12. He has served in ministry for more than seventeen years.",
  },
  {
    slug: "meghan-bowser",
    name: "Meghan Bowser",
    role: "Junior & Senior High",
    photo: "/staff/meghan-bowser.jpg",
    bio: "Mrs. Bowser teaches alongside her husband in the Academy's junior and senior high.",
  },
  {
    slug: "shannon-lopez",
    name: "Shannon Lopez",
    role: "Staff",
    photo: "/staff/shannon-lopez.jpg",
    bio: "Shannon and her husband, Rick, have served the Elmwood family for more than a decade.",
  },
  { slug: "sarah-carlson", name: "Sarah Carlson", role: "Faculty", photo: "/staff/sarah-carlson.jpg" },
  { slug: "janna-green", name: "Janna Green", role: "Faculty", photo: "/staff/janna-green.jpg" },
  { slug: "pam-hoshiko", name: "Pam Hoshiko", role: "Faculty", photo: "/staff/pam-hoshiko.jpg" },
  { slug: "connie-kish", name: "Connie Kish", role: "Faculty", photo: "/staff/connie-kish.jpg" },
  { slug: "lori-knutsen", name: "Lori Knutsen", role: "Faculty", photo: "/staff/lori-knutsen.jpg" },
  { slug: "brenda-lehman", name: "Brenda Lehman", role: "Faculty", photo: "/staff/brenda-lehman.jpg" },
  { slug: "samantha-parks", name: "Samantha Parks", role: "Faculty", photo: "/staff/samantha-parks.jpg" },
  { slug: "tory-strohfus", name: "Tory Strohfus", role: "Faculty", photo: "/staff/tory-strohfus.jpg" },
];
