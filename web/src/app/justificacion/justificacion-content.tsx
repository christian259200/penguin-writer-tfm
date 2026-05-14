"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DollarSign, Target, Zap, ArrowRight, Wrench, Banknote, UserX } from "lucide-react";

const TEAL = "#0891b2";

const pairs = [
  {
    problem: { icon: Wrench, title: "+5 herramientas", desc: "distintas para un solo flujo de publicación" },
    solution: { icon: Zap, title: "Una sola plataforma", desc: "Todo el workflow en un lugar: ideación, redacción, edición y publicación" },
  },
  {
    problem: { icon: Banknote, title: "$150 al mes", desc: "en suscripciones dispersas sin integración" },
    solution: { icon: DollarSign, title: "Desde 39 $/mes", desc: "Reemplaza múltiples suscripciones con un solo precio accesible" },
  },
  {
    problem: { icon: UserX, title: "Sin voz propia", desc: "Contenido genérico que no refleja tu identidad" },
    solution: { icon: Target, title: "Voz personalizada", desc: "IA entrenada con tu estilo para mantener autenticidad" },
  },
];

export function JustificacionContent() {
  const reduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: reduceMotion
        ? { staggerChildren: 0 }
        : { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      {/* Header */}
      <motion.header
        className="shrink-0 border-b border-slate-200/80 pb-3"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: TEAL }}>
          Justificación y objetivos
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          El problema y la solución
        </h1>
      </motion.header>

      {/* Etiquetas de columna */}
      <div className="mt-3 grid shrink-0 grid-cols-[1fr_2rem_1fr] items-center">
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-red-400">
          El Problema
        </p>
        <div />
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-cyan-500">
          La Solución
        </p>
      </div>

      {/* 3 filas alineadas */}
      <motion.div
        className="mt-2 flex min-h-0 flex-1 flex-col gap-2.5"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        {pairs.map(({ problem, solution }, i) => (
          <motion.div
            key={i}
            className="grid grid-cols-[1fr_2rem_1fr] items-center gap-2"
            variants={fadeIn}
          >
            {/* Problema */}
            <div className="flex items-center gap-3 rounded-xl border border-red-100 bg-gradient-to-br from-red-50 to-orange-50/80 p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-500 shadow-sm shadow-red-200/60">
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900">{problem.title}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-red-700/80">{problem.desc}</p>
              </div>
            </div>

            {/* Flecha */}
            <div className="flex items-center justify-center">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500 shadow-sm shadow-cyan-200/60">
                <ArrowRight className="h-3.5 w-3.5 text-white" />
              </div>
            </div>

            {/* Solución */}
            <div className="flex items-center gap-3 rounded-xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-teal-50/80 p-4 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-500 shadow-sm shadow-cyan-200/60">
                <solution.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-cyan-900">{solution.title}</p>
                <p className="mt-0.5 text-[12px] leading-snug text-cyan-700/80">{solution.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer objetivo */}
      <motion.footer
        className="mt-3 shrink-0 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 px-5 py-3 shadow-md shadow-cyan-200/50"
        variants={fadeIn}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.4 }}
      >
        <p className="text-center text-sm text-white/90">
          <strong className="font-bold text-white">Objetivo del TFM:</strong>{" "}
          Documentar el proyecto empresarial Penguin Writer como web interactiva para la defensa del máster EAE
        </p>
      </motion.footer>
    </div>
  );
}
