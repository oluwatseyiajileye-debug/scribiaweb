import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { QuoteForm } from "@/components/pricing/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Get an instant estimated quotation for your academic or professional writing project, then send your request directly to SCRIBIA on WhatsApp.",
};

export default function PricingPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            Instant Estimate
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            Get a Quote
          </h1>
          <p className="text-lg leading-relaxed text-foreground-muted">
            Answer a few quick questions about your project to get an
            estimated price range, then send it straight to us on WhatsApp.
          </p>
        </div>
        <QuoteForm />
      </Container>
    </section>
  );
}
