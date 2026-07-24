import type { Metadata } from "next";
import { BarChart3, FileCheck2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SoftwareCard } from "@/components/data-analysis/SoftwareCard";
import { CTASection } from "@/components/home/CTASection";
import { softwareTools } from "@/data/software";

export const metadata: Metadata = {
  title: "Data Analysis",
  description:
    "Professional statistical and data analysis using SPSS, AMOS, SmartPLS, STATA, EViews, GraphPad Prism, MATLAB, and R — interpreted for academic research.",
};

export default function DataAnalysisPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-100 text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            <BarChart3 className="h-6 w-6" />
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            Statistical and data analysis, professionally interpreted
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted">
            We run your data through the appropriate statistical software and
            translate the output into clear, properly interpreted results —
            presentation-ready for your results and discussion chapters.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="Tools We Work With"
            title="The right software for your research design"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {softwareTools.map((tool) => (
              <SoftwareCard key={tool.name} {...tool} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface-muted py-20 sm:py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-magenta-50 text-magenta-700 dark:bg-magenta-900/30 dark:text-magenta-200">
            <FileCheck2 className="h-6 w-6" />
          </span>
          <h2 className="max-w-2xl font-display text-2xl font-semibold text-magenta-800 sm:text-3xl dark:text-magenta-200">
            Output you can defend
          </h2>
          <p className="max-w-2xl leading-relaxed text-foreground-muted">
            Every analysis is accompanied by a clear, written interpretation —
            not just raw output — so you understand and can confidently
            explain your results during review or defence.
          </p>
        </Container>
      </section>

      <CTASection
        title="Have a dataset ready?"
        description="Send us your data and analysis requirements and we'll recommend the right approach and software."
      />
    </>
  );
}
