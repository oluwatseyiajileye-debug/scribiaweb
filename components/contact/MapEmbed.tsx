import { siteConfig } from "@/data/site";

export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <iframe
        title={`Map showing ${siteConfig.address}`}
        src={siteConfig.mapEmbedSrc}
        width="100%"
        height="320"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="border-t border-border bg-surface-muted px-4 py-2 text-xs text-foreground-muted">
        General area shown — exact address available on request.
      </p>
    </div>
  );
}
