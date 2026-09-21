import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}

/** Closing conversion band. Sits inside the cream canvas as a dark panel. */
export function CTASection({
  eyebrow = "Financing & enquiries",
  title = "Found the one? Let's talk numbers.",
  description = "Get an EMI estimate, book a test drive, or ask us anything about a listing. Our team usually replies within a few hours.",
  primaryLabel = "Browse Inventory",
  primaryHref = "/inventory",
}: CTASectionProps) {
  return (
    <section className="pb-20 pt-4 lg:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-16 text-center sm:px-12 lg:rounded-[2rem] lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-[380px] w-[380px] rounded-full bg-gold/10 blur-[110px]"
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 text-balance font-display text-[2rem] leading-[1.1] text-parchment sm:text-[2.6rem]">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[1.0625rem] leading-[1.75] text-parchment/60">
              {description}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <ButtonLink href={primaryHref} size="lg" className="w-full sm:w-auto">
                {primaryLabel}
                <ArrowRight className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} />
              </ButtonLink>
              <ButtonLink
                href={site.whatsappHref}
                variant="outlineLight"
                size="lg"
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
                Chat on WhatsApp
              </ButtonLink>
            </div>

            <a
              href={site.phoneHref}
              className="mt-8 inline-flex items-center gap-2 text-sm text-parchment/55 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4" strokeWidth={1.7} />
              Or call {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
