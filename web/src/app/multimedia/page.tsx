import type { Metadata } from "next";

import { TfmMultimediaSlide } from "@/components/tfm/tfm-multimedia-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Vídeos · TFM Penguin Writer",
  description: "Tour del sitio, vídeo del grupo y mockups del producto.",
};

export default function MultimediaPage() {
  return (
    <TfmPageShell currentPath="/multimedia">
      <TfmMultimediaSlide />
    </TfmPageShell>
  );
}
