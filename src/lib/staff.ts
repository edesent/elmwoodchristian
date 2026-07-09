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
    photo: "/staff/rick-lopez-principal-3.png",
    bio: "Rick and his wife, Shannon, have faithfully served the Elmwood family for more than a decade. He administers the Academy and helps lead its ministries with a heart to see every student grow in Christ.",
  },
  {
    slug: "shannon-lopez",
    name: "Shannon Lopez",
    role: "Staff",
    photo: "/staff/0098-lopez-shannon-02.jpg",
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
];
