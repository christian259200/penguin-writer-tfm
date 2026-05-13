import { tfmMainNav } from "@/lib/tfm-nav";

/**
 * Rutas después de las dos primeras diapositivas (Grupo, Mapa), sin repetir «mapa de contenidos».
 */
const tfmSlidesAfterIntro = tfmMainNav.filter((item) => item.href !== "/mapa-contenidos");

/**
 * Diapositivas en orden: menú superior, salto rápido y flechas Prev/Next.
 * 1 · Grupo = presentación del equipo (/explorar-tfm).
 * 2 · Mapa = mapa de contenidos del TFM (/mapa-contenidos).
 */
export const tfmPresentationSlides = [
  { href: "/explorar-tfm", label: "Grupo" },
  { href: "/mapa-contenidos", label: "Mapa" },
  ...tfmSlidesAfterIntro.map((item) => ({
    href: item.href,
    label: item.short ?? item.label,
  })),
] as const;

export const tfmPresentationSlideRoutes = [
  "/explorar-tfm",
  "/mapa-contenidos",
  ...tfmSlidesAfterIntro.map((i) => i.href),
] as const;

export type TfmPresentationSlidePath = (typeof tfmPresentationSlideRoutes)[number];

export function getTfmPresentationSlideIndex(pathname: string): number {
  return tfmPresentationSlideRoutes.indexOf(pathname as TfmPresentationSlidePath);
}
