"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { getVehicleBySlug } from "@/data/vehicles";
import { Button } from "@/components/ui/Button";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { FormSuccess } from "@/components/forms/FormSuccess";

/** Stub transport — swap for a route handler, server action or CRM webhook. */
async function sendMessage(payload: Record<string, FormDataEntryValue>) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  if (process.env.NODE_ENV === "development") {
    console.info("[Dewan Motors] contact message", payload);
  }
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  // /contact?vehicle=<slug> arrives from the "Enquire Now" button on a listing.
  const vehicle = getVehicleBySlug(searchParams.get("vehicle") ?? "");
  const defaultSubject = vehicle
    ? `Enquiry: ${vehicle.brand} ${vehicle.model} ${vehicle.variant} (${vehicle.id.toUpperCase()})`
    : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    setStatus("sending");
    await sendMessage(payload);
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-9">
        <FormSuccess
          title="Message sent"
          body="Thanks for reaching out. We reply to everything within a few working hours — sooner on WhatsApp."
          onReset={() => setStatus("idle")}
          resetLabel="Send another message"
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
        Send Us a Message
      </h2>

      {vehicle ? (
        <p className="mt-4 rounded-xl bg-gold-50 px-4 py-3 text-sm text-gold-600">
          About the {vehicle.year ? `${vehicle.year} ` : ""}
          {vehicle.brand} {vehicle.model} {vehicle.variant}
        </p>
      ) : null}

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="contact-name" required>
          <Input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
          />
        </Field>

        <Field label="Phone Number" htmlFor="contact-phone" required>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="numeric"
            pattern="[0-9+\s-]{10,15}"
            placeholder="Your phone number"
          />
        </Field>

        <Field label="Email Address" htmlFor="contact-email" className="sm:col-span-2">
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
          />
        </Field>

        <Field label="Subject" htmlFor="contact-subject" className="sm:col-span-2">
          <Input
            id="contact-subject"
            name="subject"
            defaultValue={defaultSubject}
            placeholder="What's this about?"
          />
        </Field>

        <Field label="Message" htmlFor="contact-message" required className="sm:col-span-2">
          <Textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            placeholder="Tell us a little more"
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
          "Send Message"
        )}
      </Button>
    </form>
  );
}
