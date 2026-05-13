"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

type MarketTier = {
  id: string;
  label: string;
  fullLabel: string;
  value: string;
  description: string;
  color: string;
  bgColor: string;
  size: number;
};

const marketTiers: MarketTier[] = [
  {
    id: "tam",
    label: "TAM",
    fullLabel: "Total Addressable Market",
    value: "$205.25B",
    description: "Mercado global de herramientas de creación de contenido con IA",
    color: "#0e7490",
    bgColor: "from-cyan-100 to-cyan-50",
    size: 100,
  },
  {
    id: "sam",
    label: "SAM",
    fullLabel: "Serviceable Addressable Market",
    value: "$198.4M",
    description: "Consultores y coaches en EE.UU. que publican contenido regularmente",
    color: "#0891b2",
    bgColor: "from-teal-100 to-teal-50",
    size: 70,
  },
  {
    id: "som",
    label: "SOM",
    fullLabel: "Serviceable Obtainable Market",
    value: "$500K",
    description: "Objetivo año 1: 2,100 suscriptores Pro/Agency",
    color: "#14b8a6",
    bgColor: "from-emerald-100 to-emerald-50",
    size: 40,
  },
];

const competitors = [
  { name: "ChatGPT", strength: "IA generalista", weakness: "Sin especialización en contenido", logo: "🤖" },
  { name: "Jasper", strength: "Marketing copy", weakness: "Costoso, sin video", logo: "✍️" },
  { name: "VidIQ", strength: "SEO YouTube", weakness: "Solo YouTube", logo: "📊" },
  { name: "Descript", strength: "Edición video", weakness: "Sin redacción", logo: "🎬" },
];

export function TfmMarketAnalysis() {
  const reduceMotion = useReducedMotion();
  const [activeTier, setActiveTier] = useState<string>("tam");
  const [activeView, setActiveView] = useState<"market" | "competition">("market");

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const selectedTier = marketTiers.find((t) => t.id === activeTier) ?? marketTiers[0];

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
              Estudio de mercado
            </p>
            <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Oportunidad de mercado
            </h1>
          </div>
          
          {/* Toggle tabs */}
          <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            <button
              type="button"
              onClick={() => setActiveView("market")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                activeView === "market"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              TAM/SAM/SOM
            </button>
            <button
              type="button"
              onClick={() => setActiveView("competition")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                activeView === "competition"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              Competencia
            </button>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="mt-4 flex min-h-0 flex-1 overflow-hidden">
        {activeView === "market" ? (
          <motion.div
            className="flex min-h-0 flex-1 flex-col gap-4 lg:flex-row lg:gap-6"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            key="market"
          >
            {/* Círculos concéntricos */}
            <div className="relative flex min-h-[200px] flex-1 items-center justify-center lg:min-h-0">
              <svg
                viewBox="0 0 300 300"
                className="h-full max-h-[280px] w-full max-w-[280px] sm:max-h-[320px] sm:max-w-[320px]"
              >
                {marketTiers.map((tier, i) => {
                  const r = (tier.size / 100) * 120;
                  const isActive = activeTier === tier.id;
                  return (
                    <g key={tier.id}>
                      <motion.circle
                        cx="150"
                        cy="150"
                        r={r}
                        fill={isActive ? `${tier.color}15` : `${tier.color}08`}
                        stroke={tier.color}
                        strokeWidth={isActive ? 3 : 1.5}
                        strokeDasharray={isActive ? "none" : "4 2"}
                        className="cursor-pointer transition-all"
                        onClick={() => setActiveTier(tier.id)}
                        initial={reduceMotion ? {} : { scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: reduceMotion ? 0 : 0.2 + i * 0.15,
                          duration: 0.5,
                          type: "spring",
                          stiffness: 200,
                        }}
                        whileHover={{ strokeWidth: 3 }}
                      />
                      <motion.text
                        x="150"
                        y={150 - r + 20}
                        textAnchor="middle"
                        fill={tier.color}
                        fontSize={isActive ? 14 : 11}
                        fontWeight={isActive ? 700 : 500}
                        className="pointer-events-none select-none"
                        initial={reduceMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: reduceMotion ? 0 : 0.4 + i * 0.1 }}
                      >
                        {tier.label}
                      </motion.text>
                    </g>
                  );
                })}
                {/* Centro: valor activo */}
                <motion.text
                  x="150"
                  y="145"
                  textAnchor="middle"
                  fill={selectedTier.color}
                  fontSize="28"
                  fontWeight="700"
                  className="select-none"
                  key={selectedTier.value}
                  initial={reduceMotion ? {} : { scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedTier.value}
                </motion.text>
                <text
                  x="150"
                  y="168"
                  textAnchor="middle"
                  fill="#64748b"
                  fontSize="10"
                  className="select-none"
                >
                  {selectedTier.fullLabel}
                </text>
              </svg>
            </div>

            {/* Panel de información */}
            <div className="flex min-h-0 flex-1 flex-col gap-3 lg:max-w-xs">
              {marketTiers.map((tier) => (
                <motion.button
                  key={tier.id}
                  type="button"
                  onClick={() => setActiveTier(tier.id)}
                  className={cn(
                    "flex flex-col rounded-xl border p-3 text-left transition-all sm:p-4",
                    activeTier === tier.id
                      ? `border-2 bg-gradient-to-br ${tier.bgColor} shadow-sm`
                      : "border-slate-200 bg-white hover:border-slate-300"
                  )}
                  style={{
                    borderColor: activeTier === tier.id ? tier.color : undefined,
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: tier.color }}
                    >
                      {tier.label}
                    </span>
                    <span
                      className="text-lg font-bold sm:text-xl"
                      style={{ color: tier.color }}
                    >
                      {tier.value}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] leading-snug text-slate-600 sm:text-xs">
                    {tier.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="grid min-h-0 flex-1 grid-cols-2 gap-3 overflow-y-auto lg:grid-cols-4 lg:gap-4"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            key="competition"
          >
            {competitors.map((comp, i) => (
              <motion.div
                key={comp.name}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-3 sm:p-4"
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : i * 0.1 }}
              >
                <div className="mb-2 text-2xl">{comp.logo}</div>
                <h3 className="text-sm font-semibold text-slate-900">{comp.name}</h3>
                <div className="mt-2 flex-1 space-y-1.5">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-emerald-600">
                      Fortaleza
                    </p>
                    <p className="text-xs text-slate-600">{comp.strength}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wide text-red-500">
                      Debilidad
                    </p>
                    <p className="text-xs text-slate-600">{comp.weakness}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Penguin Writer card */}
            <motion.div
              className="col-span-2 flex flex-col rounded-xl border-2 border-cyan-500 bg-gradient-to-br from-cyan-50 to-teal-50 p-3 sm:p-4 lg:col-span-4"
              initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">🐧</span>
                <h3 className="text-base font-bold text-cyan-900 sm:text-lg">
                  Penguin Writer
                </h3>
                <span className="rounded-full bg-cyan-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                  NUESTRA VENTAJA
                </span>
              </div>
              <p className="mt-2 text-xs text-cyan-800 sm:text-sm">
                <strong>Flujo integrado único:</strong> Guionista + Editor + Distribuidor en una
                sola plataforma. Voz personalizada con IA. Precio competitivo desde 19$/mes.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
