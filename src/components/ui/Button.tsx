import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/format";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "outlineLight"
  | "solidDark"
  | "ghost"
  | "dashed";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out disabled:pointer-events-none disabled:opacity-55";

const variants: Record<ButtonVariant, string> = {
  // The gold call-to-action used for the single most important action per view.
  primary:
    "bg-gold text-ink shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] hover:bg-gold-600 hover:text-cream active:translate-y-px",
  // Secondary action on a light surface.
  outline:
    "border border-ink/15 bg-white text-ink hover:border-ink/35 hover:bg-ink hover:text-cream active:translate-y-px",
  // Secondary action on the dark shell.
  outlineLight:
    "border border-white/25 text-parchment hover:border-white/60 hover:bg-white/10 active:translate-y-px",
  solidDark: "bg-ink text-cream hover:bg-ink-600 active:translate-y-px",
  ghost: "text-ink hover:bg-ink/5",
  dashed:
    "border border-dashed border-ink/25 text-ink hover:border-gold hover:text-gold-600",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-[54px] px-7 text-base",
};

export function buttonStyles(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
) {
  return cn(base, variants[variant], sizes[size], className);
}

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant,
  size,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={buttonStyles(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

type ButtonLinkProps = CommonProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function ButtonLink({
  href,
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const isExternal = /^(https?:|tel:|mailto:)/.test(href);
  const classes = buttonStyles(variant, size, className);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
