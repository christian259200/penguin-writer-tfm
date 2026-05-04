export type TfmNavItem = { href: string; label: string; short?: string };

/** Navegación principal alineada con el sitemap del TFM (web académica EAE). */
export const tfmMainNav: TfmNavItem[] = [
  { href: "/justificacion", label: "Justificación y objetivos", short: "Justificación" },
  { href: "/mapa-contenidos", label: "Mapa de contenidos", short: "Contenidos" },
  { href: "/arquitectura", label: "Arquitectura y sitemap", short: "Arquitectura" },
  { href: "/estudio-de-mercado", label: "Estudio de mercado", short: "Mercado" },
  { href: "/producto", label: "Producto (TFM)", short: "Producto" },
  { href: "/desarrollo-web", label: "Desarrollo de la web", short: "Desarrollo" },
  { href: "/marketing-digital", label: "Marketing digital", short: "Marketing" },
  { href: "/inteligencia-artificial", label: "Uso de IA", short: "IA" },
  { href: "/equipo", label: "Equipo", short: "Equipo" },
  { href: "/multimedia", label: "Vídeos", short: "Vídeos" },
];

export const demoHeroNav = [
  { label: "Our story", href: "#" },
  { label: "Collective", href: "#" },
  { label: "Workshops", href: "#" },
  { label: "Programs", href: "#" },
  { label: "Inquiries", href: "#" },
];
