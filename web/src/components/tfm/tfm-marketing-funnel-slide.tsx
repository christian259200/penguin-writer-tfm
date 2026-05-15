"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";
const NAVY = "#0b1d2e";

type FunnelLevel = { label: string; value: string; unit: string; widthPct: number };
type Kpi = { label: string; value: string };

const barColorSets = [
  [
    "linear-gradient(90deg, #99f6e4 0%, #5eead4 100%)",
    "linear-gradient(90deg, #5eead4 0%, #2dd4bf 100%)",
    "linear-gradient(90deg, #14b8a6 0%, #0d9488 100%)",
    "linear-gradient(90deg, #0f766e 0%, #0b1d2e 95%)",
  ],
] as const;

const tabGeneral: { levels: FunnelLevel[]; kpis: Kpi[] } = {
  levels: [
    { label: "Nivel 1", value: "4.069.000", unit: "impresiones", widthPct: 100 },
    { label: "Nivel 2", value: "110.100", unit: "clics", widthPct: 72 },
    { label: "Nivel 3", value: "8.895", unit: "leads", widthPct: 48 },
    { label: "Nivel 4", value: "3.475", unit: "conversiones", widthPct: 30 },
  ],
  kpis: [
    { label: "CTR medio", value: "2,7%" },
    { label: "CPL medio", value: "6€" },
    { label: "CPA medio", value: "18,46€" },
    { label: "LTV/CAC", value: "6:1" },
  ],
};

const tabCaptacion: { levels: FunnelLevel[]; kpis: Kpi[] } = {
  levels: [
    { label: "Nivel 1", value: "3.000.000", unit: "impresiones", widthPct: 100 },
    { label: "Nivel 2", value: "120.000", unit: "clics", widthPct: 74 },
    { label: "Nivel 3", value: "4.800", unit: "leads", widthPct: 48 },
    { label: "Nivel 4", value: "1.332", unit: "usuarios activados", widthPct: 32 },
  ],
  kpis: [
    { label: "CTR", value: "4%" },
    { label: "Conv. a SignUp", value: "4%" },
    { label: "Conv. a activados", value: "28%" },
    { label: "CPL medio", value: "6€" },
    { label: "CPA", value: "16€" },
  ],
};

const tabConversion: { levels: FunnelLevel[]; kpis: Kpi[] } = {
  levels: [
    { label: "Nivel 1", value: "7.850", unit: "leads totales", widthPct: 100 },
    { label: "Nivel 2", value: "3.140", unit: "usuarios activos free", widthPct: 72 },
    { label: "Nivel 3", value: "942", unit: "checkouts / carrito", widthPct: 46 },
    { label: "Nivel 4", value: "1.625", unit: "clientes Pro", widthPct: 30 },
  ],
  kpis: [
    { label: "Tasa activación", value: "40%" },
    { label: "Intención de compra", value: "30%" },
    { label: "Recuperación carrito", value: "35%" },
    { label: "CPA medio", value: "18,46€" },
  ],
};

type TabId = "general" | "captacion" | "conversion";

function FunnelView({
  levels,
  kpis,
  barColors,
  tabKey,
}: {
  levels: FunnelLevel[];
  kpis: Kpi[];
  barColors: readonly string[];
  tabKey: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-2 flex min-h-0 flex-1 flex-col gap-3 overflow-hidden sm:mt-3 lg:flex-row lg:items-stretch lg:gap-5">
      <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-center gap-3 overflow-y-auto pr-0.5 sm:gap-3.5 lg:py-1">
        {levels.map((level, i) => (
          <motion.div
            key={`${tabKey}-${level.label}`}
            initial={reduceMotion ? false : { opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.05 * i }}
            className="flex w-full flex-col gap-1 sm:flex-row sm:items-center sm:gap-3"
          >
            <div className="flex shrink-0 flex-col sm:w-40 sm:text-right">
              <span className="text-[10px] font-semibold text-slate-500 sm:text-[11px]">{level.label}</span>
              <span className="text-sm font-bold tabular-nums text-slate-900 sm:text-base">
                {level.value}{" "}
                <span className="text-xs font-semibold text-slate-600 sm:text-sm">{level.unit}</span>
              </span>
            </div>
            <div className="h-10 min-w-0 flex-1 rounded-full border border-slate-200/80 bg-slate-100/80 p-1 sm:h-11">
              <motion.div
                className="h-full rounded-full shadow-sm"
                style={{ background: barColors[i] ?? barColors[barColors.length - 1] }}
                initial={reduceMotion ? false : { width: "0%" }}
                animate={{ width: `${level.widthPct}%` }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : 0.12 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className={cn(
          "grid shrink-0 gap-2 sm:gap-2.5 lg:w-[14rem] lg:self-center",
          kpis.length > 4 ? "grid-cols-2 lg:grid-cols-1" : "grid-cols-2 lg:grid-cols-1",
        )}
      >
        {kpis.map((kpi, i) => (
          <motion.div
            key={`${tabKey}-${kpi.label}`}
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.2 + i * 0.05 }}
            className="rounded-xl border border-slate-200/90 bg-white px-2.5 py-2 shadow-sm sm:px-3 sm:py-2.5"
          >
            <p className="text-[9px] font-medium uppercase tracking-wide text-slate-500 sm:text-[10px]">
              {kpi.label}
            </p>
            <p className="mt-0.5 text-base font-bold tabular-nums sm:text-lg" style={{ color: NAVY }}>
              {kpi.value}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function TfmMarketingFunnelSlide() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<TabId>("general");

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const barColors = barColorSets[0];

  const data =
    tab === "general" ? tabGeneral : tab === "captacion" ? tabCaptacion : tabConversion;

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
              Plan de marketing digital
            </p>
            <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              Embudo de conversión proyectado
            </h1>
          </div>
          <div className="flex shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            {(
              [
                { id: "general" as const, label: "General" },
                { id: "captacion" as const, label: "Captación" },
                { id: "conversion" as const, label: "Conversión" },
              ] satisfies { id: TabId; label: string }[]
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-[10px] font-medium transition-all sm:px-3 sm:text-xs",
                  tab === t.id ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      <motion.div
        key={tab}
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        <FunnelView levels={data.levels} kpis={data.kpis} barColors={barColors} tabKey={tab} />
      </motion.div>
    </div>
  );
}
