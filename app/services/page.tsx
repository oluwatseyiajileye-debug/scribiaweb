import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ServiceGroupSection } from "@/components/services/ServiceGroupSection";
import { CTASection } from "@/components/home/CTASection";
import { serviceGroups } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Academic writing, research support, and professional writing services from SCRIBIA Writing Services — undergraduate projects, theses, dissertations, journal articles, editing, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            Our Services
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            Every stage of academic and professional writing, covered
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
            Browse our services below, or jump straight to a category.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {serviceGroups.map((group) => (
              <Link
                key={group.slug}
                href={`#${group.slug}`}
                className="rounded-full border border-gold-400/60 px-4 py-2 text-sm font-medium text-magenta-700 transition-colors hover:bg-gold-50 dark:text-magenta-200 dark:hover:bg-gold-950/30"
              >
                {group.title}
              </Link>
            ))}
            <Link
              href="/data-analysis"
              className="rounded-full border border-gold-400/60 px-4 py-2 text-sm font-medium text-magenta-700 transition-colors hover:bg-gold-50 dark:text-magenta-200 dark:hover:bg-gold-950/30"
            >
              Data Analysis
            </Link>
          </div>
        </Container>
      </section>

      {serviceGroups.map((group, index) => (
        <ServiceGroupSection key={group.slug} group={group} reverse={index % 2 === 1} />
      ))}

      <CTASection />
    </>
  );
}
