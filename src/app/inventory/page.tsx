import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { InventoryBrowser } from "@/components/vehicles/InventoryBrowser";
import { CTASection } from "@/components/home/CTASection";
import { filtersFromSearchParams } from "@/lib/filters";
import type { SortKey } from "@/lib/types";

export const metadata: Metadata = {
  title: "Browse Our Inventory",
  description:
    "Every car in the Dewan Motors inventory is inspected, verified and priced transparently. Filter by brand, budget, year, body type and fuel.",
};

const sortKeys: SortKey[] = ["newest", "price-asc", "price-desc", "mileage-asc"];

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const initialFilters = filtersFromSearchParams(params);
  const requestedSort = Array.isArray(params.sort) ? params.sort[0] : params.sort;
  const initialSort = sortKeys.includes(requestedSort as SortKey)
    ? (requestedSort as SortKey)
    : "newest";

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Inventory" }]}
        eyebrow="Full inventory"
        title="Browse Our Inventory"
        divider
      />

      <Container className="py-12 lg:py-16">
        <InventoryBrowser initialFilters={initialFilters} initialSort={initialSort} />
      </Container>

      <CTASection
        eyebrow="Can't find it?"
        title="Tell us what you're looking for."
        description="Share the brand, budget and city. We will call you the moment a matching car clears inspection."
        primaryLabel="Request a Car"
        primaryHref="/contact"
      />
    </>
  );
}
