"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const TEAL = "#0891b2";

export function MisionVisionContent() {
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
        : { staggerChildren: 0.12, delayChildren: 0.1 },
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
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: TEAL }}
        >
          Penguin Writer
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Misión y visión
        </h1>
      </motion.header>

      {/* Dos columnas */}
      <motion.div
        className="mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-hidden lg:flex-row lg:gap-6"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        {/* ── Misión ── */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col rounded-xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50/90 to-teal-50/70 p-5 shadow-sm sm:p-6"
          variants={fadeIn}
        >
          {/* Cabecera tarjeta */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 shadow-md shadow-cyan-200/60">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">
                Misión
              </p>
              <h2 className="text-base font-bold text-cyan-900 sm:text-lg leading-tight">
                Lo que hacemos hoy
              </h2>
            </div>
          </div>

          {/* Cuerpo */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[15px] leading-relaxed text-cyan-900/80 sm:text-base">
              Ayudar a{" "}
              <strong className="text-cyan-900">
                agencias de marketing y coaches high ticket
              </strong>{" "}
              a la{" "}
              <strong className="text-cyan-900">generación de scripts</strong>{" "}
              mediante la extracción de datos virales de la competencia.
            </p>

            {/* Palabras clave destacadas */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["Agencias", "Coaches high ticket", "Scripts", "Datos virales"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-cyan-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Visión ── */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col rounded-xl border border-indigo-200/80 bg-gradient-to-br from-indigo-50/90 to-violet-50/70 p-5 shadow-sm sm:p-6"
          variants={fadeIn}
        >
          {/* Cabecera tarjeta */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 shadow-md shadow-indigo-200/60">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-500">
                Visión
              </p>
              <h2 className="text-base font-bold text-indigo-900 sm:text-lg leading-tight">
                A dónde vamos
              </h2>
            </div>
          </div>

          {/* Cuerpo */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[15px] leading-relaxed text-indigo-900/80 sm:text-base">
              Posicionarnos como la{" "}
              <strong className="text-indigo-900">
                principal herramienta de creación de contenido con IA
              </strong>{" "}
              que asegure contenido que funciona.
            </p>

            {/* Palabras clave destacadas */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["#1 en creación de contenido", "IA aplicada", "Contenido que funciona"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-[11px] font-semibold text-indigo-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}
