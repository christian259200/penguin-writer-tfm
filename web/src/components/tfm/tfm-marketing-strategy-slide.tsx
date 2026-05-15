"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight, Code2, Mail, Megaphone, RotateCcw, Search, Share2, Target, TrendingUp } from "lucide-react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

type Channel = { label: string; Icon: typeof Search };

type Phase = {
  id: string;
  phase: string;
  title: string;
  objective: string;
  channels: Channel[];
};

const phases: Phase[] = [
  {
    id: "awareness",
    phase: "Fase 1",
    title: "Awareness",
    objective: "Generar visibilidad y reconocimiento",
    channels: [
      { label: "SEO programático", Icon: Code2 },
      { label: "Meta Ads", Icon: Megaphone },
      { label: "RRSS orgánicas", Icon: Share2 },
    ],
  },
  {
    id: "captacion",
    phase: "Fase 2",
    title: "Captación",
    objective: "Convertir tráfico en leads cualificados",
    channels: [
      { label: "SEO/SEM", Icon: Search },
      { label: "RRSS", Icon: Share2 },
      { label: "Email marketing", Icon: Mail },
    ],
  },
  {
    id: "conversion",
    phase: "Fase 3",
    title: "Conversión",
    objective: "Transformar leads en clientes de pago",
    channels: [
      { label: "SEM", Icon: TrendingUp },
      { label: "Meta retargeting", Icon: RotateCcw },
      { label: "Email", Icon: Mail },
      { label: "Afiliación", Icon: Target },
    ],
  },
  {
    id: "fidelizacion",
    phase: "Fase 4",
    title: "Fidelización",
    objective: "Maximizar LTV y reducir churn",
    channels: [
      { label: "Email automation", Icon: Mail },
      { label: "RRSS", Icon: Share2 },
      { label: "Meta retargeting", Icon: Megaphone },
    ],
  },
];

function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.06 + index * 0.07 }}
      className={cn(
        "relative flex min-w-[140px] flex-1 flex-col rounded-xl border border-slate-200/90 bg-gradient-to-b from-slate-50/95 to-white px-2.5 py-2.5 shadow-sm sm:min-w-[158px] sm:px-3 sm:py-3",
      )}
    >
      <p className="text-[9px] font-semibold uppercase tracking-wider text-cyan-700 sm:text-[10px]">
        {phase.phase}
      </p>
      <p className="mt-0.5 text-[11px] font-bold leading-tight text-slate-900 sm:text-xs">
        {phase.title}
      </p>
      <p className="mt-1.5 border-t border-slate-200/80 pt-1.5 text-[10px] font-medium leading-snug text-slate-600 sm:text-[11px]">
        {phase.objective}
      </p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {phase.channels.map(({ label, Icon }) => (
          <li
            key={label}
            className="inline-flex items-center gap-1 rounded-full border border-cyan-100 bg-cyan-50/90 px-1.5 py-0.5 text-[9px] font-medium text-cyan-950 sm:text-[10px]"
            title={label}
          >
            <Icon className="h-3 w-3 shrink-0 text-cyan-700" strokeWidth={2} aria-hidden />
            <span className="max-w-[7.5rem] truncate sm:max-w-none">{label}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function TfmMarketingStrategySlide() {
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
          Plan de marketing digital
        </p>
        <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
          Estrategia por fases del embudo
        </h1>
      </motion.header>

      <div className="mt-2 flex min-h-0 flex-1 flex-col overflow-hidden sm:mt-3">
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-0.5 pb-2 [scrollbar-width:thin]">
          {/* Desktop: row + arrows */}
          <div className="hidden items-stretch gap-0 md:flex md:flex-row">
            {phases.map((phase, i) => (
              <div key={phase.id} className="flex min-w-0 flex-1 items-stretch">
                <PhaseCard phase={phase} index={i} />
                {i < phases.length - 1 ? (
                  <div
                    className="flex w-6 shrink-0 items-center justify-center text-cyan-600 sm:w-8"
                    aria-hidden
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Mobile: stack + arrows down */}
          <div className="flex flex-col gap-2 md:hidden">
            {phases.map((phase, i) => (
              <div key={phase.id} className="flex flex-col items-center gap-1">
                <div className="w-full max-w-md">
                  <PhaseCard phase={phase} index={i} />
                </div>
                {i < phases.length - 1 ? (
                  <ChevronRight
                    className="h-5 w-5 shrink-0 rotate-90 text-cyan-600"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </div>

          {/* KPIs de resumen */}
          <motion.div
            className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:mt-5 sm:gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.25 }}
          >
            {[
              { label: "Inversión total", value: "100.000€" },
              { label: "Ejecución", value: "12 meses" },
              { label: "Canales principales", value: "4" },
            ].map((k) => (
              <div
                key={k.label}
                className="min-w-[7.5rem] rounded-xl border border-cyan-100 bg-gradient-to-b from-cyan-50/90 to-white px-3 py-2 text-center shadow-sm sm:min-w-[9rem]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-800 sm:text-[11px]">
                  {k.label}
                </p>
                <p className="mt-0.5 text-sm font-bold tabular-nums text-slate-900 sm:text-base">{k.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <p className="shrink-0 border-t border-slate-200/70 pt-2 text-center text-[9px] font-medium text-slate-500 sm:text-[10px]">
          Presupuesto total: 100.000€ · 12 meses · Mercado: Estados Unidos
        </p>
      </div>
    </div>
  );
}
