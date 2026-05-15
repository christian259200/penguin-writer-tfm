import type { Metadata } from "next";

import { TfmMarketingObjectivesSlide } from "@/components/tfm/tfm-marketing-objectives-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Objetivos de marketing digital · TFM Penguin Writer",
  description:
    "Objetivos generales y específicos del plan de marketing digital de Penguin Writer: reconocimiento, tráfico, conversión, autoridad; KPIs en LinkedIn, leads y voz de marca.",
};

export default function ObjetivosMarketingPage() {
  return (
    <TfmPageShell currentPath="/objetivos-marketing">
      <TfmMarketingObjectivesSlide />
    </TfmPageShell>
  );
}
