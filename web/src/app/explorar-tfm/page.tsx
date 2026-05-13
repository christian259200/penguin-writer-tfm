import type { Metadata } from "next";

import { TfmTeamParallax } from "@/components/tfm/tfm-team-parallax";

export const metadata: Metadata = {
  title: "Explorar el TFM · Penguin Writer · EAE",
  description:
    "Índice del Trabajo Fin de Máster: acceso a justificación, mercado, producto, arquitectura y el resto de secciones académicas.",
};

export default function ExplorarTfmPage() {
  return <TfmTeamParallax />;
}
