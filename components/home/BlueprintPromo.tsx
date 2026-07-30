import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function BlueprintPromo() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-br from-magenta-50 to-surface-muted p-8 dark:from-magenta-950/30 dark:to-surface-muted sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-300/20 blur-3xl"
          />
          <div className="relative flex flex-col items-start gap-5 lg:max-w-2xl">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-magenta-700 dark:bg-gold-950/50 dark:text-gold-300">
              <Sparkles className="h-6 w-6" />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-black/20 dark:text-gold-300">
              New: AI Research Planning
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-magenta-900 sm:text-4xl dark:text-magenta-100">
              Not sure how to approach your topic? Try SCRIBIA Research Blueprint
            </h2>
            <p className="text-lg leading-relaxed text-foreground-muted">
              A free AI-powered planning assistant that maps out objectives,
              research questions, methodology, variables, and a realistic
              timeline for your topic — before you write a single word. It
              won&apos;t write your project for you; it shows you how to
              approach it.
            </p>
            <Button href="/blueprint" size="lg" variant="primary">
              Try the Research Blueprint
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
