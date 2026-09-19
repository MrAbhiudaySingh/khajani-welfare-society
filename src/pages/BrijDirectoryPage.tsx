import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import MediaLightbox from "@/components/MediaLightbox";
import {
  Sparkles,
  ArrowRight,
  Search,
  Users,
  Briefcase,
  Store,
  Scissors,
  Palette,
  Utensils,
  Sparkle,
  GraduationCap,
  Laptop,
  Building2,
  MapPin,
  Phone,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
  Share2,
  HeartHandshake,
  ShieldCheck,
  ChevronRight,
  Filter,
  X,
  PlusCircle,
  Clock,
  Eye,
  Send
} from "lucide-react";

interface BusinessListing {
  id: string;
  businessName: string;
  entrepreneurName: string;
  category: "Crafts" | "Fashion" | "Food" | "Beauty" | "Education" | "Professional Services" | "Other Businesses";
  offerDescription: string;
  location: string;
  phone?: string;
  whatsapp?: string;
  image: string;
  tag: string;
  verified: boolean;
}

const INITIAL_DIRECTORY_LISTINGS: BusinessListing[] = [
  {
    id: "sanjhi-creations-radha",
    businessName: "Radha Braj Sanjhi Art Studio",
    entrepreneurName: "Radha Sharma",
    category: "Crafts",
    offerDescription: "Hand-cut traditional Sanjhi stencils, framed wall art, bookmarks, and bespoke wedding stationery inspired by Braj motifs.",
    location: "Vrindavan, Mathura",
    phone: "+91 94122 00000",
    whatsapp: "+91 94122 00000",
    image: "/images/projects/royal-sanjhi-training.jpg",
    tag: "Heritage Craft",
    verified: true,
  },
  {
    id: "braj-zari-poshak-sunita",
    businessName: "Sunita Deity Poshak & Embroidery",
    entrepreneurName: "Sunita Verma",
    category: "Fashion",
    offerDescription: "Authentic Mathura Zari work deity poshak, hand-embroidered dupattas, gota-patti borders, and custom festive attire.",
    location: "Kosi Kalan, Mathura",
    phone: "+91 98370 00000",
    whatsapp: "+91 98370 00000",
    image: "/images/projects/poshak-zari.jpg",
    tag: "GI Craft Artisan",
    verified: true,
  },
  {
    id: "surabhi-dhoop-shg",
    businessName: "Brij Sugandh Gaushala Products",
    entrepreneurName: "Pooja & Pragati SHG",
    category: "Crafts",
    offerDescription: "Natural temple flower dhoop sticks, sambrani cups, cow-dung based holy diyas, and organic hawan samagri.",
    location: "Govardhan, Mathura",
    phone: "+91 97580 00000",
    whatsapp: "+91 97580 00000",
    image: "/images/projects/brij-surabhi-diya.jpg",
    tag: "Eco & Cow-Craft",
    verified: true,
  },
  {
    id: "mathura-swad-geeta",
    businessName: "Radhe Shyam Home Delicacies & Sweets",
    entrepreneurName: "Geeta Agrawal",
    category: "Food",
    offerDescription: "Pure mawa pedas, home-baked traditional cookies, dried snacks (namkeen), and seasonal festive dry-sweet gift boxes.",
    location: "Dampier Nagar, Mathura",
    phone: "+91 94560 00000",
    whatsapp: "+91 94560 00000",
    image: "/images/projects/pathway-women-skills.jpg",
    tag: "Home Kitchen",
    verified: true,
  },
  {
    id: "braj-roop-beauty-anjali",
    businessName: "Anjali Herbal Bridal & Salon Studio",
    entrepreneurName: "Anjali Saxena",
    category: "Beauty",
    offerDescription: "Herbal skincare treatments, bridal makeover services, natural mehendi artistry, and women's wellness therapy.",
    location: "Krishna Nagar, Mathura",
    phone: "+91 96900 00000",
    whatsapp: "+91 96900 00000",
    image: "/images/projects/upsdm-beauty.jpg",
    tag: "Wellness Studio",
    verified: true,
  },
  {
    id: "shiksha-hub-priyanka",
    businessName: "Priyanka's Foundational Learning Hub",
    entrepreneurName: "Priyanka Kumari",
    category: "Education",
    offerDescription: "Primary & middle-school mathematics coaching, spoken English practice, and foundational literacy tuition for girls.",
    location: "Chhata, Mathura",
    phone: "+91 98970 00000",
    whatsapp: "+91 98970 00000",
    image: "/images/projects/kla-students.jpg",
    tag: "Tuition & Guidance",
    verified: true,
  },
  {
    id: "divya-boutique-divya",
    businessName: "Divya Custom Designer Boutique",
    entrepreneurName: "Divya Singh",
    category: "Fashion",
    offerDescription: "Precision pattern drafting, designer blouses, suits, tailored Western-ethnic fusion wear, and festive alteration services.",
    location: "Highway Plaza Area, Mathura",
    phone: "+91 97190 00000",
    whatsapp: "+91 97190 00000",
    image: "/images/projects/upsdm-tailor.jpg",
    tag: "Boutique & Tailoring",
    verified: true,
  },
  {
    id: "digital-brij-rekha",
    businessName: "Rekha Digital Assistance & Typing",
    entrepreneurName: "Rekha Devi",
    category: "Professional Services",
    offerDescription: "Hindi and English official document typing, government portal form assistance, online utility billing, and resume formatting.",
    location: "Collectorate Road, Mathura",
    phone: "+91 94121 00000",
    whatsapp: "+91 94121 00000",
    image: "/images/projects/digi-shala.jpg",
    tag: "Digital & Secretarial",
    verified: true,
  },
];

