import type { Metadata } from "next";
import { Check } from "lucide-react";
import { sellingPromises, sellingSteps, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProcessSteps } from "@/components/shared/ProcessSteps";
import { SellCarForm } from "@/components/forms/SellCarForm";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Sell Your Car",
  description:
    "Tell us about your car and get a fair, no-obligation offer after a quick inspection. Free doorstep valuation and RC transfer handled for you.",
};

export default function SellPage() {
  return (
    <>
      <PageHeader
        tone="dark"
        align="center"
        eyebrow="Selling your car?"
        title="Get an Offer for Your Car"
        description="Tell us a little about your car and we'll get back with a fair, no-obligation offer — usually after a quick inspection."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <ProcessSteps steps={sellingSteps} />
        </Container>
      </section>

      <section className="pb-20 lg:pb-28">
        <Container className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <SellCarForm />

          <aside className="space-y-6">
            <div className="rounded-2xl bg-gold-100 p-7 lg:p-8">
              <h2 className="font-sans text-[1.15rem] font-bold text-gold-600">
                No Obligation. No Hidden Charges.
              </h2>
              <ul className="mt-6 space-y-4">
                {sellingPromises.map((promise) => (
                  <li
                    key={promise}
                    className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink/80"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold-600" strokeWidth={2.4} />
                    {promise}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7 lg:p-8">
              <h2 className="font-sans text-[1.15rem] font-bold text-ink">
                Prefer to talk it through?
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-[1.75] text-muted">
                Send us the registration number on WhatsApp and we will come back with a
                ballpark range before you fill anything in.
              </p>
              <ButtonLink
                href={site.whatsappHref}
                variant="outline"
                size="md"
                className="mt-6 w-full text-forest-700 hover:bg-forest hover:text-white"
              >
                <WhatsAppIcon className="h-[1.1rem] w-[1.1rem]" />
                Message Us on WhatsApp
              </ButtonLink>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7 lg:p-8">
              <h2 className="font-sans text-[1.15rem] font-bold text-ink">
                What to keep handy
              </h2>
              <ul className="mt-5 space-y-2.5 text-[0.9375rem] text-muted">
                <li>Registration certificate (RC)</li>
                <li>Valid insurance policy</li>
                <li>Service history, if you have it</li>
                <li>Both sets of keys</li>
                <li>Loan closure or NOC, if applicable</li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
