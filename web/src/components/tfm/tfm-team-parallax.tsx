"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import Image from "next/image";

const NAVY = "#0b1d2e";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Bianka Monge",
    role: "Product & Strategy",
    image: "/images/team/bianka.png",
  },
  {
    name: "Christian Monge",
    role: "Tech Lead",
    image: "/images/team/christian.png",
  },
  {
    name: "Maria Meya",
    role: "Marketing",
    image: "/images/team/maria.png",
  },
  {
    name: "Maite Pedraza",
    role: "Content",
    image: "/images/team/maite.png",
  },
  {
    name: "Carmen Salcedo",
    role: "Multimedia",
    image: "/images/team/carmen.png",
  },
];

export function TfmTeamParallax() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      ".team-card",
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.5, delay: stagger(0.1) }
    );
  }, [animate]);

  return (
    <div
      ref={scope}
      className="flex h-dvh w-full flex-col items-center justify-center overflow-hidden bg-white px-4"
    >
      {/* Título arriba */}
      <motion.div
        className="mb-8 text-center sm:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ color: NAVY }}
        >
          Este es el equipo
        </h1>
        <p className="mt-3 text-sm text-slate-500 sm:text-base">
          TFM Penguin Writer · EAE Business School
        </p>
        <motion.button
          className="mt-4 rounded-full px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          style={{ backgroundColor: NAVY }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => (window.location.href = "/mapa-contenidos")}
        >
          Explorar el TFM
        </motion.button>
      </motion.div>

      {/* Fotos en fila */}
      <div className="flex flex-wrap items-end justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            className="team-card flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Imagen */}
            <div className="relative h-32 w-28 overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:h-40 sm:w-36 md:h-48 md:w-40 lg:h-56 lg:w-44">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            
            {/* Nombre debajo */}
            <div className="mt-3 text-center">
              <p
                className="text-xs font-semibold sm:text-sm md:text-base"
                style={{ color: NAVY }}
              >
                {member.name}
              </p>
              <p className="text-[10px] text-slate-500 sm:text-xs">
                {member.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
