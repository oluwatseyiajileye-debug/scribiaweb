import { z } from "zod";

export const BlueprintSchema = z.object({
  overview: z.string().describe("100-150 words on what the topic is about."),

  difficulty: z.object({
    level: z.enum(["Easy", "Moderate", "High", "Very High"]),
    explanation: z.string(),
  }),

  researchDesign: z.object({
    design: z.string(),
    rationale: z.string(),
  }),

  objectives: z.array(z.string()).min(4).max(6),

  researchQuestions: z.array(z.string()).min(4).max(6),

  hypotheses: z.object({
    applicable: z.boolean(),
    items: z.array(z.string()),
    note: z.string().optional(),
  }),

  variables: z.object({
    independent: z.array(z.string()),
    dependent: z.array(z.string()),
    moderating: z.array(z.string()),
    mediating: z.array(z.string()),
    control: z.array(z.string()),
  }),

  dataCollectionMethods: z.array(
    z.object({
      method: z.string(),
      explanation: z.string(),
    })
  ),

  analysisSoftware: z.array(
    z.object({
      software: z.string(),
      reason: z.string(),
    })
  ),

  statisticalTests: z.array(z.string()),

  keywords: z.array(z.string()).min(10).max(15),

  searchTerms: z.array(z.string()),

  databases: z.array(z.string()),

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
        phase: z.string(),
        duration: z.string(),
        description: z.string(),
      })
    )
    .min(1),

  successTips: z.array(z.string()).min(3),

  presentationOutline: z.array(
    z.object({
      section: z.string(),
      talkingPoints: z.string().describe("2-4 talking points as one string, separated by ' | '."),
    })
  ),

  anticipatedQuestions: z
    .array(z.string())
    .describe("Each string formatted as 'Q: <question> | Tip: <how to answer it well>'."),
});

export type BlueprintResult = z.infer<typeof BlueprintSchema>;

export type BlueprintRequest = {
  topic: string;
  academicLevel?: string;
  faculty?: string;
  department?: string;
  researchType?: string;
};
