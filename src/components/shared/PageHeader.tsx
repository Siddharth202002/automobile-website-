import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb, type Crumb } from "@/components/shared/Breadcrumb";
import { cn } from "@/lib/format";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs?: Crumb[];
  tone?: "cream" | "sand" | "dark";
  /**
   * `center` centres the text too (the Sell hero).
   * `center-block` centres the column but keeps the text ranged left, which is
   * how the About and Contact headers read in the reference.
   */
  align?: "left" | "center" | "center-block";
  /** Adds the hairline rule that separates the header from page content. */
  divider?: boolean;
  children?: ReactNode;
}

const tones = {
  cream: "bg-cream",
  sand: "bg-sand border-b border-line",
  dark: "bg-ink",
} as const;

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  tone = "cream",
  align = "left",
  divider = false,
  children,
}: PageHeaderProps) {
  const light = tone === "dark";
  const centered = align !== "left";

  return (
    <section className={cn(tones[tone], divider && tone !== "sand" && "border-b border-line")}>
      <Container
        className={cn(
          "pb-12 pt-8 lg:pb-16 lg:pt-10",
          light && "pb-20 pt-16 lg:pb-28 lg:pt-24",
        )}
      >
        {crumbs ? (
          <div className="mb-8">
            <Breadcrumb items={crumbs} tone={light ? "light" : "dark"} />
          </div>
        ) : null}

        <div className={cn("max-w-3xl", centered && "mx-auto", align === "center" && "text-center")}>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1
            className={cn(
              "mt-4 text-balance font-display text-[2.15rem] leading-[1.08] sm:text-[2.75rem] lg:text-[3.25rem]",
              light ? "text-parchment" : "text-ink",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "mt-5 text-pretty text-[1.0625rem] leading-[1.75]",
                light ? "text-parchment/60" : "text-muted",
              )}
            >
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
