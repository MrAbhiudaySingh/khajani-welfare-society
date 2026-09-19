import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { animate, stagger } from "animejs";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);
          const cols = Array.from(el.querySelectorAll(".footer-col")) as HTMLElement[];
          cols.forEach((c) => {
            c.style.opacity = "0";
            c.style.transform = "translateY(32px)";
          });
          animate(cols, {
            opacity: [0, 1],
            translateY: [32, 0],
            ease: "outExpo",
            duration: 800,
            delay: stagger(100),
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { href: "https://www.facebook.com/KhajaniWelfareSociety", icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/khajaniwelfaresociety/", icon: Instagram, label: "Instagram" },
    { href: "https://x.com/Khajani_society", icon: Twitter, label: "X (Twitter)" },
    { href: "https://www.linkedin.com/company/khajani-welfare-society/", icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer ref={footerRef} className="relative overflow-hidden" style={{ background: "hsl(var(--footer-bg))" }}>
      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Top divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Brand column */}
          <div className="footer-col lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block group">
              <img
                src={logo}
                alt="Khajani Welfare Society"
                className="h-12 object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm font-serif italic">
              A chronicle of change, a legacy of welfare. Documenting our journey towards a sustainable and healthy Braj since 2007.
            </p>

            {/* Social icons as glass buttons */}
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass-dark flex items-center justify-center text-white/50 hover:text-secondary hover:border-secondary/40 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-2.5 pt-4 border-t border-white/8">
              <div className="flex items-start gap-2.5 text-xs text-white/40">
                <MapPin size={13} className="mt-0.5 shrink-0 text-secondary/60" />
                <span>64/128, Gali Sales Tax, Dampier Nagar,<br />Mathura – 281001, Uttar Pradesh</span>
              </div>
              <a href="tel:+918373990809" className="flex items-center gap-2.5 text-xs text-white/40 hover:text-secondary transition-colors">
                <Phone size={13} className="text-secondary/60" /> +91-8373990809
              </a>
              <a href="tel:+919868518738" className="flex items-center gap-2.5 text-xs text-white/40 hover:text-secondary transition-colors">
                <Phone size={13} className="text-secondary/60" /> +91-9868518738
              </a>
              <a href="mailto:info@khajaniwelfaresociety.com" className="flex items-center gap-2.5 text-xs text-white/40 hover:text-secondary transition-colors">
                <Mail size={13} className="text-secondary/60" /> info@khajaniwelfaresociety.com
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-col">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-secondary">Explore</h3>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/gi-recognition", label: "GI Recognition" },
                { to: "/media", label: "Media" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/45 hover:text-secondary transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work */}
          <div className="footer-col">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-secondary">Our Work</h3>
            <ul className="space-y-3">
              {[
                { to: "/our-work", label: "All Programmes" },
                { to: "/our-work#skills-training-education", label: "Skills & Education" },
                { to: "/our-work#heritage-traditional-knowledge", label: "Heritage & Craft" },
                { to: "/our-work#rehabilitation-health-digital", label: "Health & Rehabilitation" },
                { to: "/our-work#community-womens-enterprise", label: "Community & Enterprise" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/45 hover:text-secondary transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div className="footer-col">
            <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-6 text-secondary">Get Involved</h3>
            <ul className="space-y-3">
              {[
                { to: "/get-involved", label: "Get Involved" },
                { to: "/volunteer", label: "Volunteer" },
                { to: "/get-involved", label: "Partner with Us" },
                { to: "/donate", label: "Donate Now" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/45 hover:text-secondary transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA glass card */}
            <div className="mt-8 glass-dark rounded-2xl p-5 border border-secondary/20">
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                Every contribution transforms a life.
              </p>
              <Link
                to="/donate"
                className="btn-3d-accent inline-flex items-center justify-center px-5 py-2 text-xs tracking-widest uppercase w-full"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30 font-bold tracking-widest uppercase">
            © 2024 Khajani Welfare Society • Mathura, U.P.
          </p>
          <div className="flex space-x-6">
            {["Privacy", "Accessibility", "Ethics Code"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] text-white/30 hover:text-secondary font-bold tracking-widest uppercase transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
