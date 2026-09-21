import { Container } from "@/components/ui/Container";

export interface LegalSection {
  heading: string;
  body: string[];
}

/** Shared long-form layout for the policy pages linked from the footer. */
export function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <Container className="max-w-3xl py-14 lg:py-20">
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-sans text-[1.15rem] font-bold text-ink">
              {section.heading}
            </h2>
            {section.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[0.9375rem] leading-[1.85] text-muted"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </Container>
  );
}
