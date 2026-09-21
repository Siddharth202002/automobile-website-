import { cn, formatMileage, formatOwners } from "@/lib/format";
import type { Vehicle } from "@/lib/types";

export function SpecTable({ vehicle }: { vehicle: Vehicle }) {
  // Rows with no recorded value are left out rather than shown as blanks.
  const rows = (
    [
      ["Manufacturing Year", vehicle.year?.toString()],
      ["Registration Year", vehicle.registrationYear?.toString()],
      ["Kilometres Driven", vehicle.mileage ? formatMileage(vehicle.mileage) : undefined],
      ["Fuel Type", vehicle.fuelType],
      ["Transmission", vehicle.transmission],
      ["Body Type", vehicle.bodyType],
      ["Ownership", vehicle.owners ? formatOwners(vehicle.owners) : undefined],
      ["Exterior Colour", vehicle.colour],
      ["Location", vehicle.location],
      ["Listing ID", vehicle.id.toUpperCase()],
    ] as [string, string | undefined][]
  ).filter((row): row is [string, string] => Boolean(row[1]));
  // In the two-column layout the last row holds two cells only when the count is even.
  const evenRows = rows.length % 2 === 0;

  return (
    <dl className="grid rounded-2xl border border-line bg-white px-6 py-2 sm:grid-cols-2 sm:gap-x-10 sm:px-8 sm:py-4">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className={cn(
            "flex items-baseline justify-between gap-4 border-b border-line-soft py-4 last:border-b-0",
            evenRows && "sm:[&:nth-last-child(2)]:border-b-0",
          )}
        >
          <dt className="text-[0.9375rem] text-muted">{label}</dt>
          <dd className="text-right text-[0.9375rem] font-bold text-ink">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
