import { demoHeroNav } from "@/lib/tfm-nav";
import { PenguinWriterHero } from "@/components/ui/penguin-writer-hero";

export default function DemoOne() {
  return <PenguinWriterHero navItems={demoHeroNav} />;
}
