import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/format";

interface LogoProps {
  /** `dark` sits on the near-black shell, `light` on the cream canvas. */
  tone?: "dark" | "light";
  className?: string;
}

export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display text-[1.6rem] uppercase leading-none tracking-[0.1em] sm:text-[1.75rem]",
          tone === "dark" ? "text-parchment" : "text-ink",
        )}
      >
        {site.name}
      </span>
      <span className="mt-1.5 text-[0.5625rem] font-bold uppercase leading-none tracking-[0.22em] text-gold sm:text-[0.625rem]">
        {site.tagline}
      </span>
    </Link>
  );
}
