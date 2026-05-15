import type { Metadata } from "next";

import { TfmMarketingFunnelSlide } from "@/components/tfm/tfm-marketing-funnel-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Embudo de conversión proyectado · TFM Penguin Writer",
  description:
    "Proyección de impresiones, clics, leads y conversiones con KPIs: CTR, CPL, CPA y LTV/CAC.",
};

export default function MarketingEmbudoPage() {
  return (
    <TfmPageShell currentPath="/marketing-embudo">
      <TfmMarketingFunnelSlide />
    </TfmPageShell>
  );
}
