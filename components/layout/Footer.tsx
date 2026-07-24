import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { navLinks, siteConfig } from "@/data/site";
import { serviceGroups } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-lg font-semibold text-magenta-800 dark:text-magenta-200">
              SCRIBIA
            </span>
          </div>
          <p className="text-sm leading-relaxed text-foreground-muted">
            {siteConfig.tagline} A Nigerian academic and research writing
            consultancy supporting students, researchers, lecturers, and
            professionals.
          </p>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SCRIBIA on LinkedIn"
            className="mt-1 flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-muted transition-colors hover:border-gold-400 hover:text-gold-600"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-magenta-700 dark:text-magenta-300">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-gold-600 dark:hover:text-gold-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-magenta-700 dark:text-magenta-300">
            Services
          </h3>
          <ul className="flex flex-col gap-2">
            {serviceGroups.map((group) => (
              <li key={group.title}>
                <span className="text-sm text-foreground-muted">{group.title}</span>
              </li>
            ))}
            <li>
              <Link
                href="/data-analysis"
                className="text-sm text-foreground-muted transition-colors hover:text-gold-600 dark:hover:text-gold-300"
              >
                Data Analysis
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-magenta-700 dark:text-magenta-300">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-foreground-muted">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-600 dark:hover:text-gold-300">
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.phoneNumbers.map((phone) => (
              <li key={phone.href} className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
                <a href={phone.href} className="hover:text-gold-600 dark:hover:text-gold-300">
                  {phone.display}
                </a>
              </li>
            ))}
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-500" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-foreground-muted sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Excellent Writing, Delivered.</p>
        </Container>
      </div>
    </footer>
  );
}
