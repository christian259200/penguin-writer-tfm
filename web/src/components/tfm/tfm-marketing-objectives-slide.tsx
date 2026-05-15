"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const TEAL = "#0891b2";
const PILL_BG = "linear-gradient(100deg, #0284c7 0%, #0891b2 45%, #0d9488 100%)";

const EYEBROW = "Plan de marketing digital";

const generalObjectives: { n: string; text: string }[] = [
  { n: "01", text: "Generar reconocimiento de marca." },
  { n: "02", text: "Atraer tráfico cualificado." },
  { n: "03", text: "Convertir usuarios en clientes." },
  { n: "04", text: "Construir autoridad en el sector." },
];

const specificObjectives: { n: string; text: string }[] = [
  {
    n: "01",
    text: "Alcanzar 250.000 impresiones mensuales en LinkedIn en 12 meses.",
  },
  {
    n: "02",
    text: "Generar 3.000 leads mensuales cualificados en 12 meses.",
  },
  {
    n: "03",
    text: "Conseguir una conversión del 7% a clientes de pago en 12 meses.",
  },
  {
    n: "04",
    text: "Consolidar liderazgo en creación de contenido con voz de marca en 12 meses.",
  },
];

function ObjectiveBlock({
  title,
  subtitle,
  items,
  sectionDelay = 0,
  withTopRule = false,
  className,
}: {
  title: string;
  subtitle: string;
  items: { n: string; text: string }[];
  sectionDelay?: number;
  withTopRule?: boolean;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const fadeIn = {
    hidden: reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        delay: reduceMotion ? 0 : sectionDelay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      className={cn(
        "shrink-0",
        withTopRule && "border-t border-slate-200/80 pt-5 sm:pt-6",
        className,
      )}
    >
      <motion.header
        className="shrink-0 border-b border-slate-200/80 pb-2"
        initial="hidden"
        animate="show"
        variants={fadeIn}
      >
        <p
          className="text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[10px]"
          style={{ color: TEAL }}
        >
          {EYEBROW}
        </p>
        <h2 className="mt-1 text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
          {title}
        </h2>
        <p className="mt-0.5 text-xs leading-snug text-slate-600 sm:text-sm">
          {subtitle}
        </p>
      </motion.header>

      <ul className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-2.5">
        {items.map((item, i) => (
          <motion.li
            key={`${title}-${item.n}`}
            initial={reduceMotion ? {} : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.35,
              delay: reduceMotion ? 0 : sectionDelay + 0.08 + i * 0.06,
            }}
          >
            <div
              className={cn(
                "flex items-center gap-3 rounded-full px-4 py-2.5 text-white shadow-md sm:gap-4 sm:px-5 sm:py-3",
              )}
              style={{ background: PILL_BG }}
            >
              <span
                className="shrink-0 text-lg font-black tabular-nums sm:text-xl"
                style={{ textShadow: "0 1px 0 rgba(0,0,0,0.12)" }}
              >
                {item.n}
              </span>
              <span className="min-w-0 text-[11px] font-medium leading-snug sm:text-sm">
                {item.text}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export function TfmMarketingObjectivesSlide() {
  const sectionStagger = 0.18;

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
      <div className="mt-0 flex min-h-0 flex-1 flex-col gap-0 overflow-y-auto overscroll-contain pr-0.5 pb-1 [scrollbar-width:thin]">
        <ObjectiveBlock
          title="Objetivos generales"
          subtitle="de nuestras acciones de marketing digital"
          items={generalObjectives}
          sectionDelay={0}
          className="mb-[min(48vh,28rem)] sm:mb-[min(52vh,32rem)]"
        />
        <ObjectiveBlock
          title="Objetivos específicos"
          subtitle="de nuestras acciones de marketing digital"
          items={specificObjectives}
          sectionDelay={sectionStagger}
          withTopRule
        />
      </div>
    </div>
  );
}
