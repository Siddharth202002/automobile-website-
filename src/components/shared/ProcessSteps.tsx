import { cn } from "@/lib/format";

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

interface ProcessStepsProps {
  steps: readonly ProcessStep[];
  className?: string;
}

/**
 * The numbered rail used on the home and sell pages: a hairline connector
 * across the medallions on wide screens, a plain vertical list below `md`.
 */
export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <ol
      className={cn(
        "relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6",
        className,
      )}
    >
      {/* Connector runs the width of the rail, behind the medallions. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-8 hidden h-px bg-line lg:block"
      />

      {steps.map((item) => (
        <li key={item.step} className="relative flex flex-col items-center text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-300 bg-white font-display text-lg text-gold">
            {item.step}
          </span>
          <h3 className="mt-6 text-[1.0625rem] font-bold text-ink">{item.title}</h3>
          <p className="mt-3 max-w-[16rem] text-[0.9375rem] leading-[1.7] text-muted">
            {item.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
