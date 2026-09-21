import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Calendar,
  Check,
  Cog,
  Fuel,
  Gauge,
  Landmark,
  MapPin,
  MessageSquare,
  Palette,
  Phone,
} from "lucide-react";
import { getRelatedVehicles, getVehicleBySlug, vehicles } from "@/data/vehicles";
import { financeOffer, listingTrustPoints, site } from "@/data/site";
import { formatMileage, formatPrice } from "@/lib/format";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { VehicleGallery } from "@/components/vehicles/VehicleGallery";
import { EmiEstimator } from "@/components/vehicles/EmiEstimator";
import { SpecTable } from "@/components/vehicles/SpecTable";
import { VehicleGrid } from "@/components/vehicles/VehicleGrid";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return { title: "Listing not found" };

  const name = `${vehicle.brand} ${vehicle.model} ${vehicle.variant}`;
  const facts = [
    vehicle.year && `${vehicle.year}`,
    vehicle.mileage && formatMileage(vehicle.mileage),
    vehicle.fuelType,
    vehicle.transmission,
    formatPrice(vehicle.price),
  ].filter(Boolean);
  return {
    title: name,
    description: `${name} · ${facts.join(" · ")}. Inspected and verified by ${site.name}, ${vehicle.location}.`,
  };
}

export default async function VehicleDetailPage({ params }: Params) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const related = getRelatedVehicles(vehicle, 3);
  // Only facts we actually have; unknown values are omitted, not guessed.
  const keySpecs = [
    { icon: Calendar, label: vehicle.year?.toString() },
    { icon: Gauge, label: vehicle.mileage ? formatMileage(vehicle.mileage) : undefined },
    { icon: Fuel, label: vehicle.fuelType },
    { icon: Cog, label: vehicle.transmission },
    { icon: Palette, label: vehicle.colour },
    { icon: MapPin, label: vehicle.location },
  ]
    .filter((spec): spec is { icon: typeof Calendar; label: string } => Boolean(spec.label))
    .slice(0, 4);
  const enquiryHref = `/contact?vehicle=${vehicle.slug}`;
  const loanHighlights = [
    financeOffer.loan.points[0],
    financeOffer.loan.points[1],
    financeOffer.paperwork.points[0],
    financeOffer.paperwork.points[3],
  ];
  const loanHref = `${site.whatsappHref}?text=${encodeURIComponent(
    `Hi ${site.name}, I'd like to buy the ${vehicle.brand} ${vehicle.model} ${vehicle.variant} (${vehicle.id.toUpperCase()}) on loan. Can you check my eligibility?`,
  )}`;
  const whatsappHref = `${site.whatsappHref}?text=${encodeURIComponent(
    `Hi ${site.name}, I'm interested in the ${vehicle.brand} ${vehicle.model} ${vehicle.variant} (${vehicle.id.toUpperCase()}).`,
  )}`;

  return (
    <>
      <Container className="pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Inventory", href: "/inventory" },
            { label: `${vehicle.brand} ${vehicle.model}` },
          ]}
        />
      </Container>

      <Container className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-12 lg:py-12">
        <VehicleGallery vehicle={vehicle} />

        <div>
          <p className="eyebrow">
            {vehicle.brand} · {vehicle.bodyType}
          </p>
          <h1 className="mt-4 text-balance font-display text-[1.8rem] leading-[1.12] text-ink sm:text-[2.15rem]">
            {vehicle.brand} {vehicle.model} {vehicle.variant}
          </h1>
          <p className="mt-4 text-[2rem] font-bold tracking-[-0.02em] text-ink sm:text-[2.25rem]">
            {formatPrice(vehicle.price)}
          </p>
          <p className="mt-2 text-[0.9375rem] text-muted">
            {vehicle.price !== undefined
              ? "On-road price varies by city · RTO & insurance extra"
              : "Call or WhatsApp us for today's best price"}
          </p>

          <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 rounded-2xl border border-line bg-white px-6 py-6">
            {keySpecs.map((spec) => (
              <li key={spec.label} className="flex items-center gap-2.5">
                <spec.icon
                  className="h-[1.1rem] w-[1.1rem] shrink-0 text-subtle"
                  strokeWidth={1.6}
                />
                <span className="text-[0.9375rem] text-ink">{spec.label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 space-y-3">
            <ButtonLink href={enquiryHref} size="lg" className="w-full">
              <MessageSquare className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} />
              Enquire Now
            </ButtonLink>

            <div className="grid gap-3 sm:grid-cols-2">
              <ButtonLink href={site.phoneHref} variant="outline" size="lg">
                <Phone className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} />
                Call
              </ButtonLink>
              <ButtonLink
                href={whatsappHref}
                variant="outline"
                size="lg"
                className="text-forest-700 hover:bg-forest hover:text-white"
              >
                <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
                WhatsApp
              </ButtonLink>
            </div>

            {vehicle.price !== undefined ? (
              <EmiEstimator price={vehicle.price} />
            ) : (
              <ButtonLink href={loanHref} variant="dashed" size="lg" className="w-full">
                <Landmark className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} />
                Buying on Loan? Check Eligibility
              </ButtonLink>
            )}
          </div>

          <p className="mt-5 text-center text-sm text-muted">
            Our team usually responds within a few hours
          </p>
        </div>
      </Container>

      <Container className="grid gap-12 pb-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-12 lg:pb-20">
        <section aria-labelledby="specifications">
          <h2
            id="specifications"
            className="font-display text-[1.75rem] text-ink sm:text-[2rem]"
          >
            Specifications
          </h2>
          <div className="mt-6">
            <SpecTable vehicle={vehicle} />
          </div>

          <h2 className="mt-12 font-display text-[1.75rem] text-ink sm:text-[2rem]">
            About this car
          </h2>
          <p className="mt-5 text-pretty text-[1.0625rem] leading-[1.8] text-muted">
            {vehicle.description}
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {vehicle.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 rounded-xl border border-line bg-white px-4 py-3.5 text-[0.9375rem] text-muted"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.4} />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <aside className="lg:pt-[3.75rem]">
          <div className="rounded-2xl bg-ink p-7 text-parchment lg:p-8">
            <h2 className="font-sans text-[1.15rem] font-bold text-parchment">
              Loan &amp; RTO help on this car
            </h2>
            <ul className="mt-5 space-y-3">
              {loanHighlights.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[0.9375rem] leading-relaxed text-parchment/75"
                >
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={2.4} />
                  {point}
                </li>
              ))}
            </ul>
            <ButtonLink href={loanHref} size="md" className="mt-6 w-full">
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
              Check Loan Eligibility
            </ButtonLink>
          </div>

          <div className="mt-6 rounded-2xl bg-gold-100 p-7 lg:p-8">
            <h2 className="font-sans text-[1.15rem] font-bold text-gold-600">
              Why buyers trust this listing
            </h2>
            <ul className="mt-6 space-y-4">
              {listingTrustPoints.map((point) => (
                <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/80">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.4} />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-white p-7 lg:p-8">
            <h2 className="font-sans text-[1.15rem] font-bold text-ink">
              Book a test drive
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-[1.75] text-muted">
              At the showroom in {vehicle.location}, or at your address. Bring your own
              mechanic if you would like a second opinion — we encourage it.
            </p>
            <ButtonLink href={enquiryHref} variant="outline" size="md" className="mt-6 w-full">
              Request a Slot
            </ButtonLink>
          </div>
        </aside>
      </Container>

      {related.length > 0 ? (
        <section className="border-t border-line bg-sand py-16 lg:py-20">
          <Container>
            <h2 className="font-display text-[1.75rem] text-ink sm:text-[2.15rem]">
              Similar cars in stock
            </h2>
            <VehicleGrid vehicles={related} className="mt-10 lg:grid-cols-3" />
          </Container>
        </section>
      ) : null}
    </>
  );
}
