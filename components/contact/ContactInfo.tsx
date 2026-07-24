import { Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink, genericWhatsAppMessage } from "@/lib/whatsapp";
import { siteConfig } from "@/data/site";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <Button href={buildWhatsAppLink(genericWhatsAppMessage)} variant="whatsapp" size="lg" external className="w-fit">
        Chat on WhatsApp
      </Button>

      <div className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">Email</span>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-foreground-muted hover:text-gold-600 dark:hover:text-gold-300">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">Phone</span>
            {siteConfig.phoneNumbers.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="text-sm text-foreground-muted hover:text-gold-600 dark:hover:text-gold-300"
              >
                {phone.display}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">Location</span>
            <span className="text-sm text-foreground-muted">{siteConfig.address}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <LinkedInIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">LinkedIn</span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground-muted hover:text-gold-600 dark:hover:text-gold-300"
            >
              SCRIBIA Writing Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
