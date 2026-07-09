// Shared enrollment-application schema. Drives the multi-step form (client)
// and the generated PDF (server) so they always stay in sync.
// Mirrors Elmwood's official "Application for Enrollment" packet.

export type FieldType =
  | "text"
  | "email"
  | "tel"
  | "date"
  | "number"
  | "select"
  | "radio"
  | "textarea"
  | "checkbox";

export interface Field {
  name: string;
  label: string;
  type: FieldType;
  options?: string[];
  required?: boolean;
  half?: boolean;
  placeholder?: string;
  note?: string;
  /** Only show in the form when this returns true (PDF always prints any value). */
  showIf?: (d: Record<string, string>) => boolean;
}

export interface TableColumn {
  name: string;
  label: string;
  type?: FieldType;
}

export interface TableDef {
  name: string;
  label: string;
  columns: TableColumn[];
  rows: number;
}

export interface Step {
  id: string;
  title: string;
  intro?: string;
  fields: Field[];
  table?: TableDef;
  showIf?: (d: Record<string, string>) => boolean;
}

export const GRADES = [
  "Early Enrichment (age 2–3)",
  "Preschool",
  "Kindergarten",
  "Advanced Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
];

// Salvation testimony + spiritual questions apply to 4th grade and above.
export function isUpperGrade(d: Record<string, string>): boolean {
  const g = d.gradeApplying || "";
  return /(4th|5th|6th|7th|8th|9th|10th|11th|12th)/.test(g);
}

const YN = ["Yes", "No"];

