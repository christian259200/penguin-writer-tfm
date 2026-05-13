"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { TfmSlideJumpMenu } from "@/components/tfm/tfm-slide-jump-menu";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import {
  getTfmPresentationSlideIndex,
  tfmPresentationSlideRoutes,
} from "@/lib/tfm-slide-routes";
import { cn } from "@/lib/utils";

const ACCENT = "#0891b2";
const NAVY = "#0f172a";

/**
 * Barra inferior fija + atajos: avanzar/retroceder por el TFM como en una presentación.
 * No se muestra en rutas que no están en la secuencia.
 */
export function TfmSlideNavigation({ currentPath }: { currentPath: string }) {
  const router = useRouter();
  const idx = getTfmPresentationSlideIndex(currentPath);
  const total = tfmPresentationSlideRoutes.length;

  if (idx < 0) return null;

  const prevHref = idx > 0 ? tfmPresentationSlideRoutes[idx - 1] : null;
  const nextHref = idx < total - 1 ? tfmPresentationSlideRoutes[idx + 1] : null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest("input, textarea, select, [contenteditable=true]")) return;

      if (e.key === "ArrowRight" || e.key === "PageDown") {
        if (nextHref) {
          e.preventDefault();
          router.push(nextHref);
        }
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        if (prevHref) {
          e.preventDefault();
          router.push(prevHref);
        }
      } else if (e.key === " ") {
        if (nextHref) {
          e.preventDefault();
          router.push(nextHref);
        }
      } else if (e.key === "Home") {
        e.preventDefault();
        router.push(tfmPresentationSlideRoutes[0]);
      } else if (e.key === "End") {
        e.preventDefault();
        router.push(tfmPresentationSlideRoutes[total - 1]);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextHref, prevHref, router, total]);

  return (
    <nav
      className="pointer-events-none fixed bottom-5 left-0 right-0 z-[100] flex justify-center px-3"
      aria-label="Navegación por diapositivas del TFM"
    >
      <div
        className="pointer-events-auto flex max-w-[min(100%,28rem)] items-center gap-2 rounded-full border border-slate-200/95 bg-white/95 px-2 py-1.5 pr-3 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.25)] backdrop-blur-md sm:gap-3 sm:px-3 sm:py-2"
        role="group"
        title="Flechas: anterior / siguiente · AvPag / Repag · Espacio: siguiente · Inicio / Fin: primera / última diapositiva"
      >
        {prevHref ? (
          <Link
            href={prevHref}
            className={cn(
              "inline-flex h-10 min-w-[2.75rem] items-center justify-center rounded-full px-3 text-xs font-semibold transition",
              "hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
            style={{ color: NAVY, outlineColor: ACCENT }}
            prefetch
          >
            <ChevronLeft className="mr-1 h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
            <span className="hidden sm:inline">Ant.</span>
          </Link>
        ) : (
          <span className="inline-flex h-10 min-w-[2.75rem] items-center justify-center rounded-full px-3 text-xs font-semibold text-slate-300">
            <ChevronLeft className="mr-1 h-4 w-4" strokeWidth={2.25} aria-hidden />
            <span className="hidden sm:inline">Ant.</span>
          </span>
        )}

        <div className="flex min-w-[5.75rem] shrink-0 justify-center sm:min-w-[7rem]" aria-live="polite" aria-atomic="true">
          <TfmSlideJumpMenu variant="dock" />
        </div>

        {nextHref ? (
          <Link
            href={nextHref}
            className={cn(
              "inline-flex h-10 min-w-[2.75rem] items-center justify-center rounded-full px-3 text-xs font-semibold transition",
              "hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
            )}
            style={{ color: NAVY, outlineColor: ACCENT }}
            prefetch
          >
            <span className="hidden sm:inline">Sig.</span>
            <ChevronRight className="ml-1 h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
          </Link>
        ) : (
          <span className="inline-flex h-10 min-w-[2.75rem] items-center justify-center rounded-full px-3 text-xs font-semibold text-slate-300">
            <span className="hidden sm:inline">Sig.</span>
            <ChevronRight className="ml-1 h-4 w-4" strokeWidth={2.25} aria-hidden />
          </span>
        )}
      </div>
      <p className="sr-only">
        Flechas derecha e izquierda, avanzar página, retroceder página, barra espaciadora al siguiente,
        tecla Inicio al mapa, tecla Fin a la última sección.
      </p>
    </nav>
  );
}
