import type { Metadata } from "next";

import { TfmKpisDashboardSlide } from "@/components/tfm/tfm-kpis-dashboard-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "KPIs y cuadro de mando · TFM Penguin Writer",
  description:
    "KPIs por fase del embudo: impresiones, clics, CTR, leads, conversiones y CPA, con fila total.",
};

export default function KpisMarketingPage() {
  return (
    <TfmPageShell currentPath="/kpis-marketing">
      <TfmKpisDashboardSlide />
    </TfmPageShell>
  );
}
