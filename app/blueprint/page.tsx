import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BlueprintExperience } from "@/components/blueprint/BlueprintExperience";

export const metadata: Metadata = {
  title: "SCRIBIA Research Blueprint",
  description:
    "A free AI-powered research planning assistant. Get a structured roadmap for your topic - objectives, research questions, methodology, variables, and more - before you start writing.",
};

export default function BlueprintPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            <Sparkles className="h-6 w-6" />
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            AI Research Planning Assistant
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            SCRIBIA Research Blueprint
          </h1>
          <p className="text-lg leading-relaxed text-foreground-muted">
            Understand how to approach your topic before writing begins. Enter
            your research topic to get a structured roadmap - objectives,
            research questions, methodology, and more. This is a planning
            tool, not a proposal or chapter writer.
          </p>
        </div>

        <BlueprintExperience />
      </Container>
    </section>
  );
}
