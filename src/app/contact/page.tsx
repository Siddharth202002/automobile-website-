import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions about a car, a sale, or just want to say hello — call, message on WhatsApp, email us, or visit the showroom.",
};

export default function ContactPage() {
  const channels = [
    {
      icon: MapPin,
      tone: "gold" as const,
      title: "Showroom Address",
      lines: [
        { label: site.address.full, href: site.address.mapHref, external: true },
      ],
    },
    {
      icon: Phone,
      tone: "gold" as const,
      title: "Call Us",
      lines: site.phones.map((line) => ({ ...line, external: false })),
    },
    {
      icon: WhatsAppIcon,
      tone: "forest" as const,
      title: "WhatsApp",
      lines: [
        { label: "Chat with our team", href: site.whatsappHref, external: true },
      ],
    },
    {
      icon: Mail,
      tone: "gold" as const,
      title: "Email",
      lines: [{ label: site.email, href: `mailto:${site.email}`, external: false }],
    },
  ];

  return (
    <>
      <PageHeader
        align="center-block"
        eyebrow="Contact us"
        title="Get in Touch"
        description="Questions about a car, a sale, or just want to say hello — reach us however's easiest."
        divider
      />

      <section className="py-14 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <ul className="divide-y divide-line">
              {channels.map((channel) => (
                <li key={channel.title} className="flex items-start gap-4 py-6 first:pt-0">
                  <span
                    className={
                      channel.tone === "forest"
                        ? "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-700"
                        : "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600"
                    }
                  >
                    <channel.icon className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-sans text-[1.0625rem] font-bold text-ink">
                      {channel.title}
                    </h2>
                    {channel.lines.map((line) => (
                      <a
                        key={line.href}
                        href={line.href}
                        {...(line.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="mt-1.5 block text-[0.9375rem] leading-relaxed text-muted transition-colors hover:text-gold"
                      >
                        {line.label}
                      </a>
                    ))}
                  </div>
                </li>
              ))}

              <li className="flex items-start gap-4 py-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                  <Clock className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.7} />
                </span>
                <div>
                  <h2 className="font-sans text-[1.0625rem] font-bold text-ink">
                    Business Hours
                  </h2>
                  <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">
                    {site.hours.all}
                  </p>
                </div>
              </li>
            </ul>

            {/* Drop a real map embed in here when the showroom address is live. */}
            <div className="mt-2 flex aspect-[16/10] items-center justify-center rounded-2xl border border-line bg-sand text-center">
              <div className="px-6">
                <MapPin className="mx-auto h-6 w-6 text-gold" strokeWidth={1.7} />
                <p className="mt-3 text-[0.9375rem] font-medium text-ink">
                  Find us on the map
                </p>
                <p className="mt-1.5 text-sm text-muted">{site.address.line2}</p>
              </div>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="h-[36rem] animate-pulse rounded-2xl border border-line bg-white" />
            }
          >
            <ContactForm />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
