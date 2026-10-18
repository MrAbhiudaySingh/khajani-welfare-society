import React, { forwardRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate, stagger } from "animejs";

export type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "fade"
  | "blur-reveal"
  | "stagger-children";

export interface AnimeRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  children: React.ReactNode;
  threshold?: number;
  once?: boolean;
}

const getInitialStyle = (variant: AnimationVariant): React.CSSProperties => {
  switch (variant) {
    case "fade-up":
      return { opacity: 0, transform: "translateY(36px)" };
    case "fade-down":
      return { opacity: 0, transform: "translateY(-36px)" };
    case "fade-left":
      return { opacity: 0, transform: "translateX(-36px)" };
    case "fade-right":
      return { opacity: 0, transform: "translateX(36px)" };
    case "scale":
      return { opacity: 0, transform: "scale(0.92)" };
    case "blur-reveal":
      return { opacity: 0, transform: "translateY(24px)", filter: "blur(10px)" };
    case "stagger-children":
      return {};
    default:
      return { opacity: 0 };
  }
};

const AnimeReveal = forwardRef<HTMLDivElement, AnimeRevealProps>(
  (
    {
      variant = "fade-up",
      delay = 0,
      duration = 800,
      staggerDelay = 70,
      threshold = 0.1,
      once = true,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    const containerRef = (ref as React.RefObject<HTMLDivElement>) || localRef;
    const hasAnimated = useRef(false);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      // Check user reduced-motion preference
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && (!hasAnimated.current || !once)) {
            hasAnimated.current = true;
            if (once) observer.unobserve(el);

            if (variant === "stagger-children") {
              const childEls = Array.from(el.children) as HTMLElement[];
              childEls.forEach((child) => {
                child.style.opacity = "0";
                child.style.transform = "translateY(28px)";
              });

              animate(childEls, {
                opacity: [0, 1],
                translateY: [28, 0],
                ease: "outExpo",
                duration: duration * 0.9,
                delay: stagger(staggerDelay, { start: delay }),
              });
            } else {
              const animeProps: Record<string, unknown> = {
                ease: "outExpo",
                duration,
                delay,
              };

              switch (variant) {
                case "fade-up":
                  animeProps.opacity = [0, 1];
                  animeProps.translateY = [36, 0];
                  break;
                case "fade-down":
                  animeProps.opacity = [0, 1];
                  animeProps.translateY = [-36, 0];
                  break;
                case "fade-left":
                  animeProps.opacity = [0, 1];
                  animeProps.translateX = [-36, 0];
                  break;
                case "fade-right":
                  animeProps.opacity = [0, 1];
                  animeProps.translateX = [36, 0];
                  break;
                case "scale":
                  animeProps.opacity = [0, 1];
                  animeProps.scale = [0.92, 1];
                  break;
                case "blur-reveal":
                  animeProps.opacity = [0, 1];
                  animeProps.translateY = [24, 0];
                  animeProps.filter = ["blur(10px)", "blur(0px)"];
                  break;
                default:
                  animeProps.opacity = [0, 1];
              }

              animate(el, animeProps);
            }
          }
        },
        { threshold, rootMargin: "60px 0px -20px 0px" }
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    }, [variant, delay, duration, staggerDelay, threshold, once]);

    const initialStyle =
      variant !== "stagger-children" ? getInitialStyle(variant) : {};

    return (
      <div
        ref={containerRef}
        className={cn("will-change-transform", className)}
        style={{ ...initialStyle, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

AnimeReveal.displayName = "AnimeReveal";

export { AnimeReveal };
export default AnimeReveal;
