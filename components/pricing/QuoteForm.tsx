"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { OptionGroup } from "@/components/pricing/OptionGroup";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  academicBasePrices,
  complexityOptions,
  estimateAcademicQuote,
  estimateNonAcademicQuote,
  facultyOptions,
  formatNaira,
  nonAcademicServiceOptions,
  programmeOptions,
  projectTypeOptions,
  scopeOptions,
  type AcademicProjectType,
  type Complexity,
  type NonAcademicService,
  type Programme,
  type ScopeBracket,
} from "@/data/pricing";

type Category = "academic" | "nonAcademic";

type FormState = {
  category: Category | "";
  programme: Programme | "";
  projectType: AcademicProjectType | "";
  faculty: string;
  department: string;
  topic: string;
  service: NonAcademicService | "";
  scope: ScopeBracket | "";
  complexity: Complexity | "";
};

const initialState: FormState = {
  category: "",
  programme: "",
  projectType: "",
  faculty: "",
  department: "",
  topic: "",
  service: "",
  scope: "",
  complexity: "",
};

function academicSteps(): string[] {
  return ["category", "programme", "details", "complexity", "result"];
}
function nonAcademicSteps(): string[] {
  return ["category", "service", "complexity", "result"];
}

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = form.category === "nonAcademic" ? nonAcademicSteps() : academicSteps();
  const currentStep = steps[stepIndex];

  let canAdvance: boolean;
  switch (currentStep) {
    case "category":
      canAdvance = form.category !== "";
      break;
    case "programme":
      canAdvance = form.programme !== "" && form.projectType !== "";
      break;
    case "details":
      canAdvance = form.faculty !== "" && form.department.trim() !== "" && form.topic.trim() !== "";
      break;
    case "service":
      canAdvance = form.service !== "" && form.scope !== "";
      break;
    case "complexity":
      canAdvance = form.complexity !== "";
      break;
    default:
      canAdvance = true;
  }

  let estimate: ReturnType<typeof estimateAcademicQuote> | null = null;
  if (form.category === "academic" && form.programme && form.projectType && form.complexity) {
    estimate = estimateAcademicQuote({
      programme: form.programme,
      projectType: form.projectType,
      complexity: form.complexity,
    });
  } else if (form.category === "nonAcademic" && form.service && form.scope && form.complexity) {
    estimate = estimateNonAcademicQuote({
      service: form.service,
      scope: form.scope,
      complexity: form.complexity,
    });
  }

  let whatsappMessage = "";
  if (estimate) {
    const lines = ["Hello SCRIBIA Writing Services, I'd like a quotation for:", ""];
    if (form.category === "academic") {
      lines.push(`Category: Academic`);
      lines.push(`Programme: ${programmeOptions.find((o) => o.value === form.programme)?.label}`);
      lines.push(`Project Type: ${projectTypeOptions.find((o) => o.value === form.projectType)?.label}`);
      lines.push(`Faculty: ${form.faculty}`);
      lines.push(`Department: ${form.department}`);
      lines.push(`Topic: ${form.topic}`);
    } else {
      lines.push(`Category: Non-Academic`);
      lines.push(`Service: ${nonAcademicServiceOptions.find((o) => o.value === form.service)?.label}`);
      lines.push(`Scope: ${scopeOptions.find((o) => o.value === form.scope)?.label}`);
    }
    lines.push(`Complexity: ${complexityOptions.find((o) => o.value === form.complexity)?.label}`);
    lines.push("");
    lines.push(`Estimated quote: ${formatNaira(estimate.min)} - ${formatNaira(estimate.max)}`);
    lines.push("");
    lines.push("Please confirm final pricing and delivery timeline.");
    whatsappMessage = lines.join("\n");
  }

  function goNext() {
    setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  }
  function goBack() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }
  function reset() {
    setForm(initialState);
    setStepIndex(0);
  }

  const totalSteps = steps.length;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8">
      <div className="flex items-center gap-2">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              index <= stepIndex ? "bg-gold-500" : "bg-border"
            }`}
          />
        ))}
      </div>
      <p className="text-center text-xs font-medium uppercase tracking-widest text-foreground-muted">
        Step {stepIndex + 1} of {totalSteps}
      </p>

      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-10">
        {currentStep === "category" && (
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-2xl font-semibold text-foreground">Is this Academic or Non-Academic?</h2>
            <OptionGroup
              columns={2}
              value={form.category}
              onChange={(value) => setForm((f) => ({ ...f, category: value as Category }))}
              options={[
                { value: "academic", label: "Academic", hint: "Projects, theses, dissertations, journal articles" },
                { value: "nonAcademic", label: "Non-Academic", hint: "Business, content, and creative writing" },
              ]}
            />
          </div>
        )}

        {currentStep === "programme" && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">Programme</h2>
              <OptionGroup
                columns={3}
                value={form.programme}
                onChange={(value) => setForm((f) => ({ ...f, programme: value }))}
                options={programmeOptions.map((o) => ({
                  ...o,
                  hint: `From ${formatNaira(academicBasePrices[o.value])}`,
                }))}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">Project Type</h2>
              <OptionGroup
                columns={2}
                value={form.projectType}
                onChange={(value) => setForm((f) => ({ ...f, projectType: value }))}
                options={projectTypeOptions}
              />
            </div>
          </div>
        )}

        {currentStep === "service" && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">Service</h2>
              <OptionGroup
                columns={2}
                value={form.service}
                onChange={(value) => setForm((f) => ({ ...f, service: value }))}
                options={nonAcademicServiceOptions}
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">Scope</h2>
              <OptionGroup
                columns={2}
                value={form.scope}
                onChange={(value) => setForm((f) => ({ ...f, scope: value }))}
                options={scopeOptions}
              />
            </div>
          </div>
        )}

        {currentStep === "details" && (
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-2xl font-semibold text-foreground">Project Details</h2>
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
              Faculty
              <select
                value={form.faculty}
                onChange={(e) => setForm((f) => ({ ...f, faculty: e.target.value }))}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none focus:border-gold-500"
              >
                <option value="" disabled>
                  Select your faculty
                </option>
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
                value={form.department}
                onChange={(e) => setForm((f) => ({ ...f, department: e.target.value }))}
                placeholder="e.g. Sociology, Computer Science"
                className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none placeholder:text-foreground-muted/60 focus:border-gold-500"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
              Topic
              <textarea
                value={form.topic}
                onChange={(e) => setForm((f) => ({ ...f, topic: e.target.value }))}
                rows={3}
                placeholder="Your research topic, or as much detail as you have"
                className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none placeholder:text-foreground-muted/60 focus:border-gold-500"
              />
            </label>
          </div>
        )}

        {currentStep === "complexity" && (
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-2xl font-semibold text-foreground">Complexity</h2>
            <OptionGroup
              columns={1}
              value={form.complexity}
              onChange={(value) => setForm((f) => ({ ...f, complexity: value }))}
              options={complexityOptions}
            />
          </div>
        )}

        {currentStep === "result" && estimate && (
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground-muted">
              Estimated Quotation
            </span>
            <p className="font-display text-4xl font-semibold text-magenta-800 sm:text-5xl dark:text-magenta-200">
              {formatNaira(estimate.min)} &ndash; {formatNaira(estimate.max)}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-foreground-muted">
              This is an estimated range based on the details provided. Final
              pricing is confirmed once our team reviews your full
              requirements on WhatsApp.
            </p>
            <Button href={buildWhatsAppLink(whatsappMessage)} variant="whatsapp" size="lg" external>
              Send Request to WhatsApp
            </Button>
          </div>
        )}

        <div className="mt-10 flex items-center justify-between">
          {stepIndex > 0 ? (
            <Button variant="ghost" size="sm" onClick={goBack}>
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          ) : (
            <span />
          )}

          {currentStep === "result" ? (
            <Button variant="outline" size="sm" onClick={reset}>
              <RotateCcw className="h-4 w-4" />
              Start Over
            </Button>
          ) : (
            <Button variant="primary" size="sm" onClick={goNext} disabled={!canAdvance}>
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
