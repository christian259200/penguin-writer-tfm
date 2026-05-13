"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode, SVGProps } from "react";
import { useId, useRef } from "react";

import { cn } from "@/lib/utils";

const ACCENT = "#0891b2";

function BrandYoutube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} {...props} aria-hidden>
      <path
        fill="#FF0033"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

function BrandLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} {...props} aria-hidden>
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function BrandInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} {...props} aria-hidden>
      <path
        fill="#E4405F"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
      />
    </svg>
  );
}

type Stage = {
  id: string;
  title: string;
  top: ReactNode | string;
  bottom: string;
  panel: string;
  highlight?: boolean;
};

const stages: Stage[] = [
  {
    id: "awareness",
    title: "Reconocimiento",
    top: (
      <span className="inline-flex flex-col gap-1.5" aria-label="Canales: YouTube, LinkedIn, Instagram">
        <span className="inline-flex items-center gap-1 text-slate-600">
          <BrandYoutube className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
          <BrandLinkedin className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
          <BrandInstagram className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
        </span>
        <span className="min-w-0">
          Descubre Penguin Writer con contenido educativo en LinkedIn y YouTube.
        </span>
      </span>
    ),
    bottom:
      "Identifica que pierde horas semanales creando contenido y busca una voz propia sin sonar genérico.",
    panel: "bg-cyan-50/90 text-slate-800 border-cyan-200/60",
  },
  {
    id: "interest",
    title: "Interés",
    top: "Explora la web, ve demostraciones del servicio y lee casos de uso o testimonios.",
    bottom: "Canales según perfil: LinkedIn, YouTube o redes donde ya publica el usuario.",
    panel: "bg-slate-100 text-slate-800 border-slate-200/80",
  },
  {
    id: "consideration",
    title: "Consideración",
    top: "Compara Penguin Writer frente a ChatGPT, Jasper, VidIQ y herramientas similares.",
    bottom:
      "Evalúa el coste actual (aprox. 80–150 $/mes entre varias suscripciones) frente a un solo flujo integrado.",
    panel: "bg-slate-200/95 text-slate-900 border-slate-300/80",
  },
  {
    id: "intent",
    title: "Intención",
    top: "Activa el modo de prueba (free tier) y prueba el flujo con créditos gratuitos.",
    bottom: "30 créditos gratuitos para validar si encaja con su calendario editorial.",
    panel: "bg-slate-300/90 text-slate-900 border-slate-400/70",
  },
  {
    id: "purchase",
    title: "Compra",
    top: "Elige plan Pro (19 $/mes) o Agency (39 $/mes) y confirma la suscripción.",
    bottom:
      "Fidelización: integra Penguin Writer en el flujo semanal y recomienda a su red profesional.",
    panel:
      "bg-gradient-to-br from-cyan-600 to-cyan-700 text-white border-cyan-500 shadow-md shadow-cyan-900/20",
    highlight: true,
  },
];

