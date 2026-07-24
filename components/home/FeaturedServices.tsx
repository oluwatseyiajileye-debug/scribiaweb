import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { serviceGroups } from "@/data/services";

export function FeaturedServices() {
  return (
    <section className="py-20 sm:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="What We Do"
          title="Research and writing support, end to end"
          description="From a first-year seminar paper to a doctoral dissertation, our services are structured around the way academic and professional work actually gets reviewed and approved."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {serviceGroups.map((group) => (
            <Card key={group.slug} className="flex flex-col gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-magenta-50 text-magenta-700 dark:bg-magenta-900/30 dark:text-magenta-200">
                <group.icon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground">{group.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">{group.description}</p>
              <ul className="flex flex-col gap-1.5 text-sm text-foreground-muted">
                {group.items.slice(0, 4).map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold-500" />
                    {item.name}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 transition-colors hover:text-gold-600 dark:text-magenta-300 dark:hover:text-gold-300"
              >
                View all services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
