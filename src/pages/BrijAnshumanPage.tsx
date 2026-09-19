import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import MediaLightbox from "@/components/MediaLightbox";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Flame,
  CheckCircle2,
  Calendar,
  Layers,
  TrendingUp,
  Wallet,
  Building2,
  Lock,
  HeartHandshake,
  Landmark,
  Compass,
  ArrowUpRight,
  SunMedium,
  Palette,
  Scissors,
  Check
} from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
  tag: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "/images/projects/brij-anshuman-icon.jpg",
    caption: "Practical vocational training session inside Mathura correctional facility",
    tag: "Training Inside Prison",
  },
  {
    url: "/images/projects/poshak-zari.jpg",
    caption: "Traditional Thakur Ji Poshak tailoring and devotional craftwork",
    tag: "Poshak Making",
  },
  {
    url: "/images/projects/upsdm-sewing.jpg",
    caption: "Hands-on machine sewing and garment assembly practice",
    tag: "Stitching & Masks",
  },
  {
    url: "/images/projects/royal-sanjhi-training.jpg",
    caption: "Sanjhi art stencil cutting and intricate traditional pattern creation",
    tag: "Sanjhi Training",
  },
  {
    url: "/images/projects/upsdm-tailor.jpg",
    caption: "Precision pattern drafting and product tailoring",
    tag: "Handcraft & Tailoring",
  },
  {
    url: "/images/projects/poshak-sanjhi.jpg",
    caption: "Finished devotional products ready for distribution and exhibition",
    tag: "Finished Products",
  },
  {
    url: "/images/projects/upsdm-beauty.jpg",
    caption: "Beauty and wellness practical skill module session",
    tag: "Beauty & Wellness",
  },
  {
    url: "/images/projects/hero-training.jpg",
    caption: "Focused workshop environment fostering skill mastery and self-reliance",
    tag: "Participants at Work",
  },
];

const TRAINING_AREAS = [
  {
    id: "poshak",
    title: "Thakur Ji Poshak Making",
    desc: "Learning skills used in making traditional deity Poshak, closely connected with the devotional heritage and textile culture of Mathura and Braj.",
    image: "/images/projects/poshak-zari.jpg",
    tag: "Heritage Craft",
    highlights: ["Devotional attire cutting", "Zari and border needlework", "Traditional fabric finishing"],
  },
  {
    id: "candles",
    title: "Gel & Wax Candle Making",
    desc: "Making decorative, aromatic, and useful candles for festival markets, temples, and domestic celebrations.",
    image: "/images/projects/brij-surabhi-diya.jpg",
    tag: "Utility Craft",
    highlights: ["Wax blending & pouring", "Wick placement & molding", "Decorative packaging"],
  },
  {
    id: "stitching",
    title: "Bags & Cotton Masks",
    desc: "Practical stitching and product-making skills focused on eco-friendly shopping bags, utility pouches, and protective cotton masks.",
    image: "/images/projects/upsdm-sewing.jpg",
    tag: "Textiles",
    highlights: ["Commercial machine operation", "Pattern cutting & seam assembly", "Batch production discipline"],
  },
  {
    id: "ppe",
    title: "PPE Kit Manufacturing",
    desc: "Production skills that were mobilised during periods of critical public-health need, manufacturing certified protective equipment.",
    image: "/images/projects/upsdm-tailor.jpg",
    tag: "Essential Production",
    highlights: ["Safety apparel stitching", "Standardized quality control", "High-volume workflow"],
  },
  {
    id: "beauty",
    title: "Beauty & Wellness",
    desc: "Practical personal-care, grooming, and salon skills that provide direct self-employment avenues upon release.",
    image: "/images/projects/upsdm-beauty.jpg",
    tag: "Service Trade",
    highlights: ["Basic skincare & haircare", "Grooming & styling techniques", "Client hygiene protocols"],
  },
  {
    id: "sanjhi",
    title: "Royal Sanjhi Art",
    desc: "Learning the traditional Sanjhi art of Braj, mastering intricate paper cutting, stencil design, and devotional motifs.",
    image: "/images/projects/royal-sanjhi-training.jpg",
    tag: "Braj Art Tradition",
    highlights: ["Fine scissor craft", "Traditional stenciling", "Devotional compositions"],
  },
  {
    id: "crochet",
    title: "Crochet Art",
    desc: "Developing handcraft and crochet-making skills to create textured textiles, decorative accents, and wearable handicraft products.",
    image: "/images/projects/poshak-sanjhi.jpg",
    tag: "Handicrafts",
    highlights: ["Yarn handling & hook gauge", "Pattern reading & loop stitches", "Finished artisanal goods"],
  },
];

const BrijAnshumanPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    document.title = "Brij-Anshuman | Skill Training for Prison Inmates | Khajani Welfare Society";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Brij-Anshuman is Khajani Welfare Society's rehabilitation initiative providing vocational and practical skill training for prison inmates in Mathura."
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
          <span className="text-secondary font-medium">Brij-Anshuman</span>
        </div>
      </nav>

      {/* ── Screen 1: Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-primary text-white overflow-hidden py-20 lg:py-28">
        <AuroraBackground variant="dark" intensity={1.3} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/brij-anshuman-icon.jpg"
            alt="Brij-Anshuman vocational training inside prison"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-white/10 text-secondary border border-secondary/30 mb-6 backdrop-blur-sm">
              <Sparkles size={13} className="text-secondary" />
              Rehabilitation &amp; Practical Vocational Training
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
              BRIJ-ANSHUMAN
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-secondary/95 max-w-3xl mx-auto mb-6 leading-relaxed">
              Skills and a second chance for prison inmates
            </p>

            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Brij-Anshuman is Khajani Welfare Society’s skill-development initiative for prison inmates.
              Through practical vocational training, inmates learn skills they can use to make products, earn income,
              and prepare for opportunities after release. The idea behind the programme is simple:{" "}
              <span className="text-white font-medium">a person’s past should not permanently decide their future.</span>
            </p>

            {/* 5 Core Pillars */}
            <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4 py-3 px-6 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-white/90 mb-10 shadow-lg">
              <span className="text-secondary font-semibold">Prison Inmates</span>
              <span className="text-white/40">·</span>
              <span>Skill Training</span>
              <span className="text-white/40">·</span>
              <span>Rehabilitation</span>
              <span className="text-white/40">·</span>
              <span>Income</span>
              <span className="text-white/40">·</span>
              <span className="text-secondary font-semibold">Second Chance</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#how-it-works"
                className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                <span>How It Works</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#what-inmates-learn"
                className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white border-white/30 hover:bg-white/10"
              >
                Explore Training Areas
              </a>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 2: Why Brij-Anshuman? ── */}
      <section className="py-20 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                  Why Brij-Anshuman?
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                  Rehabilitation should begin before release
                </h2>
                <div className="h-1 w-20 bg-secondary mb-6 rounded-full" />
                <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-serif">
                  <p>
                    Time spent in prison can also become a time to learn.
                  </p>
                  <p className="text-foreground/90 font-sans text-base">
                    Brij-Anshuman gives inmates an opportunity to develop practical skills through hands-on training.
                    The programme focuses on useful skills that can support productive work, income and greater financial security.
                  </p>
                  <p className="text-foreground/90 font-sans text-base">
                    Khajani’s documented programme model includes structured <strong className="text-primary font-semibold">15-day skill-training programmes</strong> designed specifically to fit correctional settings and produce tangible, marketable competency.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="clay-card p-8 rounded-3xl border border-border/80 bg-background/90 shadow-xl space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-base">15-Day Model</h4>
                      <p className="text-xs text-muted-foreground">Documented training module</p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Intensive practical training inside Mathura District Jail</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Direct transfer of earnings to trainees’ bank accounts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Traditions and modern market skills combined</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Reintegration readiness and financial cushion</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 3: What Inmates Learn (Visual Trades Section) ── */}
      <section id="what-inmates-learn" className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Documented Disciplines
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                What inmates learn
              </h2>
              <p className="text-lg font-serif italic text-accent font-medium mb-3">
                Practical skills that can be used beyond prison
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Khajani’s curriculum spans traditional Braj handicrafts, domestic utility goods, and personal service trades.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRAINING_AREAS.map((item, idx) => (
              <AnimeReveal key={item.id} variant="fade-up" delay={idx * 75} className="h-full">
                <div className="clay-card rounded-2xl overflow-hidden flex flex-col h-full border border-border/70 hover:border-accent/40 transition-all group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border/60">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary/70 block mb-2">
                        Key Techniques
                      </span>
                      <ul className="space-y-1.5">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                            <Check size={12} className="text-accent shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screen 4: How Brij-Anshuman Works ── */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Programme Structure
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                How Brij-Anshuman works
              </h2>
              <p className="text-lg font-serif italic text-accent font-medium">
                Learn. Make. Earn. Prepare.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                action: "LEARN",
                desc: "Inmates receive focused practical training in a selected skill from expert instructors.",
                icon: Layers,
              },
              {
                step: "02",
                action: "PRACTISE",
                desc: "Training includes hands-on practice so participants can master techniques by doing.",
                icon: Scissors,
              },
              {
                step: "03",
                action: "MAKE",
                desc: "Participants use their new skills to create useful, marketable products with quality standards.",
                icon: Palette,
              },
              {
                step: "04",
                action: "EARN",
                desc: "Where products generate income, the documented model directs trainees' earnings straight to their bank accounts.",
                icon: Wallet,
              },
              {
                step: "05",
                action: "PREPARE FOR THE FUTURE",
                desc: "Skills, confidence and savings provide a stronger, dignified starting point for life after release.",
                icon: TrendingUp,
              },
            ].map((s, idx) => (
              <AnimeReveal key={s.step} variant="fade-up" delay={idx * 90} className="h-full">
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

      {/* ── Screen 5: Dedicated Visual Flow — Income & Bank Accounts ── */}
      <section className="py-20 lg:py-24 bg-primary text-white relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.2} />
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Financial Security &amp; Independence
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                Learning that can also create income
              </h2>
              <p className="text-xl font-serif italic text-secondary mb-6">
                Work today. Some security for tomorrow.
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mb-8 rounded-full" />
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-light">
                The programme is not designed only to keep inmates occupied. Products created through training can generate income, and Khajani’s programme documentation states that <strong className="text-white font-medium">income generated from products made by trainees is directed to their bank accounts</strong>, helping them build financial security for their future after release.
              </p>
            </div>
          </AnimeReveal>

          {/* Visual Sequence: SKILL → PRODUCT → INCOME → BANK ACCOUNT → FUTURE */}
          <AnimeReveal variant="fade-up" delay={150}>
            <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-md shadow-2xl">
              <div className="text-center mb-6">
                <span className="text-[11px] font-mono tracking-widest text-secondary uppercase font-bold">
                  Documented Economic Pipeline
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center">
                {[
                  { step: "01", name: "SKILL", desc: "15-day vocational mastery", icon: Scissors },
                  { step: "02", name: "PRODUCT", desc: "Quality goods made in jail", icon: Flame },
                  { step: "03", name: "INCOME", desc: "Fair market compensation", icon: TrendingUp },
                  { step: "04", name: "BANK ACCOUNT", desc: "Direct deposit into inmate account", icon: Building2 },
                  { step: "05", name: "FUTURE", desc: "Starting capital upon release", icon: Compass },
                ].map((item, i) => (
                  <div key={item.name} className="relative group">
                    <div className="p-5 rounded-2xl bg-white/10 border border-white/15 text-center flex flex-col items-center hover:bg-white/15 transition-all">
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
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center pt-6 border-t border-white/15 text-xs text-white/70 max-w-2xl mx-auto">
                By maintaining individual accounts, inmates preserve personal agency and accumulate real savings that significantly ease post-release reintegration and reduce recidivism.
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 6: Connecting Rehabilitation with the Skills of Braj ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Regional Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4 leading-tight">
                Connecting rehabilitation with the skills of Braj
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto mb-6 rounded-full" />
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Some Brij-Anshuman training connects inmates directly with skills rooted in the cultural soil of the region.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimeReveal variant="fade-right" className="h-full">
              <div className="clay-card p-8 rounded-3xl border border-border flex flex-col justify-between h-full bg-card group hover:border-accent/40 transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent">
                      Devotional Craft
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">
                    Thakur Ji Poshak Making
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-serif">
                    Thakur Ji Poshak Making introduces a practical traditional skill associated with Mathura and Braj. Inmates master delicate zari needlework, lace stitching, and deity vestment design that is in constant regional demand.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    to="/projects/mathura-zari-poshak"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors font-mono"
                  >
                    <span>Explore Mathura Zari Poshak</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150} className="h-full">
              <div className="clay-card p-8 rounded-3xl border border-border flex flex-col justify-between h-full bg-card group hover:border-accent/40 transition-all">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 text-accent">
                      Traditional Folk Art
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">
                    Royal Sanjhi Art
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-serif">
                    Royal Sanjhi Art connects participants with one of Braj’s most distinctive traditional art forms. Cutting intricate stencils teaches deep focus, precision hand-eye coordination, and cultural pride.
                  </p>
                </div>
                <div className="pt-4 border-t border-border">
                  <Link
                    to="/projects/royal-sanjhi"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors font-mono"
                  >
                    <span>Explore Royal Sanjhi Art</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimeReveal>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/culture"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-accent transition-colors font-mono"
            >
              <span>Explore Culture &amp; Heritage Initiatives</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Screen 7: More Than Learning a Craft (Restrained & Human) ── */}
      <section className="py-20 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Human Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4 leading-tight">
              More than learning a craft
            </h2>
            <p className="text-xl font-serif italic text-accent font-medium mb-6">
              Building confidence through productive work
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-serif">
              The value of vocational training inside prison goes beyond the finished product.
              Brij-Anshuman creates a quiet, disciplined space where time is transformed into capability.
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
              {[
                "Learn a Skill",
                "Use Time Productively",
                "Make Something of Value",
                "Earn",
                "Save",
                "Prepare for Life After Release",
              ].map((item) => (
                <div
                  key={item}
                  className="px-5 py-3 rounded-2xl bg-background border border-border/80 shadow-sm text-xs sm:text-sm font-semibold text-primary"
                >
                  {item}
                </div>
              ))}
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 8: Brij-Anshuman in Pictures (Interactive Gallery) ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Documented Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Brij-Anshuman in pictures
              </h2>
              <p className="text-lg font-serif italic text-accent font-medium mb-4">
                Training, making and learning
              </p>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Photographs document authorized workshops, hands-on craft training, and product creation conducted inside Mathura correctional facilities, while respecting participant privacy guidelines.
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

      {/* ── Screen 9: Our Approach ── */}
      <section className="py-20 lg:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Core Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
              Our approach
            </h2>
            <p className="text-xl font-serif italic text-accent font-medium mb-6">
              Skills can create a way forward
            </p>
            <div className="h-1 w-20 bg-secondary mx-auto mb-8 rounded-full" />
            <div className="clay-card p-8 sm:p-10 rounded-3xl border border-border bg-background shadow-lg text-left sm:text-center">
              <p className="text-lg sm:text-xl font-display text-primary font-bold mb-4">
                Brij-Anshuman is built around a straightforward belief:
              </p>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-serif">
                Rehabilitation is not only about release. Preparation for life afterwards can begin while a person is still inside—through useful skills, productive work and an opportunity to build some financial security.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 10: Call to Action / Engagement ── */}
      <section className="py-20 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Collaborate &amp; Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
              Interested in supporting rehabilitation through skills?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Institutions, correctional administrators, and partners can connect with Khajani to learn more about vocational training and rehabilitation initiatives.
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

      {/* ── Screen 11: Closing Section ── */}
      <section className="py-16 bg-primary text-white text-center border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimeReveal variant="fade-up">
            <p className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              “A skill learned today can help create a different tomorrow.”
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-secondary uppercase font-semibold">
              <span>Learn</span>
              <span>·</span>
              <span>Make</span>
              <span>·</span>
              <span>Earn</span>
              <span>·</span>
              <span>Prepare</span>
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

export default BrijAnshumanPage;
