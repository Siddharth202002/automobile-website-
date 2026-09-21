"use client";

import { useMemo, useState } from "react";
import { calculateEmi, cn, formatRupees } from "@/lib/format";

const tenures = [24, 36, 48, 60];

interface LoanCalculatorProps {
  /**
   * Fix the car price (on a listing). Leave it out and the visitor can set
   * the price themselves (the general calculator on the home page).
   */
  price?: number;
  className?: string;
}

/** Indicative monthly outgo. Deliberately labelled as an estimate, not a quote. */
export function LoanCalculator({ price: fixedPrice, className }: LoanCalculatorProps) {
  const [priceLakh, setPriceLakh] = useState(6);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [months, setMonths] = useState(48);
  const [rate, setRate] = useState(11);

  const price = fixedPrice ?? priceLakh * 100000;
  const downPayment = Math.round((price * downPaymentPercent) / 100);
  const loanAmount = price - downPayment;
  const emi = useMemo(
    () => calculateEmi(loanAmount, rate, months),
    [loanAmount, rate, months],
  );

  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-4 rounded-xl bg-gold-50 px-5 py-4">
        <div>
          <p className="text-sm text-muted">Estimated monthly EMI</p>
          <p className="mt-1 text-[1.9rem] font-bold leading-none tracking-[-0.02em] text-ink">
            {formatRupees(emi)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-subtle">Loan amount</p>
          <p className="mt-1 text-sm font-semibold text-ink">{formatRupees(loanAmount)}</p>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {fixedPrice === undefined ? (
          <Control
            id="loan-price"
            label="Car price"
            value={`₹${priceLakh.toFixed(1)} Lakh`}
          >
            <input
              id="loan-price"
              type="range"
              min={2}
              max={30}
              step={0.5}
              value={priceLakh}
              onChange={(event) => setPriceLakh(Number(event.target.value))}
              className="w-full accent-[var(--color-gold)]"
            />
          </Control>
        ) : null}

        <Control
          id="loan-down"
          label="Down payment"
          value={`${downPaymentPercent}% · ${formatRupees(downPayment)}`}
        >
          <input
            id="loan-down"
            type="range"
            min={10}
            max={60}
            step={5}
            value={downPaymentPercent}
            onChange={(event) => setDownPaymentPercent(Number(event.target.value))}
            className="w-full accent-[var(--color-gold)]"
          />
        </Control>

        <Control id="loan-rate" label="Interest rate" value={`${rate.toFixed(1)}% p.a.`}>
          <input
            id="loan-rate"
            type="range"
            min={8}
            max={18}
            step={0.5}
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
            className="w-full accent-[var(--color-gold)]"
          />
        </Control>

        <div>
          <p className="mb-2.5 text-sm font-medium text-ink">Tenure</p>
          <div className="grid grid-cols-4 gap-2">
            {tenures.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setMonths(option)}
                aria-pressed={months === option}
                className={cn(
                  "rounded-lg border px-2 py-2 text-sm transition-colors",
                  months === option
                    ? "border-gold bg-gold-100 font-semibold text-gold-600"
                    : "border-ink/12 text-muted hover:border-ink/30 hover:text-ink",
                )}
              >
                {option / 12} yr
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-subtle">
        Indicative only. The final rate and EMI depend on the lender and your credit
        profile — we confirm the exact figures before you commit.
      </p>
    </div>
  );
}

function Control({
  id,
  label,
  value,
  children,
}: {
  id: string;
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
        <span className="text-sm text-muted">{value}</span>
      </div>
      {children}
    </div>
  );
}
