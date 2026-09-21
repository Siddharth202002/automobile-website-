import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface FormSuccessProps {
  title: string;
  body: string;
  onReset: () => void;
  resetLabel: string;
}

export function FormSuccess({ title, body, onReset, resetLabel }: FormSuccessProps) {
  return (
    <div role="status" className="px-2 py-10 text-center sm:py-14">
      <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-50 text-forest-700">
        <CheckCircle2 className="h-7 w-7" strokeWidth={1.6} />
      </span>
      <h3 className="mt-6 font-display text-2xl text-ink">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-[1.75] text-muted">
        {body}
      </p>
      <Button variant="outline" size="md" className="mt-8" onClick={onReset}>
        {resetLabel}
      </Button>
    </div>
  );
}
