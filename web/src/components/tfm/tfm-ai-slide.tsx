"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Brain, FileText, Image, MessageSquare, Mic, Sparkles, Video } from "lucide-react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

const aiUseCases = [
  {
    id: "content",
    icon: FileText,
    name: "Generación de contenido",
    description: "Guiones, posts, descripciones optimizadas para cada plataforma",
    color: "#3b82f6",
  },
  {
    id: "voice",
    icon: Mic,
    name: "Voz personalizada",
    description: "Fine-tuning con tu estilo de escritura para mantener autenticidad",
    color: "#8b5cf6",
  },
  {
    id: "transcription",
    icon: MessageSquare,
    name: "Transcripción automática",
    description: "Whisper convierte audio/video a texto editable",
    color: "#10b981",
  },
  {
    id: "images",
    icon: Image,
    name: "Generación de imágenes",
    description: "Miniaturas y assets visuales con DALL-E 3",
    color: "#f59e0b",
  },
  {
    id: "video",
    icon: Video,
    name: "Asistente de video",
    description: "Sugerencias de cortes, timing y estructura",
    color: "#ef4444",
  },
  {
    id: "optimization",
    icon: Sparkles,
    name: "Optimización SEO",
    description: "Títulos, tags y descripciones optimizados para cada red",
    color: "#06b6d4",
  },
];

const aiTools = [
  {
    name: "Cursor (Claude)",
    purpose: "Desarrollo del sitio web del TFM",
    usage: "Generación de componentes React, estructura de rutas, textos en español",
  },
  {
    name: "ChatGPT / GPT-4",
    purpose: "Redacción y revisión de memoria",
    usage: "Borradores, corrección de estilo, traducción",
  },
  {
    name: "Midjourney / DALL-E",
    purpose: "Assets visuales",
    usage: "Logo, ilustraciones, mockups de interfaz",
  },
];

export function TfmAISlide() {
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
          Inteligencia artificial
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          IA en Penguin Writer
        </h1>
      </motion.header>

      {/* Content */}
      <div className="mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-hidden lg:flex-row lg:gap-6">
        {/* Casos de uso del producto - izquierda */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <div className="mb-2 flex items-center gap-2">
            <Brain className="h-4 w-4 text-violet-500" />
            <h2 className="text-sm font-semibold text-slate-900">IA en el producto</h2>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3 lg:grid-cols-2">
            {aiUseCases.map((useCase, i) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.id}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-3"
                  initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduceMotion ? 0 : i * 0.05 }}
                  whileHover={{ scale: 1.02, borderColor: useCase.color }}
                >
                  <div
                    className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${useCase.color}15` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: useCase.color }} />
                  </div>
                  <p className="text-xs font-semibold text-slate-900">{useCase.name}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-slate-500">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Declaración de uso - derecha */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col rounded-xl border border-amber-200/80 bg-amber-50/50 p-4"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <div className="mb-3 flex items-center gap-2">
            <Bot className="h-4 w-4 text-amber-600" />
            <h2 className="text-sm font-semibold text-amber-900">
              Declaración de uso (requisito EAE)
            </h2>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto">
            {aiTools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="rounded-lg border border-amber-200/80 bg-white p-3"
                initial={reduceMotion ? {} : { opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduceMotion ? 0 : 0.2 + i * 0.1 }}
              >
                <p className="text-xs font-semibold text-amber-900">{tool.name}</p>
                <p className="mt-1 text-[10px] text-amber-700">
                  <strong>Propósito:</strong> {tool.purpose}
                </p>
                <p className="mt-0.5 text-[10px] text-amber-600">{tool.usage}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-3 text-[10px] leading-snug text-amber-700">
            Los integrantes del grupo son responsables de revisar la exactitud académica
            de todo contenido asistido por IA.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
