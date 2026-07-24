import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapEmbed } from "@/components/contact/MapEmbed";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SCRIBIA Writing Services via WhatsApp, email, or phone. Based in Ojo, Lagos, Nigeria.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
            Contact
          </span>
          <h1 className="font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
            Let&apos;s talk about your project
          </h1>
          <p className="text-lg leading-relaxed text-foreground-muted">
            Reach us directly on WhatsApp for the fastest response, or send a
            message below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ContactForm />
          <div className="flex flex-col gap-8">
            <ContactInfo />
            <MapEmbed />
          </div>
        </div>
      </Container>
    </section>
  );
}