const CATEGORIES = [
  "All",
  "Crafts",
  "Fashion",
  "Food",
  "Beauty",
  "Education",
  "Professional Services",
  "Other Businesses",
] as const;

interface GalleryImage {
  url: string;
  caption: string;
  tag: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "/images/projects/shg-federation.jpg",
    caption: "Women entrepreneurs managing home-based textile and garment manufacturing",
    tag: "Apparel & Micro-Enterprise",
  },
  {
    url: "/images/projects/royal-sanjhi-training.jpg",
    caption: "Master artisan creating intricate stencil artwork for commercial orders",
    tag: "Handicrafts & Art",
  },
  {
    url: "/images/projects/poshak-zari.jpg",
    caption: "Craftswoman finishing intricate Zari deity attire for Mathura temples",
    tag: "Zari Poshak Workshop",
  },
  {
    url: "/images/projects/upsdm-tailor.jpg",
    caption: "Independent boutique owner drafting custom designer apparel patterns",
    tag: "Fashion Designer",
  },
  {
    url: "/images/projects/brij-surabhi-diya.jpg",
    caption: "Women's SHG packaging eco-friendly cow-dung diyas and incense products",
    tag: "Sustainable Products",
  },
  {
    url: "/images/projects/upsdm-beauty.jpg",
    caption: "Independent beauty and wellness professional providing styling services",
    tag: "Beauty & Wellness",
  },
];

const BrijDirectoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Form Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    yourName: "",
    businessName: "",
    phone: "",
    email: "",
    category: "Crafts",
    location: "",
    whatYouOffer: "",
    websiteOrSocial: "",
  });

  useEffect(() => {
    document.title = "Women Entrepreneurs in Mathura | Brij Business Women Directory | Khajani";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover women-led businesses and entrepreneurs in Mathura and Braj through Khajani Welfare Society's Brij Business Women Directory."
      );
    }
  }, []);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFormData({
      yourName: "",
      businessName: "",
      phone: "",
      email: "",
      category: "Crafts",
      location: "",
      whatYouOffer: "",
      websiteOrSocial: "",
    });
    setModalOpen(false);
  };

  // Filter listings
  const filteredListings = INITIAL_DIRECTORY_LISTINGS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === "" ||
      item.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.entrepreneurName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.offerDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const scrollToDirectory = () => {
    const el = document.getElementById("live-directory-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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
          <span className="text-secondary font-medium">Brij Business Women Directory</span>
        </div>
      </nav>

      {/* ── Screen 1: Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-primary text-white overflow-hidden py-20 lg:py-28">
        <AuroraBackground variant="dark" intensity={1.1} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/shg-federation.jpg"
            alt="Women entrepreneurs in Mathura"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-secondary border border-white/15 backdrop-blur-md mb-6">
              <Sparkles size={13} className="text-secondary" />
              Empowering Grassroots Enterprise
            </span>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={100}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              BRIJ BUSINESS WOMEN DIRECTORY
            </h1>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={200}>
            <p className="text-lg sm:text-xl lg:text-2xl font-serif italic text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 font-light">
              Helping women-led businesses become easier to find
            </p>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={300}>
            <p className="text-sm sm:text-base text-white/80 max-w-3xl mx-auto leading-relaxed mb-6">
              The Brij Business Women Directory is Khajani Welfare Society’s initiative to bring women entrepreneurs, home-based businesses, independent professionals and women-led enterprises from Mathura and Braj into one accessible network.
            </p>
            <p className="text-xs sm:text-sm text-secondary font-medium max-w-2xl mx-auto leading-relaxed mb-8">
              The idea is simple: many women already have skills, products and services. What they often need is greater visibility, stronger connections and easier access to customers and opportunities.
            </p>
          </AnimeReveal>

          {/* 5 Core Pillars */}
          <AnimeReveal variant="fade-up" delay={400}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-white/90 bg-white/5 border border-white/10 rounded-2xl py-3 px-6 max-w-3xl mx-auto backdrop-blur-sm shadow-lg mb-8">
              <span className="text-secondary font-semibold">Women Entrepreneurs</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-secondary font-semibold">Local Businesses</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-secondary font-semibold">Visibility</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-secondary font-semibold">Connections</span>
              <span className="text-white/30 hidden sm:inline">·</span>
              <span className="text-secondary font-semibold">Opportunities</span>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={500}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={scrollToDirectory}
                className="btn-3d-accent px-7 py-3 text-xs uppercase font-bold tracking-widest shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE WOMEN-LED BUSINESSES</span>
                <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-3d-outline px-7 py-3 text-xs uppercase font-bold tracking-widest text-white border-white/30 hover:bg-white/10 cursor-pointer"
              >
                JOIN THE DIRECTORY →
              </button>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 2: Why a Women’s Business Directory? ── */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Need for Discovery
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Why a women’s business directory?
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-6">
                Good work should be easier to discover
              </p>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Across Mathura and Braj, women run businesses from homes, shops, studios and small workspaces. Some make products. Some provide professional or creative services. Others are building small enterprises around skills they have developed over time.
                </p>
                <div className="clay-card p-5 rounded-xl border-l-4 border-accent bg-accent/5 my-4 max-w-2xl mx-auto">
                  <p className="font-display text-lg font-bold text-primary italic">
                    “A good business cannot grow if people do not know it exists.”
                  </p>
                </div>
                <p className="text-primary font-medium">
                  The Brij Business Women Directory creates a common platform where women-led businesses can be listed, discovered and connected.
                </p>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 3: Who Can Be Part of the Directory? (7 Categories) ── */}
      <section className="py-20 bg-muted/20 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Inclusive Enterprise Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Who can be part of the directory?
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold">
                Different women. Different businesses.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                The directory brings together women working across diverse economic sectors throughout Mathura and Braj.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Handicrafts & Handmade Products",
                desc: "Women making creative, traditional or handmade products.",
                icon: Palette,
                color: "bg-amber-50 text-amber-700",
              },
              {
                title: "Fashion & Apparel",
                desc: "Designers, boutiques, tailoring and clothing-related businesses.",
                icon: Scissors,
                color: "bg-rose-50 text-rose-700",
              },
              {
                title: "Food & Home-Based Products",
                desc: "Women running food, baking, packaged goods and other home-based ventures.",
                icon: Utensils,
                color: "bg-orange-50 text-orange-700",
              },
              {
                title: "Beauty & Wellness",
                desc: "Independent professionals and women-led beauty and wellness businesses.",
                icon: Sparkle,
                color: "bg-purple-50 text-purple-700",
              },
              {
                title: "Education & Training",
                desc: "Tutors, trainers, guidance counsellors and women providing educational services.",
                icon: GraduationCap,
                color: "bg-blue-50 text-blue-700",
              },
              {
                title: "Professional & Creative Services",
                desc: "Women offering specialised, professional, digital or creative services.",
                icon: Laptop,
                color: "bg-teal-50 text-teal-700",
              },
              {
                title: "Other Women-Led Enterprises",
                desc: "Businesses and services led or managed by women across Mathura and Braj.",
                icon: Store,
                color: "bg-emerald-50 text-emerald-700",
              },
            ].map((cat, i) => (
              <AnimeReveal key={cat.title} variant="fade-up" delay={i * 70}>
                <div className="clay-card p-6 rounded-2xl h-full border border-border/60 hover:border-accent/40 transition-all flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${cat.color}`}>
                      <cat.icon size={24} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-primary mb-2">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/40 text-[11px] font-bold text-accent uppercase tracking-wider">
                    Eligible for Listing
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          <div className="mt-10 text-center text-xs text-muted-foreground italic">
            Categories remain dynamically extensible so Khajani can reorganize or add emerging trades as the network expands.
          </div>
        </div>
      </section>

      {/* ── Screen 4: From Skill to Visibility (5-Step Roadmap) ── */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                The Journey of Enterprise
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                From skill to visibility
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                A simple next step for women who are already creating
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Many Khajani programmes help women learn a skill. The Brij Business Women Directory can help create the next connection:
              </p>
            </div>
          </AnimeReveal>

          {/* 5-Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", name: "LEARN", text: "Develop a practical skill through hands-on training.", color: "border-amber-200" },
              { step: "02", name: "START", text: "Begin offering a product or service from home or shop.", color: "border-rose-200" },
              { step: "03", name: "GET LISTED", text: "Create a verified business presence in the directory.", color: "border-blue-200" },
              { step: "04", name: "GET DISCOVERED", text: "Make it easier for local buyers and partners to find you.", color: "border-purple-200" },
              { step: "05", name: "CONNECT", text: "Reach customers, entrepreneurs, and viable opportunities.", color: "border-emerald-200" },
            ].map((item, idx) => (
              <AnimeReveal key={item.name} variant="fade-up" delay={idx * 100}>
                <div className={`clay-card p-5 rounded-2xl h-full border ${item.color} flex flex-col justify-between text-center relative group hover:border-accent/60 transition-all`}>
                  <div>
                    <span className="text-[11px] font-bold text-accent tracking-widest block mb-1">
                      STEP {item.step}
                    </span>
                    <h3 className="text-lg font-display font-bold text-primary mb-2">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  {idx < 4 && (
                    <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 text-accent z-10">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              </AnimeReveal>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-primary font-medium">
            This represents an important operational bridge connecting Khajani's training alumni with sustainable commercial viability.
          </div>
        </div>
      </section>

      {/* ── Screen 5: What a Business Listing Can Show ── */}
      <section className="py-20 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Profile Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                What a business listing can show
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                Simple information that helps people connect
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Built as structured data so new listings can easily be added, searched, and updated without requiring developer maintenance.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Business Name", desc: "The name under which the woman works, crafts, or sells.", icon: Store },
              { title: "Entrepreneur's Name", desc: "The founder or creator who leads and manages the enterprise.", icon: Users },
              { title: "What She Offers", desc: "A simple, clear description of the products or services provided.", icon: Briefcase },
              { title: "Business Category", desc: "Standardized tagging to make browsing effortless for customers.", icon: Filter },
              { title: "Photographs", desc: "Real, authentic images of products, work in progress, or workspaces.", icon: Eye },
              { title: "Location", desc: "Relevant Mathura and Braj locality details for regional search.", icon: MapPin },
              { title: "Contact Details", desc: "Verified phone, direct WhatsApp, and optional social links.", icon: Phone },
            ].map((field, i) => (
              <AnimeReveal key={field.title} variant="fade-up" delay={i * 60}>
                <div className="clay-card p-4 rounded-xl border border-border/50 flex items-start gap-3 h-full">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                    <field.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary mb-0.5">{field.title}</h4>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{field.desc}</p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screen 6: Live Interactive Directory Section ── */}
      <section id="live-directory-section" className="py-24 bg-background relative border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Search & Browse
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-bold text-primary mb-3">
                Find women-led businesses
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                Discover. Connect. Support local enterprise.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Browse verified women entrepreneurs, artisanal producers, and independent professionals across Mathura and Braj.
              </p>
            </div>
          </AnimeReveal>

          {/* Search & Category Filter Controls */}
          <div className="bg-muted/30 p-4 sm:p-6 rounded-2xl border border-border/60 mb-10 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              {/* Live Search Input */}
              <div className="relative w-full md:w-96">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by business, woman's name, or craft..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Submit CTA button */}
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-3d-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 w-full md:w-auto justify-center cursor-pointer"
              >
                <PlusCircle size={14} />
                <span>Submit a Business</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-sm font-semibold"
                      : "bg-background text-muted-foreground hover:text-primary border border-border/60 hover:border-accent/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Directory Grid */}
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((biz) => (
                <div
                  key={biz.id}
                  className="clay-card rounded-2xl overflow-hidden border border-border/60 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                      <img
                        src={biz.image}
                        alt={biz.businessName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-sm">
                        {biz.category}
                      </span>
                      {biz.verified && (
                        <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-600 text-white shadow-sm">
                          <CheckCircle2 size={11} /> Verified
                        </span>
                      )}
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-medium text-secondary block">
                          Founded by {biz.entrepreneurName}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                        {biz.businessName}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-muted-foreground mb-3">
                        <MapPin size={12} className="text-accent shrink-0" />
                        <span>{biz.location}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {biz.offerDescription}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-border/40 mt-4 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                      {biz.tag}
                    </span>
                    <div className="flex items-center gap-2">
                      {biz.whatsapp && (
                        <a
                          href={`https://wa.me/${biz.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%2C%20I%20found%20your%20business%20on%20the%20Khajani%20Brij%20Business%20Women%20Directory!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition-colors flex items-center justify-center text-xs"
                          title="Connect on WhatsApp"
                        >
                          <MessageCircle size={15} />
                        </a>
                      )}
                      {biz.phone && (
                        <a
                          href={`tel:${biz.phone}`}
                          className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center text-xs"
                          title="Call Business"
                        >
                          <Phone size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 clay-card rounded-2xl border border-dashed border-border/80">
              <Store size={36} className="mx-auto text-muted-foreground mb-3" />
              <h4 className="text-base font-display font-bold text-primary mb-1">
                No matching businesses found
              </h4>
              <p className="text-xs text-muted-foreground max-w-sm mx-auto mb-4">
                Try searching with different keywords or switch back to "All" categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="btn-3d-outline px-4 py-2 text-xs uppercase font-bold tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Screen 7: More Than a Listing (Creating Connections) ── */}
      <section className="py-20 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Peer Networking
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                More than a listing
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-6">
                Creating connections between women
              </p>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  The directory can also help women entrepreneurs discover one another. A maker may find a designer. A home business may find a service provider. An entrepreneur may discover another woman with complementary skills.
                </p>
                <p className="text-primary font-medium">
                  So the directory can gradually become a local network of women-led enterprise, rather than simply a list of names.
                </p>
              </div>
            </div>
          </AnimeReveal>

          {/* 3 Synergy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="clay-card p-6 rounded-2xl text-center border border-border/50 h-full">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                  <Palette size={22} />
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">Maker + Designer</h4>
                <p className="text-xs text-muted-foreground">
                  Traditional Sanjhi or Zari artisans teaming up with modern boutique designers to co-create contemporary fashion collections.
                </p>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={200}>
              <div className="clay-card p-6 rounded-2xl text-center border border-border/50 h-full">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                  <Store size={22} />
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">Producer + Service</h4>
                <p className="text-xs text-muted-foreground">
                  Home bakers and craft makers partnering with local digital assistance women for catalogue formatting and social outreach.
                </p>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={300}>
              <div className="clay-card p-6 rounded-2xl text-center border border-border/50 h-full">
                <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-3">
                  <Users size={22} />
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">Peer Solidarity</h4>
                <p className="text-xs text-muted-foreground">
                  Sharing market stalls at local exhibitions, negotiating bulk procurement of fabrics, and cross-recommending trusted clients.
                </p>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Screen 8: Connected with Khajani’s Skill Programmes ── */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Pathway from Learning to Livelihood
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Connected with Khajani’s skill programmes
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                Learning can lead to enterprise
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The Business Women Directory naturally connects with Khajani’s skill-development work. Women who develop suitable skills through programmes such as Brij-Hunar and Brij-Nipun may later choose to explore self-employment or a small business.
              </p>
              <p className="text-sm sm:text-base text-primary font-medium mt-3">
                The directory provides a natural next connection for women who have moved from learning a skill to offering a product or service.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="clay-card p-6 rounded-2xl border border-border/60 hover:border-accent/40 transition-all flex flex-col justify-between h-full group">
                <div>
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                    Long-Term Skill Training
                  </span>
                  <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    Brij-Hunar
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    Structured, multi-month vocational training building mastery in apparel manufacturing, surface ornamentation, and digital skills.
                  </p>
                </div>
                <Link
                  to="/projects/brij-hunar"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                >
                  <span>EXPLORE BRIJ-HUNAR →</span>
                </Link>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={200}>
              <div className="clay-card p-6 rounded-2xl border border-border/60 hover:border-accent/40 transition-all flex flex-col justify-between h-full group">
                <div>
                  <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                    Short-Term Modules & Camps
                  </span>
                  <h3 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    Brij-Nipun
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    Focused practical workshops and specialized camps allowing women to engage with specific craft and trade competencies.
                  </p>
                </div>
                <Link
                  to="/projects/brij-nipun"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent group-hover:text-primary transition-colors"
                >
                  <span>EXPLORE BRIJ-NIPUN →</span>
                </Link>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Screen 9: Connected with Traditional Crafts ── */}
      <section className="py-20 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Cultural Heritage & Enterprise
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Connected with traditional crafts
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Women working with traditional and handmade products can also form part of this wider enterprise network. Where a genuine enterprise exists, this creates natural connections with our heritage strands:
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="clay-card p-6 rounded-2xl border border-border/50 h-full flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    Royal Sanjhi Art
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Intricate paper stencils and traditional Braj art motifs transformed into high-value décor and bespoke stationery.
                  </p>
                </div>
                <Link to="/projects/royal-sanjhi" className="text-xs font-bold uppercase tracking-wider text-accent hover:text-primary">
                  Royal Sanjhi Art →
                </Link>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={200}>
              <div className="clay-card p-6 rounded-2xl border border-border/50 h-full flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    Mathura Zari Poshak
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Geographical Indication (GI) recognized sacred dress-making craft connecting skilled needleworkers with devotional patrons.
                  </p>
                </div>
                <Link to="/projects/mathura-zari-poshak" className="text-xs font-bold uppercase tracking-wider text-accent hover:text-primary">
                  Mathura Zari Poshak →
                </Link>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={300}>
              <div className="clay-card p-6 rounded-2xl border border-border/50 h-full flex flex-col justify-between group hover:border-accent/40 transition-all">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    Brij-Surabhi
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    Women's Self Help Groups producing useful cow-dung items, holy incense, and temple-flower recycled products.
                  </p>
                </div>
                <Link to="/projects/brij-surabhi" className="text-xs font-bold uppercase tracking-wider text-accent hover:text-primary">
                  Brij-Surabhi →
                </Link>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Screen 10: Women in Business (Gallery) ── */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Authentic Visual Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Women in business
              </h2>
              <p className="text-lg font-serif italic text-accent font-semibold mb-4">
                Real businesses. Real products. Real people.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
                Real women entrepreneurs with their products, workshops, and commercial services across Mathura and Braj.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_IMAGES.map((img, i) => (
              <AnimeReveal key={img.url} variant="fade-up" delay={i * 80}>
                <div
                  onClick={() => openLightbox(i)}
                  className="clay-card rounded-2xl overflow-hidden group cursor-pointer border border-border/60 hover:border-accent/50 shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
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
            Women Entrepreneurs · Their Products · Home-Based Businesses · Shops & Workspaces · Handicrafts · Food Products · Fashion · Services
          </div>
        </div>
      </section>

      {/* ── Screen 11: Why This Matters ── */}
      <section className="py-20 bg-muted/20 border-b border-border/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2">
                Socio-Economic Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Why this matters
              </h2>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimeReveal variant="fade-up" delay={100}>
              <div className="clay-card p-6 rounded-2xl text-center border border-border/50 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    VISIBILITY
                  </span>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">
                    Broader Reach
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Help more people and commercial buyers discover talented women-led businesses.
                  </p>
                </div>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={200}>
              <div className="clay-card p-6 rounded-2xl text-center border border-border/50 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    CONNECTIONS
                  </span>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">
                    Direct Networks
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Bring entrepreneurs, regular customers, and market opportunities closer together.
                  </p>
                </div>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={300}>
              <div className="clay-card p-6 rounded-2xl text-center border border-border/50 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    LOCAL ENTERPRISE
                  </span>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">
                    Rooted Economy
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Encourage commercial enterprise that directly stays rooted in Mathura and Braj.
                  </p>
                </div>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={400}>
              <div className="clay-card p-6 rounded-2xl text-center border border-border/50 h-full flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent block mb-2">
                    INDEPENDENCE
                  </span>
                  <h3 className="text-lg font-display font-bold text-primary mb-2">
                    Economic Agency
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Create more space for women to build, own, and grow their self-reliant work.
                  </p>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ── Screen 12: Submission & Collaboration CTA ── */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.1} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-secondary border border-white/15 mb-4">
              <Store size={14} className="text-secondary" /> Join the Network
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white mb-4">
              Are you a woman entrepreneur in Mathura or Braj?
            </h2>
            <p className="text-lg sm:text-xl font-serif italic text-white/90 font-light mb-6">
              Become part of the directory
            </p>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Women running a business, home-based enterprise or independent professional service can connect with Khajani to enquire about inclusion in the Brij Business Women Directory.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="btn-3d-accent px-8 py-3.5 text-xs uppercase font-bold tracking-widest flex items-center gap-2 shadow-2xl cursor-pointer"
              >
                <span>JOIN THE DIRECTORY →</span>
              </button>
              <Link
                to="/get-involved"
                className="btn-3d-outline px-8 py-3.5 text-xs uppercase font-bold tracking-widest text-white border-white/40 hover:bg-white/10"
              >
                WORK WITH US →
              </Link>
              <Link
                to="/contact"
                className="btn-3d-outline px-8 py-3.5 text-xs uppercase font-bold tracking-widest text-white border-white/40 hover:bg-white/10"
              >
                CONTACT KHAJANI →
              </Link>
            </div>
            <p className="text-xs text-white/60 mt-6 italic">
              Institutions, business networks, buyers, and marketplaces interested in supporting women-led enterprise are warmly invited to connect.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 13: Closing Statement ── */}
      <section className="py-16 bg-cream-light text-center border-t border-border/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimeReveal variant="fade-up">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-2 italic">
              “Skills can start a journey. Visibility can help it grow.”
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-widest mt-3">
              Women · Enterprise · Visibility · Opportunity
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Submission Modal Form ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-background border border-border rounded-2xl w-full max-w-lg p-6 sm:p-8 relative shadow-2xl my-8">
            <button
              onClick={() => resetForm()}
              className="absolute top-4 right-4 text-muted-foreground hover:text-primary p-1 rounded-lg hover:bg-muted transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="mb-6">
                  <span className="text-accent text-[11px] font-bold uppercase tracking-widest block mb-1">
                    Directory Application
                  </span>
                  <h3 className="text-2xl font-display font-bold text-primary">
                    Join the Brij Business Women Directory
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fill out the details below. Submissions are reviewed and verified by the Khajani team before publishing.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Smt. Radha Sharma"
                      value={formData.yourName}
                      onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radha Braj Sanjhi Art Studio"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">
                        Business Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="Crafts">Handicrafts & Handmade Products</option>
                        <option value="Fashion">Fashion & Apparel</option>
                        <option value="Food">Food & Home-Based Products</option>
                        <option value="Beauty">Beauty & Wellness</option>
                        <option value="Education">Education & Training</option>
                        <option value="Professional Services">Professional & Creative Services</option>
                        <option value="Other Businesses">Other Women-Led Enterprises</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-primary mb-1">
                        Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vrindavan / Mathura"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      What do you offer? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe your products, crafts, or services..."
                      value={formData.whatYouOffer}
                      onChange={(e) => setFormData({ ...formData, whatYouOffer: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-primary mb-1">
                      Website / Instagram (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. instagram.com/yourbusiness"
                      value={formData.websiteOrSocial}
                      onChange={(e) => setFormData({ ...formData, websiteOrSocial: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-muted/40 border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <p className="text-[11px] text-muted-foreground italic">
                    Note: Submissions do not automatically publish live. Our team will review the information and get in touch with you for verification.
                  </p>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-3d-accent w-full py-3 text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={13} />
                      <span>SUBMIT YOUR BUSINESS →</span>
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  Application Received!
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                  Thank you, <strong>{formData.yourName}</strong>. Your listing request for <strong>{formData.businessName}</strong> has been submitted to Khajani Welfare Society for verification.
                </p>
                <div className="clay-card p-4 rounded-xl bg-muted/30 border border-border/40 text-xs text-muted-foreground mb-6">
                  Our team will review your contact details and reach out within 2–3 business days.
                </div>
                <button
                  onClick={resetForm}
                  className="btn-3d-accent px-6 py-2.5 text-xs uppercase font-bold tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

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

export default BrijDirectoryPage;
