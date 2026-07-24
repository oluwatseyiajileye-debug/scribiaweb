import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import type { ServiceGroup } from "@/data/services";

export function ServiceGroupSection({ group, reverse }: { group: ServiceGroup; reverse?: boolean }) {
  return (
    <section id={group.slug} className="border-b border-border py-16 sm:py-20 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
          <div className={cn("flex flex-col gap-4 lg:col-span-2", reverse && "lg:order-last")}>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-magenta-50 text-magenta-700 dark:bg-magenta-900/30 dark:text-magenta-200">
              <group.icon className="h-6 w-6" />
            </span>
            <h2 className="font-display text-2xl font-semibold text-magenta-800 sm:text-3xl dark:text-magenta-200">
              {group.title}
            </h2>
            <p className="leading-relaxed text-foreground-muted">{group.description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {group.items.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-1.5 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-gold-400/50"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-gold-500" />
                  <span className="font-display font-semibold text-foreground">{item.name}</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
