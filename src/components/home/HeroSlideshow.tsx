"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/format";

export interface HeroSlide {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
}

const INTERVAL_MS = 5000;

/**
 * Cross-fading photos of cars in stock. Pauses on hover or keyboard focus,
 * and stays on the first slide for visitors who prefer reduced motion.
 */
export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActive((index) => (index + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => window.clearInterval(timer);
  }, [paused, slides.length]);

  const current = slides[active];
  if (!current) return null;

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/8 bg-ink-600 lg:aspect-[9/8]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Cars in stock"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== active}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            index === active ? "opacity-100" : "opacity-0",
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={cn(
              "object-cover transition-transform duration-[6000ms] ease-out",
              index === active ? "scale-105" : "scale-100",
            )}
          />
        </div>
      ))}

      {/* Legibility wash behind the caption. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink/90 via-ink/40 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div aria-live="polite" className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">
            {current.subtitle}
          </p>
          <p className="mt-1.5 truncate font-display text-[1.5rem] leading-tight text-parchment sm:text-[1.75rem]">
            {current.title}
          </p>
        </div>
        <Link
          href={current.href}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-parchment backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink"
        >
          View Car
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
          <span className="sr-only">: {current.title}</span>
        </Link>
      </div>

      {slides.length > 1 ? (
        <div className="absolute right-5 top-5 flex gap-1.5 sm:right-6 sm:top-6">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${slide.title}`}
              aria-current={index === active}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === active ? "w-6 bg-gold" : "w-1.5 bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
