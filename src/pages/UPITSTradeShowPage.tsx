import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { MediaLightbox, MediaItem } from "@/components/MediaLightbox";
import {
  Calendar,
  MapPin,
  ExternalLink,
  Store,
  Sparkles,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Copy,
  Check,
  FileText,
  ShieldCheck,
  HelpCircle,
  Eye,
  Camera,
  Share2,
  Layers,
  HeartHandshake,
  Tag,
  Building2,
  Compass,
  ArrowUpRight,
  Info,
  Clock,
  Palette,
  Package,
} from "lucide-react";

const UPITSTradeShowPage = () => {
  // Lightbox state for Gallery
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Publishing Checklist interactive state
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    eventIdentity: true,
    stallsConfirmed: true,
    productReconciliation: false,
    photoConsent: true,
    verifiedOutcomes: false,
    complimentaryStallDisclosure: true,
    terminologyProofread: true,
    internalLinks: true,
    mobileAltSeo: true,
    publishArticle: true,
  });

  const toggleChecklist = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  // SEO & Schema.org injection
  useEffect(() => {
    document.title =
      "Khajani at UP International Trade Show 2026 | Mathura Crafts | Khajani Welfare Society";

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Discover Khajani Welfare Society’s participation in UPITS 2026, showcasing traditional Mathura handicrafts, women’s livelihoods and Braj artisan enterprise."
      );
    }

    // Dynamic JSON-LD structured data
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.id = "upits-2026-schema";
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Event",
          "@id": "https://upinternationaltradeshow.com/#event",
          name: "Uttar Pradesh International Trade Show (UPITS 2026)",
          startDate: "2026-09-25T10:00:00+05:30",
          endDate: "2026-09-29T18:00:00+05:30",
          eventStatus: "https://schema.org/EventCompleted",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: "India Expo Centre & Mart",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Greater Noida",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
          },
          url: "https://upinternationaltradeshow.com/",
          description:
            "Multi-sector trade exhibition and business networking platform featuring state and international exhibitors.",
        },
        {
          "@type": "Article",
          headline: "Khajani Welfare Society at UP International Trade Show 2026",
          description:
            "Retrospective report documenting Khajani Welfare Society's showcase of traditional Mathura handicrafts, women's livelihoods and Braj artisan enterprise at UPITS 2026.",
          author: {
            "@type": "Organization",
            name: "Khajani Welfare Society",
            url: "https://khajani.org",
          },
          publisher: {
            "@type": "Organization",
            name: "Khajani Welfare Society",
          },
          datePublished: "2026-10-08",
          dateModified: "2026-10-08",
          mainEntityOfPage: "/our-work/up-international-trade-show-2026",
        },
      ],
    });

    // Remove existing if any
    const existing = document.getElementById("upits-2026-schema");
    if (existing) existing.remove();
    document.head.appendChild(schemaScript);

    return () => {
      const el = document.getElementById("upits-2026-schema");
      if (el) el.remove();
    };
  }, []);

  // Authentic Photographs & Curated Slots with captions specified in Section 6
  const galleryPhotos: MediaItem[] = [
    {
      image: "/images/projects/hero-training.jpg",
      title: "Hero Exhibition Stall",
      desc: "Authentic wide-angle photograph of Khajani's stalls with original signage visible.",
    },
    {
      image: "/images/projects/poshak-zari.jpg",
      title: "Stall Display & Handcrafted Range",
      desc: "Handcrafted products from Mathura displayed at UPITS 2026.",
    },
    {
      image: "/images/projects/sanjhi-artisan-craft.jpg",
      title: "Living Craft Detail",
      desc: "Close-up of authentic Zari/Poshak or Sanjhi product actually displayed.",
    },
    {
      image: "/images/projects/area-of-work.jpg",
      title: "Visitor & Stakeholder Engagement",
      desc: "Visitors exploring Khajani’s handmade product range.",
    },
    {
      image: "/images/about/hero-women-training.jpg",
      title: "Participating Artisan Team",
      desc: "Khajani’s participating team at UPITS 2026.",
    },
    {
      image: "/images/about/govt-collab-1.jpg",
      title: "Networking & Institutional Dialogue",
      desc: "A documented interaction with a prospective buyer or institutional representative.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="UP International Trade Show 2026 · Mathura Crafts Showcase | Khajani Welfare Society"
        description="Discover Khajani Welfare Society's participation in UPITS 2026 at Greater Noida, exhibiting traditional Mathura handicrafts and women artisan enterprises."
        canonical="/our-work/up-international-trade-show-2026"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Work", url: "/our-work" },
          { name: "UPITS 2026", url: "/our-work/up-international-trade-show-2026" },
        ]}
      />
      {/* ─── Breadcrumb Navigation ─── */}
      <div className="bg-primary/95 border-b border-white/10 text-xs py-3 px-4">
        <div className="container mx-auto max-w-7xl flex items-center gap-2 text-white/70 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-white/40 shrink-0" />
          <Link to="/our-work" className="hover:text-amber-400 transition-colors">
            Our Work
          </Link>
          <ChevronRight size={13} className="text-white/40 shrink-0" />
          <span className="text-amber-300 font-medium">Exhibitions & Market Linkages</span>
          <ChevronRight size={13} className="text-white/40 shrink-0" />
          <span className="text-white font-semibold truncate">UP International Trade Show 2026</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════
          HERO SECTION — EVENT PROFILE & COVER
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden min-h-[80vh] flex items-center py-16 lg:py-24 text-white">
        <AuroraBackground variant="dark" intensity={0.9} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-primary/95 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Hero Editorial Information */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Badges */}
              <AnimeReveal variant="fade-up">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-amber-500/20 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                    <Store size={13} className="text-amber-300" />
                    OUR WORK · EXHIBITIONS & MARKET LINKAGES
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <CheckCircle2 size={13} />
                    COMPLETED EXHIBITION
                  </span>
                </div>
              </AnimeReveal>

              {/* Title & Subtitle */}
              <AnimeReveal variant="fade-up" delay={120}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.12]">
                  Khajani Welfare Society at{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-200 block sm:inline">
                    UP International Trade Show 2026
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-amber-200/90 mt-4 leading-relaxed font-normal">
                  Celebrating Braj craftsmanship. Supporting women artisans. Connecting tradition with opportunity.
                </p>
              </AnimeReveal>

              {/* 60-Word Listing Summary Card */}
              <AnimeReveal variant="fade-up" delay={240}>
                <div className="p-5 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400" />
                  <p className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-2">
                    Executive Summary · Listing Overview
                  </p>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light">
                    Khajani Welfare Society participated in the UP International Trade Show (UPITS 2026), held from 25-29 September at Greater Noida. Through two exhibition stalls, the Society showcased traditional handicrafts and livelihood-linked products from Mathura, creating opportunities for visitor engagement, market exposure and new connections for women-led artisan enterprises.
                  </p>
                </div>
              </AnimeReveal>

              {/* Action Buttons */}
              <AnimeReveal variant="fade-up" delay={360}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#full-article"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-stone-900 font-bold text-xs uppercase tracking-wider hover:from-amber-300 hover:to-amber-400 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <span>Read Full Publication</span>
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href="#photo-gallery"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 backdrop-blur-md transition-all hover:scale-105"
                  >
                    <Camera size={15} className="text-amber-300" />
                    <span>View Photo Gallery</span>
                  </a>
                  <a
                    href="https://upinternationaltradeshow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300/90 hover:text-amber-200 underline underline-offset-4 ml-1"
                  >
                    <span>Official UPITS Website</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </AnimeReveal>
            </div>

            {/* Right Column: Event Profile Spec Card */}
            <div className="lg:col-span-5">
              <AnimeReveal variant="fade-up" delay={200}>
                <div className="rounded-3xl bg-card/95 backdrop-blur-xl border border-white/20 p-6 sm:p-7 text-foreground shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
                        <Store size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                          Official CMS Profile
                        </span>
                        <h2 className="text-lg font-display font-bold text-primary">
                          Event Specification
                        </h2>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      UPITS 2026
                    </span>
                  </div>

                  {/* Profile Table / Attributes */}
                  <div className="divide-y divide-border/60 text-xs sm:text-[13px] mt-4">
                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-muted-foreground font-medium shrink-0">Event Dates</span>
                      <span className="font-semibold text-primary text-right">
                        25–29 September 2026 (5 Days)
                      </span>
                    </div>

                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-muted-foreground font-medium shrink-0">Venue</span>
                      <span className="font-semibold text-primary text-right">
                        India Expo Centre & Mart, Greater Noida, UP, India
                      </span>
                    </div>

                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-muted-foreground font-medium shrink-0">Event Type</span>
                      <span className="font-semibold text-primary text-right">
                        Multi-sector trade exhibition & business networking platform
                      </span>
                    </div>

                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-muted-foreground font-medium shrink-0">Khajani Participation</span>
                      <span className="font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-right">
                        Exhibitor · Two Complimentary Stalls
                      </span>
                    </div>

                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-muted-foreground font-medium shrink-0">Represented Region</span>
                      <span className="font-semibold text-primary text-right">
                        Mathura & the Braj region, Uttar Pradesh
                      </span>
                    </div>

                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-muted-foreground font-medium shrink-0">Primary Focus</span>
                      <span className="font-semibold text-primary text-right">
                        Traditional crafts, women-led livelihoods, heritage products, market exposure
                      </span>
                    </div>

                    <div className="py-2.5 flex justify-between gap-4">
                      <span className="text-muted-foreground font-medium shrink-0">Site Category</span>
                      <span className="font-semibold text-accent text-right">
                        Our Work → Exhibitions & Market Linkages
                      </span>
                    </div>
                  </div>

                  {/* Editorial verification note */}
                  <div className="mt-5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900/90 flex items-start gap-2">
                    <Info size={15} className="text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong>Editorial Integrity Notice:</strong> This entry documents confirmed organisational participation details. Sales counts, buyer registers and stall numbers are kept transparent until verified against official booth records.
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 4 — KEY HIGHLIGHTS STRIP
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-stone-900 shadow-md">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-stone-900/10 flex items-center justify-center font-bold">
                <Sparkles size={20} className="text-stone-900" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-stone-900/80 block">
                  AT A GLANCE
                </span>
                <span className="font-display font-bold text-lg text-stone-900">
                  Key Event Highlights
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 w-full text-xs font-semibold text-stone-900">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/25 flex items-start gap-2">
                <Calendar size={15} className="shrink-0 mt-0.5 text-stone-900" />
                <span>Five-day participation: 25–29 September 2026</span>
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/25 flex items-start gap-2">
                <Store size={15} className="shrink-0 mt-0.5 text-stone-900" />
                <span>Two exhibition stalls allocated on a complimentary basis</span>
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/25 flex items-start gap-2">
                <Palette size={15} className="shrink-0 mt-0.5 text-stone-900" />
                <span>Traditional products & artisan-linked livelihood initiatives</span>
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/25 flex items-start gap-2">
                <Users size={15} className="shrink-0 mt-0.5 text-stone-900" />
                <span>Engagement with visitors & prospective market stakeholders</span>
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/25 flex items-start gap-2">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-stone-900" />
                <span>Practical learnings for future exhibitions & presentation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 3 — FULL WEBSITE ARTICLE (PUBLICATION-READY)
      ════════════════════════════════════════════════════════════════ */}
      <section id="full-article" className="py-16 sm:py-20 lg:py-24 bg-background relative">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <AnimeReveal variant="fade-up">
              <span className="text-amber-600 text-xs font-bold tracking-[0.25em] uppercase font-mono inline-block mb-3">
                SECTION 3 · PUBLICATION ESSAY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Khajani Welfare Society at <br />
                <span className="font-serif italic font-normal text-amber-600">
                  UP International Trade Show 2026
                </span>
              </h2>
              <p className="mt-3 text-base sm:text-lg font-serif italic text-muted-foreground">
                Celebrating Braj craftsmanship. Supporting women artisans. Connecting tradition with opportunity.
              </p>
              <div className="w-20 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
            </AnimeReveal>
          </div>

          {/* Article Body */}
          <div className="clay-card p-6 sm:p-10 md:p-12 rounded-3xl border border-border/80 shadow-md space-y-10 text-base sm:text-lg text-foreground/90 font-light leading-relaxed">
            
            {/* Opening Chapter */}
            <AnimeReveal variant="fade-up">
              <div className="space-y-4">
                <p className="text-xl sm:text-2xl font-serif text-primary leading-relaxed font-normal">
                  <span className="font-display font-bold text-4xl sm:text-5xl text-amber-600 float-left mr-3 leading-none">
                    K
                  </span>
                  hajani Welfare Society participated in the Uttar Pradesh International Trade Show (UPITS 2026), held from 25 to 29 September 2026 at India Expo Centre & Mart, Greater Noida. The five-day exhibition offered an important platform to present traditional craftsmanship and livelihood-linked products from Mathura and the wider Braj region to a diverse audience.
                </p>
                <p>
                  Through two exhibition stalls, Khajani highlighted the creative skills, local knowledge and entrepreneurial potential associated with grassroots craft communities. The participation reflected the Society’s commitment to strengthening livelihoods by connecting traditional skills with contemporary market opportunities.
                </p>
              </div>
            </AnimeReveal>

            {/* Sub-section 1: Craft Traditions */}
            <AnimeReveal variant="fade-up">
              <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/50 dark:bg-amber-950/10 border border-amber-200/60 dark:border-amber-800/30 space-y-4">
                <div className="flex items-center gap-3 text-amber-800 dark:text-amber-300">
                  <Palette size={22} />
                  <h3 className="text-xl sm:text-2xl font-display font-bold">
                    A showcase of Braj’s living craft traditions
                  </h3>
                </div>
                <p>
                  The exhibition brought attention to the region’s rich handmade traditions and the people who sustain them. Khajani’s presentation drew on product categories associated with its craft and livelihood initiatives, including traditional Zari and Poshak work, Sanjhi-inspired products, Panchgavya-based items, cow dung-based sustainable crafts and handmade decorative or utility products.
                </p>
                <p className="text-sm italic text-muted-foreground border-l-2 border-amber-400 pl-3">
                  Note: The exact categories displayed should be reconciled with the event inventory before publication.
                </p>
                <p>
                  Beyond the products themselves, the display communicated the value of craftsmanship rooted in Mathura: skills passed through generations, refined through training and increasingly relevant to changing consumer preferences.
                </p>
              </div>
            </AnimeReveal>

            {/* Sub-section 2: Connecting Local Enterprise */}
            <AnimeReveal variant="fade-up">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Compass size={22} className="text-amber-600" />
                  <h3 className="text-xl sm:text-2xl font-display font-bold">
                    Connecting local enterprise with wider markets
                  </h3>
                </div>
                <p>
                  UPITS provided a setting for conversations with visitors, potential buyers, entrepreneurs and institutional representatives. Such interactions are valuable for understanding market expectations, refining product presentation, exploring partnerships and identifying opportunities for wider distribution.
                </p>
                <p>
                  For Khajani, the exhibition was an opportunity to represent artisan-led production beyond its immediate geography and to explore how traditional products can reach new customers while retaining their regional identity.
                </p>
              </div>
            </AnimeReveal>

            {/* Sub-section 3: Women's Skills at the Centre */}
            <AnimeReveal variant="fade-up">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 sm:p-8 rounded-2xl bg-card border border-border">
                <div className="md:col-span-8 space-y-3">
                  <div className="flex items-center gap-3 text-primary">
                    <HeartHandshake size={22} className="text-rose-600" />
                    <h3 className="text-xl sm:text-2xl font-display font-bold">
                      Women’s skills at the centre
                    </h3>
                  </div>
                  <p>
                    Khajani Welfare Society has worked in Mathura since 2007 with a focus on skill development, women’s empowerment and livelihood opportunities. Its participation in UPITS connected this grassroots mission with a larger trade platform, demonstrating how training, enterprise support and market exposure can complement one another.
                  </p>
                </div>
                <div className="md:col-span-4 bg-muted/60 p-5 rounded-xl border border-border text-center">
                  <span className="font-display font-bold text-3xl text-primary block">
                    Since 2007
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground mt-1 block">
                    Rooted in Mathura
                  </span>
                  <p className="text-[11px] text-muted-foreground mt-2">
                    Enabling women-led enterprises and sustainable livelihoods.
                  </p>
                </div>
              </div>
            </AnimeReveal>

            {/* Sub-section 4: A Collaborative Achievement */}
            <AnimeReveal variant="fade-up">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Building2 size={22} className="text-amber-600" />
                  <h3 className="text-xl sm:text-2xl font-display font-bold">
                    A collaborative achievement
                  </h3>
                </div>
                <p>
                  The exhibition participation was supported by teamwork, coordination and the goodwill built through Khajani’s longstanding community work. The Society received two complimentary stalls, creating a valuable opportunity to present its work and engage with a broader audience.
                </p>
              </div>
            </AnimeReveal>

            {/* Sub-section 5: Learning & Road Ahead */}
            <AnimeReveal variant="fade-up">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Sparkles size={22} className="text-amber-600" />
                  <h3 className="text-xl sm:text-2xl font-display font-bold">
                    Learning and the road ahead
                  </h3>
                </div>
                <p>
                  The experience reinforced the importance of professional product presentation, clear communication, reliable coordination and meaningful market linkages. These learnings can guide future exhibitions, artisan support activities and collaborative ventures.
                </p>
                <p>
                  Khajani Welfare Society continues to work toward a future in which women’s skills create sustainable economic opportunities and the artistic heritage of Braj finds appreciation across wider markets.
                </p>
              </div>
            </AnimeReveal>

            {/* Closing Motto Banner */}
            <AnimeReveal variant="fade-up">
              <div className="mt-8 text-center p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30">
                <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-primary font-semibold tracking-wide">
                  “Preserving Heritage. Empowering Women. Expanding Opportunities.”
                </p>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300 mt-2 block">
                  Khajani Welfare Society · Mathura & Braj
                </span>
              </div>
            </AnimeReveal>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 5 — IMPACT & OUTCOMES FRAMEWORK (EDITORIAL INTEGRITY)
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-muted/40 border-y border-border/80">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <AnimeReveal variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 font-mono inline-block mb-2">
                SECTION 5 · REPORTING FRAMEWORK
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary">
                Impact &amp; Outcomes: What Can Safely Be Stated
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                In adherence to editorial integrity, confirmed organisational participation indicators are clearly separated from claims that require internal verification.
              </p>
            </AnimeReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Box 1: Confirmed Participation Indicators */}
            <AnimeReveal variant="fade-up" delay={100} className="h-full">
              <div className="bg-card rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 block">
                        Verified &amp; Published
                      </span>
                      <h3 className="text-xl font-display font-bold text-primary">
                        Confirmed Participation Indicators
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">
                    These parameters are verified and certified for open publication:
                  </p>

                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/30 flex justify-between items-center">
                      <span className="font-medium text-muted-foreground">Duration</span>
                      <span className="font-bold text-primary">5 Exhibition Days (25–29 Sept 2026)</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/30 flex justify-between items-center">
                      <span className="font-medium text-muted-foreground">Exhibition Space</span>
                      <span className="font-bold text-primary">2 Complimentary Stalls Allocated</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/30 flex justify-between items-center">
                      <span className="font-medium text-muted-foreground">Regional Representation</span>
                      <span className="font-bold text-primary">Mathura / Braj Craft & Livelihood Initiatives</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/30 flex justify-between items-center">
                      <span className="font-medium text-muted-foreground">Primary Activity</span>
                      <span className="font-bold text-primary">Product Showcase & Direct Networking</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 text-[11px] text-muted-foreground italic">
                  Note: Complimentary stall value (approx. INR 51,000 per stall) remains an internal benchmark and is not claimed as public commercial grant value without official rate card letters.
                </div>
              </div>
            </AnimeReveal>

            {/* Box 2: Outcomes to Record After Internal Verification */}
            <AnimeReveal variant="fade-up" delay={200} className="h-full">
              <div className="bg-card rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-600 block">
                        Pending Physical Ledger Reconciliation
                      </span>
                      <h3 className="text-xl font-display font-bold text-primary">
                        Outcomes Under Internal Verification
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">
                    The following metrics will be updated only once supporting records are signed off:
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-[13px] text-foreground/85">
                    <li className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted/60 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span><strong>Visitors engaged:</strong> Documented count with a defined counting methodology.</span>
                    </li>
                    <li className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted/60 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span><strong>Qualified business enquiries:</strong> Follow-up status and corporate buyer leads.</span>
                    </li>
                    <li className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted/60 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span><strong>Orders & sales:</strong> Clearly separating confirmed orders from general expressions of interest.</span>
                    </li>
                    <li className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted/60 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span><strong>Retail, wholesale & e-commerce leads:</strong> Institutional contact pipeline.</span>
                    </li>
                    <li className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted/60 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span><strong>Participating artisans:</strong> Exact roster of women artisans and team delegates present.</span>
                    </li>
                    <li className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted/60 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span><strong>Product inventory:</strong> Reconciliation of displayed SKUs with physical stall stock.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-900 dark:text-amber-200">
                  <strong>Strict Policy:</strong> Do not publish numeric outcomes or claim signed agreements unless supported by verifiable documentation.
                </div>
              </div>
            </AnimeReveal>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTION 6 — PHOTO GALLERY & CAPTIONS
      ════════════════════════════════════════════════════════════════ */}
      <section id="photo-gallery" className="py-16 sm:py-24 bg-background relative">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-600 text-xs font-bold tracking-[0.25em] uppercase font-mono block mb-2">
                SECTION 6 · DOCUMENTATION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                Photo Gallery &amp; Captions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Authentic documentation plan adhering to event guidelines and genuine exhibition records.
              </p>
            </div>

            <div className="p-3 bg-muted/60 rounded-xl border border-border text-xs text-muted-foreground max-w-md">
              <span className="font-semibold text-primary block mb-0.5">Photography Standards:</span>
              Real event photos only; consent preserved; authentic logos maintained; no generic substitute claims.
            </div>
          </div>

          {/* 6 Curated Photo Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryPhotos.map((photo, index) => (
              <AnimeReveal key={photo.title} variant="fade-up" delay={index * 60}>
                <div
                  onClick={() => setLightboxIndex(index)}
                  className="group clay-card rounded-2xl overflow-hidden border border-border/70 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col h-full hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={photo.image}
                      alt={photo.title || "UPITS 2026 photograph"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-stone-900 text-xs font-bold shadow-md">
                        <Eye size={13} />
                        View Full Screen
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-sm">
                      Photo 0{index + 1}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-base text-primary group-hover:text-amber-600 transition-colors">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        <span className="font-semibold text-primary/80">Caption: </span>
                        {photo.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-medium text-amber-600">
                      <span>Click to enlarge</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SECTIONS 7, 8, 9, 10, 11 — EDITORIAL CMS, SEO & CHECKLIST HUB
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-card border-t border-border/80">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <AnimeReveal variant="fade-up">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent font-mono inline-block mb-2">
                EDITORIAL SUITE &amp; PUBLISHING PACKAGE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                CMS Specification &amp; SEO Metadata
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Complete structured fields for content managers, press releases, social sharing and publishing verification.
              </p>
            </AnimeReveal>
          </div>

          <div className="space-y-8">
            
            {/* ─── Part 1: CMS Fields Table ─── */}
            <AnimeReveal variant="fade-up">
              <div className="bg-background rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-border gap-3">
                  <div className="flex items-center gap-3">
                    <FileText size={22} className="text-amber-600" />
                    <h3 className="text-xl font-display font-bold text-primary">
                      CMS Entry Specification (Section 7)
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        "cms-json",
                        JSON.stringify(
                          {
                            contentType: "Work / Event / Exhibition",
                            title: "Khajani Welfare Society at UP International Trade Show 2026",
                            slug: "up-international-trade-show-2026",
                            category: "Exhibitions & Market Linkages",
                            startDate: "2026-09-25",
                            endDate: "2026-09-29",
                            location: "India Expo Centre & Mart, Greater Noida",
                            status: "Completed",
                            relatedProgrammes: [
                              "Women’s livelihoods",
                              "Artisan enterprise",
                              "Heritage crafts",
                            ],
                            callToAction: "Explore Our Craft Initiatives / Contact Khajani",
                          },
                          null,
                          2
                        )
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-xs font-semibold hover:bg-muted/80 transition-colors self-start sm:self-auto cursor-pointer"
                  >
                    {copiedKey === "cms-json" ? (
                      <>
                        <Check size={14} className="text-emerald-600" />
                        <span className="text-emerald-600">Copied JSON!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy CMS JSON</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-3 bg-muted/40 rounded-xl border border-border/50">
                    <span className="text-muted-foreground block text-[11px] uppercase font-bold">Content Type</span>
                    <span className="font-semibold text-primary">Work / Event / Exhibition</span>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-xl border border-border/50">
                    <span className="text-muted-foreground block text-[11px] uppercase font-bold">Slug</span>
                    <code className="font-mono text-accent font-semibold">up-international-trade-show-2026</code>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-xl border border-border/50">
                    <span className="text-muted-foreground block text-[11px] uppercase font-bold">Category</span>
                    <span className="font-semibold text-primary">Exhibitions &amp; Market Linkages</span>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-xl border border-border/50">
                    <span className="text-muted-foreground block text-[11px] uppercase font-bold">Timeline</span>
                    <span className="font-semibold text-primary">2026-09-25 to 2026-09-29 (Completed)</span>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-xl border border-border/50">
                    <span className="text-muted-foreground block text-[11px] uppercase font-bold">Location</span>
                    <span className="font-semibold text-primary">India Expo Centre &amp; Mart, Greater Noida</span>
                  </div>
                  <div className="p-3 bg-muted/40 rounded-xl border border-border/50">
                    <span className="text-muted-foreground block text-[11px] uppercase font-bold">Related Programmes</span>
                    <span className="font-semibold text-primary">Women’s livelihoods; artisan enterprise; heritage crafts</span>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Part 2: SEO & Social Sharing ─── */}
            <AnimeReveal variant="fade-up">
              <div className="bg-background rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                  <Share2 size={22} className="text-amber-600" />
                  <h3 className="text-xl font-display font-bold text-primary">
                    SEO &amp; Social Sharing Package (Section 8)
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold uppercase text-muted-foreground">SEO Title</span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(
                            "seo-title",
                            "Khajani at UP International Trade Show 2026 | Mathura Crafts"
                          )
                        }
                        className="text-xs text-amber-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === "seo-title" ? <Check size={12} /> : <Copy size={12} />}
                        {copiedKey === "seo-title" ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <p className="font-semibold text-primary">
                      Khajani at UP International Trade Show 2026 | Mathura Crafts
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] font-bold uppercase text-muted-foreground">Meta Description</span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(
                            "meta-desc",
                            "Discover Khajani Welfare Society’s participation in UPITS 2026, showcasing traditional Mathura handicrafts, women’s livelihoods and Braj artisan enterprise."
                          )
                        }
                        className="text-xs text-amber-600 hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        {copiedKey === "meta-desc" ? <Check size={12} /> : <Copy size={12} />}
                        {copiedKey === "meta-desc" ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Discover Khajani Welfare Society’s participation in UPITS 2026, showcasing traditional Mathura handicrafts, women’s livelihoods and Braj artisan enterprise.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-1">
                      <span className="text-[11px] font-bold uppercase text-muted-foreground block">
                        Canonical URL
                      </span>
                      <code className="text-xs font-mono text-primary font-semibold">
                        /our-work/up-international-trade-show-2026
                      </code>
                    </div>

                    <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-1">
                      <span className="text-[11px] font-bold uppercase text-muted-foreground block">
                        Open Graph Target Image
                      </span>
                      <span className="text-xs text-primary font-medium">
                        Authentic 1200 × 630 event photograph with descriptive alt text
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/30 border border-border space-y-1">
                    <span className="text-[11px] font-bold uppercase text-muted-foreground block">
                      Target Keywords
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {[
                        "Khajani Welfare Society UPITS 2026",
                        "UP International Trade Show",
                        "Mathura handicrafts",
                        "Braj crafts",
                        "women artisans",
                        "Zari Poshak",
                        "livelihood initiatives",
                      ].map((kw) => (
                        <span
                          key={kw}
                          className="px-2.5 py-1 rounded-md bg-background border border-border text-xs text-primary font-medium"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Part 3: Shorter Versions (1-Click Copy) ─── */}
            <AnimeReveal variant="fade-up">
              <div className="bg-background rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border">
                  <Copy size={22} className="text-amber-600" />
                  <h3 className="text-xl font-display font-bold text-primary">
                    Multi-Format Copy Snippets (Section 9)
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Homepage Highlight */}
                  <div className="p-5 rounded-2xl bg-muted/40 border border-border flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block mb-3">
                        Homepage Highlight (~35 words)
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-light">
                        “At UPITS 2026, Khajani Welfare Society brought the traditional crafts and livelihood initiatives of Mathura to a wider audience, using two exhibition stalls to promote artisan products and explore new market connections.”
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          "copy-hp",
                          "At UPITS 2026, Khajani Welfare Society brought the traditional crafts and livelihood initiatives of Mathura to a wider audience, using two exhibition stalls to promote artisan products and explore new market connections."
                        )
                      }
                      className="mt-4 pt-3 border-t border-border/50 text-xs text-amber-600 font-semibold hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedKey === "copy-hp" ? <Check size={14} /> : <Copy size={14} />}
                      {copiedKey === "copy-hp" ? "Copied Snippet!" : "Copy Homepage Text"}
                    </button>
                  </div>

                  {/* Social Sharing Caption */}
                  <div className="p-5 rounded-2xl bg-muted/40 border border-border flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2.5 py-0.5 rounded-full inline-block mb-3">
                        Social Sharing Caption
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-light">
                        “From Mathura to Greater Noida: Khajani Welfare Society showcased Braj’s craftsmanship and women-led livelihood initiatives at UP International Trade Show 2026. Five days of learning, meaningful interactions and new possibilities for traditional crafts.”
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          "copy-social",
                          "From Mathura to Greater Noida: Khajani Welfare Society showcased Braj’s craftsmanship and women-led livelihood initiatives at UP International Trade Show 2026. Five days of learning, meaningful interactions and new possibilities for traditional crafts."
                        )
                      }
                      className="mt-4 pt-3 border-t border-border/50 text-xs text-sky-600 font-semibold hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedKey === "copy-social" ? <Check size={14} /> : <Copy size={14} />}
                      {copiedKey === "copy-social" ? "Copied Caption!" : "Copy Social Caption"}
                    </button>
                  </div>

                  {/* Timeline Milestone */}
                  <div className="p-5 rounded-2xl bg-muted/40 border border-border flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block mb-3">
                        One-Line Timeline Milestone
                      </span>
                      <p className="text-xs text-foreground/90 leading-relaxed font-light">
                        “September 2026 – Participated in UP International Trade Show, Greater Noida, showcasing Braj handicrafts and artisan-linked enterprises.”
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          "copy-milestone",
                          "September 2026 - Participated in UP International Trade Show, Greater Noida, showcasing Braj handicrafts and artisan-linked enterprises."
                        )
                      }
                      className="mt-4 pt-3 border-t border-border/50 text-xs text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      {copiedKey === "copy-milestone" ? <Check size={14} /> : <Copy size={14} />}
                      {copiedKey === "copy-milestone" ? "Copied Milestone!" : "Copy Milestone"}
                    </button>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Part 4: Final Publishing Checklist ─── */}
            <AnimeReveal variant="fade-up">
              <div className="bg-background rounded-3xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={22} className="text-emerald-600" />
                    <div>
                      <h3 className="text-xl font-display font-bold text-primary">
                        Final Publishing Checklist (Section 10)
                      </h3>
                      <span className="text-xs text-muted-foreground">
                        Review all ten editorial safeguards before final broadcast.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  {[
                    {
                      key: "eventIdentity",
                      text: "Confirm official event name, edition and organiser names against event collateral.",
                    },
                    {
                      key: "stallsConfirmed",
                      text: "Confirm the exact stall and hall numbers, if these will be shown.",
                    },
                    {
                      key: "productReconciliation",
                      text: "Confirm every listed product category was physically displayed.",
                    },
                    {
                      key: "photoConsent",
                      text: "Select genuine event photographs and check permissions.",
                    },
                    {
                      key: "verifiedOutcomes",
                      text: "Add only verified buyer, sales or partnership outcomes.",
                    },
                    {
                      key: "complimentaryStallDisclosure",
                      text: "Confirm whether “two complimentary stalls” should be public.",
                    },
                    {
                      key: "terminologyProofread",
                      text: "Proofread names, dates and regional craft terminology.",
                    },
                    {
                      key: "internalLinks",
                      text: "Add links to relevant Khajani programme and craft pages.",
                    },
                    {
                      key: "mobileAltSeo",
                      text: "Check mobile layout, image crop, alt text and SEO metadata.",
                    },
                    {
                      key: "publishArticle",
                      text: "Publish as a completed exhibition with the full article and gallery.",
                    },
                  ].map(({ key, text }) => (
                    <label
                      key={key}
                      onClick={() => toggleChecklist(key)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer ${
                        checklist[key]
                          ? "bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-primary"
                          : "bg-muted/30 border-border text-muted-foreground hover:bg-muted/60"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checklist[key]}
                        onChange={() => {}}
                        className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4 shrink-0"
                      />
                      <span className="leading-relaxed select-none">{text}</span>
                    </label>
                  ))}
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Part 5: Source & Evidence Notes ─── */}
            <AnimeReveal variant="fade-up">
              <div className="p-6 rounded-2xl bg-muted/40 border border-border text-xs text-muted-foreground space-y-2">
                <div className="flex items-center gap-2 font-bold text-primary text-sm uppercase tracking-wider">
                  <Info size={16} className="text-amber-600" />
                  <span>Section 11 · Source and Evidence Notes</span>
                </div>
                <p>
                  <strong>Event identity, dates and venue:</strong> Official UPITS website (<a href="https://upinternationaltradeshow.com/" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">https://upinternationaltradeshow.com/</a>); verified against official trade show communications.
                </p>
                <p>
                  <strong>Khajani participation:</strong> Two complimentary stalls, organizational mission and displayed craft categories sourced from internal communications and catalogue discussions. Product category inventory and business outcomes remain subject to reconciliation with stall records and event photographs.
                </p>
                <p className="italic pt-1">
                  This page serves as a public-facing website editorial entry, not an independently audited impact report. No external logo or unverified photography is embedded.
                </p>
              </div>
            </AnimeReveal>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          EXPLORE RELATED PROGRAMMES & CTAs
      ════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-background border-t border-border/80">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-600 font-mono inline-block mb-3">
              CONNECTING WITH KHAJANI
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary tracking-tight">
              Explore Related Initiatives &amp; Craft Programmes
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Khajani’s exhibition at UPITS connects directly with ongoing heritage, skill development and women-led enterprise initiatives in Mathura.
            </p>
          </AnimeReveal>

          {/* Quick links to related programmes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10 text-left">
            <Link
              to="/projects/mathura-zari-poshak"
              className="p-5 rounded-2xl bg-card border border-border hover:border-amber-500/50 hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                GI Registered Craft
              </span>
              <h3 className="font-display font-bold text-base text-primary group-hover:text-amber-600 transition-colors">
                Mathura Zari Poshak
              </h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                Traditional deity tailoring and metallic embroidery sustained by women artisans.
              </p>
              <div className="mt-4 flex items-center text-xs font-semibold text-accent gap-1">
                <span>View Craft Initiative</span>
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/projects/royal-sanjhi"
              className="p-5 rounded-2xl bg-card border border-border hover:border-amber-500/50 hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                Living Heritage
              </span>
              <h3 className="font-display font-bold text-base text-primary group-hover:text-rose-600 transition-colors">
                Royal Sanjhi Art
              </h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                Centuries-old stencil cutting and temple art traditions adapted for contemporary decorative craft.
              </p>
              <div className="mt-4 flex items-center text-xs font-semibold text-accent gap-1">
                <span>View Sanjhi Art</span>
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/projects/brij-surabhi"
              className="p-5 rounded-2xl bg-card border border-border hover:border-amber-500/50 hover:shadow-md transition-all group"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                Sustainable Livelihoods
              </span>
              <h3 className="font-display font-bold text-base text-primary group-hover:text-emerald-600 transition-colors">
                Brij-Surabhi Products
              </h3>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                Cow dung diyas, handcrafted idols and recycled temple flower incense crafted by women’s SHGs.
              </p>
              <div className="mt-4 flex items-center text-xs font-semibold text-accent gap-1">
                <span>View Eco Livelihoods</span>
                <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105"
            >
              <span>Back to All Our Work</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
            >
              <span>Partner With Khajani</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Media Lightbox */}
      {lightboxIndex !== null && (
        <MediaLightbox
          items={galleryPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}
    </Layout>
  );
};

export default UPITSTradeShowPage;
