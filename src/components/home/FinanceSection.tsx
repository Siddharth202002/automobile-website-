import { Check, FileCheck2, Landmark, Phone } from "lucide-react";
import { financeOffer, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { LoanCalculator } from "@/components/finance/LoanCalculator";

/**
 * Finance and RTO paperwork, given its own dark band so it reads as a headline
 * service rather than a footnote — most buyers purchase on a loan.
 */
export function FinanceSection() {
  const loanEnquiryHref = `${site.whatsappHref}?text=${encodeURIComponent(
    financeOffer.whatsappMessage,
  )}`;
  const services = [
    { icon: Landmark, ...financeOffer.loan },
    { icon: FileCheck2, ...financeOffer.paperwork },
  ];

  return (
    <section id="finance" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-[460px] w-[460px] rounded-full bg-gold/8 blur-[120px]"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="eyebrow">{financeOffer.eyebrow}</p>
          <h2 className="mt-4 text-balance font-display text-[2rem] leading-[1.1] text-parchment sm:text-[2.6rem] lg:text-[2.9rem]">
            {financeOffer.title}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-[1.0625rem] leading-[1.75] text-parchment/60">
            {financeOffer.description}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <service.icon className="h-[1.2rem] w-[1.2rem]" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-[1.0625rem] font-bold text-parchment">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[0.9375rem] leading-snug text-parchment/70"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.4} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ButtonLink href={loanEnquiryHref} size="lg">
              <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
              Check Loan Eligibility
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outlineLight" size="lg">
              <Phone className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.8} />
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-float sm:p-8">
          <h3 className="font-display text-[1.6rem] leading-tight text-ink">
            What would my EMI be?
          </h3>
          <p className="mt-2 text-[0.9375rem] text-muted">
            Move the sliders to get a rough monthly figure.
          </p>
          <LoanCalculator className="mt-6" />
        </div>
      </Container>
    </section>
  );
}
