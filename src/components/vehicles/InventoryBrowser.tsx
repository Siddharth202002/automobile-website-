"use client";

import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import {
  countActiveFilters,
  emptyFilters,
  filterVehicles,
  sortOptions,
  sortVehicles,
} from "@/lib/filters";
import type { SortKey, VehicleFilters } from "@/lib/types";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Select } from "@/components/ui/Field";
import { FilterPanel } from "@/components/vehicles/FilterPanel";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";

/** Mirrors the active filters back into the address bar so results are shareable. */
function toSearchString(filters: VehicleFilters, sort: SortKey) {
  const params = new URLSearchParams();
  const add = (key: string, values: string[]) => {
    if (values.length) params.set(key, values.join(","));
  };
  add("brand", filters.brands);
  add("body", filters.bodyTypes);
  add("fuel", filters.fuelTypes);
  add("gearbox", filters.transmissions);
  add("year", filters.yearBands);
  if (filters.minPrice) params.set("min", filters.minPrice);
  if (filters.maxPrice) params.set("max", filters.maxPrice);
  if (filters.query) params.set("q", filters.query);
  if (sort !== "newest") params.set("sort", sort);
  return params.toString();
}

interface InventoryBrowserProps {
  initialFilters: VehicleFilters;
  initialSort: SortKey;
}

export function InventoryBrowser({
  initialFilters,
  initialSort,
}: InventoryBrowserProps) {
  const [filters, setFilters] = useState<VehicleFilters>(initialFilters);
  const [sort, setSort] = useState<SortKey>(initialSort);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const results = useMemo(
    () => sortVehicles(filterVehicles(vehicles, filters), sort),
    [filters, sort],
  );
  const activeCount = countActiveFilters(filters);

  useEffect(() => {
    const search = toSearchString(filters, sort);
    const url = search ? `${window.location.pathname}?${search}` : window.location.pathname;
    window.history.replaceState(null, "", url);
  }, [filters, sort]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const clearAll = () => setFilters(emptyFilters);

  return (
    <div className="grid gap-10 lg:grid-cols-[264px_1fr] lg:gap-12 xl:grid-cols-[288px_1fr]">
      {/* Desktop rail */}
      <aside className="hidden lg:block">
        <div className="flex items-center justify-between border-b border-line pb-5">
          <h2 className="font-sans text-[1.15rem] font-bold text-ink">Filters</h2>
          <button
            type="button"
            onClick={clearAll}
            disabled={activeCount === 0}
            className="text-sm font-semibold text-gold transition-colors hover:text-gold-600 disabled:cursor-not-allowed disabled:text-subtle"
          >
            Clear All
          </button>
        </div>
        <FilterPanel filters={filters} onChange={setFilters} idPrefix="desktop" />
      </aside>

      <div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" strokeWidth={1.8} />
              Filters
              {activeCount > 0 ? (
                <span className="ml-0.5 rounded-full bg-gold px-1.5 py-0.5 text-[0.6875rem] leading-none text-ink">
                  {activeCount}
                </span>
              ) : null}
            </Button>
            <p className="text-[0.9375rem] text-muted">
              <span className="font-bold text-ink">{results.length}</span>{" "}
              {results.length === 1 ? "car" : "cars"} found
            </p>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort" className="shrink-0 text-[0.9375rem] text-muted">
              Sort by
            </label>
            <Select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortKey)}
              className="h-11 w-full min-w-[12rem] sm:w-auto"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <VehicleGrid
          vehicles={results}
          className="mt-8"
          emptyState={
            <div className="mt-8 rounded-2xl border border-dashed border-ink/15 bg-white px-6 py-20 text-center">
              <h3 className="font-display text-2xl text-ink">No cars match that yet</h3>
              <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-[1.75] text-muted">
                Widen the price range or clear a filter or two. New stock lands every
                week — tell us what you are after and we will call when it arrives.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button variant="outline" size="md" onClick={clearAll}>
                  Clear All Filters
                </Button>
                <ButtonLink href="/contact" size="md">
                  Request a Car
                </ButtonLink>
              </div>
            </div>
          }
        />
      </div>

      {/* Mobile drawer */}
      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filter inventory"
            className="absolute inset-y-0 right-0 flex w-[min(22rem,90vw)] flex-col bg-cream shadow-float"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <h2 className="font-sans text-lg font-bold text-ink">Filters</h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clearAll}
                  disabled={activeCount === 0}
                  className="text-sm font-semibold text-gold disabled:text-subtle"
                >
                  Clear All
                </button>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close filters"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/12 text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5">
              <FilterPanel filters={filters} onChange={setFilters} idPrefix="drawer" />
            </div>

            <div className="border-t border-line px-5 py-4">
              <Button size="md" className="w-full" onClick={() => setDrawerOpen(false)}>
                Show {results.length} {results.length === 1 ? "car" : "cars"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
