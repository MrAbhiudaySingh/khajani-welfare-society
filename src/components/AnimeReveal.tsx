import React, { forwardRef, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate, stagger } from "animejs";

type AnimationVariant =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "scale"
  | "fade"
  | "stagger-children";

interface AnimeRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  staggerDelay?: number;
  children: React.ReactNode;
  threshold?: number;
}

const getInitialStyle = (variant: AnimationVariant): React.CSSProperties => {
  switch (variant) {
    case "fade-up":
      return { opacity: 0, transform: "translateY(48px)" };
    case "fade-left":
      return { opacity: 0, transform: "translateX(-48px)" };
    case "fade-right":
      return { opacity: 0, transform: "translateX(48px)" };
    case "scale":
      return { opacity: 0, transform: "scale(0.88)" };
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
      staggerDelay = 80,
      threshold = 0.12,
      className,
      children,
      style,
      ...props
    },
    _ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.unobserve(el);

            if (variant === "stagger-children") {
              const childEls = Array.from(el.children) as HTMLElement[];
              childEls.forEach((child) => {
                child.style.opacity = "0";
                child.style.transform = "translateY(36px)";
              });
              animate(childEls, {
                opacity: [0, 1],
                translateY: [36, 0],
                ease: "outExpo",
                duration,
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
                  animeProps.translateY = [48, 0];
                  break;
                case "fade-left":
                  animeProps.opacity = [0, 1];
                  animeProps.translateX = [-48, 0];
                  break;
                case "fade-right":
                  animeProps.opacity = [0, 1];
                  animeProps.translateX = [48, 0];
                  break;
                case "scale":
                  animeProps.opacity = [0, 1];
                  animeProps.scale = [0.88, 1];
                  break;
                default:
                  animeProps.opacity = [0, 1];
              }

              animate(el, animeProps);
            }
          }
        },
        { threshold }
      );

      // Failsafe: ensure elements become visible even if IntersectionObserver doesn't fire promptly
      const fallbackTimer = setTimeout(() => {
        if (!hasAnimated.current && el) {
          hasAnimated.current = true;
          el.style.opacity = "1";
          el.style.transform = "none";
          if (variant === "stagger-children") {
            const childEls = Array.from(el.children) as HTMLElement[];
            childEls.forEach((child) => {
              child.style.opacity = "1";
              child.style.transform = "none";
            });
          }
        }
      }, 400 + delay);

      observer.observe(el);
      return () => {
        clearTimeout(fallbackTimer);
        observer.disconnect();
      };
    }, [variant, delay, duration, staggerDelay, threshold]);

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
