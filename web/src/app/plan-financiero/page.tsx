import type { Metadata } from "next";

import { TfmFinancialPlanSlide } from "@/components/tfm/tfm-financial-plan-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Proyección financiera a 3 años · TFM Penguin Writer",
  description:
    "Ingresos, margen bruto, marketing, EBITDA y beneficio neto (Año 1–3); supuestos de costes y constitución S.L.",
};

export default function PlanFinancieroPage() {
  return (
    <TfmPageShell currentPath="/plan-financiero">
      <TfmFinancialPlanSlide />
    </TfmPageShell>
  );
}
