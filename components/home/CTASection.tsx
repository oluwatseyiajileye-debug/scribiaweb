import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, genericWhatsAppMessage } from "@/lib/whatsapp";

export function CTASection({
  title = "Ready to start your project?",
  description = "Tell us what you need and get an estimated quotation in minutes, or chat with our team directly on WhatsApp.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-magenta-900 py-20 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
      />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl text-magenta-100/90">{description}</p>
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
