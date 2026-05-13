"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import { getTfmPresentationSlideIndex, tfmPresentationSlides } from "@/lib/tfm-slide-routes";
import { cn } from "@/lib/utils";

const ACCENT = "#0891b2";

/** Contador clickeable «n / total» con lista de secciones. */
export function TfmSlideJumpMenu({ variant }: { variant: "header" | "dock" }) {
  const pathname = usePathname();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const idx = getTfmPresentationSlideIndex(pathname);
  const total = tfmPresentationSlides.length;

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: Event) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (idx < 0) return null;

  const counter = `${idx + 1} / ${total}`;

  const buttonClass =
    variant === "header"
      ? "rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-slate-600 hover:bg-slate-200/90"
      : "rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold tabular-nums text-slate-700 hover:bg-slate-200/90 sm:text-xs";

  const panelPosition =
    variant === "header"
      ? "right-0 left-auto top-full mt-1.5"
      : "bottom-full left-1/2 top-auto mb-1.5 -translate-x-1/2";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-haspopup="listbox"
        aria-label={`Diapositiva actual: ${counter}. Abrir lista de secciones`}
        title="Ver todas las secciones"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex cursor-pointer items-center gap-0.5 transition-colors duration-150",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          buttonClass,
        )}
        style={{ outlineColor: ACCENT }}
      >
        <span aria-hidden>{counter}</span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 shrink-0 opacity-70 transition-transform", open && "rotate-180")}
          strokeWidth={2.25}
          aria-hidden
        />
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label="Seleccionar una sección del TFM"
          className={cn(
            "pointer-events-auto absolute z-[160] max-h-[min(60vh,20rem)] min-w-[14rem] max-w-[min(20rem,calc(100vw-2rem))] overflow-y-auto overflow-x-hidden",
            "rounded-xl border border-slate-200/95 bg-white py-1.5 shadow-[0_14px_40px_-12px_rgba(15,23,42,0.22)] backdrop-blur-sm",
            panelPosition,
          )}
        >
          {tfmPresentationSlides.map((slide, i) => {
            const active = pathname === slide.href;
            const num = String(i + 1).padStart(2, "0");
            return (
              <li key={slide.href} role="presentation">
                <Link
                  href={slide.href}
                  role="option"
                  aria-selected={active}
                  prefetch
                  onClick={close}
                  className={cn(
                    "flex cursor-pointer items-center gap-2.5 px-3 py-2 text-left text-[13px] transition-colors duration-150",
                    "focus-visible:bg-cyan-50 focus-visible:outline-none",
                    active
                      ? "bg-cyan-50 font-semibold text-cyan-900"
                      : "text-slate-700 hover:bg-slate-50",
                  )}
                >
                  <span
                    className={cn(
                      "w-6 shrink-0 font-mono text-[10px] tabular-nums",
                      active ? "text-cyan-600" : "text-slate-400",
                    )}
                    aria-hidden
                  >
                    {num}
                  </span>
                  <span className="min-w-0 flex-1 leading-snug">{slide.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
