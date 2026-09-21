"use client";

import { useState } from "react";
import { ChevronDown, Wallet } from "lucide-react";
import { LoanCalculator } from "@/components/finance/LoanCalculator";
import { cn } from "@/lib/format";

/** The collapsible EMI panel on a priced listing. */
export function EmiEstimator({ price }: { price: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-xl border transition-colors",
        open ? "border-line bg-white" : "border-dashed border-ink/25",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="emi-panel"
        className="flex h-[54px] w-full items-center justify-center gap-2 px-6 text-base font-semibold text-ink transition-colors hover:text-gold-600"
      >
        <Wallet className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} />
        Estimate EMI / Financing
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          strokeWidth={2}
        />
      </button>

      <div id="emi-panel" hidden={!open} className="border-t border-line px-5 pb-6 pt-5">
        <LoanCalculator price={price} />
      </div>
    </div>
  );
}
