"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { TfmSlideJumpMenu } from "@/components/tfm/tfm-slide-jump-menu";
import { tfmPresentationSlides } from "@/lib/tfm-slide-routes";
import { cn } from "@/lib/utils";

const ACCENT = "#0891b2";

export function TfmSlideHeader() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const navRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  /* Desplaza la pastilla activa al centro del scroll horizontal */
  useEffect(() => {
    const container = navRef.current;
    const active = activeRef.current;
    if (!container || !active) return;
    const containerRect = container.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const offset =
      activeRect.left - containerRect.left - containerRect.width / 2 + activeRect.width / 2;
    container.scrollBy({ left: offset, behavior: reduceMotion ? "instant" : "smooth" });
  }, [pathname, reduceMotion]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 shadow-[0_1px_16px_-4px_rgba(15,23,42,0.08)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[100rem] items-center gap-3 px-3 py-2 sm:gap-4 sm:px-5">

        {/* Logo + marca */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 rounded-md"
          aria-label="Inicio – TFM Penguin Writer"
        >
          <Image
            src="/images/penguin-logo.png"
            alt=""
            width={26}
            height={26}
            className="h-[26px] w-[26px] shrink-0"
            priority
          />
          <span className="hidden text-[13px] font-semibold tracking-tight text-slate-800 sm:block">
            Penguin Writer
          </span>
        </Link>

        {/* Separador */}
        <span className="hidden h-5 w-px shrink-0 bg-slate-200 sm:block" aria-hidden />

        {/* Pastillas de navegación */}
        <div
          ref={navRef}
          className="no-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto scroll-smooth"
          role="navigation"
          aria-label="Diapositivas del TFM"
        >
          {tfmPresentationSlides.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                ref={isActive ? activeRef : undefined}
                prefetch
                className={cn(
                  "relative shrink-0 cursor-pointer rounded-full px-3 py-1 text-[11px] font-medium whitespace-nowrap transition-colors duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-1",
                  isActive
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-900",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {/* Fondo animado de la pastilla activa (layoutId = deslizamiento suave) */}
                {isActive && (
                  <motion.span
                    layoutId="slide-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 36 }
                    }
                    aria-hidden
                  />
                )}
                {/* Número de diapositiva */}
                <span
                  className={cn(
                    "relative mr-1 font-mono text-[9px] tabular-nums",
                    isActive ? "text-cyan-100" : "text-slate-400",
                  )}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden shrink-0 sm:block">
          <TfmSlideJumpMenu variant="header" />
        </div>
      </div>
    </header>
  );
}
