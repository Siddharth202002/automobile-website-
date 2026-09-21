import type {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/format";

const control =
  "w-full rounded-xl border border-ink/12 bg-white px-4 text-[0.95rem] text-ink placeholder:text-subtle transition-colors duration-200 hover:border-ink/25 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/25";

interface FieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  className?: string;
  children: ReactNode;
}

export function Field({
  label,
  htmlFor,
  required,
  hint,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {required ? (
          <span className="text-gold" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
      {hint ? <p className="text-xs text-subtle">{hint}</p> : null}
    </div>
  );
}

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(control, "h-12", className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(control, "py-3", className)} {...props} />;
}

export function Select({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(control, "field-select h-12", className)} {...props}>
      {children}
    </select>
  );
}

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/**
 * A square checkbox with a gold fill when checked — drawn with an SVG
 * background so it stays crisp and consistent across browsers.
 */
export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "group flex cursor-pointer items-center gap-3 py-1.5 text-[0.95rem] text-muted transition-colors hover:text-ink",
        className,
      )}
    >
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        {...props}
      />
      <span
        aria-hidden="true"
        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border border-ink/25 bg-white transition-colors group-hover:border-ink/45 peer-checked:border-gold peer-checked:bg-gold peer-focus-visible:ring-2 peer-focus-visible:ring-gold/40 peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100"
      >
        <svg
          viewBox="0 0 16 16"
          className="h-3 w-3 scale-75 text-white opacity-0 transition"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 8.5 3.2 3.2L13 5" />
        </svg>
      </span>
      <span className="peer-checked:font-medium peer-checked:text-ink">{label}</span>
    </label>
  );
}
