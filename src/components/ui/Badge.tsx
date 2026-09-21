import type { ReactNode } from "react";
import { cn } from "@/lib/format";

type BadgeTone = "verified" | "new" | "dark" | "neutral";

const tones: Record<BadgeTone, string> = {
  verified: "bg-forest-50 text-forest-700",
  new: "bg-gold-100 text-gold-600",
  dark: "bg-ink/70 text-white backdrop-blur-sm",
  neutral: "bg-white/85 text-ink backdrop-blur-sm",
};

interface BadgeProps {
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}

export function Badge({ tone = "neutral", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold leading-none",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
