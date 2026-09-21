import { vehicles } from "@/data/vehicles";
import type { SortKey, Vehicle, VehicleFilters } from "@/lib/types";
import { toLakh } from "@/lib/format";

export const emptyFilters: VehicleFilters = {
  brands: [],
  bodyTypes: [],
  fuelTypes: [],
  transmissions: [],
  yearBands: [],
  minPrice: "",
  maxPrice: "",
  query: "",
};

export const yearBands = [
  { id: "2023+", label: "2023 & Newer", min: 2023, max: 9999 },
  { id: "2021-2022", label: "2021 – 2022", min: 2021, max: 2022 },
  { id: "2019-2020", label: "2019 – 2020", min: 2019, max: 2020 },
  { id: "pre-2019", label: "2018 & Older", min: 0, max: 2018 },
] as const;

export const budgetBands = [
  { id: "any", label: "Any Budget", min: "", max: "" },
  { id: "under-10", label: "Under ₹10 Lakh", min: "", max: "10" },
  { id: "10-20", label: "₹10 – ₹20 Lakh", min: "10", max: "20" },
  { id: "20-35", label: "₹20 – ₹35 Lakh", min: "20", max: "35" },
  { id: "35-plus", label: "Above ₹35 Lakh", min: "35", max: "" },
] as const;

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "mileage-asc", label: "Kilometres: Low to High" },
];

/** Unique, alphabetically stable facet values taken straight from inventory. */
function facet(pick: (vehicle: Vehicle) => string | undefined): string[] {
  const values = vehicles.map(pick).filter((value): value is string => Boolean(value));
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

export const brandOptions = facet((vehicle) => vehicle.brand);
export const bodyTypeOptions = facet((vehicle) => vehicle.bodyType);
export const fuelTypeOptions = facet((vehicle) => vehicle.fuelType);
export const transmissionOptions = facet((vehicle) => vehicle.transmission);

export function countActiveFilters(filters: VehicleFilters): number {
  return (
    filters.brands.length +
    filters.bodyTypes.length +
    filters.fuelTypes.length +
    filters.transmissions.length +
    filters.yearBands.length +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0) +
    (filters.query ? 1 : 0)
  );
}

function matchesYearBands(vehicle: Vehicle, bands: string[]): boolean {
  if (bands.length === 0) return true;
  return bands.some((id) => {
    const band = yearBands.find((candidate) => candidate.id === id);
    if (!band) return true;
    // A car whose year is not yet recorded cannot satisfy a year filter.
    return vehicle.year !== undefined && vehicle.year >= band.min && vehicle.year <= band.max;
  });
}

export function filterVehicles(
  source: Vehicle[],
  filters: VehicleFilters,
): Vehicle[] {
  const min = filters.minPrice ? Number(filters.minPrice) : null;
  const max = filters.maxPrice ? Number(filters.maxPrice) : null;
  const query = filters.query.trim().toLowerCase();

  return source.filter((vehicle) => {
    // Unpriced cars ("Price on request") drop out once a price bound is set.
    const lakh = vehicle.price === undefined ? undefined : toLakh(vehicle.price);

    if (filters.brands.length && !filters.brands.includes(vehicle.brand)) return false;
    if (filters.bodyTypes.length && !filters.bodyTypes.includes(vehicle.bodyType))
      return false;
    if (
      filters.fuelTypes.length &&
      !(vehicle.fuelType && filters.fuelTypes.includes(vehicle.fuelType))
    )
      return false;
    if (
      filters.transmissions.length &&
      !(vehicle.transmission && filters.transmissions.includes(vehicle.transmission))
    )
      return false;
    if (!matchesYearBands(vehicle, filters.yearBands)) return false;
    if (min !== null && Number.isFinite(min) && (lakh === undefined || lakh < min))
      return false;
    if (max !== null && Number.isFinite(max) && (lakh === undefined || lakh > max))
      return false;

    if (query) {
      const haystack =
        `${vehicle.brand} ${vehicle.model} ${vehicle.variant} ${vehicle.bodyType} ${vehicle.location}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }

    return true;
  });
}

/** Compares two optional numbers, always sorting missing values last. */
function byOptional(a: number | undefined, b: number | undefined, direction: 1 | -1) {
  if (a === undefined && b === undefined) return 0;
  if (a === undefined) return 1;
  if (b === undefined) return -1;
  return (a - b) * direction;
}

export function sortVehicles(source: Vehicle[], sort: SortKey): Vehicle[] {
  const sorted = [...source];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => byOptional(a.price, b.price, 1));
    case "price-desc":
      return sorted.sort((a, b) => byOptional(a.price, b.price, -1));
    case "mileage-asc":
      return sorted.sort((a, b) => byOptional(a.mileage, b.mileage, 1));
    case "newest":
    default:
      return sorted.sort(
        (a, b) => new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime(),
      );
  }
}

/** Seeds the inventory filters from /inventory?brand=BMW&body=SUV&min=10&max=35 */
export function filtersFromSearchParams(
  params: Record<string, string | string[] | undefined>,
): VehicleFilters {
  const list = (key: string): string[] => {
    const value = params[key];
    if (!value) return [];
    return (Array.isArray(value) ? value : value.split(",")).filter(Boolean);
  };
  const single = (key: string): string => {
    const value = params[key];
    if (!value) return "";
    return Array.isArray(value) ? (value[0] ?? "") : value;
  };

  return {
    brands: list("brand"),
    bodyTypes: list("body"),
    fuelTypes: list("fuel"),
    transmissions: list("gearbox"),
    yearBands: list("year"),
    minPrice: single("min"),
    maxPrice: single("max"),
    query: single("q"),
  };
}
