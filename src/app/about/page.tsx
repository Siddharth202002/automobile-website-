import type { Metadata } from "next";
import { Check, Plus } from "lucide-react";
import { faqs, stats, whyChooseUs } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/home/CTASection";
import { CarLineArt } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We started Dewan Motors to fix what is broken about buying a used car: unclear history, inconsistent pricing and no support once the deal is done.",
};

const values = [
  {
    title: "Say the hard part out loud",
    body: "If a car has a repainted panel or a replaced part, it goes in the report and in the listing. You should not have to find it yourself.",
  },
  {
    title: "One price, honestly arrived at",
    body: "We publish what we paid attention to: condition, demand, service record. The number does not move because you hesitated.",
  },
  {
    title: "The deal is not done at delivery",
    body: "RC transfer, insurance, warranty questions — the same person who sold you the car answers the phone six months later.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        tone="sand"
        align="center-block"
        eyebrow="About Dewan Motors"
        title="Pre-owned cars, sold the way we'd want to buy one."
        description="We started Dewan Motors around a simple frustration: buying a used car usually means guesswork — unclear history, inconsistent pricing, and little support once the deal is done. We set out to build a dealership that treats every listing the way we'd want a car sold to us."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="rounded-2xl border border-line bg-white px-5 py-9 text-center"
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

      <section className="pb-16 lg:pb-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Built by people who were tired of the runaround"
              description="For more than ten years we have bought and sold used cars from our showroom on Ambala Road, Saharanpur — for buyers in towns and cities across North India. That is long enough to know exactly where the process breaks."
            />
            <p className="mt-5 text-pretty text-[1.0625rem] leading-[1.8] text-muted">
              So we built the dealership we wanted to walk into. An inspection bay before a
              showroom floor. A pricing desk that works from data rather than mood. And a
              rule that nothing gets photographed until it has passed.
            </p>
          </div>

          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-sand-200 to-sand-300">
            <CarLineArt className="w-[70%] text-ink/22" />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-sand py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="What we stand for"
            title="Three rules we do not bend"
            align="center"
          />
          <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
            {values.map((value) => (
              <li key={value.title} className="rounded-2xl border border-line bg-white p-7">
                <Check className="h-6 w-6 text-gold" strokeWidth={2.2} />
                <h3 className="mt-5 text-[1.0625rem] font-bold text-ink">{value.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.75] text-muted">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Every car goes through the same process"
            align="center"
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {whyChooseUs.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line bg-white p-7">
                <h3 className="text-[1.0625rem] font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.75] text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-20 lg:pb-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Questions" title="Frequently asked" align="center" />
          <div className="mt-12 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-6 py-5 sm:px-8">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.0625rem] font-bold text-ink marker:hidden">
                  {faq.question}
                  <Plus
                    className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.8] text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Come and see for yourself"
        title="Visit the showroom, or start online."
        description="Walk the floor, read a full inspection report, and take anything on the lot for a drive. No appointment needed."
      />
    </>
  );
}
