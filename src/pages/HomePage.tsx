import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import { useAnimeCounter } from "@/hooks/use-anime-counter";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import {
  Users, ArrowRight, Sparkles, CheckCircle2, Mail, HeartHandshake,
  Award, BookOpen, Heart, Compass, Feather, Building2, Calendar,
  Newspaper, Video, Image as ImageIcon, ChevronRight, Quote, ShieldCheck,
  Cog, Share2, Sprout, Star, Eye, ZoomIn
} from "lucide-react";
import { animate, stagger } from "animejs";
import { MediaLightbox, MediaItem } from "@/components/MediaLightbox";

/* ─── Individual Counter Stat for Screen 5 Impact ─── */
function ImpactStatCounter({
  target,
  suffix = "+",
  label,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const { ref, displayed } = useAnimeCounter({
    target,
    duration: 2200,
    suffix,
  });

  return (
    <AnimeReveal variant="fade-up" delay={delay} className="text-center group h-full">
      <div className="rounded-2xl p-5 sm:p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-secondary/50 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 flex flex-col items-center justify-between h-full shadow-lg">
        <span
          ref={ref as React.RefObject<HTMLSpanElement>}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-2 font-display tabular-nums tracking-tight"
        >
          {displayed}
        </span>
        <div className="h-0.5 w-8 bg-secondary/40 rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
        <p className="text-xs sm:text-sm font-medium text-primary-foreground/85 leading-snug">{label}</p>
      </div>
    </AnimeReveal>
  );
}

/* ─── Animated Hero Heading ─── */
function AnimatedHeroHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const words = Array.from(el.querySelectorAll(".hero-word")) as HTMLElement[];
    words.forEach((w) => { w.style.opacity = "0"; });
    animate(words, {
      opacity: [0, 1],
      translateY: [20, 0],
      ease: "outExpo",
      duration: 600,
      delay: stagger(100, { start: 100 }),
    });
  }, []);

  return (
    <h1
      ref={headingRef}
      className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-display font-bold text-primary mb-5 leading-[1.14]"
    >
      <span className="hero-word block">Empowering people.</span>
      <span className="hero-word block text-secondary italic font-serif">Preserving heritage.</span>
      <span className="hero-word block text-accent">Creating opportunities.</span>
    </h1>
  );
}

