import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-gradient text-white shadow-[0_8px_24px_-8px_var(--brand)] hover:-translate-y-0.5 hover:brightness-[1.07] hover:shadow-[0_14px_32px_-8px_var(--brand)]",
  secondary:
    "bg-card text-foreground border border-border-strong shadow-soft hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface",
  ghost: "text-foreground hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    // mailto: opens the mail client, not a page — a _blank target would leave
    // an empty tab behind in some browsers.
    const isMailto = href.startsWith("mailto:");
    return (
      <a
        href={href}
        target={isMailto ? undefined : "_blank"}
        rel={isMailto ? undefined : "noopener noreferrer"}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}
