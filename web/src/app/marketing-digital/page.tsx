import type { Metadata } from "next";

import { TfmMarketingSlide } from "@/components/tfm/tfm-marketing-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Marketing digital · TFM Penguin Writer",
  description: "Reparto del presupuesto de marketing por fase del embudo (captación, awareness, conversión, fidelización).",
};

export default function MarketingDigitalPage() {
  return (
    <TfmPageShell currentPath="/marketing-digital">
      <TfmMarketingSlide />
    </TfmPageShell>
  );
}
