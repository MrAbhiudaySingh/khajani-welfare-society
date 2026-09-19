import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { animate, stagger } from "animejs";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/our-work", label: "Our Work" },
    { to: "/culture", label: "Culture" },
    { to: "/gi-recognition", label: "GI Recognition" },
    { to: "/media", label: "Gallery & Media" },
    { to: "/get-involved", label: "Get Involved" },
  ];

  // Scroll detection for navbar glass intensity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Logo entrance animation on mount
  useEffect(() => {
    const el = logoRef.current;
    if (!el) return;
    animate(el, {
      opacity: [0, 1],
      translateX: [-24, 0],
      ease: "outExpo",
      duration: 700,
      delay: 100,
    });
  }, []);

  // Mobile menu slide-in with stagger
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (mobileMenuOpen) {
      const links = Array.from(menu.querySelectorAll("a")) as HTMLElement[];
      links.forEach((l) => {
        l.style.opacity = "0";
        l.style.transform = "translateX(-20px)";
      });
      animate(menu, {
        opacity: [0, 1],
        translateY: [-8, 0],
        ease: "outExpo",
        duration: 300,
      });
      animate(links, {
        opacity: [0, 1],
        translateX: [-20, 0],
        ease: "outExpo",
        duration: 400,
        delay: stagger(60, { start: 120 }),
      });
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/85 backdrop-blur-2xl shadow-lg border-b border-white/20"
          : "bg-card/95 backdrop-blur-md border-b border-border"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-4">
          {/* Left side: Logo + Desktop nav */}
          <div className="flex items-center gap-4 xl:gap-8 h-full min-w-0">
            {/* Logo */}
            <Link
              ref={logoRef}
              to="/"
              className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
            >
              <img
                src={logo}
                alt="Khajani Welfare Society"
                className="h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 h-full">
              {navLinks.map((link) => {
                const isActive =
                  link.to === "/"
                    ? location.pathname === "/"
                    : link.to === "/our-work"
                    ? location.pathname === "/our-work" || location.pathname.startsWith("/projects")
                    : location.pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative px-2 xl:px-3 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors rounded-lg group ${
                      isActive
                        ? "text-accent"
                        : "text-foreground hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    {link.label}
                    {/* Active / hover underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                        isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right side — pushed to the right end */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Link
              to="/donate"
              className="btn-3d-accent hidden sm:inline-flex items-center justify-center px-5 xl:px-6 py-2.5 text-xs xl:text-sm tracking-wide whitespace-nowrap"
            >
              Donate Now
            </Link>

            <Link
              to="/contact"
              className={`hidden sm:inline-flex relative px-2.5 xl:px-3 py-2 text-[11px] xl:text-xs font-bold uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors rounded-lg group ${
                location.pathname === "/contact"
                  ? "text-accent"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
              }`}
            >
              Contact Us
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                  location.pathname === "/contact" ? "w-3/4" : "w-0 group-hover:w-3/4"
                }`}
              />
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl glass transition-all hover:bg-accent/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="text-foreground" size={22} />
              ) : (
                <Menu className="text-foreground" size={22} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden pb-6 border-t border-border/50"
            style={{ opacity: 0 }}
          >
            <div className="flex flex-col space-y-1 pt-4">
              {navLinks.map((link) => {
                const isActive =
                  link.to === "/"
                    ? location.pathname === "/"
                    : link.to === "/our-work"
                    ? location.pathname === "/our-work" || location.pathname.startsWith("/projects")
                    : location.pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm font-bold uppercase tracking-widest transition-colors px-4 py-2.5 rounded-xl ${
                      isActive
                        ? "text-accent bg-accent/8"
                        : "text-foreground hover:text-accent hover:bg-accent/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors px-4 py-2.5 rounded-xl ${
                  location.pathname === "/contact"
                    ? "text-accent bg-accent/8"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                Contact Us
              </Link>
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-3d-accent mt-2 flex items-center justify-center px-6 py-3 text-sm tracking-wide"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
