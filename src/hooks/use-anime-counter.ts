import { useEffect, useRef, useState, useMemo } from "react";

interface UseAnimeCounterOptions {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function useAnimeCounter({
  target,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
}: UseAnimeCounterOptions) {
  const ref = useRef<HTMLElement>(null);

  // Compute the formatted final target string
  const formattedFinal = useMemo(() => {
    const numStr = decimals > 0
      ? target.toFixed(decimals)
      : target.toLocaleString("en-IN");
    return `${prefix}${numStr}${suffix}`;
  }, [target, decimals, prefix, suffix]);

  const [displayed, setDisplayed] = useState(`${prefix}0${suffix}`);
  const hasAnimated = useRef(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 1. If this counter has already completed, NEVER reset to 0!
    // Instantly preserve the final target number.
    if (hasAnimated.current) {
      if (el.textContent !== formattedFinal) {
        el.textContent = formattedFinal;
      }
      setDisplayed(formattedFinal);
      return;
    }

    // Set initial text only if animation has not started/completed
    el.textContent = `${prefix}0${suffix}`;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();
      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * target;

        const currentFormatted = decimals > 0
          ? current.toFixed(decimals)
          : Math.floor(current).toLocaleString("en-IN");

        const text = `${prefix}${currentFormatted}${suffix}`;
        if (el) el.textContent = text;

        if (progress < 1) {
          animFrameId.current = requestAnimationFrame(animate);
        } else {
          if (el) el.textContent = formattedFinal;
          setDisplayed(formattedFinal);
        }
      };
      animFrameId.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          startAnimation();
        }
      },
      { threshold: 0.05, rootMargin: "60px" }
    );

    observer.observe(el);

    // Failsafe timer: Ensure elements count up and never get stuck on 0
    // even if IntersectionObserver is delayed or doesn't fire promptly
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated.current) {
        observer.disconnect();
        startAnimation();
      }
    }, 1200);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [target, duration, suffix, prefix, decimals, formattedFinal]);

  return { ref, displayed };
}

