"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartHandshake, Mail, Sparkles, UserPlus, Users } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";

type TabId = "captacion" | "conversion" | "fidelizacion";

const tabs: { id: TabId; label: string }[] = [
  { id: "captacion", label: "Captación" },
  { id: "conversion", label: "Conversión" },
  { id: "fidelizacion", label: "Fidelización" },
];

const welcomeSequence = [
  { day: "Día 0", title: 'Bienvenida + acceso a créditos gratis' },
  { day: "Día 2", title: "Demo interactiva: crea tu primer script" },
  { day: "Día 5", title: "Caso de éxito: cómo [coach] ahorró 10h/semana" },
  { day: "Día 7", title: "Tus créditos se agotan — desbloquea Pro" },
];

const upgradeSequence = [
  {
    trigger: "Trigger: 80% créditos usados",
    title: "Has creado X scripts — mira todo lo que podrías hacer",
  },
  { trigger: "+48h", title: "Caso de éxito de tu nicho" },
  { trigger: "+48h", title: "Oferta flash 48h: 20% dto primer mes Pro" },
];

const loyaltyFlows = [
  {
    title: "Retención",
    desc: "Emails mensuales con ROI del usuario",
    Icon: HeartHandshake,
  },
  {
    title: "Upsell Pro→Agency",
    desc: "Trigger por alto consumo de créditos",
    Icon: Sparkles,
  },
  {
    title: "Referidos",
    desc: "Invita colegas, gana créditos gratis",
    Icon: UserPlus,
  },
  {
    title: "Anti-churn",
    desc: "Rescate por inactividad 7+ días",
    Icon: Users,
  },
];

function TimelineEmails({
  items,
  showTrigger,
}: {
  items: { day?: string; trigger?: string; title: string }[];
  showTrigger?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <div className="relative w-full overflow-x-auto pb-1 pt-1 [scrollbar-width:thin]">
      <div className="flex min-w-min items-start gap-0 px-0.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-start">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.06 * i, duration: 0.3 }}
              className="flex w-[140px] shrink-0 flex-col items-center sm:w-[158px]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-200 bg-cyan-50 text-cyan-800 shadow-sm sm:h-12 sm:w-12">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} aria-hidden />
              </div>
              <p className="mt-1.5 text-center text-[9px] font-bold uppercase tracking-wide text-cyan-800 sm:text-[10px]">
                {showTrigger ? item.trigger : item.day}
              </p>
              <p className="mt-1 px-1 text-center text-[10px] font-medium leading-snug text-slate-700 sm:text-[11px]">
                Email {i + 1}
              </p>
              <p className="mt-0.5 px-0.5 text-center text-[9px] leading-snug text-slate-600 sm:text-[10px]">
                {item.title}
              </p>
            </motion.div>
            {i < items.length - 1 ? (
              <div
                className="mx-0.5 mt-5 hidden h-0.5 w-4 shrink-0 rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500 sm:mx-1 sm:mt-6 sm:block sm:w-6"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function ActiveCampaignMark() {
  return (
    <div
      className="pointer-events-none absolute bottom-1 right-1 z-10 flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white/95 px-2 py-1 shadow-sm sm:bottom-2 sm:right-2"
      aria-label="Herramienta: ActiveCampaign"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#356AE6] text-[10px] font-bold text-white">
        AC
      </span>
      <span className="hidden text-[9px] font-semibold text-slate-700 sm:inline sm:text-[10px]">
        ActiveCampaign
      </span>
    </div>
  );
}

export function TfmEmailMarketingSlide() {
  const reduceMotion = useReducedMotion();
  const [tab, setTab] = useState<TabId>("captacion");

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <ActiveCampaignMark />

      <motion.header
        className="shrink-0 border-b border-slate-200/80 pb-2 pr-16 sm:pr-24"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p
              className="text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[10px]"
              style={{ color: TEAL }}
            >
              Canal destacado
            </p>
            <h1 className="mt-1 text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              Estrategia de Email Marketing
            </h1>
          </div>

          <div className="flex shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-[10px] font-medium transition-all sm:px-3 sm:text-xs",
                  tab === t.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </motion.header>

      <div className="mt-2 flex min-h-0 flex-1 flex-col overflow-hidden sm:mt-3">
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain pr-0.5 [scrollbar-width:thin]">
          {tab === "captacion" && (
            <motion.div
              key="cap"
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="flex flex-col gap-3"
            >
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                Secuencia de bienvenida (4 emails)
              </p>
              <TimelineEmails items={welcomeSequence} />
              <div className="rounded-lg border border-cyan-100 bg-cyan-50/80 px-3 py-2 text-center text-[10px] text-slate-700 sm:text-[11px]">
                Métricas target · Open rate:{" "}
                <strong className="text-slate-900">40%</strong> · CTR:{" "}
                <strong className="text-slate-900">4%</strong> · CPL:{" "}
                <strong className="text-slate-900">4,01€</strong>
              </div>
            </motion.div>
          )}

          {tab === "conversion" && (
            <motion.div
              key="conv"
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="flex flex-col gap-3"
            >
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                Secuencia de upgrade (activada por comportamiento)
              </p>
              <TimelineEmails
                items={upgradeSequence.map((s) => ({
                  trigger: s.trigger,
                  title: s.title,
                }))}
                showTrigger
              />
              <div className="rounded-lg border border-cyan-100 bg-cyan-50/80 px-3 py-2 text-center text-[10px] text-slate-700 sm:text-[11px]">
                Métricas target · Open rate:{" "}
                <strong className="text-slate-900">40%</strong> · CTR:{" "}
                <strong className="text-slate-900">4%</strong> · CPA:{" "}
                <strong className="text-slate-900">13,21€</strong>
              </div>
            </motion.div>
          )}

          {tab === "fidelizacion" && (
            <motion.div
              key="fid"
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="flex flex-col gap-3"
            >
              <p className="text-[10px] font-medium text-slate-500 sm:text-xs">
                Flujos automatizados
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {loyaltyFlows.map(({ title, desc, Icon }, i) => (
                  <motion.div
                    key={title}
                    initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : 0.05 * i }}
                    className="flex gap-2.5 rounded-xl border border-slate-200/90 bg-slate-50/90 px-3 py-2.5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-800">
                      <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold text-slate-900 sm:text-xs">{title}</p>
                      <p className="mt-0.5 text-[10px] leading-snug text-slate-600 sm:text-[11px]">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="rounded-lg border border-cyan-100 bg-cyan-50/80 px-3 py-2 text-center text-[10px] text-slate-700 sm:text-[11px]">
                Churn target &lt; <strong className="text-slate-900">4%</strong> anual ·{" "}
                <strong className="text-slate-900">20%</strong> participación en referidos
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
