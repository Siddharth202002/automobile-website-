"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { FormSuccess } from "@/components/forms/FormSuccess";
import { brandOptions, fuelTypeOptions, transmissionOptions } from "@/lib/filters";

const years = Array.from({ length: 20 }, (_, index) => new Date().getFullYear() - index);

/**
 * Lead capture for the sell-your-car flow.
 *
 * The submit handler is intentionally a stub: point `sendLead` at your CRM,
 * a Next.js route handler, or a server action and the rest stays unchanged.
 */
async function sendLead(payload: Record<string, FormDataEntryValue>) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (process.env.NODE_ENV === "development") {
    console.info("[Dewan Motors] sell lead", payload);
  }
}

export function SellCarForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    setStatus("sending");
    await sendLead(payload);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-9">
        <FormSuccess
          title="Thanks — we have your details"
          body="Someone from the buying desk will call you within one working day to arrange the inspection. No obligation at any point."
          onReset={() => setStatus("idle")}
          resetLabel="Submit another car"
        />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-9"
    >
      <h2 className="font-display text-[1.6rem] text-ink sm:text-[1.9rem]">
        Your &amp; Vehicle Details
      </h2>
      <p className="mt-2 text-[0.9375rem] text-muted">
        Fields marked <span className="text-gold">*</span> are required
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="sell-name" required>
          <Input
            id="sell-name"
            name="name"
            required
            autoComplete="name"
            placeholder="e.g. Priya Sharma"
          />
        </Field>

        <Field label="Phone Number" htmlFor="sell-phone" required>
          <Input
            id="sell-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="numeric"
            pattern="[0-9+\s-]{10,15}"
            placeholder="10-digit mobile number"
          />
        </Field>

        <Field label="Car Brand" htmlFor="sell-brand" required>
          <Select id="sell-brand" name="brand" required defaultValue="">
            <option value="" disabled>
              Select brand
            </option>
            {brandOptions.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
            <option value="Other">Other</option>
          </Select>
        </Field>

        <Field label="Car Model" htmlFor="sell-model" required>
          <Input id="sell-model" name="model" required placeholder="e.g. Creta SX (O)" />
        </Field>

        <Field label="Manufacturing Year" htmlFor="sell-year" required>
          <Select id="sell-year" name="year" required defaultValue="">
            <option value="" disabled>
              Select year
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Kilometres Driven" htmlFor="sell-km" required>
          <Input
            id="sell-km"
            name="mileage"
            type="number"
            min={0}
            required
            inputMode="numeric"
            placeholder="e.g. 34000"
          />
        </Field>

        <Field label="Fuel Type" htmlFor="sell-fuel">
          <Select id="sell-fuel" name="fuel" defaultValue="Petrol">
            {fuelTypeOptions.map((fuel) => (
              <option key={fuel} value={fuel}>
                {fuel}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="Transmission" htmlFor="sell-gearbox">
          <Select id="sell-gearbox" name="transmission" defaultValue="Manual">
            {transmissionOptions.map((gearbox) => (
              <option key={gearbox} value={gearbox}>
                {gearbox}
              </option>
            ))}
          </Select>
        </Field>

        <Field label="City" htmlFor="sell-city" required>
          <Input id="sell-city" name="city" required placeholder="e.g. Saharanpur" />
        </Field>

        <Field
          label="Expected Price"
          htmlFor="sell-price"
          hint="In ₹ lakh. Leave blank if you would rather we quote first."
        >
          <Input
            id="sell-price"
            name="expectedPrice"
            type="number"
            min={0}
            step="0.1"
            inputMode="decimal"
            placeholder="e.g. 12.5"
          />
        </Field>

        <Field
          label="Anything we should know?"
          htmlFor="sell-notes"
          className="sm:col-span-2"
        >
          <Textarea
            id="sell-notes"
            name="notes"
            rows={4}
            placeholder="Service history, accident repairs, pending loan, preferred inspection time…"
          />
        </Field>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="mt-8 w-full sm:w-auto sm:px-10"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-[1.1rem] w-[1.1rem] animate-spin" strokeWidth={2} />
            Sending…
          </>
        ) : (
          "Get My Offer"
        )}
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-subtle">
        By submitting you agree to be contacted about this valuation. We never sell your
        details on.
      </p>
    </form>
  );
}
