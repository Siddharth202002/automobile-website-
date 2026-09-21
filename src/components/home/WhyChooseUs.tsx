import {
  FileCheck2,
  RefreshCcw,
  ShieldCheck,
  Tag,
  Truck,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { whyChooseUs } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  file: FileCheck2,
  tag: Tag,
  refresh: RefreshCcw,
  wallet: Wallet,
  truck: Truck,
};

export function WhyChooseUs() {
  return (
    <section className="border-y border-line bg-sand py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="The boring parts, done properly"
          description="Buying used should not feel like a gamble. These are the six things we fixed first."
          align="center"
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whyChooseUs.map((item) => {
            const Icon = icons[item.icon] ?? ShieldCheck;
            return (
              <li
                key={item.title}
                className="group rounded-2xl border border-line bg-white p-7 transition-[box-shadow,transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-gold-300 hover:shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600 transition-colors duration-300 group-hover:bg-gold group-hover:text-white">
                  <Icon className="h-[1.35rem] w-[1.35rem]" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-[1.0625rem] font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.75] text-muted">
                  {item.body}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
