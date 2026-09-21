import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { vehicles } from "@/data/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/inventory", "/sell", "/about", "/contact", "/privacy", "/terms"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...vehicles.map((vehicle) => ({
      url: `${site.url}/inventory/${vehicle.slug}`,
      lastModified: new Date(vehicle.listedAt),
      changeFrequency: "daily" as const,
      priority: 0.6,
    })),
  ];
}
