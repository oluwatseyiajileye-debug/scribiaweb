import { Star, UserRound } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Writer } from "@/data/writers";

export function WriterCard({ alias, specialty, yearsExperience, bio, rating, projectsCompleted }: Writer) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-magenta-50 text-magenta-700 dark:bg-magenta-900/30 dark:text-magenta-200">
          <UserRound className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="font-display text-base font-semibold text-foreground">{alias}</span>
          <span className="text-xs text-foreground-muted">{yearsExperience}+ years experience</span>
        </div>
      </div>

      <Badge className="w-fit">{specialty}</Badge>

      <p className="text-sm leading-relaxed text-foreground-muted">{bio}</p>

      <div className="flex items-center justify-between border-t border-border pt-4 text-sm">
        <span className="flex items-center gap-1 font-semibold text-foreground">
          <Star className="h-4 w-4 fill-gold-500 text-gold-500" />
          {rating.toFixed(1)}
        </span>
        <span className="text-xs text-foreground-muted">{projectsCompleted}+ projects completed</span>
      </div>
    </Card>
  );
}
