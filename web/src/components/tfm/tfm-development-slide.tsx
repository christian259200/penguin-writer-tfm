"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  FileCode,
  Layers,
  LayoutTemplate,
  Palette,
  Smartphone,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

const templates = [
  {
    name: "Home del TFM",
    icon: LayoutTemplate,
    description: "Hero de marca + accesos rápidos a todas las secciones",
    color: "#3b82f6",
  },
  {
    name: "Página de sección",
    icon: FileCode,
    description: "Shell con menú global, título, metadatos SEO y contenido",
    color: "#8b5cf6",
  },
  {
    name: "Pie común",
    icon: Layers,
    description: "Contexto EAE, navegación prev/next, enlace al inicio",
    color: "#10b981",
  },
];

const techStack = [
  { name: "Next.js 14", desc: "Framework React con SSR/SSG", icon: Code2, color: "#000" },
  { name: "Tailwind CSS", desc: "Utilidades CSS", icon: Palette, color: "#38bdf8" },
  { name: "Framer Motion", desc: "Animaciones", icon: Zap, color: "#f43f5e" },
  { name: "TypeScript", desc: "Tipado estático", icon: FileCode, color: "#3178c6" },
];

const usabilityChecks = [
  "Navegación completa en <3 min",
  "Responsive: móvil, tablet, desktop",
  "Atajos de teclado (flechas, espacio)",
  "Accesibilidad básica (ARIA, contraste)",
  "Carga rápida (< 2s en 3G)",
];

export function TfmDevelopmentSlide() {
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
          Desarrollo del sitio
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Plantillas y usabilidad
        </h1>
      </motion.header>

      {/* Content */}
      <div className="mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-hidden lg:flex-row lg:gap-6">
        {/* Plantillas - izquierda */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col gap-3"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <div className="mb-1 flex items-center gap-2">
            <LayoutTemplate className="h-4 w-4 text-slate-400" />
            <h2 className="text-sm font-semibold text-slate-900">Tipos de plantilla</h2>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            {templates.map((template, i) => {
              const Icon = template.icon;
              return (
                <motion.div
                  key={template.name}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3"
                  initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : i * 0.08 }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${template.color}15` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: template.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{template.name}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{template.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Tech stack mini */}
          <div className="mt-auto rounded-xl border border-slate-200 bg-slate-50/80 p-3">
            <p className="mb-2 text-xs font-semibold text-slate-700">Stack tecnológico</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-700"
                >
                  <tech.icon className="h-3 w-3" style={{ color: tech.color }} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Usabilidad - derecha */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <div className="mb-3 flex items-center gap-2">
            <Smartphone className="h-4 w-4 text-emerald-600" />
            <h2 className="text-sm font-semibold text-emerald-900">Checklist de usabilidad</h2>
          </div>

          <div className="flex-1 space-y-2">
            {usabilityChecks.map((check, i) => (
              <motion.div
                key={check}
                className="flex items-center gap-2 rounded-lg border border-emerald-200/80 bg-white p-2.5"
                initial={reduceMotion ? {} : { opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.2 + i * 0.06 }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                <span className="text-xs text-emerald-800">{check}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-3 text-[10px] leading-snug text-emerald-700">
            La prueba principal: recorrer todas las páginas desde el menú en menos de 3 minutos
            (útil para el tour en vídeo).
          </p>
        </motion.div>
      </div>
    </div>
  );
}
