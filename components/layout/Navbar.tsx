"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md shadow-sm shadow-black/[0.03]"
          : "border-transparent bg-background/60 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-wide text-magenta-800 dark:text-magenta-200">
              SCRIBIA
            </span>
            <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.2em] text-foreground-muted sm:block">
              Writing Services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-magenta-700 dark:text-magenta-200"
                    : "text-foreground-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/pricing" variant="primary" size="sm">
            Get a Quote
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden",
          mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 border-t-0"
        )}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-magenta-50 text-magenta-700 dark:bg-magenta-900/30 dark:text-magenta-200"
                    : "text-foreground-muted hover:bg-surface-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/pricing" variant="primary" size="sm" className="mt-2 w-full">
              Get a Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
