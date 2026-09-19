import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { useAnimeCounter } from "@/hooks/use-anime-counter";
import {
  ArrowRight, ArrowDown, Sparkles, Award, Building2,
  Users, CheckCircle2, ShieldCheck, Heart, Landmark,
  BookOpen, Compass, Feather, FileText, ChevronRight,
  ExternalLink, Layers, GraduationCap, Briefcase, Leaf,
  Handshake, HeartHandshake, MapPin, Sprout
} from "lucide-react";

/* ─── Metric Counter Component for Screen 6 ─── */
function ImpactCounter({
  target,
  suffix = "+",
  label,
  subtext,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  label: string;
  subtext: string;
  delay?: number;
}) {
  const { ref, displayed } = useAnimeCounter({
    target,
    duration: 2200,
    suffix,
  });

  return (
    <AnimeReveal variant="fade-up" delay={delay} className="h-full">
      <div className="clay-card rounded-xl p-3.5 sm:p-4 flex flex-col justify-between h-full border border-border/70 hover:border-secondary/50 hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5">
        <div>
          <div className="overflow-hidden mb-1.5">
            <span
              ref={ref as React.RefObject<HTMLSpanElement>}
              className="text-2xl sm:text-3xl lg:text-[22px] xl:text-[26px] 2xl:text-3xl font-display font-bold text-primary block tabular-nums tracking-tight whitespace-nowrap group-hover:text-accent transition-colors"
            >
              {displayed}
            </span>
          </div>
          <div className="h-0.5 w-6 bg-secondary/60 rounded-full mb-2 group-hover:w-10 transition-all duration-300" />
          <h4 className="font-display font-bold text-sm sm:text-sm lg:text-[13px] xl:text-sm text-foreground leading-snug min-h-[2.2rem] flex items-center">
            {label}
          </h4>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed mt-2 pt-2 border-t border-border/40">
          {subtext}
        </p>
      </div>
    </AnimeReveal>
  );
}

