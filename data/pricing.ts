// ---------------------------------------------------------------------------
// PLACEHOLDER PRICING CONFIGURATION
// ---------------------------------------------------------------------------
// Every number in this file is an illustrative placeholder, not SCRIBIA's
// real pricing. Replace the figures below with actual rates whenever ready —
// no other file needs to change, the quotation form will pick up new values
// automatically. All figures are in Nigerian Naira (NGN).
// ---------------------------------------------------------------------------

export type Programme = "undergraduate" | "masters" | "phd";
export type AcademicProjectType =
  | "fullProject"
  | "proposal"
  | "journalArticle"
  | "positionPaper"
  | "editing"
  | "dataAnalysis"
  | "presentation"
  | "literatureReview";
export type Complexity = "standard" | "moderate" | "high";
export type NonAcademicService =
  | "contentWriting"
  | "copywriting"
  | "businessDocuments"
  | "reports"
  | "creativeWriting"
  | "bookDevelopment";
export type ScopeBracket = "short" | "medium" | "long" | "extensive";

export const programmeOptions: { value: Programme; label: string }[] = [
  { value: "undergraduate", label: "Undergraduate" },
  { value: "masters", label: "Master's" },
  { value: "phd", label: "PhD" },
];

export const projectTypeOptions: { value: AcademicProjectType; label: string }[] = [
  { value: "fullProject", label: "Full Project" },
  { value: "proposal", label: "Proposal" },
  { value: "journalArticle", label: "Journal Article" },
  { value: "positionPaper", label: "Position Paper" },
  { value: "editing", label: "Editing" },
  { value: "dataAnalysis", label: "Data Analysis" },
  { value: "presentation", label: "Presentation" },
  { value: "literatureReview", label: "Literature Review" },
];

export const facultyOptions: string[] = [
  "Sciences",
  "Social Sciences",
  "Arts & Humanities",
  "Engineering & Technology",
  "Law",
  "Management & Business Studies",
  "Medicine & Health Sciences",
  "Education",
  "Environmental Sciences",
  "Other",
];

export const complexityOptions: { value: Complexity; label: string; hint: string }[] = [
  { value: "standard", label: "Standard", hint: "Familiar topic, conventional methodology" },
  { value: "moderate", label: "Moderate", hint: "Some technical depth or specialised analysis" },
  { value: "high", label: "High", hint: "Highly technical, niche, or time-sensitive" },
];

export const nonAcademicServiceOptions: { value: NonAcademicService; label: string }[] = [
  { value: "contentWriting", label: "Content Writing" },
  { value: "copywriting", label: "Copywriting" },
  { value: "businessDocuments", label: "Business Documents" },
  { value: "reports", label: "Reports" },
  { value: "creativeWriting", label: "Creative Writing" },
  { value: "bookDevelopment", label: "Book Development" },
];

export const scopeOptions: { value: ScopeBracket; label: string }[] = [
  { value: "short", label: "Short (under 1,000 words)" },
  { value: "medium", label: "Medium (1,000 – 3,000 words)" },
  { value: "long", label: "Long (3,000 – 8,000 words)" },
  { value: "extensive", label: "Extensive (8,000+ words / full manuscript)" },
];

// PLACEHOLDER — base price for a "Full Project" at "Standard" complexity, by programme
export const academicBasePrices: Record<Programme, number> = {
  undergraduate: 45000,
  masters: 85000,
  phd: 150000,
};

// PLACEHOLDER — cost of each project type relative to a Full Project (1.0)
export const projectTypeMultipliers: Record<AcademicProjectType, number> = {
  fullProject: 1,
  proposal: 0.35,
  journalArticle: 0.55,
  positionPaper: 0.3,
  editing: 0.25,
  dataAnalysis: 0.4,
  presentation: 0.2,
  literatureReview: 0.35,
};

// PLACEHOLDER — shared complexity multiplier for academic and non-academic work
export const complexityMultipliers: Record<Complexity, number> = {
  standard: 1,
  moderate: 1.25,
  high: 1.6,
};

// PLACEHOLDER — base price for each non-academic service at "medium" scope, "standard" complexity
export const nonAcademicBasePrices: Record<NonAcademicService, number> = {
  contentWriting: 15000,
  copywriting: 20000,
  businessDocuments: 35000,
  reports: 30000,
  creativeWriting: 20000,
  bookDevelopment: 120000,
};

// PLACEHOLDER — scope multiplier, relative to "medium" (1.0)
export const scopeMultipliers: Record<ScopeBracket, number> = {
  short: 0.6,
  medium: 1,
  long: 1.8,
  extensive: 3,
};

const VARIANCE = { low: 0.9, high: 1.15 };

export type QuoteEstimate = { min: number; max: number };

export function estimateAcademicQuote(input: {
  programme: Programme;
  projectType: AcademicProjectType;
  complexity: Complexity;
}): QuoteEstimate {
  const base =
    academicBasePrices[input.programme] *
    projectTypeMultipliers[input.projectType] *
    complexityMultipliers[input.complexity];

  return {
    min: Math.round((base * VARIANCE.low) / 500) * 500,
    max: Math.round((base * VARIANCE.high) / 500) * 500,
  };
}

export function estimateNonAcademicQuote(input: {
  service: NonAcademicService;
  scope: ScopeBracket;
  complexity: Complexity;
}): QuoteEstimate {
  const base =
    nonAcademicBasePrices[input.service] *
    scopeMultipliers[input.scope] *
    complexityMultipliers[input.complexity];

  return {
    min: Math.round((base * VARIANCE.low) / 500) * 500,
    max: Math.round((base * VARIANCE.high) / 500) * 500,
  };
}

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}
