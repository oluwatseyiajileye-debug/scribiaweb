import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Tell us your requirements",
    description: "Use our quotation tool or WhatsApp us with your programme, topic, and deadline.",
  },
  {
    number: "02",
    title: "Receive a clear quotation",
    description: "We confirm scope, timeline, and pricing before any work begins — no surprises.",
  },
  {
    number: "03",
    title: "We research and write",
    description: "Your project is developed to your institution's guidelines, with progress updates.",
  },
  {
    number: "04",
    title: "Review and deliver",
    description: "You receive the completed work, with revisions available as agreed.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-surface-muted py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Our Process"
          title="A straightforward process, from enquiry to delivery"
        />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-2">
              <span className="font-display text-3xl font-semibold text-gold-500">{step.number}</span>
              <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
