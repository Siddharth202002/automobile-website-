import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CarLineArt } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <CarLineArt className="w-full max-w-sm text-ink/15" />
      <p className="eyebrow mt-10">Error 404</p>
      <h1 className="mt-4 font-display text-[2.25rem] leading-tight text-ink sm:text-[3rem]">
        This one has already been sold.
      </h1>
      <p className="mt-5 max-w-md text-[1.0625rem] leading-[1.75] text-muted">
        The page you were looking for is not here. The rest of the inventory is, though.
      </p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <ButtonLink href="/inventory" size="lg">
          Browse Inventory
        </ButtonLink>
        <ButtonLink href="/" variant="outline" size="lg">
          Back to Home
        </ButtonLink>
      </div>
    </Container>
  );
}
