import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { CTASection } from "@/components/home/CTASection";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "What clients say about working with SCRIBIA Writing Services.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            Testimonials
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            What clients say about working with us
          </h1>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
