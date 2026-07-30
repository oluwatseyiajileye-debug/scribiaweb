"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Loader2 } from "lucide-react";
import { BlueprintForm } from "@/components/blueprint/BlueprintForm";
import { BlueprintReport } from "@/components/blueprint/BlueprintReport";
import type { BlueprintRequest, BlueprintResult } from "@/lib/blueprint-schema";

const LOADING_MESSAGES = [
  "Analyzing your research topic...",
  "Structuring objectives and research questions...",
  "Identifying suitable methods and variables...",
  "Curating keywords and academic databases...",
  "Assembling your Research Blueprint...",
];

type Status = "idle" | "loading" | "result" | "error";

export function BlueprintExperience() {
  const [status, setStatus] = useState<Status>("idle");
  const [input, setInput] = useState<BlueprintRequest | null>(null);
  const [result, setResult] = useState<BlueprintResult | null>(null);
  const [error, setError] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    if (status !== "loading") return;
    const interval = setInterval(() => {
      setMessageIndex((i) => (i + 1) % LOADING_MESSAGES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [status]);

  async function handleSubmit(data: BlueprintRequest) {
    setInput(data);
    setStatus("loading");
    setMessageIndex(0);
    setError("");

    try {
      const res = await fetch("/api/blueprint", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setResult(json.result as BlueprintResult);
      setStatus("result");
    } catch {
      setError("Couldn't reach the server. Please check your connection and try again.");
      setStatus("error");
    }
  }

  function handleReset() {
    setStatus("idle");
    setResult(null);
    setError("");
  }

  if (status === "result" && result && input) {
    return <BlueprintReport input={input} result={result} onReset={handleReset} />;
  }

  return (
    <div className="flex flex-col gap-6">
      {status === "error" && (
        <div className="mx-auto flex w-full max-w-2xl items-start gap-3 rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}

      <div className="relative">
        <BlueprintForm onSubmit={handleSubmit} submitting={status === "loading"} />

        {status === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl bg-surface/90 backdrop-blur-sm">
            <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
            <AnimatePresence mode="wait">
              <motion.p
                key={messageIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-sm font-medium text-foreground-muted"
              >
                {LOADING_MESSAGES[messageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
