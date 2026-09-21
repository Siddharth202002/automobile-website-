import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
} from "@/components/ui/Icons";

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  YouTube: YouTubeIcon,
} as const;

export function Footer() {
  return (
    <footer className="bg-ink text-parchment">
      <Container size="wide" className="pb-8 pt-16 lg:pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] lg:gap-10">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[0.95rem] leading-[1.75] text-parchment/60">
              Every car we list is inspected, verified and priced transparently — so you
              can buy or sell with confidence, not guesswork.
            </p>
            <ul className="mt-7 flex gap-3">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-parchment/70 transition-colors hover:border-gold hover:text-gold"
                    >
                      <Icon className="h-[1.05rem] w-[1.05rem]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <FooterColumn title="Quick Links" links={footerLinks.quickLinks} />
          <FooterColumn title="Categories" links={footerLinks.categories} />

          <div>
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-parchment">
              Get in Touch
            </h2>
            <ul className="mt-6 space-y-4 text-[0.95rem] text-parchment/65">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-parchment/45" strokeWidth={1.6} />
                <span>{site.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-parchment/45" strokeWidth={1.6} />
                <span className="flex flex-col gap-1">
                  {site.phones.map((line) => (
                    <a
                      key={line.href}
                      href={line.href}
                      className="transition-colors hover:text-gold"
                    >
                      {line.label}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-parchment/45" strokeWidth={1.6} />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-[1.05rem] w-[1.05rem] shrink-0 text-parchment/45" strokeWidth={1.6} />
                <span>{site.hours.all}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-parchment/50 sm:flex-row sm:items-center sm:justify-between lg:pr-16">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-7">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-parchment">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-parchment">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-parchment">
        {title}
      </h2>
      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[0.95rem] text-parchment/65 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
