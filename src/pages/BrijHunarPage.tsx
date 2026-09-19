import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { MediaLightbox, MediaItem } from "@/components/MediaLightbox";
import { useAnimeCounter } from "@/hooks/use-anime-counter";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Scissors,
  Laptop,
  HeartHandshake,
  Building,
  Palette,
  MessageSquare,
  Search,
  BookOpen,
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle2,
  Users,
  Compass,
  Phone,
  Handshake,
  ZoomIn,
  Eye,
  Layers,
  GraduationCap
} from "lucide-react";

/* ─── Animated Stat Counter for Section 6 Reach ─── */
function ReachCounter({
  target = 22000,
  suffix = "+",
}: {
  target?: number;
  suffix?: string;
}) {
  const { ref, displayed } = useAnimeCounter({
    target,
    duration: 2500,
    suffix,
  });

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-primary tabular-nums tracking-tight block text-center"
    >
      {displayed}
    </span>
  );
}

const BrijHunarPage = () => {
  // Lightbox state for Brij-Hunar in pictures
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryPhotos: MediaItem[] = [
    {
      image: "/images/projects/upsdm-tailor.jpg",
      title: "Apparel & Fashion Construction",
      desc: "Practical garment making and tailoring training on modern industrial sewing machines.",
    },
    {
      image: "/images/about/computer-lab.jpg",
      title: "Computer & Digital Literacy Lab",
      desc: "Hands-on computing, workplace software, and internet literacy for girls.",
    },
    {
      image: "/images/about/apparel-beauty-lab.jpg",
      title: "Beauty & Wellness Training Center",
      desc: "Professional cosmetology and beauty wellness salon techniques for self-employment.",
    },
    {
      image: "/images/projects/brij-hunar-training.jpg",
      title: "Hands-on Practical Training Session",
      desc: "One-on-one mentorship by certified master trainers in Mathura.",
    },
    {
      image: "/images/about/classroom.jpg",
      title: "Interactive Classroom Learning",
      desc: "Structured classroom curriculum combining theory with practical application.",
    },
    {
      image: "/images/about/team-working.jpg",
      title: "Participant Artisan Work & Finishing",
      desc: "Trainees producing finished apparel, crafts, and market-ready products.",
    },
  ];

  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 1 — HERO
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <header className="relative overflow-hidden bg-card pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-border">
        <AuroraBackground variant="light" intensity={1.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#A32A29] text-xs font-bold tracking-[0.25em] uppercase font-mono">
                  KHAJANI WELFARE SOCIETY · LONG-TERM SKILL PROGRAMME
                </span>
                <span className="h-px w-8 bg-[#A32A29]/30" />
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.08]">
                  BRIJ-HUNAR
                </h1>
                <p className="text-xl sm:text-2xl font-serif italic text-secondary mt-2">
                  Long-term skill training for women and girls
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl border-l-4 border-secondary/50 pl-5">
                <p>
                  Brij-Hunar is Khajani Welfare Society’s long-term skill development programme. It provides structured vocational training that helps women and girls learn practical skills for employment, self-employment and income generation.
                </p>
                <p>
                  The programme combines vocational skills with digital literacy, communication and life skills. Longer-duration training carried out through relevant government skill-development programmes and institutional collaborations also forms part of Brij-Hunar.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#what-participants-learn"
                  className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Explore What They Learn</span>
                  <ArrowDown size={14} />
                </a>
                <Link
                  to="/contact"
                  className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Contact Khajani</span>
                </Link>
                <Link
                  to="/partnership-inquiry"
                  className="text-xs font-bold uppercase tracking-wider text-secondary hover:text-accent inline-flex items-center gap-1.5 transition-colors ml-1"
                >
                  <span>Partner With Us</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </AnimeReveal>

            {/* Right Hero Image Card */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5 relative">
              <TiltCard maxTilt={6}>
                <div
                  className="aspect-[4/3.8] rounded-3xl overflow-hidden relative shadow-2xl border border-border/80 bg-muted group"
                  style={{
                    boxShadow: "0 20px 48px -12px rgba(27,46,107,0.18)",
                  }}
                >
                  <img
                    src="/images/projects/brij-hunar-training.jpg"
                    alt="Women in hands-on practical vocational training session in Mathura"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary block mb-1">
                      PRACTICAL VOCATIONAL MASTERY
                    </span>
                    <h4 className="text-lg font-display font-bold leading-snug">
                      Equipping women with certified skills for dignity and sustainable livelihoods
                    </h4>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 2 — WHAT PARTICIPANTS LEARN (Skills That Can Lead to Work and Income)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="what-participants-learn" className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              SKILLS THAT CAN LEAD TO WORK AND INCOME
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              What participants learn
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 font-light leading-relaxed">
              Brij-Hunar focuses on practical learning that participants can use beyond the classroom.
            </p>
          </AnimeReveal>

          {/* 6 What Participants Learn Domain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Apparel & Fashion",
                desc: "Practical skills related to apparel, garment making and fashion.",
                icon: Scissors,
                iconBg: "bg-[#FDF0ED] text-[#D35F4C]",
                tag: "Garment Making",
              },
              {
                title: "Computer & Digital Skills",
                desc: "Computer skills and digital literacy for everyday and workplace use.",
                icon: Laptop,
                iconBg: "bg-[#EDF4FC] text-[#3D82D0]",
                tag: "Digital Literacy",
              },
              {
                title: "Beauty & Wellness",
                desc: "Practical skills for work and self-employment in beauty and wellness.",
                icon: HeartHandshake,
                iconBg: "bg-[#FAF3E6] text-[#B88732]",
                tag: "Cosmetology",
              },
              {
                title: "Office Skills",
                desc: "Skills that can support office-based work.",
                icon: Building,
                iconBg: "bg-[#EDF7F0] text-[#439962]",
                tag: "Workplace Readiness",
              },
              {
                title: "Art & Craft",
                desc: "Creative and practical skills that can also support home-based earning.",
                icon: Palette,
                iconBg: "bg-[#FDF0F0] text-[#D45E5E]",
                tag: "Creative Crafts",
              },
              {
                title: "Communication & Life Skills",
                desc: "Communication, confidence and everyday skills that help participants prepare for work and greater independence.",
                icon: MessageSquare,
                iconBg: "bg-[#EFF1FB] text-[#4A64CF]",
                tag: "Confidence & Growth",
              },
            ].map((skill, idx) => (
              <AnimeReveal key={skill.title} variant="fade-up" delay={idx * 70}>
                <div className="clay-card rounded-3xl p-7 border border-border/80 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1 bg-card">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${skill.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                        <skill.icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {skill.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-primary mb-2 group-hover:text-secondary transition-colors">
                      {skill.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {skill.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/50 flex items-center text-xs font-semibold text-secondary">
                    <span>Applied Vocational Learning</span>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 3 — HOW BRIJ-HUNAR WORKS (A simple path from training to opportunity)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border scroll-mt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              HOW BRIJ-HUNAR WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              A simple path from training to opportunity
            </h2>
          </AnimeReveal>

          {/* 4 Steps Timeline Pathway */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                step: "01",
                label: "FIND & CONNECT",
                desc: "Women and girls who can benefit from skill training are connected with suitable training opportunities.",
                icon: Search,
              },
              {
                step: "02",
                label: "TRAIN",
                desc: "Participants receive structured and practical training in the selected skill.",
                icon: BookOpen,
              },
              {
                step: "03",
                label: "CONNECT TO WORK",
                desc: "Where applicable, participants are supported towards employment, self-employment or other livelihood opportunities.",
                icon: Briefcase,
              },
              {
                step: "04",
                label: "CONTINUE SUPPORT",
                desc: "Guidance and post-training support help participants take the next step after completing their training.",
                icon: TrendingUp,
              },
            ].map((st, i) => (
              <AnimeReveal key={st.step} variant="fade-up" delay={i * 80} className="h-full">
                <div className="p-7 rounded-3xl bg-background border border-border/80 flex flex-col justify-between h-full hover:border-secondary/60 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display font-black text-3xl sm:text-4xl text-secondary/40 group-hover:text-secondary transition-colors">
                        {st.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                        <st.icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-2 font-mono">
                      {st.label}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/40">
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Stage {st.step} of 04
                    </span>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          {/* Model Citation Banner */}
          <AnimeReveal variant="fade-up" delay={200}>
            <div className="p-6 sm:p-8 rounded-3xl bg-primary text-primary-foreground border border-white/10 shadow-lg text-center max-w-4xl mx-auto">
              <p className="text-sm sm:text-base font-serif italic text-primary-foreground/90 leading-relaxed">
                &ldquo;This reflects Khajani’s documented model of mobilisation &rarr; training &rarr; placement &rarr; post-placement support.&rdquo;
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 4 — MORE THAN TECHNICAL TRAINING (Skills for work. Confidence for everyday life.)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-6">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block font-mono">
                MORE THAN TECHNICAL TRAINING
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                Skills for work.
                <br />
                <span className="font-serif italic text-secondary font-normal">
                  Confidence for everyday life.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                Learning a technical skill is only one part of Brij-Hunar. Training can also include:
              </p>

              {/* Badges of Holistic Skills */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  "Basic English",
                  "Digital Literacy",
                  "Communication",
                  "Life Skills",
                  "Personal Development",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-card border border-border/80 text-primary text-xs sm:text-sm font-semibold shadow-xs hover:border-secondary/60 transition-colors"
                  >
                    <CheckCircle2 size={15} className="text-secondary" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-muted/60 border border-border/60 text-sm sm:text-base text-foreground/90 font-serif italic leading-relaxed mt-4">
                &ldquo;These skills help participants become more confident in using what they have learned in work and everyday situations.&rdquo;
              </div>
            </AnimeReveal>

            {/* Right Photo */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
              <div className="aspect-[4/3.4] rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                <img
                  src="/images/about/hero-women-training.jpg"
                  alt="Young women building confidence in skill classes"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 5 — WHERE THE TRAINING CAN LEAD (From Learning to Earning)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              WHERE THE TRAINING CAN LEAD
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              From learning to earning
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 font-light leading-relaxed">
              The aim is simple: help participants turn practical skills into opportunities to earn and become more independent.
            </p>
          </AnimeReveal>

          {/* 3 Pathway Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Employment",
                tagline: "Workforce Integration",
                desc: "Using vocational skills to seek suitable work.",
                icon: Briefcase,
                bg: "bg-background",
              },
              {
                title: "Self-Employment",
                tagline: "Independent Practice",
                desc: "Using learned skills to earn independently or from home.",
                icon: Compass,
                bg: "bg-background",
              },
              {
                title: "Small Enterprise",
                tagline: "Micro-Business Growth",
                desc: "Developing a skill into a small livelihood activity or business.",
                icon: TrendingUp,
                bg: "bg-background",
              },
            ].map((pathway, idx) => (
              <AnimeReveal key={pathway.title} variant="fade-up" delay={idx * 100}>
                <div className={`p-8 rounded-3xl ${pathway.bg} border border-border/80 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1`}>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/15 group-hover:text-secondary transition-colors">
                      <pathway.icon size={24} />
                    </div>

                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-1">
                      {pathway.tagline}
                    </span>

                    <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:text-secondary transition-colors">
                      {pathway.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {pathway.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-bold text-primary group-hover:text-secondary transition-colors">
                    <span>Livelihood Pathway</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          {/* Simple Takeaway Quote */}
          <div className="text-center pt-2">
            <p className="font-handwriting text-2xl sm:text-3xl text-secondary italic">
              From practical skills to independent lives.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 6 — OUR REACH (22,000+ candidates trained/reached)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase block mb-3 font-mono">
              OUR REACH
            </span>

            {/* Metric Counter */}
            <div className="my-6">
              <ReachCounter target={22000} suffix="+" />
              <p className="text-xl sm:text-2xl font-serif italic text-secondary mt-2">
                candidates trained/reached
              </p>
            </div>

            <div className="h-0.5 w-16 bg-secondary/50 rounded-full mx-auto my-6" />

            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              The master project document records 22,000+ candidates trained/reached in connection with Brij-Hunar.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 7 — BRIJ-HUNAR IN PICTURES (Genuine Khajani Photographs)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 pb-4 border-b border-border">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                VISUAL ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
                Brij-Hunar in pictures
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2 font-light max-w-2xl">
                Genuine Khajani photographs showing apparel and fashion, computer training, beauty and wellness, practical training, classroom learning and participant work.
              </p>
            </AnimeReveal>

            <span className="text-xs font-mono text-muted-foreground mt-3 md:mt-0">
              Click any photograph to view
            </span>
          </div>

          {/* Genuine Khajani Photographs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((item, idx) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={idx * 60}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="rounded-2xl overflow-hidden bg-background border border-border/80 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
                        <Eye size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base text-primary mb-1 group-hover:text-secondary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-secondary">
                      <span className="inline-flex items-center gap-1">
                        <ZoomIn size={13} /> View Photo
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 8 — RELATED WORK
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-2xl mb-10">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1 font-mono">
              CONTINUE EXPLORING
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
              Related Work
            </h2>
            <p className="text-sm text-muted-foreground font-light mt-1">
              Looking for shorter, focused skill programmes?
            </p>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimeReveal variant="fade-up" delay={50}>
              <Link
                to="/our-work"
                className="p-8 rounded-3xl bg-card border border-border hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                    FOCUSED SKILL CAMPS &amp; SHORT COURSES
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                    Explore Brij-Nipun
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Khajani’s shorter-duration skill and learning initiatives, workshops and practical camps tailored for quick capability enhancement.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors">
                  <span>Explore Brij-Nipun</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={100}>
              <Link
                to="/our-work"
                className="p-8 rounded-3xl bg-card border border-border hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                    ALL PROGRAMMES &amp; INITIATIVES
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                    See All Our Work
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    From long-term skill training and digital literacy to traditional craft revival, health initiatives and community service across Braj.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors">
                  <span>See All Our Work</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 9 — INTERESTED IN SKILL TRAINING OR WORKING WITH KHAJANI?
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.1} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-secondary border border-white/10 shadow-sm font-mono">
              <Sparkles size={13} />
              GET IN TOUCH
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              Interested in skill training or working with Khajani?
            </h2>

            <p className="text-primary-foreground/80 text-base sm:text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Whether you want to know more about training opportunities or explore a partnership, we would be happy to hear from you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-3d-accent px-8 py-4 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                <span>Contact Khajani</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/partnership-inquiry"
                className="btn-3d-outline px-8 py-4 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white/20"
              >
                <span>Partner With Us</span>
              </Link>
            </div>

            <p className="text-xs font-mono tracking-widest text-primary-foreground/60 uppercase mt-10">
              People · Skills · Heritage · Opportunity
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* Lightbox Component for Pictures */}
      <MediaLightbox
        items={galleryPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </Layout>
  );
};

export default BrijHunarPage;
