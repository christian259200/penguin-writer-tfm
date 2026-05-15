import type { ReactNode } from "react";

import { TfmSlideContent } from "@/components/tfm/tfm-slide-content";
import { TfmSlideHeader } from "@/components/tfm/tfm-slide-header";
import { TfmSlideNavigation } from "@/components/tfm/tfm-slide-navigation";
import { TfmSiteFooter } from "@/components/tfm/tfm-site-footer";
import { cn } from "@/lib/utils";

/**
 * Marco global "modo presentación": fondo con cuadrícula de puntos,
 * barra de navegación animada superior y tarjeta elevada para el contenido.
 * TODAS las páginas son viewport-fill (sin scroll) para presentación.
 */
export function TfmPageShell({
  children,
  currentPath,
  variant = "card",
}: {
  children: ReactNode;
  currentPath: string;
  variant?: "card" | "bare";
}) {
  const viewportFill = true;
  const bare = variant === "bare";
  return (
    <div
      className={cn(
        "flex flex-col text-[#0b1d2e]",
        bare
          ? "bg-white"
          : "bg-slate-100/90 [background-image:radial-gradient(circle_at_center,_#cbd5e1_1px,_transparent_1px)] [background-size:22px_22px]",
        viewportFill ? "h-dvh max-h-dvh overflow-hidden overscroll-none" : "min-h-dvh",
      )}
    >
      <TfmSlideHeader />
      <TfmSlideContent
        className={cn(viewportFill && "min-h-0 flex-1 overflow-x-hidden overscroll-none")}
      >
        <main
          className={cn(
            "flex flex-1 flex-col px-3 pb-24 pt-6 sm:px-5 sm:pb-28 sm:pt-8 md:pt-10",
            viewportFill &&
              "min-h-0 overflow-x-hidden overflow-y-hidden pb-[4.75rem] pt-3 sm:pb-[5rem] sm:pt-4",
            bare && "bg-white pb-[4.75rem] pt-3 sm:pb-[5rem] sm:pt-4",
          )}
        >
          {bare ? (
            <div className="mx-auto flex h-full min-h-0 w-full max-w-[min(100%,72rem)] flex-1 flex-col overflow-hidden">
              {children}
            </div>
          ) : (
            <div
              className={cn(
                "mx-auto w-full max-w-4xl flex-1 rounded-2xl border border-slate-200/95 bg-white/95 px-5 py-8 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:px-8 sm:py-10 md:px-12 md:py-12",
                viewportFill &&
                  "flex max-h-full min-h-0 w-full max-w-[min(100%,72rem)] flex-1 flex-col overflow-hidden px-3 py-3 sm:px-5 sm:py-4",
              )}
            >
              {children}
            </div>
          )}
        </main>
        {!viewportFill && <TfmSiteFooter presentationMode />}
      </TfmSlideContent>
      <TfmSlideNavigation currentPath={currentPath} />
    </div>
  );
}
