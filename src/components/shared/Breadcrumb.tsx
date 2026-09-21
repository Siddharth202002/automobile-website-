import Link from "next/link";
import { cn } from "@/lib/format";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumb({
  items,
  tone = "dark",
}: {
  items: Crumb[];
  tone?: "dark" | "light";
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    tone === "light"
                      ? "text-parchment/60 hover:text-parchment"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={tone === "light" ? "text-parchment" : "text-ink"}
                >
                  {item.label}
                </span>
              )}
              {!last ? (
                <span
                  aria-hidden="true"
                  className={tone === "light" ? "text-parchment/30" : "text-subtle"}
                >
                  /
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
