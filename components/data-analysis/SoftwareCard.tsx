import { Card } from "@/components/ui/Card";
import type { SoftwareTool } from "@/data/software";

export function SoftwareCard({ name, initials, useCase }: SoftwareTool) {
  return (
    <Card className="flex flex-col gap-4">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-magenta-700 to-magenta-900 font-display text-sm font-bold tracking-wide text-gold-300">
        {initials}
      </span>
      <h3 className="font-display text-lg font-semibold text-foreground">{name}</h3>
      <p className="text-sm leading-relaxed text-foreground-muted">{useCase}</p>
    </Card>
  );
}
