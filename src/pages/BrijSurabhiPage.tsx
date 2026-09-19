import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { MediaLightbox, MediaItem } from "@/components/MediaLightbox";
import {
  Sparkles,
  Flame,
  Leaf,
  Flower2,
  Users,
  ArrowRight,
  ArrowDown,
  Recycle,
  Heart,
  TrendingUp,
  Package,
  CheckCircle2,
  Compass,
  Award,
  Calendar,
  Layers,
  ShoppingBag,
  Eye,
  ZoomIn,
  Handshake,
  Mail,
  Sun,
  ShieldCheck,
} from "lucide-react";

const BrijSurabhiPage = () => {
  // SEO Metadata
  useEffect(() => {
    document.title = "Brij-Surabhi | Temple Flower Recycling & Sustainable Livelihoods in Mathura";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore Brij-Surabhi by Khajani Welfare Society in Mathura, working with women and communities on cow-dung products, temple flower reuse, sustainable skills and livelihoods."
      );
    }
  }, []);

  // Lightbox state for gallery
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Genuine Khajani Brij-Surabhi Imagery
  const galleryPhotos: MediaItem[] = [
    {
      image: "/images/projects/brij-surabhi-cow.jpg",
      title: "Indigenous Gaushala Resource Collection",
      desc: "Collecting local organic resources from Gaushalas across Mathura and Braj as raw material for eco-crafts.",
    },
    {
      image: "/images/projects/brij-surabhi-cow-craft.jpg",
      title: "Hands at Work: Cow-Dung Craft Making",
      desc: "Artisan hands molding, finishing, and refining sacred gaumaya relief pieces and incense cups.",
    },
    {
      image: "/images/projects/brij-surabhi-diya.jpg",
      title: "Eco-Friendly Diyas & Sacred Craft",
      desc: "Finished biodegradable diyas made from refined cow dung, ready for festival worship and temples.",
    },
    {
      image: "/images/projects/brij-surabhi-idol-painting.jpg",
      title: "Hand-Painted Deity Idols",
      desc: "Artisans hand-painting Lakshmi-Ganesh and devotional figures using safe, non-toxic herbal pigments.",
    },
    {
      image: "/images/projects/brij-surabhi-flower-recycling.jpg",
      title: "Temple Flower Sorting & Processing",
      desc: "Sorting sacred marigolds, roses, and offering flowers collected from major Mathura-Vrindavan temples.",
    },
    {
      image: "/images/projects/brij-surabhi-temple.jpg",
      title: "Braj Temple Partnerships",
      desc: "Connecting daily temple worship with clean collection channels to keep flowers out of the Yamuna river.",
    },
    {
      image: "/images/projects/hero-training.jpg",
      title: "Women's SHG Production Session",
      desc: "Self Help Group members participating in group production, quality finishing, and packaging.",
    },
    {
      image: "/images/projects/pathway-women-skills.jpg",
      title: "Handmade Products for Exhibition",
      desc: "Finished products showcased at craft exhibitions including the Uttar Pradesh International Trade Show.",
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
                  <Leaf size={12} className="text-secondary" /> BRIJ-SURABHI
                </span>
                <span className="text-xs font-mono tracking-wider uppercase text-white/60">
                  Sustainable Circular Ecology
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-primary-foreground">
                Turning local resources into{" "}
                <span className="text-secondary italic font-serif font-normal">useful products</span> and livelihoods
              </h1>

              {/* Lead Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-primary-foreground/85 leading-relaxed font-light max-w-2xl">
                <p>
                  Brij-Surabhi brings together women’s Self Help Groups, cow welfare, responsible use of natural resources and livelihood creation in Braj.
                </p>
                <p>
                  The project works in two main areas: making useful products from cow dung and transforming flowers collected from temples into new products instead of allowing them to go to waste.
                </p>
              </div>

              {/* 5 Pillars Strip */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-white/90">
                {[
                  "Women’s SHGs",
                  "Cow Welfare",
                  "Temple Flowers",
                  "Sustainable Products",
                  "Livelihoods",
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
                  href="#two-parts"
                  className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <span>Explore the Project</span>
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
                    src="/images/projects/brij-surabhi-cow.jpg"
                    alt="Brij-Surabhi Cow Welfare & Temple Flower Project"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-5 right-5 glass px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold text-primary shadow-md">
                    Mathura &amp; Braj
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl border border-white/25">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider block mb-1">
                      Resource to Value
                    </span>
                    <p className="text-white text-sm font-serif italic leading-snug">
                      “Transforming discarded organic materials into eco-diyas, sacred idols, fragrant incense and paper.”
                    </p>
                    <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/80">
                      <span>Women SHG Driven</span>
                      <span className="text-secondary">Zero Waste Model</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 2 — TWO PARTS. ONE SIMPLE IDEA.
          Use local resources responsibly and create opportunities for local people.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="two-parts" className="py-24 bg-card border-b border-border scroll-mt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              CORE STRATEGY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              Two parts. One simple idea.
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-2 font-normal">
              Use local resources responsibly and create opportunities for local people.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mt-3">
              Brij-Surabhi organizes practical action around two naturally available organic streams in the sacred landscape of Braj.
            </p>
          </AnimeReveal>

          {/* 2-Column Visual Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column 1: Cow Dung-Based Products */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="clay-card rounded-3xl overflow-hidden border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-xl transition-all h-full flex flex-col justify-between group">
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src="/images/projects/brij-surabhi-cow-craft.jpg"
                      alt="Cow Dung-Based Products Making"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/95 text-primary shadow-sm">
                      01 · GAU-DHAN MAKING
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display font-bold text-2xl text-primary mb-3">
                      Cow Dung-Based Products
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mb-6">
                      Using cow dung to make traditional and useful products while creating livelihood opportunities for women and community members.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-foreground/80">
                      {["Diyas", "Lakshmi-Ganesh Idols", "Planters", "Relief Artifacts"].map((item) => (
                        <span key={item} className="px-3 py-1 rounded-md bg-muted border border-border/70">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-2">
                  <a
                    href="#cow-dung-products"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                  >
                    <span>View Making Process</span>
                    <ArrowDown size={14} />
                  </a>
                </div>
              </div>
            </AnimeReveal>

            {/* Column 2: Temple Flower Reuse */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="clay-card rounded-3xl overflow-hidden border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-xl transition-all h-full flex flex-col justify-between group">
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src="/images/projects/brij-surabhi-flower-recycling.jpg"
                      alt="Temple Flower Reuse and Incense"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/95 text-primary shadow-sm">
                      02 · TEMPLE FLOWER REUSE
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display font-bold text-2xl text-primary mb-3">
                      Temple Flower Reuse
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mb-6">
                      Training people to turn used temple flowers into useful products such as natural incense and handcrafted paper, reducing river waste.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-foreground/80">
                      {["Dhoopbatti", "Agarbatti", "Sambrani Cups", "Itra", "Handmade Paper"].map((item) => (
                        <span key={item} className="px-3 py-1 rounded-md bg-muted border border-border/70">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-2">
                  <a
                    href="#temple-flower-reuse"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                  >
                    <span>View 5 Products</span>
                    <ArrowDown size={14} />
                  </a>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 3 — COW DUNG-BASED PRODUCTS
          From a local resource to useful products
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="cow-dung-products" className="py-24 bg-background border-b border-border scroll-mt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <AnimeReveal variant="fade-up" className="lg:col-span-8">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                LOCAL RESOURCE · PRODUCTIVE USE
              </span>
              <h2 className="text-sm sm:text-base font-mono font-semibold uppercase tracking-wider text-[#C48332] mb-1">
                Cow dung-based products
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                From a local resource to useful products
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed mt-4 max-w-3xl">
                Cow welfare is deeply connected with life and culture in Braj. At the same time, caring for cows that are no longer productive creates practical challenges. Brij-Surabhi explores how cow dung can be put to productive use through community-based making and training.
              </p>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-6 rounded-2xl bg-[#FDF8F3] border border-[#F3E5D5] max-w-sm shadow-xs">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C48332] block mb-2">
                  GAUSHALA ALLIANCE
                </span>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-serif italic">
                  Partnering directly with regional shelters and rural cattle keepers, transforming maintenance costs into productive value streams.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* 5 Products Documented Under the Initiative */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 font-mono">
                Products Documented Under The Initiative
              </h4>
              <span className="h-px bg-border flex-1 ml-4 hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  title: "Diyas",
                  desc: "Biodegradable traditional lamps crafted for Diwali, temple worship, and home rituals.",
                  icon: Flame,
                  tag: "Eco-Lamps",
                },
                {
                  title: "Lakshmi-Ganesh Idols",
                  desc: "Sacred deity figures hand-molded with natural gaumaya and herbal coloring.",
                  icon: Sparkles,
                  tag: "Devotional",
                },
                {
                  title: "Decorative Products",
                  desc: "Wall relief hangings, commemorative plaques, and cultural mementos.",
                  icon: Package,
                  tag: "Home Decor",
                },
                {
                  title: "Traditional Products",
                  desc: "Incense burners, hawan cups, and garden nursery biodegradable planters.",
                  icon: Leaf,
                  tag: "Utility",
                },
                {
                  title: "Sustainable Craft",
                  desc: "Fine artistic pieces combining organic composites with regional handicraft finishes.",
                  icon: Award,
                  tag: "Artisanal",
                },
              ].map((item, idx) => (
                <AnimeReveal key={item.title} variant="fade-up" delay={idx * 70}>
                  <div className="clay-card rounded-2xl p-6 h-full flex flex-col justify-between border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-md transition-all group">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                        <item.icon size={20} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        {item.tag}
                      </span>
                      <h5 className="font-display font-bold text-base text-primary mb-2">
                        {item.title}
                      </h5>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">
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
          SECTION 4 — HOW IT WORKS
          Collect → Prepare → Learn → Make → Earn
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              THE WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              How it works
            </h2>
            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-bold text-accent">
              <span>Collect</span>
              <span>→</span>
              <span>Prepare</span>
              <span>→</span>
              <span>Learn</span>
              <span>→</span>
              <span>Make</span>
              <span>→</span>
              <span>Earn</span>
            </div>
          </AnimeReveal>

          {/* 5 Sequential Stepped Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {[
              {
                step: "01",
                title: "COLLECT",
                desc: "Cow dung is collected as the basic raw material from partner gaushalas.",
              },
              {
                step: "02",
                title: "PREPARE",
                desc: "The material is sun-dried, filtered, and prepared for making different products.",
              },
              {
                step: "03",
                title: "LEARN",
                desc: "Women and community members learn the required molding and finishing techniques.",
              },
              {
                step: "04",
                title: "MAKE",
                desc: "Participants create traditional, decorative and useful products.",
              },
              {
                step: "05",
                title: "CREATE OPPORTUNITY",
                desc: "The skill and products become a sustained source of livelihood for participating women.",
              },
            ].map((stage, idx) => (
              <AnimeReveal key={stage.step} variant="fade-up" delay={idx * 80}>
                <div className="rounded-2xl p-6 bg-background border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-lg transition-all h-full flex flex-col justify-between group">
                  <div>
                    <span className="font-mono text-3xl font-bold text-accent/80 group-hover:text-accent transition-colors block mb-3">
                      {stage.step}
                    </span>
                    <h3 className="font-display font-bold text-base text-primary mb-2.5">
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
          SECTION 5 — TRADITIONAL ART MEETS SUSTAINABLE MATERIAL
          Sanjhi on a different canvas
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background border-b border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Narrative */}
            <AnimeReveal variant="fade-right" className="lg:col-span-7">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                A DISTINCTIVE KHAJANI INNOVATION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Traditional art meets sustainable material
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-2 font-normal">
                Sanjhi on a different canvas
              </p>

              <div className="space-y-4 mt-4 text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Khajani has also explored combining Sanjhi-inspired art with cow-dung-based material, bringing together two locally rooted forms of knowledge.
                </p>
                <p>
                  Instead of confining Sanjhi purely to paper stencils, artisans emboss its delicate floral mandalas and sacred motifs onto refined cow-dung composite bases, producing durable, eco-friendly decorative art for contemporary interiors.
                </p>
              </div>

              {/* Formula Visual Box */}
              <div className="mt-8 p-5 rounded-2xl bg-card border border-[#D8C7B0] max-w-xl shadow-xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                  THE VISUAL SYNTHESIS
                </span>
                <div className="font-display font-bold text-sm sm:text-base text-primary tracking-wide flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-[#E6F3E5] text-[#4E9954]">COW-DUNG MATERIAL</span>
                  <span className="text-muted-foreground">×</span>
                  <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent">SANJHI ART</span>
                  <span className="text-muted-foreground">×</span>
                  <span className="px-3 py-1 rounded-lg bg-[#E5F0FA] text-[#3B82C4]">CONTEMPORARY MAKING</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/projects/royal-sanjhi"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors"
                >
                  <span>Explore Royal Sanjhi Art</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </AnimeReveal>

            {/* Right Column: Authentic Image */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
              <TiltCard maxTilt={8}>
                <div className="rounded-3xl overflow-hidden border border-border shadow-xl bg-card group">
                  <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden relative">
                    <img
                      src="/images/projects/brij-surabhi-cow-craft.jpg"
                      alt="Khajani Sanjhi Art on Cow-Dung Material"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent block mb-1">
                      Genuine Khajani Artifact
                    </span>
                    <h4 className="font-display font-bold text-lg text-primary mb-2">
                      Sanjhi-Engraved Gaumaya Plaques
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      Sanjhi motifs pressed into organic gaumaya matrices, bringing spiritual grace together with biodegradable circular crafting.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 6 & 7 — TEMPLE FLOWER REUSE
          Giving temple flowers another life (Flowers → 5 Products)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="temple-flower-reuse" className="py-24 bg-card border-b border-border scroll-mt-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
            <AnimeReveal variant="fade-up" className="lg:col-span-8 space-y-4">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block font-mono">
                TEMPLE FLOWER REUSE
              </span>
              <h2 className="text-sm sm:text-base font-mono font-semibold uppercase tracking-wider text-[#C48332] mb-1">
                Giving temple flowers another life
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                What can temple flowers become?
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed max-w-3xl">
                Large quantities of flowers are offered in temples as part of daily worship. After use, these flowers can become organic waste. Brij-Surabhi's temple-waste work trains people to process these flowers and turn them into useful products.
              </p>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-6 rounded-2xl bg-[#E6F3E5] border border-[#CBE5CB] max-w-sm shadow-xs">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#4E9954] block mb-2">
                  10-DAY TRAINING INITIATIVE
                </span>
                <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed font-serif italic">
                  Documented under the Tourism Department proposal, conducting intensive 10-day hands-on workshops in flower processing and natural incense formulation.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* Visual Progression: Flowers → Process → 5 Products */}
          <AnimeReveal variant="fade-up" delay={200}>
            <div className="mb-6 flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 font-mono">
                Flowers → New Products (5 Documented Products)
              </h4>
              <span className="h-px bg-border flex-1 ml-4 hidden sm:block" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {[
                {
                  title: "Dhoopbatti",
                  desc: "Traditional incense.",
                  tag: "Natural Herbal",
                  icon: Flower2,
                },
                {
                  title: "Agarbatti",
                  desc: "Incense sticks.",
                  tag: "Charcoal-Free",
                  icon: Sparkles,
                },
                {
                  title: "Sambrani Cups",
                  desc: "Aromatic incense cups.",
                  tag: "Purifying Smoke",
                  icon: Flame,
                },
                {
                  title: "Itra",
                  desc: "Fragrance made using floral material.",
                  tag: "Natural Perfume",
                  icon: Sun,
                },
                {
                  title: "Paper",
                  desc: "Giving flower material another useful form.",
                  tag: "Handcrafted Sheet",
                  icon: Layers,
                },
              ].map((prod, idx) => (
                <div
                  key={prod.title}
                  className="rounded-2xl p-6 bg-background border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <prod.icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                      {prod.tag}
                    </span>
                    <h5 className="font-display font-bold text-lg text-primary mb-2">
                      {prod.title}
                    </h5>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 8 — WHY BRIJ-SURABHI MATTERS
          Less waste. More useful work. (4 Direct Outcomes)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background border-b border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              DIRECT OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              Why Brij-Surabhi matters
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-2 font-normal">
              Less waste. More useful work.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mt-3">
              Rather than using abstract sustainability rhetoric, the impact is grounded in four clear, everyday outcomes for Mathura and Braj.
            </p>
          </AnimeReveal>

          {/* 4 Direct Outcomes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "COW WELFARE",
                desc: "Finding productive uses for cow dung can contribute to the wider effort around caring for cows.",
                icon: Heart,
                color: "text-[#D0704B] bg-[#FCECE0]",
              },
              {
                title: "LESS WASTE",
                desc: "Temple flowers and organic materials can be reused instead of simply being discarded into rivers.",
                icon: Recycle,
                color: "text-[#3B82C4] bg-[#E5F0FA]",
              },
              {
                title: "WOMEN’S LIVELIHOODS",
                desc: "Women’s Self Help Groups can learn skills for making useful and saleable products.",
                icon: TrendingUp,
                color: "text-[#4E9954] bg-[#E6F3E5]",
              },
              {
                title: "BRAJ TRADITIONS",
                desc: "The initiative draws on materials and practices that already have a strong connection with the region.",
                icon: Sparkles,
                color: "text-[#C48332] bg-[#FDF8F3]",
              },
            ].map((card, idx) => (
              <AnimeReveal key={card.title} variant="fade-up" delay={idx * 80}>
                <div className="clay-card rounded-3xl p-7 flex flex-col justify-between h-full border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-lg transition-all group hover:-translate-y-1">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                      <card.icon size={22} />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                      OUTCOME 0{idx + 1}
                    </span>
                    <h4 className="font-display font-bold text-xl text-primary mb-3">
                      {card.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 9 — WOMEN AT THE CENTRE
          Skills that can become livelihoods + 150 Women SHG Milestone
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-b border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-14">
            <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-5">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block font-mono">
                WOMEN AT THE CENTRE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Skills that can become livelihoods
              </h2>
              <div className="space-y-3 text-muted-foreground text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Women’s Self Help Groups are an important part of Brij-Surabhi.
                </p>
                <p>
                  Training women to make products from locally available materials can create opportunities for:
                </p>
              </div>

              {/* 5 Opportunity Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
                {[
                  "Skill Development",
                  "Group Production",
                  "Product Making",
                  "Small Enterprise",
                  "Income Generation",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAF7F2] border border-[#EAE2D5] text-foreground font-medium"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </AnimeReveal>

            {/* Documented Milestone Callout: 150 women from 10 SHGs */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
              <div className="clay-card rounded-3xl p-8 border border-[#E0EDF7] bg-[#F4F8FC] space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#E5F0FA] text-[#3B82C4] flex items-center justify-center">
                  <Award size={24} />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3B82C4] block">
                  DOCUMENTED TRADE SHOW MILESTONE
                </span>
                <h4 className="font-display font-bold text-2xl text-primary leading-snug">
                  150 Women from 10 SHGs
                </h4>
                <p className="text-xs sm:text-sm text-foreground/80 font-light leading-relaxed">
                  Handcrafted products created by 150 women across 10 Self Help Groups were showcased at the <strong>Uttar Pradesh International Trade Show</strong>, gaining prominent public recognition and commercial validation.
                </p>
                <div className="pt-2 border-t border-[#D0E2F0] text-[11px] font-mono text-muted-foreground">
                  *Recorded in official Khajani exhibition documentation.
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 10 — BRIJ-SURABHI IN PRACTICE (Photographic Gallery with Lightbox)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background border-b border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <AnimeReveal variant="fade-up" className="max-w-2xl">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                HANDS AT WORK
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                Brij-Surabhi in practice
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#C48332] mt-1 font-normal">
                Hands at work, from raw material to finished product
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm font-light leading-relaxed mt-2">
                Click any photograph to view high-resolution details of women's SHGs, flower processing, and cow-dung craft making.
              </p>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150}>
              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Eye size={14} className="text-accent" />
                <span>{galleryPhotos.length} Documented Field Photographs</span>
              </div>
            </AnimeReveal>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPhotos.map((photo, idx) => (
              <AnimeReveal key={photo.title} variant="fade-up" delay={idx * 70}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="rounded-2xl overflow-hidden bg-card border border-border/80 group cursor-pointer hover:border-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
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
          SECTION 11 — ROOTED IN BRAJ & CONNECTED WORK
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-b border-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Rooted in Braj statement */}
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              ROOTED IN BRAJ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
              Local materials. Local knowledge. Local opportunity.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base font-light leading-relaxed mt-4">
              Brij-Surabhi shows how environmental responsibility can connect naturally with the culture and everyday resources of Braj. The project is not simply about recycling.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-bold text-accent">
              <span>Local Resources</span>
              <span>→</span>
              <span>Practical Skills</span>
              <span>→</span>
              <span>Useful Products</span>
              <span>→</span>
              <span>Livelihood Opportunities</span>
            </div>
          </AnimeReveal>

          {/* Connected Work Cards (3 Links) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Link 1: Culture & Heritage */}
            <AnimeReveal variant="fade-up" delay={100}>
              <Link
                to="/culture"
                className="clay-card rounded-3xl p-7 flex flex-col justify-between h-full border border-border/80 hover:border-accent/40 hover:shadow-lg transition-all group hover:-translate-y-1 block"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Flower2 size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent block mb-1">
                    HERITAGE OVERLAP
                  </span>
                  <h3 className="font-display font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                    Explore Culture &amp; Heritage
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Discover how sacred traditions, folk crafts, and community worship intersect in Mathura and Braj.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-border flex items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors">
                  <span>Explore Heritage</span>
                  <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>

            {/* Link 2: Royal Sanjhi Art */}
            <AnimeReveal variant="fade-up" delay={200}>
              <Link
                to="/projects/royal-sanjhi"
                className="clay-card rounded-3xl p-7 flex flex-col justify-between h-full border border-border/80 hover:border-accent/40 hover:shadow-lg transition-all group hover:-translate-y-1 block"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FDF8F3] text-[#C48332] border border-[#F3E5D5] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C48332] block mb-1">
                    SANJHI / COW-DUNG WORK
                  </span>
                  <h3 className="font-display font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                    Explore Royal Sanjhi Art
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Explore the delicate paper-cutting art and its contemporary integration onto organic gaumaya materials.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-border flex items-center text-xs font-bold uppercase tracking-wider text-[#C48332] group-hover:text-primary transition-colors">
                  <span>Explore Sanjhi Art</span>
                  <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>

            {/* Link 3: Brij-Seva */}
            <AnimeReveal variant="fade-up" delay={300}>
              <Link
                to="/projects/brij-seva"
                className="clay-card rounded-3xl p-7 flex flex-col justify-between h-full border border-border/80 hover:border-accent/40 hover:shadow-lg transition-all group hover:-translate-y-1 block"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E6F3E5] text-[#4E9954] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Heart size={20} />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4E9954] block mb-1">
                    COMMUNITY &amp; ENVIRONMENT
                  </span>
                  <h3 className="font-display font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors">
                    Explore Brij-Seva
                  </h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">
                    Read about community cleanliness, water seva, tree plantation, and grassroots civic engagement across Braj.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-border flex items-center text-xs font-bold uppercase tracking-wider text-[#4E9954] group-hover:text-primary transition-colors">
                  <span>Explore Brij-Seva</span>
                  <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SECTION 12 — INTERESTED IN BRIJ-SURABHI?
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-primary text-primary-foreground relative overflow-hidden shadow-xl">
            <AuroraBackground variant="dark" intensity={0.5} />

            <div className="relative z-10 max-w-3xl">
              <span className="text-secondary text-xs font-mono font-bold tracking-[0.2em] uppercase block mb-3">
                COMMUNITY &amp; SHG PARTNERSHIP
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-snug mb-4">
                Interested in Brij-Surabhi?
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/85 font-light leading-relaxed mb-8">
                Women’s groups, institutions, community organisations and partners can connect with Khajani to learn more about training, product development and collaboration opportunities.
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
      <section className="py-14 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimeReveal variant="fade-up">
            <h4 className="text-xl sm:text-2xl font-serif italic text-primary font-medium mb-2">
              “Use what is available. Create what is useful.”
            </h4>
            <div className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#C48332]">
              Resources · Skills · Products · Livelihoods
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

export default BrijSurabhiPage;
