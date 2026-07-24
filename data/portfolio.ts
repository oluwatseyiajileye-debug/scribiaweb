// Sample project categories — placeholder content for launch.
// Shown by category rather than client name to protect confidentiality.
// Replace with real (anonymised) project summaries when available.

export type PortfolioEntry = {
  category: string;
  field: string;
  summary: string;
};

export const portfolioEntries: PortfolioEntry[] = [
  {
    category: "MSc Thesis",
    field: "Public Health",
    summary:
      "Full thesis support covering literature review, methodology design, and results interpretation for a postgraduate public health study.",
  },
  {
    category: "PhD Proposal",
    field: "Educational Management",
    summary:
      "Doctoral research proposal with a defined problem statement, conceptual framework, and mixed-methods design.",
  },
  {
    category: "SPSS Data Analysis",
    field: "Survey Research (n=300)",
    summary:
      "Descriptive and inferential statistical analysis of a 300-respondent survey, with results tables and interpretation.",
  },
  {
    category: "Business Report",
    field: "Market Entry Strategy",
    summary:
      "Corporate report assessing market entry options for an SME, including competitor analysis and recommendations.",
  },
  {
    category: "Literature Review",
    field: "Renewable Energy",
    summary:
      "Structured review synthesising current research on renewable energy adoption, identifying key gaps for further study.",
  },
  {
    category: "Content Writing",
    field: "Corporate Website Copy",
    summary:
      "Website copywriting for a professional services firm, covering homepage, about, and service pages.",
  },
  {
    category: "Undergraduate Project",
    field: "Computer Science",
    summary:
      "Final-year project covering system design, implementation summary, and evaluation for a software engineering topic.",
  },
  {
    category: "Journal Article",
    field: "Agricultural Economics",
    summary:
      "Manuscript extracted from a completed thesis and reformatted to meet a target journal's submission guidelines.",
  },
];
