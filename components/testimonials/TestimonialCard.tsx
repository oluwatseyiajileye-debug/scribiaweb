import { Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <Card className="flex flex-col gap-5">
      <Quote className="h-7 w-7 text-gold-500" />
      <p className="flex-1 text-[0.95rem] leading-relaxed text-foreground-muted">&ldquo;{quote}&rdquo;</p>
      <div className="flex flex-col border-t border-border pt-4">
        <span className="font-display text-sm font-semibold text-foreground">{name}</span>
        <span className="text-xs uppercase tracking-wide text-gold-600 dark:text-gold-400">{role}</span>
      </div>
    </Card>
  );
}
