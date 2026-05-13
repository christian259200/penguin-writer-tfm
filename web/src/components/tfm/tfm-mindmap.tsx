"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BookOpen, FileText, Users } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { TfmSlideContent } from "@/components/tfm/tfm-slide-content";
import { TfmSlideHeader } from "@/components/tfm/tfm-slide-header";
import { TfmSlideNavigation } from "@/components/tfm/tfm-slide-navigation";
import { tfmMainNav, type TfmNavItem } from "@/lib/tfm-nav";
import { cn } from "@/lib/utils";

/** Acento académico (ui-ux design-system output: cyan legible sobre fondo claro) */
const ACCENT = "#0891b2";
const ACCENT_SOFT = "#cffafe";
const NAVY = "#0f172a";
const LINE = "#94a3b8";

type Column = {
  id: string;
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  items: TfmNavItem[];
};

const columns: Column[] = [
  {
    id: "c1",
    title: "Marco y contenido",
    subtitle: "Fundamentos del TFM",
    Icon: FileText,
    items: tfmMainNav.slice(0, 4),
  },
  {
    id: "c2",
    title: "Producto y desarrollo",
    subtitle: "Solución y web",
    Icon: BookOpen,
    items: tfmMainNav.slice(4, 7),
  },
  {
    id: "c3",
    title: "IA, equipo y difusión",
    subtitle: "Operación y comunicación",
    Icon: Users,
    items: tfmMainNav.slice(7, 10),
  },
];

const COLUMN_IDS = columns.map((c) => c.id);

function useWorksheetLines(
  wrapRef: React.RefObject<HTMLElement | null>,
  rootId: string,
  colIds: string[],
) {
  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ w: 100, h: 100 });

  const measure = useCallback(() => {
    const root = wrapRef.current;
    if (!root) return;
    const c = root.getBoundingClientRect();
    if (c.width < 10 || c.height < 10) return;
    const map = new Map<string, DOMRect>();
    root.querySelectorAll<HTMLElement>("[data-organizer-node]").forEach((el) => {
      const id = el.dataset.organizerNode;
      if (!id) return;
      map.set(id, el.getBoundingClientRect());
    });

    const pathHubToColumn = (from: string, to: string) => {
      const a = map.get(from);
      const b = map.get(to);
      if (!a || !b) return "";
      const x1 = a.left - c.left + a.width / 2;
      const y1 = a.bottom - c.top;
      const x2 = b.left - c.left + b.width / 2;
      const y2 = b.top - c.top;
      const my = y1 + (y2 - y1) * 0.45;
      return `M ${x1} ${y1} L ${x1} ${my} L ${x2} ${my} L ${x2} ${y2}`;
    };

    const next: string[] = [];
    colIds.forEach((cid) => {
      const p = pathHubToColumn(rootId, `${cid}-head`);
      if (p) next.push(p);
    });

    setPaths(next);
    setSize({ w: root.scrollWidth, h: root.scrollHeight });
  }, [wrapRef, rootId, colIds]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, wrapRef]);

  return [paths, size] as const;
}

export function TfmMindmap() {
  const reduceMotion = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [paths, svgSize] = useWorksheetLines(wrapRef, "hub", COLUMN_IDS);

  const stagger = reduceMotion ? 0 : 0.06;

  return (
    <section className="flex min-h-screen w-full flex-col bg-[#ecfeff]/40">
      <TfmSlideHeader />
      <TfmSlideContent>
      <div
        className="relative flex flex-1 flex-col items-center px-4 pb-28 pt-8 sm:px-6 sm:pb-32 sm:pt-10"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <p className="mb-6 max-w-xl text-center text-sm text-slate-600">
          Organizador en tres ramas (inspirado en plantillas académicas): desde el tema central abres cada
          columna y navegas a la sección del TFM.
        </p>

        <div
          ref={wrapRef}
          className="relative w-full max-w-5xl rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.12)] sm:p-8"
        >
          <svg
            className="pointer-events-none absolute left-0 top-0 z-0 text-slate-400"
            width={svgSize.w}
            height={svgSize.h}
            aria-hidden
          >
            {paths.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke={LINE}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut", delay: 0.12 + i * 0.08 }}
              />
            ))}
          </svg>

          {/* Nodo superior tipo plantilla escolar */}
          <div className="relative z-10 mb-8 flex flex-col items-center sm:mb-10">
            <motion.div
              data-organizer-node="hub"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-md rounded-xl border-2 px-5 py-4 text-center shadow-sm"
              style={{
                background: `linear-gradient(180deg, ${ACCENT_SOFT} 0%, #fff 100%)`,
                borderColor: ACCENT,
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0e7490]">
                Trabajo fin de máster
              </p>
              <p className="mt-2 font-semibold leading-snug text-[#164e63]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                Penguin Writer — SaaS de creación de contenido
              </p>
              <div className="mx-auto mt-3 h-px w-24 bg-cyan-200" aria-hidden />
            </motion.div>
          </div>

          {/* Tres columnas */}
          <div className="relative z-10 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
            {columns.map((col, colIndex) => (
              <motion.div
                key={col.id}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: stagger * colIndex }}
                className="flex min-w-0 flex-col"
              >
                {/* Cabecera de columna (caja del organizador) */}
                <div
                  data-organizer-node={`${col.id}-head`}
                  className="rounded-t-lg border-2 border-b-0 px-3 py-3 text-center"
                  style={{
                    backgroundColor: NAVY,
                    borderColor: ACCENT,
                  }}
                >
                  <col.Icon className="mx-auto mb-1 h-5 w-5 text-cyan-200" strokeWidth={1.75} aria-hidden />
                  <p className="text-[13px] font-semibold text-white">{col.title}</p>
                  <p className="mt-0.5 text-[11px] text-cyan-100/85">{col.subtitle}</p>
                </div>

                {/* Lista tipo líneas del cuaderno */}
                <ul
                  className="flex flex-col gap-0 rounded-b-lg border-2 border-t-0 bg-slate-50/80 pb-1 pt-1"
                  style={{ borderColor: `${ACCENT}99` }}
                >
                  {col.items.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + stagger * (colIndex * 4 + i), duration: 0.25 }}
                      className="border-b border-slate-200/90 last:border-b-0"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "group flex min-h-[52px] flex-col justify-center px-3 py-2.5 transition-colors duration-200",
                          "cursor-pointer hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px]",
                        )}
                        style={{ outlineColor: ACCENT }}
                      >
                        <span className="text-[13px] font-semibold leading-snug text-slate-900 group-hover:text-[#0e7490]">
                          {item.label}
                        </span>
                        {item.short && (
                          <span className="mt-0.5 hidden text-[11px] text-slate-500 sm:inline sm:opacity-0 sm:transition-opacity sm:duration-200 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100">
                            {item.short}
                          </span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="relative z-10 mt-6 max-w-lg text-center text-[11px] leading-relaxed text-slate-500">
          Tipografía y ritmo espaciado para lectura académica; animaciones suaves o desactivadas si activas
          &quot;reducir movimiento&quot; en el sistema.
        </p>
      </div>
      </TfmSlideContent>
      <TfmSlideNavigation currentPath="/explorar-tfm" />
    </section>
  );
}
