import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  ArrowDown, 
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

const ContactPage = () => {
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

  const scrollToDetails = () => {
    const el = document.getElementById("contact-details");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
      <div className="bg-stone-950 text-stone-100 min-h-screen">
        
        {/* ========================================================= */}
        {/* SCENE 1 — HERO                                            */}
        {/* Visual: Genuine photograph of Khajani premises / team     */}
        {/* ========================================================= */}
        <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
          {/* Genuine photo background */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/about/institute-entrance.jpg"
              alt="Khajani Welfare Society Premises in Mathura"
              className="w-full h-full object-cover object-center brightness-[0.38] contrast-105 scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/40" />
            <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
              <Sparkles size={13} className="text-amber-400" />
              CONTACT · KHAJANI WELFARE SOCIETY
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight font-medium leading-[1.15] mb-6">
              We’d be glad to hear from you.
            </h1>

            {/* Sub-paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              For questions about our work, volunteering, collaboration, institutional partnerships, donations, media or general enquiries, get in touch with Khajani Welfare Society in Mathura.
            </p>

            {/* Get in Touch CTA */}
            <div>
              <button
                onClick={scrollToDetails}
                className="btn-3d-accent inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 hover:gap-3 cursor-pointer shadow-lg shadow-amber-500/20"
              >
                Get in Touch <ArrowDown size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 2 & 3: CONTACT DETAILS & ENQUIRY FORM               */}
        {/* ========================================================= */}
        <section id="contact-details" className="relative py-20 lg:py-28 bg-stone-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              
              {/* SCENE 2 — CONTACT DETAILS (5 Cols) */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block mb-2">
                    GET IN TOUCH
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                    Reach Khajani.
                  </h2>
                  <p className="text-stone-400 text-sm mt-3 leading-relaxed">
                    Our doors and communication channels are always open for individuals, partners, and institutions committed to welfare and heritage.
                  </p>
                </div>

                {/* Address Card */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm space-y-6">
                  {/* Physical Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-amber-300/90 mb-1">
                        Khajani Welfare Society
                      </div>
                      <address className="not-italic text-sm text-stone-300 leading-relaxed">
                        64/128, Gali Sales Tax<br />
                        Dampier Nagar<br />
                        Mathura – 281001<br />
                        Uttar Pradesh, India
                      </address>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 pt-5 border-t border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-amber-300/90 mb-1">
                        Email
                      </div>
                      <a
                        href="mailto:info@khajaniwelfaresociety.com"
                        className="text-sm text-stone-300 hover:text-amber-300 transition-colors block"
                      >
                        info@khajaniwelfaresociety.com
                      </a>
                      <a
                        href="mailto:projects@khajaniwelfaresociety.com"
                        className="text-xs text-stone-400 hover:text-amber-300 transition-colors block mt-0.5"
                      >
                        projects@khajaniwelfaresociety.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 pt-5 border-t border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-amber-300/90 mb-1">
                        Phone
                      </div>
                      <div className="space-y-1">
                        <a
                          href="tel:+918373990809"
                          className="text-sm text-stone-300 hover:text-amber-300 transition-colors block"
                        >
                          +91 8373990809
                        </a>
                        <a
                          href="tel:+919868518738"
                          className="text-sm text-stone-300 hover:text-amber-300 transition-colors block"
                        >
                          +91 9868518738
                        </a>
                        <a
                          href="tel:+918126511999"
                          className="text-xs text-stone-400 hover:text-amber-300 transition-colors block pt-0.5"
                        >
                          +91 81265 11999
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Card & Get Directions */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 overflow-hidden">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-bold tracking-wider text-stone-300">
                      Find Us in Mathura
                    </span>
                    <a
                      href="https://maps.google.com/?q=Khajani+Welfare+Society+Dampier+Nagar+Mathura+Uttar+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      Get Directions <ArrowRight size={13} />
                    </a>
                  </div>

                  {/* Clean Map Embed */}
                  <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-white/10 bg-stone-900">
                    <iframe
                      title="Khajani Welfare Society Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8166547141566!2d77.6749174!3d27.4890858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39737119022e3895%3A0xe54d92416f5c80ef!2sDampier%20Nagar%2C%20Mathura%2C%20Uttar%20Pradesh%20281001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "grayscale(25%) contrast(105%)" }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Verified Official Social Accounts */}
                <div className="pt-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 mb-3">
                    Official Khajani Channels
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 text-stone-300 hover:text-amber-300 text-xs transition-all duration-200"
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
                <div className="bg-gradient-to-b from-stone-900/90 to-stone-900/50 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
                  <div className="mb-8">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block mb-2">
                      SEND A MESSAGE
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                      How can we help?
                    </h2>
                    <p className="text-stone-400 text-sm mt-2">
                      Please submit your message and our team will get back to you promptly.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="py-12 px-6 text-center space-y-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/20">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="text-xl font-serif text-white">
                        Thank you for getting in touch.
                      </h3>
                      <p className="text-stone-300 text-sm max-w-md mx-auto">
                        Your message has been received. Our team will review your enquiry and get back to you shortly.
                      </p>
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-xs uppercase font-bold tracking-wider text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
                        >
                          Send another message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                          Name <span className="text-amber-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-stone-950/80 border border-white/10 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                            Email <span className="text-amber-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-stone-950/80 border border-white/10 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                            Phone <span className="text-stone-500 text-[10px] lowercase">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-stone-950/80 border border-white/10 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                          />
                        </div>
                      </div>

                      {/* I'm interested in */}
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                          I’m interested in <span className="text-amber-400">*</span>
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-stone-950/80 border border-white/10 rounded-xl text-stone-100 text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
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
                        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-300 mb-2">
                          Message <span className="text-amber-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          placeholder="Tell us how we can help."
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-stone-950/80 border border-white/10 rounded-xl text-stone-100 placeholder-stone-500 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                        />
                      </div>

                      {error && (
                        <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-2 rounded-lg">
                          {error}
                        </p>
                      )}

                      {/* Submit button */}
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 disabled:opacity-50"
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
        {/* SCENE 4 — QUICK LINKS                                     */}
        {/* LOOKING FOR SOMETHING SPECIFIC? Find the right place.     */}
        {/* ========================================================= */}
        <section className="py-20 lg:py-24 bg-stone-900/60 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block mb-2">
                LOOKING FOR SOMETHING SPECIFIC?
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                Find the right place.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: OUR WORK */}
              <div className="bg-stone-950 border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300">
                <div className="space-y-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Compass size={22} />
                  </div>
                  <h3 className="text-xl font-serif text-white font-medium">
                    OUR WORK
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Explore Khajani’s work across skills, education, heritage, health and community initiatives.
                  </p>
                </div>
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all"
                >
                  Explore Our Work <ArrowRight size={14} />
                </Link>
              </div>

              {/* Card 2: GET INVOLVED */}
              <div className="bg-stone-950 border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300">
                <div className="space-y-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <HeartHandshake size={22} />
                  </div>
                  <h3 className="text-xl font-serif text-white font-medium">
                    GET INVOLVED
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Interested in volunteering, collaborating, sharing expertise or creating opportunities?
                  </p>
                </div>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all"
                >
                  Get Involved <ArrowRight size={14} />
                </Link>
              </div>

              {/* Card 3: DONATE */}
              <div className="bg-stone-950 border border-white/10 rounded-2xl p-7 sm:p-8 flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300">
                <div className="space-y-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Briefcase size={22} />
                  </div>
                  <h3 className="text-xl font-serif text-white font-medium">
                    DONATE
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Find information about contributing through UPI or direct bank transfer.
                  </p>
                </div>
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all"
                >
                  Donate <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 5 — CLOSING                                         */}
        {/* Wide genuine photograph of Khajani premises/team          */}
        {/* ========================================================= */}
        <section className="relative py-28 sm:py-36 overflow-hidden flex items-center justify-center text-center">
          {/* Background image with restrained warm overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/about/team-working.jpg"
              alt="Khajani Welfare Society Team and Organisational Environment"
              className="w-full h-full object-cover object-center brightness-[0.25] contrast-110"
            />
            <div className="absolute inset-0 bg-stone-950/75" />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-transparent to-stone-950" />
            <div className="absolute inset-0 bg-amber-900/10 mix-blend-color-burn" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-amber-400/90">
              KHAJANI WELFARE SOCIETY · MATHURA
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight font-medium">
              Rooted here. Open to conversation.
            </h2>

            <div className="pt-3">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm tracking-widest font-medium text-stone-300 uppercase">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  People
                </span>
                <span className="text-amber-400">·</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Heritage
                </span>
                <span className="text-amber-400">·</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  Opportunities
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
