import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { BlueprintSchema, type BlueprintRequest } from "@/lib/blueprint-schema";

export const runtime = "nodejs";

const MODEL = "claude-sonnet-5";

const SYSTEM_PROMPT = `You are SCRIBIA Research Blueprint, an academic research-planning assistant for SCRIBIA Writing Services, a Nigerian academic and research writing consultancy.

Your job is to help a student or researcher understand HOW to approach their topic before writing begins. You produce a structured research roadmap only.

Hard rules:
- Never write full chapters, proposal text, or any complete academic prose. Only produce the structured planning fields defined by the schema.
- Be specific to the given topic, programme level, faculty, department, and research type. Do not give generic advice that could apply to any topic.
- For analysisSoftware and databases, include ONLY entries genuinely relevant to this topic and its likely data/design - do not list every option from the reference catalog by default.
- For hypotheses, set applicable to false and leave items empty when the research design is qualitative or exploratory and hypotheses would not be appropriate; explain briefly in note.
- For variables, use empty arrays for any variable type that does not apply (e.g. a purely qualitative study may have no independent/dependent variables at all).
- Keep tone professional, encouraging, and grounded. Avoid exaggerated claims and avoid inventing specific citations, statistics, or named studies.

Seminar Report mode (when Research Type is "Seminar Report"):
- A seminar report is a literature-based presentation on a topic, not a primary-data study. There is no fieldwork, hypotheses, or variable testing.
- Set hypotheses.applicable to false with an empty items array, and explain in note that seminar reports are literature-based.
- Leave variables (independent/dependent/moderating/mediating/control) as empty arrays.
- Leave dataCollectionMethods as an empty array (or, if the seminar draws on a secondary dataset, a single "Secondary Data / Literature Review" entry).
- Leave statisticalTests empty unless the seminar reviews and reports on statistical findings from existing literature.
- Populate presentationOutline with 5-8 sections structuring the talk (e.g. Introduction, Background/Context, Key Concepts, Review of Related Literature, Critical Discussion, Conclusion & Recommendations), each with 2-4 talking points.
- Populate anticipatedQuestions with 4-6 likely panel/audience questions and how to answer them well.
- Still populate overview, difficulty, researchDesign (describe it as a literature review/expository design), objectives, researchQuestions, analysisSoftware (reference/citation tools if relevant, else empty), keywords, searchTerms, databases, challenges, timeline (preparation phases, not fieldwork), and successTips as normal.

For all other research types, leave presentationOutline and anticipatedQuestions as empty arrays.`;

function buildUserPrompt(input: BlueprintRequest): string {
  const lines = [`Research Topic: ${input.topic}`];
  if (input.academicLevel) lines.push(`Academic Level: ${input.academicLevel}`);
  if (input.faculty) lines.push(`Faculty: ${input.faculty}`);
  if (input.department) lines.push(`Department: ${input.department}`);
  if (input.researchType) lines.push(`Research Type: ${input.researchType}`);
  lines.push(
    "",
    "Generate a complete SCRIBIA Research Blueprint for this topic following the required schema."
  );
  return lines.join("\n");
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid request body.");
  }

  if (typeof body !== "object" || body === null) {
    return badRequest("Invalid request body.");
  }

  const { topic, academicLevel, faculty, department, researchType } = body as Record<string, unknown>;

  if (typeof topic !== "string" || topic.trim().length < 10 || topic.trim().length > 300) {
    return badRequest("Please provide a research topic between 10 and 300 characters.");
  }

  const input: BlueprintRequest = { topic: topic.trim() };
  for (const [key, value] of Object.entries({ academicLevel, faculty, department, researchType })) {
    if (typeof value === "string" && value.trim().length > 0) {
      if (value.trim().length > 150) {
        return badRequest(`${key} is too long.`);
      }
      (input as Record<string, string>)[key] = value.trim();
    }
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "The Research Blueprint feature is not configured yet. Please try again later." },
      { status: 503 }
    );
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const response = await client.messages.parse({
      model: MODEL,
      max_tokens: 8000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserPrompt(input) }],
      output_config: {
        format: zodOutputFormat(BlueprintSchema),
        effort: "medium",
      },
    });

    if (response.stop_reason === "refusal") {
      return NextResponse.json(
        { error: "This topic couldn't be processed. Please try rephrasing it." },
        { status: 422 }
      );
    }

    if (!response.parsed_output) {
      return NextResponse.json(
        { error: "The Blueprint could not be generated. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ result: response.parsed_output });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json(
        { error: "We're receiving a lot of requests right now. Please try again in a moment." },
        { status: 429 }
      );
    }
    if (error instanceof Anthropic.APIError) {
      return NextResponse.json(
        { error: "Something went wrong generating your Blueprint. Please try again." },
        { status: 502 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
