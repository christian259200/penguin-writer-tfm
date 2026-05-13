import type { Metadata } from "next";

import { TfmDevelopmentSlide } from "@/components/tfm/tfm-development-slide";
import { TfmPageShell } from "@/components/tfm/tfm-page-shell";

export const metadata: Metadata = {
  title: "Desarrollo de la web · TFM Penguin Writer",
  description: "Plantillas, estructura y usabilidad del sitio del TFM.",
};

export default function DesarrolloWebPage() {
  return (
    <TfmPageShell currentPath="/desarrollo-web">
      <TfmDevelopmentSlide />
    </TfmPageShell>
  );
}
