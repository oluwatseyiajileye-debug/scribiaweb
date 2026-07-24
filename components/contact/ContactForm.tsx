"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = name.trim() !== "" && message.trim() !== "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    const lines = [
      `Hello SCRIBIA Writing Services, my name is ${name}.`,
      "",
      email ? `Email: ${email}` : "",
      service ? `Service of interest: ${service}` : "",
      "",
      `Message: ${message}`,
    ].filter(Boolean);

    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold text-foreground">Send us a message</h2>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Full Name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none placeholder:text-foreground-muted/60 focus:border-gold-500"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Email (optional)
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none placeholder:text-foreground-muted/60 focus:border-gold-500"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Service of Interest (optional)
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="e.g. Master's Thesis, SPSS Analysis, Content Writing"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none placeholder:text-foreground-muted/60 focus:border-gold-500"
        />
      </label>
      <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
        Message
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-foreground outline-none placeholder:text-foreground-muted/60 focus:border-gold-500"
        />
      </label>
      <Button type="submit" variant="whatsapp" size="md" disabled={!canSubmit} className="w-full sm:w-fit">
        <Send className="h-4 w-4" />
        Send via WhatsApp
      </Button>
      <p className="text-xs text-foreground-muted">
        Submitting opens WhatsApp with your message pre-filled — you&apos;ll
        send it directly from your own WhatsApp account.
      </p>
    </form>
  );
}
