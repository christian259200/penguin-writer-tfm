"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CircleArrowRight,
  MoreHorizontal,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import { tfmMainNav } from "@/lib/tfm-nav";
import { cn } from "@/lib/utils";

/** Tinta serif / textos oscuros (ref. ~#0b1d2e), también para el logotipo sans alineado con el resto */
const NAVY = "#0b1d2e";
const TEAL = "#00a3a3";

const NEWS = [
  {
    title: "Segunda entrega: sitio del TFM navegable en vivo para EAE.",
    category: "Entrega",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Estudio de mercado: PESTEL y encaje España → Estados Unidos.",
    category: "Mercado",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Tres módulos del SaaS: análisis, voz con arquetipos, calendario.",
    category: "Producto",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Arquitectura, marketing del sitio y declaración de uso de IA.",
    category: "Requisitos",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Defensa presencial: demo en tiempo real y vídeos en Multimedia.",
    category: "Defensa",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Equipo: cinco integrantes del grupo TFM Penguin Writer.",
    category: "Grupo",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop",
  },
] as const;

/** Vídeo en `public/videos/` (copia del archivo en Descargas). */
const HERO_VIDEO_SRC = "/videos/hero-clouds-penguin.mp4";

type MotionLevel = "high" | "low" | "off";

export function TfmHiflyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slide, setSlide] = useState(0);
  const [motionLevel, setMotionLevel] = useState<MotionLevel>("high");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const len = NEWS.length;
  const prevSlide = useCallback(() => setSlide((s) => (s - 1 + len) % len), [len]);
  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % len), [len]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (motionLevel === "off") {
      v.pause();
      return;
    }
    v.playbackRate = motionLevel === "low" ? 0.55 : 1;
    void v.play().catch(() => {});
  }, [motionLevel]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const v = videoRef.current;
      if (!v) return;
      if (mq.matches) {
        v.pause();
        return;
      }
      if (motionLevel !== "off") {
        v.playbackRate = motionLevel === "low" ? 0.55 : 1;
        void v.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [motionLevel]);

  useEffect(() => {
    if (motionLevel !== "high") return;
    const id = setInterval(nextSlide, 6500);
    return () => clearInterval(id);
  }, [motionLevel, nextSlide]);

  const cardTransitionQuick = motionLevel === "off";

  return (
    <section
      className={cn(
        "relative min-h-screen w-full overflow-hidden rounded-none md:rounded-none",
        "[font-family:var(--font-dm-sans),system-ui,sans-serif]",
      )}
    >
      {/* Capa 0: vídeo a pantalla completa detrás de todo */}
      <div className="absolute inset-0 z-0 bg-[#7eb8e4]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          filter: motionLevel === "off" ? "saturate(0.92)" : undefined,
        }}
      >
        {/* Velo para legibilidad: refuerza estilo Hi Fly sobre el metraje */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-sky-100/15 to-white/45"
          aria-hidden
        />
      </div>

      <div
        className={cn(
          "noise-overlay pointer-events-none absolute inset-0 z-[2] mix-blend-overlay opacity-35",
          motionLevel === "off" && "opacity-15",
        )}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-[#0c2340]/15 via-transparent to-white/30"
        aria-hidden
      />

      {/* Side badges — academic nod to award strip */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 pl-1 md:flex"
        aria-hidden
      >
        <div
          className="rounded-r-md border border-white/50 bg-white/85 px-2 py-3 text-[10px] font-semibold tracking-widest shadow-sm backdrop-blur-sm"
          style={
            {
              color: NAVY,
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            } as CSSProperties
          }
        >
          TFM
        </div>
        <div
          className="rounded-r-md border border-white/50 bg-white/85 px-2 py-3 text-[10px] font-semibold tracking-widest shadow-sm backdrop-blur-sm"
          style={
            {
              color: NAVY,
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            } as CSSProperties
          }
        >
          EAE
        </div>
      </div>

      {/* Top bar */}
      <header className="absolute left-0 right-0 top-0 z-20 flex items-start justify-between px-5 pt-6 sm:px-8 sm:pt-8 md:pl-16">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight sm:text-2xl"
          style={{
            color: NAVY,
            letterSpacing: "-0.02em",
            textShadow: "0 1px 0 rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.35)",
          }}
        >
          Penguin Writer
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-md backdrop-blur-sm transition hover:bg-white"
          style={{ color: NAVY }}
          aria-label="Abrir menú"
        >
          <MoreHorizontal className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </header>

      {/* Bottom left copy */}
      <div className="absolute bottom-28 left-0 right-0 z-10 px-5 sm:bottom-32 sm:px-8 md:left-8 md:max-w-2xl md:px-0 md:pl-12 lg:max-w-xl">
        <p
          className="text-[clamp(1.35rem,4.5vw,2.35rem)] font-normal leading-[1.15] tracking-[-0.02em]"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            color: NAVY,
            textShadow: "0 1px 0 rgba(255,255,255,0.45), 0 0 24px rgba(255,255,255,0.35)",
          }}
        >
          TFM académico de SaaS de creación de contenido
        </p>
        <p className="mt-4 text-sm sm:text-base" style={{ color: `${NAVY}e6` }}>
          Sitio del máster EAE · Navegación completa en el menú. Para la demo visual del hero:{" "}
          <Link href="/demo" className="font-medium underline decoration-2 underline-offset-4" style={{ color: TEAL }}>
            abrir aquí
          </Link>
          .
        </p>
      </div>

      {/* Floating CTA + connector line */}
      <div className="pointer-events-none absolute right-[8%] top-[38%] z-10 hidden lg:block xl:right-[12%]">
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          className="absolute -left-[72px] -top-8 text-white/90 drop-shadow"
          aria-hidden
        >
          <path
            d="M 110 10 Q 40 40 18 85"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="4 3"
            opacity={0.85}
          />
        </svg>
        <Link
          href="/justificacion"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/98 px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-md transition hover:bg-white"
          style={{ color: NAVY }}
        >
          <CircleArrowRight className="h-5 w-5" style={{ color: TEAL }} aria-hidden />
          Explorar el TFM
          <ChevronRight className="h-4 w-4 opacity-60" aria-hidden />
        </Link>
      </div>
      <div className="pointer-events-auto absolute right-5 top-[42%] z-10 lg:hidden">
        <Link
          href="/justificacion"
          className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-3 py-2.5 text-xs font-medium shadow-md"
          style={{ color: NAVY }}
        >
          <CircleArrowRight className="h-4 w-4" style={{ color: TEAL }} />
          Explorar el TFM
        </Link>
      </div>

      {/* News card (compacto) */}
      <div className="absolute bottom-6 right-4 z-10 w-[min(100%-2rem,320px)] sm:bottom-8 sm:right-8 md:right-10">
        <div className="flex overflow-hidden rounded-md border border-white/60 bg-white shadow-md">
          <div className="relative h-[88px] w-[min(36%,108px)] shrink-0 sm:h-[96px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: cardTransitionQuick ? 0 : 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={NEWS[slide]!.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="108px"
                  priority={slide === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex min-w-0 flex-1 flex-col justify-between gap-1 px-2 py-2 sm:px-2.5 sm:py-2">
            <p
              className="line-clamp-2 text-[11px] font-semibold leading-snug sm:text-[12px]"
              style={{ color: NAVY }}
            >
              {NEWS[slide]!.title}
            </p>
            <div className="flex items-center justify-between gap-1.5 border-t border-gray-100 pt-1.5">
              <div
                className="flex min-w-0 items-center gap-1.5 text-[10px] sm:text-[11px]"
                style={{ color: NAVY }}
              >
                <span className="tabular-nums opacity-80">
                  {String(slide + 1).padStart(2, "0")} / {String(len).padStart(2, "0")}
                </span>
                <span className="h-px w-4 shrink-0" style={{ backgroundColor: TEAL }} />
                <span className="truncate font-medium">{NEWS[slide]!.category}</span>
              </div>
              <div className="flex shrink-0 gap-0">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="rounded p-0.5 text-gray-400 transition hover:opacity-100"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="rounded p-0.5 transition hover:opacity-80"
                  style={{ color: NAVY }}
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Motion strip — bottom left */}
      <div className="absolute bottom-4 left-4 z-10 flex flex-wrap items-center gap-2 text-[11px] sm:bottom-6 sm:left-6 md:left-12" style={{ color: `${NAVY}b3` }}>
        <span className="sr-only">Preferencia de animación del fondo</span>
        <span className="rounded-full bg-white/80 px-1 py-0.5 backdrop-blur" aria-hidden>
          ⚙
        </span>
        <span className="hidden sm:inline">Animación</span>
        {(["high", "low", "off"] as const).map((lvl) => (
          <button
            key={lvl}
            type="button"
            onClick={() => setMotionLevel(lvl)}
            className={cn(
              "rounded px-1.5 py-0.5 font-semibold uppercase tracking-wide transition",
              motionLevel === lvl ? "" : "opacity-55 hover:opacity-90",
            )}
            style={motionLevel === lvl ? { color: TEAL } : { color: NAVY }}
          >
            {lvl === "high" ? "Alta" : lvl === "low" ? "Baja" : "Off"}
          </button>
        ))}
      </div>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white"
            aria-label="Menú principal del TFM"
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full shadow-md transition hover:opacity-90 sm:right-8 sm:top-8"
              style={{ backgroundColor: NAVY, color: "#fff" }}
              aria-label="Cerrar menú"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <div className="flex flex-1 flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32">
              <ul className="flex flex-col gap-1 sm:gap-2">
                <li className="mb-4">
                  <Link
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl font-light sm:text-3xl md:text-4xl"
                    style={{ color: NAVY }}
                  >
                    Inicio
                  </Link>
                </li>
                {tfmMainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1 text-2xl font-light tracking-tight transition hover:opacity-75 sm:text-3xl md:text-4xl"
                      style={{ color: NAVY }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100 px-8 py-6 sm:px-16 md:px-24 lg:px-32">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Animación de fondo
                  </p>
                  <div className="mt-2 flex gap-3 text-sm">
                    {(["high", "low", "off"] as const).map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setMotionLevel(lvl)}
                        className={cn(
                          "font-semibold uppercase",
                          motionLevel === lvl ? "" : "text-gray-400",
                        )}
                        style={motionLevel === lvl ? { color: TEAL } : undefined}
                      >
                        {lvl === "high" ? "Alta" : lvl === "low" ? "Baja" : "Off"}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-400">EAE Business School · Trabajo Fin de Máster</p>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
