import type { Metadata } from "next";

import { TfmConclusionsSlide } from "@/components/tfm/tfm-conclusions-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Conclusiones del proyecto · TFM Penguin Writer",
  description:
    "Síntesis: propuesta de valor, mercado EE. UU., estrategia medible y escalabilidad del modelo Penguin Writer.",
};

export default function ConclusionesPage() {
  return (
    <TfmPageShell currentPath="/conclusiones">
      <TfmConclusionsSlide />
    </TfmPageShell>
  );
}
