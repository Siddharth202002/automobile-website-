import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { cn } from "@/lib/format";
import type { Vehicle } from "@/lib/types";

interface VehicleGridProps {
  vehicles: Vehicle[];
  /** Columns at the largest breakpoint. Cards stay readable below it. */
  columns?: 2 | 3 | 4;
  className?: string;
  emptyState?: React.ReactNode;
}

export function VehicleGrid({
  vehicles,
  columns = 3,
  className,
  emptyState,
}: VehicleGridProps) {
  if (vehicles.length === 0 && emptyState) {
    return <>{emptyState}</>;
  }

  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2",
        columns === 3 && "xl:grid-cols-3",
        columns === 4 && "xl:grid-cols-4",
        className,
      )}
    >
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} priority={index === 0} />
      ))}
    </div>
  );
}

/** Matches the card's silhouette so the layout does not jump while filtering. */
export function VehicleCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
      <div className="aspect-[4/3] animate-pulse bg-linear-to-b from-sand-200 to-sand-300" />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="w-full space-y-2">
            <div className="h-5 w-2/3 animate-pulse rounded bg-sand-200" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-sand-100" />
          </div>
          <div className="h-5 w-24 shrink-0 animate-pulse rounded bg-sand-200" />
        </div>
        <div className="flex gap-3">
          {[0, 1, 2].map((key) => (
            <div key={key} className="h-4 w-16 animate-pulse rounded bg-sand-100" />
          ))}
        </div>
        <div className="h-px bg-line-soft" />
        <div className="flex justify-between">
          <div className="h-4 w-32 animate-pulse rounded bg-sand-100" />
          <div className="h-4 w-24 animate-pulse rounded bg-sand-100" />
        </div>
      </div>
    </div>
  );
}

export function VehicleGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <VehicleCardSkeleton key={index} />
      ))}
    </div>
  );
}
