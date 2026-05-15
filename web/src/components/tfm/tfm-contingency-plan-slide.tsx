"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

type Card = {
  phase: string;
  trigger: string;
  action1: string;
  action2: string;
  accent: string;
  ringClass: string;
};

const cards: Card[] = [
  {
    phase: "Awareness",
    trigger: "CTR < 2,5%",
    action1: "Test A/B de creatividades y ajuste de segmentación",
    action2: "Reasignar 15% del presupuesto de Meta Ads a RRSS orgánicas si CPM > 20€",
    accent: "bg-sky-600",
    ringClass: "ring-sky-500/35",
  },
  {
    phase: "Captación",
    trigger: "CPL > 8€",
    action1: "CRO en landing pages y revisión de keywords negativas",
    action2: "Lanzar webinar gratuito como lead magnet alternativo",
    accent: "bg-cyan-600",
    ringClass: "ring-cyan-500/35",
  },
  {
    phase: "Conversión",
    trigger: "CPA > 25€",
    action1: "Pausa campañas ROAS < 1,5 y reasignación a SEO",
    action2: "Intensificar programa de afiliados (CPA fijo 17€)",
    accent: "bg-teal-600",
    ringClass: "ring-teal-500/35",
  },
  {
    phase: "Fidelización",
    trigger: "Churn > 5% mensual",
    action1: "Retargeting + formación personalizada",
    action2: "Oferta de migración a plan anual con 20% dto",
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

      <div className="mt-2 flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden sm:mt-3">
        <div className="grid min-h-0 flex-1 content-start items-start gap-1.5 overflow-y-auto overscroll-contain [scrollbar-width:thin] min-[520px]:grid-cols-2 min-[520px]:gap-2">
          {cards.map((c, i) => (
            <motion.article
              key={c.phase}
              className={cn(
                "flex w-full flex-col self-start rounded-md border border-slate-200/95 bg-white px-2 py-1.5 ring-1 sm:px-2.5 sm:py-2",
                c.ringClass,
              )}
              initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, delay: reduceMotion ? 0 : 0.05 + i * 0.04 }}
            >
              <div className="flex items-center gap-1.5 border-b border-slate-100 pb-1 sm:gap-2 sm:pb-1.5">
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold text-white sm:h-5 sm:w-5",
                    c.accent,
                  )}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h2 className="text-[11px] font-bold text-slate-900 sm:text-xs">{c.phase}</h2>
              </div>
              <p className="mt-1 text-[8px] font-semibold uppercase tracking-wide text-cyan-800 sm:text-[9px]">
                Riesgo / trigger
              </p>
              <p className="mt-0.5 text-[10px] font-bold tabular-nums leading-tight text-slate-800 sm:text-[11px]">
                {c.trigger}
              </p>
              <p className="mt-1 text-[8px] font-semibold text-slate-600 sm:text-[9px]">Acción 1</p>
              <p className="mt-0.5 text-[9px] leading-snug text-slate-700 sm:text-[10px]">{c.action1}</p>
              <p className="mt-1 text-[8px] font-semibold text-slate-600 sm:text-[9px]">Acción 2</p>
              <p className="pb-0.5 text-[9px] leading-snug text-slate-700 sm:text-[10px]">{c.action2}</p>
            </motion.article>
          ))}
        </div>
        <p className="shrink-0 border-t border-slate-200/70 pt-1.5 text-center text-[8px] font-medium text-slate-500 sm:pt-2 sm:text-[9px]">
          Revisión semanal de indicadores · Acción correctiva obligatoria tras 14 días de trigger activo
        </p>
      </div>
    </div>
  );
}
