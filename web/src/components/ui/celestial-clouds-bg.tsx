"use client";

import type { CSSProperties } from "react";

const CLOUDS: Array<{
  top: string;
  w: number;
  h: number;
  color: string;
  alpha: number;
  blur: number;
  dur: number;
  delay: number;
}> = [
  // Background layer — huge, slow, heavy blur
  { top: "4%",  w: 1000, h: 280, color: "175,205,255", alpha: 0.10, blur: 90, dur: 130, delay: 0   },
  { top: "18%", w:  850, h: 240, color: "185,212,255", alpha: 0.09, blur: 80, dur: 145, delay: -50 },
  { top: "35%", w:  900, h: 260, color: "178,208,255", alpha: 0.08, blur: 85, dur: 120, delay: -90 },
  // Mid layer
  { top: "8%",  w:  550, h: 155, color: "215,232,255", alpha: 0.18, blur: 48, dur: 85,  delay: -20 },
  { top: "24%", w:  480, h: 140, color: "225,240,255", alpha: 0.17, blur: 42, dur: 95,  delay: -58 },
  { top: "42%", w:  520, h: 148, color: "210,228,255", alpha: 0.20, blur: 44, dur: 78,  delay: -12 },
  { top: "55%", w:  460, h: 130, color: "220,235,255", alpha: 0.16, blur: 40, dur: 88,  delay: -35 },
  // Foreground — smaller, sharper, faster, brighter
  { top: "6%",  w:  320, h:  95, color: "240,248,255", alpha: 0.30, blur: 24, dur: 55,  delay: -15 },
  { top: "16%", w:  280, h:  82, color: "255,255,255", alpha: 0.28, blur: 20, dur: 48,  delay: -32 },
  { top: "30%", w:  340, h: 100, color: "238,247,255", alpha: 0.32, blur: 22, dur: 62,  delay: -42 },
  { top: "44%", w:  300, h:  88, color: "248,252,255", alpha: 0.25, blur: 18, dur: 52,  delay: -8  },
  { top: "58%", w:  260, h:  78, color: "255,255,255", alpha: 0.22, blur: 16, dur: 58,  delay: -25 },
];

const starStyle: CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "45%",
  backgroundImage: [
    "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.85), transparent 2px)",
    "radial-gradient(1px 1px at 32% 7%,  rgba(255,255,255,0.70), transparent 2px)",
    "radial-gradient(1px 1px at 53% 15%, rgba(255,255,255,0.90), transparent 2px)",
    "radial-gradient(1px 1px at 71% 4%,  rgba(255,255,255,0.65), transparent 2px)",
    "radial-gradient(1px 1px at 87% 12%, rgba(255,255,255,0.80), transparent 2px)",
    "radial-gradient(1.5px 1.5px at 22% 32%, rgba(255,255,255,0.55), transparent 3px)",
    "radial-gradient(1px 1px at 44% 26%, rgba(255,255,255,0.75), transparent 2px)",
    "radial-gradient(1px 1px at 63% 30%, rgba(255,255,255,0.60), transparent 2px)",
    "radial-gradient(1.5px 1.5px at 80% 22%, rgba(255,255,255,0.80), transparent 3px)",
    "radial-gradient(1px 1px at 95% 33%, rgba(255,255,255,0.50), transparent 2px)",
    "radial-gradient(1px 1px at 5%  38%, rgba(255,255,255,0.60), transparent 2px)",
    "radial-gradient(1px 1px at 48% 40%, rgba(255,255,255,0.45), transparent 2px)",
  ].join(", "),
};

const SKY = {
  celestial:
    "linear-gradient(to bottom, #03071e 0%, #0a1550 18%, #1a3a8f 40%, #3b72d4 62%, #7ab2e8 80%, #b8d4f8 94%, #ddeeff 100%)",
  /** Pale aviation / daytime sky (Hi Fly–style reference) */
  daylight:
    "linear-gradient(to bottom, #7eb8e4 0%, #a8cfea 18%, #c9e2f4 42%, #e2eef9 72%, #f4f9fc 92%, #ffffff 100%)",
} as const;

export type CelestialTone = keyof typeof SKY;

export function CelestialCloudsBackground({
  tone = "celestial",
  driftMode = "normal",
}: {
  tone?: CelestialTone;
  /** Control del movimiento de nubes (accesibilidad / preferencia UI). */
  driftMode?: "normal" | "slow" | "paused";
}) {
  const isDay = tone === "daylight";
  const durScale = driftMode === "slow" ? 2.8 : 1;
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: SKY[tone],
      }}
    >
      {/* Starfield in upper sky — muted for daylight sky */}
      <div
        style={{
          ...starStyle,
          opacity: isDay ? 0.2 : 1,
        }}
      />

      {/* Soft horizon atmospheric glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "38%",
          background:
            "linear-gradient(to top, rgba(100,160,240,0.13) 0%, transparent 100%)",
        }}
      />

      {/* Cloud layers */}
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: c.top,
            left: 0,
            width: c.w,
            height: c.h,
            borderRadius: "50%",
            background: `radial-gradient(ellipse at 45% 55%, rgba(${c.color},${+(c.alpha + 0.08).toFixed(2)}) 0%, rgba(${c.color},${c.alpha}) 35%, rgba(${c.color},0) 75%)`,
            filter: `blur(${c.blur}px)`,
            animation:
              driftMode === "paused"
                ? "none"
                : `cloud-drift ${c.dur * durScale}s linear ${c.delay}s infinite`,
            willChange: driftMode === "paused" ? undefined : "transform",
          }}
        />
      ))}
    </div>
  );
}
