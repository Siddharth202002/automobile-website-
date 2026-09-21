# Dewan Motors — pre-owned car dealership

A production-quality dealership website for Dewan Motors, Saharanpur, built
from the AutoVera reference design: a near-black shell, a warm cream canvas, a single antique-gold accent,
and a high-contrast Didone display face over a geometric sans.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

---

## Running it locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with Turbopack                     |
| `npm run build`     | Production build                              |
| `npm run start`     | Serve the production build                    |
| `npm run lint`      | ESLint (`next/core-web-vitals` + TypeScript)  |
| `npm run typecheck` | `tsc --noEmit`                                |

Requires Node 20.9+ (developed on Node 24).

---

## Pages

| Route                | What it is                                                                  |
| -------------------- | --------------------------------------------------------------------------- |
| `/`                  | Hero + quick search, featured cars, why choose us, process, about, reviews, CTA |
| `/inventory`         | Full inventory with filters, sorting and a shareable filter URL              |
| `/inventory/[slug]`  | Vehicle detail: gallery, specs, EMI estimator, enquiry actions, similar cars  |
| `/sell`              | Sell-your-car process and valuation form                                     |
| `/about`             | Story, stats, values, process, FAQ                                           |
| `/contact`           | Contact channels and message form                                            |
| `/privacy`, `/terms` | Placeholder policy pages linked from the footer                              |

`/sitemap.xml` and `/robots.txt` are generated from the same data.

---

## Project structure

```
src/
├── app/                      # App Router pages, layout, metadata, sitemap
│   ├── globals.css           # Design tokens (@theme) + base layer
│   ├── layout.tsx            # Fonts, header/footer shell, WhatsApp FAB
│   └── inventory/
│       ├── page.tsx          # Reads filters from searchParams
│       ├── loading.tsx       # Skeleton for the results grid
│       └── [slug]/page.tsx   # Statically generated per listing
├── components/
│   ├── layout/               # Header (with mobile drawer), Footer, WhatsAppFab
│   ├── home/                 # Hero, QuickSearch, FeaturedVehicles, WhyChooseUs,
│   │                         # HowItWorks, AboutSection, Testimonials, CTASection
│   ├── vehicles/             # VehicleCard, VehicleGrid, VehicleMedia, FilterPanel,
│   │                         # InventoryBrowser, VehicleGallery, SpecTable, EmiEstimator
│   ├── forms/                # SellCarForm, ContactForm, FormSuccess
│   ├── shared/               # PageHeader, Breadcrumb, ProcessSteps, LegalBody
│   └── ui/                   # Container, Button, Badge, Field, SectionHeading, Logo, Icons
├── data/
│   ├── vehicles.ts           # Mock inventory — replace with your stock
│   └── site.ts               # Contact details, navigation, marketing copy
└── lib/
    ├── types.ts              # Vehicle, filter and sort types
    ├── filters.ts            # Facets, filtering, sorting, URL parsing
    └── format.ts             # Price / mileage / EMI formatting
```

---

## Swapping in your own inventory

Everything the UI renders comes from the `Vehicle` shape in
`src/lib/types.ts`. Replace the array in `src/data/vehicles.ts` — or fetch it
from your CMS or API and return the same shape — and no component needs to
change.

```ts
{
  id: "av-1001",
  slug: "bmw-3-series-320d-luxury-line", // URL segment, must be unique
  brand: "BMW",
  model: "3 Series",
  variant: "320d Luxury Line",
  year: 2021,
  registrationYear: 2021,
  price: 3475000,        // rupees; displayed as "₹34.75 Lakh"
  mileage: 28450,        // kilometres
  fuelType: "Diesel",
  transmission: "Automatic",
  bodyType: "Sedan",
  location: "Bengaluru",
  owners: 1,
  colour: "Mineral White",
  photos: 12,
  image: "/vehicles/bmw-3-series.jpg", // optional
  badge: "Verified",                    // optional: "Verified" | "New Arrival"
  featured: true,                       // optional: shows in the home rail
  highlights: ["…"],
  description: "…",
  listedAt: "2026-08-28",               // drives the "Newest" sort
}
```

