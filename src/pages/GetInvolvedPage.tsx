import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import {
  Users,
  Handshake,
  HeartHandshake,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Sparkles,
  Building2,
  Compass,
  Send,
  X
} from "lucide-react";

const GetInvolvedPage = () => {
  // Modal / Form state
  const [activeFormType, setActiveFormType] = useState<"volunteer" | "collaborate" | "opportunity" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    type: "Volunteer",
    skillsOrInterest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOpenForm = (type: "volunteer" | "collaborate" | "opportunity", defaultTypeLabel: string) => {
    setActiveFormType(type);
    setFormData((prev) => ({ ...prev, type: defaultTypeLabel }));
    setSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw_YY7ecAhA2tVYmh1xucywWrGdGEdFJqy6_rYtRXQRmMKTYLcg1YN9m8redond8rJR/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", contact: "", type: "Volunteer", skillsOrInterest: "", message: "" });
      }, 1000);
    } catch {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 1 — HERO
          GET INVOLVED · KHAJANI WELFARE SOCIETY
          There are many ways to contribute.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF7F2] overflow-hidden pt-16 lg:pt-24 pb-20 border-b border-[#EAE2D5]">
        <AuroraBackground variant="light" intensity={0.6} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (7 cols) */}
            <AnimeReveal variant="fade-up" className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE7DC] border border-[#DFCFC0] text-[#A6623B] text-xs font-bold tracking-[0.22em] uppercase mb-6 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A6623B]" />
                GET INVOLVED · KHAJANI WELFARE SOCIETY
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#142033] tracking-tight leading-[1.12] mb-6">
                There are many ways to contribute.
              </h1>

              <p className="text-base sm:text-lg text-[#55606E] font-sans font-light leading-relaxed max-w-2xl mb-10">
                Khajani’s work grows through people, institutions and organisations who bring their time, knowledge, resources and opportunities to the communities we work with.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => scrollToSection("ways-to-get-involved")}
                  className="btn-3d-accent inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
                >
                  Find Your Way to Participate <ArrowDown size={14} className="animate-bounce" />
                </button>
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-white border border-[#D8C7B0] text-[#142033] hover:bg-[#F5EFE6] transition-colors shadow-xs"
                >
                  Donate <ArrowRight size={14} />
                </Link>
              </div>
            </AnimeReveal>

            {/* Right: Strong Real Khajani Photo Showing Participation (5 cols) */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5 relative">
              <div className="relative group">
                <div className="rounded-3xl overflow-hidden shadow-[0_16px_36px_rgba(20,32,51,0.12)] border border-[#EAE2D5] bg-white p-2">
                  <img
                    src="/images/projects/royal-sanjhi-training.jpg"
                    alt="Khajani collaborative skill sharing workshop"
                    className="w-full h-[380px] sm:h-[440px] object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                {/* Authentic caption tag */}
                <div className="absolute -bottom-5 right-6 bg-[#FAF7F2] border border-[#EAE2D5] px-5 py-2.5 rounded-xl shadow-md">
                  <p className="font-handwriting text-xl text-[#A6623B] italic leading-none">
                    Collaborative Community Learning
                  </p>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-[#7A7165] mt-1">
                    MATHURA &amp; BRAJ REGION
                  </p>
                </div>
              </div>
            </AnimeReveal>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 2 — WAYS TO GET INVOLVED
          PARTICIPATE
          Find a way that fits.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="ways-to-get-involved" className="py-20 lg:py-24 bg-white border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                PARTICIPATE
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Find a way that fits.
            </h2>
            <p className="text-sm sm:text-base text-[#55606E] font-light mt-4 leading-relaxed">
              Every person brings a distinct perspective and capacity. Explore four primary pathways through which you can be involved in our ongoing work.
            </p>
          </AnimeReveal>

          {/* 4 Primary Routes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. VOLUNTEER */}
            <AnimeReveal variant="fade-up" delay={0}>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#EAE2D5] flex flex-col justify-between h-full hover:border-[#D8C7B0] hover:shadow-lg transition-all duration-300 group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE2D5] flex items-center justify-center text-[#A6623B] mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <Users size={22} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A6623B] block mb-1">
                    VOLUNTEER
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#142033] mb-3">
                    Give your time.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55606E] leading-relaxed mb-6">
                    Contribute your time and skills to relevant Khajani programmes, learning activities, events and community initiatives.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EAE2D5]">
                  <button
                    type="button"
                    onClick={() => scrollToSection("volunteer-section")}
                    className="text-[#A9442A] hover:text-[#88351F] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    Volunteer With Us →
                  </button>
                </div>
              </div>
            </AnimeReveal>

            {/* 2. COLLABORATE */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#EAE2D5] flex flex-col justify-between h-full hover:border-[#D8C7B0] hover:shadow-lg transition-all duration-300 group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE2D5] flex items-center justify-center text-[#A6623B] mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <Handshake size={22} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A6623B] block mb-1">
                    COLLABORATE
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#142033] mb-3">
                    Work with us.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55606E] leading-relaxed mb-6">
                    Khajani welcomes meaningful collaboration with organisations, institutions and professionals whose expertise can strengthen programmes and create practical opportunities.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EAE2D5]">
                  <button
                    type="button"
                    onClick={() => scrollToSection("collaborate-section")}
                    className="text-[#A9442A] hover:text-[#88351F] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    Explore Collaboration →
                  </button>
                </div>
              </div>
            </AnimeReveal>

            {/* 3. SUPPORT A PROGRAMME */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#EAE2D5] flex flex-col justify-between h-full hover:border-[#D8C7B0] hover:shadow-lg transition-all duration-300 group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE2D5] flex items-center justify-center text-[#A6623B] mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <Compass size={22} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A6623B] block mb-1">
                    SUPPORT A PROGRAMME
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#142033] mb-3">
                    Strengthen work on the ground.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55606E] leading-relaxed mb-6">
                    Support a Khajani programme or initiative aligned with your area of interest—from skills and education to heritage, health and community development.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EAE2D5]">
                  <Link
                    to="/projects"
                    className="text-[#A9442A] hover:text-[#88351F] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Explore Our Work →
                  </Link>
                </div>
              </div>
            </AnimeReveal>

            {/* 4. CONTRIBUTE */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl border border-[#EAE2D5] flex flex-col justify-between h-full hover:border-[#D8C7B0] hover:shadow-lg transition-all duration-300 group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#EAE2D5] flex items-center justify-center text-[#A6623B] mb-6 shadow-xs group-hover:scale-105 transition-transform">
                    <HeartHandshake size={22} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A6623B] block mb-1">
                    CONTRIBUTE
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#142033] mb-3">
                    Support the work.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55606E] leading-relaxed mb-6">
                    Financial contributions can help strengthen Khajani’s programmes and community initiatives. Verified 80G tax deductions and direct UPI/bank channels.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EAE2D5]">
                  <Link
                    to="/donate"
                    className="text-[#A9442A] hover:text-[#88351F] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Donate →
                  </Link>
                </div>
              </div>
            </AnimeReveal>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 3 — VOLUNTEER
          VOLUNTEER WITH KHAJANI
          Your skills can have a place here.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="volunteer-section" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EAE2D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                VOLUNTEER WITH KHAJANI
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Your skills can have a place here.
            </h2>
            <p className="text-base text-[#55606E] font-light mt-4 leading-relaxed max-w-2xl mx-auto">
              Volunteering does not have to mean doing everything. Sometimes the most useful contribution is simply bringing the right skill to the right activity.
            </p>
          </AnimeReveal>

          {/* Opportunities Tags / Pill List */}
          <AnimeReveal variant="fade-up" delay={100}>
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE2D5] shadow-xs mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#7A7165] text-center mb-6">
                Depending on programme requirements, opportunities may include:
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  "Teaching & Learning Support",
                  "Skill Sharing",
                  "Workshops",
                  "Digital Support",
                  "Documentation",
                  "Events & Community Activities",
                  "Creative & Professional Expertise",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-[#FAF7F2] border border-[#EAE2D5] text-[#142033] text-xs sm:text-sm font-medium hover:border-[#A6623B] transition-colors select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Simple CTA */}
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => handleOpenForm("volunteer", "Volunteer")}
                  className="btn-3d-accent inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
                >
                  Become a Volunteer →
                </button>
              </div>
            </div>
          </AnimeReveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 4 — COLLABORATE
          PARTNERSHIPS & COLLABORATION
          Good work becomes stronger through collaboration.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="collaborate-section" className="py-20 lg:py-24 bg-white border-b border-[#EAE2D5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                PARTNERSHIPS &amp; COLLABORATION
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Good work becomes stronger through collaboration.
            </h2>
            <p className="text-base text-[#55606E] font-light mt-4 leading-relaxed max-w-3xl mx-auto">
              Khajani works across skills, education, traditional crafts, community initiatives and social development. We welcome conversations with institutions and organisations where there is a meaningful alignment of purpose and expertise.
            </p>
          </AnimeReveal>

          {/* Three Understated Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* 1. Institutions & Organisations */}
            <AnimeReveal variant="fade-up" delay={0}>
              <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE2D5] h-full flex flex-col justify-between hover:border-[#D8C7B0] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE2D5] flex items-center justify-center text-[#A6623B] mb-5 shadow-xs">
                    <Building2 size={20} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#142033] mb-3">
                    Institutions &amp; Organisations
                  </h3>
                  <p className="text-sm text-[#55606E] leading-relaxed">
                    Programme collaboration, knowledge partnerships and institutional engagement with government departments, educational bodies, and foundations.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#EAE2D5]">
                  <span className="text-[10px] font-mono tracking-widest text-[#7A7165] uppercase font-bold">
                    PROGRAMMATIC MOUS &amp; ACADEMIA
                  </span>
                </div>
              </div>
            </AnimeReveal>

            {/* 2. Businesses & CSR */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE2D5] h-full flex flex-col justify-between hover:border-[#D8C7B0] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE2D5] flex items-center justify-center text-[#A6623B] mb-5 shadow-xs">
                    <Briefcase size={20} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#142033] mb-3">
                    Businesses &amp; CSR
                  </h3>
                  <p className="text-sm text-[#55606E] leading-relaxed">
                    Opportunities to support or collaborate on relevant social-development initiatives, livelihood programs, and community infrastructure mandates.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#EAE2D5]">
                  <span className="text-[10px] font-mono tracking-widest text-[#7A7165] uppercase font-bold">
                    CSR MANDATES &amp; SPONSORSHIPS
                  </span>
                </div>
              </div>
            </AnimeReveal>

            {/* 3. Professionals & Practitioners */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EAE2D5] h-full flex flex-col justify-between hover:border-[#D8C7B0] transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#EAE2D5] flex items-center justify-center text-[#A6623B] mb-5 shadow-xs">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#142033] mb-3">
                    Professionals &amp; Practitioners
                  </h3>
                  <p className="text-sm text-[#55606E] leading-relaxed">
                    Specialised knowledge, mentoring, workshops, design inputs, master classes, and technical or creative expertise for artisans and learners.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#EAE2D5]">
                  <span className="text-[10px] font-mono tracking-widest text-[#7A7165] uppercase font-bold">
                    MENTORSHIP &amp; EXPERT INPUTS
                  </span>
                </div>
              </div>
            </AnimeReveal>

          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => handleOpenForm("collaborate", "Institutional Collaboration / CSR")}
              className="btn-3d-accent inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
            >
              Start a Conversation →
            </button>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 5 — CREATE OPPORTUNITIES
          CONNECT PEOPLE WITH OPPORTUNITY
          Sometimes support begins with a connection.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EAE2D5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                CONNECT PEOPLE WITH OPPORTUNITY
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Sometimes support begins with a connection.
            </h2>
            <p className="text-base text-[#55606E] font-light mt-4 leading-relaxed max-w-2xl mx-auto">
              Individuals and organisations can also engage by connecting trained participants, artisans, women-led enterprises and community initiatives with relevant opportunities.
            </p>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={100}>
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE2D5] shadow-xs text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[#7A7165] mb-8">
                The kinds of connections may include:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                {[
                  "Employment",
                  "Market Access",
                  "Training",
                  "Mentorship",
                  "Professional Expertise",
                  "Institutional Opportunities",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EAE2D5] text-[#142033] font-serif font-bold text-sm sm:text-base hover:border-[#A6623B] transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleOpenForm("opportunity", "Creating Opportunities / Market Linkages")}
                className="btn-3d-accent inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
              >
                Connect With Khajani →
              </button>
            </div>
          </AnimeReveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 6 — CLOSING
          BE PART OF THE JOURNEY
          Every contribution can begin with a conversation.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden text-white text-center">
        {/* Genuine Khajani community photograph with restrained warm overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/shg-federation.jpg"
            alt="Khajani Welfare Society community gathering"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142033]/95 via-[#142033]/85 to-[#142033]/75 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#D8C7B0] text-xs font-bold tracking-[0.25em] uppercase mb-6 backdrop-blur-md">
              <Sparkles size={12} /> BE PART OF THE JOURNEY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-tight">
              Every contribution can begin with a conversation.
            </h2>

            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Whether you want to volunteer, collaborate, share expertise, create an opportunity or support a programme, we would be glad to hear from you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenForm("collaborate", "General Enquiry / Start a Conversation")}
                className="btn-3d-accent inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg cursor-pointer"
              >
                Get in Touch →
              </button>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-colors backdrop-blur-md shadow-sm"
              >
                Donate →
              </Link>
            </div>

            <div className="mt-14 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
              <a
                href="mailto:info@khajaniwelfaresociety.com"
                className="hover:text-white flex items-center gap-2 transition-colors"
              >
                <Mail size={14} /> info@khajaniwelfaresociety.com
              </a>
              <span className="font-mono tracking-widest uppercase text-[10px]">
                KHAJANI WELFARE SOCIETY · MATHURA &amp; BRAJ
              </span>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SHORT ENQUIRY MODAL (Clean, Non-Intrusive, Highly Functional)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      {activeFormType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#FAF7F2] border border-[#EAE2D5] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            <button
              type="button"
              onClick={() => setActiveFormType(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white border border-[#EAE2D5] flex items-center justify-center text-[#7A7165] hover:text-[#142033] hover:bg-[#F2ECE1] transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#142033] mb-2">
                  Message Received
                </h3>
                <p className="text-sm text-[#55606E] leading-relaxed mb-6">
                  Thank you for reaching out. A representative from Khajani Welfare Society will get in touch with you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveFormType(null)}
                  className="btn-3d-accent px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A6623B] block mb-1">
                  START A CONVERSATION
                </span>
                <h3 className="text-2xl font-display font-bold text-[#142033] mb-2">
                  {activeFormType === "volunteer"
                    ? "Volunteer Enquiry"
                    : activeFormType === "collaborate"
                    ? "Partnership & Collaboration"
                    : "Connect With Khajani"}
                </h3>
                <p className="text-xs text-[#55606E] mb-6">
                  Please share a few details and we will follow up directly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#7A7165] block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8C7B0] text-sm text-[#142033] outline-none focus:border-[#A6623B] shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#7A7165] block mb-1.5">
                      Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="email@domain.com or +91..."
                      className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8C7B0] text-sm text-[#142033] outline-none focus:border-[#A6623B] shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#7A7165] block mb-1.5">
                      Type of Engagement
                    </label>
                    <input
                      type="text"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8C7B0] text-sm text-[#142033] outline-none focus:border-[#A6623B] shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#7A7165] block mb-1.5">
                      Relevant Skills or Area of Interest
                    </label>
                    <input
                      type="text"
                      value={formData.skillsOrInterest}
                      onChange={(e) => setFormData({ ...formData, skillsOrInterest: e.target.value })}
                      placeholder="e.g. Teaching, Design, CSR, Market Linkage..."
                      className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8C7B0] text-sm text-[#142033] outline-none focus:border-[#A6623B] shadow-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-[#7A7165] block mb-1.5">
                      Short Note or Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe how you would like to participate..."
                      className="w-full px-4 py-3 bg-white rounded-xl border border-[#D8C7B0] text-sm text-[#142033] outline-none focus:border-[#A6623B] shadow-xs resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-3d-accent w-full py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Submit Enquiry <Send size={13} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}
    </Layout>
  );
};

export default GetInvolvedPage;
