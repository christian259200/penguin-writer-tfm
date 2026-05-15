export type TfmNavItem = { href: string; label: string; short?: string };

/** Navegación principal alineada con el sitemap del TFM (web académica EAE). */
export const tfmMainNav: TfmNavItem[] = [
  { href: "/mision-vision", label: "Misión y visión", short: "Misión" },
  { href: "/justificacion", label: "Justificación y objetivos", short: "Justificación" },
  { href: "/mapa-contenidos", label: "Mapa de contenidos", short: "Contenidos" },
  { href: "/estudio-de-mercado", label: "Estudio de mercado", short: "Mercado" },
  { href: "/producto", label: "Producto (TFM)", short: "Journey" },
  {
    href: "/objetivos-marketing",
    label: "Objetivos de marketing digital",
    short: "Objetivos",
  },
  { href: "/marketing-digital", label: "Marketing digital", short: "Marketing" },
  {
    href: "/marketing-estrategia",
    label: "Estrategia por fases del embudo",
    short: "Estrategia",
  },
  {
    href: "/marketing-embudo",
    label: "Embudo de conversión proyectado",
    short: "Embudo",
  },
  { href: "/email-marketing", label: "Email marketing", short: "Email" },
  {
    href: "/kpis-marketing",
    label: "KPIs y cuadro de mando",
    short: "KPIs",
  },
  {
    href: "/plan-financiero",
    label: "Proyección financiera a 3 años",
    short: "Finanzas",
  },
  {
    href: "/plan-contingencias",
    label: "Plan de contingencias",
    short: "Riesgos",
  },
  { href: "/conclusiones", label: "Conclusiones del proyecto", short: "Conclusiones" },
  { href: "/cierre", label: "Cierre y preguntas", short: "Cierre" },
];

export const demoHeroNav = [
  { label: "Our story", href: "#" },
  { label: "Collective", href: "#" },
  { label: "Workshops", href: "#" },
  { label: "Programs", href: "#" },
  { label: "Inquiries", href: "#" },
];