The filter facets (brands, body types, fuel types, transmissions) are derived
from the data at build time, so new brands appear in the sidebar automatically.

### Images

Drop files into `public/vehicles/` and point `image` at them — see
[`public/vehicles/README.md`](public/vehicles/README.md). Listings without an
`image` render the house line-art placeholder on the same sand panel, so the
grid never shows a broken file. Serving from a CDN instead? Add the host to
`images.remotePatterns` in `next.config.ts`.

### Dealership details

Name, phone numbers, WhatsApp number, email, address, opening hours,
navigation, footer links, stats and FAQ copy all live in `src/data/site.ts`.

Currently set to:

- **Dewan Motors**, Ambala Road, In Front of City Palace, Saharanpur, Uttar Pradesh
- **+91 94122 32961** and **+91 98974 04004** (the first is also the WhatsApp line)

Two values in that file are still placeholders and are marked `TODO`: `email`
and `url` (the live domain).

### Forms

`SellCarForm` and `ContactForm` collect and validate their fields, then call a
local `sendLead` / `sendMessage` stub that resolves after a short delay. Point
those functions at a route handler, a server action or your CRM webhook; the
loading and success states already work.

---

## Design system

Tokens live in the `@theme` block of `src/app/globals.css`, so they are
available as ordinary Tailwind utilities (`bg-ink`, `text-gold`,
`border-line`, `font-display`).

| Token                     | Value     | Used for                              |
| ------------------------- | --------- | ------------------------------------- |
| `--color-ink`             | `#15161A` | Header, footer, hero, CTA panel       |
| `--color-cream`           | `#F9F8F4` | Page canvas                           |
| `--color-sand`            | `#F1EEE5` | Alternating section bands             |
| `--color-sand-200/300`    | `#ECE6DA` / `#E3DDCF` | Vehicle image panels      |
| `--color-gold`            | `#B8884A` | Primary CTA, eyebrows, active nav     |
| `--color-gold-100`        | `#F4E9D9` | Trust boxes, icon tiles               |
| `--color-forest`          | `#4B7A5A` | WhatsApp actions, verified badges     |
| `--color-muted`           | `#5B5D63` | Body copy                             |

**Type** — `Bodoni Moda` for page and section titles, `DM Sans` for everything
else (card titles included), both loaded through `next/font/google`. Only `h1`
and `h2` default to the serif; card headings stay sans, which is how the
reference reads.

**Rhythm** — one `Container` component sets the horizontal measure. Page
content uses the `default` width (1200px); the dark shell uses `wide`
(1440px), matching the reference's fuller header and footer gutter.

---

## Responsive behaviour

Layouts are adapted per breakpoint rather than scaled down:

- **Header** — centred nav and icon actions on desktop; a full-width drawer
  with large tap targets below `lg`.
- **Hero** — two columns with the illustration panel on desktop; single column
  on mobile, where the search card sits below the dark band instead of
  straddling it.
- **Inventory** — a filter rail beside the results on desktop; a slide-over
  filter drawer with an active-filter count below `lg`.
- **Vehicle cards** — the card is a CSS container query root, so the title and
  price sit side by side when the card is wide and stack when it is narrow.
  That keeps three-up results legible without a separate component.
- **Vehicle detail** — gallery and buy rail side by side on desktop, stacked on
  mobile, with the thumbnail strip reflowing from eight columns to four.

Verified at 390, 500, 768, 1024 and 1440 px.

---

## Accessibility

Semantic landmarks and heading order, a skip link, visible gold focus rings,
`aria-current` on the active nav item, labelled form controls, `fieldset` /
`legend` grouping in the filters, `aria-modal` drawers, alt text derived from
the vehicle, and a `prefers-reduced-motion` guard that disables transitions.

---

## Reference

The source screenshots are kept in `reference/` for future design comparisons.
