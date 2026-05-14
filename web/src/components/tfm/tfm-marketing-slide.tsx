"use client";

import { motion, useReducedMotion } from "framer-motion";

import { TfmMarketingPlanDiagram } from "@/components/tfm/tfm-marketing-plan-diagram";

const TEAL = "#0891b2";

export function TfmMarketingSlide() {
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
        className="shrink-0 border-b border-slate-200/80 pb-1.5"
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
        <h1 className="mt-0.5 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
          Reparto del presupuesto
        </h1>
      </motion.header>

      <div className="mt-1.5 flex min-h-0 flex-1 flex-col overflow-hidden sm:mt-2">
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-0.5 [scrollbar-width:thin]">
          <TfmMarketingPlanDiagram />
        </div>
      </div>
    </div>
  );
}
