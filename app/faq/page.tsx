import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/home/CTASection";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about pricing, delivery time, supervisor corrections, payment structure, academic integrity, and confidentiality at SCRIBIA Writing Services.",
};

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            FAQ
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            Frequently Asked Questions
          </h1>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="mx-auto max-w-3xl">
          <Accordion items={faqItems} />
        </Container>
      </section>

      <CTASection
        title="Still have questions?"
        description="Reach out on WhatsApp and we'll answer directly — usually within minutes."
      />
    </>
  );
}
