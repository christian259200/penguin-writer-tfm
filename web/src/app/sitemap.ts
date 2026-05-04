import type { MetadataRoute } from "next";

import { tfmMainNav } from "@/lib/tfm-nav";
import { getSiteBaseUrl } from "@/lib/site-url";

/** Rutas con más peso semántico (TFM, producto, mercado, arquitectura). */
const HIGH_PRIORITY = new Set<string>([
  "/justificacion",
  "/producto",
  "/estudio-de-mercado",
  "/arquitectura",
  "/mapa-contenidos",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteBaseUrl();
  const lastModified = new Date();

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...tfmMainNav.map((item) => ({
      url: `${base}${item.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: HIGH_PRIORITY.has(item.href) ? 0.88 : 0.72,
    })),
    {
      url: `${base}/demo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.45,
    },
  ];

  return mainPages;
}
