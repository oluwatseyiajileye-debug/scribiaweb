import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-magenta-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-magenta-700 dark:bg-magenta-900/40 dark:text-magenta-200",
        className
      )}
    >
      {children}
    </span>
  );
}
