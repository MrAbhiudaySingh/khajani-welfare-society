import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { animate } from "animejs";
import { ArrowUp } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const backToTopRef = useRef<HTMLButtonElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 1. Smooth page entrance animation on route change
  useEffect(() => {
    const mainEl = mainRef.current;
    if (!mainEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    // Smooth subtle entrance for the page content
    animate(mainEl, {
      opacity: [0, 1],
      translateY: [12, 0],
      ease: "outExpo",
      duration: 400,
      onComplete: () => {
        if (mainEl) {
          mainEl.style.transform = "";
        }
      },
    });
  }, [location.pathname]);

  // 2. BackToTop trigger on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      // Show back to top button after 350px scroll
      setShowBackToTop(scrollY > 350);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 3. Anime.js reveal / hide for BackToTop button
  useEffect(() => {
    const btn = backToTopRef.current;
    if (!btn) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (showBackToTop) {
      if (prefersReducedMotion) {
        btn.style.opacity = "1";
        btn.style.transform = "scale(1)";
        btn.style.pointerEvents = "auto";
      } else {
        btn.style.pointerEvents = "auto";
        animate(btn, {
          opacity: [0, 1],
          scale: [0.75, 1],
          ease: "outBack(1.4)",
          duration: 320,
        });
      }
    } else {
      if (prefersReducedMotion) {
        btn.style.opacity = "0";
        btn.style.pointerEvents = "none";
      } else {
        animate(btn, {
          opacity: [1, 0],
          scale: [1, 0.75],
          ease: "outExpo",
          duration: 250,
          onComplete: () => {
            if (btn) btn.style.pointerEvents = "none";
          },
        });
      }
    }
  }, [showBackToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-amber-100 selection:text-amber-900">
      <Navbar />

      <main ref={mainRef} className="flex-1">
        {children}
      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      <button
        ref={backToTopRef}
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-20 right-5 sm:bottom-22 sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 backdrop-blur-md border border-[#E2D9CC] shadow-lg shadow-black/10 text-[#1C2D42] hover:text-[#C85A32] hover:border-[#C85A32]/40 hover:shadow-xl flex items-center justify-center transition-colors duration-200 cursor-pointer opacity-0 pointer-events-none focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default Layout;
