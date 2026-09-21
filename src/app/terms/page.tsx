import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { LegalBody, type LegalSection } from "@/components/shared/LegalBody";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms on which ${site.legalName} lists, sells and buys pre-owned vehicles.`,
};

const sections: LegalSection[] = [
  {
    heading: "Listings and availability",
    body: [
      "Vehicle details, photographs and prices on this site are provided in good faith and are accurate at the time of publication. Availability is not guaranteed until a booking amount is received and acknowledged in writing.",
    ],
  },
  {
    heading: "Pricing",
    body: [
      "Prices shown are indicative ex-showroom figures for the vehicle only. Registration transfer charges, insurance, road tax where applicable, and any accessories are quoted separately before you commit.",
    ],
  },
  {
    heading: "Inspection reports",
    body: [
      "Inspection reports describe the condition of a vehicle on the date of inspection. They are not a warranty against future mechanical failure. You are welcome to arrange your own independent inspection before purchase.",
    ],
  },
  {
    heading: "Finance and EMI estimates",
    body: [
      "EMI figures shown on this site are indicative calculations only. Actual terms depend on the lender, your credit profile and applicable charges, and are confirmed by the lender in writing.",
    ],
  },
  {
    heading: "Exchange window",
    body: [
      "Vehicles sold with a stated exchange window may be returned within that window subject to the mileage and condition limits set out in your sale agreement.",
    ],
  },
  {
    heading: "Contact",
    body: [`Queries about these terms can be sent to ${site.email}.`],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="This is placeholder copy. Replace it with the terms reviewed by your legal advisor before the site goes live."
        divider
      />
      <LegalBody sections={sections} />
    </>
  );
}
