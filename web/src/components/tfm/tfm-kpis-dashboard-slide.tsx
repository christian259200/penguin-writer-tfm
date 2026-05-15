"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

const columns = [
  "Fase",
  "Impresiones",
  "Clics",
  "CTR",
  "Leads",
  "Conversiones",
  "CPA",
] as const;

const rows: Record<(typeof columns)[number], string>[] = [
  {
    Fase: "Awareness",
    Impresiones: "1.200.000",
    Clics: "42.000",
    CTR: "3,5%",
    Leads: "—",
    Conversiones: "—",
    CPA: "—",
  },
  {
    Fase: "Captación",
    Impresiones: "2.100.000",
    Clics: "56.600",
    CTR: "2,7%",
    Leads: "4.800",
    Conversiones: "1.345",
    CPA: "18,57€",
  },
  {
    Fase: "Conversión",
    Impresiones: "660.000",
    Clics: "10.000",
    CTR: "1,5%",
    Leads: "4.095",
    Conversiones: "1.630",
    CPA: "18,40€",
  },
  {
    Fase: "Fidelización",
    Impresiones: "109.000",
    Clics: "1.500",
    CTR: "1,4%",
    Leads: "815",
    Conversiones: "500",
    CPA: "40,00€",
  },
];

const totalRow: Record<(typeof columns)[number], string> = {
  Fase: "Total",
  Impresiones: "4.069.000",
  Clics: "110.100",
  CTR: "—",
  Leads: "8.895",
  Conversiones: "3.475",
  CPA: "—",
};

const roadmapBlocks = [
  {
    label: "Meses 1–3",
    title: "Awareness + setup captación",
    detail: "SEO programático, Meta Ads, perfiles RRSS, email setup",
    left: 0,
    width: 28,
    color: "bg-cyan-300",
    z: 10,
  },
  {
    label: "Meses 3–6",
    title: "Captación activa",
    detail: "SEO/SEM, RRSS editorial, ManyChat, free tools",
    left: 18,
    width: 32,
    color: "bg-teal-500",
    z: 20,
  },
  {
    label: "Meses 4–9",
    title: "Conversión",
    detail: "SEM marca, Meta retargeting, email nurturing, afiliados",
    left: 35,
    width: 48,
    color: "bg-cyan-600",
    z: 15,
  },
  {
    label: "Meses 4–12",
    title: "Fidelización continua",
    detail: "Email automation, contenido orgánico, retargeting upsell",
    left: 42,
    width: 55,
    color: "bg-[#0d9488]",
    z: 12,
  },
];

function RoadmapGantt() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto py-1 [scrollbar-width:thin]">
      <p className="text-[10px] leading-snug text-slate-600 sm:text-[11px]">
        Las fases conviven en el tiempo; el solapamiento refleja trabajo paralelo (no solo secuencial).
      </p>
      <div className="relative min-h-[220px] rounded-xl border border-slate-200/90 bg-slate-50/80 px-2 py-4 sm:min-h-[260px] sm:px-4 sm:py-6">
        <div className="mb-2 flex justify-between text-[9px] font-semibold uppercase tracking-wider text-slate-400">
          <span>M1</span>
          <span>M6</span>
          <span>M12</span>
        </div>
        <div className="relative h-[180px] sm:h-[200px]">
          {roadmapBlocks.map((b, i) => (
            <motion.div
              key={b.label}
              initial={reduceMotion ? false : { opacity: 0, scaleX: 0.85 }}
              animate={{ opacity: 0.92, scaleX: 1 }}
              transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.08 * i }}
              className={cn(
                "absolute h-11 rounded-full shadow-md ring-2 ring-white/80 sm:h-12",
                b.color,
              )}
              style={{
                left: `${b.left}%`,
                width: `${b.width}%`,
                top: `${12 + i * 38}px`,
                zIndex: b.z,
                transformOrigin: "left center",
              }}
              title={`${b.title}: ${b.detail}`}
            >
              <div className="flex h-full flex-col justify-center px-3 sm:px-4">
                <span className="text-[9px] font-bold uppercase tracking-wide text-white/95 sm:text-[10px]">
                  {b.label}
                </span>
                <span className="line-clamp-2 text-[9px] font-semibold leading-tight text-white sm:text-[10px]">
                  {b.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <ul className="mt-2 space-y-1.5 border-t border-slate-200/80 pt-2 text-[9px] text-slate-600 sm:text-[10px]">
          {roadmapBlocks.map((b) => (
            <li key={b.label} className="flex gap-2">
              <span className="shrink-0 font-bold text-cyan-800">{b.label}:</span>
              <span>{b.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type TabId = "kpis" | "roadmap";

export function TfmKpisDashboardSlide() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<TabId>("kpis");

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <motion.header
        className="shrink-0 border-b border-slate-200/80 pb-2"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p
              className="text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[10px]"
              style={{ color: TEAL }}
            >
              Medición y control
            </p>
            <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              KPIs por fase
            </h1>
          </div>
          <div className="flex shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            <button
              type="button"
              onClick={() => setTab("kpis")}
              className={cn(
                "rounded-md px-2.5 py-1 text-[10px] font-medium sm:px-3 sm:text-xs",
                tab === "kpis" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700",
              )}
            >
              KPIs
            </button>
            <button
              type="button"
              onClick={() => setTab("roadmap")}
              className={cn(
                "rounded-md px-2.5 py-1 text-[10px] font-medium sm:px-3 sm:text-xs",
                tab === "roadmap"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700",
              )}
            >
              Roadmap
            </button>
          </div>
        </div>
      </motion.header>

      <div className="mt-2 flex min-h-0 flex-1 flex-col overflow-hidden sm:mt-3">
        {tab === "kpis" && (
          <div className="min-h-0 flex-1 overflow-auto rounded-xl border border-slate-200/90 [scrollbar-width:thin]">
            <table className="w-full min-w-[640px] border-collapse text-left text-[10px] sm:min-w-0 sm:text-[11px]">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className="sticky top-0 z-[1] border-b border-white/20 px-2 py-2 font-semibold text-white sm:px-3 sm:py-2.5"
                      style={{ backgroundColor: TEAL }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.Fase}
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: reduceMotion ? 0 : 0.04 * i }}
                    className="border-b border-slate-100 bg-white odd:bg-slate-50/60"
                  >
                    {columns.map((col) => (
                      <td
                        key={col}
                        className="whitespace-nowrap px-2 py-2 font-medium tabular-nums text-slate-800 sm:px-3"
                      >
                        {col === "Fase" ? (
                          <span className="font-semibold text-slate-900">{row[col]}</span>
                        ) : (
                          row[col]
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
                <motion.tr
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-t-2 border-slate-200 bg-cyan-50/80 font-bold"
                >
                  {columns.map((col) => (
                    <td
                      key={col}
                      className="whitespace-nowrap px-2 py-2.5 tabular-nums text-slate-900 sm:px-3"
                    >
                      {totalRow[col]}
                    </td>
                  ))}
                </motion.tr>
              </tbody>
            </table>
          </div>
        )}

        {tab === "roadmap" && (
          <motion.div
            key="roadmap"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="flex min-h-0 flex-1 flex-col"
          >
            <RoadmapGantt />
          </motion.div>
        )}
      </div>
    </div>
  );
}
