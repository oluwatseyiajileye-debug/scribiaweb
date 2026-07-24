import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-gold-500 text-magenta-950 hover:bg-gold-400 border border-gold-500 shadow-sm shadow-gold-900/10",
  secondary:
    "bg-magenta-700 text-white hover:bg-magenta-600 border border-magenta-700",
  outline:
    "bg-transparent text-foreground border border-gold-500 hover:bg-gold-50 dark:hover:bg-gold-950/30",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1fbd5a] border border-[#1fbd5a]",
  ghost:
    "bg-transparent text-foreground-muted hover:text-foreground border border-transparent",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-sm px-5 py-3 gap-2",
  lg: "text-base px-7 py-3.5 gap-2.5",
};

const base =
  "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripping style props before spreading the rest onto <button>
  const { variant: _variant, size: _size, className: _className, href: _href, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
