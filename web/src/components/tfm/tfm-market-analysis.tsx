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
  { name: "ChatGPT", strength: "IA generalista", weakness: "Sin especialización en contenido", monogram: "C" },
  { name: "Jasper", strength: "Marketing copy", weakness: "Costoso, sin video", monogram: "J" },
  { name: "VidIQ", strength: "SEO YouTube", weakness: "Solo YouTube", monogram: "V" },
  { name: "Descript", strength: "Edición video", weakness: "Sin redacción", monogram: "D" },
];

/** Punto sobre la circunferencia (0° = derecha, 90° = abajo, estándar SVG). */
function polarDeg(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/** Ángulo y altura del bloque de texto (línea base del valor) por anillo — líneas guía hacia la derecha. */
const RING_CALLOUT: Record<string, { angleDeg: number; valueBaseline: number }> = {
  tam: { angleDeg: -34, valueBaseline: 96 },
  sam: { angleDeg: -7, valueBaseline: 150 },
  som: { angleDeg: 22, valueBaseline: 206 },
};

const DIAGRAM_CX = 124;
const DIAGRAM_CY = 150;
const DIAGRAM_R_MAX = 106;

export function TfmMarketAnalysis() {
  const reduceMotion = useReducedMotion();
  const [activeTier, setActiveTier] = useState<string>("som");
  const [activeView, setActiveView] = useState<"market" | "competition">("market");

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  const ringRadii = marketTiers.map((t) => (t.size / 100) * DIAGRAM_R_MAX);

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
                viewBox="0 0 318 300"
                className="h-full max-h-[280px] w-full max-w-[min(100%,20rem)] sm:max-h-[320px]"
                aria-label="Diagrama TAM, SAM y SOM: siglas dentro de cada anillo y valores fuera"
              >
                {marketTiers.map((tier, i) => {
                  const r = ringRadii[i];
                  const isActive = activeTier === tier.id;
                  return (
                    <motion.circle
                      key={tier.id}
                      cx={DIAGRAM_CX}
                      cy={DIAGRAM_CY}
                      r={r}
                      fill={isActive ? `${tier.color}18` : `${tier.color}08`}
                      stroke={tier.color}
                      strokeWidth={isActive ? 3 : 1.5}
                      strokeDasharray={isActive ? "none" : "5 3"}
                      strokeLinecap="round"
                      className="cursor-pointer transition-all"
                      onClick={() => setActiveTier(tier.id)}
                      initial={reduceMotion ? {} : { scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: reduceMotion ? 0 : 0.15 + i * 0.12,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ strokeWidth: 3 }}
                    />
                  );
                })}

                {/* Siglas dentro del anillo que corresponde (TAM/SAM franja media; SOM centro) */}
                <g className="pointer-events-none select-none">
                  {marketTiers.map((tier, i) => {
                    const isActive = activeTier === tier.id;
                    if (tier.id === "som") {
                      return (
                        <motion.text
                          key={`ring-label-${tier.id}`}
                          x={DIAGRAM_CX}
                          y={DIAGRAM_CY}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill={tier.color}
                          fontSize={isActive ? 16 : 14}
                          fontWeight={700}
                          letterSpacing="0.06em"
                          initial={reduceMotion ? {} : { opacity: 0 }}
                          animate={{ opacity: isActive ? 1 : 0.88 }}
                          transition={{ duration: 0.25 }}
                        >
                          {tier.label}
                        </motion.text>
                      );
                    }
                    const rOuter = ringRadii[i];
                    const rInner = ringRadii[i + 1] ?? 0;
                    const rMid = (rOuter + rInner) / 2;
                    const p = polarDeg(DIAGRAM_CX, DIAGRAM_CY, rMid, -90);
                    return (
                      <motion.text
                        key={`ring-label-${tier.id}`}
                        x={p.x}
                        y={p.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fill={tier.color}
                        fontSize={tier.id === "tam" ? (isActive ? 17 : 15) : isActive ? 15 : 13}
                        fontWeight={700}
                        letterSpacing="0.08em"
                        initial={reduceMotion ? {} : { opacity: 0 }}
                        animate={{ opacity: isActive ? 1 : 0.88 }}
                        transition={{ duration: 0.25 }}
                      >
                        {tier.label}
                      </motion.text>
                    );
                  })}
                </g>

                {marketTiers.map((tier, i) => {
                  const r = ringRadii[i];
                  const { angleDeg, valueBaseline } = RING_CALLOUT[tier.id] ?? {
                    angleDeg: 0,
                    valueBaseline: 150,
                  };
                  const edge = polarDeg(DIAGRAM_CX, DIAGRAM_CY, r, angleDeg);
                  const isActive = activeTier === tier.id;
                  const textX = 256;
                  const lineEndX = textX - 6;
                  const lineEndY = valueBaseline - 3;
                  return (
                    <motion.g
                      key={`callout-${tier.id}`}
                      initial={reduceMotion ? {} : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: reduceMotion ? 0 : 0.45 + i * 0.12 }}
                      className="pointer-events-none select-none"
                    >
                      <line
                        x1={edge.x}
                        y1={edge.y}
                        x2={lineEndX}
                        y2={lineEndY}
                        stroke={tier.color}
                        strokeWidth={isActive ? 2 : 1.35}
                        strokeOpacity={isActive ? 0.95 : 0.75}
                        strokeLinecap="round"
                      />
                      <circle
                        cx={edge.x}
                        cy={edge.y}
                        r={isActive ? 3.25 : 2.5}
                        fill={tier.color}
                        stroke="#fff"
                        strokeWidth={1.5}
                      />
                      <text
                        x={textX}
                        y={valueBaseline}
                        textAnchor="start"
                        fill={tier.color}
                        fontSize={14}
                        fontWeight={700}
                      >
                        {tier.value}
                      </text>
                    </motion.g>
                  );
                })}
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
                <div
                  className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-xs font-bold text-slate-700"
                  aria-hidden
                >
                  {comp.monogram}
                </div>
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
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/60 bg-white/80 text-xs font-bold text-cyan-900"
                  aria-hidden
                >
                  PW
                </div>
                <h3 className="text-base font-bold text-cyan-900 sm:text-lg">
                  Penguin Writer
                </h3>
                <span className="rounded-full bg-cyan-600 px-2 py-0.5 text-[10px] font-semibold text-white">
                  NUESTRA VENTAJA
                </span>
              </div>
              <p className="mt-2 text-xs text-cyan-800 sm:text-sm">
                <strong>Flujo integrado único:</strong> Guionista + Editor + Distribuidor en una
                sola plataforma. Voz personalizada con IA. Plan Pro desde 39 $/mes y Agency 69 $/mes.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
