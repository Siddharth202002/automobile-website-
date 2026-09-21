import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/format";

interface ContainerProps {
  as?: ElementType;
  /**
   * `default` is the reading measure used by page content.
   * `wide` is the fuller gutter the dark shell (header and footer) sits in.
   */
  size?: "default" | "wide";
  className?: string;
  children: ReactNode;
}

const widths = {
  default: "max-w-[1200px] px-5 sm:px-8 lg:px-10",
  wide: "max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20",
} as const;

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full", widths[size], className)}>{children}</Tag>
  );
}
