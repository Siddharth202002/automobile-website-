"use client";

import Image from "next/image";
import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CarLineArt } from "@/components/ui/Icons";
import { cn } from "@/lib/format";
import type { Vehicle, VehicleImage } from "@/lib/types";

/** Captions for the placeholder frames shown when a car has no photos yet. */
const placeholderFrames: VehicleImage[] = [
  { src: "", caption: "Front 3/4 View" },
  { src: "", caption: "Side Profile" },
  { src: "", caption: "Rear 3/4 View" },
  { src: "", caption: "Interior & Dashboard" },
];

/** One row of thumbnails on wider screens, sized to the number of photos. */
const thumbColumns: Record<number, string> = {
  1: "grid-cols-4",
  2: "grid-cols-4",
  3: "grid-cols-4",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-3 sm:grid-cols-6",
  7: "grid-cols-4 sm:grid-cols-7",
  8: "grid-cols-4 sm:grid-cols-8",
  9: "grid-cols-5 sm:grid-cols-9",
};

/**
 * Photo viewer for a listing. Falls back to captioned line-art frames while a
 * car is still waiting on its shoot, so the layout is identical either way.
 */
export function VehicleGallery({ vehicle }: { vehicle: Vehicle }) {
  const [active, setActive] = useState(0);
  const frames = vehicle.images?.length ? vehicle.images : placeholderFrames;
  const current = frames[active] ?? frames[0];
  const name = `${vehicle.brand} ${vehicle.model} ${vehicle.variant}`;

  return (
    <div className="min-w-0">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-sand-100">
        {current.src ? (
          <Image
            src={current.src}
            alt={`${name} — ${current.caption}`}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            priority
            className="object-cover"
          />
        ) : (
          <CarLineArt className="w-[68%] max-w-[520px] text-ink/22" />
        )}

        <div className="absolute left-4 top-4">
          <Badge tone="dark">{current.caption}</Badge>
        </div>
        <div className="absolute right-4 top-4">
          <Badge tone="verified">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={1.9} />
            Verified Listing
          </Badge>
        </div>
      </div>

      <ul
        className={cn(
          "mt-4 grid gap-2.5 sm:gap-3",
          thumbColumns[frames.length] ?? "grid-cols-5 sm:grid-cols-9",
        )}
      >
        {frames.map((frame, index) => (
          <li key={frame.src || frame.caption}>
            <button
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${frame.caption}`}
              aria-pressed={index === active}
              className={cn(
                "relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border-2 transition-colors",
                index === active
                  ? "border-gold bg-sand-100"
                  : "border-transparent bg-sand-300 hover:bg-sand-200",
              )}
            >
              {frame.src ? (
                <Image src={frame.src} alt="" fill sizes="96px" className="object-cover" />
              ) : (
                <CarLineArt className="w-[72%] text-ink/25" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
