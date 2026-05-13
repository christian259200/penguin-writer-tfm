"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CircleArrowRight, MoreHorizontal, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

import { tfmMainNav } from "@/lib/tfm-nav";
import { cn } from "@/lib/utils";

/** Tinta serif / textos oscuros (ref. ~#0b1d2e), también para el logotipo sans alineado con el resto */
const NAVY = "#0b1d2e";
const TEAL = "#00a3a3";

/** Vídeo en `public/videos/` (copia del archivo en Descargas). */
const HERO_VIDEO_SRC = "/videos/hero-clouds-penguin.mp4";

type MotionLevel = "high" | "low" | "off";

export function TfmHiflyHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionLevel, setMotionLevel] = useState<MotionLevel>("high");
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  return (
    <section
      className={cn(
        "relative h-full min-h-0 w-full overflow-hidden rounded-none md:rounded-none",
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
          className="flex items-center gap-2 sm:gap-3"
        >
          <Image
            src="/images/penguin-logo.png"
            alt="Penguin Writer"
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 drop-shadow-md"
          />
          <span
            className="text-lg font-bold tracking-tight sm:text-xl"
            style={{
              color: NAVY,
              letterSpacing: "-0.02em",
              textShadow: "0 1px 0 rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.35)",
            }}
          >
            Penguin Writer
          </span>
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

      {/* Bottom left copy - estilo KRAI grande */}
      <div className="absolute bottom-24 left-0 right-0 z-10 px-4 sm:bottom-28 sm:px-5 md:left-3 md:max-w-3xl md:px-0 md:pl-6 lg:max-w-2xl">
        <p
          className="text-[clamp(2.5rem,10vw,6rem)] font-normal leading-[0.9] tracking-[0.01em] uppercase"
          style={{
            fontFamily: "var(--font-bebas), Impact, sans-serif",
            color: NAVY,
            textShadow: "0 2px 0 rgba(255,255,255,0.5), 0 0 30px rgba(255,255,255,0.4)",
          }}
        >
          Penguin
          <span className="relative inline-block ml-2 sm:ml-3">
            Writer
            <span 
              className="absolute -top-1 -right-3 sm:-right-4 text-[0.18em]"
              style={{ color: TEAL }}
            >
              *
            </span>
          </span>
        </p>
        <p 
          className="mt-4 text-[13px] leading-relaxed sm:text-[0.9375rem] max-w-md"
          style={{ color: `${NAVY}dd` }}
        >
          TFM académico de SaaS de creación de contenido. Sitio del máster EAE · Navegación completa en el menú.
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
          href="/explorar-tfm"
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
          href="/explorar-tfm"
          className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/95 px-3 py-2.5 text-xs font-medium shadow-md"
          style={{ color: NAVY }}
        >
          <CircleArrowRight className="h-4 w-4" style={{ color: TEAL }} />
          Explorar el TFM
        </Link>
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
                <li className="mb-4">
                  <Link
                    href="/explorar-tfm"
                    onClick={() => setMenuOpen(false)}
                    className="block text-2xl font-light sm:text-3xl md:text-4xl"
                    style={{ color: TEAL }}
                  >
                    Explorar el TFM
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