/* ─── Main Home Page Component ─── */
const HomePage = () => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Lightbox state for Press Coverage newspaper clippings
  const [lightboxItems, setLightboxItems] = useState<MediaItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (items: MediaItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
  };

  const pressCoverageItems: (MediaItem & { publication: string; headline: string; desc: string })[] = [
    {
      image: "/images/media/news-clipping-14.jpg",
      publication: "दैनिक जागरण",
      headline: "मथुरा की महिलाओं को कौशल से नई पहचान",
      desc: "खजानी वेलफेयर सोसाइटी द्वारा आयोजित सिलाई एवं हस्तशिल्प प्रशिक्षण शिविरों से ग्रामीण महिलाओं को आत्मनिर्भरता की राह मिली।",
      date: "2018",
    },
    {
      image: "/images/media/news-clipping-1.jpg",
      publication: "THE HINDU — SOCIAL IMPACT",
      headline: "Mathura NGO empowers women through traditional crafts",
      desc: "How Khajani Welfare Society breathes new economic vitality into ancestral Sanjhi art while providing stable rural livelihoods.",
      date: "July 2021",
    },
    {
      image: "/images/media/news-clipping-10.jpg",
      publication: "INDIA TODAY",
      headline: "Preserving Braj’s heritage, empowering rural women",
      desc: "A grassroots movement born in Mathura that bridges traditional cultural arts with certified modern vocational pathways.",
      date: "2020",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail.trim()) return;
    setSubscribed(true);
    setSubscribeEmail("");
  };

  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 1 — HERO
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-background overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        <AuroraBackground variant="light" intensity={1.3} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Copy */}
            <AnimeReveal variant="fade-left" className="lg:w-1/2 text-center lg:text-left space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                ROOTED IN BRAJ — WORKING FOR A BRIGHTER TOMORROW
              </div>

              {/* Animated Headline */}
              <AnimatedHeroHeading />

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-4 border-accent pl-5">
                Khajani Welfare Society is a Mathura-based organisation working with women, girls, artisans and underserved communities to build skills, preserve heritage and create more inclusive, sustainable livelihoods.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/our-work"
                  className="btn-3d-accent inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  Our Work <ArrowRight size={16} />
                </Link>
                <Link
                  to="/donate"
                  className="btn-3d-outline inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider"
                >
                  Support Khajani
                </Link>
              </div>

              {/* People · Heritage · Opportunity Badge */}
              <div className="pt-2">
                <p className="font-handwriting text-2xl sm:text-3xl text-secondary font-normal italic">
                  People · Heritage · Opportunity
                </p>
              </div>
            </AnimeReveal>

            {/* Right Photo Mask Showcase */}
            <AnimeReveal variant="fade-right" delay={150} className="lg:w-1/2 relative w-full max-w-lg mx-auto">
              <div className="relative aspect-[4/3.6] sm:aspect-[4/3.4]">
                <div
                  className="hero-mask w-full h-full relative z-10 overflow-hidden"
                  style={{
                    boxShadow: "0 24px 0 0 hsl(var(--border)), 0 32px 64px rgba(27,46,107,0.18)",
                  }}
                >
                  <img
                    alt="Women in classroom skill session at Khajani"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    src="/images/projects/hero-training.jpg"
                  />
                </div>

                {/* Quote Card — Moved to Upper Part */}
                <div
                  className="absolute -top-4 -right-2 sm:-right-6 z-20 max-w-[230px] rounded-2xl p-4 bg-primary text-primary-foreground shadow-2xl border border-white/10"
                  style={{
                    boxShadow: "0 6px 0 hsl(221 80% 8%), 0 14px 32px rgba(27,46,107,0.35)",
                  }}
                >
                  <p className="text-xs italic text-primary-foreground/90 leading-snug font-medium">
                    &ldquo;Stronger communities are built when people, heritage and opportunity grow together.&rdquo;
                  </p>
                </div>

                {/* Floating Stat Badge — 20,000+ Women Helped */}
                <div
                  className="absolute -bottom-4 -left-3 sm:-left-8 glass rounded-2xl p-4 sm:p-5 z-20 flex items-center gap-3.5 sm:gap-4 bg-white/95 border border-border shadow-xl animate-float-bounce cursor-default"
                  style={{
                    boxShadow: "0 8px 0 hsl(var(--border)), 0 16px 40px rgba(0,0,0,0.12)",
                  }}
                >
                  <div className="bg-primary/10 p-2.5 sm:p-3 rounded-xl text-primary">
                    <Users size={22} />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary leading-none">
                      20,000+
                    </h3>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1">
                      Women Helped
                    </p>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>

          {/* Crafting Brighter Futures Banner */}
          <AnimeReveal variant="fade-up" delay={300} className="mt-14 pt-8 border-t border-border/70 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent block mb-2">
              Crafting Brighter Futures
            </span>
            <p className="text-xs sm:text-sm font-medium text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Women &amp; Livelihoods &nbsp;|&nbsp; Heritage &amp; Artisan Development &nbsp;|&nbsp; Education &amp; Digital Inclusion &nbsp;|&nbsp; Community Development &amp; Social Empowerment
            </p>
            <div className="mt-4 flex flex-col items-center gap-1">
              <p className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase">
                Mathura — Our Home — Our Inspiration
              </p>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50 mt-1">
                SCROLL TO EXPLORE ↓
              </span>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 2 — ABOUT KHAJANI / OUR JOURNEY
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="about-khajani" className="py-24 bg-card border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Part A: About Khajani */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <AnimeReveal variant="fade-left" className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                About Khajani
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary leading-[1.12]">
                People at the heart
                <br />
                <span className="text-secondary font-serif italic">of a stronger tomorrow.</span>
              </h2>
              <div className="space-y-4 text-base text-muted-foreground font-light leading-relaxed">
                <p>
                  Khajani Welfare Society is a Mathura-based organisation working with women, girls, artisans and underserved communities to create opportunities, preserve heritage and build more inclusive, sustainable livelihoods.
                </p>
                <p>
                  Founded in 2007 by <strong className="font-semibold text-foreground">Dr. Harimohan Maheshwari</strong> (retired veterinary doctor), <strong className="font-semibold text-foreground">Abha Maheshwari</strong> and <strong className="font-semibold text-foreground">Shipra Rathi</strong>, Khajani grew from a simple yet powerful belief — that traditional knowledge, when nurtured with modern skills, can transform lives.
                </p>
              </div>

              <div className="pt-2">
                <p className="font-handwriting text-2xl text-secondary">
                  Tradition · Skills · Confidence · Opportunity
                </p>
              </div>
            </AnimeReveal>

            {/* 4 Pillars Grid */}
            <AnimeReveal variant="fade-right" delay={150} className="lg:col-span-5">
              <div className="space-y-3">
                {[
                  { title: "Women, Skills & Livelihoods", desc: "Enabling economic independence." },
                  { title: "Heritage & Artisan Development", desc: "Preserving Braj’s rich craft traditions." },
                  { title: "Education & Digital Inclusion", desc: "Expanding learning and opportunities." },
                  { title: "Community Development & Social Empowerment", desc: "Stronger, healthier and more inclusive communities." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-background border border-border/80 hover:border-secondary/60 transition-colors">
                    <h3 className="font-display font-bold text-base text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                ))}
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 text-center">
                  <p className="text-xs italic font-serif text-primary/90">
                    “When opportunity reaches people, extraordinary stories begin.”
                  </p>
                </div>
              </div>
            </AnimeReveal>
          </div>

          {/* Part B: Our Journey */}
          <div className="pt-16 border-t border-border/80">
            <AnimeReveal variant="fade-up" className="max-w-3xl mb-12">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                OUR JOURNEY
              </span>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
                A journey of people, purpose and possibility.
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed font-light">
                From a small beginning in 2007 to a growing presence in Mathura and beyond, our journey has been shaped by communities, partnerships and a shared commitment to a brighter, more inclusive future.
              </p>
              <div className="mt-4">
                <Link to="/about" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors border-b border-secondary/40 pb-0.5">
                  Our Story <ArrowRight size={13} />
                </Link>
              </div>
            </AnimeReveal>

            {/* Milestones Horizontal Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { year: "2007", title: "The Beginning", desc: "Khajani Welfare Society founded in Mathura by Dr. Harimohan Maheshwari, Abha Maheshwari and Shipra Rathi." },
                { year: "2012", title: "Skills Take Root", desc: "Early skill training initiatives for women and artisans." },
                { year: "2015", title: "Expanding Reach", desc: "More communities, more training programmes." },
                { year: "2018", title: "Stronger Partnerships", desc: "Collaborations with institutions and industry partners." },
                { year: "2020", title: "Broader Impact", desc: "Education, digital literacy and community development initiatives scaled up." },
                { year: "2021", title: "Deeper Communities", desc: "Greater focus on inclusion, awareness and holistic development." },
                { year: "2025", title: "Growing Forward", desc: "Continuing our journey towards stronger, self-reliant communities in Braj and beyond." },
              ].map((mile) => (
                <div key={mile.year} className="p-5 rounded-2xl bg-background border border-border/70 hover:border-secondary/50 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-display font-bold text-primary block mb-1">
                      {mile.year}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
                      {mile.title}
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {mile.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4 border-t border-border/50">
              <p className="font-handwriting text-2xl text-secondary italic">
                Many Journeys · One Shared Tomorrow
              </p>
              <p className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mt-1">
                MATHURA · BRAJ · PEOPLE · HERITAGE · A BRIGHTER TOMORROW
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 3 — OUR WORK / HOW WE WORK
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="our-work" className="py-24 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Part A: Our Work (Four Pathways) */}
          <div className="mb-20">
            {/* Header Area matching Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
              {/* Left Column: Title & Intro */}
              <AnimeReveal variant="fade-left" className="lg:col-span-8">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A32A29]/10 border border-[#A32A29]/20 text-[#A32A29] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#A32A29]" />
                  OUR WORK
                </div>

                {/* Main Headline */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A202C] leading-[1.12] tracking-tight mb-4">
                  Four pathways to <br />
                  brighter tomorrows.
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed max-w-2xl mb-5 font-light">
                  At Khajani, our work is centred on women, girls and communities in Mathura and Braj. We focus on strengthening traditional skills, expanding opportunities and building more inclusive, self-reliant communities.
                </p>

                {/* Sub-eyebrow */}
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C4A480] font-mono block">
                  SKILLS · HERITAGE · PEOPLE · OPPORTUNITY
                </span>
              </AnimeReveal>

              {/* Right Column: Watercolor Wash Calligraphy Badge & Botanical Branch */}
              <AnimeReveal variant="fade-right" delay={150} className="lg:col-span-4 hidden lg:flex justify-end items-center">
                <div className="flex items-center gap-5">
                  {/* Soft watercolor background wash patch */}
                  <div className="px-7 py-6 sm:px-8 sm:py-7 rounded-[32px] bg-gradient-to-br from-[#F7EFE4] via-[#FAF4EA] to-[#F2E7D8] shadow-[0_8px_25px_rgba(210,190,170,0.18)] border border-[#EAE0D2]/80 -rotate-3 transition-transform duration-300 hover:rotate-0">
                    {/* Handwritten script text */}
                    <div className="text-left pl-1">
                      <p className="font-handwriting text-2xl sm:text-[27px] text-[#2C3E50] font-semibold leading-[1.15] tracking-normal">
                        Stronger
                      </p>
                      <p className="font-handwriting text-2xl sm:text-[27px] text-[#2C3E50] font-semibold leading-[1.15] tracking-normal">
                        Communities
                      </p>
                      <p className="font-handwriting text-2xl sm:text-[27px] text-[#2C3E50] font-semibold leading-[1.15] tracking-normal mt-0.5">
                        Brighter
                      </p>
                      <p className="font-handwriting text-2xl sm:text-[27px] text-[#2C3E50] font-semibold leading-[1.15] tracking-normal">
                        Tomorrows
                      </p>
                      {/* Terracotta painterly accent underline */}
                      <div className="h-[2.5px] w-14 bg-[#B8423E] rounded-full mt-2.5 ml-1 rotate-[-2deg]" />
                    </div>
                  </div>

                  {/* Botanical leaf branch standing beside the card with zero overlap */}
                  <img
                    src="/images/projects/botanical-leaf-branch.png"
                    alt=""
                    className="w-24 sm:w-28 h-auto pointer-events-none opacity-85 object-contain select-none shrink-0"
                  />
                </div>
              </AnimeReveal>
            </div>

            {/* 4 Pathways Grid (2x2 with split photos matching mockup) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
              {[
                {
                  num: "01",
                  title: "Women, Skills & Livelihoods",
                  desc: "Practical training, design support and market linkages to enable economic independence.",
                  img: "/images/projects/pathway-women-skills.jpg",
                  link: "/our-work",
                },
                {
                  num: "02",
                  title: "Heritage & Artisan Development",
                  desc: "Preserving Braj’s rich craft traditions through training, innovation and sustainable livelihood opportunities.",
                  img: "/images/projects/pathway-heritage-artisan.jpg",
                  link: "/our-work",
                },
                {
                  num: "03",
                  title: "Education & Digital Inclusion",
                  desc: "Supporting education, digital literacy and life skills for a more confident and inclusive tomorrow.",
                  img: "/images/projects/pathway-education-digital.jpg",
                  link: "/our-work",
                },
                {
                  num: "04",
                  title: "Community Development & Social Empowerment",
                  desc: "Creating stronger, healthier and more resilient communities through awareness, collective action and local leadership.",
                  img: "/images/projects/pathway-community-empowerment.jpg",
                  link: "/our-work",
                },
              ].map((pathway, idx) => (
                <AnimeReveal key={pathway.num} variant="fade-up" delay={idx * 100}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E8E2D9] shadow-xs hover:shadow-xl hover:border-[#C4A480]/60 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row items-stretch group h-full">
                    {/* Left Photo */}
                    <div className="sm:w-5/12 w-full aspect-[4/3] sm:aspect-auto relative overflow-hidden flex-shrink-0 bg-[#FAF7F2]">
                      <img
                        src={pathway.img}
                        alt={pathway.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/25 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Right Content */}
                    <div className="sm:w-7/12 w-full p-6 sm:p-7 flex flex-col justify-between bg-white">
                      <div>
                        {/* Number & Rule */}
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="text-sm font-bold text-[#C4A480] font-mono tracking-wider">
                            {pathway.num}
                          </span>
                          <div className="h-px bg-[#E2D9CC] flex-1" />
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A202C] leading-snug mb-2.5 group-hover:text-[#A32A29] transition-colors">
                          {pathway.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed font-light">
                          {pathway.desc}
                        </p>
                      </div>

                      {/* Link */}
                      <div className="mt-5 pt-3 border-t border-[#F0ECE1]">
                        <Link
                          to={pathway.link}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#A32A29] hover:text-[#8B2322] group/link transition-colors"
                        >
                          <span>LEARN MORE</span>
                          <ArrowRight size={13} className="group-hover/link:translate-x-1.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimeReveal>
              ))}
            </div>

            {/* Bottom Tagline matching Mockup */}
            <div className="text-center pt-2">
              <p className="font-handwriting text-2xl sm:text-3xl text-[#C4A480] font-normal italic tracking-wide">
                People · Heritage · Opportunity
              </p>
            </div>
          </div>

          {/* Part B: How We Work */}
          <div className="pt-20 border-t border-border/80 relative">
            {/* Ambient Bottom-Left Rose/Peach Watercolor Splash */}
            <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-gradient-to-tr from-[#F8DDD6]/60 via-[#FDF1EE]/30 to-transparent blur-3xl pointer-events-none z-0" />

            {/* Header with Title & Leaf Branch Accent */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 relative z-10">
              <AnimeReveal variant="fade-up" className="lg:col-span-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#A32A29] text-xs font-bold tracking-[0.25em] uppercase font-mono">
                    HOW WE WORK
                  </span>
                  <div className="h-px w-10 bg-[#A32A29]/30" />
                </div>
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A202C] leading-[1.12] tracking-tight">
                  From learning to{" "}
                  <span className="text-[#C4A480] font-serif italic font-normal">lasting change.</span>
                </h3>
                <p className="text-[#4A5568] text-sm sm:text-base max-w-2xl font-light leading-relaxed pt-1">
                  We follow a people-centred, hands-on approach that builds skills, confidence and real opportunities.
                </p>
              </AnimeReveal>

              {/* Right: Handwriting Script & Leaf Branch */}
              <AnimeReveal variant="fade-right" delay={150} className="lg:col-span-4 hidden lg:flex justify-end items-center">
                <div className="flex items-center gap-5">
                  <div className="text-right space-y-0.5">
                    <p className="font-handwriting text-2xl sm:text-[27px] text-[#718096] italic leading-tight">Skills</p>
                    <p className="font-handwriting text-2xl sm:text-[27px] text-[#718096] italic leading-tight">People</p>
                    <p className="font-handwriting text-2xl sm:text-[27px] text-[#718096] italic leading-tight">Stronger Communities</p>
                    <div className="h-[2px] w-16 bg-[#B8423E] ml-auto mt-2 rounded-full rotate-[-2deg]" />
                  </div>
                  <img
                    src="/images/projects/botanical-leaf-branch.png"
                    alt=""
                    className="w-24 sm:w-28 h-auto pointer-events-none opacity-85 object-contain select-none shrink-0"
                  />
                </div>
              </AnimeReveal>
            </div>

            {/* 6 Steps Horizontal Pathway with Connecting Undulating Wave */}
            <div className="relative mb-20">
              {/* Background smooth wavy curve line linking all 6 step medallions */}
              <div className="hidden lg:block absolute top-9 left-0 right-0 h-16 pointer-events-none z-0 overflow-hidden">
                <svg
                  className="w-full h-full text-[#E2D9CC]"
                  viewBox="0 0 1200 80"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 50,40 C 120,65 180,15 250,40 C 320,65 380,15 450,40 C 520,65 580,15 650,40 C 720,65 780,15 850,40 C 920,65 980,15 1050,40 C 1110,65 1160,30 1200,40"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* 6 Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
                {[
                  {
                    step: "01",
                    name: "Learn",
                    desc: "Build practical skills through hands-on training and exposure.",
                    icon: BookOpen,
                  },
                  {
                    step: "02",
                    name: "Practise",
                    desc: "Gain confidence through guided practice, mentoring and real-world experience.",
                    icon: Users,
                  },
                  {
                    step: "03",
                    name: "Produce",
                    desc: "Create quality products and services rooted in tradition and skill.",
                    icon: Cog,
                  },
                  {
                    step: "04",
                    name: "Connect",
                    desc: "Link with local markets, employers, institutions and opportunities.",
                    icon: Share2,
                  },
                  {
                    step: "05",
                    name: "Earn",
                    desc: "Support sustainable incomes through self-employment and enterprise.",
                    icon: Sprout,
                  },
                  {
                    step: "06",
                    name: "Grow",
                    desc: "Enable greater independence, stronger families and thriving communities.",
                    icon: Star,
                  },
                ].map((st, idx) => {
                  const Icon = st.icon;
                  return (
                    <AnimeReveal key={st.step} variant="fade-up" delay={idx * 60}>
                      <div className="flex flex-col items-start text-left group">
                        {/* Circular Medallion */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FAF5ED] border border-[#E8DFD3] flex items-center justify-center text-[#2D3748] shadow-xs mb-6 group-hover:scale-105 group-hover:border-[#C4A480] group-hover:shadow-md transition-all duration-300">
                          <Icon size={24} strokeWidth={1.4} className="text-[#2D3748] group-hover:text-[#A32A29] transition-colors" />
                        </div>

                        {/* Number */}
                        <span className="text-lg font-serif font-bold text-[#C4A480] block mb-1">
                          {st.step}
                        </span>

                        {/* Name */}
                        <h4 className="font-serif font-bold text-xl text-[#1A202C] mb-2 leading-snug">
                          {st.name}
                        </h4>

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] text-[#4A5568] leading-relaxed font-light">
                          {st.desc}
                        </p>
                      </div>
                    </AnimeReveal>
                  );
                })}
              </div>
            </div>

            {/* Impact Quote & Heritage Sketch Card matching Mockup */}
            <AnimeReveal variant="fade-up">
              <div className="rounded-[36px] bg-[#FAF6F0] border border-[#EBE3D7] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Quote & Button */}
                  <div className="lg:col-span-7 flex flex-col items-start space-y-4">
                    <span className="text-5xl sm:text-6xl font-serif text-[#E8C5B8] leading-none select-none font-bold">
                      “
                    </span>
                    <p className="font-serif italic text-xl sm:text-2xl text-[#1A202C] leading-relaxed max-w-xl">
                      “When people are given the right support, they don’t just learn new skills — they create new futures.”
                    </p>
                    <div className="pt-3">
                      <Link
                        to="/our-work"
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#A32A29] hover:bg-[#8B2322] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_6px_20px_rgba(163,42,41,0.28)] hover:scale-105 active:scale-95"
                      >
                        <span>See Our Impact</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Mathura Yamuna Ghat Heritage Sketch */}
                  <div className="lg:col-span-5 flex justify-end items-center">
                    <div className="w-full max-w-md lg:max-w-none overflow-hidden rounded-2xl">
                      <img
                        src="/images/projects/mathura-ghat-sketch.png"
                        alt="Mathura Ghat Sketch"
                        className="w-full h-auto object-contain opacity-90 select-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="mt-8 text-center">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#718096]">
                  Communities Create Change · MATHURA · BRAJ · PEOPLE · HERITAGE · OPPORTUNITY
                </p>
              </div>
            </AnimeReveal>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 4 — BRAJ HERITAGE
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="braj-heritage" className="py-20 sm:py-24 bg-[#FDFBF7] border-b border-border/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Left Typography & Right Perforated GI Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
            {/* Left Column: Title, Intro & CTA */}
            <AnimeReveal variant="fade-left" className="lg:col-span-6 xl:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-[#A32A29] text-xs font-bold tracking-[0.25em] uppercase font-mono">
                  BRAJ HERITAGE
                </span>
                <div className="h-px w-10 bg-[#A32A29]/30" />
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A202C] leading-[1.12] tracking-tight">
                Timeless traditions.
                <br />
                <span className="text-[#C4A480] font-serif italic font-normal">Living futures.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#4A5568] font-light leading-relaxed max-w-xl">
                Braj is more than a place — it is a living heritage of art, devotion and craftsmanship. At Khajani, we work to preserve and promote traditional skills such as Mathura Zari Poshak, hand embroidery and block printing, while creating dignified livelihood opportunities for today’s artisans, especially women.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projects/royal-sanjhi"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#A32A29] hover:bg-[#8B2322] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_6px_20px_rgba(163,42,41,0.28)] hover:scale-105 active:scale-95"
                >
                  <span>Explore Our Heritage</span>
                  <ArrowRight size={14} />
                </Link>
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#C4A480] font-bold">
                  <span className="h-px w-6 bg-[#C4A480]" />
                  <span>Crafting Culture · Empowering Communities</span>
                </div>
              </div>
            </AnimeReveal>

            {/* Right Column: Featured GI Craft Card with Perforated / Deckle Torn Paper Edge */}
            <AnimeReveal variant="fade-right" delay={150} className="lg:col-span-6 xl:col-span-5">
              <div className="rounded-[32px] overflow-hidden border border-[#E8DFD3] shadow-lg bg-[#FAF5EE] grid grid-cols-1 md:grid-cols-12 relative group">
                
                {/* Left: Parchment Content */}
                <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between relative z-10 bg-[#FAF5EE]">
                  {/* Perforated / Torn Deckle Paper Edge (Desktop) */}
                  <div className="hidden md:block absolute top-0 bottom-0 -right-[14px] w-5 z-20 pointer-events-none select-none drop-shadow-[-3px_0_4px_rgba(0,0,0,0.15)]">
                    <svg
                      viewBox="0 0 20 400"
                      preserveAspectRatio="none"
                      className="w-full h-full text-[#FAF5EE] fill-current"
                    >
                      <path d="M 0,0 L 5,0 Q 11,20 4,40 Q 14,60 6,80 Q 2,100 10,120 Q 16,140 5,160 Q 2,180 11,200 Q 17,220 6,240 Q 2,260 12,280 Q 16,300 5,320 Q 2,340 11,360 Q 15,380 6,400 L 0,400 Z" />
                    </svg>
                  </div>

                  {/* Perforated / Torn Deckle Paper Edge (Mobile) */}
                  <div className="md:hidden absolute left-0 right-0 -bottom-[12px] h-4 z-20 pointer-events-none select-none drop-shadow-[0_-2px_3px_rgba(0,0,0,0.1)]">
                    <svg
                      viewBox="0 0 400 20"
                      preserveAspectRatio="none"
                      className="w-full h-full text-[#FAF5EE] fill-current"
                    >
                      <path d="M 0,0 L 0,5 Q 20,11 40,4 Q 60,14 80,6 Q 100,2 120,10 Q 140,16 160,5 Q 180,2 200,11 Q 220,17 240,6 Q 260,2 280,12 Q 300,16 320,5 Q 340,2 360,11 Q 380,15 400,6 L 400,0 Z" />
                    </svg>
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#A32A29] text-white mb-3 inline-block shadow-xs">
                      GI – 1147 Recognised Heritage Craft
                    </span>

                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1A202C] mb-2 leading-tight">
                      Mathura Zari Poshak
                    </h3>

                    <p className="text-xs text-[#4A5568] leading-relaxed mb-3.5 font-light">
                      The exquisite art of Mathura Zari Poshak reflects the devotion, craftsmanship and cultural richness of Braj. It has been granted the Geographical Indication (GI) recognition, acknowledging its unique identity and traditional value.
                    </p>

                    <div className="p-3 rounded-xl bg-[#F0EAE1]/85 border border-[#E2D8CA] text-[11px] font-mono text-[#4A5568] mb-4">
                      <span className="font-bold text-[#1A202C] block text-[10px] uppercase tracking-wider mb-0.5">
                        Registered Proprietor:
                      </span>
                      Khajani Welfare Society, Mathura, Uttar Pradesh
                    </div>
                  </div>

                  <Link
                    to="/gi-recognition"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A32A29] hover:text-[#8B2322] group/link transition-colors pt-1"
                  >
                    <span>Learn More About GI</span>
                    <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Right: Rich Zari Poshak Photo */}
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-full overflow-hidden bg-black/10">
                  <img
                    src="/images/projects/poshak-zari.jpg"
                    alt="Mathura Zari Poshak sacred deity attire"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>
            </AnimeReveal>
          </div>

          {/* Middle Row: 4 Heritage Pillar Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {[
              {
                title: "Traditional Skills",
                desc: "Passed down through generations.",
                icon: (
                  <svg className="w-8 h-8 text-[#C4A480]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 8 C24 18 18 28 24 38 C30 28 24 18 24 8 Z" />
                    <path d="M24 22 C17 18 9 24 11 34 C16 38 22 36 24 38" />
                    <path d="M24 22 C31 18 39 24 37 34 C32 38 26 36 24 38" />
                    <path d="M11 34 C6 30 5 40 16 41 C20 41 23 39 24 38" />
                    <path d="M37 34 C42 30 43 40 32 41 C28 41 25 39 24 38" />
                  </svg>
                ),
              },
              {
                title: "Cultural Identity",
                desc: "Rooted in the spirit of Braj.",
                icon: (
                  <svg className="w-8 h-8 text-[#C4A480]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 6 L24 10" />
                    <circle cx="24" cy="11" r="1.5" />
                    <path d="M24 12 Q20 20 18 26 L30 26 Q28 20 24 12 Z" />
                    <path d="M14 26 L34 26 L36 34 L12 34 Z" />
                    <path d="M16 34 L16 42 L32 42 L32 34" />
                    <path d="M20 42 Q20 37 24 37 Q28 37 28 42" />
                    <path d="M10 42 L38 42" />
                  </svg>
                ),
              },
              {
                title: "Sustainable Livelihoods",
                desc: "Creating opportunities for artisan communities.",
                icon: (
                  <svg className="w-8 h-8 text-[#C4A480]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M24 14 Q24 22 24 28" />
                    <path d="M24 18 Q20 12 14 16 Q16 22 24 20" />
                    <path d="M24 22 Q29 16 34 20 Q32 26 24 24" />
                    <path d="M12 32 Q16 30 22 34 L28 34 Q34 32 38 36" />
                    <path d="M14 36 C18 42 30 42 34 38" />
                  </svg>
                ),
              },
              {
                title: "Pride for Future Generations",
                desc: "Keeping heritage alive, always.",
                icon: (
                  <svg className="w-8 h-8 text-[#C4A480]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="16" r="4.5" />
                    <path d="M16 32 C16 26 20 23 24 23 C28 23 32 26 32 32" />
                    <circle cx="13" cy="21" r="3.5" />
                    <path d="M8 33 C8 29 11 27 14 27" />
                    <circle cx="35" cy="21" r="3.5" />
                    <path d="M40 33 C40 29 37 27 34 27" />
                    <path d="M6 36 L42 36" />
                  </svg>
                ),
              },
            ].map((pillar, idx) => (
              <AnimeReveal key={pillar.title} variant="fade-up" delay={idx * 60}>
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DFD3] flex items-center gap-3.5 shadow-xs hover:shadow-sm hover:border-[#C4A480]/60 transition-all h-full">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm sm:text-[15px] text-[#1A202C] leading-snug mb-0.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#718096] font-light leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          {/* Bottom Banner: Quote & Panoramic Mathura Yamuna Ghat Illustration */}
          <AnimeReveal variant="fade-up">
            <div className="rounded-[36px] bg-[#FAF6F0] border border-[#EAE2D5] p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-xs">
              
              {/* Botanical Leaf Art in Bottom Left */}
              <img
                src="/images/projects/botanical-leaf-branch.png"
                alt=""
                className="absolute -bottom-10 -left-6 w-44 sm:w-56 h-auto pointer-events-none opacity-80 object-contain select-none -rotate-45 scale-x-[-1]"
              />

              {/* Panoramic Mathura River Ghat Sketch spanning right and bottom */}
              <img
                src="/images/projects/mathura-ghat-panoramic.png"
                alt="Mathura River Ghat & Temple Sketch"
                className="absolute right-0 bottom-0 max-w-[55%] sm:max-w-[52%] lg:max-w-[50%] h-auto object-contain object-bottom pointer-events-none opacity-90 select-none hidden sm:block"
              />

              {/* Center Content */}
              <div className="relative z-10 text-center max-w-2xl mx-auto py-2">
                <p className="font-serif italic text-lg sm:text-2xl text-[#1A202C] leading-relaxed mb-2">
                  “When heritage is valued, communities flourish.”
                </p>
                <p className="font-handwriting text-2xl sm:text-3xl text-[#C4A480] italic leading-tight mb-4">
                  Same Roots · Stronger People · Brighter Tomorrows
                </p>
                <p className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#718096] uppercase">
                  MATHURA · BRAJ · HERITAGE · OPPORTUNITY
                </p>
              </div>

            </div>
          </AnimeReveal>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 5 — OUR IMPACT
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="programmes-impact" className="py-24 bg-background border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Our Impact (Dark Aurora Card) */}
          <div className="rounded-3xl p-8 sm:p-14 bg-primary text-primary-foreground relative overflow-hidden shadow-2xl">
            <AuroraBackground variant="dark" intensity={1.1} />

            <div className="relative z-10">
              <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-secondary border border-white/10">
                  OUR IMPACT
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                  Changing lives. Building brighter tomorrows.
                </h3>
                <p className="text-primary-foreground/80 text-base font-light">
                  Together with our partners and communities, we are creating lasting impact in Mathura and Braj.
                </p>
              </AnimeReveal>

              {/* 5 Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 mb-12">
                <ImpactStatCounter target={10000} label="Women trained through our programmes" delay={0} />
                <ImpactStatCounter target={200} label="Batches conducted across skills & trades" delay={80} />
                <ImpactStatCounter target={500} label="Artisans and community members supported" delay={160} />
                <ImpactStatCounter target={1000} label="Learners reached through education initiatives" delay={240} />
                <ImpactStatCounter target={50} label="Communities engaged across Mathura and Braj" delay={320} />
              </div>

              {/* Quote & CTA */}
              <div className="text-center max-w-2xl mx-auto pt-6 border-t border-white/10">
                <p className="font-display italic text-xl sm:text-2xl text-secondary mb-6">
                  “Empowered people build stronger communities.”
                </p>
                <Link
                  to="/our-work"
                  className="btn-3d-accent inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest shadow-xl"
                >
                  See Our Impact <ArrowRight size={14} />
                </Link>
                <p className="text-xs font-mono uppercase tracking-widest text-primary-foreground/50 mt-6">
                  Many Lives · One Shared Tomorrow · MATHURA · BRAJ · PEOPLE · HERITAGE · OPPORTUNITY
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 6 — STORIES OF CHANGE
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="stories-of-change" className="py-24 bg-card border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-3">
              STORIES OF CHANGE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary">
              Real people. Brighter futures.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 font-light leading-relaxed">
              Behind every programme is a person, a family and a story of courage. These are the voices of women, girls and community members whose lives are changing through skills, education and opportunity with Khajani.
            </p>
            <div className="mt-3">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
                Courage Creates Change
              </span>
            </div>
          </AnimeReveal>

          {/* 5 Real Voice Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {[
              {
                quote: "“I never thought I could earn and support my family. Today, I am confident, independent and dreaming bigger.”",
                author: "Meena",
                role: "Skill Training Participant, Mathura",
              },
              {
                quote: "“Khajani gave me a skill, an identity and a new beginning.”",
                author: "Savitri Devi",
                role: "Artisan & Entrepreneur",
              },
              {
                quote: "“I feel more confident now. I want to study further and help my community.”",
                author: "Kavya",
                role: "Student, Digital Learning",
              },
              {
                quote: "“Our traditional craft is our pride. Khajani helped us reach new markets.”",
                author: "Rehana",
                role: "Zari Poshak Artisan",
              },
              {
                quote: "“Our children are healthier, happier and have better opportunities today.”",
                author: "Pooja",
                role: "Community Member",
              },
            ].map((story, i) => (
              <AnimeReveal key={story.author} variant="fade-up" delay={i * 80}>
                <div className="clay-card rounded-3xl p-7 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 transition-all">
                  <div>
                    <Quote size={24} className="text-secondary mb-4 opacity-70" />
                    <p className="text-sm font-serif italic text-foreground/90 leading-relaxed mb-6">
                      {story.quote}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base text-primary">
                        {story.author}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {story.role}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-accent">
                      Read her story →
                    </span>
                  </div>
                </div>
              </AnimeReveal>
            ))}

            {/* Watch Their Stories card */}
            <AnimeReveal variant="fade-up" delay={400}>
              <div className="rounded-3xl p-7 bg-primary text-primary-foreground flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                    Watch Their Stories
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    Real journeys. Real impact. A stronger Mathura.
                  </h3>
                  <p className="text-xs text-primary-foreground/70 leading-relaxed">
                    Witness firsthand how vocational skills, artisan development and community support empower families across Braj.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-secondary">
                    Stronger Communities · Brighter Tomorrows
                  </span>
                </div>
              </div>
            </AnimeReveal>
          </div>

          {/* Stories That Inspire Banner */}
          <div className="p-8 rounded-3xl bg-background border border-border text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
              STORIES THAT INSPIRE
            </span>
            <p className="font-display italic text-2xl text-primary mb-6">
              “When one woman rises, an entire community moves forward.”
            </p>
            <Link
              to="/volunteer"
              className="btn-3d-accent inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest"
            >
              Be Part of the Change <ArrowRight size={14} />
            </Link>
            <p className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mt-4">
              PEOPLE · HERITAGE · OPPORTUNITY
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 7 — GALLERY & MEDIA / PARTNERS / RECOGNITION
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="gallery-media" className="py-24 bg-background border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 pb-4 border-b border-border">
            <div>
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                GALLERY &amp; MEDIA
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary">
                Moments that tell our story.
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-2xl font-light">
                From classrooms to craft centres, from community events to national recognition — these glimpses reflect the people, partnerships and possibilities that shape Khajani.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/media"
                className="btn-3d-accent inline-flex items-center gap-2 px-7 py-3 text-xs font-bold uppercase tracking-wider"
              >
                View Full Gallery <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 6 Visual Moments Streams */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                stream: "SKILLS IN ACTION",
                tagline: "Learning. Creating. Earning.",
                title: "Vocational training empowering women with lifelong livelihood skills.",
                img: "/images/projects/upsdm-tailor.jpg",
                link: "/projects/upsdm-training"
              },
              {
                stream: "OUR CRAFT",
                tagline: "Preserving a living tradition.",
                title: "Reviving ancestral Sanjhi art and traditional Braj craft heritage.",
                img: "/images/projects/royal-sanjhi-training.jpg",
                link: "/projects/royal-sanjhi"
              },
              {
                stream: "BRIGHTER FUTURES",
                tagline: "Education opens doors.",
                title: "Foundational schooling & digital literacy for young girls in Mathura.",
                img: "/images/projects/kla-students.jpg",
                link: "/projects/kla"
              },
              {
                stream: "STRONGER COMMUNITIES",
                tagline: "Together for a better tomorrow.",
                title: "Self-help groups and women's cooperatives driving local change.",
                img: "/images/projects/shg-federation.jpg",
                link: "/projects/shg-federation"
              },
              {
                stream: "RECOGNITION",
                tagline: "Encouragement for our journey.",
                title: "State honours and leadership awards celebrating grassroots impact.",
                img: "/images/media/press-review-3.jpg",
                link: "/media"
              },
              {
                stream: "ROOTED IN BRAJ",
                tagline: "Heritage inspires our work.",
                title: "Sacred culture, cow welfare, and sustainable temple traditions.",
                img: "/images/projects/brij-surabhi-cow.jpg",
                link: "/projects/brij-surabhi"
              },
            ].map((item, i) => (
              <AnimeReveal key={item.stream} variant="fade-up" delay={i * 70}>
                <Link to={item.link} className="group relative rounded-3xl overflow-hidden aspect-[4/3] block bg-muted shadow-md hover:shadow-xl transition-all">
                  <img src={item.img} alt={item.stream} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {item.stream}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-secondary text-xs font-semibold tracking-wide">
                      {item.tagline}
                    </p>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white mt-1 leading-snug group-hover:text-secondary/90 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </AnimeReveal>
            ))}
          </div>

          {/* In The Media 3 Top Features */}
          <div className="p-8 rounded-3xl bg-card border border-border mb-16">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/60">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-1">
                  PRESS COVERAGE
                </span>
                <h3 className="text-2xl font-display font-bold text-primary">
                  In The Media
                </h3>
              </div>
              <Link to="/media" className="text-xs font-bold uppercase tracking-wider text-secondary hover:underline flex items-center gap-1">
                View More Coverage <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pressCoverageItems.map((item, idx) => (
                <div
                  key={item.headline}
                  onClick={() => openLightbox(pressCoverageItems, idx)}
                  className="rounded-2xl bg-background border border-border/70 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer hover:-translate-y-1"
                >
                  {/* Newspaper Clipping Image Header with Zoom Hover */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF7F2] dark:bg-card/60 border-b border-border/60 p-2 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="px-3.5 py-1.5 rounded-full bg-white text-primary text-xs font-bold flex items-center gap-1.5 shadow-lg transform translate-y-1 group-hover:translate-y-0 transition-transform">
                        <ZoomIn size={14} />
                        <span>Click to Expand</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-accent block">
                          {item.publication}
                        </span>
                        {item.date && (
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {item.date}
                          </span>
                        )}
                      </div>
                      <h4 className="font-display font-bold text-base text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                        {item.headline}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-bold text-secondary group-hover:text-accent transition-colors">
                      <span className="inline-flex items-center gap-1.5">
                        <Eye size={13} /> View Full Clipping
                      </span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Partners & Recognition Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Our Partners */}
            <div className="p-8 rounded-3xl bg-card border border-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-1">
                  STRATEGIC NETWORK
                </span>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  Our Partners
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  NABARD &nbsp;|&nbsp; IndianOil &nbsp;|&nbsp; PMKVY &nbsp;|&nbsp; Government of Uttar Pradesh &nbsp;|&nbsp; Skill India &nbsp;|&nbsp; G20 India 2023
                </p>
              </div>
              <div>
                <Link to="/get-involved" className="btn-3d-accent inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider">
                  Partner With Us <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="p-8 rounded-3xl bg-card border border-border flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-1">
                  ACCOLADES &amp; HONOURS
                </span>
                <h3 className="text-2xl font-display font-bold text-primary mb-3">
                  Awards &amp; Recognition
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  Honoured for our efforts in skill development, heritage preservation and community empowerment across Mathura and Braj.
                </p>
              </div>
              <div>
                <Link to="/media" className="btn-3d-accent inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider">
                  See All Recognition <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-10 mt-10 border-t border-border/50">
            <p className="font-handwriting text-2xl text-secondary italic">
              Real People · Real Impact · A Brighter Tomorrow
            </p>
            <p className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase mt-1">
              MATHURA · BRAJ · PEOPLE · HERITAGE · OPPORTUNITY
            </p>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCREEN 8 — GET INVOLVED / STAY CONNECTED
         ══════════════════════════════════════════════════════════════════════════════════ */}
      {/* Get Involved */}
      <section id="get-involved" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EAE2D5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Section: 3-Column Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative">
            
            {/* Left: Typography & Mission Statement (5 cols) */}
            <AnimeReveal variant="fade-up" className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                  GET INVOLVED
                </span>
                <span className="w-12 h-[1px] bg-[#D8C7B0] inline-block" />
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-display font-bold text-[#142033] leading-[1.08] tracking-tight mb-5">
                Be part of
                <br />
                <span className="font-handwriting text-5xl sm:text-6xl lg:text-[68px] text-[#B86E45] font-normal italic tracking-normal block my-1">
                  a brighter
                </span>
                tomorrow.
              </h2>

              <p className="text-sm sm:text-[15px] text-[#55606E] font-sans leading-relaxed max-w-md mb-6">
                Communities grow stronger when people come together. There are many ways you can support Khajani’s work and help create lasting change in Mathura and Braj.
              </p>

              <div className="flex items-center gap-3">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#7A7165]">
                  TOGETHER WE CREATE OPPORTUNITIES
                </span>
                <span className="w-12 h-[1px] bg-[#D8C7B0] inline-block" />
              </div>
            </AnimeReveal>

            {/* Center: Pinned Artisan Embroidery Photo with Deckle/Torn Paper Border (4 cols) */}
            <AnimeReveal variant="fade-up" delay={100} className="lg:col-span-4 flex justify-center items-center">
              <div className="relative group transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/images/get-involved/involvement-hero-embroidery.jpg"
                  alt="Khajani artisan embroidering Mathura Zari Poshak"
                  className="w-[230px] sm:w-[260px] md:w-[280px] h-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.12)] select-none"
                />
              </div>
            </AnimeReveal>

            {/* Right: Pinned Parchment Note Card with Quote & Botanical Art (3 cols) */}
            <AnimeReveal variant="fade-up" delay={200} className="lg:col-span-3 relative">
              
              {/* Botanical Lotus Line Art at Top Right */}
              <svg
                className="absolute -top-12 -right-4 w-40 sm:w-48 h-auto text-[#C4A480]/50 pointer-events-none select-none z-0 hidden sm:block"
                viewBox="0 0 160 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                {/* Center bud petal */}
                <path d="M80 30 C75 55, 75 75, 80 90 C85 75, 85 55, 80 30 Z" />
                {/* Inner petals */}
                <path d="M78 40 C62 55, 55 75, 74 92 C77 82, 78 60, 78 40 Z" />
                <path d="M82 40 C98 55, 105 75, 86 92 C83 82, 82 60, 82 40 Z" />
                {/* Outer petals */}
                <path d="M70 52 C45 68, 42 90, 68 98 C72 88, 70 70, 70 52 Z" />
                <path d="M90 52 C115 68, 118 90, 92 98 C88 88, 90 70, 90 52 Z" />
                {/* Base curve */}
                <path d="M60 75 C35 90, 40 108, 65 106" />
                <path d="M100 75 C125 90, 120 108, 95 106" />
                {/* Stem and leaf branches */}
                <path d="M80 106 C80 135, 95 160, 115 185" strokeWidth="1.5" />
                <path d="M90 135 C115 125, 140 140, 150 160 C135 165, 110 160, 93 140" />
                <path d="M83 118 C70 125, 60 135, 55 150 C65 150, 75 140, 84 125" />
              </svg>

              {/* Panoramic Mathura River Ghat Sketch spanning behind right side */}
              <img
                src="/images/projects/mathura-ghat-panoramic.png"
                alt=""
                className="absolute -right-8 -bottom-10 w-64 sm:w-72 h-auto object-contain opacity-40 pointer-events-none select-none z-0 hidden lg:block"
              />

              {/* Pinned Parchment Note Card */}
              <div className="relative z-10 bg-[#F4EFE6] border border-[#E8E1D4] shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-6 sm:p-7 rounded-xs transform rotate-[1.5deg] hover:rotate-0 transition-transform duration-300 max-w-[270px] mx-auto lg:ml-auto lg:mr-0">
                <span className="font-serif text-3xl text-[#142033] leading-none select-none block -mb-1">
                  “
                </span>
                <p className="font-serif italic text-lg sm:text-xl text-[#142033] leading-tight pl-2 mb-4">
                  Stronger
                  <br />
                  communities
                  <br />
                  brighter
                  <br />
                  tomorrows.
                  <span className="font-serif text-2xl select-none inline-block ml-1">”</span>
                </p>
                <div className="w-7 h-[2px] bg-[#B86E45] mb-4 ml-2" />
                <p className="text-[9px] font-sans tracking-[0.22em] text-[#7A7165] uppercase leading-relaxed ml-2 font-bold">
                  MATHURA · BRAJ · PEOPLE
                  <br />
                  OPPORTUNITY
                </p>
              </div>

            </AnimeReveal>

          </div>

          {/* 4 Action Pathway Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 mt-16 pt-12 border-t border-[#E8E1D5]">
            
            {/* 1. Donate */}
            <AnimeReveal variant="fade-up" delay={0}>
              <div className="flex flex-col justify-between h-full pr-0 lg:pr-8 border-b sm:border-b-0 lg:border-r border-[#E8E1D5] pb-8 lg:pb-0">
                <div>
                  <div className="h-24 mb-4 flex items-center">
                    <img
                      src="/images/get-involved/involvement-donate.jpg"
                      alt="Donate"
                      className="h-20 w-auto object-contain select-none"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#142033] mb-2">
                    Donate
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#636E7B] leading-relaxed mb-6 min-h-[42px]">
                    Support our programmes and help us reach more women and communities.
                  </p>
                </div>
                <div>
                  <Link
                    to="/donate"
                    className="text-[#A9442A] hover:text-[#88351F] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors group"
                  >
                    DONATE NOW <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </AnimeReveal>

            {/* 2. Volunteer */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="flex flex-col justify-between h-full px-0 lg:px-8 border-b sm:border-b-0 lg:border-r border-[#E8E1D5] pb-8 lg:pb-0">
                <div>
                  <div className="h-24 mb-4 flex items-center">
                    <img
                      src="/images/get-involved/involvement-volunteer.jpg"
                      alt="Volunteer"
                      className="h-20 w-auto object-contain select-none"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#142033] mb-2">
                    Volunteer
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#636E7B] leading-relaxed mb-6 min-h-[42px]">
                    Share your time, skills and ideas to make a real difference.
                  </p>
                </div>
                <div>
                  <Link
                    to="/volunteer"
                    className="text-[#A9442A] hover:text-[#88351F] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors group"
                  >
                    JOIN US <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </AnimeReveal>

            {/* 3. Partner with Us */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="flex flex-col justify-between h-full px-0 lg:px-8 border-b sm:border-b-0 lg:border-r border-[#E8E1D5] pb-8 lg:pb-0">
                <div>
                  <div className="h-24 mb-4 flex items-center">
                    <img
                      src="/images/get-involved/involvement-partner.jpg"
                      alt="Partner with Us"
                      className="h-20 w-auto object-contain select-none"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#142033] mb-2">
                    Partner with Us
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#636E7B] leading-relaxed mb-6 min-h-[42px]">
                    Collaborate through CSR, institutional partnerships or project support.
                  </p>
                </div>
                <div>
                  <Link
                    to="/get-involved"
                    className="text-[#A9442A] hover:text-[#88351F] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors group"
                  >
                    PARTNER WITH US <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </AnimeReveal>

            {/* 4. Support Our Artisans */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="flex flex-col justify-between h-full pl-0 lg:pl-8 pb-4 lg:pb-0">
                <div>
                  <div className="h-24 mb-4 flex items-center">
                    <img
                      src="/images/get-involved/involvement-artisan.jpg"
                      alt="Support Our Artisans"
                      className="h-20 w-auto object-contain select-none"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#142033] mb-2">
                    Support Our Artisans
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#636E7B] leading-relaxed mb-6 min-h-[42px]">
                    Help us create market linkages and sustainable livelihoods for traditional craftspeople.
                  </p>
                </div>
                <div>
                  <Link
                    to="/projects/mathura-zari-poshak"
                    className="text-[#A9442A] hover:text-[#88351F] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 transition-colors group"
                  >
                    KNOW MORE <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            </AnimeReveal>

          </div>

          {/* Bottom Footer Bar: People · Heritage · Opportunity & Emblem */}
          <div className="mt-16 pt-8 border-t border-[#E8E1D5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#BA9773] italic select-none">
              People · Heritage · Opportunity
            </span>
            <div className="hidden sm:block flex-1 h-[1px] bg-[#E2D8C7] mx-6" />
            <div className="flex items-center gap-3">
              {/* Floral Rosette Emblem */}
              <svg className="w-5 h-5 text-[#BA9773] select-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="2.5" />
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.25em] text-[#7A7165] uppercase font-semibold">
                KHAJANI <span className="mx-2 text-[#C4B7A5]">―</span> MATHURA · BRAJ
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Stay Connected */}
      <section id="stay-connected" className="bg-primary text-primary-foreground py-24 relative overflow-hidden border-t border-white/10">
        <AuroraBackground variant="dark" intensity={1.1} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimeReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-secondary border border-white/10 shadow-sm">
              <Mail size={13} />
              Stay Connected
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Get updates on our work
            </h2>
            <p className="text-primary-foreground/80 text-base sm:text-lg mb-10 font-light max-w-xl mx-auto leading-relaxed">
              Sign up to receive stories, updates and opportunities to support Khajani.
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <input
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-5 py-3.5 bg-transparent text-white placeholder:text-white/50 text-sm outline-none rounded-xl"
                />
                <button
                  type="submit"
                  className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap shrink-0"
                >
                  {subscribed ? "Subscribed!" : "Subscribe →"}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-secondary mt-3 animate-fade-in font-medium flex items-center justify-center gap-1.5">
                  <CheckCircle2 size={14} />
                  Thank you for subscribing! You will receive our next community update.
                </p>
              )}
            </form>

            <p className="text-xs font-mono tracking-widest text-primary-foreground/60 uppercase">
              Same Roots · Stronger People · Brighter Tomorrows
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* Lightbox for Press Clippings & Media */}
      <MediaLightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </Layout>
  );
};

export default HomePage;
