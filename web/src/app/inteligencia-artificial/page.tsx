import type { Metadata } from "next";

import { TfmAISlide } from "@/components/tfm/tfm-ai-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Uso de IA · TFM Penguin Writer",
  description: "Inteligencia artificial en Penguin Writer y declaración de uso EAE.",
};

export default function InteligenciaArtificialPage() {
  return (
    <TfmPageShell currentPath="/inteligencia-artificial">
      <TfmAISlide />
    </TfmPageShell>
  );
}
