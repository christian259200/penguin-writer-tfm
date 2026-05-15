"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Globe2, type LucideIcon, Rocket, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

const insights: { title: string; text: string; Icon: LucideIcon; iconBg: string }[] = [
  {
    title: "Propuesta diferenciada",
    text: "Penguin Writer resuelve un problema real: escalar contenido sin perder autenticidad, combinando IA y arquetipos de Jung",
    Icon: Sparkles,
    iconBg: "bg-violet-500",
  },
  {
    title: "Mercado validado",
    text: "El análisis PESTEL y Porter confirman que EE.UU. es el mercado óptimo para herramientas de IA con identidad de marca",
    Icon: Globe2,
    iconBg: "bg-sky-600",
  },
  {
    title: "Estrategia medible",
    text: "100.000€ de inversión proyectan 3.475 conversiones con un CPA medio de 18,46€ y LTV/CAC de 6:1",
    Icon: BarChart3,
    iconBg: "bg-cyan-600",
  },
  {
    title: "Escalabilidad",
    text: "La arquitectura técnica y el modelo freemium permiten crecer sin aumentar proporcionalmente los costes operativos",
    Icon: Rocket,
    iconBg: "bg-teal-600",
  },
];

export function TfmConclusionsSlide() {
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
          Conclusiones
        </p>
        <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
          Conclusiones del proyecto
        </h1>
      </motion.header>

      <div className="mt-2 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain [scrollbar-width:thin] sm:mt-3 sm:gap-2.5">
        {insights.map(({ title, text, Icon, iconBg }, i) => (
          <motion.div
            key={title}
            initial={reduceMotion ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.32, delay: reduceMotion ? 0 : 0.06 * i }}
            className={cn(
              "flex gap-3 rounded-xl border border-slate-200/90 bg-white p-3 shadow-sm",
              "sm:gap-4 sm:p-4",
            )}
          >
            <div
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm sm:h-12 sm:w-12",
                iconBg,
              )}
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} aria-hidden />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-900 sm:text-sm">{title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-600 sm:text-[13px]">{text}</p>
            </div>
          </motion.div>
        ))}

        <motion.footer
          className="mt-1 shrink-0 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 px-4 py-3 shadow-md shadow-cyan-200/50 sm:mt-2 sm:px-5 sm:py-3.5"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: reduceMotion ? 0 : 0.35 }}
        >
          <p className="text-center text-[11px] font-semibold leading-snug text-white sm:text-sm md:text-base">
            Penguin Writer: autenticidad escalable para la nueva economía de creadores
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
