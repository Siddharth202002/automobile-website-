import { ArrowRight, Check } from "lucide-react";
import { heroPromises } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CarLineArt } from "@/components/ui/Icons";
import { QuickSearch } from "@/components/home/QuickSearch";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-14 sm:pt-16 lg:pb-44 lg:pt-20">
        {/* A single warm flare keeps the near-black panel from reading flat. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-gold/8 blur-[120px]"
        />

        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
          <div className="animate-rise">
            <p className="eyebrow">Pre-owned cars, properly verified</p>

            <h1 className="mt-6 font-display text-[2.35rem] leading-[1.06] text-parchment sm:text-[3rem] lg:text-[3.375rem]">
              Quality pre-owned cars, inspected before they&rsquo;re ever listed.
            </h1>

            <p className="mt-6 max-w-[32rem] text-pretty text-[1.0625rem] leading-[1.75] text-parchment/60">
              Every Dewan Motors car passes a multi-point inspection and comes with verified
              ownership history and transparent, no-haggle pricing — so you decide with
              confidence, not guesswork.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href="/inventory" size="lg" className="sm:w-auto">
                Browse Cars
                <ArrowRight className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} />
              </ButtonLink>
              <ButtonLink href="/sell" variant="outlineLight" size="lg">
                Sell Your Car
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {heroPromises.map((promise) => (
                <li
                  key={promise}
                  className="flex items-center gap-2.5 text-[0.9375rem] text-parchment/75"
                >
                  <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.4} />
                  {promise}
                </li>
              ))}
            </ul>
          </div>

          {/* Swap this panel for hero photography by dropping an <Image> in. */}
          <div className="relative hidden aspect-[9/8] items-center justify-center overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-ink-600 to-ink lg:flex">
            <CarLineArt className="w-[72%] text-white/30" />
          </div>
        </Container>
      </section>

      <Container className="relative z-10 mt-8 lg:-mt-24">
        <QuickSearch />
      </Container>
    </>
  );
}
