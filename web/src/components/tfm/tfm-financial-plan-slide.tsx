"use client";

import { motion, useReducedMotion } from "framer-motion";

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

export function TfmFinancialPlanSlide() {
  const reduceMotion = useReducedMotion();
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
        <p
          className="text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[10px]"
          style={{ color: TEAL }}
        >
          Viabilidad económica
        </p>
        <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
          Proyección financiera a 3 años
        </h1>
      </motion.header>

      <div className="mt-2 flex min-h-0 flex-1 flex-col gap-3 overflow-hidden sm:mt-3">
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 overflow-y-auto [scrollbar-width:thin] lg:grid-cols-3">
          {years.map((year, yi) => (
            <motion.article
              key={year.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.08 * yi }}
              className="flex flex-col rounded-xl border border-slate-200/95 bg-gradient-to-b from-slate-50/95 to-white p-3 shadow-sm ring-1 ring-slate-100 sm:p-4"
            >
              <p className="text-center text-[10px] font-bold uppercase tracking-[0.15em] text-cyan-800 sm:text-[11px]">
                {year.title}
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {metrics.map((m) => {
                  const val = m[`y${yi + 1}` as "y1" | "y2" | "y3"];
                  return (
                    <div
                      key={m.key}
                      className="rounded-lg border border-slate-100 bg-white/90 px-2.5 py-2 text-center shadow-sm"
                    >
                      <p
                        className={`text-lg font-bold tabular-nums leading-tight sm:text-xl ${
                          m.negative ? "text-amber-800" : "text-slate-900"
                        }`}
                      >
                        {val}
                      </p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-slate-500 sm:text-[11px]">
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
      </div>
    </div>
  );
}
