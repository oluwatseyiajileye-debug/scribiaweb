import { BookOpen, CalendarClock, GraduationCap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Promo } from "@/data/promos";

const HIGHLIGHT_ICONS = [CalendarClock, GraduationCap, ShieldCheck];

export function PromoSection({ promo }: { promo: Promo }) {
  return (
    <section className="flex flex-col gap-10 rounded-3xl border border-gold-400/40 bg-surface p-6 sm:p-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
          {promo.badge}
        </span>
        <h2 className="font-display text-3xl font-semibold leading-tight text-magenta-900 sm:text-4xl dark:text-magenta-100">
          {promo.title}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-foreground-muted">{promo.description}</p>
      </div>

      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-2 rounded-2xl bg-magenta-900 px-8 py-8 text-center text-white">
        <span className="font-display text-5xl font-bold text-gold-400 sm:text-6xl">{promo.discountLabel}</span>
        <span className="text-sm font-medium uppercase tracking-wide text-magenta-100">{promo.discountSubtext}</span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {promo.highlights.map((highlight, i) => {
          const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
          return (
            <div key={highlight.label} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-magenta-50 text-magenta-700 dark:bg-magenta-900/30 dark:text-magenta-200">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-display font-semibold text-foreground">{highlight.label}</span>
              <span className="text-sm text-foreground-muted">{highlight.detail}</span>
            </div>
          );
        })}
      </div>

      <p className="text-center text-sm italic text-foreground-muted">{promo.tagline}</p>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button href={buildWhatsAppLink(promo.whatsappMessage)} variant="whatsapp" size="lg" external>
          Secure Your Slot on WhatsApp
        </Button>
        <Button href={promo.catalogueUrl} variant="outline" size="lg" external>
          <BookOpen className="h-4 w-4" />
          View Catalogue
        </Button>
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
        <details className="group">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-sm font-semibold text-magenta-700 underline underline-offset-4 marker:content-none dark:text-magenta-300">
            View Full Terms &amp; Conditions
          </summary>
          <div className="mt-4">
            <Accordion items={promo.terms} />
          </div>
        </details>
      </div>
    </section>
  );
}
