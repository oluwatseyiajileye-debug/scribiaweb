import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { CTASection } from "@/components/home/CTASection";
import { portfolioEntries } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Sample project categories from SCRIBIA Writing Services, shown by field and scope to protect client confidentiality.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            Our Work
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            A sample of the work we do
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
            To protect client confidentiality, projects are shown by category
            and field rather than by name. Real work, kept anonymous.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioEntries.map((entry) => (
              <PortfolioCard key={`${entry.category}-${entry.field}`} {...entry} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
