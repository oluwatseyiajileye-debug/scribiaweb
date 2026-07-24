import { Lock, ShieldCheck, Clock, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const indicators = [
  {
    icon: Lock,
    title: "Confidential by Design",
    description: "Your details, topic, and documents are never shared with third parties.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity-First Process",
    description: "Plagiarism and AI similarity checks available on every academic project.",
  },
  {
    icon: Clock,
    title: "Agreed Delivery Dates",
    description: "Clear timelines set before work begins, with progress updates along the way.",
  },
  {
    icon: Users,
    title: "Nigerian-Based Team",
    description: "Direct WhatsApp access to a consultancy that understands local academic standards.",
  },
];

export function TrustIndicators() {
  return (
    <section className="border-b border-border bg-surface-muted">
      <Container className="grid grid-cols-1 gap-8 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {indicators.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
            <p className="text-sm leading-relaxed text-foreground-muted">{description}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
