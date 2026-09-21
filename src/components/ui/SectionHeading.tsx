import type { ReactNode } from "react";
import { cn } from "@/lib/format";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  /** Heading level — sections default to h2 so the page keeps one h1. */
  as?: "h1" | "h2";
  action?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  action,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        centered && "md:flex-col md:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <Tag
          className={cn(
            "mt-3 text-balance font-display leading-[1.08]",
            Tag === "h1"
              ? "text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem]"
              : "text-[1.85rem] sm:text-[2.25rem] lg:text-[2.75rem]",
            tone === "light" ? "text-parchment" : "text-ink",
          )}
        >
          {title}
        </Tag>
        {description ? (
          <p
            className={cn(
              "mt-5 text-pretty text-[1.0625rem] leading-[1.7]",
              tone === "light" ? "text-parchment/65" : "text-muted",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
