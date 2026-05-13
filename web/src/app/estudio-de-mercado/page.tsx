import type { Metadata } from "next";

import { TfmMarketAnalysis } from "@/components/tfm/tfm-market-analysis";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Estudio de mercado · TFM Penguin Writer",
  description: "TAM, SAM, SOM — análisis de mercado del TFM Penguin Writer.",
};

export default function EstudioMercadoPage() {
  return (
    <TfmPageShell currentPath="/estudio-de-mercado">
      <TfmMarketAnalysis />
    </TfmPageShell>
  );
}
