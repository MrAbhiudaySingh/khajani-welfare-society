import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimeReveal from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Loader2, 
  Send, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Compass, 
  Sparkles, 
  HeartHandshake, 
  Briefcase 
} from "lucide-react";

function MapToggleBtn({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full border transition-all duration-200 cursor-pointer shadow-md ${
        active
          ? "btn-3d-accent border-accent text-white"
          : "bg-white/95 backdrop-blur-md text-foreground border-border hover:bg-white"
      }`}
    >
      {label}
    </button>
  );
}

const ContactPage = () => {
  const [activeMap, setActiveMap] = useState<"office" | "center">("office");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "General Enquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please fill out all required fields marked with *");
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
            email: formData.email,
            phone: formData.phone || "Not provided",
            interest: formData.interest,
            message: formData.message,
            source: "Contact Page Form",
          }),
        }
      );
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "General Enquiry",
        message: "",
      });
    } catch {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "General Enquiry",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      href: "https://www.linkedin.com/company/khajani-welfare-society/", 
      icon: Linkedin, 
      label: "LinkedIn" 
    },
    { 
      href: "https://www.youtube.com/@khajaniwelfaresociety", 
      icon: Youtube, 
      label: "YouTube" 
    },
  ];

  return (
    <Layout>
      <div className="bg-background text-foreground min-h-screen">
        
        {/* ========================================================= */}
        {/* SCENE 1 — HERO HEADER                                     */}
        {/* Warm heritage aesthetic matching Khajani design system   */}
        {/* ========================================================= */}
        <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden border-b border-border/80 bg-gradient-to-b from-card/80 via-background to-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimeReveal variant="fade-up">
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-4 shadow-2xs">
                <Sparkles size={13} className="text-accent" />
                CONTACT · KHAJANI WELFARE SOCIETY
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.15] mb-4">
                We’d be glad to hear from you.
                <br />
                <span className="font-serif italic font-normal text-secondary">
                  Let’s start a conversation.
                </span>
              </h1>

              {/* Sub-paragraph */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                For questions about our programmes, artisan collaborations, volunteering, institutional CSR partnerships, donations or general enquiries, connect with Khajani Welfare Society in Mathura.
              </p>
            </AnimeReveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 2 & 3: CONTACT DETAILS & ENQUIRY FORM               */}
        {/* ========================================================= */}
        <section id="contact-details" className="py-16 sm:py-20 lg:py-24 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* SCENE 2 — CONTACT DETAILS (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent block mb-1.5">
                    REACH KHAJANI
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
                    Visit or Connect.
                  </h2>
                  <p className="text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed font-light">
                    Our doors and communication channels are open for learners, artisans, partners, and institutions committed to grassroots capability and heritage preservation.
                  </p>
                </div>

                {/* Address Card */}
                <div className="clay-card rounded-2xl p-5 sm:p-6 bg-card border border-border/80 shadow-xs space-y-5">
                  {/* Physical Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold tracking-wider text-secondary mb-0.5">
                        Headquarters · Mathura
                      </div>
                      <address className="not-italic text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                        Khajani Welfare Society<br />
                        64/128, Gali Sales Tax, Dampier Nagar<br />
                        Mathura – 281001, Uttar Pradesh, India
                      </address>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 pt-4 border-t border-border/60">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold tracking-wider text-secondary mb-0.5">
                        Email
                      </div>
                      <a
                        href="mailto:info@khajaniwelfaresociety.com"
                        className="text-xs sm:text-sm text-foreground hover:text-accent font-medium transition-colors block"
                      >
                        info@khajaniwelfaresociety.com
                      </a>
                      <a
                        href="mailto:projects@khajaniwelfaresociety.com"
                        className="text-xs text-muted-foreground hover:text-accent transition-colors block mt-0.5"
                      >
                        projects@khajaniwelfaresociety.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 pt-4 border-t border-border/60">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[11px] uppercase font-bold tracking-wider text-secondary mb-0.5">
                        Phone &amp; WhatsApp
                      </div>
                      <div className="space-y-0.5">
                        <a
                          href="tel:+918373990809"
                          className="text-xs sm:text-sm text-foreground hover:text-accent font-medium transition-colors block"
                        >
                          +91 83739 90809
                        </a>
                        <a
                          href="tel:+919868518738"
                          className="text-xs text-muted-foreground hover:text-accent transition-colors block"
                        >
                          +91 98685 18738
                        </a>
                        <a
                          href="tel:+918126511999"
                          className="text-xs text-muted-foreground hover:text-accent transition-colors block"
                        >
                          +91 81265 11999
                        </a>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Verified Official Social Accounts */}
                <div className="pt-1">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                    Official Community Channels
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card hover:bg-accent/10 border border-border/80 hover:border-accent/30 text-muted-foreground hover:text-accent text-xs font-semibold transition-all duration-200"
                      >
                        <Icon size={14} />
                        <span>{label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* SCENE 3 — ENQUIRY FORM (7 Cols) */}
              <div id="enquiry-form" className="lg:col-span-7">
                <div className="clay-card rounded-3xl p-6 sm:p-8 lg:p-9 bg-card border border-border shadow-md">
                  <div className="mb-6">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent block mb-1">
                      SEND A DIRECT MESSAGE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
                      How can we help?
                    </h2>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1 font-light">
                      Please submit your message and our team will get back to you promptly.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-10 px-6 text-center space-y-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-primary">
                        Thank you for getting in touch.
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-light">
                        Your message has been received. Our team will review your enquiry and get back to you shortly.
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-xs uppercase font-bold tracking-wider text-accent hover:underline underline-offset-4 cursor-pointer"
                        >
                          Send another message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                          Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 sm:py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                        />
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                            Email <span className="text-accent">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 sm:py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                            Phone <span className="text-muted-foreground text-[10px] font-normal lowercase">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2.5 sm:py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                          />
                        </div>
                      </div>

                      {/* I'm interested in */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                          I’m interested in <span className="text-accent">*</span>
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 sm:py-3 bg-background border border-border rounded-xl text-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all cursor-pointer"
                        >
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Volunteer">Volunteer</option>
                          <option value="Collaboration">Collaboration</option>
                          <option value="CSR / Institutional Partnership">CSR / Institutional Partnership</option>
                          <option value="Programme Enquiry">Programme Enquiry</option>
                          <option value="Donation">Donation</option>
                          <option value="Media">Media</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                          Message <span className="text-accent">*</span>
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell us how we can help or collaborate."
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 sm:py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                        />
                      </div>

                      {error && (
                        <p className="text-xs text-accent bg-accent/10 border border-accent/20 px-3.5 py-2 rounded-lg font-medium">
                          {error}
                        </p>
                      )}

                      {/* Submit button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-3d-accent w-full sm:w-auto px-8 py-3 text-xs sm:text-sm font-bold tracking-widest uppercase inline-flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={16} className="animate-spin" /> Sending Message...
                            </>
                          ) : (
                            <>
                              Send Message <Send size={15} />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PRESENCE IN BRIJ (Exact Map & Hubs from About Us)         */}
        {/* ========================================================= */}
        <section className="py-20 sm:py-24 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimeReveal variant="fade-up">
              <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-8">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent block mb-2">
                    OUR GEOGRAPHY &amp; LOCATIONS
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-display font-medium text-primary">
                    Presence in Brij
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-md md:text-right mt-4 md:mt-0 italic font-serif text-sm sm:text-base">
                  "Serving over 100 villages within a 50km radius."
                </p>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="scale">
              <div className="clay-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[440px] sm:h-[500px] w-full bg-muted overflow-hidden">
                    {/* Map toggle */}
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <MapToggleBtn active={activeMap === "office"} onClick={() => setActiveMap("office")} label="Office" />
                      <MapToggleBtn active={activeMap === "center"} onClick={() => setActiveMap("center")} label="Center" />
                    </div>
                    <iframe
                      title={activeMap === "office" ? "Khajani Welfare Society - Office" : "Khajani Welfare Society - Training Centre"}
                      src={
                        activeMap === "office"
                          ? "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Khajani+Welfare+Society,+Gali+Sales+Tax,+Dampier+Nagar,+Mathura,+Uttar+Pradesh&zoom=17"
                          : "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d221.16145897473746!2d77.675511!3d27.5133306!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973711c41e6011d%3A0x9d9880dcfc6f0c68!2sKHAJANI%20LEARNING%20ACADEMY!5e0!3m2!1sen!2sin!4v1773558202587!5m2!1sen!2sin"
                      }
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <div className="space-y-6 sm:space-y-8">
                      {[
                        { num: "01", name: "Mathura HQ", desc: "Administrative hub & Advanced IT Training Center. The heart of our operations." },
                        { num: "02", name: "Vrindavan Cluster", desc: "Focus on textile, embroidery, and souvenir crafting for the tourism market." },
                        { num: "03", name: "Govardhan Unit", desc: "Agri-based skill development and organic farming workshops." },
                      ].map((loc) => (
                        <div key={loc.num} className="glass rounded-xl p-5 group cursor-pointer hover:border-accent/30 transition-all duration-300">
                          <div className="flex items-center mb-2 gap-3">
                            <span className="text-secondary font-bold text-sm w-8 shrink-0">{loc.num}.</span>
                            <h3 className="text-xl font-display font-bold text-primary group-hover:text-accent transition-colors">
                              {loc.name}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-sm pl-11 leading-relaxed">{loc.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 4 — QUICK LINKS (Looking for something specific?)    */}
        {/* ========================================================= */}
        <section className="py-14 sm:py-18 bg-[#FAF6EE] border-t border-[#EAE2D5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent block mb-1.5">
                LOOKING FOR SOMETHING SPECIFIC?
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
                Find the right place.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {/* Card 1: OUR WORK */}
              <div className="clay-card rounded-2xl p-5 sm:p-6 bg-card border border-border/80 flex flex-col justify-between group hover:border-accent/40 hover:shadow-md transition-all duration-300">
                <div className="space-y-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center">
                    <Compass size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary">
                    OUR WORK
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-light">
                    Explore Khajani’s programmes across women’s livelihoods, education, traditional crafts, healthcare and community seva.
                  </p>
                </div>
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-accent group-hover:translate-x-1 transition-all"
                >
                  Explore Our Work <ArrowRight size={13} />
                </Link>
              </div>

              {/* Card 2: GET INVOLVED */}
              <div className="clay-card rounded-2xl p-5 sm:p-6 bg-card border border-border/80 flex flex-col justify-between group hover:border-accent/40 hover:shadow-md transition-all duration-300">
                <div className="space-y-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center">
                    <HeartHandshake size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary">
                    GET INVOLVED
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-light">
                    Interested in volunteering, academic internships, institutional CSR collaboration or sharing vocational expertise?
                  </p>
                </div>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-accent group-hover:translate-x-1 transition-all"
                >
                  Get Involved <ArrowRight size={13} />
                </Link>
              </div>

              {/* Card 3: DONATE */}
              <div className="clay-card rounded-2xl p-5 sm:p-6 bg-card border border-border/80 flex flex-col justify-between group hover:border-accent/40 hover:shadow-md transition-all duration-300">
                <div className="space-y-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary">
                    DONATE
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-light">
                    Learn about transparent giving, statutory 80G tax exemptions, and verified bank and UPI transfer channels.
                  </p>
                </div>
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-accent group-hover:translate-x-1 transition-all"
                >
                  Support Khajani <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 5 — CLOSING FOOTER BANNER                           */}
        {/* ========================================================= */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground relative overflow-hidden text-center">
          <AuroraBackground variant="dark" intensity={1.2} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 glass-dark rounded-full text-[11px] font-bold tracking-widest uppercase text-secondary border border-white/10">
              KHAJANI WELFARE SOCIETY · MATHURA
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Rooted in Mathura.{" "}
              <span className="font-serif italic font-normal text-secondary">
                Open to conversation.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-primary-foreground/75 max-w-xl mx-auto font-light leading-relaxed">
              Every meaningful programme begins with understanding local realities and listening to people. We welcome your questions and partnerships.
            </p>

            <div className="pt-2">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs tracking-widest font-semibold text-secondary uppercase">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  People First
                </span>
                <span className="text-secondary">·</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  Heritage
                </span>
                <span className="text-secondary">·</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  Accountability
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default ContactPage;
