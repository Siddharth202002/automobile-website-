import { buyingSteps } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/shared/ProcessSteps";

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Four steps from shortlist to keys"
          description="No showroom pressure, no moving goalposts. You see the same numbers we do at every stage."
          align="center"
        />

        <ProcessSteps steps={buyingSteps} className="mt-16" />
      </Container>
    </section>
  );
}
