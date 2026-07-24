import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  Microscope,
  PenLine,
} from "lucide-react";

export type ServiceItem = {
  name: string;
  description: string;
};

export type ServiceGroup = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    slug: "academic-writing",
    title: "Academic Writing",
    icon: GraduationCap,
    description:
      "Structured, well-researched academic documents built around your institution's requirements, from undergraduate projects to doctoral dissertations.",
    items: [
      {
        name: "Undergraduate Projects",
        description:
          "Full final-year research projects developed from topic selection through to conclusion and recommendations.",
      },
      {
        name: "Master's Thesis",
        description:
          "In-depth postgraduate theses with rigorous methodology, analysis, and academic argumentation.",
      },
      {
        name: "PhD Dissertation",
        description:
          "Doctoral-level research support across chapters, from the introduction to the final defence-ready draft.",
      },
      {
        name: "Research Proposals",
        description:
          "Clear, compelling proposals that define your research problem, objectives, and methodology.",
      },
      {
        name: "Seminar Papers",
        description:
          "Focused academic papers prepared for coursework, seminars, and departmental presentations.",
      },
    ],
  },
  {
    slug: "research-support",
    title: "Research Support",
    icon: Microscope,
    description:
      "Specialist support for researchers and academics who need precise, publication-ready work at any stage of the research process.",
    items: [
      {
        name: "Academic Articles",
        description: "Well-structured articles suitable for academic and institutional publication.",
      },
      {
        name: "Journal Articles",
        description: "Manuscripts prepared and formatted to meet target journal submission guidelines.",
      },
      {
        name: "Journal Extraction",
        description: "Publishable articles extracted and restructured from completed thesis or dissertation work.",
      },
      {
        name: "Position Papers",
        description: "Evidence-based papers that argue a clear stance on a research or policy question.",
      },
      {
        name: "Literature Reviews",
        description: "Comprehensive reviews that synthesise existing research and identify gaps in the literature.",
      },
      {
        name: "Editing & Proofreading",
        description: "Line-by-line editing for clarity, grammar, structure, and academic tone.",
      },
      {
        name: "Supervisor Corrections",
        description: "Precise implementation of supervisor and reviewer feedback across chapters.",
      },
      {
        name: "Referencing & Formatting",
        description: "Accurate citation and formatting in APA, MLA, Harvard, Vancouver, and other required styles.",
      },
      {
        name: "AI Similarity Reports",
        description: "AI-content detection reports to support originality and integrity checks.",
      },
      {
        name: "Plagiarism Reports",
        description: "Similarity and plagiarism checks with detailed reports ahead of submission.",
      },
    ],
  },
  {
    slug: "professional-writing",
    title: "Professional Writing",
    icon: PenLine,
    description:
      "Polished business and creative writing for organisations, entrepreneurs, and individuals who need to communicate with clarity and impact.",
    items: [
      {
        name: "Content Writing",
        description: "Website copy, articles, and blog content written to inform and engage your audience.",
      },
      {
        name: "Copywriting",
        description: "Persuasive marketing copy for brands, products, and campaigns.",
      },
      {
        name: "Business Documents",
        description: "Business plans, proposals, and corporate documentation prepared to a professional standard.",
      },
      {
        name: "Reports",
        description: "Technical and organisational reports structured for clarity and decision-making.",
      },
      {
        name: "Creative Writing",
        description: "Original creative pieces crafted to your voice, tone, and audience.",
      },
      {
        name: "Book Development",
        description: "End-to-end support for manuscript development, structuring, and editing.",
      },
    ],
  },
];
