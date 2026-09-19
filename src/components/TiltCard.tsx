import React, { useRef, useState } from "react";
import { animate } from "animejs";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
  glare = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const dx = (x - cx) / cx; // -1 to 1
    const dy = (y - cy) / cy; // -1 to 1

    const rotateX = -dy * maxTilt;
    const rotateY = dx * maxTilt;

    animate(card, {
      rotateX,
      rotateY,
      ease: "outQuad",
      duration: 150,
    });

    if (glare) {
      setGlarePos({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        opacity: 0.35,
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    animate(card, {
      rotateX: 0,
      rotateY: 0,
      ease: "outElastic(1, 0.5)",
      duration: 700,
    });

    if (glare) {
      setGlarePos((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card relative transition-shadow duration-300 ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
        {children}

        {/* Dynamic Specular Glare Overlay for tactile 3D realism */}
        {glare && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300 z-30"
            style={{
              opacity: glarePos.opacity,
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)`,
              mixBlendMode: "overlay",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TiltCard;
