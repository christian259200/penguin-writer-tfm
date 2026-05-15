"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const TEAL = "#0891b2";

export function TfmClosingSlide() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex h-full min-h-0 flex-1 flex-col items-center justify-center px-4 py-6 text-center sm:px-8">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex max-w-2xl flex-col items-center gap-5 sm:gap-6"
      >
        <Image
          src="/images/penguin-logo.png"
          alt="Penguin Writer"
          width={160}
          height={160}
          className="h-24 w-auto object-contain sm:h-32 md:h-40"
          priority
        />
        <div className="space-y-2">
          <p className="text-sm font-semibold leading-snug text-slate-700 sm:text-base">
            Bianka Monge · Christian Monge · Maria Meya · Maite Pedraza · Carmen Salcedo
          </p>
          <p className="text-xs text-slate-500 sm:text-sm">
            Máster en Marketing Digital — EAE Business School Madrid · 2025
          </p>
        </div>
        <motion.p
          className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
          style={{ color: TEAL }}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.4 }}
        >
          ¿Preguntas?
        </motion.p>
      </motion.div>
    </div>
  );
}
