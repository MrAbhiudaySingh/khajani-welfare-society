import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import {
  ShieldCheck,
  Maximize2,
  X,
  ArrowRight,
  ExternalLink,
  Download,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Award,
  Users,
  Shield,
  FileCheck2,
  Sparkles,
  CheckCircle2,
  Layers,
  HelpCircle,
  ChevronDown,
  Search,
} from "lucide-react";

const GIRecognitionPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePage, setActivePage] = useState<1 | 2>(1);
  const [openTrivia, setOpenTrivia] = useState<number | null>(0);

  const certificatePages = [
    {
      pageNumber: 1,
      title: "Certificate of Registration (Form O-2)",
      subtitle: "Certificate No. 705 · Section 16(2) under GI Act 1999",
      image: "/images/projects/real-gi-certificate-page-1.png",
      desc: "Official Certificate issued by the Geographical Indications Registry, Government of India, certifying registration in the name of Khajani Welfare Society, Mathura.",
    },
    {
      pageNumber: 2,
      title: "Part-A Register Entry & Geographical Production Map",
      subtitle: "G.I-1147 · Defined Geographical Area of Production",
      image: "/images/projects/real-gi-certificate-page-2.png",
      desc: "Formal register entry defining Khajani Welfare Society as Registered Proprietor, with official administrative map of Mathura District.",
    },
  ];

  // Interactive Anatomy / Craft Dimensions
  const craftAnatomy = [
    {
      id: "zari-threads",
      title: "Metallic Zari & Kalabattu",
      subtitle: "Core Materiality & Traditional Weave",
      tag: "Class 26 Component",
      icon: "🧵",
      color: "from-amber-500/20 to-yellow-600/10",
      accent: "#B45309",
      description:
        "True Mathura Zari uses fine metallic gold and silver threads (Kalabattu) spiraled with precision around pure silk yarn cores. The resulting thread reflects divine temple lighting, creating the luminous sheen revered in Braj Thakurji deity shringar.",
      highlights: [
        "Tested for tensile luster and non-tarnishing coating",
        "Hand-drawn fine gold and silver bullion wire",
        "Combined with authentic silk threads for temple longevity",
      ],
    },
    {
      id: "mor-pankh",
      title: "Sacred Mor Pankh & Motifs",
      subtitle: "Spiritual Iconography of Braj",
      tag: "Iconic Design",
      icon: "🦚",
      color: "from-emerald-500/20 to-teal-600/10",
      accent: "#0D9488",
      description:
        "Every registered Mathura Zari Poshak incorporates sacred Braj cultural motifs—the iconic peacock feather (mor pankh), kadamb blossoms, lotus crowns, and celestial patterns symbolizing Lord Krishna’s pastoral and royal pastimes.",
      highlights: [
        "Multi-layered needle embroidery replicating feather eyes",
        "Harmonious peacock palette: emerald, sapphire, and iridescent gold",
        "Sacred motifs guarded against commercial generic imitation",
      ],
    },
    {
      id: "zardozi-craft",
      title: "Hand Zardozi & Salma Dabka",
      subtitle: "Three-Dimensional Raised Needlework",
      tag: "Human Craftsmanship",
      icon: "✨",
      color: "from-rose-500/20 to-red-600/10",
      accent: "#A32A29",
      description:
        "The distinctive richness of Mathura deity garments comes from heavy 3D hand embroidery. Master artisans use wooden ari needles, coiled spring wires (dabka), sequins (sitara), and pearl beading stitched onto royal velvet and raw silk foundations.",
      highlights: [
        "Hundreds of artisan hours devoted to each master poshak",
        "Padded 3D relief embroidery for sculpted deity drapery",
        "Inherited generations of Braj hand-stitching techniques",
      ],
    },
    {
      id: "mathura-origin",
      title: "Geographical Link & Braj Territory",
      subtitle: "Formal Register Entry Boundaries",
      tag: "Mathura District",
      icon: "🛕",
      color: "from-blue-500/20 to-indigo-600/10",
      accent: "#1E40AF",
      description:
        "The GI Act 1999 strictly maps production to Mathura district in Uttar Pradesh. The centuries-old craft ecosystem of Rawal, Vrindavan, Govardhan, and Mathura city forms the verified geographical cradle of this sacred textile tradition.",
      highlights: [
        "Administrative Mathura District boundary mapped in Part-A",
        "Rooted in Mathura's historical 5,000+ deity shrine network",
        "Legal framework protecting over 5,000 artisan families",
      ],
    },
  ];

  // Interactive Trivia & Did You Know
  const triviaItems = [
    {
      question: "Why does Mathura Zari Poshak have both Class 25 and Class 26 registration?",
      answer:
        "Class 25 covers sacred clothing and deity attire, while Class 26 protects the intricate lace, hand embroidery, zari ribbons, sequins, and ornamental haberdashery. Registering both classes creates an airtight legal shield against partial imitation of either the garment or its artisanal components.",
    },
    {
      question: "What does Form O-2 mean on the official certificate?",
      answer:
        "Under Section 16(2) of the Geographical Indications of Goods Act 1999, Form O-2 is the highest statutory certificate issued by the Registrar of Geographical Indications, Government of India. Certificate No. 705 confirms full examination, public gazette notification without opposition, and official entry into Part-A of the GI Register.",
    },
    {
      question: "How does this GI recognition benefit the local women artisans?",
      answer:
        "GI protection prevents industrial power-loom fakes and cheap mass-market counterfeits from flooding the market. By establishing authentic provenance, Khajani Welfare Society enables craftswomen to command fair, dignified compensation, market linkages, and institutional recognition for their generational skill.",
    },
    {
      question: "Can anyone outside Mathura claim to produce Mathura Zari Poshak?",
      answer:
        "No. The GI Act 1999 strictly prohibits the unauthorized use of the name 'Mathura Zari Poshak' by manufacturers outside the designated Mathura geographical area. Only authorized users registered under the GI registry with authentic local production can use the official tag and logo.",
    },
  ];

  return (
    <Layout>
      <div className="bg-[#FAF8F5] text-[#2D3748] min-h-screen selection:bg-accent/20 relative overflow-hidden">
        {/* Subtle Ambient Golden Glow Orbs */}
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-300/15 via-orange-200/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-[45%] left-[-10%] w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-rose-300/10 via-amber-200/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-40 right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-emerald-300/10 via-teal-200/10 to-transparent blur-3xl pointer-events-none" />

        {/* ════════════════════════════════════════════════════════════════
            SCENE 1 — HERO / THE CREDENTIAL
            Pristine editorial layout with live beacon badge and credentials
        ════════════════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 lg:py-20 border-b border-[#E8E2D9] relative overflow-hidden bg-gradient-to-b from-[#FDFBF7] to-[#FAF8F5]">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Typography & Credentials */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* Live Beacon Eyebrow */}
                <AnimeReveal variant="fade-up">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#A32A29]/10 border border-[#A32A29]/25 text-[#A32A29] mb-4">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A32A29] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A32A29]"></span>
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-display">
                      Official GI Registered · Mathura
                    </span>
                  </div>
                </AnimeReveal>

                {/* Main Headline */}
                <AnimeReveal variant="fade-up" delay={100}>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A202C] leading-[1.1] tracking-tight mb-4">
                    Mathura <br />
                    <span className="text-[#A32A29]">Zari Poshak</span>
                  </h1>
                </AnimeReveal>

                {/* Subtitle */}
                <AnimeReveal variant="fade-up" delay={200}>
                  <p className="text-lg sm:text-xl font-serif italic text-[#4A5568] leading-relaxed mb-4 flex items-center gap-2">
                    <span>A recognised geographical identity for a distinctive craft of Mathura.</span>
                    <Sparkles size={18} className="text-[#D4AF37] inline flex-shrink-0 animate-pulse" />
                  </p>
                </AnimeReveal>

                {/* Body Paragraph */}
                <AnimeReveal variant="fade-up" delay={300}>
                  <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed max-w-xl mb-7">
                    Mathura Zari Poshak has been officially registered as a Geographical Indication (GI), formally recognising its deep geographical identity, sacred tradition, and the artisanal heritage of Mathura and Braj.
                  </p>
                </AnimeReveal>

                {/* 2 Credential Boxes with Glass & Hover Elevation */}
                <AnimeReveal variant="fade-up" delay={400} className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mb-8">
                    {/* Box 1 */}
                    <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#E2D9CC] shadow-xs hover:shadow-md hover:border-[#A32A29]/40 transition-all duration-300 group">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#A32A29]" />
                        <span className="text-sm font-bold text-[#1A202C] group-hover:text-[#A32A29] transition-colors">
                          GI No. 1147
                        </span>
                      </div>
                      <span className="text-[11px] text-[#718096] font-medium block">
                        Classes 25 & 26 · Zari Poshak
                      </span>
                    </div>

                    {/* Box 2 */}
                    <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#E2D9CC] shadow-xs hover:shadow-md hover:border-[#1E40AF]/40 transition-all duration-300 group">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#1E40AF]" />
                        <span className="text-xs font-bold text-[#1A202C] leading-snug">
                          GI Registry, Govt of India
                        </span>
                      </div>
                      <span className="text-[11px] text-[#718096] font-medium block">
                        Certificate No. 705 · Form O-2
                      </span>
                    </div>
                  </div>
                </AnimeReveal>

                {/* CTA Action Bar */}
                <AnimeReveal variant="fade-up" delay={500}>
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setActivePage(1);
                        setLightboxOpen(true);
                      }}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A32A29] hover:bg-[#8B2322] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <FileCheck2 size={15} />
                      <span>View Official Certificate</span>
                    </button>
                  </div>
                </AnimeReveal>
              </div>

              {/* Right Column: Arched Poshak Photo */}
              <div className="lg:col-span-5 flex justify-center relative">

                <AnimeReveal variant="fade-up" delay={250} className="w-full max-w-md">
                  <div className="relative rounded-t-[140px] rounded-b-3xl overflow-hidden border-4 border-white shadow-2xl bg-white aspect-[4/5] group">
                    <img
                      src="/images/projects/poshak-zari.jpg"
                      alt="Mathura Zari Poshak sacred deity attire"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                    {/* Shimmer sweep effect on card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                    {/* Quick Badge at Bottom */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 px-4 text-center shadow-lg border border-[#E2D9CC] flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#718096] block">
                          Sacred Deity Attire
                        </span>
                        <span className="text-xs font-bold text-[#A32A29] uppercase tracking-wide font-display">
                          Mathura Zari Poshak · No. 1147
                        </span>
                      </div>
                      <span className="px-2 py-1 rounded-md bg-[#A32A29]/10 text-[#A32A29] text-[10px] font-bold">
                        Braj Craft
                      </span>
                    </div>
                  </div>
                </AnimeReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SCENE 2 — WHAT IS GI? / WHO REGISTERS IT?
            Enhanced with generated Government of India and IP India image logos,
            watermark embroidery motifs, and interactive card lift
        ════════════════════════════════════════════════════════════════ */}
        <section id="what-is-gi" className="py-14 sm:py-18 bg-[#FAF8F5] relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left Card: Understanding GI (Soft Blue-Grey) */}
              <AnimeReveal variant="fade-up" className="h-full">
                <div className="bg-[#EEF2F6] rounded-3xl p-6 sm:p-8 border border-[#DCE4EC] h-full flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#CBD8E6] transition-all duration-300 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E40AF]/10 text-[#1E40AF] text-[11px] font-bold tracking-[0.18em] uppercase mb-3 font-display">
                      <Layers size={12} />
                      <span>UNDERSTANDING GI</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A202C] leading-snug mb-4">
                      What is a Geographical Indication?
                    </h2>
                    <div className="space-y-3.5 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      <p>
                        A <strong className="text-[#1A202C]">Geographical Indication (GI)</strong> identifies goods that originate from a specific territory and whose distinct quality, reputation, and human craftsmanship are fundamentally rooted in that place.
                      </p>
                      <p>
                        Registration creates a binding legal framework under Indian law that prevents counterfeit industrial imitations, preserves cultural heritage, and guarantees exclusive naming rights to genuine local artisans.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Feature Pill */}
                  <div className="pt-5 mt-5 border-t border-[#D0DDEB] flex items-center gap-2 text-xs text-[#1E40AF] font-semibold relative z-10">
                    <CheckCircle2 size={15} />
                    <span>Statutory Legal Protection under GI Act 1999</span>
                  </div>
                </div>
              </AnimeReveal>

              {/* Right Card: GI Registration in India (Warm Cream with Generated Seal Logos) */}
              <AnimeReveal variant="fade-up" delay={150} className="h-full">
                <div className="bg-[#FAF4EB] rounded-3xl p-6 sm:p-8 border border-[#E9DFD1] h-full flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#DFCFC0] transition-all duration-300 relative overflow-hidden group">
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                    <div className="sm:col-span-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A32A29]/10 text-[#A32A29] text-[11px] font-bold tracking-[0.18em] uppercase mb-3 font-display">
                        <Award size={12} />
                        <span>GI REGISTRATION IN INDIA</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A202C] leading-snug mb-4">
                        Who registers a GI?
                      </h2>
                      <div className="space-y-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                        <p>
                          Geographical Indications in India are registered under the{" "}
                          <strong className="text-[#1A202C] font-semibold">
                            Geographical Indications of Goods (Registration and Protection) Act, 1999
                          </strong>.
                        </p>
                        <p>
                          Registration is administered through the{" "}
                          <strong className="text-[#1A202C] font-semibold">
                            Geographical Indications Registry, Government of India
                          </strong>.
                        </p>
                        <p className="text-[12px] text-[#718096]">
                          The process scrutinizes origin, specifications, craftsmanship, producer representation, geographical boundaries, and quality inspection mechanisms.
                        </p>
                      </div>
                    </div>

                    {/* Government & IP India Seal Emblems on Right */}
                    <div className="sm:col-span-4 flex flex-col items-center justify-center gap-3.5 pt-2 sm:pt-0">
                      {/* Ashok Lion Emblem (State Emblem of India) */}
                      <div className="w-24 sm:w-28 p-2.5 bg-white rounded-2xl border border-[#E2D9CC] shadow-xs text-center flex flex-col items-center group/seal hover:border-[#B45309]/50 hover:shadow-md transition-all">
                        <div className="w-14 h-16 sm:w-16 sm:h-18 flex items-center justify-center mb-1">
                          <img
                            src="/images/projects/govt-of-india-seal.png"
                            alt="State Emblem of India - Government of India"
                            className="w-full h-full object-contain transition-transform duration-300 group-hover/seal:scale-110"
                          />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#1A202C] leading-tight font-display">
                          Govt of India
                        </span>
                      </div>

                      {/* Intellectual Property India Official Emblem */}
                      <div className="w-24 sm:w-28 p-2.5 bg-white rounded-2xl border border-[#E2D9CC] shadow-xs text-center flex flex-col items-center group/seal hover:border-[#1E40AF]/50 hover:shadow-md transition-all">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-1">
                          <img
                            src="/images/projects/ip-india-logo.png"
                            alt="Intellectual Property India Logo"
                            className="w-full h-full object-contain transition-transform duration-300 group-hover/seal:scale-110"
                          />
                        </div>
                        <span className="text-[8px] font-bold uppercase tracking-tight text-[#1A202C] leading-tight font-display">
                          IP India
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Feature Pill */}
                  <div className="pt-5 mt-5 border-t border-[#E3D7C5] flex items-center gap-2 text-xs text-[#A32A29] font-semibold">
                    <ShieldCheck size={15} />
                    <span>Administered by Controller General of Patents, Designs & Trade Marks</span>
                  </div>
                </div>
              </AnimeReveal>
            </div>

            {/* Bottom Accent Quote Strip (Soft Peach/Pink) with Sparkles */}
            <AnimeReveal variant="fade-up" delay={250}>
              <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#FDEEEA] border border-[#F3D5CE] text-center relative overflow-hidden shadow-xs hover:border-[#E8BDB2] transition-colors">
                <p className="font-serif italic text-sm sm:text-base text-[#A32A29] font-medium tracking-wide flex items-center justify-center gap-2">
                  <Sparkles size={16} className="text-[#A32A29]/70 inline" />
                  <span>“GI connects a recognised product with the place from which its sacred identity originates.”</span>
                  <Sparkles size={16} className="text-[#A32A29]/70 inline" />
                </p>
              </div>
            </AnimeReveal>
          </div>
        </section>



        {/* ════════════════════════════════════════════════════════════════
            SCENE 3 — THE REGISTERED GI: MATHURA ZARI POSHAK
            With the Authentic Non-AI Logo from PDF, Ceremonial Frame,
            and Institutional Specifications Plaque
        ════════════════════════════════════════════════════════════════ */}
        <section id="registered-gi" className="py-14 sm:py-18 bg-[#FAF8F5] relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <AnimeReveal variant="fade-up">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2D9CC] shadow-md relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left: Authentic Non-AI Round Logo directly from Certificate PDF */}
                  <div className="lg:col-span-3 flex flex-col items-center text-center">
                    <div className="relative group/logo">
                      <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden p-2 bg-[#FFFDF9] border-4 border-[#E9DFD1] shadow-lg flex items-center justify-center transition-transform duration-500 group-hover/logo:scale-105 group-hover/logo:border-[#A32A29]">
                        <img
                          src="/images/projects/mathura-zari-poshak-official-logo.png?v=official"
                          alt="Authentic Mathura Zari Poshak Official GI Logo from Government PDF"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="absolute -bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-[#A32A29] text-white text-[9px] font-bold uppercase tracking-wider shadow-md">
                        Official Logo
                      </div>
                    </div>
                    <span className="text-[12px] font-bold text-[#A32A29] uppercase tracking-wider mt-4 block font-display">
                      Mathura Zari Poshak
                    </span>
                    <span className="text-[10px] text-[#718096]">
                      Registered Emblem · GI No. 1147
                    </span>
                  </div>

                  {/* Middle: Narrative */}
                  <div className="lg:col-span-5 space-y-3">
                    <span className="text-[#A32A29] text-[11px] font-bold tracking-[0.2em] uppercase block font-display">
                      REGISTERED GEOGRAPHICAL INDICATION
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A202C]">
                      Mathura Zari Poshak
                    </h2>
                    <div className="space-y-2.5 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      <p>
                        Mathura Zari Poshak is a distinctive sacred textile art form intimately linked with Mathura and the living cultural landscape of Braj.
                      </p>
                      <p>
                        The GI documentation formally defines the craft through its materials, zari work, embroidery, embellishments, and strict production practices, celebrating human skill and generational craftsmanship.
                      </p>
                      <p className="text-[11px] text-[#718096] italic pt-1 border-t border-[#EFE9DF]">
                        The registered GI documentation covers the craft's materials, production process, geographical linkage, traditional know-how, and human craftsmanship.
                      </p>
                    </div>
                  </div>

                  {/* Right: Institutional Plaque / Details Grid */}
                  <div className="lg:col-span-4 bg-[#FAF8F5] rounded-2xl p-5 border border-[#E8E2D9] shadow-inner text-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A32A29] pb-2 mb-3 border-b border-[#E2D9CC] block font-display flex items-center justify-between">
                      <span>GI REGISTRATION DETAILS</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    </span>

                    <div className="space-y-2 text-[#4A5568]">
                      <div className="flex justify-between py-1 border-b border-[#EFE9DF]">
                        <span className="text-[#718096]">Geographical Indication</span>
                        <span className="font-semibold text-[#1A202C]">Mathura Zari Poshak</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EFE9DF]">
                        <span className="text-[#718096]">GI Registration No.</span>
                        <span className="font-bold text-[#B45309] bg-[#FFFBEB] px-1.5 py-0.5 rounded">1147</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EFE9DF]">
                        <span className="text-[#718096]">Certificate No.</span>
                        <span className="font-semibold text-[#1A202C]">705 (Form O-2)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EFE9DF]">
                        <span className="text-[#718096]">Goods</span>
                        <span className="font-semibold text-[#1A202C]">Zari Poshak</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EFE9DF]">
                        <span className="text-[#718096]">Classes</span>
                        <span className="font-semibold text-[#1A202C]">25 & 26</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EFE9DF]">
                        <span className="text-[#718096]">Geographical Identity</span>
                        <span className="font-semibold text-[#1A202C]">Mathura, Uttar Pradesh</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#EFE9DF]">
                        <span className="text-[#718096]">Registration Authority</span>
                        <span className="font-semibold text-[#1A202C] text-right">GI Registry, Govt of India</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-[#718096]">Certificate Date</span>
                        <span className="font-bold text-[#1A202C]">10 November 2025</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SCENE 4 — KHAJANI'S ROLE + THE ACTUAL REAL CERTIFICATE
            With interactive page switcher, zoom lightbox, and wax seal badge
        ════════════════════════════════════════════════════════════════ */}
        <section id="certificate" className="py-14 sm:py-20 bg-[#FAF8F5] relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <AnimeReveal variant="fade-up">
              <div className="bg-[#EBF2F7] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D5E2EC] shadow-sm relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                  {/* Left: Khajani Welfare Society & The GI */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-[#A32A29] text-[11px] font-bold tracking-[0.2em] uppercase block font-display">
                      KHAJANI WELFARE SOCIETY & THE GI
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A202C] leading-tight">
                      From application to recognition.
                    </h2>
                    <div className="space-y-3 text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      <p>
                        Khajani Welfare Society spearheaded the comprehensive institutional documentation leading to the Geographical Indication recognition of Mathura Zari Poshak.
                      </p>
                      <p>
                        The GI application records document Khajani Welfare Society's stewardship in representing local artisans and traditional craftspeople throughout the statutory examination by the Geographical Indications Registry.
                      </p>
                      <p>
                        The application satisfied exhaustive scrutiny regarding product origin, historical lineage, specifications, hand craftsmanship, quality mechanisms, and territorial enforcement.
                      </p>
                    </div>

                    {/* Official Document Info Block */}
                    <div className="p-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-[#CCDCE7] shadow-xs flex items-center gap-3.5 my-4 hover:border-[#A32A29]/40 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#A32A29]/10 text-[#A32A29] flex items-center justify-center flex-shrink-0">
                        <FileCheck2 size={22} />
                      </div>
                      <div className="text-xs">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A32A29] block font-display">
                          OFFICIAL CERTIFICATE OF REGISTRATION
                        </span>
                        <span className="font-serif font-bold text-[#1A202C] text-sm block">
                          Mathura Zari Poshak (GI No. 1147)
                        </span>
                        <span className="text-[#718096]">
                          Certificate No. 705 · Classes 25 & 26 · Dated 10 November 2025
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setActivePage(1);
                          setLightboxOpen(true);
                        }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A32A29] hover:bg-[#8B2322] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Maximize2 size={13} />
                        <span>Inspect Certificate (Full Size)</span>
                      </button>

                      <a
                        href="/images/projects/mathura-zari-poshak-gi-certificate-1147.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1A202C] border border-[#CCDCE7] font-bold text-xs uppercase tracking-wider transition-all shadow-xs hover:border-[#A32A29]"
                      >
                        <Download size={13} />
                        <span>Download Official PDF</span>
                      </a>
                    </div>
                  </div>

                  {/* Right: The Actual Real Certificate Document (Interactive View) */}
                  <div className="lg:col-span-6 flex flex-col items-center">
                    <div className="w-full max-w-sm sm:max-w-md bg-white p-2.5 sm:p-3.5 rounded-3xl border border-[#D0DEE8] shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      {/* Document Page Switcher Tabs */}
                      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#E2D9CC] text-xs">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setActivePage(1)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                              activePage === 1
                                ? "bg-[#A32A29] text-white shadow-xs"
                                : "bg-[#F0ECE1] text-[#718096] hover:text-[#1A202C]"
                            }`}
                          >
                            Page 1: Certificate
                          </button>
                          <button
                            type="button"
                            onClick={() => setActivePage(2)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                              activePage === 2
                                ? "bg-[#A32A29] text-white shadow-xs"
                                : "bg-[#F0ECE1] text-[#718096] hover:text-[#1A202C]"
                            }`}
                          >
                            Page 2: Register & Map
                          </button>
                        </div>
                        <span className="text-[10px] text-[#A32A29] font-bold uppercase">
                          Authentic Document
                        </span>
                      </div>

                      {/* Clickable Image Preview */}
                      <div
                        onClick={() => setLightboxOpen(true)}
                        className="relative cursor-pointer aspect-[1/1.414] overflow-hidden rounded-2xl border border-[#E2D9CC] group"
                      >
                        <img
                          src={certificatePages[activePage - 1].image}
                          alt={certificatePages[activePage - 1].title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-[#1A202C]/90 text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-2 backdrop-blur-md shadow-lg">
                            <Search size={14} /> Click to Expand & Zoom
                          </span>
                        </div>
                      </div>

                      {/* Caption */}
                      <div className="pt-3 px-2 flex items-center justify-between text-[11px] text-[#718096]">
                        <span className="font-semibold text-[#1A202C]">
                          {certificatePages[activePage - 1].title}
                        </span>
                        <span className="text-[#A32A29] font-bold">
                          Page {activePage} of 2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SCENE 5 — WHAT DOES THIS RECOGNITION MEAN?
            With animated golden cards and interactive "GI Trivia & FAQ"
        ════════════════════════════════════════════════════════════════ */}
        <section id="significance" className="py-14 sm:py-20 bg-[#FDFBF7] border-t border-[#E8E2D9] relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <AnimeReveal variant="fade-up">
                <span className="text-[#A32A29] text-[11px] font-bold tracking-[0.2em] uppercase block mb-2 font-display">
                  THE SIGNIFICANCE OF GI REGISTRATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A202C] mb-3">
                  What does this recognition mean?
                </h2>
                <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                  For Mathura Zari Poshak, GI registration formally recognizes and protects the organic link between product, territory, and community.
                </p>
              </AnimeReveal>
            </div>

            {/* 4 Significance Cards with Hover Glow & Micro-animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left mb-14">
              {[
                {
                  title: "GEOGRAPHICAL IDENTITY",
                  desc: "The registered indication connects Mathura Zari Poshak with its recognised geographical area of production.",
                  icon: MapPin,
                  accent: "#B45309",
                },
                {
                  title: "PRODUCT & STANDARDS",
                  desc: "The GI framework records the characteristics, production practices and standards associated with the registered product.",
                  icon: Award,
                  accent: "#A32A29",
                },
                {
                  title: "PRODUCERS",
                  desc: "The GI system provides a framework for recognised producers within the geographical area and for registration of eligible producers as authorised users.",
                  icon: Users,
                  accent: "#1E40AF",
                },
                {
                  title: "PROTECTION",
                  desc: "Registration provides a legal framework governing the authorised use and protection of the geographical indication.",
                  icon: Shield,
                  accent: "#0D9488",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <AnimeReveal key={item.title} variant="fade-up" delay={idx * 70}>
                    <div className="p-6 bg-white rounded-3xl border border-[#E2D9CC] shadow-sm h-full flex flex-col justify-between hover:border-[#A32A29]/50 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group">
                      <div>
                        <div className="w-12 h-12 rounded-2xl bg-[#FFF5EB] text-[#B45309] flex items-center justify-center mb-4 border border-[#FDE5D0] group-hover:scale-110 group-hover:bg-[#A32A29]/10 group-hover:text-[#A32A29] transition-all">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#1A202C] mb-2 font-display">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#718096] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#F0EBE1] flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#A32A29] opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Protected Right</span>
                        <ArrowRight size={10} />
                      </div>
                    </div>
                  </AnimeReveal>
                );
              })}
            </div>

            {/* Interactive "Did You Know? / GI Trivia" Accordion */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2D9CC] shadow-sm max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFE9DF]">
                  <div className="w-9 h-9 rounded-xl bg-[#A32A29]/10 text-[#A32A29] flex items-center justify-center">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#A32A29] block font-display">
                      HERITAGE INSIGHTS & LEGAL FACTS
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A202C]">
                      Frequently Asked Questions About GI 1147
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {triviaItems.map((item, idx) => {
                    const isOpen = openTrivia === idx;
                    return (
                      <div
                        key={item.question}
                        className="border border-[#E2D9CC] rounded-2xl overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenTrivia(isOpen ? null : idx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm font-bold text-[#1A202C]">
                            {item.question}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`text-[#A32A29] transition-transform duration-300 flex-shrink-0 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 text-xs sm:text-sm text-[#4A5568] leading-relaxed bg-[#FAF8F5]/60 border-t border-[#EFE9DF]">
                            <p className="pt-2">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimeReveal>

            {/* Note Below */}
            <AnimeReveal variant="fade-up" delay={300}>
              <p className="text-[11px] sm:text-xs text-[#A0AEC0] max-w-3xl mx-auto mt-10 text-center leading-relaxed">
                The examination report specifically addressed post-registration requirements concerning producer safeguards, authorised users, packaging and labelling, quality, inspection, and traceability.
              </p>
            </AnimeReveal>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            SCENE 6 — FINAL STRIP
            Obsidian & Gold banner split with embroidery photo on right
        ════════════════════════════════════════════════════════════════ */}
        <section className="bg-[#1A202C] text-white overflow-hidden relative border-t border-black/20">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 py-12 sm:py-16 pr-0 lg:pr-8">
                <AnimeReveal variant="fade-up">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A32A29]/30 border border-[#A32A29]/50 text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-3">
                    <Sparkles size={12} />
                    <span>Protected Heritage</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                    Mathura Zari Poshak
                  </h3>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">
                    Geographical Indication No. 1147
                  </p>
                  <p className="text-sm sm:text-base text-white/80 font-serif italic mb-6">
                    A geographical identity recognised, protected, and flourishing for future generations.
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      to="/our-work"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#A32A29] hover:bg-[#8B2322] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95"
                    >
                      <span>Explore Our Work</span>
                      <ArrowRight size={14} />
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        setActivePage(1);
                        setLightboxOpen(true);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20"
                    >
                      <FileCheck2 size={14} />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </AnimeReveal>
              </div>

              {/* Right Side Image of Zari Embroidery with hover sheen */}
              <div className="lg:col-span-5 h-56 lg:h-full relative overflow-hidden group">
                <img
                  src="/images/projects/poshak-zari.jpg"
                  alt="Zari embroidery detail"
                  className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A202C] via-transparent to-transparent hidden lg:block" />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════
            OFFICIAL REAL CERTIFICATE LIGHTBOX MODAL (Multi-Page)
        ════════════════════════════════════════════════════════════════ */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-200 border border-[#E2D9CC]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:px-6 bg-[#0F172A] text-white flex items-center justify-between border-b border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                    Official Government of India Document · Page {activePage} of 2
                  </span>
                  <h3 className="text-base sm:text-lg font-serif font-bold">
                    {certificatePages[activePage - 1].title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/images/projects/mathura-zari-poshak-gi-certificate-1147.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    <Download size={13} />
                    <span>Download PDF</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(false)}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Close certificate"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Image Viewer with Page Switcher */}
              <div className="relative p-3 sm:p-6 overflow-y-auto bg-[#F7F5F0] flex items-center justify-center min-h-[60vh]">
                {/* Previous page arrow */}
                <button
                  type="button"
                  onClick={() => setActivePage(activePage === 1 ? 2 : 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all z-10 cursor-pointer"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={20} />
                </button>

                <img
                  src={certificatePages[activePage - 1].image}
                  alt={certificatePages[activePage - 1].title}
                  className="max-h-[70vh] w-auto object-contain rounded-xl shadow-xl border border-[#D5CEC2] bg-white"
                />

                {/* Next page arrow */}
                <button
                  type="button"
                  onClick={() => setActivePage(activePage === 1 ? 2 : 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all z-10 cursor-pointer"
                  aria-label="Next page"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:px-6 bg-white border-t border-[#E2D9CC] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#718096]">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActivePage(1)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                      activePage === 1
                        ? "bg-[#A32A29] text-white"
                        : "bg-[#F0ECE1] text-[#4A5568] hover:text-[#1A202C]"
                    }`}
                  >
                    Page 1: Certificate (Form O-2)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePage(2)}
                    className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                      activePage === 2
                        ? "bg-[#A32A29] text-white"
                        : "bg-[#F0ECE1] text-[#4A5568] hover:text-[#1A202C]"
                    }`}
                  >
                    Page 2: Register Entry & Map
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="/images/projects/mathura-zari-poshak-gi-certificate-1147.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden inline-flex items-center gap-1 text-[#A32A29] font-semibold"
                  >
                    <Download size={13} /> Download PDF
                  </a>
                  <button
                    type="button"
                    onClick={() => setLightboxOpen(false)}
                    className="px-4 py-1.5 rounded-full bg-[#1A202C] text-white text-xs font-bold tracking-wider uppercase hover:bg-black transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GIRecognitionPage;
