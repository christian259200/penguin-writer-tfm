"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const segments = [
  {
    id: "tam",
    label: "TAM",
    sublabel: "Economía Global de Creadores",
    value: "$205.25",
    unit: "BILLONES",
    size: 1,           // factor de tamaño relativo
    bg: "#1d4ed8",     // azul intenso
    text: "white",
  },
  {
    id: "sam",
    label: "SAM",
    sublabel: "Mercado de Software de IA para Contenido en EE.UU.",
    value: "$198.4",
    unit: "MILLONES",
    size: 0.72,
    bg: "#60a5fa",     // azul medio
    text: "white",
  },
  {
    id: "som",
    label: "SOM",
    sublabel: "0.25% del SAM · Miami, Texas y California",
    value: "$500K",
    unit: "USD",
    size: 0.44,
    bg: "#bfdbfe",     // azul claro
    text: "#1e3a5f",
  },
] as const;

const BASE_R = 148; // radio mayor en px (SVG viewBox)

export function TfmTamSamSom() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="overflow-hidden rounded-2xl bg-[#0a0e1a] px-6 py-8 sm:px-8 sm:py-10"
      aria-label="Análisis TAM, SAM, SOM"
    >
      {/* Título */}
      <motion.h2
        className="mb-8 font-bold text-white"
        style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.1 }}
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        TAM, SAM, SOM
      </motion.h2>

      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
        {/* Círculos concéntricos — SVG */}
        <div className="relative shrink-0">
          <svg
            viewBox="0 0 300 300"
            width={300}
            height={300}
            className="overflow-visible"
            aria-hidden
          >
            {[...segments].reverse().map((seg, revIdx) => {
              const r = BASE_R * seg.size;
              const cx = 150;
              const cy = 150;
              const idx = segments.length - 1 - revIdx; // orden real para stagger
              return (
                <motion.circle
                  key={seg.id}
                  cx={cx}
                  cy={cy}
                  r={r}
                  fill={seg.bg}
                  initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  style={{ originX: `${cx}px`, originY: `${cy}px`, transformBox: "fill-box" }}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 240,
                          damping: 24,
                          delay: 0.1 + idx * 0.15,
                        }
                  }
                />
              );
            })}

            {/* Etiquetas dentro de los círculos */}
            {segments.map((seg, idx) => {
              const r = BASE_R * seg.size;
              return (
                <motion.text
                  key={`lbl-${seg.id}`}
                  x={150}
                  y={150 - r * 0.22}
                  textAnchor="middle"
                  fill={seg.text}
                  fontSize={r * 0.24}
                  fontWeight="700"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + idx * 0.15 }}
                >
                  {seg.value}
                </motion.text>
              );
            })}
            {segments.map((seg, idx) => {
              const r = BASE_R * seg.size;
              return (
                <motion.text
                  key={`unit-${seg.id}`}
                  x={150}
                  y={150 - r * 0.22 + r * 0.22}
                  textAnchor="middle"
                  fill={seg.text}
                  fontSize={r * 0.15}
                  fontWeight="600"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.15 }}
                >
                  {seg.unit}
                </motion.text>
              );
            })}
          </svg>
        </div>

        {/* Leyenda lateral */}
        <div className="flex flex-1 flex-col gap-5">
          {segments.map((seg, idx) => (
            <motion.div
              key={seg.id}
              className="flex items-start gap-3"
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.25 + idx * 0.15 }}
            >
              {/* Punto de color */}
              <span
                className="mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-white/30"
                style={{ backgroundColor: seg.bg }}
                aria-hidden
              />
              <div>
                <p className="text-[15px] font-semibold leading-snug text-white">
                  <span className="mr-1.5 text-cyan-300">{seg.label}–</span>
                  {seg.sublabel}
                </p>
                <p className="mt-0.5 text-[13px] font-bold text-white/60">
                  {seg.value} {seg.unit}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Fuentes */}
          <motion.p
            className="mt-3 border-t border-white/10 pt-3 text-[10px] leading-relaxed text-white/35"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Fuentes: Market.us (2025). Global creator economy market size ·{" "}
            Grand View Research (2024). U.S. AI-powered content creation market size
          </motion.p>
        </div>
      </div>
    </section>
  );
}
