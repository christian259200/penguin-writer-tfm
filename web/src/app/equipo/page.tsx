import type { Metadata } from "next";

import { TfmTeamSlide } from "@/components/tfm/tfm-team-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Equipo · TFM Penguin Writer",
  description: "Equipo fundador del TFM Penguin Writer, EAE Business School.",
};

export default function EquipoPage() {
  return (
    <TfmPageShell currentPath="/equipo">
      <TfmTeamSlide />
    </TfmPageShell>
  );
}
