import type { Metadata } from "next";

import { TfmContingencyPlanSlide } from "@/components/tfm/tfm-contingency-plan-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Plan de contingencias · TFM Penguin Writer",
  description:
    "Gestión de riesgos por fase del embudo: triggers numéricos y acciones correctivas (CTR, CPL, CPA, churn).",
};

export default function PlanContingenciasPage() {
  return (
    <TfmPageShell currentPath="/plan-contingencias">
      <TfmContingencyPlanSlide />
    </TfmPageShell>
  );
}