export const STEPS: Step[] = [
  {
    id: "student",
    title: "Student Information",
    fields: [
      { name: "lastName", label: "Child's last name", type: "text", required: true, half: true },
      { name: "firstName", label: "First name", type: "text", required: true, half: true },
      { name: "middleName", label: "Middle name", type: "text", half: true },
      { name: "nickname", label: "Nickname", type: "text", half: true },
      { name: "sex", label: "Sex", type: "radio", options: ["Male", "Female"], half: true },
      { name: "birthDate", label: "Birth date", type: "date", required: true, half: true },
      { name: "gradeApplying", label: "Grade applying for", type: "select", options: GRADES, required: true, half: true },
      { name: "address", label: "Street address", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true, half: true },
      { name: "state", label: "State", type: "text", half: true },
      { name: "zip", label: "ZIP", type: "text", half: true },
      { name: "homePhone", label: "Home phone", type: "tel", half: true },
      { name: "cellPhone", label: "Best contact cell phone", type: "tel", required: true, half: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "ssn", label: "Student's Social Security Number", type: "text", half: true, note: "Optional" },
      { name: "race", label: "Race", type: "select", options: ["White", "Black", "Hispanic", "Asian", "Other"], half: true },
      { name: "countryOfBirth", label: "Country of birth", type: "text", half: true },
      { name: "citizenship", label: "Citizenship", type: "radio", options: ["USA", "Canada", "Other"], half: true },
      { name: "permanentResident", label: "If non-U.S. citizen, is your child a permanent resident?", type: "radio", options: YN },
      { name: "churchMembership", label: "Church membership", type: "text", half: true },
      { name: "churchPastor", label: "Pastor", type: "text", half: true },
      { name: "churchAttending", label: "Church attending (if different)", type: "text", half: true },
      { name: "churchAttendingPastor", label: "Pastor", type: "text", half: true },
      { name: "trustedChrist", label: "Has the applicant trusted Christ as Savior?", type: "radio", options: YN, half: true },
      { name: "trustedWhen", label: "If yes, when?", type: "text", half: true },
      { name: "baptized", label: "Baptized?", type: "radio", options: YN, half: true },
    ],
  },
  {
    id: "education",
    title: "Education History",
    intro: "Please list all schools the applicant has attended, including home schooling.",
    table: {
      name: "schools",
      label: "Schools attended",
      rows: 3,
      columns: [
        { name: "name", label: "Name of school" },
        { name: "address", label: "Address (city, state)" },
        { name: "grades", label: "Grades" },
      ],
    },
    fields: [
      { name: "reasonForLeaving", label: "Reason for leaving last school attended", type: "text" },
      { name: "gradeRepeated", label: "Has any grade been repeated?", type: "radio", options: YN, half: true },
      { name: "gradeRepeatedWhich", label: "If yes, which grade(s)?", type: "text", half: true, showIf: (d) => d.gradeRepeated === "Yes" },
      { name: "suspended", label: "Has the applicant been suspended or expelled?", type: "radio", options: YN },
      { name: "suspendedExplain", label: "If yes, please explain", type: "textarea", showIf: (d) => d.suspended === "Yes" },
      { name: "learningDisability", label: "Ever enrolled in a learning disability class?", type: "radio", options: YN, half: true },
      { name: "learningDisabilityGrades", label: "If yes, which grades?", type: "text", half: true, showIf: (d) => d.learningDisability === "Yes" },
      { name: "addAdhd", label: "Tested for ADD/ADHD/Dyslexia, or prescribed medication for such?", type: "radio", options: YN },
      { name: "addAdhdExplain", label: "If yes, please explain", type: "textarea", showIf: (d) => d.addAdhd === "Yes" },
      { name: "longTermMeds", label: "Currently taking any long-term prescription medications?", type: "radio", options: YN, half: true },
      { name: "longTermMedsList", label: "If yes, please list", type: "text", half: true, showIf: (d) => d.longTermMeds === "Yes" },
      { name: "specialMedical", label: "Any special medical/physical information the school should be aware of", type: "textarea" },
    ],
  },
  {
    id: "family",
    title: "Family",
    table: {
      name: "siblings",
      label: "Siblings",
      rows: 4,
      columns: [
        { name: "name", label: "Name" },
        { name: "age", label: "Age" },
        { name: "grade", label: "Grade" },
        { name: "school", label: "School" },
      ],
    },
    fields: [
      { name: "fatherName", label: "Father's name", type: "text", half: true },
      { name: "fatherEmployer", label: "Employer(s)", type: "text", half: true },
      { name: "fatherWorkPhone", label: "Father work phone", type: "tel", half: true },
      { name: "fatherCell", label: "Father cell phone", type: "tel", half: true },
      { name: "fatherSsn", label: "Father SSN", type: "text", half: true, note: "Optional" },
      { name: "motherName", label: "Mother's name", type: "text", half: true },
      { name: "motherEmployer", label: "Employer(s)", type: "text", half: true },
      { name: "motherWorkPhone", label: "Mother work phone", type: "tel", half: true },
      { name: "motherCell", label: "Mother cell phone", type: "tel", half: true },
      { name: "motherSsn", label: "Mother SSN", type: "text", half: true, note: "Optional" },
      { name: "emergencyName", label: "Emergency contact (other than parent)", type: "text", half: true },
      { name: "emergencyPhone", label: "Emergency phone", type: "tel", half: true },
      { name: "emergencyRelationship", label: "Relationship to applicant", type: "text" },
      { name: "livesWithParents", label: "Does the applicant currently live with natural parents?", type: "radio", options: YN },
      { name: "livesWithParentsExplain", label: "If no, please explain the situation", type: "textarea", showIf: (d) => d.livesWithParents === "No" },
    ],
  },
  {
    id: "financial",
    title: "Financial",
    intro:
      "A non-refundable registration fee of $75.00 per student accompanies this application. Tuition is billed by your chosen payment plan; current rates are on the Tuition Information sheet.",
    fields: [
      {
        name: "paymentPlan",
        label: "Which payment plan will you use?",
        type: "radio",
        options: [
          "Plan A — 10-month plan (Aug 1 – May 1)",
          "Plan B — 12-month plan (Jun 1 – May 1)",
          "Plan C — Single payment in full by Aug 31 (5% discount)",
        ],
      },
    ],
  },
  {
    id: "testimony",
    title: "Salvation Testimony",
    intro:
      "For applicants in 4th grade and above. Please share your testimony in your own words—why you needed to be saved, what Jesus did, and when you trusted Him.",
    showIf: isUpperGrade,
    fields: [
      { name: "salvationTestimony", label: "Your salvation testimony", type: "textarea", note: "Optional" },
    ],
  },
  {
    id: "agreements",
    title: "Agreements & Signature",
    intro:
      "Please review and agree to the following. These reflect Elmwood's Statement of Acknowledgement, Immunization & Health Policy, Parental Agreement, and Field Trip Waiver.",
    fields: [
      { name: "agreeStatementOfFaith", label: "We have read and accept Elmwood's Statement of Faith.", type: "checkbox", required: true },
      { name: "agreeChurchAttendance", label: "We will have our child in a Bible-believing church each week unless providentially hindered.", type: "checkbox", required: true },
      { name: "agreeFinancial", label: "We understand and accept the financial policies, fees, and that registration/curriculum fees are non-refundable.", type: "checkbox", required: true },
      { name: "agreeHandbook", label: "We have read the Academy handbook and agree to abide by its rules and regulations.", type: "checkbox", required: true },
      { name: "agreeImmunization", label: "We agree to the Immunization & Health Policy and will provide records or a waiver before the first day of school.", type: "checkbox", required: true },
      { name: "agreeFieldTrip", label: "We give permission for, and release liability related to, school-sponsored field trips and activities.", type: "checkbox", required: true },
      { name: "agreeAcknowledgement", label: "We accept the Statement of Acknowledgement, including emergency medical authorization and liability release.", type: "checkbox", required: true },
      { name: "agreePhoto", label: "We consent to photos of our child being used for school publicity (optional).", type: "checkbox" },
      { name: "signature", label: "Parent/guardian full name (typed signature)", type: "text", required: true, half: true },
      { name: "signatureDate", label: "Date", type: "date", required: true, half: true },
    ],
  },
];

export const APPLICATION_TITLE = "Application for Enrollment";
