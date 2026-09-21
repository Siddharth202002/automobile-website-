import Image from "next/image";
import { CarLineArt } from "@/components/ui/Icons";
import { cn } from "@/lib/format";
import type { Vehicle } from "@/lib/types";

interface VehicleMediaProps {
  vehicle: Vehicle;
  /** Only the first card above the fold should be eager. */
  priority?: boolean;
  sizes?: string;
  className?: string;
  artClassName?: string;
}

/**
 * Renders the listing's first photograph, or the house line art when a car has
 * not been shot yet — so the grid never shows a broken image.
 */
export function VehicleMedia({
  vehicle,
  priority,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className,
  artClassName,
}: VehicleMediaProps) {
  const cover = vehicle.images?.[0];

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-linear-to-b from-sand-200 to-sand-300",
        className,
      )}
    >
      {cover ? (
        <Image
          src={cover.src}
          alt={`${vehicle.brand} ${vehicle.model} ${vehicle.variant} — ${cover.caption}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <CarLineArt
          className={cn(
            "w-[76%] max-w-[420px] text-ink/25 transition-transform duration-500 ease-out group-hover:scale-[1.03]",
            artClassName,
          )}
        />
      )}
    </div>
  );
}
