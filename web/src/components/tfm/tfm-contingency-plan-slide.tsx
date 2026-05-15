"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

type Card = {
  phase: string;
  trigger: string;
  action: string;
  accent: string;
  ringClass: string;
};

const cards: Card[] = [
  {
    phase: "Awareness",
    trigger: "CTR < 2,5%",
    action: "Test A/B de creatividades y ajuste de segmentación",
    accent: "bg-sky-600",
    ringClass: "ring-sky-500/35",
  },
  {
    phase: "Captación",
    trigger: "CPL > 8€",
    action: "CRO en landing pages y revisión de keywords negativas",
    accent: "bg-cyan-600",
    ringClass: "ring-cyan-500/35",
  },
  {
    phase: "Conversión",
    trigger: "CPA > 25€",
    action: "Pausa campañas ROAS < 1,5 y reasignación a SEO",
    accent: "bg-teal-600",
    ringClass: "ring-teal-500/35",
  },
  {
    phase: "Fidelización",
    trigger: "Churn > 5% mensual",
    action: "Retargeting + formación personalizada usuarios",
    accent: "bg-emerald-600",
    ringClass: "ring-emerald-500/35",
  },
];

export function TfmContingencyPlanSlide() {
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
          Gestión de riesgos
        </p>
        <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
          Plan de contingencias
        </h1>
      </motion.header>

      <div className="mt-2 flex min-h-0 flex-1 flex-col overflow-hidden sm:mt-3">
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-2 overflow-y-auto overscroll-contain [scrollbar-width:thin] min-[520px]:grid-cols-2">
          {cards.map((c, i) => (
            <motion.article
              key={c.phase}
              className={cn(
                "flex min-h-0 flex-col rounded-lg border border-slate-200/95 bg-white px-3 py-2.5 ring-1 sm:py-3",
                c.ringClass,
              )}
              initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: reduceMotion ? 0 : 0.05 + i * 0.04 }}
            >
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded text-[10px] font-bold text-white",
                    c.accent,
                  )}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h2 className="text-xs font-bold text-slate-900 sm:text-sm">{c.phase}</h2>
              </div>
              <p className="mt-2 text-[10px] font-semibold text-cyan-800 sm:text-[11px]">
                Riesgo / trigger
              </p>
              <p className="mt-0.5 text-[11px] font-bold tabular-nums text-slate-800 sm:text-xs">
                {c.trigger}
              </p>
              <p className="mt-2 text-[10px] font-semibold text-slate-600 sm:text-[11px]">
                Acción correctiva
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-slate-700 sm:text-[11px]">{c.action}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
