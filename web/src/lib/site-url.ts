/**
 * URL pública del sitio para sitemap, robots y enlaces absolutos en producción.
 * Definir en despliegue: NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
 */
export function getSiteBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) return fromEnv.replace(/\/$/, "");

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;

  return "http://localhost:3000";
}
