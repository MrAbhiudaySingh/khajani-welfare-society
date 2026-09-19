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
  ExternalLink, Layers, GraduationCap, Briefcase, Leaf
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
      <div className="clay-card rounded-2xl p-5 sm:p-5 lg:p-4 xl:p-5 flex flex-col justify-between h-full border border-border/70 hover:border-secondary/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
        <div>
          <div className="overflow-hidden mb-2">
            <span
              ref={ref as React.RefObject<HTMLSpanElement>}
              className="text-3xl sm:text-4xl lg:text-[24px] xl:text-[30px] 2xl:text-4xl font-display font-bold text-primary block tabular-nums tracking-tight whitespace-nowrap group-hover:text-accent transition-colors"
            >
              {displayed}
            </span>
          </div>
          <div className="h-0.5 w-8 bg-secondary/60 rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
          <h4 className="font-display font-bold text-base sm:text-base lg:text-[14px] xl:text-base text-foreground leading-snug min-h-[2.6rem] flex items-center">
            {label}
          </h4>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mt-3 pt-3 border-t border-border/40">
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
      <header className="relative bg-card overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-border">
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
      <section id="our-beginning" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Part A: Our Beginning */}
          <div className="max-w-4xl mb-20">
            <AnimeReveal variant="fade-up">
              <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                OUR BEGINNING · MATHURA · 2007
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary mb-8 leading-[1.12]">
                It began with people,
                <br />
                <span className="text-secondary font-serif italic">not a programme.</span>
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
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

              <div className="mt-8 pt-4 border-l-4 border-secondary pl-6">
                <p className="font-handwriting text-2xl sm:text-3xl text-primary font-normal italic">
                  Different experiences. A shared purpose.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* Part B: What We Believe (Redesigned matching Mockup) */}
          <div className="pt-16 sm:pt-20 border-t border-border/80">
            {/* Header: Left Headline + Right Supporting Art */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-16">
              {/* Left Column: Eyebrow, Large Serif Headline & Narrative */}
              <AnimeReveal variant="fade-left" className="lg:col-span-7">
                {/* Eyebrow with horizontal accent rule */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#A32A29] text-xs font-bold tracking-[0.22em] uppercase font-mono">
                    WHAT WE BELIEVE
                  </span>
                  <div className="h-px w-14 bg-[#C4A480]/60" />
                </div>

                {/* Headline matching Mockup */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-bold text-[#1A202C] leading-[1.14] tracking-tight">
                  People already carry <br />
                  <span className="text-[#B8864E] font-serif italic font-normal">
                    knowledge, ability <br />
                    and possibility.
                  </span>
                </h3>

                {/* Paragraph */}
                <p className="text-[#4A5568] text-sm sm:text-base max-w-xl font-light leading-relaxed mt-5">
                  Khajani’s role is not simply to deliver programmes. It is to recognise existing capabilities, strengthen them through learning and opportunity, and help create pathways through which people can move forward.
                </p>
              </AnimeReveal>

              {/* Right Column: User-provided Supporting PNG Art & Ambient Wash */}
              <AnimeReveal variant="fade-right" delay={150} className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-[460px] flex items-center justify-center">
                  {/* Soft organic watercolor wash blob behind the graphic */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-84 h-56 sm:h-64 bg-[#EFE7DC]/70 rounded-[55%_45%_65%_35%] blur-2xl pointer-events-none -z-0" />

                  {/* Supporting PNG Art */}
                  <img
                    src="/images/about/what-we-believe-art.png"
                    alt="Stronger communities brighter tomorrows — People · Heritage · Opportunity"
                    className="w-full h-auto object-contain select-none pointer-events-none relative z-10"
                  />
                </div>
              </AnimeReveal>
            </div>

            {/* 6 Belief Pillars Grid (3x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <AnimeReveal key={item.num} variant="fade-up" delay={i * 70}>
                    <div className="bg-white/95 rounded-[24px] sm:rounded-[28px] border border-[#EBE3D7] p-7 sm:p-8 flex flex-col justify-between h-full shadow-[0_2px_14px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-[#C4A480]/60 transition-all duration-300 group hover:-translate-y-1">
                      <div>
                        {/* Top Row: Icon badge + Card Number */}
                        <div className="flex items-center justify-between mb-5">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-105`}
                          >
                            <Icon size={22} strokeWidth={1.8} />
                          </div>
                          <span className="text-xs sm:text-sm font-mono text-[#C4B9A9] tracking-wider font-semibold">
                            {item.num}
                          </span>
                        </div>

                        {/* Category Tag */}
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#A32A29] block mb-2 font-mono">
                          {item.tag}
                        </span>

                        {/* Title */}
                        <h4 className="text-xl sm:text-[22px] font-serif font-bold text-[#1A202C] leading-snug mb-3 group-hover:text-[#A32A29] transition-colors">
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-xs sm:text-[13.5px] text-[#4A5568] leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Right Arrow */}
                      <div className="pt-5 flex justify-end">
                        <ArrowRight
                          size={18}
                          strokeWidth={1.75}
                          className="text-[#C4A480] group-hover:text-[#A32A29] group-hover:translate-x-1.5 transition-all"
                        />
                      </div>
                    </div>
                  </AnimeReveal>
                );
              })}
            </div>

            {/* Bottom Footer Strip matching Mockup */}
            <div className="mt-14 pt-8 border-t border-[#E8E2D9] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#718096]/80 font-medium">
                MATHURA · BRAJ · KHAJANI
              </div>
              <div className="font-handwriting text-2xl sm:text-3xl text-[#C4A480] italic">
                People · Heritage · Opportunity
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 3 — KHAJANI AT A GLANCE + OUR ROOTS
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="at-a-glance" className="py-24 bg-card border-y border-border scroll-mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Section — Khajani At A Glance */}
          <div className="mb-20">
            <AnimeReveal variant="fade-up" className="max-w-3xl mb-12">
              <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-3">
                KHAJANI AT A GLANCE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
                Local roots. An established institution.
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mt-3 font-light leading-relaxed">
                Khajani Welfare Society has grown from a grassroots initiative in Mathura into a registered organisation working across skill development, livelihoods, traditional crafts, education and community development.
              </p>
            </AnimeReveal>

            {/* 4 Clean Fact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                <AnimeReveal key={card.label} variant="fade-up" delay={i * 80}>
                  <div className="rounded-2xl p-6 bg-background border border-border/80 hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                    <div>
                      <span className="text-2xl sm:text-3xl font-display font-bold text-primary group-hover:text-secondary transition-colors block mb-1">
                        {card.metric}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
                        {card.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-border/50">
                      {card.desc}
                    </p>
                  </div>
                </AnimeReveal>
              ))}
            </div>
          </div>

          {/* Lower Section — Our Roots (Rooted in Braj) */}
          <div className="pt-16 border-t border-border/80">
            <AnimeReveal variant="fade-up" className="max-w-4xl mb-12">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                ROOTED IN BRAJ
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-4 leading-tight">
                Mathura is our home.
                <br />
                <span className="text-secondary font-serif italic">Braj shapes our work.</span>
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                Khajani's connection with Mathura and Braj goes beyond its address. This is the landscape in which the organisation began, built relationships with communities and developed much of its understanding of skills, livelihoods and traditional knowledge.
              </p>
              <div className="mt-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <p className="text-xs text-primary/80 font-mono leading-relaxed">
                  Grassroots engagement extends across Mathura and the wider Braj region, with connections to women and artisan groups in Vrindavan, Govardhan, Barsana, Nandgaon, Gokul, Mahavan, Raya, Chhata, Mant, Baldeo, Farah, Jait, Rawal and Ading.
                </p>
              </div>
            </AnimeReveal>

            {/* Three Root Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  num: "01",
                  title: "PEOPLE",
                  subtitle: "Communities at the Centre",
                  desc: "Khajani's work is shaped by engagement with women, learners, artisans and communities—starting with local realities rather than a one-size-fits-all approach.",
                },
                {
                  num: "02",
                  title: "PLACE",
                  subtitle: "Rooted in Mathura & Braj",
                  desc: "From urban Mathura to communities across the wider Braj region, place has remained central to Khajani's identity and its grassroots relationships.",
                },
                {
                  num: "03",
                  title: "HERITAGE",
                  subtitle: "Tradition as a Living Resource",
                  desc: "Braj's traditional skills and cultural knowledge are not treated simply as something from the past. Khajani works at the intersection of heritage, practical skills and contemporary livelihood opportunities.",
                },
              ].map((root, i) => (
                <AnimeReveal key={root.num} variant="fade-up" delay={i * 90}>
                  <div className="clay-card rounded-3xl p-7 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-display font-black text-secondary/40 group-hover:text-secondary transition-colors">
                          {root.num}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
                          {root.title}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-xl text-primary leading-snug mb-3 group-hover:text-secondary transition-colors">
                        {root.subtitle}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {root.desc}
                      </p>
                    </div>
                  </div>
                </AnimeReveal>
              ))}
            </div>

            {/* Accent Line + Bottom Transition */}
            <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="font-handwriting text-2xl text-secondary italic font-normal">
                Our roots give the work its character. Our people give it purpose.
              </p>
              <a
                href="#timeline-part-1"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-accent transition-colors"
              >
                Next: A journey shaped over time <ArrowRight size={14} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 4 — OUR JOURNEY · PART I (2007, 2012, 2015, 2018)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="timeline-part-1" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
              OUR JOURNEY · PART I
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary">
              A journey of people,
              <br />
              <span className="text-secondary font-serif italic">purpose and possibility.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 font-light leading-relaxed">
              What began as a grassroots initiative in Mathura gradually grew through practical work, community relationships and an expanding understanding of where skills could create opportunity.
            </p>
          </AnimeReveal>

          {/* Vertical Continuous Timeline Part I */}
          <div className="relative">
            {/* Center Timeline Spine */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-secondary/30 via-secondary/70 to-secondary/30" />

            <div className="space-y-16 lg:space-y-24">
              
              {/* 2007: Where It All Began */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <AnimeReveal variant="fade-right" className="order-1 md:text-right">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-secondary/30 block mb-1 select-none">
                    2007
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    WHERE IT ALL BEGAN
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    A Grassroots Beginning in Mathura
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                    Khajani began its journey in Mathura with the establishment of a women's skill-training institute—creating a dedicated space where women could learn practical skills and explore new possibilities through training.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={12} className="text-secondary" />
                    Accent: The Beginning
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" delay={100} className="order-2">
                  <div className="rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-xl aspect-[4/3] group">
                    <img
                      src="/images/about/institute-entrance.jpg"
                      alt="Early training institute in Mathura"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
              </div>

              {/* 2012: Skills For Opportunity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <AnimeReveal variant="fade-right" delay={100} className="order-2 md:order-1">
                  <div className="rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-xl aspect-[4/3] group">
                    <img
                      src="/images/projects/upsdm-tailor.jpg"
                      alt="Free vocational sewing training"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" className="order-1 md:order-2 md:text-left">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-secondary/30 block mb-1 select-none">
                    2012
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    SKILLS FOR OPPORTUNITY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    Free Vocational Training Begins
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                    Khajani expanded its work through free vocational training programmes focused on practical, job-oriented skills for women from different communities. The emphasis was on making useful skills more accessible and helping women strengthen capabilities that could support greater economic participation.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={12} className="text-secondary" />
                    Skills · Access · Opportunity
                  </div>
                </AnimeReveal>
              </div>

              {/* 2015: From Initiative To Institution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <AnimeReveal variant="fade-right" className="order-1 md:text-right">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-secondary/30 block mb-1 select-none">
                    2015
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    FROM INITIATIVE TO INSTITUTION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    Khajani Welfare Society Takes Formal Shape
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                    Khajani Welfare Society was formally registered under the Societies Registration Act, 1860, giving an institutional structure to work that had grown from its grassroots beginnings in Mathura. The registration marked an important stage in Khajani's journey—towards a more structured organisation with a widening field of work.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={12} className="text-secondary" />
                    Growth · Structure · Purpose
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" delay={100} className="order-2">
                  <div className="rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-xl aspect-[4/3] group">
                    <img
                      src="/images/about/team-working.jpg"
                      alt="Khajani team members in planning session"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
              </div>

              {/* 2018: Learning Without Barriers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <AnimeReveal variant="fade-right" delay={100} className="order-2 md:order-1">
                  <div className="rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-xl aspect-[4/3] group">
                    <img
                      src="/images/about/classroom.jpg"
                      alt="Women in community training class"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" className="order-1 md:order-2 md:text-left">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-secondary/30 block mb-1 select-none">
                    2018
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    LEARNING WITHOUT BARRIERS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    Skills Reach Wider Communities
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                    Khajani extended short-term skill-training initiatives to groups with limited access to conventional learning opportunities, including inmates, women at Nari Niketan and school-going girls. This widened the reach of Khajani's skill-development work, taking practical learning into different social and institutional settings.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={12} className="text-secondary" />
                    Access · Inclusion · Capability
                  </div>
                </AnimeReveal>
              </div>

            </div>

            {/* Mid-Timeline Transition to Screen 5 */}
            <AnimeReveal variant="fade-up" className="mt-20 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-card border border-border shadow-md">
              <h4 className="text-2xl font-display font-bold text-primary mb-2">
                The work was growing. So was its purpose.
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The next chapter brought new forms of community engagement, an unprecedented public-health crisis, education initiatives and a landmark moment for Braj's craft heritage.
              </p>
              <a
                href="#timeline-part-2"
                className="btn-3d-accent inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest shadow-md"
              >
                Continue the Journey <ArrowDown size={14} />
              </a>
            </AnimeReveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 5 — OUR JOURNEY · PART II (2020, 2021, 2023, 2025, TODAY)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="timeline-part-2" className="py-24 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
              OUR JOURNEY · CONTINUED
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary">
              New needs. New responses.
              <br />
              <span className="text-secondary font-serif italic">The same commitment.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 font-light leading-relaxed">
              As Khajani's work grew, its engagement widened beyond vocational training. The years that followed brought initiatives in health and community support, education, and a landmark recognition for one of Mathura's distinctive craft traditions.
            </p>
          </AnimeReveal>

          {/* Vertical Continuous Timeline Part II */}
          <div className="relative">
            {/* Center Timeline Spine */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-secondary/30 via-secondary/70 to-secondary/30" />

            <div className="space-y-16 lg:space-y-24">
              
              {/* 2020: Health, Dignity & Awareness */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <AnimeReveal variant="fade-right" className="order-1 md:text-right">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-secondary/30 block mb-1 select-none">
                    2020
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    HEALTH, DIGNITY &amp; AWARENESS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    Supporting Menstrual Hygiene
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                    Khajani installed 25 sanitary napkin vending machines and napkin destroyers across 25 government schools and colleges, bringing practical menstrual-hygiene support into educational institutions. The initiative addressed an everyday need with a simple objective—making menstrual-hygiene facilities more accessible to girls and women.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={12} className="text-secondary" />
                    Awareness · Access · Dignity
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" delay={100} className="order-2">
                  <div className="rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-xl aspect-[4/3] group">
                    <img
                      src="/images/projects/sanitary-napkin-vending.jpg"
                      alt="Sanitary napkin vending machine installation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
              </div>

              {/* 2021: Responding In A Time Of Need */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <AnimeReveal variant="fade-right" delay={100} className="order-2 md:order-1">
                  <div className="rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-xl aspect-[4/3] group relative">
                    <img
                      src="/images/media/news-clipping-10.jpg"
                      alt="PPE kit and mask distribution reporting"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/75 backdrop-blur-md text-white text-xs">
                      <p className="font-handwriting text-amber-300 text-sm">
                        “When circumstances changed, skills found a new purpose.”
                      </p>
                    </div>
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" className="order-1 md:order-2 md:text-left">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-secondary/30 block mb-1 select-none">
                    2021
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    RESPONDING IN A TIME OF NEED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    Skills Put to Work During the Pandemic
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                    During the pandemic, Khajani connected its skill base with an urgent community need through the production of cotton masks and PPE kits. Khajani's records document the distribution of more than 500,000 masks and 500 PPE kits—turning practical skills into a direct response during an extraordinary period.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={12} className="text-secondary" />
                    Skills · Response · Community
                  </div>
                </AnimeReveal>
              </div>

              {/* 2023: Expanding The Learning Journey */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <AnimeReveal variant="fade-right" className="order-1 md:text-right">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-secondary/30 block mb-1 select-none">
                    2023
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    EXPANDING THE LEARNING JOURNEY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    EDUDAKSH Remedial Learning
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                    Khajani expanded its engagement with education through EDUDAKSH, a tailored remedial-learning initiative for girls aged 10–14 years in government schools. The initiative extended Khajani's work into another form of capability-building—supporting learning at an age when stronger educational foundations open wider possibilities.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-secondary/15 text-primary border border-secondary/30">
                    <Sparkles size={12} className="text-secondary" />
                    Learning · Confidence · Possibility
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" delay={100} className="order-2">
                  <div className="rounded-3xl overflow-hidden bg-muted border border-border/80 shadow-xl aspect-[4/3] group">
                    <img
                      src="/images/projects/kla-students.jpg"
                      alt="EDUDAKSH learning academy students"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </AnimeReveal>
              </div>

              {/* 2025: A Landmark For Braj Heritage (GI Recognition) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                <AnimeReveal variant="fade-right" delay={100} className="order-2 md:order-1">
                  <div className="rounded-3xl overflow-hidden bg-muted border-2 border-accent/40 shadow-2xl aspect-[4/3] group relative">
                    <img
                      src="/images/projects/poshak-zari.jpg"
                      alt="Mathura Zari Poshak GI craft"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-accent text-white shadow-md">
                        GI Registered Proprietor
                      </span>
                      <p className="font-handwriting text-amber-200 text-base mt-2">
                        “A tradition of Braj. An identity recognised.”
                      </p>
                    </div>
                  </div>
                </AnimeReveal>
                <AnimeReveal variant="fade-left" className="order-1 md:order-2 md:text-left">
                  <span className="text-5xl sm:text-6xl font-display font-bold text-accent/40 block mb-1 select-none">
                    2025
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    A LANDMARK FOR BRAJ HERITAGE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                    Mathura Zari Poshak Receives GI Recognition
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                    A significant milestone for the region's craft heritage came with Geographical Indication (GI) recognition for Mathura Zari Poshak, formally recognising the distinctive identity of a traditional craft deeply associated with Mathura and Braj. Khajani Welfare Society's role as the Registered Proprietor of the Mathura Zari Poshak GI connects this recognition with the organisation's continuing engagement in traditional crafts and artisan development.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    <Award size={13} />
                    Heritage · Identity · Recognition
                  </div>
                </AnimeReveal>
              </div>

              {/* TODAY: The Journey Continues */}
              <AnimeReveal variant="fade-up" className="rounded-3xl p-8 sm:p-12 bg-primary text-primary-foreground border border-white/10 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
                <AuroraBackground variant="dark" intensity={1.1} />
                <div className="relative z-10">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-secondary border border-white/20 inline-block mb-4">
                    TODAY · THE JOURNEY CONTINUES
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                    Same roots. A wider purpose.
                  </h3>
                  <p className="text-primary-foreground/80 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-6">
                    Today, Khajani's work brings together women-focused skill development, livelihoods, traditional crafts, education and community development—while continuing to explore new opportunities around the skills and cultural knowledge of Mathura and Braj. What has changed over the years is the scale and range of the work. What remains constant is its connection with people, practical capability and place.
                  </p>
                  <p className="font-handwriting text-2xl text-secondary">
                    People · Skills · Heritage · Opportunity
                  </p>
                </div>
              </AnimeReveal>

            </div>

            {/* Bottom Transition to Screen 6 */}
            <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  The journey explains how Khajani grew.
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  The next chapter shows what that growth became.
                </p>
              </div>
              <a
                href="#evolution-impact"
                className="btn-3d-accent inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider"
              >
                Next: How Our Work Evolved ↓
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 6 — HOW OUR WORK EVOLVED + OUR IMPACT
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="evolution-impact" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Half — How Our Work Evolved */}
          <div className="mb-20">
            <AnimeReveal variant="fade-up" className="max-w-3xl mb-12">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                HOW OUR WORK EVOLVED
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary leading-[1.12]">
                The work grew as the needs around us grew.
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mt-4 font-light leading-relaxed">
                Khajani's journey has never been limited to a single programme or sector. As its relationships with people and communities deepened, the work expanded—building on existing experience while responding to new needs and opportunities.
              </p>
            </AnimeReveal>

            {/* Single Flowing Pathway of 6 Evolutionary Stages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                {
                  step: "01",
                  title: "SKILLS",
                  headline: "Learning that can be used.",
                  desc: "Practical, hands-on training formed the foundation of Khajani's early work.",
                },
                {
                  step: "02",
                  title: "LIVELIHOODS",
                  headline: "Skills connected with opportunity.",
                  desc: "Training increasingly focused on helping women strengthen capabilities that could support economic participation.",
                },
                {
                  step: "03",
                  title: "HERITAGE & ARTISANS",
                  headline: "Traditional knowledge carried forward.",
                  desc: "Khajani's work with crafts brought together skill development, artisan capability and the living heritage of Braj.",
                },
                {
                  step: "04",
                  title: "EDUCATION & LEARNING",
                  headline: "Building capability earlier.",
                  desc: "Educational initiatives widened the organisation's engagement with learning and opportunity.",
                },
                {
                  step: "05",
                  title: "COMMUNITY DEVELOPMENT",
                  headline: "Responding to wider needs.",
                  desc: "Community-based initiatives extended the work beyond training into areas requiring practical local action.",
                },
                {
                  step: "06",
                  title: "PARTNERSHIPS",
                  headline: "Growing through collaboration.",
                  desc: "Institutional, government, industry and community partnerships have enabled different forms of work to reach further.",
                },
              ].map((stage, i) => (
                <AnimeReveal key={stage.step} variant="fade-up" delay={i * 70}>
                  <div className="clay-card rounded-3xl p-7 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-display font-black text-secondary/50 group-hover:text-secondary transition-colors">
                          {stage.step}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
                          {stage.title}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-lg text-primary leading-snug mb-2 group-hover:text-secondary transition-colors">
                        {stage.headline}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </AnimeReveal>
              ))}
            </div>

            <div className="text-center pt-4">
              <p className="font-handwriting text-2xl text-secondary italic font-normal">
                Different areas of work. One connected purpose.
              </p>
            </div>
          </div>

          {/* Lower Half — Our Impact */}
          <div className="pt-16 border-t border-border/80">
            <AnimeReveal variant="fade-up" className="max-w-3xl mb-12">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                OUR IMPACT
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
                Work measured in people, skills and possibilities.
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg mt-3 font-light leading-relaxed">
                Since its beginnings in Mathura, Khajani's work has grown programme by programme, batch by batch and community by community. Behind each number are women, artisans, and learners whose capabilities continue to grow.
              </p>
            </AnimeReveal>

            {/* 5 Verified Counters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 xl:gap-5 mb-14">
              <ImpactCounter
                target={10000}
                label="Women Trained"
                subtext="Practical and vocational learning across different skills and programmes."
                delay={0}
              />
              <ImpactCounter
                target={200}
                label="Training Batches"
                subtext="Structured learning delivered across Khajani's core domains."
                delay={80}
              />
              <ImpactCounter
                target={500}
                label="Artisans Supported"
                subtext="Traditional skills strengthened through training &amp; design support."
                delay={160}
              />
              <ImpactCounter
                target={1000}
                label="Learners Reached"
                subtext="Children &amp; young learners engaged through educational initiatives."
                delay={240}
              />
              <ImpactCounter
                target={50}
                label="Communities Engaged"
                subtext="Grassroots relationships extending across Mathura and Braj."
                delay={320}
              />
            </div>

            {/* What Those Numbers Mean (4 Compact Editorial Statements) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {[
                {
                  title: "SKILLS BUILT",
                  desc: "Practical capabilities that can continue beyond the classroom.",
                },
                {
                  title: "LIVELIHOOD PATHWAYS",
                  desc: "Connections between skills and opportunities for work, enterprise and economic participation.",
                },
                {
                  title: "HERITAGE CARRIED FORWARD",
                  desc: "Traditional knowledge kept active through learning, practice and contemporary relevance.",
                },
                {
                  title: "COMMUNITIES ENGAGED",
                  desc: "Work shaped through participation, local relationships and changing needs.",
                },
              ].map((item, i) => (
                <AnimeReveal key={item.title} variant="fade-up" delay={i * 70}>
                  <div className="p-6 rounded-2xl bg-card border border-border/70 hover:border-accent/40 transition-colors h-full">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
                      {item.title}
                    </span>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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
            <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
      <section id="people-behind-khajani" className="py-24 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
              PEOPLE BEHIND KHAJANI
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary">
              Three generations.
              <br />
              <span className="text-secondary font-serif italic">One shared purpose.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 font-light leading-relaxed">
              Khajani’s journey is also a story of continuity across generations. What began in Mathura with Dr. Harimohan Maheshwari and Abha Maheshwari, together with their daughter Shipra Rathi, gradually grew into a wider family commitment. Over the years, other members joined the journey, and today a third generation is contributing too.
            </p>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-secondary/15 text-primary border border-secondary/30">
                Service · Skills · Continuity · New Perspectives
              </span>
            </div>
          </AnimeReveal>

          {/* Sub-Section: The Founding Story (3 Prominent Profiles) */}
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-primary">
                The Founding Story: Where experience met new ideas.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Dr. Harimohan Maheshwari */}
              <AnimeReveal variant="fade-up" delay={0}>
                <div className="clay-card rounded-2xl p-5 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div>
                    <div className="rounded-xl overflow-hidden h-48 sm:h-52 w-full bg-muted mb-4 border border-border/60 shadow-xs group-hover:scale-102 transition-transform duration-500">
                      <img
                        src="/images/about/dr-hari-mohan.jpg"
                        alt="Dr. Harimohan Maheshwari, Co-Founder"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/10 text-accent block w-fit mb-1.5">
                      CO-FOUNDER
                    </span>
                    <h4 className="font-display font-bold text-xl text-primary leading-tight mb-1">
                      Dr. Harimohan Maheshwari
                    </h4>
                    <p className="text-[11px] font-medium text-secondary mb-2">
                      A lifetime of service. A grassroots perspective.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      A retired veterinary doctor, Dr. Harimohan Maheshwari brought his long experience of public service and direct engagement with people and communities. Following his retirement in 2007, his understanding of grassroots realities and service-oriented approach became an important part of Khajani’s early journey in Mathura.
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-border/50 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Public Service · Community · Purpose
                  </div>
                </div>
              </AnimeReveal>

              {/* Abha Maheshwari */}
              <AnimeReveal variant="fade-up" delay={100}>
                <div className="clay-card rounded-2xl p-5 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div>
                    <div className="rounded-xl overflow-hidden h-48 sm:h-52 w-full bg-muted mb-4 border border-border/60 shadow-xs group-hover:scale-102 transition-transform duration-500">
                      <img
                        src="/images/about/abha.jpg"
                        alt="Abha Maheshwari, Co-Founder &amp; President"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/10 text-accent block w-fit mb-1.5">
                      CO-FOUNDER · PRESIDENT
                    </span>
                    <h4 className="font-display font-bold text-xl text-primary leading-tight mb-1">
                      Abha Maheshwari
                    </h4>
                    <p className="text-[11px] font-medium text-secondary mb-2">
                      People at the heart of the journey.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Abha Maheshwari has been part of Khajani’s journey from its beginnings. Her involvement has remained closely connected with the organisation’s work with women and communities and with the continuity and institutional development of Khajani as its work expanded.
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-border/50 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    People · Participation · Continuity
                  </div>
                </div>
              </AnimeReveal>

              {/* Shipra Rathi */}
              <AnimeReveal variant="fade-up" delay={200}>
                <div className="clay-card rounded-2xl p-5 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div>
                    <div className="rounded-xl overflow-hidden h-48 sm:h-52 w-full bg-muted mb-4 border border-border/60 shadow-xs group-hover:scale-102 transition-transform duration-500">
                      <img
                        src="/images/about/shipra-rathi.jpg"
                        alt="Shipra Rathi, Co-Founder &amp; Secretary"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-accent/10 text-accent block w-fit mb-1.5">
                      CO-FOUNDER · SECRETARY
                    </span>
                    <h4 className="font-display font-bold text-xl text-primary leading-tight mb-1">
                      Shipra Rathi
                    </h4>
                    <p className="text-[11px] font-medium text-secondary mb-2">
                      From design and skills to livelihood possibilities.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Daughter of Dr. Harimohan and Abha Maheshwari, Shipra Rathi brought a younger generation and a different professional perspective. A fashion designer with experience in vocational training, her background in design and practical learning became central to Khajani’s work in women’s skills, livelihoods and traditional crafts.
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-border/50 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    Design · Skills · Livelihoods
                  </div>
                </div>
              </AnimeReveal>
            </div>
          </div>

          {/* Sub-Section: A Purpose Across Generations Visual Progression */}
          <div className="pt-16 border-t border-border/80">
            <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                A PURPOSE ACROSS GENERATIONS
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-primary">
                It began with a family. It grew with a community.
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mt-3 font-light leading-relaxed">
                As Khajani grew, its story also became the story of the many teams, trainers, artisans, learners, communities, institutions and partners who became part of its work.
              </p>
            </AnimeReveal>

            {/* 3 Generation Steps Progression */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Generation 1 */}
              <AnimeReveal variant="fade-up" delay={0}>
                <div className="rounded-3xl p-7 bg-background border border-border/80 hover:border-secondary/60 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                      FIRST GENERATION
                    </span>
                    <h4 className="font-display font-bold text-xl text-primary mb-2">
                      Dr. Harimohan Maheshwari &amp; Abha Maheshwari
                    </h4>
                    <p className="text-xs font-semibold text-accent mb-3">
                      Experience &amp; Foundation
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      The generation that gave Khajani its grounding in service, people, integrity and grassroots community connection in Mathura.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                    Roots &amp; Guiding Ethos
                  </div>
                </div>
              </AnimeReveal>

              {/* Generation 2 */}
              <AnimeReveal variant="fade-up" delay={100}>
                <div className="rounded-3xl p-7 bg-background border border-border/80 hover:border-secondary/60 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                      SECOND GENERATION
                    </span>
                    <h4 className="font-display font-bold text-xl text-primary mb-2">
                      Shipra Rathi · Shweta Rathi · Shobhit Maheshwari
                    </h4>
                    <p className="text-xs font-semibold text-accent mb-3">
                      with Vikas Rathi · Growth &amp; Continuity
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      As Khajani’s work and responsibilities expanded, Vikas Rathi, Shobhit Maheshwari, and Shweta Rathi joined the journey at different stages, helping carry the founding commitment forward into institutional partnerships.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                    Institutional Scale &amp; Innovation
                  </div>
                </div>
              </AnimeReveal>

              {/* Generation 3 */}
              <AnimeReveal variant="fade-up" delay={200}>
                <div className="rounded-3xl p-7 bg-background border border-border/80 hover:border-secondary/60 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-1">
                      THIRD GENERATION
                    </span>
                    <h4 className="font-display font-bold text-xl text-primary mb-2">
                      A New Generation of Changemakers
                    </h4>
                    <p className="text-xs font-semibold text-accent mb-3">
                      New Skills &amp; New Perspectives
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Today, members of the third generation are contributing meaningfully to Khajani, bringing fresh capabilities in digital systems, modern design, and communications while retaining continuity with the core mission.
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-border/50 text-[11px] font-mono text-muted-foreground">
                    Modern Capabilities &amp; Future Vision
                  </div>
                </div>
              </AnimeReveal>
            </div>

            {/* Handwritten Closing Accent */}
            <div className="p-8 rounded-3xl bg-background border border-border text-center max-w-3xl mx-auto">
              <p className="font-handwriting text-2xl sm:text-3xl text-secondary font-normal italic mb-2">
                “The roots remain. Each generation adds something of its own.”
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                People · Purpose · Generations · Community
              </p>
            </div>

            {/* Bottom Transition to Screen 8 */}
            <div className="mt-16 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
      <section id="governance" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-3">
              GOVERNANCE &amp; RESPONSIBILITY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary leading-tight">
              Purpose needs accountability.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 font-light leading-relaxed">
              Khajani Welfare Society has grown from a grassroots initiative into an institution with responsibilities to the people it works with, the organisations it collaborates with and the regulatory frameworks within which it operates.
            </p>
            <div className="mt-4">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
                Governance · Responsibility · Transparency · Continuity
              </span>
            </div>
          </AnimeReveal>

          {/* An Institution Built to Endure */}
          <div className="mb-14 p-8 rounded-3xl bg-card border border-border/80">
            <h3 className="font-display font-bold text-2xl text-primary mb-2">
              An Institution Built to Endure: Grassroots in spirit. Structured in practice.
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed max-w-3xl">
              The formal registration of Khajani Welfare Society in 2015 under the Societies Registration Act, 1860 marked an important step in that evolution—giving organisational structure to work that had begun at the grassroots in 2007. Trust is sustained through institutional responsibility.
            </p>
          </div>

          {/* Restrained Horizontal Institutional Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
            {[
              { year: "2007", label: "Grassroots Beginning" },
              { year: "2015", label: "Formal Society Registration" },
              { year: "MATHURA", label: "Institutional Home" },
              { year: "UTTAR PRADESH", label: "State of Operation" },
              { year: "SOCIETY", label: "Organisational Structure" },
              { year: "BRAJ", label: "Core Geographic Identity" },
            ].map((strip) => (
              <div key={strip.label} className="p-4 rounded-2xl bg-card border border-border/70 text-center">
                <span className="text-lg font-display font-bold text-primary block">
                  {strip.year}
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-wider block mt-1">
                  {strip.label}
                </span>
              </div>
            ))}
          </div>

          {/* Governance Pillars */}
          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">
              Governance: Responsibility has a structure.
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="clay-card rounded-3xl p-7 border border-border/80">
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <Building2 size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-primary mb-2">
                  Organisational Governance
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  The governing structure provides institutional oversight and continuity as Khajani’s programmes and partnerships evolve.
                </p>
              </div>

              <div className="clay-card rounded-3xl p-7 border border-border/80">
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-primary mb-2">
                  Financial Accountability
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Financial processes, statutory requirements and applicable reporting form part of the organisation’s responsibility as a registered institution.
                </p>
              </div>

              <div className="clay-card rounded-3xl p-7 border border-border/80">
                <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <FileText size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-primary mb-2">
                  Programme Oversight
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Programmes are undertaken within defined organisational responsibilities, with implementation, documentation and institutional coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Registrations & Statutory Credentials Cards */}
          <div className="mb-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-1">
                REGISTRATIONS &amp; STATUTORY CREDENTIALS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary">
                Registered. Recognised. Accountable.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <div key={cred.title} className="p-6 rounded-2xl bg-card border border-border/80 hover:border-secondary/60 transition-colors flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                        {cred.title}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/5 text-primary border border-primary/10">
                        {cred.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {cred.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-medium text-foreground">
                      {cred.id}
                    </span>
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transparency Gateways + Closing Accent */}
          <div className="p-8 rounded-3xl bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="font-handwriting text-2xl text-secondary italic">
                “Rooted in purpose. Responsible in practice.”
              </p>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mt-1">
                Governance · Transparency · Accountability · Trust
              </p>
            </div>
            <a
              href="#closing-purpose"
              className="btn-3d-accent inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-widest shrink-0 shadow-md"
            >
              Same Roots. A Wider Purpose. <ArrowDown size={14} />
            </a>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 9 — OUR JOURNEY CONTINUES (Same Roots. A Wider Purpose.)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="closing-purpose" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden scroll-mt-20">
        <AuroraBackground variant="dark" intensity={1.2} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-secondary border border-white/10">
              SAME ROOTS · A WIDER PURPOSE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Rooted in Mathura.
              <br />
              <span className="font-serif italic font-normal text-secondary">
                Growing with every journey.
              </span>
            </h2>

            <div className="space-y-4 max-w-3xl mx-auto text-base sm:text-lg text-primary-foreground/80 font-light leading-relaxed mb-10">
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
            <div className="py-8 my-8 border-y border-white/10 max-w-2xl mx-auto">
              <p className="font-handwriting text-3xl sm:text-4xl text-amber-200 font-normal italic">
                “The journey changes. The purpose remains.”
              </p>
            </div>

            {/* What We Carry Forward (4 Editorial Anchor Words) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12 text-center">
              <div>
                <span className="font-display font-bold text-2xl text-secondary block mb-1">
                  PEOPLE
                </span>
                <p className="text-xs text-primary-foreground/70 font-light">
                  At the centre of the work.
                </p>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-secondary block mb-1">
                  SKILLS
                </span>
                <p className="text-xs text-primary-foreground/70 font-light">
                  Capabilities that remain.
                </p>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-secondary block mb-1">
                  HERITAGE
                </span>
                <p className="text-xs text-primary-foreground/70 font-light">
                  Knowledge worth carrying forward.
                </p>
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-secondary block mb-1">
                  OPPORTUNITY
                </span>
                <p className="text-xs text-primary-foreground/70 font-light">
                  Possibilities for what comes next.
                </p>
              </div>
            </div>

            {/* Final Statement & Call to Actions */}
            <div className="mt-12 max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl font-display font-medium text-white mb-3">
                This is where we come from. The next chapter is what we build together.
              </p>
              <p className="text-xs sm:text-sm text-primary-foreground/70 mb-10 font-light leading-relaxed">
                Khajani’s story continues through the women who learn, the artisans who practise and pass on their knowledge, the young people who build new capabilities, the communities that participate, and the people and institutions who choose to work alongside them.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/our-work"
                  className="btn-3d-accent inline-flex items-center justify-center gap-2 px-9 py-4 text-xs font-bold uppercase tracking-widest shadow-xl"
                >
                  Explore Our Work <ArrowRight size={14} />
                </Link>
                <Link
                  to="/volunteer"
                  className="btn-3d-outline inline-flex items-center justify-center gap-2 px-9 py-4 text-xs font-bold uppercase tracking-widest"
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
