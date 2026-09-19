import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import MediaLightbox from "@/components/MediaLightbox";
import {
  Sparkles,
  ArrowRight,
  Heart,
  Droplets,
  ShieldCheck,
  CheckCircle2,
  Building2,
  School,
  Flame,
  Users,
  MessageCircle,
  TrendingUp,
  Smile,
  BookOpen,
  ArrowUpRight,
  Boxes,
  HeartPulse,
  Award
} from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
  tag: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "/images/projects/sanitary-napkin-vending.jpg",
    caption: "Automated sanitary napkin vending machine installed in a government school",
    tag: "Vending Machine Installation",
  },
  {
    url: "/images/projects/sanitary-napkin.jpg",
    caption: "Menstrual hygiene product orientation and practical awareness discussion",
    tag: "Hygiene Orientation",
  },
  {
    url: "/images/projects/brij-sangini-icon.jpg",
    caption: "Community health awareness gathering and health checkup interaction",
    tag: "Health Awareness",
  },
  {
    url: "/images/projects/shakti-ek-adhaar-1.jpg",
    caption: "Women's wellness and preventive hygiene workshop session",
    tag: "Community Session",
  },
  {
    url: "/images/projects/kla-students.jpg",
    caption: "Adolescent schoolgirls participating in an interactive hygiene guidance camp",
    tag: "School Programme",
  },
  {
    url: "/images/projects/shakti-ek-adhaar-2.jpg",
    caption: "Comfortable discussion circle breaking cultural taboos around menstruation",
    tag: "Open Discussion",
  },
  {
    url: "/images/projects/hero-training.jpg",
    caption: "Empowering women leaders with maternal and menstrual health knowledge",
    tag: "Women Volunteers",
  },
  {
    url: "/images/projects/shakti-ek-adhaar-3.jpg",
    caption: "Community participation during voluntary health support initiatives",
    tag: "Community Support",
  },
];

const BrijSanginiPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    document.title = "Brij-Sangini | Menstrual Hygiene & Women's Health in Mathura | Khajani";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Brij-Sangini is Khajani Welfare Society's women's health initiative in Mathura, working on menstrual hygiene awareness, sanitary napkin access, safe disposal and blood donation."
      );
    }
  }, []);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="bg-primary/95 border-b border-white/10 text-white/70 text-xs py-3">
        <div className="container mx-auto px-4 max-w-6xl flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-white transition-colors">Programmes</Link>
          <span>/</span>
          <span className="text-secondary font-medium">Brij-Sangini</span>
        </div>
      </nav>

      {/* ── Screen 1: Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-primary text-white overflow-hidden py-20 lg:py-28">
        <AuroraBackground variant="dark" intensity={1.2} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/sanitary-napkin-vending.jpg"
            alt="Brij-Sangini menstrual hygiene initiative"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-white/10 text-secondary border border-secondary/30 mb-6 backdrop-blur-sm">
              <Sparkles size={13} className="text-secondary" />
              Women's Health · Menstrual Hygiene · Dignity
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
              BRIJ-SANGINI
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-secondary/95 max-w-3xl mx-auto mb-6 leading-relaxed">
              Health, hygiene and dignity for women and girls
            </p>

            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Brij-Sangini brings together Khajani Welfare Society’s work around women’s health, menstrual hygiene,
              blood donation and health awareness. The programme focuses on practical needs that directly affect the
              everyday health, confidence and well-being of women, girls and communities.
            </p>

            {/* 5 Core Pillars */}
            <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4 py-3 px-6 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-white/90 mb-10 shadow-lg">
              <span className="text-secondary font-semibold">Women’s Health</span>
              <span className="text-white/40">·</span>
              <span>Menstrual Hygiene</span>
              <span className="text-white/40">·</span>
              <span>Awareness</span>
              <span className="text-white/40">·</span>
              <span>Blood Donation</span>
              <span className="text-white/40">·</span>
              <span className="text-secondary font-semibold">Dignity</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#school-infrastructure"
                className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                <span>School Infrastructure</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#how-it-works"
                className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white border-white/30 hover:bg-white/10"
              >
                How It Works
              </a>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 2: Simple Information Can Make a Real Difference ── */}
      <section className="py-20 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                  Foundational Principle
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                  Simple information can make a real difference
                </h2>
                <div className="h-1 w-20 bg-secondary mb-6 rounded-full" />
                <p className="text-lg text-accent font-serif italic mb-4">
                  Health begins with awareness and access
                </p>
                <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-serif">
                  <p>
                    Many health concerns become harder when people do not have the right information, access to basic facilities or a comfortable space to talk about them.
                  </p>
                  <p className="text-foreground/90 font-sans text-base">
                    Through Brij-Sangini, Khajani conducts awareness activities and practical initiatives that address health and hygiene in a direct and understandable way.
                  </p>
                  <p className="text-foreground/90 font-sans text-base">
                    The focus is not only on conducting an event, but on <strong className="text-primary font-semibold">helping people understand the issue and have access to practical support</strong>.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="clay-card p-8 rounded-3xl border border-border/80 bg-background/90 shadow-xl space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-base">Practical Health Care</h4>
                      <p className="text-xs text-muted-foreground">Community-first approach</p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Comfortable, taboo-free environments for dialogue</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Direct physical access to hygiene supplies in schools</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Safe, hygienic disposal mechanisms to maintain clean facilities</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Regular voluntary community blood donation camps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 3: Menstrual Health & Hygiene ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Core Strand
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
              Menstrual health &amp; hygiene
            </h2>
            <p className="text-xl font-serif italic text-accent font-medium mb-6">
              Making periods easier to understand and manage
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              Menstrual health is an important part of Brij-Sangini. Khajani works with girls and women through menstrual-hygiene awareness programmes that encourage open, practical conversations around periods, personal hygiene and safe menstrual practices.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { title: "Better Information", desc: "Clear facts without myths or stigma" },
                { title: "Better Hygiene", desc: "Clean routines and safe materials" },
                { title: "Greater Confidence", desc: "Comfort attending school every day" },
                { title: "Greater Dignity", desc: "Everyday respect and comfort" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="clay-card p-6 rounded-2xl border border-border/80 bg-card hover:border-accent/30 transition-all text-center flex flex-col justify-center"
                >
                  <h3 className="font-display font-bold text-primary text-base mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 4: Sanitary Napkin Access in Schools and Colleges (Major Highlight) ── */}
      <section id="school-infrastructure" className="py-20 lg:py-24 bg-primary text-white relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.3} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Infrastructure Milestone · 2020
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Sanitary napkin access in schools and colleges
              </h2>
              <p className="text-xl font-serif italic text-secondary mb-6">
                Awareness works better when facilities are available
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mb-8 rounded-full" />
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
                Khajani’s menstrual-hygiene work went beyond awareness sessions to provide tangible, practical infrastructure directly inside educational institutions where adolescent girls study.
              </p>
            </div>
          </AnimeReveal>

          {/* 3 Metric Badges */}
          <AnimeReveal variant="fade-up" delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-md text-center hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mx-auto mb-4">
                  <Boxes size={24} />
                </div>
                <div className="text-5xl sm:text-6xl font-display font-bold text-secondary mb-2">25</div>
                <h3 className="text-base font-bold text-white mb-1">Sanitary Napkin Vending Machines</h3>
                <p className="text-xs text-white/70">Installed for automated, discreet supply</p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-md text-center hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mx-auto mb-4">
                  <Flame size={24} />
                </div>
                <div className="text-5xl sm:text-6xl font-display font-bold text-secondary mb-2">25</div>
                <h3 className="text-base font-bold text-white mb-1">Sanitary Napkin Destroyers</h3>
                <p className="text-xs text-white/70">Safe electric incinerators for hygienic disposal</p>
              </div>

              <div className="p-8 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-md text-center hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mx-auto mb-4">
                  <School size={24} />
                </div>
                <div className="text-5xl sm:text-6xl font-display font-bold text-secondary mb-2">25</div>
                <h3 className="text-base font-bold text-white mb-1">Government Schools &amp; Colleges</h3>
                <p className="text-xs text-white/70">Educational institutions equipped in 2020</p>
              </div>
            </div>
          </AnimeReveal>

          {/* Visual Sequence: Awareness → Easy Access → Safe Disposal → Better Hygiene */}
          <AnimeReveal variant="fade-up" delay={250}>
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl">
              <div className="text-center mb-6">
                <span className="text-[11px] font-mono tracking-widest text-secondary uppercase font-bold">
                  The Complete Hygiene Loop
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
                {[
                  { step: "01", name: "AWARENESS", desc: "Clear and open discussion", icon: MessageCircle },
                  { step: "02", name: "EASY ACCESS", desc: "Automated vending units in campus", icon: Boxes },
                  { step: "03", name: "SAFE DISPOSAL", desc: "Incinerator destroyers in washrooms", icon: Flame },
                  { step: "04", name: "BETTER HYGIENE", desc: "Zero dropouts due to period stigma", icon: Smile },
                ].map((item) => (
                  <div key={item.name} className="p-5 rounded-2xl bg-white/10 border border-white/15 text-center flex flex-col items-center hover:bg-white/15 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-3">
                      <item.icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-white/50 mb-1">{item.step}</span>
                    <h4 className="font-display font-bold text-white text-sm sm:text-base mb-1 tracking-wider">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-white/70 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 5: How the Menstrual-Hygiene Initiative Works (4-Step Graphic) ── */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Operational Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                How the menstrual-hygiene initiative works
              </h2>
              <p className="text-lg font-serif italic text-accent font-medium">
                Understand. Access. Use. Dispose safely.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                action: "TALK & EXPLAIN",
                desc: "Girls receive clear and age-appropriate information about menstrual health and hygiene from experienced counsellors.",
                icon: MessageCircle,
              },
              {
                step: "02",
                action: "PROVIDE ACCESS",
                desc: "Sanitary napkin vending machines make menstrual products readily and discreetly accessible right where the facilities are installed.",
                icon: Boxes,
              },
              {
                step: "03",
                action: "SUPPORT SAFE USE",
                desc: "Awareness helps girls understand basic hygiene, regular replacement cycles, and safe, comfortable menstrual practices.",
                icon: Heart,
              },
              {
                step: "04",
                action: "SAFE DISPOSAL",
                desc: "Destroyers provide a practical, clean, and smoke-free way to safely dispose of used sanitary napkins without clogging plumbing.",
                icon: Flame,
              },
            ].map((s, idx) => (
              <AnimeReveal key={s.step} variant="fade-up" delay={idx * 80} className="h-full">
                <div className="clay-card p-6 rounded-2xl border border-border flex flex-col justify-between h-full bg-background hover:shadow-lg transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-accent/10 text-accent">
                        {s.step}
                      </span>
                      <s.icon size={18} className="text-muted-foreground/70" />
                    </div>
                    <h3 className="font-display font-bold text-base text-primary mb-2 tracking-wide">
                      {s.action}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screen 6: Health Awareness & Blood Donation (Two-Part Overview) ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Health Awareness */}
            <AnimeReveal variant="fade-right" className="h-full">
              <div className="clay-card p-8 rounded-3xl border border-border flex flex-col justify-between h-full bg-card group hover:border-accent/40 transition-all">
                <div>
                  <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                    Everyday Wellness
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    Health awareness
                  </h3>
                  <p className="text-base font-serif italic text-accent font-medium mb-4">
                    Talking about health without hesitation
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-serif">
                    Brij-Sangini creates opportunities for women and girls to learn about health and hygiene issues that affect everyday life. Depending on the initiative, programmes include awareness sessions, interactive group discussions, and practical guidance in a warm, approachable community setting.
                  </p>
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border/50 text-xs text-muted-foreground space-y-1.5">
                    <p className="font-semibold text-primary">Warm &amp; Approachable Atmosphere:</p>
                    <p>Focusing on friendly dialogue, school demonstrations, and women talking together rather than clinical environments.</p>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* Blood Donation */}
            <AnimeReveal variant="fade-left" delay={150} className="h-full">
              <div className="clay-card p-8 rounded-3xl border border-border flex flex-col justify-between h-full bg-card group hover:border-accent/40 transition-all">
                <div>
                  <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                    Community Giving
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    Blood donation
                  </h3>
                  <p className="text-base font-serif italic text-accent font-medium mb-4">
                    Connecting people through a simple act of support
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-serif">
                    Blood donation camps are another vital part of Brij-Sangini. Khajani organises and supports voluntary blood-donation initiatives that encourage eligible community members to participate and contribute directly to an important regional healthcare need.
                  </p>

                  <div className="p-4 rounded-2xl bg-accent/5 border border-accent/20">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold block mb-2">
                      Voluntary Pathway
                    </span>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-primary">
                      <span>Awareness</span>
                      <span>→</span>
                      <span>Participation</span>
                      <span>→</span>
                      <span>Donation</span>
                      <span>→</span>
                      <span className="text-accent font-bold">Community Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Screen 7: Working with Girls Where They Learn ── */}
      <section className="py-20 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Educational Spaces
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4 leading-tight">
                Working with girls where they learn
              </h2>
              <p className="text-xl font-serif italic text-accent font-medium mb-6">
                Taking awareness into educational spaces
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-serif">
                Schools and colleges are important settings for menstrual-health awareness because girls can receive practical information at an age when it is particularly useful.
              </p>
            </div>

            <div className="clay-card p-8 sm:p-10 rounded-3xl border border-border bg-background shadow-lg max-w-3xl mx-auto text-center">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-primary mb-3">
                Awareness + Access + Infrastructure
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-serif">
                Khajani’s documented installation of sanitary napkin vending machines and destroyers across government schools and colleges gives us a strong example of combining all three elements into one sustained intervention.
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <CheckCircle2 size={16} />
                <span>Documented Field Implementation Across 25 Campuses</span>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 8: Connected with Khajani Learning Academy ── */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimeReveal variant="fade-up">
            <div className="p-8 rounded-3xl bg-muted/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-accent uppercase font-bold block mb-1">
                  Cross-Programme Integration
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-primary mb-2">
                  Connected with Khajani Learning Academy
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
                  Health and hygiene awareness forms an integral part of Khajani’s wider work with school-going girls. KLA sessions include menstrual hygiene and safety workshops alongside regular academic support.
                </p>
              </div>
              <Link
                to="/projects/kla"
                className="btn-3d-accent px-6 py-3 text-xs font-bold uppercase tracking-widest shrink-0 inline-flex items-center gap-2"
              >
                <span>Explore KLA</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 9: Brij-Sangini in Pictures (Interactive Gallery) ── */}
      <section className="py-20 lg:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Photo Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Brij-Sangini in pictures
              </h2>
              <p className="text-lg font-serif italic text-accent font-medium mb-4">
                Awareness, access and community participation
              </p>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Genuine Khajani field photographs capturing school installations, menstrual health dialogues, and voluntary healthcare camps, captured with care to preserve participants' dignity and privacy.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <AnimeReveal key={idx} variant="fade-up" delay={idx * 60}>
                <div
                  onClick={() => openLightbox(idx)}
                  className="group relative aspect-square rounded-2xl overflow-hidden border border-border bg-muted cursor-pointer hover:shadow-xl transition-all"
                >
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-secondary mb-1">
                      {img.tag}
                    </span>
                    <p className="text-xs text-white leading-snug line-clamp-2">
                      {img.caption}
                    </p>
                  </div>
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-medium bg-black/60 text-white/90 backdrop-blur-xs group-hover:hidden">
                    {img.tag}
                  </span>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screen 10: Why Brij-Sangini Matters (Extremely Simple & Visual) ── */}
      <section className="py-20 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Core Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
              Why Brij-Sangini matters
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-12 rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {[
                {
                  title: "INFORMATION",
                  desc: "Help women and girls understand important health and hygiene issues.",
                  icon: MessageCircle,
                },
                {
                  title: "ACCESS",
                  desc: "Make practical facilities and products readily available where possible.",
                  icon: Boxes,
                },
                {
                  title: "DIGNITY",
                  desc: "Help make menstruation and women's health easier to discuss and manage.",
                  icon: Heart,
                },
                {
                  title: "COMMUNITY",
                  desc: "Encourage people to participate in vital initiatives such as blood donation.",
                  icon: Users,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="clay-card p-6 rounded-2xl border border-border/80 bg-card hover:border-accent/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <item.icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-primary text-base mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 11: Call to Action / Engagement ── */}
      <section className="py-20 lg:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
              Interested in supporting health and hygiene initiatives?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Schools, colleges, institutions, healthcare organisations, CSR partners and community groups can connect with Khajani to explore awareness programmes and practical health initiatives.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                <span>CONTACT KHAJANI</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/get-involved"
                className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest"
              >
                <span>WORK WITH US</span>
              </Link>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 12: Closing Section ── */}
      <section className="py-16 bg-primary text-white text-center border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimeReveal variant="fade-up">
            <p className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              “Better awareness. Better access. Health with dignity.”
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-secondary uppercase font-semibold">
              <span>Health</span>
              <span>·</span>
              <span>Hygiene</span>
              <span>·</span>
              <span>Awareness</span>
              <span>·</span>
              <span>Community</span>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      <MediaLightbox
        items={GALLERY_IMAGES.map((img) => ({
          image: img.url,
          title: img.tag,
          desc: img.caption,
        }))}
        currentIndex={lightboxOpen ? activeImageIndex : null}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(idx) => setActiveImageIndex(idx)}
      />
    </Layout>
  );
};

export default BrijSanginiPage;
