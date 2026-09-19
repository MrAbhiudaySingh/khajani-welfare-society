import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { MediaLightbox, MediaItem } from "@/components/MediaLightbox";
import { useAnimeCounter } from "@/hooks/use-anime-counter";
import {
  Sparkles,
  Award,
  Scissors,
  ArrowRight,
  ArrowDown,
  Palette,
  Layers,
  Eye,
  ZoomIn,
  BookOpen,
  TrendingUp,
  HeartHandshake,
  Users,
  Compass,
  CheckCircle2,
  Brush,
  Feather,
  Flower2,
  Scroll,
  Shirt,
  Home,
  Package,
  Leaf,
  GraduationCap,
  Building2,
  Mail,
  Handshake,
  MapPin,
  Calendar,
  FileText,
  Clock,
} from "lucide-react";

/* ─── Animated Stat Counter ─── */
function StatCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const { ref, displayed } = useAnimeCounter({
    target,
    duration: 2000,
    suffix,
  });

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className="font-display font-bold text-5xl sm:text-6xl text-amber-400 tabular-nums tracking-tight block text-center drop-shadow-sm"
    >
      {displayed}
    </span>
  );
}

const RadhaKrishnaPoshakPage = () => {
  // SEO Metadata
  useEffect(() => {
    document.title = "Mathura Zari Poshak | GI Registered Traditional Craft | Khajani Welfare Society";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Discover Mathura Zari Poshak, the GI-registered traditional craft of Mathura, and Khajani Welfare Society's work in artisan training, skill development and craft livelihoods."
      );
    }
  }, []);

  // Lightbox state for Gallery
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Genuine Khajani Poshak & Artisan Imagery
  const galleryPhotos: MediaItem[] = [
    {
      image: "/images/projects/poshak-zari.jpg",
      title: "Master Mathura Zari Needlework",
      desc: "Detailed close-up of real metallic thread, salma-sitara, and bead embroidery on sacred sanctum Poshak.",
    },
    {
      image: "/images/projects/pathway-heritage-artisan.jpg",
      title: "Artisans at Work in Vrindavan",
      desc: "Trained women craftspeople executing traditional embellishment and needlework stitch by stitch.",
    },
    {
      image: "/images/projects/poshak-sanjhi.jpg",
      title: "Traditional Motifs & Embellishment",
      desc: "Sacred Braj iconography and floral border ornamentation integrated into deity attire panels.",
    },
    {
      image: "/images/projects/brij-hunar-tailoring.jpg",
      title: "Fabric Sizing & Materials Selection",
      desc: "Selecting, sizing, and cutting pure raw silks, velvets, and brocades for canonical temple vestments.",
    },
    {
      image: "/images/projects/brij-hunar-class.jpg",
      title: "Artisan Training Workshop Session",
      desc: "Master trainers demonstrating geometric component cutting and assembly during the 30-day initiative.",
    },
    {
      image: "/images/projects/brij-hunar-sewing-hall.jpg",
      title: "Specialized Assembly & Sewing",
      desc: "Reinforced micro-stitching and lining techniques required to securely hold heavy gold zari ornamentation.",
    },
    {
      image: "/images/projects/mathura-zari-poshak-gi-logo.jpg",
      title: "Official GI Certified Craft Identity",
      desc: "Geographical Indication registered under Application No. 1147 with Khajani as Registered Proprietor.",
    },
    {
      image: "/images/projects/hero-training.jpg",
      title: "Women Artisan Collective",
      desc: "Artisans building sustained economic self-reliance through traditional deity attire craftsmanship.",
    },
  ];

  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-primary py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden min-h-[80vh] flex items-center">
        <AuroraBackground variant="dark" intensity={0.8} />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Title, Subtitle, Badges & CTAs */}
            <AnimeReveal variant="fade-right" className="lg:col-span-7 flex flex-col gap-6">
              {/* Eyebrow */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase text-xs px-4 py-1.5 glass-dark rounded-full border border-accent/20">
                  <Award size={12} className="text-secondary" /> MATHURA ZARI POSHAK
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-white/60">
                  GI Application No. 1147
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-primary-foreground">
                The traditional dress-making craft of{" "}
                <span className="text-secondary italic font-serif font-normal">Mathura</span>
              </h1>

              {/* Lead Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-primary-foreground/85 leading-relaxed font-light max-w-2xl">
                <p>
                  Mathura Zari Poshak is a traditional craft associated with the making and decoration of Poshak for deities, deeply connected with the devotional culture and skilled craftsmanship of Mathura and Braj.
                </p>
                <p>
                  Khajani Welfare Society works with artisans to strengthen this traditional skill through training, design development and opportunities that help the craft remain in practice.
                </p>
              </div>

              {/* 5 Pillars Strip */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-white/90">
                {[
                  "Braj Heritage",
                  "Traditional Craft",
                  "Artisan Skills",
                  "Livelihoods",
                  "GI Recognition",
                ].map((pillar, idx) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 shadow-xs"
                  >
                    {pillar}
                    {idx < 4 && <span className="ml-2 text-secondary/60">·</span>}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#what-is-mathura-poshak"
                  className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <span>Explore the Craft</span>
                  <ArrowDown size={14} />
                </a>
                <Link
                  to="/gi-recognition"
                  className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
                >
                  <span>GI Recognition</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/contact"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-white/80 hover:text-secondary transition-colors underline-offset-4 hover:underline py-2"
                >
                  Contact Khajani →
                </Link>
              </div>
            </AnimeReveal>

            {/* Right Column: Hero Visual Showcase */}
            <AnimeReveal variant="fade-left" delay={200} className="lg:col-span-5">
              <TiltCard maxTilt={8}>
                <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group bg-primary/40">
                  <img
                    src="/images/projects/poshak-zari.jpg"
                    alt="Authentic Mathura Zari Poshak Craftsmanship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-5 right-5 glass px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-primary shadow-md">
                    Mathura &amp; Vrindavan
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl border border-white/25">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider block mb-1">
                      GI Registered Heritage
                    </span>
                    <p className="text-white text-sm font-serif italic leading-snug">
                      “Devotional needlework crafted stitch by stitch with real metallic zari and gota embellishments.”
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/80">
                      <span>125 Artisans Trained</span>
                      <span className="text-secondary">Classes 25 &amp; 26</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 2 — WHAT IS MATHURA ZARI POSHAK?
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="what-is-mathura-poshak" className="py-24 bg-card border-b border-border scroll-mt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <AnimeReveal variant="fade-up" className="lg:col-span-8">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                TRADITION &amp; ROOTS
              </span>
              <h2 className="text-sm sm:text-base font-mono font-semibold uppercase tracking-wider text-[#C48332] mb-1">
                What is Mathura Zari Poshak?
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Craft shaped by devotion and skilled hands
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed mt-4 max-w-3xl">
                Mathura Zari Poshak brings together several specialised skills involved in creating decorative Poshak. Each stage depends on skill, precision and an understanding of the traditional forms in which these garments are made. The craft is closely connected with Mathura and Vrindavan's devotional traditions and with the artisans who have carried this knowledge forward.
              </p>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-6 rounded-2xl bg-[#FDF8F3] border border-[#F3E5D5] max-w-sm shadow-xs">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C48332] block mb-2">
                  THE SACRED CONNECTION
                </span>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-serif italic">
                  Crafted specifically for the sanctum sanctorum adornment of Radha-Krishna and temple deities across Braj and devotional centers worldwide.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* The 7 Process Stages Strip */}
          <AnimeReveal variant="fade-up" delay={200}>
            <div className="p-6 rounded-3xl bg-background border border-border/80 shadow-xs">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
                THE 7 PROCESS STAGES OF MAKING
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {[
                  { step: "01", name: "Design", icon: Palette },
                  { step: "02", name: "Fabric Prep", icon: Layers },
                  { step: "03", name: "Cutting", icon: Scissors },
                  { step: "04", name: "Sewing", icon: Shirt },
                  { step: "05", name: "Zari Work", icon: Sparkles },
                  { step: "06", name: "Embellish", icon: Feather },
                  { step: "07", name: "Finishing", icon: CheckCircle2 },
                ].map((stage) => (
                  <div
                    key={stage.name}
                    className="p-4 rounded-xl bg-card border border-border/70 flex flex-col items-center text-center shadow-2xs hover:border-accent/30 transition-colors"
                  >
                    <span className="text-[10px] font-mono font-bold text-accent mb-1">{stage.step}</span>
                    <stage.icon size={18} className="text-muted-foreground mb-1.5" />
                    <span className="text-xs font-display font-bold text-primary">{stage.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 3 — FROM FABRIC TO FINISHED POSHAK
          Many skills come together in one craft (Visual Step Progression)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              THE MAKING PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              From fabric to finished Poshak
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-2 font-normal">
              Many skills come together in one craft
            </p>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mt-3">
              Every garment requires specialized disciplines performed by master artisans, from the initial geometric drafting to delicate needlework and final assembly.
            </p>
          </AnimeReveal>

          {/* 5 Stepped Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {[
              {
                step: "01",
                title: "DESIGN",
                desc: "Planning the form, colour, decorative pattern and overall appearance of the Poshak.",
                icon: Palette,
                tag: "Iconography",
                color: "text-[#D0704B] bg-[#FCECE0]",
              },
              {
                step: "02",
                title: "PREPARE",
                desc: "Selecting and preparing fabric and other materials required for making the garment.",
                icon: Layers,
                tag: "Silks & Velvets",
                color: "text-[#3B82C4] bg-[#E5F0FA]",
              },
              {
                step: "03",
                title: "CUT & STITCH",
                desc: "Cutting the different components and carefully sewing them into canonical shape.",
                icon: Scissors,
                tag: "Precision Tailoring",
                color: "text-[#4E9954] bg-[#E6F3E5]",
              },
              {
                step: "04",
                title: "DECORATE",
                desc: "Adding zari, decorative work and embellishments that give the Poshak its distinctive character.",
                icon: Sparkles,
                tag: "Zari & Gota",
                color: "text-[#C48332] bg-[#FDF8F3]",
              },
              {
                step: "05",
                title: "FINISH",
                desc: "Completing the detailed finishing work before the Poshak is ready for temple sanctum adornment.",
                icon: CheckCircle2,
                tag: "Final Inspection",
                color: "text-[#8B5CF6] bg-[#F3E8FF]",
              },
            ].map((stage, idx) => (
              <AnimeReveal key={stage.step} variant="fade-up" delay={idx * 90}>
                <div className="clay-card rounded-2xl p-6 h-full flex flex-col justify-between border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-lg transition-all group hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-3xl font-bold text-accent/80 group-hover:text-accent transition-colors">
                        {stage.step}
                      </span>
                      <div className={`w-10 h-10 rounded-xl ${stage.color} flex items-center justify-center`}>
                        <stage.icon size={18} />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                      {stage.tag}
                    </span>
                    <h3 className="font-display font-bold text-base text-primary mb-2.5 leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 4 — WORKING WITH THE ARTISANS
          Strengthening the skill behind the craft
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-6">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block font-mono">
                ARTISAN CENTRED
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Strengthening the skill behind the craft
              </h2>
              <div className="space-y-4 text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Khajani's work with Mathura Zari Poshak focuses on the people who practise the craft.
                </p>
                <p>
                  Training and skill-development initiatives help artisans strengthen their existing skills, improve finishing and explore design and market opportunities while continuing to work within the identity of the traditional craft.
                </p>
                <p className="text-foreground/90 font-medium font-serif italic text-base">
                  The emphasis remains firmly on artisans and their skills, honoring generations of specialized technique rather than treating heritage as a passive exhibit.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "Artisan Mentorship",
                  "Pattern Accuracy",
                  "Material Integrity",
                  "Fair Compensation",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-muted border border-border text-foreground/80"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
              <TiltCard maxTilt={8}>
                <div className="rounded-3xl overflow-hidden border border-border shadow-xl bg-background group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src="/images/projects/pathway-heritage-artisan.jpg"
                      alt="Women artisans practicing Mathura Zari Poshak"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent block mb-1">
                      Grassroots Artisan Network
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary mb-2">
                      Women Artisans at the Centre
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Enabling home-based craftspeople and workshop collectives to achieve financial independence and master artisan recognition.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 5 — 125 ARTISANS TRAINED (A 30-Day Training Milestone)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.7} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-secondary font-mono font-bold tracking-[0.2em] uppercase text-xs px-4 py-1.5 glass-dark rounded-full border border-secondary/30 mb-4">
              <Calendar size={12} /> DOCUMENTED MILESTONE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
              125 Artisans Trained
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 font-light mt-3">
              A documented 30-day training initiative in Mathura and Vrindavan worked with 125 artisans, providing focused training connected with Mathura Zari Poshak.
            </p>
          </AnimeReveal>

          {/* 3 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="glass-dark p-8 rounded-3xl border border-white/15 text-center flex flex-col items-center justify-center h-full">
                <StatCounter target={125} />
                <span className="text-secondary font-serif italic text-lg font-semibold mt-2 block">
                  Artisans Trained
                </span>
                <p className="text-xs text-primary-foreground/70 font-light mt-1">
                  Master artisan curriculum certified
                </p>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={200}>
              <div className="glass-dark p-8 rounded-3xl border border-white/15 text-center flex flex-col items-center justify-center h-full">
                <div className="font-display font-bold text-5xl sm:text-6xl text-white tracking-tight">
                  30 Days
                </div>
                <span className="text-secondary font-serif italic text-lg font-semibold mt-2 block">
                  Focused Skill Training
                </span>
                <p className="text-xs text-primary-foreground/70 font-light mt-1">
                  Intensive hands-on masterclasses
                </p>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={300}>
              <div className="glass-dark p-8 rounded-3xl border border-white/15 text-center flex flex-col items-center justify-center h-full">
                <div className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-snug">
                  Mathura &amp; Vrindavan
                </div>
                <span className="text-secondary font-serif italic text-lg font-semibold mt-2 block">
                  Home Region
                </span>
                <p className="text-xs text-primary-foreground/70 font-light mt-1">
                  Rooted in the craft's authentic geography
                </p>
              </div>
            </AnimeReveal>
          </div>

          <AnimeReveal variant="fade-up" delay={350} className="max-w-2xl mx-auto text-center">
            <p className="text-xs sm:text-sm font-mono text-primary-foreground/70">
              *These figures are approved in the website master and are verified by project training documentation.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 6 & 7 — A CRAFT WITH A RECOGNISED GEOGRAPHICAL IDENTITY
          GI Registered under Application No. 1147
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-b border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-6">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block font-mono">
                OFFICIAL RECOGNITION
              </span>
              <h2 className="text-sm sm:text-base font-mono font-semibold uppercase tracking-wider text-[#C48332] mb-1">
                A craft with a recognised geographical identity
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Mathura Zari Poshak is now GI registered
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                The registration formally recognizes the geographical identity and cultural heritage associated with Mathura Zari Poshak. The complete registration history, certificate, official logo and government record are showcased on our dedicated GI Recognition page.
              </p>

              {/* Official Registry Block */}
              <div className="rounded-2xl p-6 bg-background border border-border/80 shadow-xs space-y-3 font-mono text-xs sm:text-sm">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Geographical Indication:</span>
                  <span className="font-bold text-primary">Mathura Zari Poshak</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Application No.:</span>
                  <span className="font-bold text-accent">1147</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Registered Proprietor:</span>
                  <span className="font-bold text-primary">Khajani Welfare Society</span>
                </div>
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span className="text-muted-foreground">Classes:</span>
                  <span className="font-bold text-primary">25 &amp; 26</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-muted-foreground">Status:</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle2 size={14} /> Registered
                  </span>
                </div>
              </div>

              <div>
                <Link
                  to="/gi-recognition"
                  className="btn-3d-accent px-7 py-3 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>EXPLORE GI RECOGNITION</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </AnimeReveal>

            {/* What GI Recognition Means Here */}
            <AnimeReveal variant="fade-left" delay={200} className="lg:col-span-5">
              <div className="clay-card rounded-3xl p-8 border border-[#E0EDF7] bg-[#F4F8FC] space-y-5 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#E5F0FA] text-[#3B82C4] flex items-center justify-center">
                  <Award size={24} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3B82C4] block">
                  WHAT GI RECOGNITION MEANS HERE
                </span>
                <h4 className="font-display font-bold text-2xl text-primary leading-snug">
                  Recognition of the craft's connection with its place
                </h4>
                <p className="text-sm text-foreground/80 font-light leading-relaxed">
                  A Geographical Indication identifies a product whose identity, reputation or characteristics are connected with a particular geographical area.
                </p>
                <p className="text-sm text-foreground/80 font-light leading-relaxed">
                  For Mathura Zari Poshak, the GI recognition formally establishes its permanent connection with Mathura.
                </p>

                {/* Progression Flow */}
                <div className="pt-3 border-t border-[#D0E2F0]">
                  <div className="flex flex-wrap items-center justify-between gap-1 text-xs font-mono font-bold text-[#3B82C4]">
                    <span>CRAFT</span>
                    <span>→</span>
                    <span>PLACE</span>
                    <span>→</span>
                    <span>IDENTITY</span>
                    <span>→</span>
                    <span>RECOGNITION</span>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 8 — TAKING THE CRAFT FORWARD
          Preserve the skill. Strengthen the opportunity.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              SUSTAINABILITY &amp; LIVELIHOODS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              Taking the craft forward
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-2 font-normal">
              Preserve the skill. Strengthen the opportunity.
            </p>
            <div className="space-y-3 mt-4 text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
              <p>
                Keeping a traditional craft alive also means making it possible for artisans to continue practising it.
              </p>
              <p>
                The objective is not to change the identity of Mathura Zari Poshak, but to help the people practising it continue to develop their skills and opportunities.
              </p>
            </div>
          </AnimeReveal>

          {/* 6 Key Facets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Skill Development",
                desc: "Strengthening hand embroidery, needlework precision, and material knowledge across generations.",
                icon: Scissors,
              },
              {
                title: "Better Finishing",
                desc: "Refining edge seams, backing fabrics, and durable metallic thread anchors for longevity.",
                icon: CheckCircle2,
              },
              {
                title: "Design Exposure",
                desc: "Connecting traditional deity motifs with contemporary layout harmony and color palettes.",
                icon: Palette,
              },
              {
                title: "Artisan Livelihoods",
                desc: "Securing dignified economic compensation and steady work for women artisans and home makers.",
                icon: TrendingUp,
              },
              {
                title: "Market Opportunities",
                desc: "Establishing direct linkages between artisan groups and major temples, trusts, and patrons.",
                icon: Handshake,
              },
              {
                title: "Continuity of the Craft",
                desc: "Documenting and teaching canonical methods so the living knowledge is passed forward safely.",
                icon: Award,
              },
            ].map((facet, idx) => (
              <AnimeReveal key={facet.title} variant="fade-up" delay={idx * 70}>
                <div className="rounded-2xl p-6 bg-card border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <facet.icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary mb-2">
                      {facet.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {facet.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          {/* ══════════════════════════════════════════════════════════════════════════════
              SECTION 9 — LEARNING BEYOND MATHURA (Nathdwara Exposure Component)
             ══════════════════════════════════════════════════════════════════════════════ */}
          <AnimeReveal variant="fade-up">
            <div className="rounded-3xl p-8 sm:p-10 bg-[#FDF8F3] border border-[#F3E5D5] shadow-xs relative overflow-hidden">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/25">
                  PROGRAMME · EXPOSURE INITIATIVE
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  Planned Craft Exchange
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3">
                Learning beyond Mathura: Exposure to other craft traditions
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 font-light leading-relaxed max-w-3xl mb-4">
                As part of the documented artisan-upskilling programme, a group of <strong>25 artisans</strong> is planned for an exposure visit to Nathdwara to observe specialised Poshak-making practices, sacred design approaches and regional craftsmanship.
              </p>
              <div className="p-4 rounded-xl bg-white/70 border border-[#EAE2D5] max-w-2xl text-xs text-muted-foreground leading-relaxed">
                <span className="font-bold text-primary block mb-0.5">Integrity Note:</span>
                This initiative is documented as an upcoming programme exposure component designed to expand artisan perspectives across iconic Vaishnava deity-making hubs.
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 10 — MATHURA ZARI POSHAK IN PICTURES (Visual Gallery with Lightbox)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <AnimeReveal variant="fade-up" className="max-w-2xl">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                VISUAL ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                Mathura Zari Poshak in pictures
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-1 font-normal">
                The craft, the process and the people behind it
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed mt-2">
                Click any photograph to inspect detailed zari embroidery, cutting stages, and artisan workshop sessions.
              </p>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150}>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Eye size={14} className="text-accent" />
                <span>{galleryPhotos.length} Documented Craft Photographs</span>
              </div>
            </AnimeReveal>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPhotos.map((photo, idx) => (
              <AnimeReveal key={photo.title} variant="fade-up" delay={idx * 70}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="rounded-2xl overflow-hidden bg-background border border-border/80 group cursor-pointer hover:border-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-xs font-mono font-medium flex items-center gap-1.5">
                        <ZoomIn size={14} className="text-secondary" /> Click to enlarge
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-sm text-primary mb-1.5 group-hover:text-accent transition-colors">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed line-clamp-2">
                        {photo.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 11 — ROOTED IN THE HERITAGE OF BRAJ (Cluster Interlinks)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              BRAJ HERITAGE CLUSTER
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              Rooted in the heritage of Braj
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mt-3">
              Mathura Zari Poshak is part of Khajani's wider work to keep the traditional knowledge and skills of Mathura and Braj in practice. Explore interconnected strands of our living heritage work:
            </p>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Link 1: Culture & Heritage */}
            <AnimeReveal variant="fade-up" delay={100}>
              <Link
                to="/culture"
                className="clay-card rounded-3xl p-8 flex flex-col justify-between h-full border border-border/80 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 block"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Flower2 size={24} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent block mb-2">
                    LIVING ROOTS
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                    Explore Culture &amp; Heritage
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    Discover how Khajani preserves sacred folklore, local craft idioms, community fairs, and the spiritual artistic traditions of Mathura.
                  </p>
                </div>
                <div className="pt-4 border-t border-border flex items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                  <span>Explore Culture &amp; Heritage</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>

            {/* Link 2: Royal Sanjhi Art */}
            <AnimeReveal variant="fade-up" delay={200}>
              <Link
                to="/projects/royal-sanjhi"
                className="clay-card rounded-3xl p-8 flex flex-col justify-between h-full border border-border/80 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 block"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF8F3] text-[#C48332] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-[#F3E5D5]">
                    <Sparkles size={24} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C48332] block mb-2">
                    SACRED STENCIL CRAFT
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                    Explore Royal Sanjhi Art
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    Learn how Khajani trains women and students in traditional Braj stencil paper-cutting, innovative fashion, and sustainable materials.
                  </p>
                </div>
                <div className="pt-4 border-t border-border flex items-center text-xs font-bold uppercase tracking-wider text-[#C48332] group-hover:text-primary transition-colors">
                  <span>Explore Royal Sanjhi Art</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 12 — INTERESTED IN THE CRAFT OR ARTISAN DEVELOPMENT?
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-primary text-primary-foreground relative overflow-hidden shadow-xl">
            <AuroraBackground variant="dark" intensity={0.5} />

            <div className="relative z-10 max-w-3xl">
              <span className="text-secondary text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3">
                ARTISAN COLLABORATION
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-snug mb-4">
                Interested in the craft or artisan development?
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/85 font-light leading-relaxed mb-8">
                Artisans, institutions, designers, cultural organisations and potential partners can connect with Khajani to learn more about training, artisan development and opportunities around Mathura Zari Poshak.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
                >
                  <Mail size={14} />
                  <span>CONTACT KHAJANI</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/get-involved"
                  className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
                >
                  <Handshake size={14} />
                  <span>WORK WITH US</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 13 — CLOSING
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimeReveal variant="fade-up">
            <h4 className="text-xl sm:text-2xl font-serif italic text-primary font-medium mb-2">
              “Made in Mathura. Carried forward by skilled hands.”
            </h4>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#C48332]">
              Craft · Artisans · Heritage · Opportunity
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Lightbox for Gallery Photos */}
      <MediaLightbox
        items={galleryPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </Layout>
  );
};

export default RadhaKrishnaPoshakPage;