function ChevronPanel({
  stage,
  index,
  isFirst,
  isLast,
  reduceMotion,
  inView,
  embedded,
}: {
  stage: Stage;
  index: number;
  isFirst: boolean;
  isLast: boolean;
  reduceMotion: boolean | null;
  inView: boolean;
  embedded: boolean;
}) {
  const n = embedded ? 10 : 14;
  const clip =
    isFirst && isLast
      ? "none"
      : isFirst
        ? `polygon(0 0, calc(100% - ${n}px) 0, 100% 50%, calc(100% - ${n}px) 100%, 0 100%)`
        : isLast
          ? `polygon(${n}px 0, 100% 0, 100% 100%, ${n}px 100%, 0 50%)`
          : `polygon(${n}px 0, calc(100% - ${n}px) 0, 100% 50%, calc(100% - ${n}px) 100%, ${n}px 100%, 0 50%)`;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative border",
        embedded
          ? "flex min-h-0 min-w-0 flex-[1_1_0] flex-col px-2 py-2 sm:px-2.5 sm:py-3"
          : "min-h-[200px] min-w-[168px] flex-[1_1_0] px-4 py-4 sm:min-h-[220px] sm:min-w-[180px] sm:px-5 sm:py-5",
        stage.panel,
        embedded ? "-ml-[9px] first:ml-0 sm:-ml-[11px]" : !isFirst && "-ml-3 sm:-ml-4",
      )}
      style={{
        clipPath: clip === "none" ? undefined : clip,
        zIndex: index + (stage.highlight ? 10 : 1),
      }}
    >
      <p
        className={cn(
          "shrink-0 font-sans font-semibold tracking-tight",
          embedded ? "text-[clamp(9px,1.05vw,11px)] sm:text-[clamp(10px,1vw,12px)]" : "text-xs sm:text-[13px]",
          stage.highlight ? "text-white" : "text-slate-900",
        )}
      >
        {index + 1}. {stage.title}
      </p>
      <div
        className={cn(
          "mt-1.5 min-h-0 flex-1 overflow-hidden leading-tight sm:mt-2",
          embedded
            ? "text-[clamp(9px,1.05vw,11px)] sm:text-[clamp(10px,0.95vw,12px)]"
            : "text-[11px] sm:text-xs leading-snug",
          stage.highlight ? "text-white/95" : "text-slate-700",
          embedded && "[&_*]:leading-snug",
        )}
      >
        <div className={embedded ? "line-clamp-[4] sm:line-clamp-[5]" : ""}>
          {typeof stage.top === "string" ? stage.top : stage.top}
        </div>
      </div>
      <div
        className={cn(
          "mt-1.5 shrink-0 border-t pt-1.5 leading-tight sm:mt-2 sm:pt-2",
          embedded
            ? "text-[clamp(8px,1vw,10px)] sm:text-[clamp(9px,0.95vw,11px)]"
            : "text-[10px] sm:text-[11px] leading-relaxed",
          stage.highlight ? "border-white/25 text-cyan-50" : "border-black/10 text-slate-600",
          embedded && "line-clamp-[3] sm:line-clamp-[4]",
        )}
      >
        {stage.bottom}
      </div>
    </motion.div>
  );
}

