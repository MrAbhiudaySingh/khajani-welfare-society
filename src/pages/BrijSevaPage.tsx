import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import MediaLightbox from "@/components/MediaLightbox";
import {
  Sparkles,
  ArrowRight,
  Droplets,
  Heart,
  TreePine,
  Users,
  Sun,
  HandHeart,
  Calendar,
  Gift,
  CheckCircle2,
  Smile,
  GraduationCap,
  Building,
  ShieldCheck,
  Compass,
  ArrowUpRight,
  Share2,
  Clock,
  Layers
} from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
  tag: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "/images/projects/brij-seva-jal.jpg",
    caption: "Jal Seva: Clean drinking water distribution during peak summer months in Mathura",
    tag: "Jal Seva",
  },
  {
    url: "/images/projects/daan-utsav.jpg",
    caption: "Daan Utsav: Mobilizing useful household items, blankets, and supplies for local families",
    tag: "Daan Utsav",
  },
  {
    url: "/images/projects/plantation-drive.jpg",
    caption: "Plantation Drive: Community volunteers planting native shade and fruit trees across Braj",
    tag: "Plantation Drive",
  },
  {
    url: "/images/projects/brij-seva-plantation.jpg",
    caption: "Sapling care and environmental awareness with students and community members",
    tag: "Environmental Care",
  },
  {
    url: "/images/projects/brij-seva-icon.jpg",
    caption: "Volunteers gathering to prepare seasonal relief and water distribution materials",
    tag: "Volunteer Action",
  },
  {
    url: "/images/get-involved/volunteer.jpg",
    caption: "Youth and community volunteers actively participating in grassroots seva drives",
    tag: "Community Participation",
  },
];

const BrijSevaPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    document.title = "Brij-Seva | Community Service & Volunteering in Mathura | Khajani";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Brij-Seva brings together Khajani Welfare Society's community-service work in Mathura and Braj, including Jal Seva, Daan Utsav, plantation drives and volunteering."
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
          <span className="text-secondary font-medium">Brij-Seva</span>
        </div>
      </nav>

      {/* ── Screen 1: Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-primary text-white overflow-hidden py-20 lg:py-28">
        <AuroraBackground variant="dark" intensity={1.1} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/brij-seva-jal.jpg"
            alt="Brij-Seva community service initiative"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-secondary border border-white/15 backdrop-blur-md mb-6">
              <Sparkles size={13} className="text-secondary" />
              Community Service Rooted in Everyday Needs
            </span>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              BRIJ-SEVA
            </h1>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={200}>
            <p className="text-lg sm:text-xl lg:text-2xl font-serif italic text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 font-light">
              Community service rooted in everyday needs
            </p>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={300}>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Brij-Seva brings together Khajani Welfare Society’s community-service initiatives across Mathura and Braj. From providing drinking water during the summer and organising giving initiatives to plantation drives, Brij-Seva responds to simple but important needs through practical community action.
            </p>
          </AnimeReveal>

          {/* 4 Pillars Header Bar */}
          <AnimeReveal variant="fade-up" delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-2xl py-3 px-6 max-w-3xl mx-auto backdrop-blur-sm shadow-lg mb-8">
              <span className="flex items-center gap-1.5 text-secondary font-semibold">
                <Droplets size={14} /> Jal Seva
              </span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-secondary font-semibold">
                <Gift size={14} /> Daan Utsav
              </span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-secondary font-semibold">
                <TreePine size={14} /> Plantation Drives
              </span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="flex items-center gap-1.5 text-secondary font-semibold">
                <Users size={14} /> Community Participation
              </span>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={500}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/get-involved?tab=volunteer"
                className="btn-3d-accent px-7 py-3 text-xs uppercase font-bold tracking-widest shadow-xl flex items-center gap-2"
              >
                <span>Volunteer with Khajani</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="btn-3d-outline px-7 py-3 text-xs uppercase font-bold tracking-widest text-white border-white/30 hover:bg-white/10"
              >
                Contact Khajani
              </Link>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 2: Seva Through Simple Actions ── */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Everyday Needs & Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
                Seva through simple actions
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-6">
                Small acts can make a meaningful difference
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Not every community need requires a large programme. Sometimes what matters is being present at the right time—with drinking water during extreme summer heat, useful items for families who need them, or people coming together to plant and care for trees.
              </p>
              <p className="text-sm sm:text-base text-primary font-medium mt-4">
                Brij-Seva gives these community initiatives a common home within Khajani.
              </p>
            </div>
          </AnimeReveal>

          {/* 3 Core Ground Realities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="clay-card p-6 rounded-2xl h-full border border-border/60 hover:border-accent/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Sun size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">
                    Timely Relief
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Deploying immediate drinking water when heat waves strike, ensuring pilgrims, commuters, and daily wage workers stay hydrated.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-bold text-accent uppercase tracking-wider">
                  Summer Action
                </div>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={200}>
              <div className="clay-card p-6 rounded-2xl h-full border border-border/60 hover:border-accent/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                    <Gift size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">
                    Dignified Giving
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Directing usable items and essential supplies toward families and individuals who can immediately put them to good use.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-bold text-accent uppercase tracking-wider">
                  Useful Sharing
                </div>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={300}>
              <div className="clay-card p-6 rounded-2xl h-full border border-border/60 hover:border-accent/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                    <TreePine size={24} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">
                    Ecological Care
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Planting native saplings and fostering long-term environmental stewardship with community guardianship.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-bold text-accent uppercase tracking-wider">
                  Green Futures
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Screen 3: Fast-Scanning Visual Strip (Different needs. Different actions.) ── */}
      <section className="py-14 bg-primary text-white relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.9} />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-10">
              <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-2">
                Five-Second Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Different needs. Different actions.
              </h2>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Summer / Jal Seva */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="bg-white/10 hover:bg-white/15 transition-colors border border-white/15 rounded-2xl p-5 text-center flex flex-col justify-between h-full backdrop-blur-sm">
                <div>
                  <div className="w-10 h-10 rounded-full bg-blue-400/20 text-blue-300 flex items-center justify-center mx-auto mb-3">
                    <Sun size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-secondary block mb-1">
                    SUMMER
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    Jal Seva
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Providing drinking water during extreme summer heat.
                  </p>
                </div>
                <span className="inline-block mt-4 text-[10px] uppercase font-bold tracking-wider text-secondary/90">
                  Water Relief →
                </span>
              </div>
            </AnimeReveal>

            {/* Community Need / Daan Utsav */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="bg-white/10 hover:bg-white/15 transition-colors border border-white/15 rounded-2xl p-5 text-center flex flex-col justify-between h-full backdrop-blur-sm">
                <div>
                  <div className="w-10 h-10 rounded-full bg-rose-400/20 text-rose-300 flex items-center justify-center mx-auto mb-3">
                    <Gift size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-secondary block mb-1">
                    COMMUNITY NEED
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    Daan Utsav
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Sharing useful resources and dignified support.
                  </p>
                </div>
                <span className="inline-block mt-4 text-[10px] uppercase font-bold tracking-wider text-secondary/90">
                  Sharing Support →
                </span>
              </div>
            </AnimeReveal>

            {/* Environment / Plantation Drives */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="bg-white/10 hover:bg-white/15 transition-colors border border-white/15 rounded-2xl p-5 text-center flex flex-col justify-between h-full backdrop-blur-sm">
                <div>
                  <div className="w-10 h-10 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center mx-auto mb-3">
                    <TreePine size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-secondary block mb-1">
                    ENVIRONMENT
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    Plantation Drives
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Planting trees and encouraging environmental care.
                  </p>
                </div>
                <span className="inline-block mt-4 text-[10px] uppercase font-bold tracking-wider text-secondary/90">
                  Green Action →
                </span>
              </div>
            </AnimeReveal>

            {/* Participation / Volunteering */}
            <AnimeReveal variant="fade-up" delay={400}>
              <div className="bg-white/10 hover:bg-white/15 transition-colors border border-white/15 rounded-2xl p-5 text-center flex flex-col justify-between h-full backdrop-blur-sm">
                <div>
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center mx-auto mb-3">
                    <Users size={20} />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-secondary block mb-1">
                    PARTICIPATION
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    Volunteering
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Bringing people together around community action.
                  </p>
                </div>
                <span className="inline-block mt-4 text-[10px] uppercase font-bold tracking-wider text-secondary/90">
                  Join Hands →
                </span>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Screen 4: Jal Seva (Drinking water during the summer months) ── */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <AnimeReveal variant="fade-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 mb-3">
                  <Droplets size={14} /> Summer Relief
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-2">
                  Jal Seva
                </h2>
                <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                  Drinking water during the summer months
                </p>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Providing access to drinking water during Mathura’s hot summer months is one of the practical community activities carried out through Brij-Seva.
                  </p>
                  {/* The Core Idea */}
                  <div className="clay-card p-4 rounded-xl border-l-4 border-accent bg-accent/5 my-4">
                    <p className="font-display text-lg font-bold text-primary italic">
                      “Water where it is needed. When it is needed.”
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Built around direct access, hygiene, and volunteer service during peak daytime temperatures.
                    </p>
                  </div>
                  <p>
                    The initiative deploys clean, chilled drinking-water points and distribution stalls along busy transit points, market corridors, and pilgrim routes where shade and water are most urgently needed.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-border/60">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    <span>Water Distribution</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    <span>Drinking-Water Stalls</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    <span>Volunteers Serving Water</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-primary">
                    <CheckCircle2 size={14} className="text-accent shrink-0" />
                    <span>Community Participation</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground/80 italic mt-4">
                  Annual campaigns and specific distribution points can be added and expanded through Khajani’s community volunteer networks.
                </p>
              </AnimeReveal>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6">
              <AnimeReveal variant="fade-left" delay={150}>
                <div
                  onClick={() => openLightbox(0)}
                  className="clay-card rounded-2xl overflow-hidden group cursor-pointer border border-border/60 hover:border-accent/40 shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src="/images/projects/brij-seva-jal.jpg"
                      alt="Jal Seva drinking water distribution"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-secondary block">
                        Direct Community Action
                      </span>
                      <p className="text-xs font-medium mt-0.5 text-white/90">
                        Volunteers serving clean drinking water to commuters and pilgrims
                      </p>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Screen 5: Daan Utsav (Giving what can be useful to someone else) ── */}
      <section className="py-20 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <AnimeReveal variant="fade-right" delay={150}>
                <div
                  onClick={() => openLightbox(1)}
                  className="clay-card rounded-2xl overflow-hidden group cursor-pointer border border-border/60 hover:border-accent/40 shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src="/images/projects/daan-utsav.jpg"
                      alt="Daan Utsav community giving"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-secondary block">
                        Festival of Giving
                      </span>
                      <p className="text-xs font-medium mt-0.5 text-white/90">
                        Mobilizing clothes, blankets, and essential household utility items
                      </p>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <AnimeReveal variant="fade-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 mb-3">
                  <Gift size={14} /> Shared Resources
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-2">
                  Daan Utsav
                </h2>
                <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                  Giving what can be useful to someone else
                </p>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Daan Utsav brings people together around the simple act of giving. Through these initiatives, useful items and support can reach people and communities who need them.
                  </p>
                  <p>
                    The focus should remain on usefulness and participation, rather than dramatic charity language.
                  </p>
                </div>

                {/* 4 Pillars of Daan Utsav */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <div className="clay-card p-3.5 rounded-xl border border-border/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                      GIVE
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Contribute something useful.
                    </p>
                  </div>
                  <div className="clay-card p-3.5 rounded-xl border border-border/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                      CONNECT
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Bring people and community organisations together.
                    </p>
                  </div>
                  <div className="clay-card p-3.5 rounded-xl border border-border/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                      SHARE
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Direct resources towards people who can use them.
                    </p>
                  </div>
                  <div className="clay-card p-3.5 rounded-xl border border-border/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                      PARTICIPATE
                    </span>
                    <p className="text-xs text-muted-foreground">
                      Make giving a community activity.
                    </p>
                  </div>
                </div>

                <div className="mt-5 text-center sm:text-left text-xs font-bold uppercase tracking-widest text-primary/80">
                  Give · Share · Participate
                </div>
              </AnimeReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Screen 6: Plantation Drive (Plant today. Care for tomorrow.) ── */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <AnimeReveal variant="fade-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 mb-3">
                  <TreePine size={14} /> Environmental Action
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-2">
                  Plantation Drive
                </h2>
                <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                  Plant today. Care for tomorrow.
                </p>
                <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Plantation activities are another part of Brij-Seva’s community work. Khajani brings people together to plant trees and encourage greater awareness of the environment around them.
                  </p>
                  <p>
                    The section remains straightforward: planting native saplings, nurturing growth, and building environmental responsibility into community consciousness.
                  </p>
                </div>

                {/* 4 Steps */}
                <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-border/50">
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/40">
                    <span className="text-[11px] font-bold text-primary block uppercase tracking-wider mb-0.5">
                      Plant Trees
                    </span>
                    <p className="text-[11px] text-muted-foreground">
                      Planting native, hardy shade and fruit saplings.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/40">
                    <span className="text-[11px] font-bold text-primary block uppercase tracking-wider mb-0.5">
                      Involve People
                    </span>
                    <p className="text-[11px] text-muted-foreground">
                      Mobilizing youth, families, and neighborhood groups.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/40">
                    <span className="text-[11px] font-bold text-primary block uppercase tracking-wider mb-0.5">
                      Build Awareness
                    </span>
                    <p className="text-[11px] text-muted-foreground">
                      Instilling respect for water, green canopy, and local ecology.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-muted/40 border border-border/40">
                    <span className="text-[11px] font-bold text-primary block uppercase tracking-wider mb-0.5">
                      Encourage Care
                    </span>
                    <p className="text-[11px] text-muted-foreground">
                      Ensuring post-planting guardianship and regular watering.
                    </p>
                  </div>
                </div>

                <div className="mt-5 text-xs font-bold uppercase tracking-widest text-emerald-800">
                  Plant Trees · Involve People · Build Awareness · Encourage Care
                </div>
              </AnimeReveal>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6">
              <AnimeReveal variant="fade-left" delay={150}>
                <div
                  onClick={() => openLightbox(2)}
                  className="clay-card rounded-2xl overflow-hidden group cursor-pointer border border-border/60 hover:border-accent/40 shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src="/images/projects/plantation-drive.jpg"
                      alt="Plantation drive with local volunteers"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-secondary block">
                        Real Participation
                      </span>
                      <p className="text-xs font-medium mt-0.5 text-white/90">
                        Community members and volunteers planting saplings across open ground
                      </p>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Screen 7: Community Participation (Seva becomes stronger when people take part) ── */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Collective Action
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Community participation
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                Seva becomes stronger when people take part
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Brij-Seva is not intended to be presented as Khajani doing something for a passive community. Its stronger story is people participating together.
              </p>
            </div>
          </AnimeReveal>

          {/* 6 Participant Groups */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {[
              { title: "Volunteers", desc: "Active youth & citizens", icon: Users },
              { title: "Local Communities", desc: "Neighborhood residents", icon: Building },
              { title: "Students", desc: "School & college youth", icon: GraduationCap },
              { title: "Institutions", desc: "Civic & social groups", icon: Layers },
              { title: "Supporters", desc: "Resource contributors", icon: HandHeart },
              { title: "Khajani Team", desc: "Field coordinators", icon: ShieldCheck },
            ].map((grp, i) => (
              <AnimeReveal key={grp.title} variant="fade-up" delay={i * 70}>
                <div className="clay-card p-4 rounded-xl text-center flex flex-col items-center h-full border border-border/50 hover:border-accent/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-2">
                    <grp.icon size={18} />
                  </div>
                  <h4 className="text-xs font-bold text-primary mb-0.5">{grp.title}</h4>
                  <p className="text-[11px] text-muted-foreground">{grp.desc}</p>
                </div>
              </AnimeReveal>
            ))}
          </div>

          <AnimeReveal variant="fade-up" delay={400}>
            <div className="text-center">
              <Link
                to="/get-involved?tab=volunteer"
                className="btn-3d-accent px-8 py-3.5 text-xs uppercase font-bold tracking-widest inline-flex items-center gap-2 shadow-lg"
              >
                <span>VOLUNTEER WITH KHAJANI</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 8: Seva in Mathura & Braj (Local action, close to home) ── */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
              Grassroots Context
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
              Seva in Mathura & Braj
            </h2>
            <p className="text-lg font-serif italic text-accent font-semibold mb-6">
              Local action, close to home
            </p>
            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed text-left sm:text-center">
              <p>
                Brij-Seva reflects Khajani’s roots in Mathura and its connection with the communities around it. Rather than defining community service through one fixed activity, the programme allows Khajani to respond to different local needs through suitable initiatives.
              </p>
              <p>
                That flexibility is important to preserve on the website because future community-service activities can be added under Brij-Seva through the CMS without creating a new project page each time.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 9: Brij-Seva in Pictures (Gallery with Lightbox) ── */}
      <section className="py-20 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Visual Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Brij-Seva in pictures
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                People coming together
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
                Real community activity telling the story—avoiding staged imagery or generic stock photos. Click any photograph to view in full resolution.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <AnimeReveal key={img.url} variant="fade-up" delay={i * 80}>
                <div
                  onClick={() => openLightbox(i)}
                  className="clay-card rounded-2xl overflow-hidden group cursor-pointer border border-border/60 hover:border-accent/50 shadow-md hover:shadow-xl transition-all h-full flex flex-col"
                >
                  <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                    <img
                      src={img.url}
                      alt={img.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-xs font-medium text-white/90 underline">
                        Click to enlarge photo
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-sm">
                      {img.tag}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-primary font-medium leading-relaxed">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-muted-foreground/80 font-medium">
            Jal Seva · Water Distribution · Daan Utsav · Distribution Activities · Plantation Drives · Volunteers · Community Participation · Group Activities
          </div>
        </div>
      </section>

      {/* ── Screen 10: Want to take part? (Prominent Volunteer CTA) ── */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.1} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-secondary border border-white/15 mb-4">
              <HandHeart size={14} className="text-secondary" /> Get Involved
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              Want to take part?
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-white/90 font-light mb-6">
              Seva is something people can do together
            </p>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Individuals, schools, institutions, community groups and organisations can connect with Khajani to participate in community-service initiatives.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/get-involved?tab=volunteer"
                className="btn-3d-accent px-8 py-3.5 text-xs uppercase font-bold tracking-widest flex items-center gap-2 shadow-2xl"
              >
                <span>VOLUNTEER →</span>
              </Link>
              <Link
                to="/contact"
                className="btn-3d-outline px-8 py-3.5 text-xs uppercase font-bold tracking-widest text-white border-white/40 hover:bg-white/10"
              >
                CONTACT KHAJANI →
              </Link>
              <Link
                to="/get-involved"
                className="btn-3d-outline px-8 py-3.5 text-xs uppercase font-bold tracking-widest text-white border-white/40 hover:bg-white/10"
              >
                WORK WITH US →
              </Link>
            </div>
            <p className="text-xs text-white/60 mt-6 italic">
              Connecting to Get Involved with Brij-Seva pre-selected for volunteer coordination.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 11: Related Work ── */}
      <section className="py-16 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-10">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-1">
                Connected Grassroots Strands
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
                Related Work
              </h2>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For community health */}
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="clay-card p-6 rounded-2xl border border-border/60 hover:border-accent/40 transition-all flex flex-col justify-between h-full group">
                <div>
                  <span className="text-[11px] font-bold text-rose-700 uppercase tracking-wider block mb-1">
                    For Community Health
                  </span>
                  <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    Brij-Sangini
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    Menstrual hygiene awareness, sanitary napkin access, safe disposal, and regular voluntary blood donation camps across Mathura and Braj.
                  </p>
                </div>
                <Link
                  to="/projects/brij-sangini"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                >
                  <span>Explore Brij-Sangini →</span>
                </Link>
              </div>
            </AnimeReveal>

            {/* For sustainable livelihoods */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="clay-card p-6 rounded-2xl border border-border/60 hover:border-accent/40 transition-all flex flex-col justify-between h-full group">
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                    For Sustainable Community Livelihoods
                  </span>
                  <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    Brij-Surabhi
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    Responsible natural resource use, cow dung crafts, and temple flower reuse by women’s Self Help Groups across Braj.
                  </p>
                </div>
                <Link
                  to="/projects/brij-surabhi"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                >
                  <span>Explore Brij-Surabhi →</span>
                </Link>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Screen 12: Closing Statement ── */}
      <section className="py-16 bg-cream-light text-center border-t border-border/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimeReveal variant="fade-up">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-2 italic">
              “Seva begins with showing up.”
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mt-3">
              Water · Giving · Environment · Community
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* Lightbox Component */}
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

export default BrijSevaPage;
