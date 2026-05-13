"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Globe, Link2, Mail, Search, Video } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

const channels = [
  {
    id: "seo",
    name: "SEO",
    icon: Search,
    color: "#10b981",
    budget: "15%",
    description: "Posicionamiento orgánico en Google",
    tactics: ["Keywords long-tail", "Blog educativo", "Landing pages optimizadas"],
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Link2,
    color: "#0A66C2",
    budget: "35%",
    description: "Red principal del público objetivo",
    tactics: ["Contenido educativo", "Ads segmentados", "Grupos de nicho"],
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Video,
    color: "#FF0033",
    budget: "30%",
    description: "Tutoriales y casos de uso",
    tactics: ["Videos demostrativos", "SEO en títulos", "Colaboraciones"],
  },
  {
    id: "email",
    name: "Email",
    icon: Mail,
    color: "#8b5cf6",
    budget: "15%",
    description: "Nurturing y retención",
    tactics: ["Secuencia onboarding", "Newsletter semanal", "Recuperación churn"],
  },
  {
    id: "web",
    name: "Web",
    icon: Globe,
    color: "#f59e0b",
    budget: "5%",
    description: "Conversión y soporte",
    tactics: ["Landing optimizada", "Chat en vivo", "Centro de ayuda"],
  },
];

const kpis = [
  { label: "CAC objetivo", value: "$45", target: "Coste adquisición cliente" },
  { label: "LTV:CAC", value: "3:1", target: "Ratio mínimo rentable" },
  { label: "Churn mensual", value: "<5%", target: "Tasa de cancelación" },
  { label: "MRR año 1", value: "$42K", target: "Ingresos recurrentes" },
];

export function TfmMarketingSlide() {
  const reduceMotion = useReducedMotion();
  const [activeChannel, setActiveChannel] = useState<string | null>(null);

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
          Plan de marketing
        </p>
        <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Estrategia de canales
        </h1>
      </motion.header>

      {/* Content */}
      <div className="mt-4 flex min-h-0 flex-1 flex-col gap-4 overflow-hidden lg:flex-row lg:gap-6">
        {/* Canales - izquierda */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto lg:max-w-md"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            const isActive = activeChannel === channel.id;

            return (
              <motion.button
                key={channel.id}
                type="button"
                onClick={() => setActiveChannel(isActive ? null : channel.id)}
                className={cn(
                  "flex items-start gap-3 rounded-xl border p-3 text-left transition-all",
                  isActive
                    ? "border-2 bg-slate-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                )}
                style={{
                  borderColor: isActive ? channel.color : undefined,
                }}
                initial={reduceMotion ? {} : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reduceMotion ? 0 : i * 0.05 }}
                whileHover={{ scale: 1.01 }}
              >
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <Icon className="h-4 w-4" style={{ color: channel.color }} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900">{channel.name}</span>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{ backgroundColor: `${channel.color}15`, color: channel.color }}
                    >
                      {channel.budget}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-slate-500">{channel.description}</p>

                  {isActive && (
                    <motion.ul
                      className="mt-2 space-y-1"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                    >
                      {channel.tactics.map((tactic) => (
                        <li
                          key={tactic}
                          className="flex items-center gap-1.5 text-[11px] text-slate-600"
                        >
                          <span
                            className="h-1 w-1 shrink-0 rounded-full"
                            style={{ backgroundColor: channel.color }}
                          />
                          {tactic}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* KPIs - derecha */}
        <motion.div
          className="flex min-h-0 flex-1 flex-col gap-3 lg:justify-center"
          initial="hidden"
          animate="show"
          variants={fadeIn}
        >
          <div className="mb-2 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-slate-400" />
            <h2 className="text-sm font-semibold text-slate-900">KPIs objetivo</h2>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-3 sm:p-4"
                initial={reduceMotion ? {} : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.2 + i * 0.08 }}
              >
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  {kpi.label}
                </p>
                <p
                  className="mt-1 text-xl font-bold sm:text-2xl"
                  style={{ color: TEAL }}
                >
                  {kpi.value}
                </p>
                <p className="mt-0.5 text-[10px] text-slate-500">{kpi.target}</p>
              </motion.div>
            ))}
          </div>

          {/* Funnel simplificado */}
          <motion.div
            className="mt-2 rounded-xl border border-cyan-200/80 bg-cyan-50/50 p-3 sm:p-4"
            initial={reduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xs font-semibold text-cyan-900">Embudo de conversión</p>
            <div className="mt-2 flex items-center gap-1 text-[10px]">
              <span className="rounded bg-cyan-100 px-1.5 py-0.5 font-medium text-cyan-800">
                Visitantes
              </span>
              <span className="text-cyan-400">→</span>
              <span className="rounded bg-cyan-200 px-1.5 py-0.5 font-medium text-cyan-800">
                Free trial
              </span>
              <span className="text-cyan-400">→</span>
              <span className="rounded bg-cyan-300 px-1.5 py-0.5 font-medium text-cyan-900">
                Pro/Agency
              </span>
            </div>
            <p className="mt-1.5 text-[10px] text-cyan-700">
              Conversión objetivo: 2% visitantes → trial, 25% trial → pago
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
