"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OptionGroup } from "@/components/pricing/OptionGroup";
import { facultyOptions, programmeOptions, researchTypeOptions } from "@/data/blueprint";
import type { BlueprintRequest } from "@/lib/blueprint-schema";
import type { Programme } from "@/data/pricing";

export function BlueprintForm({
  onSubmit,
  submitting,
}: {
  onSubmit: (input: BlueprintRequest) => void;
  submitting: boolean;
}) {
  const [topic, setTopic] = useState("");
  const [academicLevel, setAcademicLevel] = useState<Programme | "">("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [researchType, setResearchType] = useState("");

  const topicLength = topic.trim().length;
  const canSubmit = topicLength >= 10 && topicLength <= 300 && !submitting;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    onSubmit({
      topic: topic.trim(),
      academicLevel: academicLevel
        ? programmeOptions.find((o) => o.value === academicLevel)?.label
        : undefined,
      faculty: faculty || undefined,
      department: department.trim() || undefined,
      researchType: researchType || undefined,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl flex-col gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-10">
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Research Topic <span className="text-magenta-600">*</span>
        <textarea
          required
          rows={3}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. The impact of microfinance on small business growth in Lagos State"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none placeholder:text-foreground-muted/60 focus:border-gold-500"
        />
        <span className="text-xs text-foreground-muted">{topicLength}/300 characters (minimum 10)</span>
      </label>

      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-foreground">Academic Level</span>
        <OptionGroup
          columns={3}
          value={academicLevel}
          onChange={setAcademicLevel}
          options={programmeOptions}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Faculty
          <select
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
            className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-gold-500"
          >
            <option value="">Select your faculty (optional)</option>
            {facultyOptions.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Department
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="e.g. Economics (optional)"
            className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none placeholder:text-foreground-muted/60 focus:border-gold-500"
          />
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-foreground">Research Type</span>
        <OptionGroup
          columns={3}
          value={researchType}
          onChange={setResearchType}
          options={researchTypeOptions}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={!canSubmit} className="w-full sm:w-fit">
        <Sparkles className="h-4 w-4" />
        {submitting ? "Generating Blueprint..." : "Generate Research Blueprint"}
      </Button>
    </form>
  );
}
