"use client";

import { motion, useReducedMotion } from "framer-motion";

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

export function TfmKpisDashboardSlide() {
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
          Medición y control
        </p>
        <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
          KPIs por fase
        </h1>
      </motion.header>

      <div className="mt-2 flex min-h-0 flex-1 flex-col overflow-hidden sm:mt-3">
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
      </div>
    </div>
  );
}
