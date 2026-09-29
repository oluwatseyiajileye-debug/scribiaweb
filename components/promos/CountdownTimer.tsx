"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(endsAt: string): TimeLeft | null {
  const diff = new Date(endsAt).getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-magenta-900 font-display text-xl font-bold text-gold-400 sm:h-16 sm:w-16 sm:text-2xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-foreground-muted">{label}</span>
    </div>
  );
}

export function CountdownTimer({ endsAt }: { endsAt: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined);

  useEffect(() => {
    setTimeLeft(getTimeLeft(endsAt));
    const interval = setInterval(() => setTimeLeft(getTimeLeft(endsAt)), 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  if (timeLeft === undefined) {
    return <div className="h-[72px] sm:h-[80px]" aria-hidden />;
  }

  if (timeLeft === null) {
    return (
      <div className="rounded-xl border border-border bg-surface-muted px-6 py-3 text-sm font-semibold text-foreground-muted">
        This offer has ended
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:text-magenta-300">
        Offer Ends In
      </span>
      <div className="flex items-center gap-2.5 sm:gap-3">
        <Unit value={timeLeft.days} label="Days" />
        <Unit value={timeLeft.hours} label="Hrs" />
        <Unit value={timeLeft.minutes} label="Min" />
        <Unit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
