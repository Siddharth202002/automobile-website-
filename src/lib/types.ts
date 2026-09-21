export type FuelType = "Petrol" | "Diesel" | "Hybrid" | "Electric" | "CNG";
export type Transmission = "Automatic" | "Manual";
export type BodyType = "Sedan" | "SUV" | "Hatchback" | "MPV" | "Coupe";
export type VehicleBadge = "Verified" | "New Arrival";

export interface VehicleImage {
  /** Path under /public, e.g. "/vehicles/tata-punch-amt/01-side-profile.jpeg". */
  src: string;
  /** Shown on the gallery pill and used as the alt text. */
  caption: string;
}

/**
 * A single listing. Everything the UI renders comes from this shape, so the
 * mock inventory in `src/data/vehicles.ts` can be swapped for a CMS or API
 * response without touching a component.
 */
export interface Vehicle {
  id: string;
  /** URL segment used by /inventory/[slug]. Must be unique. */
  slug: string;
  brand: string;
  model: string;
  /** Trim line, e.g. "320d Luxury Line". */
  variant: string;
  /**
   * The fields below are optional so a car can be listed from its photos
   * while the paperwork is still being checked. Anything left undefined is
   * omitted from the spec rows; price falls back to "Price on request".
   */
  /** Manufacturing year. */
  year?: number;
  registrationYear?: number;
  /** Indicative ex-showroom price in rupees. Formatted to lakh for display. */
  price?: number;
  /** Kilometres driven. */
  mileage?: number;
  fuelType?: FuelType;
  transmission?: Transmission;
  bodyType: BodyType;
  /** City the car is currently parked in. */
  location: string;
  /** Number of previous owners. */
  owners?: number;
  colour?: string;
  /**
   * Listing photography, in display order. The first image is the card
   * thumbnail. Leave it out and the card renders the house line art instead
   * of a broken file.
   */
  images?: VehicleImage[];
  /**
   * Overrides the photo count on the card pill. Defaults to `images.length`,
   * so set it only when more photos exist than are published here.
   */
  photos?: number;
  badge?: VehicleBadge;
  highlights: string[];
  description: string;
  /** Surfaced in the "Featured" rail on the home page. */
  featured?: boolean;
  /** ISO date the car was listed. Drives the "Newest" sort. */
  listedAt: string;
}

export type SortKey = "newest" | "price-asc" | "price-desc" | "mileage-asc";

export interface VehicleFilters {
  brands: string[];
  bodyTypes: string[];
  fuelTypes: string[];
  transmissions: string[];
  yearBands: string[];
  minPrice: string;
  maxPrice: string;
  query: string;
}
