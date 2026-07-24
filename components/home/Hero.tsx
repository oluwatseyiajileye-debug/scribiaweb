import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, genericWhatsAppMessage } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--color-magenta-100),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,var(--color-magenta-950),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-gold-200/40 blur-3xl dark:bg-gold-900/20"
      />

      <Container className="flex flex-col items-center gap-8 py-20 text-center sm:py-28 lg:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
          Academic &amp; Research Writing Consultancy
        </span>

        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] text-magenta-900 sm:text-5xl lg:text-6xl dark:text-magenta-100">
          Research deserves precision.
          <br />
          <span className="italic text-gold-600 dark:text-gold-400">Writing deserves excellence.</span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted">
          SCRIBIA Writing Services supports students, researchers, lecturers, and
          professionals with academic writing, research support, data analysis,
          and professional documentation — delivered with precision and confidentiality.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/pricing" size="lg" variant="primary">
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href={buildWhatsAppLink(genericWhatsAppMessage)}
            size="lg"
            variant="whatsapp"
            external
          >
            Chat on WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
