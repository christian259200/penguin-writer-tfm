"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { cn } from "@/lib/utils";

type Phase = {
  id: string;
  step: number;
  title: string;
  pct: string;
  budget: string;
  tactics: string[];
  accent: string;
  ringClass: string;
};

const phases: Phase[] = [
  {
    id: "captacion",
    step: 1,
    title: "Captación",
    pct: "25%",
    budget: "25.000 €",
    tactics: ["Estrategia SEO/SEM", "Redes sociales", "Email marketing"],
    accent: "bg-cyan-600",
    ringClass: "ring-cyan-500/35",
  },
  {
    id: "awareness",
    step: 2,
    title: "Awareness",
    pct: "25%",
    budget: "25.000 €",
    tactics: ["Meta Ads", "SEO", "Redes sociales"],
    accent: "bg-sky-600",
    ringClass: "ring-sky-500/35",
  },
  {
    id: "conversion",
    step: 3,
    title: "Conversión",
    pct: "30%",
    budget: "30.000 €",
    tactics: ["Estrategia SEO/SEM", "Meta Ads", "Email marketing"],
    accent: "bg-teal-600",
    ringClass: "ring-teal-500/35",
  },
  {
    id: "fidelizacion",
    step: 4,
    title: "Fidelización",
    pct: "20%",
    budget: "20.000 €",
    tactics: ["Contenido orgánico", "Email marketing / newsletter"],
    accent: "bg-emerald-600",
    ringClass: "ring-emerald-500/35",
  },
];

const funnelLabels = ["Captación", "Awareness", "Conversión", "Fidelización"];

export function TfmMarketingPlanDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-1.5">
      {/* Embudo compacto + marca mínima */}
      <motion.div
        className="flex flex-wrap items-center justify-between gap-1.5 rounded-md border border-slate-200/95 bg-white px-1.5 py-1 sm:px-2"
        initial={reduceMotion ? {} : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        aria-hidden
      >
        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-0.5 gap-y-0.5 sm:justify-start">
          {funnelLabels.map((label, i) => (
            <div key={label} className="flex items-center gap-0.5">
              <span className="whitespace-nowrap rounded bg-slate-100 px-1 py-0.5 text-[8px] font-semibold text-slate-700 sm:text-[9px]">
                {i + 1}. {label}
              </span>
              {i < funnelLabels.length - 1 && (
                <span className="text-[9px] text-slate-300" aria-hidden>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        <Image
          src="/images/penguin-logo.png"
          alt=""
          width={28}
          height={28}
          className="h-4 w-auto shrink-0 object-contain opacity-85 sm:h-5"
        />
      </motion.div>

      {/* Cuadrícula más compacta */}
      <div className="grid grid-cols-1 gap-1.5 min-[480px]:grid-cols-2">
        {phases.map((phase, i) => (
          <motion.article
            key={phase.id}
            className={cn(
              "flex min-h-0 flex-col rounded-md border border-slate-200/95 bg-white px-2 py-1.5 ring-1 sm:px-2 sm:py-2",
              phase.ringClass,
            )}
            initial={reduceMotion ? {} : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: reduceMotion ? 0 : 0.04 + i * 0.03 }}
          >
            <div className="flex items-center justify-between gap-1.5 border-b border-slate-100 pb-1">
              <div className="flex min-w-0 items-center gap-1">
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded text-[9px] font-bold text-white sm:text-[10px]",
                    phase.accent,
                  )}
                  aria-hidden
                >
                  {phase.step}
                </span>
                <h3 className="truncate text-[11px] font-bold text-slate-900 sm:text-xs">
                  {phase.title}
                </h3>
              </div>
              <span
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-1.5 py-px text-[8px] font-bold text-white sm:text-[9px]",
                  phase.accent,
                )}
              >
                {phase.pct}
              </span>
            </div>

            <p className="mt-1 text-sm font-bold tabular-nums leading-none text-slate-900 sm:text-base">
              {phase.budget}
            </p>
            <p className="text-[8px] text-slate-400 sm:text-[9px]">del total asignado</p>

            <div className="mt-1 border-t border-slate-100 pt-1">
              <p className="text-[8px] font-semibold uppercase tracking-wide text-slate-500">
                Tácticas
              </p>
              <ul className="mt-0.5 space-y-px">
                {phase.tactics.map((t) => (
                  <li
                    key={t}
                    className="flex gap-1 text-[9px] leading-snug text-slate-600 sm:text-[10px]"
                  >
                    <span
                      className={cn("mt-0.5 h-0.5 w-0.5 shrink-0 rounded-full sm:h-1 sm:w-1", phase.accent)}
                      aria-hidden
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>

      <p className="text-center text-[8px] leading-tight text-slate-500 sm:text-[9px]">
        Total referencia ~100.000 € · 25 % + 25 % + 30 % + 20 %
      </p>
    </div>
  );
}
