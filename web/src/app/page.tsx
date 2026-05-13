import { TfmHiflyHome } from "@/components/tfm/tfm-hifly-home";

/**
 * Portada en modo presentación: solo el hero a pantalla completa, sin scroll
 * (el resto del TFM se navega por el menú).
 */
export default function Home() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden overscroll-none">
      <TfmHiflyHome />
    </div>
  );
}
