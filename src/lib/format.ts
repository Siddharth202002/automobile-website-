const kmFormatter = new Intl.NumberFormat("en-IN");

/**
 * 3475000 -> "₹34.75 Lakh" (the convention used across the reference design).
 * A car with no price yet shows "Price on request" rather than a made-up number.
 */
export function formatPrice(price?: number): string {
  if (price === undefined) return "Price on request";
  return `₹${(price / 100000).toFixed(2)} Lakh`;
}

/** 3475000 -> "34.75" — for inputs and comparisons that work in lakh. */
export function toLakh(price: number): number {
  return price / 100000;
}

/** 28450 -> "28,450 km" */
export function formatMileage(mileage: number): string {
  return `${kmFormatter.format(mileage)} km`;
}

/** 1 -> "1st Owner" */
export function formatOwners(owners: number): string {
  const suffix =
    owners % 10 === 1 && owners % 100 !== 11
      ? "st"
      : owners % 10 === 2 && owners % 100 !== 12
        ? "nd"
        : owners % 10 === 3 && owners % 100 !== 13
          ? "rd"
          : "th";
  return `${owners}${suffix} Owner`;
}

/**
 * Indicative monthly instalment on a reducing-balance loan.
 * Used only for the on-page EMI estimator — not a quote.
 */
export function calculateEmi(
  principal: number,
  annualRatePercent: number,
  months: number,
): number {
  if (principal <= 0 || months <= 0) return 0;
  const monthlyRate = annualRatePercent / 12 / 100;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

/** 42318.77 -> "₹42,319" */
export function formatRupees(amount: number): string {
  return `₹${kmFormatter.format(Math.round(amount))}`;
}

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
