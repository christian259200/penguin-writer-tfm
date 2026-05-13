import type { Metadata } from "next";

import { TfmContentMapSlide } from "@/components/tfm/tfm-content-map-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Mapa de contenidos · TFM Penguin Writer",
  description: "Clasificación de contenidos y estructura del TFM.",
};

export default function MapaContenidosPage() {
  return (
    <TfmPageShell currentPath="/mapa-contenidos">
      <TfmContentMapSlide />
    </TfmPageShell>
  );
}
