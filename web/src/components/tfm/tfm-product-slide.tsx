"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

import { TfmCustomerJourney } from "@/components/tfm/tfm-customer-journey";
import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "/mes",
    description: "Para probar el flujo",
    features: ["30 créditos/mes", "1 proyecto", "Exportar texto"],
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "$39",
    period: "/mes",
    description: "Para creadores individuales",
    features: ["500 créditos/mes", "5 proyectos", "Voz personalizada", "Exportar video"],
    highlight: true,
  },
  {
    id: "agency",
    name: "Agency",
    price: "$69",
    period: "/mes",
    description: "Para equipos y agencias",
    features: ["Créditos ilimitados", "Proyectos ilimitados", "3 voces", "API access", "Soporte prioritario"],
    highlight: false,
  },
];

export function TfmProductSlide() {
  const reduceMotion = useReducedMotion();
  const [activeView, setActiveView] = useState<"journey" | "pricing">("journey");

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
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: TEAL }}
            >
              Objeto de estudio · Penguin Writer
            </p>
            <h1 className="mt-1 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {activeView === "journey" ? "Customer Journey" : "Modelo de Precios"}
            </h1>
          </div>

          {/* Toggle tabs */}
          <div className="flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            <button
              type="button"
              onClick={() => setActiveView("journey")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                activeView === "journey"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              Journey
            </button>
            <button
              type="button"
              onClick={() => setActiveView("pricing")}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                activeView === "pricing"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              Pricing
            </button>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <div className="mt-3 flex min-h-0 flex-1 overflow-hidden sm:mt-4">
        {activeView === "journey" ? (
          <motion.div
            className="min-h-0 min-w-0 flex-1 overflow-hidden"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            key="journey"
          >
            <TfmCustomerJourney embedded />
          </motion.div>
        ) : (
          <motion.div
            className="flex min-h-0 flex-1 flex-col gap-4 overflow-hidden lg:flex-row lg:items-center lg:justify-center lg:gap-6"
            initial="hidden"
            animate="show"
            variants={fadeIn}
            key="pricing"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-xl border p-4 transition-all sm:p-5",
                  plan.highlight
                    ? "border-2 border-cyan-500 bg-gradient-to-br from-cyan-50 to-teal-50 shadow-lg shadow-cyan-500/10"
                    : "border-slate-200 bg-white"
                )}
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduceMotion ? 0 : i * 0.1 }}
              >
                {plan.highlight && (
                  <div className="mb-2 flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-600" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-600">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "text-2xl font-bold sm:text-3xl",
                    plan.highlight ? "text-cyan-900" : "text-slate-900"
                  )}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </div>

                <h3 className={cn(
                  "mt-1 text-base font-semibold sm:text-lg",
                  plan.highlight ? "text-cyan-900" : "text-slate-900"
                )}>
                  {plan.name}
                </h3>

                <p className="mt-0.5 text-xs text-slate-500">{plan.description}</p>

                <ul className="mt-3 flex-1 space-y-1.5 sm:mt-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm">
                      <Check
                        className={cn(
                          "mt-0.5 h-3.5 w-3.5 shrink-0",
                          plan.highlight ? "text-cyan-600" : "text-slate-400"
                        )}
                      />
                      <span className={plan.highlight ? "text-cyan-800" : "text-slate-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={cn(
                    "mt-4 w-full rounded-lg py-2 text-xs font-semibold transition-colors sm:text-sm",
                    plan.highlight
                      ? "bg-cyan-600 text-white hover:bg-cyan-700"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )}
                >
                  {plan.id === "free" ? "Empezar gratis" : "Elegir plan"}
                </button>
              </motion.div>
            ))}

            {/* Value prop footer */}
            <motion.div
              className="mt-2 flex items-center justify-center gap-4 text-xs text-slate-500 lg:absolute lg:bottom-4 lg:left-0 lg:right-0"
              initial={reduceMotion ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="flex items-center gap-1">
                <Zap className="h-3.5 w-3.5 text-amber-500" />
                Reemplaza 80-150$/mes en herramientas
              </span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
