import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 sm:p-7 shadow-sm shadow-magenta-950/[0.03]",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-magenta-950/[0.08] hover:border-gold-400/50",
        className
      )}
    >
      {children}
    </div>
  );
}
