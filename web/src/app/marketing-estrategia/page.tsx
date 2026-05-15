import type { Metadata } from "next";

import { TfmMarketingStrategySlide } from "@/components/tfm/tfm-marketing-strategy-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Estrategia por fases del embudo · TFM Penguin Writer",
  description:
    "Plan de marketing digital: Awareness, Captación, Conversión y Fidelización con canales y presupuesto 100.000€ en EE. UU.",
};

export default function MarketingEstrategiaPage() {
  return (
    <TfmPageShell currentPath="/marketing-estrategia">
      <TfmMarketingStrategySlide />
    </TfmPageShell>
  );
}
