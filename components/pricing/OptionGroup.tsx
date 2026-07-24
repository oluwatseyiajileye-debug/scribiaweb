"use client";

import { cn } from "@/lib/utils";

export function OptionGroup<T extends string>({
  options,
  value,
  onChange,
  columns = 2,
}: {
  options: { value: T; label: string; hint?: string }[];
  value: T | "";
  onChange: (value: T) => void;
  columns?: 1 | 2 | 3;
}) {
  return (
    <div
      className={cn(
        "grid gap-3",
        columns === 1 && "grid-cols-1",
        columns === 2 && "grid-cols-1 sm:grid-cols-2",
        columns === 3 && "grid-cols-1 sm:grid-cols-3"
      )}
    >
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChange(option.value)}
            className={cn(
              "flex flex-col gap-1 rounded-xl border px-4 py-3.5 text-left transition-all",
              isSelected
                ? "border-gold-500 bg-gold-50 shadow-sm dark:bg-gold-950/30"
                : "border-border bg-surface hover:border-gold-400/60"
            )}
          >
            <span
              className={cn(
                "font-display font-semibold",
                isSelected ? "text-magenta-800 dark:text-magenta-200" : "text-foreground"
              )}
            >
              {option.label}
            </span>
            {option.hint && <span className="text-xs text-foreground-muted">{option.hint}</span>}
          </button>
        );
      })}
    </div>
  );
}
