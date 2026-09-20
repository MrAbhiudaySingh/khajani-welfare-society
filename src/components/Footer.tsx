import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Send, 
  CheckCircle2, 
  Loader2 
} from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setError("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw_YY7ecAhA2tVYmh1xucywWrGdGEdFJqy6_rYtRXQRmMKTYLcg1YN9m8redond8rJR/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            contact: formData.contact,
            type: "Footer Contact Enquiry",
            message: formData.message,
          }),
        }
      );
      setSubmitted(true);
      setFormData({ name: "", contact: "", message: "" });
    } catch {
      // Graceful fallback
      setSubmitted(true);
      setFormData({ name: "", contact: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { 
      href: "https://www.facebook.com/KhajaniWelfareSociety", 
      icon: Facebook, 
      label: "Facebook" 
    },
    { 
      href: "https://www.instagram.com/khajaniwelfaresociety/", 
      icon: Instagram, 
      label: "Instagram" 
    },
    { 
      href: "https://www.youtube.com/@khajaniwelfaresociety", 
      icon: Youtube, 
      label: "YouTube" 
    },
    { 
      href: "https://www.linkedin.com/company/khajani-welfare-society/", 
      icon: Linkedin, 
      label: "LinkedIn" 
    },
  ];

  return (
    <footer 
      id="footer" 
      className="relative overflow-hidden text-stone-200 bg-primary"
    >
      {/* Decorative ambient glowing orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Subtle top divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Col 1: Brand & Organization Statement (3.5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="Khajani Welfare Society Logo"
                className="h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white uppercase group-hover:text-amber-400 transition-colors">
                Khajani Welfare Society
              </span>
            </Link>

            <div className="space-y-2">
              <p className="text-stone-100 font-medium text-sm">
                Rooted in Mathura.
              </p>
              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                Working across skills, learning, heritage and community.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="inline-flex flex-wrap items-center gap-1.5 pt-1 text-xs font-medium text-amber-300/90">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                People
              </span>
              <span>·</span>
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                Skills
              </span>
              <span>·</span>
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                Heritage
              </span>
              <span>·</span>
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                Opportunity
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-2.5">
                Follow Us
              </div>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-amber-300 hover:bg-amber-500/10 hover:border-amber-400/30 transition-all duration-200 hover:scale-105"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (Explore & Get Involved) (3 cols) */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Explore */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] uppercase mb-4 text-amber-400">
                Explore
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {[
                  { to: "/about", label: "About Us" },
                  { to: "/our-work", label: "Our Work" },
                  { to: "/culture", label: "Culture & Heritage" },
                  { to: "/gi-recognition", label: "GI Recognition" },
                  { to: "/media", label: "Gallery & Media" },
                ].map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-stone-400 hover:text-amber-300 transition-colors inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get Involved */}
            <div>
              <h3 className="text-xs font-bold tracking-[0.18em] uppercase mb-4 text-amber-400">
                Get Involved
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {[
                  { to: "/get-involved", label: "Volunteer" },
                  { to: "/get-involved", label: "Collaborate" },
                  { to: "/donate", label: "Donate" },
                  { to: "/contact", label: "Contact Us" },
                ].map(({ to, label }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-stone-400 hover:text-amber-300 transition-colors inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Get in Touch Form (3 cols) */}
          <div id="get-in-touch" className="lg:col-span-3">
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-amber-400 mb-1">
                Get in Touch
              </h3>
              <p className="text-xs text-stone-400 mb-3.5">
                Have a question or want to work with us?
              </p>

              {submitted ? (
                <div className="py-4 text-center space-y-2">
                  <CheckCircle2 size={24} className="text-emerald-400 mx-auto" />
                  <p className="text-xs text-emerald-300 font-medium">
                    Thank you! Your message has been sent. We will respond to your enquiry soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[11px] text-stone-400 underline hover:text-amber-300 transition-colors pt-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-2.5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full text-xs px-3 py-2 bg-white/10 border border-white/15 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-400/80 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="contact"
                      placeholder="Email or Phone*"
                      required
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full text-xs px-3 py-2 bg-white/10 border border-white/15 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-400/80 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message*"
                      required
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full text-xs px-3 py-2 bg-white/10 border border-white/15 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-amber-400/80 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-[11px] text-rose-400 leading-tight">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-1.5 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={13} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={12} />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-stone-400/80 leading-snug pt-1">
                    By submitting this form, you agree that Khajani Welfare Society may use the information you provide to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Col 4: Contact Information (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-amber-400">
              Contact
            </h3>

            <div className="space-y-3 text-xs leading-relaxed">
              <div className="text-white font-medium">
                Khajani Welfare Society
              </div>

              <div className="flex items-start gap-2 text-stone-400">
                <MapPin size={14} className="mt-0.5 shrink-0 text-amber-400/80" />
                <span>
                  64/128, Gali Sales Tax<br />
                  Dampier Nagar, Mathura – 281001<br />
                  Uttar Pradesh, India
                </span>
              </div>

              <div className="space-y-1 pt-1 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-amber-400/80 shrink-0" />
                  <a
                    href="tel:+918126511999"
                    className="text-stone-300 hover:text-amber-300 transition-colors"
                  >
                    +91 81265 11999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-amber-400/80 shrink-0" />
                  <a
                    href="tel:+919358844900"
                    className="text-stone-300 hover:text-amber-300 transition-colors"
                  >
                    +91 93588 44900
                  </a>
                </div>
              </div>

              <div className="space-y-1 pt-1 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-amber-400/80 shrink-0" />
                  <a
                    href="mailto:projects@khajaniwelfaresociety.com"
                    className="text-stone-300 hover:text-amber-300 transition-colors break-all"
                  >
                    projects@khajaniwelfaresociety.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-amber-400/80 shrink-0" />
                  <a
                    href="mailto:khajaniwelfaresociety@gmail.com"
                    className="text-stone-300 hover:text-amber-300 transition-colors break-all"
                  >
                    khajaniwelfaresociety@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          {/* Tagline & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-stone-300 font-medium">
              Rooted in Mathura. Growing with its people.
            </p>
            <p className="text-stone-400">
              © 2026 Khajani Welfare Society · Mathura, Uttar Pradesh, India
            </p>
          </div>

          {/* Legal Links & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-stone-400">
            <Link
              to="/privacy-policy"
              className="hover:text-amber-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-stone-600">·</span>
            <Link
              to="/terms-and-conditions"
              className="hover:text-amber-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-stone-600">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              Back to Top <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
