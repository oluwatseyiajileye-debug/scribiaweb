import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-magenta-800 dark:text-magenta-200">
        {title}
      </h2>
      {description && (
        <p className={cn("text-base sm:text-lg text-foreground-muted leading-relaxed", align === "center" ? "max-w-2xl" : "max-w-2xl")}>
          {description}
        </p>
      )}
    </div>
  );
}
