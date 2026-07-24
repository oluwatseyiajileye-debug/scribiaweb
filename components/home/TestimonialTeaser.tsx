import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialTeaser() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Client Feedback" title="What clients say about working with us" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
        <Link
          href="/testimonials"
          className="mx-auto inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 transition-colors hover:text-gold-600 dark:text-magenta-300 dark:hover:text-gold-300"
        >
          Read more testimonials
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Container>
    </section>
  );
}
