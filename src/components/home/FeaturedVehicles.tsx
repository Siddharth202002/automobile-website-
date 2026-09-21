import { ArrowRight } from "lucide-react";
import { getFeaturedVehicles } from "@/data/vehicles";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";

export function FeaturedVehicles() {
  const featured = getFeaturedVehicles(4);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="This week's picks"
          title="Freshly inspected, ready to drive away"
          description="A rotating shortlist from the showroom floor. Every car below has cleared our 210-point inspection and carries a verified ownership history."
          action={
            <ButtonLink href="/inventory" variant="outline" size="md">
              View All Inventory
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </ButtonLink>
          }
        />

        <VehicleGrid
          vehicles={featured}
          columns={featured.length >= 4 ? 4 : 3}
          className={featured.length >= 4 ? "mt-12 lg:mt-14" : "mt-12 lg:mt-14 lg:grid-cols-3"}
        />
      </Container>
    </section>
  );
}
