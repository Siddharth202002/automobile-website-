# Vehicle photography

Drop listing photos in this folder and reference them from
`src/data/vehicles.ts` with a root-relative path:

```ts
{
  id: "av-1001",
  // ...
  image: "/vehicles/bmw-3-series-320d.jpg",
}
```

A listing with no `image` renders the built-in line-art placeholder
(`CarLineArt` in `src/components/ui/Icons.tsx`) on the same sand panel, so the
grid never shows a broken file while a shoot is pending.

## Recommended

- **Aspect ratio** — 4:3. Cards and the detail gallery both crop to 4:3.
- **Size** — 1600 × 1200 or larger; `next/image` handles the downscaling.
- **Format** — `.jpg` for photography, `.webp` if your pipeline produces it.
- **Naming** — match the vehicle `slug`, e.g. `bmw-3-series-320d-luxury-line.jpg`.

If you later serve images from a CDN or object store, add the host to
`images.remotePatterns` in `next.config.ts` and use the absolute URL in `image`.
