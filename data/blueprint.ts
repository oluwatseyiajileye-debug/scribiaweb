export { programmeOptions, facultyOptions } from "@/data/pricing";

export type ResearchType =
  | "Project"
  | "Thesis"
  | "Dissertation"
  | "Journal Article"
  | "Position Paper"
  | "Seminar Report";

export const researchTypeOptions: { value: ResearchType; label: string }[] = [
  { value: "Project", label: "Project" },
  { value: "Thesis", label: "Thesis" },
  { value: "Dissertation", label: "Dissertation" },
  { value: "Journal Article", label: "Journal Article" },
  { value: "Position Paper", label: "Position Paper" },
  { value: "Seminar Report", label: "Seminar Report" },
];
