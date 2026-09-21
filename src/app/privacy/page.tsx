import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { LegalBody, type LegalSection } from "@/components/shared/LegalBody";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and protects your personal information.`,
};

const sections: LegalSection[] = [
  {
    heading: "What we collect",
    body: [
      "When you enquire about a car, request a valuation or contact us, we collect the details you give us: your name, phone number, email address, city and anything you tell us about your vehicle.",
      "We also collect basic, non-identifying analytics about how the site is used so we can improve it.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "To respond to your enquiry, arrange an inspection or test drive, prepare a valuation, and complete a sale including the registration transfer.",
      "We do not sell your personal information to third parties. Where a lending partner is involved in a finance application, we share only what that lender needs, and only with your consent.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiry records are retained for 24 months. Transaction and registration records are retained for as long as the applicable regulations require.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      `You can ask us to correct or delete your details at any time by writing to ${site.email}. We will action the request within 30 days.`,
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about this policy can be sent to ${site.email} or posted to ${site.address.full}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This is placeholder copy. Replace it with the policy reviewed by your legal advisor before the site goes live."
        divider
      />
      <LegalBody sections={sections} />
    </>
  );
}
