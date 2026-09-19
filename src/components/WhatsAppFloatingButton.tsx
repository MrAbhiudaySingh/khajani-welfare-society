import { useState, useEffect, useRef } from "react";
import { animate } from "animejs";

const WhatsAppFloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Official primary Khajani WhatsApp contact number
  const phoneNumber = "918126511999";
  const message = "Hello! I’d like to connect with Khajani Welfare Society. Please share more information.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Ambient gentle floating animation with animejs
  useEffect(() => {
    const el = buttonRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const anim = animate(el, {
      translateY: [-4, 4],
      direction: "alternate",
      loop: true,
      ease: "inOutSine",
      duration: 1800,
    });

    return () => {
      anim.pause();
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const el = buttonRef.current;
    if (!el) return;
    animate(el, {
      scale: 1.12,
      ease: "outBack(1.6)",
      duration: 350,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const el = buttonRef.current;
    if (!el) return;
    animate(el, {
      scale: 1,
      ease: "outExpo",
      duration: 300,
    });
  };

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <a
        ref={buttonRef}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Khajani Welfare Society on WhatsApp"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/45 transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* Subtle ripple / ping outer ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-25 group-hover:opacity-50 blur-xs transition-opacity" />

        {/* Official WhatsApp icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10 drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.396-10.416c-4.992 0-9.043 4.05-9.043 9.042 0 1.602.42 3.109 1.155 4.417l-1.228 4.484 4.606-1.208c1.261.688 2.705 1.077 4.24 1.077 4.99 0 9.04-4.05 9.04-9.041 0-4.993-4.05-9.042-9.04-9.042zm0 16.377c-1.42 0-2.75-.411-3.876-1.118l-.278-.175-2.732.717.729-2.664-.192-.305c-.77-1.226-1.221-2.678-1.221-4.237 0-4.048 3.294-7.342 7.342-7.342 4.049 0 7.343 3.294 7.343 7.342 0 4.049-3.294 7.342-7.343 7.342z" />
        </svg>

        {/* Tooltip on desktop hover */}
        <span
          className={`hidden sm:inline-block pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-stone-900/95 text-stone-100 text-xs font-medium rounded-lg whitespace-nowrap shadow-md border border-white/10 transition-all duration-200 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat with us on WhatsApp
        </span>
      </a>
    </aside>
  );
};

export default WhatsAppFloatingButton;
