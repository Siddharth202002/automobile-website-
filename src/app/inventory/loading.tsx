import { Container } from "@/components/ui/Container";
import { VehicleGridSkeleton } from "@/components/vehicles/VehicleGrid";

export default function InventoryLoading() {
  return (
    <>
      <div className="border-b border-line bg-cream">
        <Container className="pb-12 pt-8 lg:pb-16 lg:pt-10">
          <div className="h-4 w-40 animate-pulse rounded bg-sand-200" />
          <div className="mt-8 h-3 w-28 animate-pulse rounded bg-sand-200" />
          <div className="mt-5 h-12 w-[22rem] max-w-full animate-pulse rounded bg-sand-200" />
        </Container>
      </div>

      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[264px_1fr] lg:gap-12 xl:grid-cols-[288px_1fr]">
          <div className="hidden space-y-8 lg:block" aria-hidden="true">
            {[0, 1, 2].map((group) => (
              <div key={group} className="space-y-3">
                <div className="h-5 w-24 animate-pulse rounded bg-sand-200" />
                {[0, 1, 2, 3].map((row) => (
                  <div key={row} className="h-4 w-full animate-pulse rounded bg-sand-100" />
                ))}
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <div className="h-5 w-32 animate-pulse rounded bg-sand-200" />
              <div className="h-11 w-48 animate-pulse rounded-xl bg-sand-200" />
            </div>
            <div className="mt-8">
              <VehicleGridSkeleton count={6} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
