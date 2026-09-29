import type { Metadata } from "next";
import { Tag } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PromoSection } from "@/components/promos/PromoSection";
import { CTASection } from "@/components/home/CTASection";
import { promos } from "@/data/promos";

export const metadata: Metadata = {
  title: "Promos",
  description:
    "Current promotional offers from SCRIBIA Writing Services - limited-time discounts on academic and research writing support.",
};

export default function PromosPage() {
  const activePromos = promos.filter((p) => p.active);

  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            Promos
          </span>
          <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            Current Offers
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-foreground-muted">
            Limited-time promotions on SCRIBIA's academic and research writing services.
          </p>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="mx-auto flex max-w-4xl flex-col gap-10">
          {activePromos.length > 0 ? (
            activePromos.map((promo) => <PromoSection key={promo.slug} promo={promo} />)
          ) : (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-12 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-50 text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
                <Tag className="h-6 w-6" />
              </span>
              <h2 className="font-display text-xl font-semibold text-foreground">No Active Promos Right Now</h2>
              <p className="max-w-md text-sm text-foreground-muted">
                We don&apos;t have a running promotion at the moment - check back soon, or reach out directly for a
                personalised quote.
              </p>
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
