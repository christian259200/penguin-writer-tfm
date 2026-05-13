import type { Metadata } from "next";

import { JustificacionContent } from "./justificacion-content";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Justificación y objetivos · TFM Penguin Writer",
  description: "Objetivos del TFM y justificación del formato web, EAE Business School.",
};

export default function JustificacionPage() {
  return (
    <TfmPageShell currentPath="/justificacion">
      <article>
        <JustificacionContent />
      </article>
    </TfmPageShell>
  );
}
