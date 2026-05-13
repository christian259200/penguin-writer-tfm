"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layout,
  Palette,
  Server,
  Smartphone,
} from "lucide-react";

import { TfmSitemapDiagram } from "@/components/tfm/tfm-sitemap-diagram";
import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

const stackLayers = [
  {
    id: "frontend",
    name: "Frontend",
    icon: Layout,
    color: "#3b82f6",
    techs: [
      { name: "Next.js 14", desc: "React framework SSR/SSG" },
      { name: "TypeScript", desc: "Tipado estático" },
      { name: "Tailwind CSS", desc: "Utility-first styling" },
      { name: "Framer Motion", desc: "Animaciones declarativas" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: Server,
    color: "#10b981",
    techs: [
      { name: "Node.js", desc: "Runtime JavaScript" },
      { name: "tRPC", desc: "API type-safe" },
      { name: "Prisma", desc: "ORM moderno" },
      { name: "Redis", desc: "Cache y colas" },
    ],
  },
  {
    id: "ai",
    name: "IA / ML",
    icon: Brain,
    color: "#8b5cf6",
    techs: [
      { name: "OpenAI GPT-4", desc: "Generación de texto" },
      { name: "Whisper", desc: "Transcripción de audio" },
      { name: "DALL-E 3", desc: "Generación de imágenes" },
      { name: "Fine-tuning", desc: "Voz personalizada" },
    ],
  },
  {
    id: "infra",
    name: "Infraestructura",
    icon: Cloud,
    color: "#f59e0b",
    techs: [
      { name: "Vercel", desc: "Deploy frontend" },
      { name: "AWS", desc: "Servicios cloud" },
      { name: "PostgreSQL", desc: "Base de datos" },
      { name: "S3", desc: "Almacenamiento media" },
    ],
  },
];

export function TfmArchitectureSlide() {
  const reduceMotion = useReducedMotion();
  const [activeView, setActiveView] = useState<"stack" | "sitemap">("stack");
  const [activeLayer, setActiveLayer] = useState<string>("frontend");

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const selectedLayer = stackLayers.find((l) => l.id === activeLayer) ?? stackLayers[0];

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      {/* Header */}
      <motion.header
        className="shrink-0 border-b border-slate-200/80 pb-3"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: TEAL }}
            >
              Arquitectura técnica
            </p>
            <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {activeView === "stack" ? "Stack tecnológico" : "Sitemap del TFM"}
            </h1>
          </div>

          {/* Toggle tabs */}
          <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            <button
              type="button"
              onClick={() => setActiveView("stack")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                activeView === "stack"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              Stack
            </button>
            <button
              type="button"
              onClick={() => setActiveView("sitemap")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                activeView === "sitemap"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              Sitemap
            </button>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="mt-4 flex min-h-0 flex-1 overflow-hidden">
        {activeView === "stack" ? (
          <motion.div
            className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row lg:gap-6"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            key="stack"
          >
            {/* Capas - izquierda */}
            <div className="flex shrink-0 gap-2 overflow-x-auto lg:flex-col lg:overflow-x-visible">
              {stackLayers.map((layer, i) => {
                const Icon = layer.icon;
                const isActive = activeLayer === layer.id;

                return (
                  <motion.button
                    key={layer.id}
                    type="button"
                    onClick={() => setActiveLayer(layer.id)}
                    className={cn(
                      "flex min-w-[100px] items-center gap-2 rounded-xl border p-3 transition-all lg:min-w-[160px]",
                      isActive
                        ? "border-2 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    )}
                    style={{
                      borderColor: isActive ? layer.color : undefined,
                      backgroundColor: isActive ? `${layer.color}08` : undefined,
                    }}
                    initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduceMotion ? 0 : i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${layer.color}20` }}
                    >
                      <Icon className="h-4 w-4" style={{ color: layer.color }} />
                    </div>
                    <span
                      className={cn(
                        "text-xs font-semibold lg:text-sm",
                        isActive ? "text-slate-900" : "text-slate-600"
                      )}
                    >
                      {layer.name}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Tecnologías - derecha */}
            <motion.div
              className="flex min-h-0 flex-1 flex-col rounded-xl border-2 p-4 sm:p-5"
              style={{
                borderColor: selectedLayer.color,
                backgroundColor: `${selectedLayer.color}05`,
              }}
              key={selectedLayer.id}
              initial={reduceMotion ? {} : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <selectedLayer.icon
                  className="h-5 w-5"
                  style={{ color: selectedLayer.color }}
                />
                <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {selectedLayer.name}
                </h2>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-3">
                {selectedLayer.techs.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    className="rounded-lg border border-white/80 bg-white p-3 shadow-sm"
                    initial={reduceMotion ? {} : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : i * 0.08 }}
                  >
                    <p
                      className="text-sm font-semibold"
                      style={{ color: selectedLayer.color }}
                    >
                      {tech.name}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">{tech.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className="min-h-0 flex-1 overflow-hidden"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            key="sitemap"
          >
            <TfmSitemapDiagram />
          </motion.div>
        )}
      </div>
    </div>
  );
}
