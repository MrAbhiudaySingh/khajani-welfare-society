import { useEffect, useRef, useState, useMemo } from "react";
import { animate } from "animejs";

interface UseAnimeCounterOptions {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function useAnimeCounter({
  target,
  duration = 2200,
  suffix = "",
  prefix = "",
  decimals = 0,
}: UseAnimeCounterOptions) {
  const ref = useRef<HTMLElement>(null);

  // Compute formatted final target string
  const formattedFinal = useMemo(() => {
    const numStr =
      decimals > 0
        ? target.toFixed(decimals)
        : target.toLocaleString("en-IN");
    return `${prefix}${numStr}${suffix}`;
  }, [target, decimals, prefix, suffix]);

  const [displayed, setDisplayed] = useState(`${prefix}0${suffix}`);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If counter has already run, preserve final number
    if (hasAnimated.current) {
      if (el.textContent !== formattedFinal) {
        el.textContent = formattedFinal;
      }
      setDisplayed(formattedFinal);
      return;
    }

    // Check user preference for reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      hasAnimated.current = true;
      el.textContent = formattedFinal;
      setDisplayed(formattedFinal);
      return;
    }

    // Set initial zero display
    el.textContent = `${prefix}0${suffix}`;

    const startCounter = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const counterState = { count: 0 };

      animate(counterState, {
        count: target,
        ease: "outExpo",
        duration,
        onUpdate: () => {
          const current = counterState.count;
          const currentFormatted =
            decimals > 0
              ? current.toFixed(decimals)
              : Math.floor(current).toLocaleString("en-IN");
          const text = `${prefix}${currentFormatted}${suffix}`;
          if (el) el.textContent = text;
        },
        onComplete: () => {
          if (el) el.textContent = formattedFinal;
          setDisplayed(formattedFinal);
        },
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          startCounter();
        }
      },
      { threshold: 0.1, rootMargin: "60px 0px" }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [target, duration, prefix, suffix, decimals, formattedFinal]);

  return { ref, displayed };
}
