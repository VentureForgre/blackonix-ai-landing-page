import Link from "next/link";

import type { ButtonVariant } from "../../lib/types";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "kinetic-gradient text-on-primary shadow-glow hover:opacity-90 focus-visible:ring-primary/50",
  secondary:
    "bg-surface-container-highest text-on-surface shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-surface-bright focus-visible:ring-white/20",
  ghost:
    "bg-transparent text-primary hover:bg-primary/10 focus-visible:ring-primary/50"
};

const baseClassName =
  "inline-flex min-h-11 items-center justify-center rounded px-6 py-3 text-center font-extrabold uppercase leading-tight tracking-[0.2em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]";

function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Button({
  children,
  variant = "primary",
  className,
  href,
  type = "button",
  ariaLabel
}: ButtonProps) {
  const classes = classNames(baseClassName, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
