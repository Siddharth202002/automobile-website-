import { ArrowRight, Check } from "lucide-react";
import { stats } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const commitments = [
  "Inspection reports shared before you pay a rupee",
  "One transparent price, benchmarked to the market",
  "Paperwork completed at your address, at no extra cost",
];

export function AboutSection() {
  return (
    <section className="border-y border-line bg-sand py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About Dewan Motors"
            title={
              <>
                Pre-owned cars, sold the way we&rsquo;d want to buy one.
              </>
            }
            description="We started Dewan Motors around a simple frustration: buying a used car usually means guesswork — unclear history, inconsistent pricing, and little support once the deal is done. We set out to build a dealership that treats every listing the way we'd want a car sold to us."
          />

          <ul className="mt-8 space-y-3.5">
            {commitments.map((item) => (
              <li key={item} className="flex gap-3 text-[0.9375rem] text-muted">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={2.4} />
                {item}
              </li>
            ))}
          </ul>

          <ButtonLink href="/about" variant="outline" size="md" className="mt-9">
            Read Our Story
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </ButtonLink>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:gap-5">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="rounded-2xl border border-line bg-white px-6 py-9 text-center"
            >
              <p className="font-display text-[2rem] leading-none text-gold sm:text-[2.35rem]">
                {stat.value}
              </p>
              <p className="mt-3.5 text-[0.9375rem] text-muted">{stat.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
