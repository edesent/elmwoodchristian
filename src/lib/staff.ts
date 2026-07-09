export interface StaffMember {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio?: string;
}

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
    photo: "/staff/0098-lopez-shannon-01.jpg",
    bio: "Shannon and her husband, Rick, have served the Elmwood family for more than a decade.",
  },
  { slug: "janna-green", name: "Janna Green", role: "Faculty", photo: "/staff/0077-green-janna-01.jpg" },
  { slug: "pam-hoshiko", name: "Pam Hoshiko", role: "Faculty", photo: "/staff/0061-hoshiko-pam-01.jpg" },
  { slug: "tory-strohfus", name: "Tory Strohfus", role: "Faculty", photo: "/staff/0021-strohfus-tory-01.jpg" },
  { slug: "lisa-nevarez", name: "Lisa Nevarez", role: "Faculty", photo: "/staff/0111-nevarez-lisa-01.jpg" },
  { slug: "debbie-pallaoro", name: "Debbie Pallaoro", role: "Faculty", photo: "/staff/0120-pallaoro-debbie-01.jpg" },
  { slug: "stephanie-hinricher", name: "Stephanie Hinricher", role: "Faculty", photo: "/staff/0058-hinricher-stephanie-01.jpg" },
  { slug: "caren-green", name: "Caren Green", role: "Faculty", photo: "/staff/0047-green-caren-01.jpg" },
  { slug: "sam-nevarez", name: "Sam Nevarez", role: "Faculty", photo: "/staff/0030-nevarez-sam-01.jpg" },
  { slug: "garrett-glover", name: "Garrett Glover", role: "Faculty", photo: "/staff/0003-glover-garrett-01.jpg" },
  { slug: "sarah-carlson", name: "Sarah Carlson", role: "Faculty", photo: "/staff/sarah-carlson.jpg" },
  { slug: "connie-kish", name: "Connie Kish", role: "Faculty", photo: "/staff/connie-kish.jpg" },
  { slug: "lori-knutsen", name: "Lori Knutsen", role: "Faculty", photo: "/staff/lori-knutsen.jpg" },
  { slug: "brenda-lehman", name: "Brenda Lehman", role: "Faculty", photo: "/staff/brenda-lehman.jpg" },
  { slug: "samantha-parks", name: "Samantha Parks", role: "Faculty", photo: "/staff/samantha-parks.jpg" },
];
