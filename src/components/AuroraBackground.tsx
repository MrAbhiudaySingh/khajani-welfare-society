/**
 * AuroraBackground — Radiant Aurora Morphism effect.
 * Renders undulating, ethereal glowing aurora ribbons and chromatic meshes
 * that elevate hero sections, dark CTA panels, and stat sections with a
 * modern, hypnotic fluid aesthetic.
 */
import { useEffect, useRef } from "react";
import { animate } from "animejs";

interface AuroraBackgroundProps {
  /** "light" for cream/card backgrounds, "dark" for navy backgrounds */
  variant?: "light" | "dark";
  className?: string;
  /** Intensity multiplier (default 1) */
  intensity?: number;
}

export const AuroraBackground = ({
  variant = "light",
  className = "",
  intensity = 1,
}: AuroraBackgroundProps) => {
  const auroraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = auroraRef.current;
    if (!el) return;
    const blobs = Array.from(el.querySelectorAll(".aurora-blob")) as HTMLElement[];

    const animations: ReturnType<typeof animate>[] = [];

    blobs.forEach((blob, i) => {
      const dur = 9000 + i * 2500;
      const xRange = 25 + (i % 3) * 10;
      const yRange = 20 + (i % 2) * 10;

      const loop = () => {
        const anim = animate(blob, {
          translateX: [
            `${(Math.random() - 0.5) * xRange}%`,
            `${(Math.random() - 0.5) * xRange}%`,
          ],
          translateY: [
            `${(Math.random() - 0.5) * yRange}%`,
            `${(Math.random() - 0.5) * yRange}%`,
          ],
          scale: [0.9 + Math.random() * 0.25, 0.95 + Math.random() * 0.25],
          rotate: [`${(Math.random() - 0.5) * 40}deg`, `${(Math.random() - 0.5) * 40}deg`],
          ease: "inOutSine",
          duration: dur,
          onComplete: loop,
        });
        animations.push(anim);
      };

      const timer = setTimeout(loop, i * 800);
      return () => clearTimeout(timer);
    });
  }, []);

  if (variant === "dark") {
    return (
      <div
        ref={auroraRef}
        className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
        aria-hidden="true"
      >
        {/* Deep Royal Cobalt Aurora */}
        <div
          className="aurora-blob absolute rounded-full will-change-transform"
          style={{
            width: "70%",
            height: "70%",
            top: "-15%",
            left: "-10%",
            background: `radial-gradient(ellipse at center, hsl(221 80% 45% / ${0.38 * intensity}) 0%, transparent 68%)`,
            filter: "blur(50px)",
            mixBlendMode: "screen",
          }}
        />
        {/* Luminous Gold Aurora */}
        <div
          className="aurora-blob absolute rounded-full will-change-transform"
          style={{
            width: "65%",
            height: "65%",
            top: "10%",
            right: "-15%",
            background: `radial-gradient(ellipse at center, hsl(42 85% 55% / ${0.32 * intensity}) 0%, transparent 68%)`,
            filter: "blur(45px)",
            mixBlendMode: "screen",
          }}
        />
        {/* Crimson Coral Aurora */}
        <div
          className="aurora-blob absolute rounded-full will-change-transform"
          style={{
            width: "60%",
            height: "60%",
            bottom: "-15%",
            left: "25%",
            background: `radial-gradient(ellipse at center, hsl(5 82% 52% / ${0.28 * intensity}) 0%, transparent 68%)`,
            filter: "blur(55px)",
            mixBlendMode: "screen",
          }}
        />
        {/* Subtle Shimmer Dust Ribbon */}
        <div
          className="aurora-blob absolute rounded-full will-change-transform"
          style={{
            width: "45%",
            height: "45%",
            top: "35%",
            left: "40%",
            background: `radial-gradient(ellipse at center, hsl(180 80% 50% / ${0.12 * intensity}) 0%, transparent 65%)`,
            filter: "blur(60px)",
            mixBlendMode: "screen",
          }}
        />
      </div>
    );
  }

  // Light variant — rich, noticeable sunrise aurora with golden amber & rose coral
  return (
    <div
      ref={auroraRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Radiant Golden Glow */}
      <div
        className="aurora-blob absolute rounded-full will-change-transform"
        style={{
          width: "65%",
          height: "65%",
          top: "-10%",
          right: "-10%",
          background: `radial-gradient(ellipse at center, hsl(42 85% 58% / ${0.25 * intensity}) 0%, transparent 70%)`,
          filter: "blur(55px)",
        }}
      />
      {/* Soft Rose Accent Aurora */}
      <div
        className="aurora-blob absolute rounded-full will-change-transform"
        style={{
          width: "55%",
          height: "55%",
          bottom: "-5%",
          left: "-10%",
          background: `radial-gradient(ellipse at center, hsl(5 85% 58% / ${0.18 * intensity}) 0%, transparent 68%)`,
          filter: "blur(50px)",
        }}
      />
      {/* Gentle Sapphire Mist */}
      <div
        className="aurora-blob absolute rounded-full will-change-transform"
        style={{
          width: "50%",
          height: "50%",
          top: "20%",
          left: "25%",
          background: `radial-gradient(ellipse at center, hsl(210 70% 60% / ${0.14 * intensity}) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

export default AuroraBackground;
