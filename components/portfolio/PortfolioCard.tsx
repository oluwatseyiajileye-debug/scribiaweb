import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { PortfolioEntry } from "@/data/portfolio";

export function PortfolioCard({ category, field, summary }: PortfolioEntry) {
  return (
    <Card className="flex flex-col gap-3">
      <Badge>{category}</Badge>
      <h3 className="font-display text-lg font-semibold text-foreground">{field}</h3>
      <p className="text-sm leading-relaxed text-foreground-muted">{summary}</p>
    </Card>
  );
}
