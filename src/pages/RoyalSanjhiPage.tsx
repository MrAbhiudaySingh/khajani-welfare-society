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
  Palette,
  Scissors,
  ArrowRight,
  ArrowDown,
  Award,
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
} from "lucide-react";

/* ─── Animated Stat Counter ─── */
function StatCounter({
  target,
  suffix = "+",
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
      className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-amber-400 tabular-nums tracking-tight block text-center drop-shadow-sm"
    >
      {displayed}
    </span>
  );
}

const RoyalSanjhiPage = () => {
  // SEO Metadata
  useEffect(() => {
    document.title = "Sanjhi Art in Mathura | Royal Sanjhi Art Training | Khajani Welfare Society";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Discover Khajani Welfare Society's Royal Sanjhi Art initiative in Mathura, preserving the traditional art of Braj through artist training, contemporary applications and livelihood opportunities for women."
      );
    }
  }, []);

  // Lightbox state for Sanjhi in Pictures gallery
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Genuine Khajani Sanjhi & Craft Imagery
  const galleryPhotos: MediaItem[] = [
    {
      image: "/images/projects/royal-sanjhi-training.jpg",
      title: "Royal Sanjhi Art Master Training",
      desc: "Master craftsperson guiding women and students in precision hand stencil cutting in Mathura.",
    },
    {
      image: "/images/projects/poshak-sanjhi.jpg",
      title: "Sanjhi Motifs on Sacred Attire",
      desc: "Delicate Sanjhi stencil patterns translated into temple embroidery and decorative textile panels.",
    },
    {
      image: "/images/projects/brij-surabhi-cow-craft.jpg",
      title: "Sanjhi on Sustainable Material",
      desc: "Innovative fusion of Sanjhi-inspired art with locally rooted cow-dung-based sustainable craft.",
    },
    {
      image: "/images/projects/brij-nipun-workshop.jpg",
      title: "Hands at Work: Stencil & Paper Cutting",
      desc: "Intricate curved scissor cuts executed freehand without preliminary pencil drawings.",
    },
    {
      image: "/images/projects/brij-surabhi-diya.jpg",
      title: "Decorative Craft & Traditional Motifs",
      desc: "Traditional Braj spiritual motifs integrated into eco-friendly decorative items and diyas.",
    },
    {
      image: "/images/projects/brij-nipun-activities.jpg",
      title: "Young Learners & Student Training",
      desc: "Youth and girl learners practicing composition and pattern creation in structured workshops.",
    },
    {
      image: "/images/projects/pathway-heritage-artisan.jpg",
      title: "Women Artists at Work",
      desc: "Trained women artists generating sustained income through traditional craft production.",
    },
    {
      image: "/images/projects/brij-surabhi-idol-painting.jpg",
      title: "Contemporary Applications & Finishing",
      desc: "Finished artistic pieces blending heritage Braj visual storytelling with contemporary presentation.",
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
                  <Sparkles size={12} className="text-secondary" /> ROYAL SANJHI ART
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-white/60">
                  Living Heritage Initiative
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-primary-foreground">
                Keeping the traditional art of{" "}
                <span className="text-secondary italic font-serif font-normal">Braj alive</span>
              </h1>

              {/* Lead Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-primary-foreground/85 leading-relaxed font-light max-w-2xl">
                <p>
                  Sanjhi is a traditional art form closely associated with the cultural and devotional heritage of Mathura and Braj.
                </p>
                <p>
                  Through its Royal Sanjhi Art initiative, Khajani Welfare Society trains women, young people, students and artisans in Sanjhi techniques—helping preserve the art while creating new opportunities for learning, creativity and livelihood.
                </p>
              </div>

              {/* 4 Pillars Strip */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-white/90">
                {[
                  "Braj Heritage",
                  "Traditional Art",
                  "Artisan Training",
                  "Women’s Livelihoods",
                ].map((pillar, idx) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 shadow-xs"
                  >
                    {pillar}
                    {idx < 3 && <span className="ml-2 text-secondary/60">·</span>}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#what-is-sanjhi"
                  className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <span>Explore the Art</span>
                  <ArrowDown size={14} />
                </a>
                <Link
                  to="/donate"
                  className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
                >
                  <span>Support Artisans</span>
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
                    src="/images/projects/royal-sanjhi-training.jpg"
                    alt="Royal Sanjhi Art Training at Khajani"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-5 right-5 glass px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-primary shadow-md">
                    Mathura, Uttar Pradesh
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl border border-white/25">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider block mb-1">
                      Living Master Tradition
                    </span>
                    <p className="text-white text-sm font-serif italic leading-snug">
                      “Freehand scissor cutting with curved custom blades—creating sacred stencils without drawing lines.”
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/80">
                      <span>250+ Artists Trained</span>
                      <span className="text-secondary">Mathura &amp; Braj</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 2 — WHAT IS SANJHI? (An intricate art tradition of Braj)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="what-is-sanjhi" className="py-24 bg-card border-b border-border relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <AnimeReveal variant="fade-up" className="lg:col-span-8">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                TRADITION &amp; ROOTS
              </span>
              <h2 className="text-sm sm:text-base font-mono font-semibold uppercase tracking-wider text-[#C48332] mb-1">
                What is Sanjhi?
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                An intricate art tradition of Braj
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed mt-4 max-w-3xl">
                Sanjhi uses detailed patterns, carefully cut stencils and traditional motifs to create intricate compositions. Its visual language is deeply connected with the cultural traditions of Braj. Learning Sanjhi therefore means more than learning a craft—it also means understanding and carrying forward a traditional form of artistic knowledge.
              </p>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-5 rounded-2xl bg-muted/60 border border-border max-w-sm">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                  THE ESSENCE OF SANJHI
                </span>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed italic font-serif">
                  Originally crafted as ritual offerings depicting Radha-Krishna leelas through stencils laid over dry natural pigments or water surfaces.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* Khajani's Training Includes: 6 Focus Cards */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 font-mono">
                Khajani’s Training Includes
              </h4>
              <span className="h-px bg-border flex-1 ml-4 hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Traditional Stencil Techniques",
                  desc: "Precision cutting techniques using specialized hand scissors and folded paper layers without preliminary pencil guidelines.",
                  icon: Scissors,
                  color: "text-[#D0704B] bg-[#FCECE0]",
                },
                {
                  title: "Intricate Paper Cutting",
                  desc: "Mastery of microscopic curves, lattice jaalis, delicate geometric borders, and filigree foliage cuts.",
                  icon: Feather,
                  color: "text-[#3B82C4] bg-[#E5F0FA]",
                },
                {
                  title: "Pattern Creation",
                  desc: "Understanding symmetry, sacred radial mandalas, concentric borders, and harmonious balance in multi-layered stencils.",
                  icon: Palette,
                  color: "text-[#4E9954] bg-[#E6F3E5]",
                },
                {
                  title: "Traditional Motifs",
                  desc: "Peacocks, cows, kadamba trees, lotus ponds, flutes, and riverside ghats rooted in Braj’s visual landscape.",
                  icon: Flower2,
                  color: "text-[#C48332] bg-[#FDF8F3]",
                },
                {
                  title: "Mythological Storytelling Through Art",
                  desc: "Translating devotional folklore, poetic traditions, and Braj devotional scenes into intricate visual narratives.",
                  icon: Scroll,
                  color: "text-[#8B5CF6] bg-[#F3E8FF]",
                },
                {
                  title: "Contemporary Applications",
                  desc: "Adapting classical stencil aesthetics to designer apparel, architectural screens, framed art, and lifestyle products.",
                  icon: Compass,
                  color: "text-[#0D9488] bg-[#CCFBF1]",
                },
              ].map((item, idx) => (
                <AnimeReveal key={item.title} variant="fade-up" delay={idx * 80}>
                  <div className="clay-card rounded-2xl p-6 h-full flex flex-col justify-between border border-border/80 hover:border-accent/40 transition-all group hover:-translate-y-1">
                    <div>
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-xs`}>
                        <item.icon size={22} />
                      </div>
                      <h5 className="font-display font-bold text-lg text-primary mb-2 leading-snug">
                        {item.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimeReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 3 — WHY KHAJANI WORKS WITH SANJHI
          A tradition survives when people continue to practise it
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.4} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              PURPOSE &amp; CONTINUITY
            </span>
            <h2 className="text-sm sm:text-base font-mono font-semibold uppercase tracking-wider text-[#C48332] mb-1">
              Why Khajani works with Sanjhi
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              A tradition survives when people continue to practise it
            </h3>
            <div className="space-y-3 mt-4 text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              <p>
                Khajani’s approach is not to preserve Sanjhi only as something to be viewed.
              </p>
              <p>
                The aim is to put the skill into more hands, encourage new learners to practise it and create opportunities for trained artists to use Sanjhi in ways that remain relevant today.
              </p>
            </div>
          </AnimeReveal>

          {/* Process Flow Strip */}
          <AnimeReveal variant="fade-up" delay={100} className="mb-14">
            <div className="rounded-2xl p-6 bg-card border border-border/80 shadow-xs">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-accent mb-4">
                THE CONTINUITY LIFECYCLE
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                {[
                  { step: "01", label: "Learn the Art" },
                  { step: "02", label: "Practise the Skill" },
                  { step: "03", label: "Create" },
                  { step: "04", label: "Earn" },
                  { step: "05", label: "Pass It Forward" },
                ].map((item, idx) => (
                  <div key={item.label} className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-full bg-accent/10 text-accent font-mono font-bold text-xs flex items-center justify-center">
                        {item.step}
                      </span>
                      <span className="font-display font-bold text-sm sm:text-base text-primary">
                        {item.label}
                      </span>
                    </div>
                    {idx < 4 && (
                      <ArrowRight size={16} className="text-[#C48332]/60 hidden md:block ml-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimeReveal>

          {/* Three Important Parts: Heritage, Creativity, Livelihood */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* HERITAGE */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="clay-card rounded-3xl p-8 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FCECE0] text-[#D0704B] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Award size={26} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#D0704B] block mb-2">
                    PILLAR 01
                  </span>
                  <h4 className="font-display font-bold text-2xl text-primary mb-3 leading-snug">
                    HERITAGE
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Keep the traditional knowledge and techniques of Sanjhi in practice across generations in Mathura and Braj.
                  </p>
                </div>
              </div>
            </AnimeReveal>

            {/* CREATIVITY */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="clay-card rounded-3xl p-8 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#E5F0FA] text-[#3B82C4] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Palette size={26} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#3B82C4] block mb-2">
                    PILLAR 02
                  </span>
                  <h4 className="font-display font-bold text-2xl text-primary mb-3 leading-snug">
                    CREATIVITY
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Give artists space to work with traditional patterns as well as suitable contemporary applications.
                  </p>
                </div>
              </div>
            </AnimeReveal>

            {/* LIVELIHOOD */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="clay-card rounded-3xl p-8 flex flex-col justify-between h-full border border-border/80 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#E6F3E5] text-[#4E9954] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <TrendingUp size={26} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#4E9954] block mb-2">
                    PILLAR 03
                  </span>
                  <h4 className="font-display font-bold text-2xl text-primary mb-3 leading-snug">
                    LIVELIHOOD
                  </h4>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Help trained women and artisans explore opportunities to earn through their skill and independent commissions.
                  </p>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 4 — LEARNING ROYAL SANJHI ART
          From stencil to finished artwork (Stepped Visual Sequence)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              CURRICULUM &amp; CRAFT PRACTICE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
              Learning Royal Sanjhi Art
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-2 font-normal">
              From stencil to finished artwork
            </p>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mt-3">
              A structured five-stage pedagogy that takes learners from cultural appreciation to precision cutting and commercial-quality artwork.
            </p>
          </AnimeReveal>

          {/* 5 Stages Grid / Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {[
              {
                step: "01",
                title: "UNDERSTAND THE TRADITION",
                desc: "Learn about Sanjhi, its connection with Braj and its traditional visual language.",
                icon: BookOpen,
                highlight: "Cultural Roots",
              },
              {
                step: "02",
                title: "LEARN THE TECHNIQUE",
                desc: "Learn stencil making, paper cutting, patterns and motifs using custom craft scissors.",
                icon: Scissors,
                highlight: "Scissor Craft",
              },
              {
                step: "03",
                title: "PRACTISE THE ART",
                desc: "Create Sanjhi compositions through careful hands-on practice and repetition.",
                icon: Brush,
                highlight: "Composition",
              },
              {
                step: "04",
                title: "CREATE NEW WORK",
                desc: "Use the learned techniques to produce finished artworks and suitable contemporary applications.",
                icon: Sparkles,
                highlight: "Finished Art",
              },
              {
                step: "05",
                title: "TAKE THE SKILL FORWARD",
                desc: "Continue practising, teaching, creating or exploring livelihood opportunities through the art.",
                icon: Handshake,
                highlight: "Livelihood & Teaching",
              },
            ].map((stage, idx) => (
              <AnimeReveal key={stage.step} variant="fade-up" delay={idx * 100}>
                <div className="rounded-2xl p-6 bg-background border border-border/80 hover:border-accent/40 hover:shadow-lg transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-3xl font-bold text-accent/80 group-hover:text-accent transition-colors">
                        {stage.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                        <stage.icon size={18} />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                      {stage.highlight}
                    </span>
                    <h4 className="font-display font-bold text-base text-primary mb-3 leading-snug">
                      {stage.title}
                    </h4>
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
          SECTION 5 — SANJHI IN NEW FORMS
          Traditional art can continue to evolve
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <AnimeReveal variant="fade-right" className="lg:col-span-7">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                CONTEMPORARY EVOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Sanjhi in new forms
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-2 font-normal">
                Traditional art can continue to evolve
              </p>
              <div className="space-y-3 mt-4 text-muted-foreground text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                <p>
                  Khajani has also explored ways of bringing Sanjhi's visual language into other forms of making.
                </p>
                <p>
                  The project documentation shows Sanjhi being applied beyond conventional paper work. For example, Khajani has conducted training in Royal Sanjhi Art in Fashion Design and Interior Design with Sanjhi Art, demonstrating how the traditional art can be introduced into contemporary design contexts.
                </p>
              </div>
            </AnimeReveal>

            {/* Guiding Principle Card */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
              <div className="rounded-3xl p-8 bg-[#FDF8F3] border border-[#F3E5D5] shadow-sm relative overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[#FCECE0] text-[#D0704B] flex items-center justify-center mb-5">
                  <Compass size={24} />
                </div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#C48332] mb-2">
                  THE CORE PRINCIPLE
                </h4>
                <p className="font-display font-bold text-2xl text-primary leading-snug mb-3">
                  “The important message is not modernising Sanjhi for the sake of it. It is:
                </p>
                <p className="font-serif italic text-xl text-[#C48332] font-semibold">
                  Keep the tradition. Explore new applications.”
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* Evolution Flow Strip */}
          <AnimeReveal variant="fade-up" className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Traditional Sanjhi",
                  desc: "Sacred paper-cutting, devotional mandalas, and temple ritual stencils rooted in Braj heritage.",
                  icon: Sparkles,
                  badge: "Base Craft",
                },
                {
                  title: "Fashion & Textile",
                  desc: "Translating delicate stencil silhouettes onto couture garments, handlooms, dupattas, and sarees.",
                  icon: Shirt,
                  badge: "Apparel Training",
                },
                {
                  title: "Interior & Decorative",
                  desc: "Architectural screens (jaalis), ambient backlit art panels, wall murals, and hospitality decor.",
                  icon: Home,
                  badge: "Spatial Design",
                },
                {
                  title: "Contemporary Products",
                  desc: "Bespoke packaging, gift boxes, framed home decor, and heritage stationery.",
                  icon: Package,
                  badge: "Market Products",
                },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 bg-card border border-border flex flex-col justify-between h-full group hover:border-accent/40 transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                        {item.badge}
                      </span>
                      <item.icon size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {idx < 3 && (
                    <div className="pt-4 mt-4 border-t border-border/50 flex items-center text-[11px] font-mono text-accent">
                      <span>Leads to next application</span>
                      <ArrowRight size={12} className="ml-1" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 6 — SANJHI AND SUSTAINABLE MATERIALS
          When two traditions come together (Distinctive Innovation)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Narrative */}
            <AnimeReveal variant="fade-right" className="lg:col-span-7">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                WHEN TWO TRADITIONS COME TOGETHER
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Sanjhi and sustainable materials
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-2 font-normal">
                Something distinctive about Khajani
              </p>

              <div className="space-y-3 mt-4 text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Khajani has also experimented with combining Sanjhi-inspired design with cow-dung-based material, bringing together traditional art with locally rooted sustainable making.
                </p>
                <p>
                  By joining the sacred artistic lineage of Sanjhi with the circular economy practices developed under the Brij-Surabhi initiative, artisans create eco-friendly devotional artifacts, wall pieces, and diyas that are biodegradable, culturally grounded, and commercially viable.
                </p>
              </div>

              {/* Distinctive Visual Formula Badge */}
              <div className="mt-8 p-5 rounded-2xl bg-background border border-[#D8C7B0] max-w-xl shadow-xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                  THE FORMULA
                </span>
                <div className="font-display font-bold text-sm sm:text-base text-primary tracking-wide flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent">SANJHI ART</span>
                  <span className="text-muted-foreground">×</span>
                  <span className="px-3 py-1 rounded-lg bg-[#E6F3E5] text-[#4E9954]">TRADITIONAL MATERIAL</span>
                  <span className="text-muted-foreground">×</span>
                  <span className="px-3 py-1 rounded-lg bg-[#E5F0FA] text-[#3B82C4]">CONTEMPORARY MAKING</span>
                </div>
              </div>
            </AnimeReveal>

            {/* Right Column: Authentic Khajani Artwork Photograph */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
              <TiltCard maxTilt={8}>
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border relative group bg-background">
                  <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden relative">
                    <img
                      src="/images/projects/brij-surabhi-cow-craft.jpg"
                      alt="Sanjhi on Sustainable Cow-Dung Material"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-secondary block mb-1">
                      GENUINE KHAJANI CRAFT ARTIFACT
                    </span>
                    <h4 className="font-display font-bold text-xl text-primary mb-2">
                      Eco-Crafted Sanjhi Reliefs
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Sanjhi-inspired motifs molded directly onto refined organic gaushala materials and hand-finished with non-toxic herbal colors.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 7 — OUR SANJHI IMPACT
          250+ Artists trained · 120+ Women earning
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.7} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-secondary font-mono font-bold tracking-[0.2em] uppercase text-xs px-4 py-1.5 glass-dark rounded-full border border-secondary/30 mb-4">
              <TrendingUp size={12} /> VERIFIED OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white">
              Our Sanjhi Impact
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 font-light mt-3">
              Approved website figures recorded in the official Khajani Master Document.
            </p>
          </AnimeReveal>

          {/* 2 Big Impact Numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            {/* Stat 1: 250+ Artists Trained */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/15 text-center flex flex-col items-center justify-center">
                <StatCounter target={250} suffix="+" />
                <span className="text-secondary font-serif italic text-lg sm:text-xl font-semibold mt-2 block">
                  Artists trained
                </span>
                <p className="text-xs sm:text-sm text-primary-foreground/70 font-light mt-2 max-w-xs">
                  Equipped with stencil cutting, composition, and traditional motif knowledge.
                </p>
              </div>
            </AnimeReveal>

            {/* Stat 2: 120+ Women Earning */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/15 text-center flex flex-col items-center justify-center">
                <StatCounter target={120} suffix="+" />
                <span className="text-secondary font-serif italic text-lg sm:text-xl font-semibold mt-2 block">
                  Women earning
                </span>
                <p className="text-xs sm:text-sm text-primary-foreground/70 font-light mt-2 max-w-xs">
                  Generating sustainable livelihood through Sanjhi Art commissions and products.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* Underneath Narrative: Heritage that also creates opportunity */}
          <AnimeReveal variant="fade-up" delay={300} className="max-w-3xl mx-auto text-center">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-display font-bold text-secondary mb-3">
                Heritage that also creates opportunity
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/85 font-light leading-relaxed">
                For Khajani, the success of the initiative is not only that people learn about Sanjhi. It is that more people learn the skill, practise it and have opportunities to earn through it.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 8 — TAKING SANJHI TO DIFFERENT LEARNERS (Photo-led strip)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              INCLUSIVE OUTREACH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              Taking Sanjhi to different learners
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mt-3">
              Khajani's Sanjhi work has not remained limited to one type of learner or one training setting. The programme material documents Sanjhi training and outreach involving different groups across educational and institutional settings.
            </p>
          </AnimeReveal>

          {/* Photo-led 5-Group Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                group: "Women",
                image: "/images/projects/pathway-heritage-artisan.jpg",
                desc: "Homemakers and rural women building independent creative livelihoods.",
                icon: Users,
              },
              {
                group: "Students",
                image: "/images/projects/brij-nipun-activities.jpg",
                desc: "School and college students connecting with indigenous heritage.",
                icon: GraduationCap,
              },
              {
                group: "Young Learners",
                image: "/images/projects/kla-students.jpg",
                desc: "Nurturing fine motor skills and cultural pride from an early age.",
                icon: BookOpen,
              },
              {
                group: "Artisans",
                image: "/images/projects/royal-sanjhi-training.jpg",
                desc: "Traditional craftspersons expanding repertoire into high-value paper art.",
                icon: Scissors,
              },
              {
                group: "Institutional Groups",
                image: "/images/projects/hero-training.jpg",
                desc: "Workshops for partner organizations, universities, and cultural delegations.",
                icon: Building2,
              },
            ].map((item, idx) => (
              <AnimeReveal key={item.group} variant="fade-up" delay={idx * 80}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border flex flex-col h-full group hover:border-accent/40 hover:shadow-lg transition-all">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.group}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute bottom-2.5 left-3 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <item.icon size={13} className="text-secondary" /> {item.group}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 9 — SANJHI IN PICTURES (Visual Gallery with Lightbox)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <AnimeReveal variant="fade-up" className="max-w-2xl">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                VISUAL ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                Sanjhi in pictures
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-1 font-normal">
                From careful cutting to finished art
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed mt-2">
                Click any photograph to view high-resolution details, intricate stencil close-ups, and workshop sessions.
              </p>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150}>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Eye size={14} className="text-accent" />
                <span>{galleryPhotos.length} Documented Photographs</span>
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
          SECTION 10 — CONNECTED TO THE HERITAGE OF BRAJ
          Dual Interlinks for Culture & GI Recognition
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              BRAJ HERITAGE CLUSTER
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              Connected to the heritage of Braj
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mt-3">
              Royal Sanjhi Art is part of Khajani's wider work to keep the traditional knowledge of Mathura and Braj in practice. Explore interconnected strands of our living heritage work:
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

            {/* Link 2: Mathura Zari Poshak GI */}
            <AnimeReveal variant="fade-up" delay={200}>
              <Link
                to="/gi-recognition"
                className="clay-card rounded-3xl p-8 flex flex-col justify-between h-full border border-border/80 hover:border-accent/40 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 block"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E5F0FA] text-[#3B82C4] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Award size={24} />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#3B82C4] block mb-2">
                    GI APPLICATION NO. 1147
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                    Explore Mathura Zari Poshak
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    Learn how Khajani secured official Geographical Indication (GI) recognition for Mathura’s centuries-old sanctum deity attire and embroidery traditions.
                  </p>
                </div>
                <div className="pt-4 border-t border-border flex items-center text-xs font-bold uppercase tracking-wider text-[#3B82C4] group-hover:text-primary transition-colors">
                  <span>Explore Mathura Zari Poshak</span>
                  <ArrowRight size={14} className="ml-2 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 11 — INTERESTED IN LEARNING OR SUPPORTING SANJHI ART?
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-primary text-primary-foreground relative overflow-hidden shadow-xl">
            <AuroraBackground variant="dark" intensity={0.5} />

            <div className="relative z-10 max-w-3xl">
              <span className="text-secondary text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3">
                JOIN THE MISSION
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-snug mb-4">
                Interested in learning or supporting Sanjhi Art?
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/85 font-light leading-relaxed mb-8">
                Individuals, educational institutions, cultural organisations and partners can connect with Khajani to learn more about Sanjhi training, exhibitions and opportunities to support the initiative.
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
          SECTION 12 — CLOSING
          Keep the art in practice. Learn · Create · Earn · Pass It Forward
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimeReveal variant="fade-up">
            <h4 className="text-xl sm:text-2xl font-serif italic text-primary font-medium mb-2">
              “Keep the art in practice.”
            </h4>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#C48332]">
              Learn · Create · Earn · Pass It Forward
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

export default RoyalSanjhiPage;
