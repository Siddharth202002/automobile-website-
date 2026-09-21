"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Loader2, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Field";
import {
  bodyTypeOptions,
  brandOptions,
  budgetBands,
  yearBands,
} from "@/lib/filters";

const fieldLabel =
  "text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted";

/**
 * The card that straddles the hero and the page canvas. It writes its state
 * into the inventory URL rather than holding it, so results stay shareable.
 */
export function QuickSearch() {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const params = new URLSearchParams();

    const brand = String(data.get("brand") ?? "");
    const body = String(data.get("body") ?? "");
    const budget = String(data.get("budget") ?? "");
    const year = String(data.get("year") ?? "");

    if (brand) params.set("brand", brand);
    if (body) params.set("body", body);
    if (year) params.set("year", year);

    const band = budgetBands.find((option) => option.id === budget);
    if (band?.min) params.set("min", band.min);
    if (band?.max) params.set("max", band.max);

    setPending(true);
    const query = params.toString();
    router.push(query ? `/inventory?${query}` : "/inventory");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-5 shadow-float sm:p-6 lg:rounded-[1.25rem] lg:p-7"
    >
      <p className="mb-5 text-base font-bold text-ink lg:hidden">Quick Search</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-end lg:gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="qs-brand" className={fieldLabel}>
            Brand
          </label>
          <Select id="qs-brand" name="brand" defaultValue="">
            <option value="">Any Brand</option>
            {brandOptions.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="qs-body" className={fieldLabel}>
            Body Type
          </label>
          <Select id="qs-body" name="body" defaultValue="">
            <option value="">Any Type</option>
            {bodyTypeOptions.map((body) => (
              <option key={body} value={body}>
                {body}
              </option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="qs-budget" className={fieldLabel}>
            Budget
          </label>
          <Select id="qs-budget" name="budget" defaultValue="any">
            {budgetBands.map((band) => (
              <option key={band.id} value={band.id}>
                {band.label}
              </option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="qs-year" className={fieldLabel}>
            Year
          </label>
          <Select id="qs-year" name="year" defaultValue="">
            <option value="">Any Year</option>
            {yearBands.map((band) => (
              <option key={band.id} value={band.id}>
                {band.label}
              </option>
            ))}
          </Select>
        </div>

        <Button
          type="submit"
          size="md"
          disabled={pending}
          className="w-full sm:col-span-2 lg:col-span-1 lg:w-auto lg:px-8"
        >
          {pending ? (
            <Loader2 className="h-[1.1rem] w-[1.1rem] animate-spin" strokeWidth={2} />
          ) : (
            <Search className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} />
          )}
          <span className="lg:hidden">Search Cars</span>
          <span className="hidden lg:inline">Search</span>
        </Button>
      </div>
    </form>
  );
}
