"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

type MetricRow = { key: string; label: string; y1: string; y2: string; y3: string; negative?: boolean };

const metrics: MetricRow[] = [
  { key: "ing", label: "Ingresos", y1: "615.078€", y2: "2.121.568€", y3: "3.655.924€" },
  { key: "mb", label: "Margen bruto", y1: "610.383€", y2: "2.105.375€", y3: "3.628.020€" },
  {
    key: "mkt",
    label: "Marketing",
    y1: "-100.000€",
    y2: "-110.000€",
    y3: "-115.000€",
    negative: true,
  },
  { key: "ebitda", label: "EBITDA", y1: "507.204€", y2: "1.991.878€", y3: "3.509.205€" },
  { key: "bn", label: "Beneficio neto", y1: "400.691€", y2: "1.573.584€", y3: "2.772.272€" },
];

const years = [
  { id: "y1", title: "Año 1" },
  { id: "y2", title: "Año 2" },
  { id: "y3", title: "Año 3" },
] as const;

const unitEconomics = [
  { label: "ARPU mensual", value: "$39–$69" },
  { label: "Coste API por usuario", value: "$0,13–$0,65" },
  { label: "Margen por usuario", value: "~95%" },
  { label: "LTV", value: "$975 (ARPU $39 / churn 4%)" },
  { label: "CAC", value: "$18,46" },
  { label: "LTV/CAC", value: "6:1 (saludable >3:1)" },
] as const;

const userProjectionRows = [
  {
    q: "Q1",
    mix: "150 free · 45 Pro · 10 Agency",
    mrr: "~2.600€",
  },
  {
    q: "Q2",
    mix: "400 free · 180 Pro · 35 Agency",
    mrr: "~9.435€",
  },
  {
    q: "Q3",
    mix: "800 free · 450 Pro · 80 Agency",
    mrr: "~23.070€",
  },
  {
    q: "Q4",
    mix: "1.200 free · 750 Pro · 150 Agency",
    mrr: "~39.600€",
  },
];

type TabId = "pl" | "unit" | "users";

export function TfmFinancialPlanSlide() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<TabId>("pl");

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
              Viabilidad económica
            </p>
            <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              Proyección financiera a 3 años
            </h1>
          </div>
          <div className="flex shrink-0 flex-wrap justify-end gap-0.5 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            {(
              [
                { id: "pl" as const, label: "P&L" },
                { id: "unit" as const, label: "Unit economics" },
                { id: "users" as const, label: "Usuarios" },
              ] satisfies { id: TabId; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "rounded-md px-2 py-1 text-[9px] font-medium sm:px-2.5 sm:text-[10px]",
                  tab === t.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      <div className="mt-2 flex min-h-0 flex-1 flex-col gap-2 overflow-hidden sm:mt-3">
        {tab === "pl" && (
          <>
            <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 overflow-y-auto [scrollbar-width:thin] lg:grid-cols-3">
              {years.map((year, yi) => (
                <motion.article
                  key={year.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.08 * yi }}
                  className="flex flex-col rounded-xl border border-slate-200/95 bg-gradient-to-b from-slate-50/95 to-white p-2.5 shadow-sm ring-1 ring-slate-100 sm:p-3"
                >
                  <p className="text-center text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-800 sm:text-[10px]">
                    {year.title}
                  </p>
                  <div className="mt-2 flex flex-col gap-2">
                    {metrics.map((m) => {
                      const val = m[`y${yi + 1}` as "y1" | "y2" | "y3"];
                      return (
                        <div
                          key={m.key}
                          className="rounded-lg border border-slate-100 bg-white/90 px-2 py-1.5 text-center shadow-sm"
                        >
                          <p
                            className={`text-base font-bold tabular-nums leading-tight sm:text-lg ${
                              m.negative ? "text-amber-800" : "text-slate-900"
                            }`}
                          >
                            {val}
                          </p>
                          <p className="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-slate-500 sm:text-[10px]">
                            {m.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="shrink-0 text-[9px] leading-relaxed text-slate-500 sm:text-[10px]">
              Equipo fundador sin salario asignado en Año 1 · Costes variables incluyen APIs (OpenAI,
              ScrapingDog) · Transición a S.L. prevista al superar 40.000€ de beneficio neto
            </p>
          </>
        )}

        {tab === "unit" && (
          <motion.div
            key="unit"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="grid min-h-0 flex-1 grid-cols-2 gap-2 overflow-y-auto [scrollbar-width:thin] sm:gap-2.5"
          >
            {unitEconomics.map((u) => (
              <div
                key={u.label}
                className="rounded-xl border border-slate-200/90 bg-white px-2.5 py-2 shadow-sm sm:px-3 sm:py-2.5"
              >
                <p className="text-[9px] font-medium uppercase tracking-wide text-slate-500 sm:text-[10px]">
                  {u.label}
                </p>
                <p className="mt-1 text-sm font-bold leading-snug text-slate-900 sm:text-base">{u.value}</p>
              </div>
            ))}
          </motion.div>
        )}

        {tab === "users" && (
          <motion.div
            key="users"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden"
          >
            <div className="min-h-0 flex-1 overflow-auto rounded-xl border border-slate-200/90 [scrollbar-width:thin]">
              <table className="w-full border-collapse text-left text-[10px] sm:text-[11px]">
                <thead>
                  <tr>
                    <th className="sticky top-0 bg-[#0891b2] px-2 py-2 font-semibold text-white sm:px-3">
                      Trim.
                    </th>
                    <th className="sticky top-0 bg-[#0891b2] px-2 py-2 font-semibold text-white sm:px-3">
                      Mix (free / Pro / Agency)
                    </th>
                    <th className="sticky top-0 bg-[#0891b2] px-2 py-2 font-semibold text-white sm:px-3">
                      MRR
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userProjectionRows.map((r) => (
                    <tr key={r.q} className="border-b border-slate-100 odd:bg-slate-50/60">
                      <td className="px-2 py-2 font-semibold text-slate-900 sm:px-3">{r.q}</td>
                      <td className="px-2 py-2 text-slate-700 sm:px-3">{r.mix}</td>
                      <td className="px-2 py-2 font-bold tabular-nums text-slate-900 sm:px-3">{r.mrr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="shrink-0 text-center text-[10px] font-semibold text-cyan-800 sm:text-[11px]">
              ARR proyectado Año 1: ~615.000€
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