export function TfmCustomerJourney({ embedded = false }: { embedded?: boolean }) {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const pathId = useId();
  const inView = useInView(rootRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={rootRef}
      className={cn(
        "font-sans",
        embedded
          ? "flex min-h-0 flex-1 flex-col overflow-hidden"
          : "overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-b from-slate-50/80 to-white p-5 shadow-sm sm:p-7",
      )}
      aria-labelledby={embedded ? undefined : "customer-journey-heading"}
      aria-label={embedded ? "Customer journey de Penguin Writer" : undefined}
    >
      {!embedded ? (
        <>
          <div className="mb-6 flex flex-col gap-1 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="customer-journey-heading"
                className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl"
              >
                Recorrido del cliente
              </h2>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Penguin Writer · mercado objetivo EE. UU. · viaje hasta la suscripción
              </p>
            </div>
            <span className="mt-2 inline-flex w-fit rounded-full border border-cyan-200/80 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-cyan-800 sm:mt-0">
              Customer journey
            </span>
          </div>

          <div className="relative mb-2 hidden md:block">
            <WaveDecoration pathId={pathId} embedded={false} reduceMotion={reduceMotion} inView={inView} />
          </div>

          <div className="hidden gap-0 overflow-x-auto md:flex md:flex-row md:items-stretch md:overflow-x-visible md:pb-1">
            {stages.map((stage, i) => (
              <ChevronPanel
                key={stage.id}
                stage={stage}
                index={i}
                isFirst={i === 0}
                isLast={i === stages.length - 1}
                reduceMotion={reduceMotion}
                inView={inView}
                embedded={false}
              />
            ))}
          </div>

          <ol className="relative space-y-0 md:hidden">
            <div
              className="absolute top-2 bottom-2 left-[11px] w-0.5 bg-gradient-to-b from-cyan-200 via-cyan-400/60 to-cyan-600"
              aria-hidden
            />
            {stages.map((stage, i) => (
              <motion.li
                key={stage.id}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.05 * i }}
                className="relative pb-8 pl-9 last:pb-0"
              >
                <span
                  className={cn(
                    "absolute top-1 left-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold shadow-sm",
                    stage.highlight
                      ? "bg-cyan-600 text-white"
                      : "bg-cyan-100 text-cyan-800 ring-1 ring-cyan-200",
                  )}
                >
                  {i + 1}
                </span>
                <div
                  className={cn(
                    "rounded-xl border p-4",
                    stage.panel,
                    stage.highlight && "ring-2 ring-cyan-400/30",
                  )}
                >
                  <p
                    className={cn(
                      "text-[13px] font-semibold tracking-tight",
                      stage.highlight ? "text-white" : "text-slate-900",
                    )}
                  >
                    {i + 1}. {stage.title}
                  </p>
                  <div
                    className={cn(
                      "mt-2 text-xs leading-snug",
                      stage.highlight ? "text-white/95" : "text-slate-700",
                    )}
                  >
                    {typeof stage.top === "string" ? stage.top : stage.top}
                  </div>
                  <p
                    className={cn(
                      "mt-2 border-t pt-2 text-[11px] leading-relaxed",
                      stage.highlight
                        ? "border-white/25 text-cyan-50"
                        : "border-black/10 text-slate-600",
                    )}
                  >
                    {stage.bottom}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-hidden sm:gap-2">
          <div className="shrink-0 overflow-hidden">
            <WaveDecoration pathId={pathId} embedded reduceMotion={reduceMotion} inView={inView} />
          </div>
          <div className="flex min-h-0 flex-1 flex-row items-stretch overflow-hidden">
            {stages.map((stage, i) => (
              <ChevronPanel
                key={stage.id}
                stage={stage}
                index={i}
                isFirst={i === 0}
                isLast={i === stages.length - 1}
                reduceMotion={reduceMotion}
                inView={inView}
                embedded
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function WaveDecoration({
  pathId,
  embedded,
  reduceMotion,
  inView,
}: {
  pathId: string;
  embedded: boolean;
  reduceMotion: boolean | null;
  inView: boolean;
}) {
  return (
    <svg
      className={cn("w-full text-slate-300", embedded ? "h-7 sm:h-9" : "h-14")}
      viewBox="0 0 1000 56"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        id={pathId}
        d="M 0 36 Q 100 12 200 36 T 400 36 T 600 36 T 800 36 T 1000 36"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.4 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: reduceMotion ? 0 : 1.1, ease: "easeInOut" }}
      />
      {[0.1, 0.3, 0.5, 0.7, 0.9].map((x, i) => {
        const cx = x * 1000;
        const cy = 36 + (i % 2 === 0 ? -6 : 6);
        const r = embedded ? 12 : 16;
        const fontSize = embedded ? 14 : 17;
        return (
          <g key={i} transform={`translate(${cx},${cy})`}>
            <motion.circle
              cx={0}
              cy={0}
              r={r}
              fill={ACCENT}
              stroke="white"
              strokeWidth={embedded ? 1.75 : 2.25}
              initial={reduceMotion ? false : { scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{
                delay: reduceMotion ? 0 : 0.15 + i * 0.08,
                type: "spring",
                stiffness: 400,
                damping: 22,
              }}
            />
            <motion.text
              x={0}
              y={0}
              dy="0.35em"
              textAnchor="middle"
              fill="#fff"
              fontWeight={700}
              fontSize={fontSize}
              style={{ fontFamily: "var(--font-dm-sans), ui-sans-serif, system-ui, sans-serif" }}
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{
                duration: reduceMotion ? 0 : 0.25,
                delay: reduceMotion ? 0 : 0.22 + i * 0.08,
                ease: "easeOut",
              }}
            >
              {i + 1}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}
