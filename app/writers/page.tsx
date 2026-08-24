import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { WriterCard } from "@/components/writers/WriterCard";
import { CTASection } from "@/components/home/CTASection";
import { writers } from "@/data/writers";

export const metadata: Metadata = {
  title: "Our Writers",
  description:
    "Meet the SCRIBIA writing team - experienced academic writers across sciences, social sciences, law, engineering, and more. Profiles shown by alias to protect writer privacy.",
};

export default function WritersPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            Our Team
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            The writers behind your work
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
            To protect our writers&apos; privacy, profiles are shown by alias
            rather than by name. Every project is matched to a specialist in
            your field.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {writers.map((writer) => (
              <WriterCard key={writer.alias} {...writer} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
