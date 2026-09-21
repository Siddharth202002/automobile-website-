import { Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="From our customers"
          title="What buyers and sellers say"
          align="center"
        />

        <ul className="mt-14 grid gap-5 md:grid-cols-3 lg:gap-6">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-2xl border border-line bg-white p-7 shadow-card"
            >
              <div className="flex gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-4 w-4 fill-gold text-gold"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-[1.8] text-muted">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="mt-6 border-t border-line-soft pt-5">
                <p className="text-[0.9375rem] font-bold text-ink">{item.name}</p>
                <p className="mt-1 text-[0.8125rem] text-subtle">{item.context}</p>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
