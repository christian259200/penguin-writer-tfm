import type { Metadata } from "next";

import { TfmEmailMarketingSlide } from "@/components/tfm/tfm-email-marketing-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Estrategia de Email Marketing · TFM Penguin Writer",
  description:
    "Captación, conversión y fidelización por email con ActiveCampaign: bienvenida, upgrade y automatizaciones.",
};

export default function EmailMarketingPage() {
  return (
    <TfmPageShell currentPath="/email-marketing">
      <TfmEmailMarketingSlide />
    </TfmPageShell>
  );
}
