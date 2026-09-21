"use client";

import { Checkbox, Input } from "@/components/ui/Field";
import {
  bodyTypeOptions,
  brandOptions,
  fuelTypeOptions,
  transmissionOptions,
  yearBands,
} from "@/lib/filters";
import type { VehicleFilters } from "@/lib/types";

type ListKey = "brands" | "bodyTypes" | "fuelTypes" | "transmissions" | "yearBands";

interface FilterPanelProps {
  filters: VehicleFilters;
  onChange: (next: VehicleFilters) => void;
  /** Distinguishes the desktop and drawer instances' input ids. */
  idPrefix: string;
}

export function FilterPanel({ filters, onChange, idPrefix }: FilterPanelProps) {
  function toggle(key: ListKey, value: string) {
    const current = filters[key];
    const next = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  }

  return (
    <div className="divide-y divide-line">
      <FilterGroup title="Brand">
        {brandOptions.map((brand) => (
          <Checkbox
            key={brand}
            id={`${idPrefix}-brand-${brand}`}
            label={brand}
            checked={filters.brands.includes(brand)}
            onChange={() => toggle("brands", brand)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price Range (₹ Lakh)">
        <div className="flex items-center gap-3 pt-1">
          <Input
            type="number"
            inputMode="numeric"
            min={0}
            aria-label="Minimum price in lakh"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(event) =>
              onChange({ ...filters, minPrice: event.target.value })
            }
          />
          <span aria-hidden="true" className="text-subtle">
            –
          </span>
          <Input
            type="number"
            inputMode="numeric"
            min={0}
            aria-label="Maximum price in lakh"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(event) =>
              onChange({ ...filters, maxPrice: event.target.value })
            }
          />
        </div>
      </FilterGroup>

      <FilterGroup title="Year">
        {yearBands.map((band) => (
          <Checkbox
            key={band.id}
            id={`${idPrefix}-year-${band.id}`}
            label={band.label}
            checked={filters.yearBands.includes(band.id)}
            onChange={() => toggle("yearBands", band.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Body Type">
        {bodyTypeOptions.map((body) => (
          <Checkbox
            key={body}
            id={`${idPrefix}-body-${body}`}
            label={body}
            checked={filters.bodyTypes.includes(body)}
            onChange={() => toggle("bodyTypes", body)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Fuel Type">
        {fuelTypeOptions.map((fuel) => (
          <Checkbox
            key={fuel}
            id={`${idPrefix}-fuel-${fuel}`}
            label={fuel}
            checked={filters.fuelTypes.includes(fuel)}
            onChange={() => toggle("fuelTypes", fuel)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Transmission">
        {transmissionOptions.map((gearbox) => (
          <Checkbox
            key={gearbox}
            id={`${idPrefix}-gearbox-${gearbox}`}
            label={gearbox}
            checked={filters.transmissions.includes(gearbox)}
            onChange={() => toggle("transmissions", gearbox)}
          />
        ))}
      </FilterGroup>
    </div>
  );
}

/**
 * `fieldset` + `legend` is the right grouping semantic for these checkboxes,
 * but a legend ignores the fieldset's own padding — so the spacing lives on
 * the legend and the option list instead.
 */
function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="w-full">
      <legend className="pt-6 text-[0.9375rem] font-bold text-ink">{title}</legend>
      <div className="space-y-0.5 pb-6 pt-3">{children}</div>
    </fieldset>
  );
}
