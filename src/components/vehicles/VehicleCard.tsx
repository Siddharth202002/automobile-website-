import Link from "next/link";
import { ArrowRight, Calendar, Camera, Cog, Fuel, Gauge, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { VehicleMedia } from "@/components/vehicles/VehicleMedia";
import { formatMileage, formatOwners, formatPrice } from "@/lib/format";
import type { Vehicle } from "@/lib/types";

interface VehicleCardProps {
  vehicle: Vehicle;
  priority?: boolean;
}

export function VehicleCard({ vehicle, priority }: VehicleCardProps) {
  // Unknown values are dropped rather than rendered as blanks or guesses.
  const specs = [
    { icon: Calendar, label: vehicle.year ? String(vehicle.year) : undefined },
    { icon: Fuel, label: vehicle.fuelType },
    { icon: Cog, label: vehicle.transmission },
    { icon: Gauge, label: vehicle.mileage ? formatMileage(vehicle.mileage) : undefined },
  ].filter((spec): spec is { icon: typeof Calendar; label: string } => Boolean(spec.label));
  const photoCount = vehicle.photos ?? vehicle.images?.length ?? 0;
  const meta = [vehicle.location, vehicle.owners && formatOwners(vehicle.owners)]
    .filter(Boolean)
    .join(" · ");

  // The card is a container query root: it reflows on its own width, so one
  // component serves both the roomy featured rail and the narrow results grid.
  return (
    <article className="group @container relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-[box-shadow,transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-line-soft hover:shadow-card-hover focus-within:-translate-y-1 focus-within:shadow-card-hover">
      <div className="relative aspect-[4/3]">
        <VehicleMedia vehicle={vehicle} priority={priority} />

        {vehicle.badge ? (
          <div className="absolute left-4 top-4">
            <Badge tone={vehicle.badge === "Verified" ? "verified" : "new"}>
              {vehicle.badge}
            </Badge>
          </div>
        ) : null}

        <div className="absolute right-4 top-4">
          {photoCount > 0 ? (
            <Badge tone="dark">
              <Camera className="h-3.5 w-3.5" strokeWidth={1.8} />
              {photoCount} Photos
            </Badge>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-col gap-1.5 @[19rem]:flex-row @[19rem]:items-start @[19rem]:justify-between @[19rem]:gap-4">
          <div className="min-w-0">
            <h3 className="text-[1.15rem] font-bold leading-tight tracking-[-0.01em] text-ink">
              {vehicle.brand} {vehicle.model}
            </h3>
            <p className="mt-1.5 text-sm leading-snug text-muted">{vehicle.variant}</p>
          </div>
          <p className="text-[1.15rem] font-bold tracking-[-0.01em] text-ink @[19rem]:shrink-0">
            {formatPrice(vehicle.price)}
          </p>
        </div>

        <ul className="mb-5 mt-5 flex flex-wrap gap-x-4 gap-y-2.5 text-[0.8125rem] text-muted">
          {specs.map((spec) => (
            <li key={spec.label} className="flex items-center gap-1.5">
              <spec.icon className="h-4 w-4 shrink-0 text-subtle" strokeWidth={1.6} />
              {spec.label}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-2 border-t border-line-soft pt-4 @[19rem]:flex-row @[19rem]:items-center @[19rem]:justify-between @[19rem]:gap-3">
          <p className="flex min-w-0 items-center gap-1.5 text-[0.8125rem] text-muted">
            <MapPin className="h-4 w-4 shrink-0 text-subtle" strokeWidth={1.6} />
            <span className="truncate">{meta}</span>
          </p>
          <Link
            href={`/inventory/${vehicle.slug}`}
            className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-semibold text-gold @[19rem]:self-auto transition-colors hover:text-gold-600 after:absolute after:inset-0 after:content-['']"
          >
            View Details
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={1.8}
            />
            <span className="sr-only">
              {" "}
              for the {vehicle.brand} {vehicle.model} {vehicle.variant}
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
