"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navigation, site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/format";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  // Close the drawer whenever the route changes, adjusting during render
  // rather than in an effect so there is no extra commit.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Lock the page behind the open drawer.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink">
      <Container size="wide" className="flex h-[76px] items-center justify-between gap-6 lg:h-[88px]">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex xl:gap-10"
        >
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-6 text-[0.95rem] transition-colors duration-200",
                  active
                    ? "font-medium text-parchment"
                    : "text-parchment/60 hover:text-parchment",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-4 h-0.5 origin-left rounded-full bg-gold transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.name}`}
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-parchment/80 transition-colors hover:border-white/40 hover:text-parchment sm:flex"
          >
            <Phone className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.6} />
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-parchment/80 transition-colors hover:border-white/40 hover:text-parchment sm:flex"
          >
            <WhatsAppIcon className="h-[1.15rem] w-[1.15rem]" />
          </a>
          {/* Wrapped so the responsive display is not fighting the button's
              own `inline-flex` base class. */}
          <span className="hidden sm:block">
            <ButtonLink href="/inventory" size="sm" className="h-11 px-5">
              Browse Cars
            </ButtonLink>
          </span>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-parchment transition-colors hover:border-white/40 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile drawer — a full-height sheet rather than a shrunken desktop bar. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-white/8 bg-ink lg:hidden"
      >
        <Container size="wide" className="flex flex-col gap-1 py-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "flex items-center justify-between rounded-xl px-3 py-3.5 text-lg transition-colors",
                isActive(pathname, item.href)
                  ? "bg-white/8 font-medium text-parchment"
                  : "text-parchment/70 hover:bg-white/5 hover:text-parchment",
              )}
            >
              {item.label}
              {isActive(pathname, item.href) ? (
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
              ) : null}
            </Link>
          ))}

          <div className="mt-4 grid gap-3 border-t border-white/8 pt-5 sm:grid-cols-2">
            <ButtonLink href="/inventory" size="md" className="w-full">
              Browse Cars
            </ButtonLink>
            <ButtonLink href="/sell" variant="outlineLight" size="md" className="w-full">
              Sell Your Car
            </ButtonLink>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 pb-2">
            <a
              href={site.phoneHref}
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 text-sm text-parchment/80"
            >
              <Phone className="h-4 w-4" strokeWidth={1.7} /> Call
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 text-sm text-parchment/80"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