const AboutPage = () => {
  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 1 — ABOUT HERO
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <header className="relative bg-card overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 border-b border-border">
        <AuroraBackground variant="light" intensity={1.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* 55% Desktop Text Column */}
            <AnimeReveal variant="fade-left" className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                ABOUT KHAJANI · MATHURA · SINCE 2007
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-primary leading-[1.08] tracking-tight">
                Rooted in <span className="font-serif italic font-normal text-secondary">Mathura.</span>
                <br />
                Growing with its <span className="text-accent">people.</span>
              </h1>

              {/* Hero Supporting Copy */}
              <div className="space-y-4 max-w-2xl text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Khajani Welfare Society is a Mathura-based organisation working with women and communities through skills, livelihoods, education and the preservation of traditional craft knowledge.
                </p>
                <p>
                  Since 2007, its journey has remained closely connected to the people, skills and cultural landscape of Braj.
                </p>
              </div>

              {/* Accent Line */}
              <div className="pt-2">
                <p className="font-handwriting text-2xl sm:text-3xl text-secondary font-normal italic tracking-wide">
                  People · Skills · Heritage · Opportunity
                </p>
              </div>

              {/* Subtle Scroll CTA */}
              <div className="pt-4">
                <a
                  href="#our-beginning"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors group"
                >
                  <span className="p-2.5 rounded-full bg-primary/5 group-hover:bg-accent/10 transition-colors border border-border/80">
                    <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
                  </span>
                  Our Journey ↓
                </a>
              </div>
            </AnimeReveal>

            {/* 45% Desktop Editorial Photograph Column */}
            <AnimeReveal variant="fade-right" delay={150} className="lg:col-span-5">
              <div className="relative">
                {/* Editorial Photo Frame */}
                <div className="rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-2xl relative aspect-[4/3.2] sm:aspect-[4/3] group">
                  <img
                    src="/images/about/classroom.jpg"
                    alt="Khajani Welfare Society women in skill training, Mathura"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Restrained Photo Caption */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-muted-foreground">
                  <p className="italic font-serif">
                    A grassroots journey that began in Mathura in 2007.
                  </p>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70">
                    Mathura, UP
                  </span>
                </div>
              </div>
            </AnimeReveal>

          </div>

          {/* Bottom Transition to Screen 2 */}
          <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.25em] text-accent uppercase block">
                IT BEGAN WITH PEOPLE
              </span>
              <p className="text-xs text-muted-foreground mt-0.5 font-light">
                Three founders. A grassroots beginning. A journey that started in Mathura.
              </p>
            </div>
            <a
              href="#our-beginning"
              className="text-xs font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              Explore Our Beginning <ChevronRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 2 — OUR BEGINNING + WHAT WE BELIEVE
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="our-beginning" className="py-14 sm:py-16 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Part A: Our Beginning */}
          <div className="max-w-4xl mb-12 sm:mb-14">
            <AnimeReveal variant="fade-up">
              <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-3">
                OUR BEGINNING · MATHURA · 2007
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-[1.12]">
                It began with people,
                <br />
                <span className="text-secondary font-serif italic">not a programme.</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                <p>
                  Khajani's story began in Mathura in 2007 with three people who brought different experiences, but shared a belief in the value of practical skills and meaningful opportunities.
                </p>
                <p>
                  <strong className="font-semibold text-foreground">Dr. Harimohan Maheshwari</strong>, a retired veterinary doctor with a long background in public service, <strong className="font-semibold text-foreground">Abha Maheshwari</strong>, and <strong className="font-semibold text-foreground">Shipra Rathi</strong>, a fashion designer with experience in skill training, came together to begin what would gradually grow into Khajani Welfare Society.
                </p>
                <p>
                  The early work was grassroots and practical—creating opportunities for women to learn useful skills and strengthen their capabilities. There was no large institutional beginning; the organisation grew through its work, its relationships with people and a deeper understanding of the communities around it.
                </p>
                <p>
                  Over time, that beginning expanded into a wider body of work across skills, livelihoods, education, traditional crafts and community development, while remaining closely connected to Mathura and the cultural landscape of Braj.
                </p>
              </div>

              <div className="mt-6 pt-3 border-l-4 border-secondary pl-5">
                <p className="font-handwriting text-xl sm:text-2xl text-primary font-normal italic">
                  Different experiences. A shared purpose.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* Part B: What We Believe (Redesigned matching Mockup) */}
          <div className="pt-10 sm:pt-12 border-t border-border/80">
            {/* Header: Left Headline + Right Supporting Art */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8 sm:mb-10">
              {/* Left Column: Eyebrow, Large Serif Headline & Narrative */}
              <AnimeReveal variant="fade-left" className="lg:col-span-7">
                {/* Eyebrow with horizontal accent rule */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#A32A29] text-xs font-bold tracking-[0.22em] uppercase font-mono">
                    WHAT WE BELIEVE
                  </span>
                  <div className="h-px w-12 bg-[#C4A480]/60" />
                </div>

                {/* Headline matching Mockup */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-[#1A202C] leading-[1.15] tracking-tight">
                  People already carry <br />
                  <span className="text-[#B8864E] font-serif italic font-normal">
                    knowledge, ability <br />
                    and possibility.
                  </span>
                </h3>

                {/* Paragraph */}
                <p className="text-[#4A5568] text-xs sm:text-sm max-w-xl font-light leading-relaxed mt-3">
                  Khajani’s role is not simply to deliver programmes. It is to recognise existing capabilities, strengthen them through learning and opportunity, and help create pathways through which people can move forward.
                </p>
              </AnimeReveal>

              {/* Right Column: User-provided Supporting PNG Art & Ambient Wash */}
              <AnimeReveal variant="fade-right" delay={150} className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-[380px] flex items-center justify-center">
                  {/* Soft organic watercolor wash blob behind the graphic */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-72 h-48 sm:h-56 bg-[#EFE7DC]/70 rounded-[55%_45%_65%_35%] blur-xl pointer-events-none -z-0" />

                  {/* Supporting PNG Art */}
                  <img
                    src="/images/about/what-we-believe-art.png"
                    alt="Stronger communities brighter tomorrows — People · Heritage · Opportunity"
                    className="w-full h-auto object-contain select-none pointer-events-none relative z-10"
                  />
                </div>
              </AnimeReveal>
            </div>

            {/* 6 Belief Pillars Grid (3x2) - Compact & Smaller Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {[
                {
                  num: "01",
                  tag: "DIGNITY",
                  title: "People first. Always.",
                  desc: "Every person should have the opportunity to participate, learn and progress with dignity.",
                  icon: Heart,
                  iconBg: "bg-[#FDF2F0]",
                  iconColor: "text-[#B8423E]",
                },
                {
                  num: "02",
                  tag: "CAPABILITY",
                  title: "Skills that can be carried forward.",
                  desc: "Learning matters most when it becomes a practical capability that continues beyond a training programme.",
                  icon: GraduationCap,
                  iconBg: "bg-[#EEF4F8]",
                  iconColor: "text-[#2B6CB0]",
                },
                {
                  num: "03",
                  tag: "HERITAGE",
                  title: "Tradition as a living strength.",
                  desc: "Traditional knowledge deserves not only to be preserved, but practised, strengthened and passed forward.",
                  icon: Leaf,
                  iconBg: "bg-[#FAF4EB]",
                  iconColor: "text-[#B8864E]",
                },
                {
                  num: "04",
                  tag: "OPPORTUNITY",
                  title: "Connecting ability with possibility.",
                  desc: "Skills become more meaningful when they can open pathways to livelihoods, enterprise, employment or further learning.",
                  icon: Compass,
                  iconBg: "bg-[#F0F5F1]",
                  iconColor: "text-[#38A169]",
                },
                {
                  num: "05",
                  tag: "COMMUNITY",
                  title: "Change grows through participation.",
                  desc: "Lasting work begins with understanding local realities and working with people rather than around them.",
                  icon: Users,
                  iconBg: "bg-[#FDF3EE]",
                  iconColor: "text-[#DD6B20]",
                },
                {
                  num: "06",
                  tag: "CONTINUITY",
                  title: "Keeping knowledge relevant for another generation.",
                  desc: "Khajani seeks to connect valuable traditional knowledge with contemporary skills and opportunities so that heritage can continue to live through people.",
                  icon: Layers,
                  iconBg: "bg-[#F0F2F8]",
                  iconColor: "text-[#4C51BF]",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimeReveal key={item.num} variant="fade-up" delay={i * 60}>
                    <div className="bg-white/95 rounded-2xl border border-[#EBE3D7] p-4.5 sm:p-5 flex flex-col justify-between h-full shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#C4A480]/60 transition-all duration-300 group hover:-translate-y-0.5">
                      <div>
                        {/* Top Row: Icon badge + Card Number */}
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`w-9 h-9 rounded-full flex items-center justify-center ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-105`}
                          >
                            <Icon size={18} strokeWidth={1.8} />
                          </div>
                          <span className="text-xs font-mono text-[#C4B9A9] tracking-wider font-semibold">
                            {item.num}
                          </span>
                        </div>

                        {/* Category Tag */}
                        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#A32A29] block mb-1 font-mono">
                          {item.tag}
                        </span>

                        {/* Title */}
                        <h4 className="text-base sm:text-lg font-serif font-bold text-[#1A202C] leading-snug mb-1.5 group-hover:text-[#A32A29] transition-colors">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Right Arrow */}
                      <div className="pt-3 flex justify-end">
                        <ArrowRight
                          size={15}
                          strokeWidth={1.75}
                          className="text-[#C4A480] group-hover:text-[#A32A29] group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>
                  </AnimeReveal>
                );
              })}
            </div>

            {/* Bottom Footer Strip matching Mockup */}
            <div className="mt-8 pt-6 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#718096]/80 font-medium">
                MATHURA · BRAJ · KHAJANI
              </div>
              <div className="font-handwriting text-xl sm:text-2xl text-[#C4A480] italic">
                People · Heritage · Opportunity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 3 — KHAJANI AT A GLANCE + OUR ROOTS
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="at-a-glance" className="py-14 sm:py-16 bg-card border-y border-border scroll-mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Section — Khajani At A Glance */}
          <div className="mb-12 sm:mb-14">
            <AnimeReveal variant="fade-up" className="max-w-3xl mb-8">
              <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-3">
                KHAJANI AT A GLANCE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">
                Local roots. An established institution.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2.5 font-light leading-relaxed">
                Khajani Welfare Society has grown from a grassroots initiative in Mathura into a registered organisation working across skill development, livelihoods, traditional crafts, education and community development.
              </p>
            </AnimeReveal>

            {/* 4 Clean Fact Cards - Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  metric: "2007",
                  label: "The Beginning",
                  desc: "Khajani's grassroots journey begins in Mathura.",
                },
                {
                  metric: "Mathura, UP",
                  label: "Our Home",
                  desc: "The city where Khajani began and continues to be based.",
                },
                {
                  metric: "Registered Society",
                  label: "Institutional Identity",
                  desc: "Registered under the Societies Registration Act, 1860.",
                },
                {
                  metric: "12A & 80G",
                  label: "Statutory Recognition",
                  desc: "Valid income-tax registrations supporting institutional credibility and eligible giving.",
                },
              ].map((card, i) => (
                <AnimeReveal key={card.label} variant="fade-up" delay={i * 70}>
                  <div className="rounded-xl p-4 sm:p-4.5 bg-background border border-border/80 hover:border-secondary/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-0.5">
                    <div>
                      <span className="text-xl sm:text-2xl font-display font-bold text-primary group-hover:text-secondary transition-colors block mb-0.5">
                        {card.metric}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-accent block mb-1.5">
                        {card.label}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed pt-2 mt-2 border-t border-border/40">
                      {card.desc}
                    </p>
                  </div>
                </AnimeReveal>
              ))}
            </div>
          </div>

          {/* Lower Section — Our Roots (Rooted in Braj) */}
          <div className="pt-10 sm:pt-12 border-t border-[#EAE2D5]">
            {/* Top Row with Header (Left) and Flourish Graphic (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-8 relative">
              {/* Left Column: Heading, Subtitle & Grassroots Box */}
              <AnimeReveal variant="fade-up" className="lg:col-span-7 xl:col-span-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D32F2F] font-mono">
                    ROOTED IN BRAJ
                  </span>
                  <span className="w-10 h-px bg-[#D8C7B0] inline-block" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#142033] tracking-tight leading-[1.12] mb-3">
                  Mathura is our home.
                  <br />
                  <span className="font-serif italic font-normal text-[#C48332]">Braj shapes our work.</span>
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] font-light leading-relaxed max-w-2xl mb-3.5">
                  Khajani’s connection with Mathura and Braj goes beyond its address. This is the landscape in which the organisation began, built relationships with communities and developed much of its understanding of skills, livelihoods and traditional knowledge.
                </p>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#F1F3F6]/70 border border-[#E2E8F0] max-w-2xl">
                  <p className="text-[11px] font-mono text-[#475569] leading-relaxed">
                    Grassroots engagement extends across Mathura and the wider Braj region, with connections to women and artisan groups in Vrindavan, Govardhan, Barsana, Nandgaon, Gokul, Mahavan, Raya, Chhata, Mant, Baldeo, Farah, Jait, Rawal and Ading.
                  </p>
                </div>
              </AnimeReveal>

              {/* Right Column: Decorative Flourish Quote with Blob & Nodes */}
              <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end items-end">
                <img
                  src="/images/about/rooted-in-braj-flourish.png"
                  alt="Same roots. Stronger people. Brighter tomorrows."
                  className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain select-none pointer-events-none"
                />
              </AnimeReveal>
            </div>

            {/* Three Root Cards (Compact, No Arrows) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
              {/* Card 1: Communities at the Centre */}
              <AnimeReveal variant="fade-up" delay={100}>
                <div className="rounded-2xl p-4.5 sm:p-5 flex flex-col justify-between h-full bg-[#FDF8F3] border border-[#F3E5D5] shadow-2xs hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5 relative overflow-hidden">
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#FCECE0] text-[#D0704B] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <Users size={18} />
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-[#142033] mb-1.5 leading-snug">
                      Communities at the Centre
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#64748B] font-light leading-relaxed mb-3">
                      Khajani’s work is shaped by engagement with women, learners, artisans and communities—starting with local realities rather than a one-size-fits-all approach.
                    </p>
                  </div>

                  {/* Decorative Wavy Line with Node */}
                  <div className="mt-auto pt-1">
                    <svg className="w-full h-5 text-[#C48332]/40 select-none pointer-events-none" viewBox="0 0 300 20" fill="none">
                      <path d="M0,15 Q80,25 160,13 T300,8" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="12" cy="15" r="2.5" fill="#C48332" />
                    </svg>
                  </div>
                </div>
              </AnimeReveal>

              {/* Card 2: Rooted in Mathura & Braj */}
              <AnimeReveal variant="fade-up" delay={200}>
                <div className="rounded-2xl p-4.5 sm:p-5 flex flex-col justify-between h-full bg-[#F4F8FC] border border-[#E0EDF7] shadow-2xs hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5 relative overflow-hidden">
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#E5F0FA] text-[#3B82C4] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <MapPin size={18} />
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-[#142033] mb-1.5 leading-snug">
                      Rooted in Mathura &amp; Braj
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#64748B] font-light leading-relaxed mb-3">
                      From urban Mathura to communities across the wider Braj region, place has remained central to Khajani’s identity and its grassroots relationships.
                    </p>
                  </div>

                  {/* Decorative Wavy Line with Node */}
                  <div className="mt-auto pt-1">
                    <svg className="w-full h-5 text-[#3B82C4]/40 select-none pointer-events-none" viewBox="0 0 300 20" fill="none">
                      <path d="M0,18 Q100,4 200,16 T300,10" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="150" cy="13" r="2.5" fill="#3B82C4" />
                    </svg>
                  </div>
                </div>
              </AnimeReveal>

              {/* Card 3: Tradition as a Living Resource */}
              <AnimeReveal variant="fade-up" delay={300}>
                <div className="rounded-2xl p-4.5 sm:p-5 flex flex-col justify-between h-full bg-[#F5F9F4] border border-[#E0EFE0] shadow-2xs hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5 relative overflow-hidden">
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#E6F3E5] text-[#4E9954] flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform">
                      <Sprout size={18} />
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-[#142033] mb-1.5 leading-snug">
                      Tradition as a Living Resource
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#64748B] font-light leading-relaxed mb-3">
                      Braj’s traditional skills and cultural knowledge are not treated simply as something from the past. Khajani works at the intersection of heritage, practical skills and contemporary livelihood opportunities.
                    </p>
                  </div>

                  {/* Decorative Wavy Line with Nodes */}
                  <div className="mt-auto pt-1">
                    <svg className="w-full h-5 text-[#4E9954]/40 select-none pointer-events-none" viewBox="0 0 300 20" fill="none">
                      <path d="M0,11 Q85,22 180,12 T300,17" stroke="currentColor" strokeWidth="1.2" />
                      <circle cx="12" cy="12" r="2.5" fill="#4E9954" />
                      <circle cx="160" cy="14" r="2.5" fill="#4E9954" />
                    </svg>
                  </div>
                </div>
              </AnimeReveal>
            </div>

            {/* Accent Line + Bottom Transition */}
            <div className="pt-6 border-t border-[#EAE2D5] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="font-handwriting text-xl sm:text-2xl text-[#C48332] italic tracking-wide">
                Our roots give the work its character. Our people give it purpose.
              </span>
              <span className="hidden sm:block flex-1 h-px bg-[#EAE2D5] mx-5" />
              <a
                href="#timeline-part-1"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#142033] hover:text-[#C48332] transition-colors shrink-0 group"
              >
                <span>NEXT: A JOURNEY SHAPED OVER TIME</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 4 — OUR JOURNEY · PART I (2007, 2012, 2015, 2018)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="timeline-part-1" className="py-12 sm:py-16 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">
              OUR JOURNEY · PART I
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              A journey of people,
              <br />
              <span className="text-secondary font-serif italic font-normal">purpose and possibility.</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-2.5 font-light leading-relaxed">
              What began as a grassroots initiative in Mathura gradually grew through practical work, community relationships and an expanding understanding of where skills could create opportunity.
            </p>
          </AnimeReveal>

          {/* Vertical Continuous Timeline Part I - Compact */}
          <div className="relative">
            {/* Center Timeline Spine */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-secondary/30 via-secondary/70 to-secondary/30" />

            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              
              {/* 2007: Where It All Began */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <AnimeReveal variant="fade-right" className="order-1 md:text-right">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-secondary/35 block mb-0.5 leading-none select-none">
                    2007
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    WHERE IT ALL BEGAN
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mb-1.5 leading-snug">
                    A Grassroots Beginning in Mathura
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    Khajani began its journey in Mathura with the establishment of a women's skill-training institute—creating a dedicated space where women could learn practical skills and explore new possibilities through training.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={11} className="text-secondary" />
                    The Beginning
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" delay={100} className="order-2">
                  <div className="rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-52 sm:max-h-60 group">
                    <img
                      src="/images/about/institute-entrance.jpg"
                      alt="Early training institute in Mathura"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
              </div>

              {/* 2012: Skills For Opportunity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <AnimeReveal variant="fade-right" delay={100} className="order-2 md:order-1">
                  <div className="rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-52 sm:max-h-60 group">
                    <img
                      src="/images/projects/upsdm-tailor.jpg"
                      alt="Free vocational sewing training"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" className="order-1 md:order-2 md:text-left">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-secondary/35 block mb-0.5 leading-none select-none">
                    2012
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    SKILLS FOR OPPORTUNITY
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mb-1.5 leading-snug">
                    Free Vocational Training Begins
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    Khajani expanded its work through free vocational training programmes focused on practical, job-oriented skills for women from different communities. The emphasis was on making useful skills more accessible and helping women strengthen capabilities that could support greater economic participation.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={11} className="text-secondary" />
                    Skills · Access · Opportunity
                  </div>
                </AnimeReveal>
              </div>

              {/* 2015: From Initiative To Institution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <AnimeReveal variant="fade-right" className="order-1 md:text-right">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-secondary/35 block mb-0.5 leading-none select-none">
                    2015
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    FROM INITIATIVE TO INSTITUTION
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mb-1.5 leading-snug">
                    Khajani Welfare Society Takes Formal Shape
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    Khajani Welfare Society was formally registered under the Societies Registration Act, 1860, giving an institutional structure to work that had grown from its grassroots beginnings in Mathura. The registration marked an important stage in Khajani's journey—towards a more structured organisation with a widening field of work.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={11} className="text-secondary" />
                    Growth · Structure · Purpose
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" delay={100} className="order-2">
                  <div className="rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-52 sm:max-h-60 group">
                    <img
                      src="/images/about/team-working.jpg"
                      alt="Khajani team members in planning session"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
              </div>

              {/* 2018: Learning Without Barriers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <AnimeReveal variant="fade-right" delay={100} className="order-2 md:order-1">
                  <div className="rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-52 sm:max-h-60 group">
                    <img
                      src="/images/about/classroom.jpg"
                      alt="Women in community training class"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" className="order-1 md:order-2 md:text-left">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-secondary/35 block mb-0.5 leading-none select-none">
                    2018
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    LEARNING WITHOUT BARRIERS
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mb-1.5 leading-snug">
                    Skills Reach Wider Communities
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    Khajani extended short-term skill-training initiatives to groups with limited access to conventional learning opportunities, including inmates, women at Nari Niketan and school-going girls. This widened the reach of Khajani's skill-development work, taking practical learning into different social and institutional settings.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={11} className="text-secondary" />
                    Access · Inclusion · Capability
                  </div>
                </AnimeReveal>
              </div>

            </div>

            {/* Mid-Timeline Transition to Screen 5 */}
            <AnimeReveal variant="fade-up" className="mt-10 text-center max-w-xl mx-auto p-5 rounded-2xl bg-card border border-border shadow-xs">
              <h4 className="text-lg font-display font-bold text-primary mb-1">
                The work was growing. So was its purpose.
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                The next chapter brought new forms of community engagement, health initiatives and a landmark GI craft recognition.
              </p>
              <a
                href="#timeline-part-2"
                className="btn-3d-accent inline-flex items-center gap-1.5 px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider shadow-xs"
              >
                Continue the Journey <ArrowDown size={12} />
              </a>
            </AnimeReveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 5 — OUR JOURNEY · PART II (2020, 2021, 2023, 2025, TODAY)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="timeline-part-2" className="py-12 sm:py-16 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">
              OUR JOURNEY · CONTINUED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              New needs. New responses.
              <br />
              <span className="text-secondary font-serif italic font-normal">The same commitment.</span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-2.5 font-light leading-relaxed">
              As Khajani's work grew, its engagement widened beyond vocational training. The years that followed brought initiatives in health and community support, education, and a landmark recognition for one of Mathura's distinctive craft traditions.
            </p>
          </AnimeReveal>

          {/* Vertical Continuous Timeline Part II - Compact */}
          <div className="relative">
            {/* Center Timeline Spine */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-secondary/30 via-secondary/70 to-secondary/30" />

            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              
              {/* 2020: Health, Dignity & Awareness */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <AnimeReveal variant="fade-right" className="order-1 md:text-right">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-secondary/35 block mb-0.5 leading-none select-none">
                    2020
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    HEALTH, DIGNITY &amp; AWARENESS
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mb-1.5 leading-snug">
                    Supporting Menstrual Hygiene
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    Khajani installed 25 sanitary napkin vending machines and napkin destroyers across 25 government schools and colleges, bringing practical menstrual-hygiene support into educational institutions. The initiative addressed an everyday need with a simple objective—making menstrual-hygiene facilities more accessible to girls and women.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={11} className="text-secondary" />
                    Awareness · Access · Dignity
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" delay={100} className="order-2">
                  <div className="rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-52 sm:max-h-60 group">
                    <img
                      src="/images/projects/sanitary-napkin-vending.jpg"
                      alt="Sanitary napkin vending machine installation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
              </div>

              {/* 2021: Responding In A Time Of Need */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <AnimeReveal variant="fade-right" delay={100} className="order-2 md:order-1">
                  <div className="rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-52 sm:max-h-60 group relative">
                    <img
                      src="/images/media/news-clipping-10.jpg"
                      alt="PPE kit and mask distribution reporting"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-black/75 backdrop-blur-md text-white text-[11px]">
                      <p className="font-handwriting text-amber-300 text-xs">
                        “When circumstances changed, skills found a new purpose.”
                      </p>
                    </div>
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" className="order-1 md:order-2 md:text-left">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-secondary/35 block mb-0.5 leading-none select-none">
                    2021
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    RESPONDING IN A TIME OF NEED
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mb-1.5 leading-snug">
                    Skills Put to Work During the Pandemic
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    During the pandemic, Khajani connected its skill base with an urgent community need through the production of cotton masks and PPE kits. Khajani's records document the distribution of more than 500,000 masks and 500 PPE kits—turning practical skills into a direct response during an extraordinary period.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={11} className="text-secondary" />
                    Skills · Response · Community
                  </div>
                </AnimeReveal>
              </div>

              {/* 2023: Expanding The Learning Journey */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <AnimeReveal variant="fade-right" className="order-1 md:text-right">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-secondary/35 block mb-0.5 leading-none select-none">
                    2023
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    EXPANDING THE LEARNING JOURNEY
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mb-1.5 leading-snug">
                    EDUDAKSH Remedial Learning
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    Khajani expanded its engagement with education through EDUDAKSH, a tailored remedial-learning initiative for girls aged 10–14 years in government schools. The initiative extended Khajani's work into another form of capability-building—supporting learning at an age when stronger educational foundations open wider possibilities.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={11} className="text-secondary" />
                    Learning · Confidence · Possibility
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" delay={100} className="order-2">
                  <div className="rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-52 sm:max-h-60 group">
                    <img
                      src="/images/projects/kla-students.jpg"
                      alt="EDUDAKSH learning academy students"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
              </div>

              {/* 2025: A Landmark For Braj Heritage (GI Recognition) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 items-center">
                <AnimeReveal variant="fade-right" delay={100} className="order-2 md:order-1">
                  <div className="rounded-2xl overflow-hidden bg-muted border-2 border-accent/40 shadow-md aspect-[16/10] sm:aspect-[16/9] max-h-52 sm:max-h-60 group relative">
                    <img
                      src="/images/projects/poshak-zari.jpg"
                      alt="Mathura Zari Poshak GI craft"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-accent text-white shadow-xs">
                        GI Registered Proprietor
                      </span>
                      <p className="font-handwriting text-amber-200 text-sm mt-1">
                        “A tradition of Braj. An identity recognised.”
                      </p>
                    </div>
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" className="order-1 md:order-2 md:text-left">
                  <span className="text-3xl sm:text-4xl font-display font-bold text-accent/40 block mb-0.5 leading-none select-none">
                    2025
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">
                    A LANDMARK FOR BRAJ HERITAGE
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-primary mb-1.5 leading-snug">
                    Mathura Zari Poshak Receives GI Recognition
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    A significant milestone for the region's craft heritage came with Geographical Indication (GI) recognition for Mathura Zari Poshak, formally recognising the distinctive identity of a traditional craft deeply associated with Mathura and Braj. Khajani Welfare Society's role as the Registered Proprietor of the Mathura Zari Poshak GI connects this recognition with the organisation's continuing engagement in traditional crafts and artisan development.
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    <Award size={12} />
                    Heritage · Identity · Recognition
                  </div>
                </AnimeReveal>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH STRIP: TODAY — THE JOURNEY CONTINUES (Side-to-Side Edge) ─── */}
      <section className="w-full bg-primary text-primary-foreground relative overflow-hidden py-12 sm:py-16 border-y border-white/10 shadow-lg">
        <AuroraBackground variant="dark" intensity={1.1} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimeReveal variant="fade-up">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-secondary border border-white/20 inline-block mb-4">
              TODAY · THE JOURNEY CONTINUES
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
              Same roots. A wider purpose.
            </h3>
            <p className="text-primary-foreground/85 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed mb-6">
              Today, Khajani's work brings together women-focused skill development, livelihoods, traditional crafts, education and community development—while continuing to explore new opportunities around the skills and cultural knowledge of Mathura and Braj. What has changed over the years is the scale and range of the work. What remains constant is its connection with people, practical capability and place.
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-secondary">
              People · Skills · Heritage · Opportunity
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* Bottom Transition to Screen 6 */}
      <div className="bg-background py-8 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-accent">
            The journey explains how Khajani grew.
          </p>
          <p className="text-sm text-muted-foreground mt-0.5">
            The next chapter shows what that growth became.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 6 — HOW OUR WORK EVOLVED + OUR IMPACT
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="evolution-impact" className="py-14 sm:py-16 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Half — How Our Work Evolved / Areas of Work */}
          <div className="mb-12 sm:mb-14">
            {/* Header: Title & Description on Left, Quote Artwork on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-8 sm:mb-10">
              <AnimeReveal variant="fade-up" className="lg:col-span-7">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[#C45A47] text-[11px] font-bold tracking-[0.22em] uppercase">
                    OUR AREAS OF WORK
                  </span>
                  <span className="w-8 h-[1px] bg-[#C45A47]/40" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-display font-bold text-[#192742] leading-[1.15] tracking-tight">
                  Different areas of work.
                  <br />
                  <span className="font-serif italic font-normal text-[#B3702A]">
                    One connected purpose.
                  </span>
                </h2>
                <p className="text-[#5F6A7D] text-xs sm:text-sm font-light leading-relaxed mt-3 max-w-xl">
                  Khajani's journey has never been limited to a single programme or sector. As its relationships with people and communities deepened, the work expanded — building on existing experience while responding to new needs and opportunities.
                </p>
              </AnimeReveal>

              <AnimeReveal variant="fade-up" delay={150} className="lg:col-span-5 flex justify-center lg:justify-end">
                <img
                  src="/images/about/stronger-communities-quote.png"
                  alt="“Stronger communities brighter tomorrows.” Same Roots Brighter Tomorrows"
                  className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] h-auto object-contain select-none pointer-events-none"
                  loading="lazy"
                />
              </AnimeReveal>
            </div>

            {/* 6 Connected Areas of Work Cards - Compact */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                {
                  category: "SKILLS",
                  headline: "Learning that can be used.",
                  desc: "Practical, hands-on training formed the foundation of Khajani's early work.",
                  icon: BookOpen,
                  iconBg: "bg-[#FDF0ED]",
                  iconColor: "text-[#D35F4C]",
                  link: "/work#skills-training",
                  image: "/images/about/area-skills.jpg",
                  blobColor: "#FCECE8",
                  blobRadiusBg: "42% 58% 65% 35% / 45% 42% 58% 55%",
                  blobOffsetBg: "scale(1.08) translate(-6px, 4px)",
                  blobRadiusImg: "48% 52% 62% 38% / 46% 54% 46% 54%",
                },
                {
                  category: "LIVELIHOODS",
                  headline: "Skills connected with opportunity.",
                  desc: "Training increasingly focused on helping women strengthen capabilities that could support economic participation.",
                  icon: Users,
                  iconBg: "bg-[#EDF4FC]",
                  iconColor: "text-[#3D82D0]",
                  link: "/work#shg-livelihoods",
                  image: "/images/about/area-livelihoods.jpg",
                  blobColor: "#E2EEFA",
                  blobRadiusBg: "64% 36% 42% 58% / 52% 38% 62% 48%",
                  blobOffsetBg: "scale(1.08) translate(-4px, -6px)",
                  blobRadiusImg: "54% 46% 44% 56% / 58% 44% 56% 42%",
                },
                {
                  category: "HERITAGE & ARTISANS",
                  headline: "Traditional knowledge carried forward.",
                  desc: "Khajani's work with crafts brought together skill development, artisan capability and the living heritage of Braj.",
                  icon: Landmark,
                  iconBg: "bg-[#FAF3E6]",
                  iconColor: "text-[#B88732]",
                  link: "/culture-heritage",
                  image: "/images/about/area-heritage.jpg",
                  blobColor: "#F8EFE2",
                  blobRadiusBg: "44% 56% 54% 46% / 62% 42% 58% 38%",
                  blobOffsetBg: "scale(1.1) translate(-6px, -2px)",
                  blobRadiusImg: "46% 54% 58% 42% / 50% 50% 50% 50%",
                },
                {
                  category: "EDUCATION & LEARNING",
                  headline: "Building capability earlier.",
                  desc: "Educational initiatives widened the organisation's engagement with learning and opportunity.",
                  icon: GraduationCap,
                  iconBg: "bg-[#EDF7F0]",
                  iconColor: "text-[#439962]",
                  link: "/work#education",
                  image: "/images/about/area-education.jpg",
                  blobColor: "#E4F1E7",
                  blobRadiusBg: "58% 42% 38% 62% / 42% 64% 36% 58%",
                  blobOffsetBg: "scale(1.08) translate(4px, -4px)",
                  blobRadiusImg: "52% 48% 46% 54% / 48% 52% 48% 52%",
                },
                {
                  category: "COMMUNITY DEVELOPMENT",
                  headline: "Responding to wider needs.",
                  desc: "Community-based initiatives extended the work beyond training into areas requiring practical local action.",
                  icon: HeartHandshake,
                  iconBg: "bg-[#FDF0F0]",
                  iconColor: "text-[#D45E5E]",
                  link: "/work#community",
                  image: "/images/about/area-community.jpg",
                  blobColor: "#FCE8E7",
                  blobRadiusBg: "46% 54% 64% 36% / 56% 46% 54% 44%",
                  blobOffsetBg: "scale(1.08) translate(4px, 4px)",
                  blobRadiusImg: "54% 46% 48% 52% / 48% 52% 48% 52%",
                },
                {
                  category: "PARTNERSHIPS",
                  headline: "Growing through collaboration.",
                  desc: "Institutional, government, industry and community partnerships have enabled different forms of work to reach further.",
                  icon: Handshake,
                  iconBg: "bg-[#EFF1FB]",
                  iconColor: "text-[#4A64CF]",
                  link: "/work#partnerships",
                  image: "/images/about/area-partnerships.jpg",
                  blobColor: "#E8EBF8",
                  blobRadiusBg: "60% 40% 46% 54% / 42% 62% 38% 58%",
                  blobOffsetBg: "scale(1.12) translate(-6px, -4px)",
                  blobRadiusImg: "50% 50% 56% 44% / 54% 46% 54% 46%",
                },
              ].map((stage, i) => (
                <AnimeReveal key={stage.category} variant="fade-up" delay={i * 60}>
                  <div className="bg-white rounded-2xl p-4 sm:p-4.5 border border-[#EAE4DC] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="flex items-center justify-between gap-3 h-full">
                      {/* Left Column: Icon, Text and Link */}
                      <div className="flex-1 flex flex-col justify-between h-full min-w-0 pr-1">
                        <div>
                          {/* Icon Badge */}
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${stage.iconBg} ${stage.iconColor}`}>
                            <stage.icon className="w-3.5 h-3.5" />
                          </div>

                          {/* Category Tag */}
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] text-[#C45A47] block mb-0.5">
                            {stage.category}
                          </span>

                          {/* Headline */}
                          <h4 className="font-display font-bold text-sm sm:text-base text-[#192742] leading-snug mb-1 group-hover:text-[#B3702A] transition-colors">
                            {stage.headline}
                          </h4>

                          {/* Description */}
                          <p className="text-[11px] sm:text-xs text-[#616C7D] leading-relaxed font-light mb-2.5">
                            {stage.desc}
                          </p>
                        </div>

                        {/* Learn more Link */}
                        <div className="pt-0.5">
                          <Link
                            to={stage.link}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#192742] hover:text-[#B3702A] transition-colors group/link"
                          >
                            <span>Learn more</span>
                            <span className="transition-transform group-hover/link:translate-x-1">→</span>
                          </Link>
                        </div>
                      </div>

                      {/* Right Column: Organic Pebble-Clipped Image with Pastel Blob */}
                      <div className="relative w-22 h-22 sm:w-24 sm:h-24 md:w-22 md:h-22 lg:w-26 lg:h-26 xl:w-28 xl:h-28 shrink-0 flex items-center justify-center my-auto">
                        {/* Background pastel organic blob */}
                        <div
                          className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                          style={{
                            backgroundColor: stage.blobColor,
                            borderRadius: stage.blobRadiusBg,
                            transform: stage.blobOffsetBg,
                          }}
                        />
                        {/* Foreground dynamically clipped organic image */}
                        <div
                          className="relative z-10 w-full h-full overflow-hidden shadow-xs transition-transform duration-500 group-hover:scale-[1.03]"
                          style={{
                            borderRadius: stage.blobRadiusImg,
                          }}
                        >
                          <img
                            src={stage.image}
                            alt={stage.headline}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimeReveal>
              ))}
            </div>

            {/* Bottom Accent Strip */}
            <div className="pt-5 border-t border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="font-handwriting text-lg sm:text-xl text-[#B3702A] italic font-normal tracking-wide text-center sm:text-left">
                Our roots give the work its character. Our people give it purpose.
              </p>
              <div className="text-[10px] font-medium tracking-[0.24em] text-[#8C847C] uppercase">
                PEOPLE · HERITAGE · OPPORTUNITY
              </div>
            </div>
          </div>

          {/* Lower Half — Our Impact */}
          <div className="pt-10 sm:pt-12 border-t border-border/80">
            <AnimeReveal variant="fade-up" className="max-w-3xl mb-8">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">
                OUR IMPACT
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">
                Work measured in people, skills and possibilities.
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2 font-light leading-relaxed">
                Since its beginnings in Mathura, Khajani's work has grown programme by programme, batch by batch and community by community. Behind each number are women, artisans, and learners whose capabilities continue to grow.
              </p>
            </AnimeReveal>

            {/* 5 Verified Counters Grid - Compact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-10">
              <ImpactCounter
                target={10000}
                label="Women Trained"
                subtext="Practical and vocational learning across skills."
                delay={0}
              />
              <ImpactCounter
                target={200}
                label="Training Batches"
                subtext="Structured learning delivered across core domains."
                delay={80}
              />
              <ImpactCounter
                target={500}
                label="Artisans Supported"
                subtext="Traditional skills strengthened through design support."
                delay={160}
              />
              <ImpactCounter
                target={1000}
                label="Learners Reached"
                subtext="Children engaged through educational initiatives."
                delay={240}
              />
              <ImpactCounter
                target={50}
                label="Communities Engaged"
                subtext="Grassroots relationships extending across Braj."
                delay={320}
              />
            </div>

            {/* What Those Numbers Mean (4 Compact Editorial Statements) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  title: "SKILLS BUILT",
                  desc: "Practical capabilities that can continue beyond the classroom.",
                },
                {
                  title: "LIVELIHOOD PATHWAYS",
                  desc: "Connections between skills and opportunities for work and enterprise.",
                },
                {
                  title: "HERITAGE CARRIED FORWARD",
                  desc: "Traditional knowledge kept active through learning and practice.",
                },
                {
                  title: "COMMUNITIES ENGAGED",
                  desc: "Work shaped through participation and local relationships.",
                },
              ].map((item, i) => (
                <AnimeReveal key={item.title} variant="fade-up" delay={i * 60}>
                  <div className="p-4 sm:p-4.5 rounded-xl bg-card border border-border/70 hover:border-accent/40 transition-colors h-full">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-accent block mb-1">
                      {item.title}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </AnimeReveal>
              ))}
            </div>

            {/* Closing Statement */}
            <AnimeReveal variant="fade-up" className="rounded-3xl p-8 sm:p-10 bg-primary/5 border border-primary/10 text-center max-w-3xl mx-auto">
              <h4 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-2">
                Behind every number is a human journey.
              </h4>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-light">
                A skill learnt. A capability strengthened. A tradition carried forward. An opportunity explored.
              </p>
              <Link
                to="/our-work"
                className="btn-3d-accent inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest"
              >
                Explore Our Impact <ArrowRight size={14} />
              </Link>
            </AnimeReveal>

            {/* Bottom Transition to Screen 7 */}
            <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Next: The People Behind Khajani
              </p>
              <a
                href="#people-behind-khajani"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors"
              >
                Continue to Leadership &amp; Generations <ArrowDown size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 7 — PEOPLE BEHIND KHAJANI (Three Generations)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="people-behind-khajani" className="py-14 sm:py-16 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
              PEOPLE BEHIND KHAJANI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
              Three generations.
              <br />
              <span className="text-secondary font-serif italic">One shared purpose.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-3 font-light leading-relaxed">
              Khajani’s journey is also a story of continuity across generations. What began in Mathura with Dr. Harimohan Maheshwari and Abha Maheshwari, together with their daughter Shipra Rathi, gradually grew into a wider family commitment. Over the years, other members joined the journey, and today a third generation is contributing too.
            </p>
            <div className="mt-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary/15 text-primary border border-secondary/30">
                Service · Skills · Continuity · New Perspectives
              </span>
            </div>
          </AnimeReveal>

          {/* Sub-Section: The Founding Story (3 Prominent Profiles) */}
          <div className="mb-12 sm:mb-14 max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-display font-bold text-primary">
                The Founding Story: Where experience met new ideas.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {/* Dr. Harimohan Maheshwari */}
              <AnimeReveal variant="fade-up" delay={0}>
                <div className="clay-card rounded-xl p-4 sm:p-4.5 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5">
                  <div>
                    <div className="rounded-lg overflow-hidden h-36 sm:h-40 w-full bg-muted mb-3 border border-border/60 shadow-xs group-hover:scale-102 transition-transform duration-500">
                      <img
                        src="/images/about/dr-hari-mohan.jpg"
                        alt="Dr. Harimohan Maheshwari, Co-Founder"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/10 text-accent block w-fit mb-1">
                      CO-FOUNDER
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary leading-tight mb-1">
                      Dr. Harimohan Maheshwari
                    </h4>
                    <p className="text-[11px] font-medium text-secondary mb-1.5">
                      A lifetime of service. A grassroots perspective.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      A retired veterinary doctor, Dr. Harimohan Maheshwari brought his long experience of public service and direct engagement with people and communities. Following his retirement in 2007, his understanding of grassroots realities and service-oriented approach became an important part of Khajani’s early journey in Mathura.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-border/50 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Public Service · Community · Purpose
                  </div>
                </div>
              </AnimeReveal>

              {/* Abha Maheshwari */}
              <AnimeReveal variant="fade-up" delay={100}>
                <div className="clay-card rounded-xl p-4 sm:p-4.5 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5">
                  <div>
                    <div className="rounded-lg overflow-hidden h-36 sm:h-40 w-full bg-muted mb-3 border border-border/60 shadow-xs group-hover:scale-102 transition-transform duration-500">
                      <img
                        src="/images/about/abha.jpg"
                        alt="Abha Maheshwari, Co-Founder &amp; President"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/10 text-accent block w-fit mb-1">
                      CO-FOUNDER · PRESIDENT
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary leading-tight mb-1">
                      Abha Maheshwari
                    </h4>
                    <p className="text-[11px] font-medium text-secondary mb-1.5">
                      People at the heart of the journey.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Abha Maheshwari has been part of Khajani’s journey from its beginnings. Her involvement has remained closely connected with the organisation’s work with women and communities and with the continuity and institutional development of Khajani as its work expanded.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-border/50 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    People · Participation · Continuity
                  </div>
                </div>
              </AnimeReveal>

              {/* Shipra Rathi */}
              <AnimeReveal variant="fade-up" delay={200}>
                <div className="clay-card rounded-xl p-4 sm:p-4.5 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5">
                  <div>
                    <div className="rounded-lg overflow-hidden h-36 sm:h-40 w-full bg-muted mb-3 border border-border/60 shadow-xs group-hover:scale-102 transition-transform duration-500">
                      <img
                        src="/images/about/shipra-rathi.jpg"
                        alt="Shipra Rathi, Co-Founder &amp; Secretary"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/10 text-accent block w-fit mb-1">
                      CO-FOUNDER · SECRETARY
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary leading-tight mb-1">
                      Shipra Rathi
                    </h4>
                    <p className="text-[11px] font-medium text-secondary mb-1.5">
                      From design and skills to livelihood possibilities.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Daughter of Dr. Harimohan and Abha Maheshwari, Shipra Rathi brought a younger generation and a different professional perspective. A fashion designer with experience in vocational training, her background in design and practical learning became central to Khajani’s work in women’s skills, livelihoods and traditional crafts.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-border/50 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Design · Skills · Livelihoods
                  </div>
                </div>
              </AnimeReveal>
            </div>
          </div>

          {/* Sub-Section: A Purpose Across Generations Visual Progression */}
          <div className="pt-10 sm:pt-12 border-t border-border/80">
            <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">
                A PURPOSE ACROSS GENERATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary">
                It began with a family. It grew with a community.
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2 font-light leading-relaxed">
                As Khajani grew, its story also became the story of the many teams, trainers, artisans, learners, communities, institutions and partners who became part of its work.
              </p>
            </AnimeReveal>

            {/* 3 Generation Steps Progression */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
              {/* Generation 1 */}
              <AnimeReveal variant="fade-up" delay={0}>
                <div className="rounded-2xl p-4.5 sm:p-5 bg-background border border-border/80 hover:border-secondary/60 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                      FIRST GENERATION
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary mb-1.5">
                      Dr. Harimohan Maheshwari &amp; Abha Maheshwari
                    </h4>
                    <p className="text-xs font-semibold text-accent mb-2">
                      Experience &amp; Foundation
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The generation that gave Khajani its grounding in service, people, integrity and grassroots community connection in Mathura.
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                    Roots &amp; Guiding Ethos
                  </div>
                </div>
              </AnimeReveal>

              {/* Generation 2 */}
              <AnimeReveal variant="fade-up" delay={100}>
                <div className="rounded-2xl p-4.5 sm:p-5 bg-background border border-border/80 hover:border-secondary/60 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                      SECOND GENERATION
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary mb-1.5">
                      Shipra Rathi · Shweta Rathi · Shobhit Maheshwari
                    </h4>
                    <p className="text-xs font-semibold text-accent mb-2">
                      with Vikas Rathi · Growth &amp; Continuity
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      As Khajani’s work and responsibilities expanded, Vikas Rathi, Shobhit Maheshwari, and Shweta Rathi joined the journey at different stages, helping carry the founding commitment forward into institutional partnerships.
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                    Institutional Scale &amp; Innovation
                  </div>
                </div>
              </AnimeReveal>

              {/* Generation 3 */}
              <AnimeReveal variant="fade-up" delay={200}>
                <div className="rounded-2xl p-4.5 sm:p-5 bg-background border border-border/80 hover:border-secondary/60 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                      THIRD GENERATION
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary mb-1.5">
                      A New Generation of Changemakers
                    </h4>
                    <p className="text-xs font-semibold text-accent mb-2">
                      New Skills &amp; New Perspectives
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Today, members of the third generation are contributing meaningfully to Khajani, bringing fresh capabilities in digital systems, modern design, and communications while retaining continuity with the core mission.
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                    Modern Capabilities &amp; Future Vision
                  </div>
                </div>
              </AnimeReveal>
            </div>

            {/* Handwritten Closing Accent */}
            <div className="p-5 sm:p-6 rounded-2xl bg-background border border-border text-center max-w-2xl mx-auto">
              <p className="font-handwriting text-xl sm:text-2xl text-secondary font-normal italic mb-1.5">
                “The roots remain. Each generation adds something of its own.”
              </p>
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                People · Purpose · Generations · Community
              </p>
            </div>

            {/* Bottom Transition to Screen 8 */}
            <div className="mt-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                Next: Governance &amp; Institutional Identity
              </p>
              <a
                href="#governance"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors"
              >
                View Institutional Governance <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 8 — GOVERNANCE & INSTITUTIONAL IDENTITY
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="governance" className="py-12 lg:py-16 bg-[#FAF6EE] border-t border-[#EAE2D5] scroll-mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Hero Section: Two Columns (Text Left, Heritage Quote Artwork Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8">
            <AnimeReveal variant="fade-up" className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-[#B85449] font-bold text-[10px] tracking-[0.2em] uppercase px-3 py-0.5 rounded-full bg-[#FBF0EE] border border-[#F2C7BE] mb-3 shadow-2xs">
                GOVERNANCE &amp; RESPONSIBILITY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] leading-[1.1] tracking-tight">
                Purpose needs{" "}
                <span className="font-serif italic font-normal text-[#B87738]">
                  accountability.
                </span>
              </h2>
              <p className="text-[#5A6878] text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl">
                Khajani Welfare Society has grown from a grassroots initiative into an institution with responsibilities—to the people it works with, the organisations it collaborates with and the regulatory frameworks within which it operates.
              </p>
              <div className="mt-4">
                <span className="text-[10px] font-mono tracking-widest text-[#A66F36] uppercase font-bold">
                  GOVERNANCE · RESPONSIBILITY · TRANSPARENCY · CONTINUITY
                </span>
              </div>
            </AnimeReveal>

            {/* Right Side Illustration */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] lg:max-w-[440px] pointer-events-none select-none">
                <img
                  src="/images/about/governance-hero-illustration.png"
                  alt="Stronger institutions build brighter communities - Braj Heritage Architecture"
                  className="w-full h-auto object-contain drop-shadow-xs"
                  loading="lazy"
                />
              </div>
            </AnimeReveal>
          </div>

          {/* Middle Card: OUR FOUNDATION — An Institution Built to Endure */}
          <AnimeReveal variant="fade-up" delay={200}>
            <div className="rounded-2xl bg-[#FAF6EE]/90 sm:bg-white/80 border border-[#E8DCC9] p-5 sm:p-6 lg:p-7 shadow-xs relative overflow-hidden mb-10 sm:mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Side: Foundation Info with Icon */}
                <div className="lg:col-span-8 flex items-start gap-3.5 sm:gap-5">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FAF0E1] border border-[#E6D4BD] flex items-center justify-center text-[#B87738] shrink-0 shadow-2xs mt-1">
                    <FileText size={22} className="text-[#B87738]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B85449] block mb-0.5">
                      OUR FOUNDATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#142033] leading-tight">
                      An Institution Built to Endure.
                    </h3>
                    <p className="text-sm sm:text-base font-serif italic text-[#B87738] font-medium mt-0.5 mb-2">
                      Grassroots in spirit. Structured in practice.
                    </p>
                    <p className="text-xs text-[#5A6878] leading-relaxed max-w-2xl font-light">
                      The formal registration of Khajani Welfare Society in 2015 under the Societies Registration Act, 1860 marked an important step in that evolution—giving organisational structure to work that had begun at the grassroots in 2007. Trust is sustained through institutional responsibility.
                    </p>
                  </div>
                </div>

                {/* Right Side: 3 Key Pillars */}
                <div className="lg:col-span-4 space-y-3 pt-5 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#E8DCC9] lg:pl-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAF0E1] border border-[#E6D4BD] flex items-center justify-center text-[#B87738] shrink-0 mt-0.5">
                      <Users size={15} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#142033]">
                        PEOPLE FIRST
                      </h4>
                      <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug font-light">
                        Accountable to the communities we serve
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAF0E1] border border-[#E6D4BD] flex items-center justify-center text-[#B87738] shrink-0 mt-0.5">
                      <ShieldCheck size={15} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#142033]">
                        ETHICAL PRACTICES
                      </h4>
                      <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug font-light">
                        Guided by integrity and compliance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FAF0E1] border border-[#E6D4BD] flex items-center justify-center text-[#B87738] shrink-0 mt-0.5">
                      <Leaf size={15} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#142033]">
                        LONG-TERM IMPACT
                      </h4>
                      <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug font-light">
                        Building systems for a better tomorrow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimeReveal>

          {/* Bottom Timeline Stepper: 6 Connected Cards */}
          <div className="relative mb-14 sm:mb-16">
            {/* Horizontal Line Connector */}
            <div className="hidden lg:block absolute top-[18px] left-[7%] right-[7%] h-[1.5px] bg-[#D8C7B0] z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3.5 relative z-10">
              {[
                {
                  year: "2007",
                  title: "Grassroots Beginning",
                  desc: "A community-led initiative takes root.",
                  icon: Leaf,
                  bg: "bg-[#EAF5EC]",
                  text: "text-[#2E7D32]",
                  border: "border-[#C8E6C9]",
                },
                {
                  year: "2015",
                  title: "Formal Registration",
                  desc: "Registered under the Societies Registration Act, 1860.",
                  icon: FileText,
                  bg: "bg-[#E8F1FB]",
                  text: "text-[#1976D2]",
                  border: "border-[#BBDEFB]",
                },
                {
                  year: "MATHURA",
                  title: "Institutional Home",
                  desc: "Rooted in the cultural and social landscape of Mathura.",
                  icon: Landmark,
                  bg: "bg-[#F5EFEA]",
                  text: "text-[#795548]",
                  border: "border-[#D7CCC8]",
                },
                {
                  year: "UTTAR PRADESH",
                  title: "State of Operation",
                  desc: "Working across communities in Uttar Pradesh.",
                  icon: MapPin,
                  bg: "bg-[#FCEBF0]",
                  text: "text-[#C2185B]",
                  border: "border-[#F8BBD0]",
                },
                {
                  year: "SOCIETY",
                  title: "Organisational Structure",
                  desc: "A registered, compliant and accountable structure.",
                  icon: Users,
                  bg: "bg-[#F4EBFA]",
                  text: "text-[#7B1FA2]",
                  border: "border-[#E1BEE7]",
                },
                {
                  year: "BRAJ",
                  title: "Core Geographic Identity",
                  desc: "Dedicated to the people, heritage and opportunities of Braj.",
                  icon: Compass,
                  bg: "bg-[#E0F2F1]",
                  text: "text-[#00796B]",
                  border: "border-[#B2DFDB]",
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <AnimeReveal key={item.title} variant="fade-up" delay={idx * 50} className="h-full">
                    <div className="bg-[#FAF6EE]/90 sm:bg-white/90 rounded-xl border border-[#E8DCC9] p-3.5 pt-2.5 text-center shadow-2xs hover:shadow-xs hover:border-[#D4C3AC] transition-all flex flex-col justify-between h-full group">
                      <div>
                        {/* Circular Node Icon on Connector */}
                        <div className={`w-9 h-9 rounded-full ${item.bg} ${item.text} border ${item.border} flex items-center justify-center shadow-xs mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                          <IconComponent size={16} />
                        </div>
                        <span className="font-display font-bold text-sm sm:text-base text-[#142033] block">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-bold text-[#142033] block mt-0.5 leading-snug">
                          {item.title}
                        </span>
                        <p className="text-[10px] text-[#64748B] mt-1.5 leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </AnimeReveal>
                );
              })}
            </div>
          </div>

          {/* Governance Pillars */}
          <div className="mb-12 sm:mb-14">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-primary mb-4">
              Governance: Responsibility has a structure.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              <div className="clay-card rounded-2xl p-4.5 sm:p-5 border border-border/80">
                <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-3">
                  <Building2 size={17} />
                </div>
                <h4 className="font-display font-bold text-base text-primary mb-1.5">
                  Organisational Governance
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The governing structure provides institutional oversight and continuity as Khajani’s programmes and partnerships evolve.
                </p>
              </div>

              <div className="clay-card rounded-2xl p-4.5 sm:p-5 border border-border/80">
                <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-3">
                  <ShieldCheck size={17} />
                </div>
                <h4 className="font-display font-bold text-base text-primary mb-1.5">
                  Financial Accountability
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Financial processes, statutory requirements and applicable reporting form part of the organisation’s responsibility as a registered institution.
                </p>
              </div>

              <div className="clay-card rounded-2xl p-4.5 sm:p-5 border border-border/80">
                <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-3">
                  <FileText size={17} />
                </div>
                <h4 className="font-display font-bold text-base text-primary mb-1.5">
                  Programme Oversight
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Programmes are undertaken within defined organisational responsibilities, with implementation, documentation and institutional coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Registrations & Statutory Credentials Cards */}
          <div className="mb-12 sm:mb-14">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-1">
                REGISTRATIONS &amp; STATUTORY CREDENTIALS
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-primary">
                Registered. Recognised. Accountable.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "SOCIETY REGISTRATION",
                  badge: "Registered Society",
                  desc: "Registered under the Societies Registration Act, 1860.",
                  id: "Registration No. 1297/2015-2016",
                },
                {
                  title: "INCOME-TAX REGISTRATION",
                  badge: "12A / 12AB",
                  desc: "Income-tax registration held by Khajani Welfare Society.",
                  id: "Verified Statutory URN",
                },
                {
                  title: "80G REGISTRATION",
                  badge: "Eligible Giving",
                  desc: "Relevant income-tax approval relating to eligible donations.",
                  id: "Verified 80G Approval",
                },
                {
                  title: "NGO DARPAN",
                  badge: "Govt of India",
                  desc: "Registered on the Government of India’s NGO DARPAN platform.",
                  id: "Unique ID: UP/2018/0187517",
                },
                {
                  title: "CSR REGISTRATION",
                  badge: "MCA Compliant",
                  desc: "Institutional registration relevant to eligible CSR engagements.",
                  id: "Registration No. CSR00018972",
                },
                {
                  title: "GI PROPRIETOR",
                  badge: "Intellectual Property",
                  desc: "Registered Proprietor of Mathura Zari Poshak GI craft.",
                  id: "GI Application No. 817",
                },
              ].map((cred) => (
                <div key={cred.title} className="p-4 sm:p-4.5 rounded-xl bg-card border border-border/80 hover:border-secondary/60 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                        {cred.title}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/10">
                        {cred.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {cred.desc}
                    </p>
                  </div>
                  <div className="pt-2.5 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium text-foreground">
                      {cred.id}
                    </span>
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency Gateways + Closing Accent */}
          <div className="p-5 sm:p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="font-handwriting text-xl text-secondary italic">
                “Rooted in purpose. Responsible in practice.”
              </p>
              <p className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground mt-0.5">
                Governance · Transparency · Accountability · Trust
              </p>
            </div>
            <a
              href="#closing-purpose"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors shrink-0"
            >
              Same Roots. A Wider Purpose <ArrowDown size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 9 — OUR JOURNEY CONTINUES (Same Roots. A Wider Purpose.)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="closing-purpose" className="py-14 lg:py-18 bg-primary text-primary-foreground relative overflow-hidden scroll-mt-20">
        <AuroraBackground variant="dark" intensity={1.2} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 glass-dark rounded-full text-[11px] font-bold tracking-widest uppercase mb-4 text-secondary border border-white/10">
              SAME ROOTS · A WIDER PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight">
              Rooted in Mathura.
              <br />
              <span className="font-serif italic font-normal text-secondary">
                Growing with every journey.
              </span>
            </h2>

            <div className="space-y-3 max-w-2xl mx-auto text-sm sm:text-base text-primary-foreground/80 font-light leading-relaxed mb-6">
              <p>
                Khajani began in Mathura with a simple belief in the value of people, practical skills and meaningful opportunity.
              </p>
              <p>
                Across the years, the work has evolved—from skills and livelihoods to education, traditional crafts, artisan development and wider community initiatives. New generations have become part of the journey, new partnerships have opened possibilities, and the organisation has continued to learn from the people and communities around it.
              </p>
              <p>
                Yet the roots remain where they began—in Mathura, in Braj, and in the belief that lasting progress grows from capabilities people can carry forward.
              </p>
            </div>

            {/* Handwritten Statement over Photo Overlay */}
            <div className="py-5 my-5 border-y border-white/10 max-w-xl mx-auto">
              <p className="font-handwriting text-2xl sm:text-3xl text-amber-200 font-normal italic">
                “The journey changes. The purpose remains.”
              </p>
            </div>

            {/* What We Carry Forward (4 Editorial Anchor Words) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 text-center">
              <div>
                <span className="font-display font-bold text-xl text-secondary block mb-0.5">
                  PEOPLE
                </span>
                <p className="text-[11px] text-primary-foreground/70 font-light">
                  At the centre of the work.
                </p>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-secondary block mb-0.5">
                  SKILLS
                </span>
                <p className="text-[11px] text-primary-foreground/70 font-light">
                  Capabilities that remain.
                </p>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-secondary block mb-0.5">
                  HERITAGE
                </span>
                <p className="text-[11px] text-primary-foreground/70 font-light">
                  Knowledge worth carrying forward.
                </p>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-secondary block mb-0.5">
                  OPPORTUNITY
                </span>
                <p className="text-[11px] text-primary-foreground/70 font-light">
                  Possibilities for what comes next.
                </p>
              </div>
            </div>

            {/* Final Statement & Call to Actions */}
            <div className="mt-8 max-w-2xl mx-auto">
              <p className="text-lg sm:text-xl font-display font-medium text-white mb-2">
                This is where we come from. The next chapter is what we build together.
              </p>
              <p className="text-xs text-primary-foreground/70 mb-8 font-light leading-relaxed">
                Khajani’s story continues through the women who learn, the artisans who practise and pass on their knowledge, the young people who build new capabilities, the communities that participate, and the people and institutions who choose to work alongside them.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                <Link
                  to="/our-work"
                  className="btn-3d-accent inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-widest shadow-lg"
                >
                  Explore Our Work <ArrowRight size={14} />
                </Link>
                <Link
                  to="/volunteer"
                  className="btn-3d-outline inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-widest"
                >
                  Connect With Khajani
                </Link>
              </div>
            </div>

          </AnimeReveal>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
