import { z } from "zod";

export const BlueprintSchema = z.object({
  overview: z
    .string()
    .describe("A 100-150 word explanation of what the research topic is about."),

  difficulty: z.object({
    level: z.enum(["Easy", "Moderate", "High", "Very High"]),
    explanation: z.string().describe("A short explanation of why this difficulty level fits."),
  }),

  researchDesign: z.object({
    design: z
      .string()
      .describe("e.g. Survey, Experimental, Case Study, Mixed Methods, Qualitative, Quantitative"),
    rationale: z.string().describe("Why this design fits the topic."),
  }),

  objectives: z.array(z.string()).min(4).max(6),

  researchQuestions: z.array(z.string()).min(4).max(6),

  hypotheses: z.object({
    applicable: z
      .boolean()
      .describe("False when the research design is qualitative/exploratory and hypotheses would not be appropriate."),
    items: z.array(z.string()).describe("Empty array when applicable is false."),
    note: z
      .string()
      .optional()
      .describe("Brief note explaining why hypotheses are/aren't included."),
  }),

  variables: z.object({
    independent: z.array(z.string()),
    dependent: z.array(z.string()),
    moderating: z.array(z.string()),
    mediating: z.array(z.string()),
    control: z.array(z.string()),
  }),

  dataCollectionMethods: z
    .array(
      z.object({
        method: z.string().describe("e.g. Questionnaire, Interview, Observation, Laboratory Experiment, Secondary Data"),
        explanation: z.string(),
      })
    )
    .describe("Empty array for literature-based work (e.g. Seminar Report) with no primary data collection."),

  analysisSoftware: z
    .array(
      z.object({
        software: z.string().describe("Only software relevant to this topic's data and design."),
        reason: z.string(),
      })
    )
    .describe("Only include software relevant to the topic - do not list every tool."),

  statisticalTests: z.array(z.string()),

  keywords: z.array(z.string()).min(10).max(15),

  searchTerms: z
    .array(z.string())
    .describe("Google Scholar-style search phrases, e.g. 'Circular Economy Nigeria'."),

  databases: z
    .array(z.string())
    .describe(
      "Only databases relevant to this topic, drawn from: Google Scholar, Scopus, ScienceDirect, Springer, IEEE Xplore, PubMed, JSTOR, Taylor & Francis, SAGE."
    ),

  challenges: z
    .array(
      z.object({
        challenge: z.string(),
        note: z.string(),
      })
    )
    .min(1),

  timeline: z
    .array(
      z.object({
        phase: z.string().describe("e.g. Chapter 1: Introduction"),
        duration: z.string().describe("e.g. 2-3 weeks"),
        description: z.string(),
      })
    )
    .min(1),

  successTips: z.array(z.string()).min(3),

  presentationOutline: z
    .array(
      z.object({
        section: z.string().describe("e.g. Introduction, Background, Key Concepts, Literature Synthesis, Conclusion"),
        talkingPoints: z.array(z.string()).describe("Key points to cover when presenting this section."),
      })
    )
    .describe("Slide/talk structure for a Seminar Report. Empty array for research types that use the timeline field instead."),

  anticipatedQuestions: z
    .array(
      z.object({
        question: z.string().describe("A question the audience or panel is likely to ask."),
        tip: z.string().describe("Guidance on how to answer it well."),
      })
    )
    .describe("Q&A preparation for a Seminar Report presentation. Empty array for research types that don't involve a live presentation/defense."),
});

export type BlueprintResult = z.infer<typeof BlueprintSchema>;

export type BlueprintRequest = {
  topic: string;
  academicLevel?: string;
  faculty?: string;
  department?: string;
  researchType?: string;
};
