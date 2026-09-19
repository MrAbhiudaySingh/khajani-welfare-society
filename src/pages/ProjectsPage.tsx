import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import {
  Scissors,
  Users,
  Heart,
  Palette,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  ArrowDown,
  BookOpen,
  Laptop,
  Flame,
  Droplets,
  Gift,
  Briefcase,
  Compass,
  X,
  Info,
  Flower2,
  Feather,
  Leaf,
  TreePine,
  ChevronRight,
} from "lucide-react";

/* ─── Project In-Depth Modal Data Type ─── */
interface ProjectDetail {
  id: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  tags: string[];
  overview: string[];
  highlights?: string[];
  keyStrands?: { title: string; desc: string }[];
}

const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "brij-hunar": {
    id: "brij-hunar",
    name: "BRIJ-HUNAR",
    category: "Long-Term Skill Development",
    tagline: "Skills built over time.",
    image: "/images/projects/upsdm-tailor.jpg",
    tags: ["Long-Term Training", "Practical Skills", "Vocational Learning", "Livelihoods"],
    overview: [
      "Brij-Hunar is Khajani’s long-term skill-development programme, bringing together structured vocational training designed to develop practical skills through sustained learning and practice.",
      "Longer-duration training undertaken through relevant government skill-development collaborations also forms part of Brij-Hunar.",
      "The programme is centred on structured vocational and livelihood-oriented learning, rather than on any single scheme or funding partnership.",
    ],
    highlights: [
      "Centred on trade mastery: Apparel, Tailoring, Surface Ornamentation & Digital Literacy",
      "Sustained 3 to 6-month hands-on curriculum with certified evaluation",
      "Direct pathway to economic self-reliance, home-based micro-enterprise, and wage employment",
    ],
  },
  "brij-nipun": {
    id: "brij-nipun",
    name: "BRIJ-NIPUN",
    category: "Short-Term Skills & Camps",
    tagline: "Focused learning. Practical experience.",
    image: "/images/projects/brij-nipun-activities.jpg",
    tags: ["Camps", "Workshops", "Practical Learning", "Skill Modules"],
    overview: [
      "Brij-Nipun brings together Khajani’s shorter-duration skill and learning initiatives.",
      "Through work camps, painter camps, workshops and other focused programmes, participants can engage with a particular skill or practical activity without entering a long-duration training programme.",
      "Its flexible format allows different kinds of learning experiences to be developed for different groups and contexts.",
    ],
    highlights: [
      "Intensive practical workshops in localized crafts, painting, and utility skills",
      "Rapid capability-building accessible to women, youth, and village collectives",
      "Low barrier to entry with immediate hands-on output and exposure",
    ],
  },
  kla: {
    id: "kla",
    name: "KHAJANI LEARNING ACADEMY",
    category: "Education & Learning",
    tagline: "Stronger foundations for what comes next.",
    image: "/images/projects/kla-students.jpg",
    tags: ["Education", "Learning Support", "Foundations", "Youth"],
    overview: [
      "Khajani Learning Academy extends the organisation’s work into education.",
      "It provides structured learning support designed around the educational needs of its learners, with an emphasis on strengthening foundations, regular learning and confidence.",
      "The Academy represents a continuing strand of Khajani’s work with younger learners.",
    ],
    highlights: [
      "Curriculum reinforcement across foundational numeracy, science, and languages",
      "Supportive learning environments designed to counter school dropout rates",
      "Confidence-building mentorship preparing students for higher academic pathways",
    ],
  },
  "digi-shala": {
    id: "digi-shala",
    name: "DIGI-SHALA",
    category: "Digital Literacy · AI Awareness · Technology · Online Safety · Digital Confidence",
    tagline: "Digital skills and technology awareness for girls",
    image: "/images/projects/digi-shala.jpg",
    tags: ["Digital Literacy", "AI Awareness", "Technology", "Online Safety", "Digital Confidence"],
    overview: [
      "Digi-Shala helps school- and college-going girls build digital skills and become more confident with technology.",
      "The programme focuses on digital literacy, AI awareness, educational technology, cyber security and responsible use of digital tools.",
      "A five-year collaborative initiative was designed to reach 1,800 girls across 18 educational institutions.",
      "Learning is brought directly into educational institutions so girls can develop digital capabilities alongside their regular education.",
    ],
    highlights: [
      "Collaborative initiative designed to reach 1,800 girls across 18 educational institutions over 5 years",
      "Comprehensive modules covering digital literacy, AI awareness, and cyber security",
      "Institutional approach taking technology where girls already study",
    ],
  },
  "sanjhi-art": {
    id: "sanjhi-art",
    name: "ROYAL SANJHI ART",
    category: "Keeping the traditional art of Braj alive",
    tagline: "Keeping the traditional art of Braj alive",
    image: "/images/projects/royal-sanjhi-training.jpg",
    tags: ["250+ artists trained", "120+ women earning", "Braj Heritage", "Traditional Art"],
    overview: [
      "Khajani trains women, students, young people and artisans in traditional Sanjhi techniques including stencil making, intricate paper cutting, patterns and motifs.",
      "The initiative connects the preservation of Braj's cultural heritage with creativity, training and livelihood opportunities.",
      "250+ artists trained · 120+ women earning through Sanjhi Art.",
    ],
    highlights: [
      "Preserving the sacred Braj stencil paper-cutting art through master artisan mentorship",
      "Expanding from traditional worship stencils to contemporary fashion and interior design",
      "Unique fusion of Sanjhi-inspired art with locally rooted cow-dung sustainable materials",
    ],
  },
  "mathura-poshak": {
    id: "mathura-poshak",
    name: "MATHURA ZARI POSHAK",
    category: "Traditional craftsmanship rooted in Mathura",
    tagline: "Traditional craftsmanship rooted in Mathura",
    image: "/images/projects/poshak-zari.jpg",
    tags: ["125 artisans", "30-day training initiative", "GI registered", "Braj Heritage"],
    overview: [
      "Mathura Zari Poshak is a traditional craft associated with the making and decoration of Poshak for deities in Mathura and Braj.",
      "Khajani works with artisans through training and skill development to strengthen the craft, support livelihoods and help traditional knowledge continue in practice.",
      "125 artisans · 30-day training initiative · GI registered.",
    ],
    highlights: [
      "Official Geographical Indication (GI) registration under Application No. 1147",
      "Specialized disciplines across fabric preparation, precision cutting, zari needlework, and gota embellishment",
      "Planned craft exchange and study exposure for 25 artisans to Nathdwara",
    ],
  },
  "brij-surabhi": {
    id: "brij-surabhi",
    name: "BRIJ-SURABHI",
    category: "Women’s SHGs · Cow Welfare · Temple Flowers · Sustainable Products · Livelihoods",
    tagline: "Turning local resources into useful products and livelihoods",
    image: "/images/projects/brij-surabhi-cow.jpg",
    tags: ["Women’s SHGs", "Cow Welfare", "Temple Flowers", "Sustainable Products", "Livelihoods"],
    overview: [
      "Brij-Surabhi brings together women’s Self Help Groups, cow welfare, responsible use of natural resources and livelihood creation in Braj.",
      "The project works in two main areas: making useful products from cow dung and transforming flowers collected from temples into new products instead of allowing them to go to waste.",
      "From diyas and traditional products to incense, fragrance and handmade paper, the project connects local resources with practical skills, environmental responsibility and livelihood opportunities.",
      "150 women from 10 Self Help Groups have had their handcrafted products showcased at prestigious platforms including the Uttar Pradesh International Trade Show.",
    ],
    highlights: [
      "Ecological circular economy model based on indigenous gaushala resources and temple floral offerings",
      "Diversion of tons of floral offerings into incense, fragrance, sambrani cups, and handmade paper",
      "Documented milestone: 150 women from 10 SHGs showcased at Uttar Pradesh International Trade Show",
    ],
  },
  "brij-anshuman": {
    id: "brij-anshuman",
    name: "BRIJ-ANSHUMAN",
    category: "Prison Inmates · Skill Training · Rehabilitation · Income · Second Chance",
    tagline: "Skill training and rehabilitation for prison inmates",
    image: "/images/projects/brij-anshuman-icon.jpg",
    tags: ["Prison Inmates", "Skill Training", "Rehabilitation", "Second Chance", "Income"],
    overview: [
      "Brij-Anshuman is Khajani Welfare Society's skill-development initiative for prison inmates.",
      "Through practical vocational training, inmates learn skills they can use to make products, earn income and prepare for opportunities after release.",
      "Documented training areas include Thakur Ji Poshak making, candle making, stitching, PPE kit manufacturing, beauty & wellness, Royal Sanjhi Art, and crochet.",
      "Programme documentation states that earnings from products made by trainees are directed directly to their bank accounts to help build financial security for the future.",
    ],
    highlights: [
      "15-day structured vocational training modules inside Mathura District Jail",
      "Direct transfer of product earnings into inmates' personal bank accounts",
      "Comprehensive trades spanning traditional Braj art, deity poshak, and utility crafts",
    ],
  },
  "brij-sangini": {
    id: "brij-sangini",
    name: "BRIJ-SANGINI",
    category: "Women’s Health · Menstrual Hygiene · Awareness · Blood Donation · Dignity",
    tagline: "Health, hygiene and dignity for women and girls",
    image: "/images/projects/sanitary-napkin-vending.jpg",
    tags: ["Women’s Health", "Menstrual Hygiene", "Awareness", "Blood Donation", "Dignity"],
    overview: [
      "Brij-Sangini brings together Khajani’s work in menstrual hygiene, women’s health awareness and blood donation.",
      "The programme focuses on practical needs that directly affect the everyday health, confidence and well-being of women, girls and communities.",
      "The programme combines awareness with practical action—including the installation of 25 sanitary napkin vending machines and destroyers across 25 government schools and colleges in 2020.",
      "Blood-donation initiatives encourage voluntary community participation to meet critical local healthcare needs.",
    ],
    highlights: [
      "Installation of 25 sanitary napkin vending machines & 25 destroyers across 25 government schools & colleges (2020)",
      "Structured 4-step framework: Talk & Explain, Provide Access, Support Safe Use, and Safe Disposal",
      "Regular voluntary blood donation camps addressing acute clinical supply needs",
    ],
  },
  "brij-seva": {
    id: "brij-seva",
    name: "BRIJ-SEVA",
    category: "Jal Seva · Daan Utsav · Plantation Drives · Community Participation",
    tagline: "Community service through practical action",
    image: "/images/projects/brij-seva-jal.jpg",
    tags: ["Jal Seva", "Daan Utsav", "Plantation Drives", "Community Participation"],
    overview: [
      "Brij-Seva brings together Khajani’s community-service initiatives in Mathura and Braj, including Jal Seva, Daan Utsav and plantation drives.",
      "The programme responds to everyday community needs through simple, practical action and encourages people to participate in serving the communities around them.",
      "From providing drinking water during the summer and organising giving initiatives to plantation drives, Brij-Seva responds to simple but important needs through practical community action.",
    ],
    highlights: [
      "Jal Seva: Clean drinking water distribution during peak summer heat in Mathura",
      "Daan Utsav: Dignified resource sharing and useful household item distribution",
      "Plantation Drives: Planting native trees and fostering community care for the environment",
      "Active volunteerism connecting youth, local communities, and institutions",
    ],
  },
  "brij-directory": {
    id: "brij-directory",
    name: "BRIJ BUSINESS WOMEN DIRECTORY",
    category: "Women Entrepreneurs · Local Businesses · Visibility · Connections · Opportunities",
    tagline: "A directory of women-led businesses in Mathura and Braj",
    image: "/images/projects/shg-federation.jpg",
    tags: ["Women Entrepreneurs", "Local Businesses", "Visibility", "Connections", "Opportunities"],
    overview: [
      "The Brij Business Women Directory brings women entrepreneurs, home-based businesses and women-led enterprises onto one platform, making their products and services easier to discover.",
      "The initiative helps create visibility, connections and opportunities for women building their own businesses.",
      "Across Mathura and Braj, women run businesses from homes, shops, studios and small workspaces. The directory creates a common platform where women-led businesses can be listed, discovered and connected.",
    ],
    highlights: [
      "Dynamic searchable platform covering Crafts, Fashion, Food, Beauty, Education, and Services",
      "Direct bridge connecting Khajani skill-development alumni with commercial customers",
      "Public listing application with verification ensuring authentic women-led enterprise",
    ],
  },
};

/* ─── Editorial Transition Strip ─── */
const EditorialTransition = ({ line1, line2 }: { line1: string; line2: string }) => (
  <div className="py-14 bg-gradient-to-r from-cream-light via-accent/5 to-cream-light border-y border-border/40 relative overflow-hidden">
    <div className="absolute inset-0 bg-texture-subtle opacity-40 pointer-events-none" />
    <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
      <AnimeReveal variant="fade-up">
        <p className="text-xl md:text-2xl font-display font-medium text-primary/90 tracking-wide">
          {line1}
        </p>
        <p className="text-2xl md:text-3xl font-serif italic text-accent font-semibold mt-1">
          {line2}
        </p>
      </AnimeReveal>
    </div>
  </div>
);

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    document.title = "Our Work · Khajani Welfare Society";
  }, []);

  const openProjectModal = (projectId: string) => {
    const detail = PROJECT_DETAILS[projectId];
    if (detail) {
      setSelectedProject(detail);
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <Layout>
      {/* ════════════════════════════════════════════════════════════════
          SCREEN 1 — HERO
          OUR WORK · MATHURA & BRAJ
          Different needs call for different kinds of work.
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden min-h-[75vh] flex items-center py-20 lg:py-28">
        <AuroraBackground variant="dark" intensity={0.85} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-primary/90 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Eyebrow */}
            <AnimeReveal variant="fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase text-secondary bg-white/10 backdrop-blur-md border border-white/15 shadow-sm">
                <Compass size={14} className="text-secondary animate-pulse" />
                OUR WORK · MATHURA & BRAJ
              </span>
            </AnimeReveal>

            {/* Main Headline */}
            <AnimeReveal variant="fade-up" delay={150}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.12] mt-6 mb-6">
                Different needs call for <br className="hidden sm:inline" />
                <span className="font-serif italic font-normal text-secondary">
                  different kinds of work.
                </span>
              </h1>
            </AnimeReveal>

            {/* Supporting Copy */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="space-y-4 max-w-3xl text-white/85 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                <p>
                  Khajani Welfare Society’s work has grown through its engagement with people and communities in Mathura and the wider Braj region.
                </p>
                <p className="text-white/75 text-sm sm:text-base">
                  Today, that work takes many forms—long-term vocational training, short skill camps, education, digital learning, traditional arts and crafts, work with prison inmates, health and dignity initiatives, community service and women’s enterprise.
                </p>
                <p className="text-white/75 text-sm sm:text-base">
                  Each project has its own purpose and its own way of working. Together, they reflect the range of people, skills and communities that have become part of Khajani’s journey.
                </p>
              </div>
            </AnimeReveal>

            {/* Horizontal Domain Badges */}
            <AnimeReveal variant="fade-up" delay={450}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-white/90">
                {[
                  "Skills",
                  "Education",
                  "Heritage",
                  "Rehabilitation",
                  "Health",
                  "Community",
                  "Enterprise",
                ].map((tag, idx) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/90 shadow-sm"
                  >
                    {tag}
                    {idx < 6 && <span className="ml-2 sm:ml-3 text-secondary/60">·</span>}
                  </span>
                ))}
              </div>
            </AnimeReveal>

            {/* CTA Button */}
            <AnimeReveal variant="fade-up" delay={600}>
              <a
                href="#skills-training-education"
                className="mt-10 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary/95 text-secondary-foreground font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group"
              >
                <span>Explore Our Work</span>
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SCREEN 2 — SKILLS, TRAINING & EDUCATION
          Learning takes different forms.
      ════════════════════════════════════════════════════════════════ */}
      <section id="skills-training-education" className="py-12 sm:py-16 lg:py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Corner Art — anchored to the same container as the text, so it can't drift relative to it */}
          <div className="absolute top-0 right-4 h-[260px] xl:h-[320px] w-auto max-w-[55%] pointer-events-none select-none z-0 hidden lg:block">
            <img
              src="/images/projects/skills-header-art.png"
              alt=""
              className="h-full w-auto object-contain object-right-top opacity-90"
            />
          </div>

          {/* Section Header with Artwork & Quote Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-6 sm:mb-8">
            
            {/* Left Column: Title & Context */}
            <div className="lg:col-span-7">
              <AnimeReveal variant="fade-up">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#B85449] text-xs font-bold tracking-[0.2em] uppercase font-mono">
                    SKILLS · TRAINING · EDUCATION
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#B85449]/60" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.08]">
                  Learning takes
                  <br />
                  <span className="font-serif italic font-normal text-[#B85449]">
                    different forms.
                  </span>
                </h2>

                <div className="mt-5 space-y-2.5 text-muted-foreground text-sm sm:text-base leading-relaxed font-light max-w-xl">
                  <p>
                    Some skills require months of structured training. Others can be introduced through a focused camp or workshop. For young learners, the need may be stronger educational foundations rather than vocational training.
                  </p>
                  <p className="text-xs sm:text-sm text-primary font-medium">
                    Khajani works across each of these spaces through distinct programmes.
                  </p>
                </div>
              </AnimeReveal>
            </div>

            {/* Right Column: Top Label & Cursive Calligraphy */}
            <div className="lg:col-span-5 relative lg:min-h-[220px] xl:min-h-[260px]">
              {/* Top right label */}
              <div className="pl-3 border-l-2 border-[#D4AF37]/60 text-left z-10 lg:absolute lg:top-0 lg:right-0">
                <p className="text-[10px] font-mono tracking-[0.25em] font-bold text-[#8C6D46] uppercase leading-tight">
                  PEOPLE<br />HERITAGE<br />OPPORTUNITY
                </p>
              </div>

              {/* Cursive Tagline — positioned 5px lower under the bottom curve of the visible art */}
              <div className="relative z-10 text-right pr-2 sm:pr-6 mt-3 lg:mt-0 lg:absolute lg:top-[195px] xl:top-[235px] lg:right-0">
                <span className="font-handwriting text-2xl sm:text-3xl text-[#C49B55] italic block">
                  Skills for stronger communities
                </span>
              </div>
            </div>

          </div>

          {/* Programmes Grid — 3 Bespoke Editorial Cards (Not Numbered) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* ─── Programme 1: BRIJ-HUNAR ─── */}
            <AnimeReveal variant="fade-up" delay={100} className="h-full">
              <div
                id="brij-hunar"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#FAF0EE]/60 border border-[#ECD1CD] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Terracotta Spine/Tab */}
                <div className="flex w-full overflow-hidden border-b border-[#ECD1CD]/70">
                  {/* Left Colored Spine (No Numbers) */}
                  <div className="w-14 sm:w-16 bg-[#B85449] shrink-0 flex flex-col items-center justify-center py-6 text-white">
                    <Flower2 size={24} className="text-white drop-shadow-xs" />
                    <div className="w-5 h-[1.5px] bg-white/40 rounded-full mt-3" />
                  </div>

                  {/* Image Frame */}
                  <div className="flex-1 h-48 sm:h-52 relative overflow-hidden">
                    <img
                      src="/images/projects/upsdm-tailor.jpg"
                      alt="Brij-Hunar vocational training"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Long-Term Skill Development
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      BRIJ-HUNAR
                    </h3>
                    <p className="text-xs sm:text-sm font-serif italic font-semibold text-[#B85449] mb-3">
                      Long-term skill training for women and girls
                    </p>
                    <div className="space-y-2 text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-light">
                      <p>
                        Brij-Hunar provides structured vocational training in areas such as apparel and fashion, computer and digital skills, beauty and wellness, office skills, art and craft.
                      </p>
                      <p>
                        The programme helps participants develop practical skills that can support employment, self-employment and income generation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ECD1CD]/60">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      <span className="bg-[#FDF2F0] text-[#B85449] border border-[#F2D7D3] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Long-Term Training
                      </span>
                      <span className="bg-[#FDF2F0] text-[#B85449] border border-[#F2D7D3] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Apparel &amp; Fashion
                      </span>
                      <span className="bg-[#FDF2F0] text-[#B85449] border border-[#F2D7D3] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Digital &amp; Wellness
                      </span>
                    </div>

                    <Link
                      to="/projects/brij-hunar"
                      className="flex items-center justify-between group/link text-xs font-bold uppercase tracking-wider text-primary hover:text-[#B85449] transition-colors"
                    >
                      <span>EXPLORE BRIJ-HUNAR</span>
                      <span className="w-8 h-8 rounded-full border border-[#B85449]/40 flex items-center justify-center text-[#B85449] group-hover/link:bg-[#B85449] group-hover/link:text-white transition-all shadow-2xs">
                        <ArrowRight size={13} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Programme 2: BRIJ-NIPUN ─── */}
            <AnimeReveal variant="fade-up" delay={200} className="h-full">
              <div
                id="brij-nipun"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#EFF5F8]/60 border border-[#CFE0EA] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Dusty Blue Spine/Tab */}
                <div className="flex w-full overflow-hidden border-b border-[#CFE0EA]/70">
                  {/* Left Colored Spine (No Numbers) */}
                  <div className="w-14 sm:w-16 bg-[#4D7B97] shrink-0 flex flex-col items-center justify-center py-6 text-white">
                    <Palette size={24} className="text-white drop-shadow-xs" />
                    <div className="w-5 h-[1.5px] bg-white/40 rounded-full mt-3" />
                  </div>

                  {/* Image Frame */}
                  <div className="flex-1 h-48 sm:h-52 relative overflow-hidden">
                    <img
                      src="/images/projects/brij-nipun-activities.jpg"
                      alt="Brij-Nipun short-term workshop and camps"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Short-Term Skills &amp; Camps
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      BRIJ-NIPUN
                    </h3>
                    <p className="text-xs sm:text-sm font-serif italic font-semibold text-[#4D7B97] mb-3">
                      Short-term practical skill training
                    </p>
                    <div className="space-y-2 text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-light">
                      <p>
                        Brij-Nipun offers focused workshops and short training programmes in skills such as painting, Sanjhi art, baking, chocolate making, mehendi, nail art, clay work, creative crafts and digital skills.
                      </p>
                      <p>
                        Its flexible format gives participants an opportunity to learn and practise a useful skill without joining a long-duration training programme.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CFE0EA]/60">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      <span className="bg-[#F0F6FA] text-[#4D7B97] border border-[#D5E5EF] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Short-Term Camps
                      </span>
                      <span className="bg-[#F0F6FA] text-[#4D7B97] border border-[#D5E5EF] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Creative Crafts
                      </span>
                      <span className="bg-[#F0F6FA] text-[#4D7B97] border border-[#D5E5EF] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Flexible Workshops
                      </span>
                    </div>

                    <Link
                      to="/projects/brij-nipun"
                      className="flex items-center justify-between group/link text-xs font-bold uppercase tracking-wider text-primary hover:text-[#4D7B97] transition-colors"
                    >
                      <span>EXPLORE BRIJ-NIPUN</span>
                      <span className="w-8 h-8 rounded-full border border-[#4D7B97]/40 flex items-center justify-center text-[#4D7B97] group-hover/link:bg-[#4D7B97] group-hover/link:text-white transition-all shadow-2xs">
                        <ArrowRight size={13} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Programme 3: KHAJANI LEARNING ACADEMY ─── */}
            <AnimeReveal variant="fade-up" delay={300} className="h-full">
              <div
                id="kla"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#EFF5F1]/60 border border-[#CFE0D4] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Sage Green Spine/Tab */}
                <div className="flex w-full overflow-hidden border-b border-[#CFE0D4]/70">
                  {/* Left Colored Spine (No Numbers) */}
                  <div className="w-14 sm:w-16 bg-[#537762] shrink-0 flex flex-col items-center justify-center py-6 text-white">
                    <BookOpen size={24} className="text-white drop-shadow-xs" />
                    <div className="w-5 h-[1.5px] bg-white/40 rounded-full mt-3" />
                  </div>

                  {/* Image Frame */}
                  <div className="flex-1 h-48 sm:h-52 relative overflow-hidden">
                    <img
                      src="/images/projects/kla-students.jpg"
                      alt="Khajani Learning Academy students"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Education &amp; Learning
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      KHAJANI LEARNING ACADEMY
                    </h3>
                    <p className="text-xs sm:text-sm font-serif italic font-semibold text-[#537762] mb-3">
                      Learning support for girls who need it most
                    </p>
                    <div className="space-y-2 text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-light">
                      <p>
                        Khajani Learning Academy supports school-going girls from economically weaker families through remedial education, academic support and mentoring.
                      </p>
                      <p>
                        Along with regular learning, girls get opportunities for digital skills, art and craft, awareness programmes, communication, life skills and activities that build confidence.
                      </p>
                      <p className="font-bold text-xs text-primary pt-1">
                        ₹6,100 can support one girl for one year.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CFE0D4]/60">
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      <span className="bg-[#F0F6F2] text-[#537762] border border-[#D3E5D9] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Remedial Learning
                      </span>
                      <span className="bg-[#F0F6F2] text-[#537762] border border-[#D3E5D9] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        Academic Mentoring
                      </span>
                      <span className="bg-[#F0F6F2] text-[#537762] border border-[#D3E5D9] px-2.5 py-1 rounded-md text-[11px] font-medium">
                        ₹6,100 / Year
                      </span>
                    </div>

                    <Link
                      to="/projects/kla"
                      className="flex items-center justify-between group/link text-xs font-bold uppercase tracking-wider text-primary hover:text-[#537762] transition-colors"
                    >
                      <span>EXPLORE KHAJANI LEARNING ACADEMY</span>
                      <span className="w-8 h-8 rounded-full border border-[#537762]/40 flex items-center justify-center text-[#537762] group-hover/link:bg-[#537762] group-hover/link:text-white transition-all shadow-2xs">
                        <ArrowRight size={13} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

          </div>

          {/* Bottom Editorial Strip */}
          <div className="mt-14 pt-6 border-t border-border/70 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
            <span>SAME OPPORTUNITIES. BRIGHTER FUTURES.</span>
            <span>KHAJANI</span>
          </div>

        </div>
      </section>

      {/* ── Transition 1 ── */}
      <EditorialTransition
        line1="Learning is one way knowledge moves forward."
        line2="Tradition is another."
      />

      {/* ════════════════════════════════════════════════════════════════
          SCREEN 3 — HERITAGE & TRADITIONAL KNOWLEDGE
          Keeping knowledge in practice.
      ════════════════════════════════════════════════════════════════ */}
      <section id="heritage-traditional-knowledge" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] relative overflow-hidden border-y border-[#EAE2D5]">
        {/* Header Artwork — confined to the header row, does not bleed into the cards */}
        <div className="absolute top-0 inset-x-0 h-[300px] xl:h-[360px] pointer-events-none select-none z-0 overflow-hidden hidden lg:block">
          <div className="container mx-auto px-4 max-w-7xl h-full relative">
            <img
              src="/images/projects/heritage-header-art.png"
              alt=""
              className="w-full h-full object-contain object-right opacity-85"
            />
          </div>
        </div>
        <div className="absolute top-0 inset-x-0 h-[220px] pointer-events-none select-none z-0 overflow-hidden lg:hidden">
          <img
            src="/images/projects/heritage-header-art.png"
            alt=""
            className="w-full h-full object-cover object-top opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          {/* Section Header with Artwork & Heritage Elements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 sm:mb-10">
            
            {/* Left Column: Title & Context */}
            <div className="lg:col-span-7">
              <AnimeReveal variant="fade-up">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#B85D3B] text-xs font-bold tracking-[0.2em] uppercase font-mono">
                    BRAJ · CRAFT · LIVING HERITAGE
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#B85D3B]/60" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.08]">
                  Keeping knowledge
                  <br />
                  <span className="font-serif italic font-normal text-[#B85D3B]">
                    in practice.
                  </span>
                </h2>

                <div className="mt-5 space-y-2.5 text-muted-foreground text-sm sm:text-base leading-relaxed font-light max-w-xl">
                  <p>
                    Braj carries distinctive artistic and craft traditions shaped by generations of practice.
                  </p>
                  <p className="text-xs sm:text-sm text-primary font-medium">
                    Khajani’s heritage work engages with the people who practise these traditions, the knowledge involved in making them and the ways in which that knowledge can continue.
                  </p>
                </div>

                {/* Sub-strand line */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#EAE2D5]/70">
                  <span className="w-8 h-[1.5px] bg-[#B85D3B]/50" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.22em] text-[#8C6D46] uppercase">
                    PEOPLE · CRAFT · HERITAGE · LIVELIHOODS
                  </span>
                </div>
              </AnimeReveal>
            </div>

            {/* Right Column: Cursive Calligraphy positioned directly below visible artwork */}
            <div className="lg:col-span-5 relative flex flex-col items-end lg:min-h-[250px] xl:min-h-[290px]">
              {/* Overlay Cursive Tagline — sits just below the visible artwork */}
              <div className="relative z-10 text-right pr-2 sm:pr-4 mt-3 lg:mt-0 lg:absolute lg:top-[200px] xl:top-[240px] lg:right-0">
                <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-[#B85D3B] italic leading-tight block">
                  Rooted in practice.
                </span>
                <span className="font-handwriting text-2xl sm:text-3xl lg:text-4xl text-[#B85D3B] italic leading-tight block mt-1.5">
                  Carried forward together.
                </span>
              </div>
            </div>

          </div>

          {/* Programmes Grid — 3 Bespoke Editorial Cards (Not Numbered) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* ─── Programme 1: ROYAL SANJHI ART ─── */}
            <AnimeReveal variant="fade-up" delay={100} className="h-full">
              <div
                id="royal-sanjhi"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#FAF0EE]/60 border border-[#ECD1CD] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Terracotta Spine/Tab (No Numbers) */}
                <div className="flex w-full overflow-hidden border-b border-[#ECD1CD]/70">
                  {/* Left Colored Spine */}
                  <div className="w-14 sm:w-16 bg-[#B85D3B] shrink-0 flex flex-col items-center justify-center py-6 text-white">
                    <Flower2 size={24} className="text-white drop-shadow-xs" />
                    <div className="w-5 h-[1.5px] bg-white/40 rounded-full mt-3" />
                  </div>

                  {/* Image Frame */}
                  <div className="flex-1 h-48 sm:h-52 relative overflow-hidden">
                    <img
                      src="/images/projects/royal-sanjhi-training.jpg"
                      alt="Royal Sanjhi Art Workshop"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Living Heritage
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      ROYAL SANJHI ART
                    </h3>
                    <p className="text-sm font-serif italic text-[#B85D3B] font-semibold mb-3">
                      Keeping the traditional art of Braj alive
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      <p>
                        Khajani trains women, students, young people and artisans in traditional Sanjhi techniques including stencil making, intricate paper cutting, patterns and motifs.
                      </p>
                      <p>
                        The initiative connects the preservation of Braj's cultural heritage with creativity, training and livelihood opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ECD1CD]/60">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium">
                      <span className="bg-[#B85D3B]/10 text-[#B85D3B] font-semibold px-2.5 py-1 rounded-md">250+ artists trained</span>
                      <span className="bg-[#B85D3B]/10 text-[#B85D3B] font-semibold px-2.5 py-1 rounded-md">120+ women earning</span>
                    </div>
                    <Link
                      to="/projects/royal-sanjhi"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B85D3B] hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer font-mono"
                    >
                      <span>EXPLORE ROYAL SANJHI ART</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Programme 2: MATHURA ZARI POSHAK ─── */}
            <AnimeReveal variant="fade-up" delay={200} className="h-full">
              <div
                id="mathura-poshak"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#FAF5EB]/60 border border-[#EFE2C8] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Ochre/Sand Spine/Tab (No Numbers) */}
                <div className="flex w-full overflow-hidden border-b border-[#EFE2C8]/70">
                  {/* Left Colored Spine */}
                  <div className="w-14 sm:w-16 bg-[#C29853] shrink-0 flex flex-col items-center justify-center py-6 text-white">
                    <Feather size={24} className="text-white drop-shadow-xs" />
                    <div className="w-5 h-[1.5px] bg-white/40 rounded-full mt-3" />
                  </div>

                  {/* Image Frame */}
                  <div className="flex-1 h-48 sm:h-52 relative overflow-hidden">
                    <img
                      src="/images/projects/poshak-zari.jpg"
                      alt="Mathura Zari Poshak GI craft"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Craft · Heritage · GI
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      MATHURA ZARI POSHAK
                    </h3>
                    <p className="text-sm font-serif italic text-[#C29853] font-semibold mb-3">
                      Traditional craftsmanship rooted in Mathura
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      <p>
                        Mathura Zari Poshak is a traditional craft associated with the making and decoration of Poshak for deities in Mathura and Braj.
                      </p>
                      <p>
                        Khajani works with artisans through training and skill development to strengthen the craft, support livelihoods and help traditional knowledge continue in practice.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#EFE2C8]/60">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium">
                      <span className="bg-[#C29853]/15 text-[#8C6527] font-semibold px-2.5 py-1 rounded-md">125 artisans</span>
                      <span className="bg-[#C29853]/15 text-[#8C6527] font-semibold px-2.5 py-1 rounded-md">30-day training</span>
                      <span className="bg-[#C29853]/15 text-[#8C6527] font-semibold px-2.5 py-1 rounded-md">GI registered</span>
                    </div>
                    <Link
                      to="/projects/mathura-zari-poshak"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C29853] hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer font-mono"
                    >
                      <span>EXPLORE MATHURA ZARI POSHAK</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Programme 3: BRIJ-SURABHI ─── */}
            <AnimeReveal variant="fade-up" delay={300} className="h-full">
              <div
                id="brij-surabhi"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#EFF5F1]/60 border border-[#CFDDD3] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Sage Green Spine/Tab (No Numbers) */}
                <div className="flex w-full overflow-hidden border-b border-[#CFDDD3]/70">
                  {/* Left Colored Spine */}
                  <div className="w-14 sm:w-16 bg-[#557A61] shrink-0 flex flex-col items-center justify-center py-6 text-white">
                    <Leaf size={24} className="text-white drop-shadow-xs" />
                    <div className="w-5 h-[1.5px] bg-white/40 rounded-full mt-3" />
                  </div>

                  {/* Image Frame */}
                  <div className="flex-1 h-48 sm:h-52 relative overflow-hidden">
                    <img
                      src="/images/projects/brij-surabhi-cow.jpg"
                      alt="Brij-Surabhi Cow Welfare & Temple Flower Reuse"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Cow Welfare · Temple Flowers
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      BRIJ-SURABHI
                    </h3>
                    <p className="text-sm font-serif italic text-[#557A61] font-semibold mb-3">
                      Turning local resources into useful products and livelihoods
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      <p>
                        Brij-Surabhi works with women’s Self Help Groups and communities to create useful products from cow dung and reused temple flowers.
                      </p>
                      <p>
                        From diyas and traditional products to incense, fragrance and handmade paper, the project connects local resources with practical skills, environmental responsibility and livelihood opportunities.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CFDDD3]/60">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-[#557A61]/15 text-[#3D5A46] font-semibold px-2.5 py-1 rounded-md">Women’s SHGs</span>
                      <span className="bg-[#557A61]/15 text-[#3D5A46] font-semibold px-2.5 py-1 rounded-md">Cow Welfare</span>
                      <span className="bg-[#557A61]/15 text-[#3D5A46] font-semibold px-2.5 py-1 rounded-md">Temple Flowers</span>
                      <span className="bg-[#557A61]/15 text-[#3D5A46] font-semibold px-2.5 py-1 rounded-md">Livelihoods</span>
                    </div>
                    <Link
                      to="/projects/brij-surabhi"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#557A61] hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer font-mono"
                    >
                      <span>EXPLORE BRIJ-SURABHI</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

          </div>

          {/* Section Corner Accents */}
          <div className="mt-14 pt-6 border-t border-[#EAE2D5] flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#8C6D46]/70 uppercase">
            <span>CULTURE · CREATIVITY · COMMUNITY</span>
            <span>BRAJ FOREVER INSPIRES</span>
          </div>

        </div>
      </section>

      {/* ── Transition 2 ── */}
      <EditorialTransition
        line1="Knowledge can be preserved, learnt and reimagined."
        line2="Opportunity also needs to reach places where access is limited."
      />

      {/* ════════════════════════════════════════════════════════════════
          SCREEN 4 — REHABILITATION, HEALTH & DIGITAL LEARNING
          Taking opportunity beyond conventional spaces.
      ════════════════════════════════════════════════════════════════ */}
      <section id="rehabilitation-health-digital" className="py-12 sm:py-16 lg:py-20 bg-[#FAF7F2] relative overflow-hidden border-y border-[#EAE2D5]">

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          {/* Section Header with Artwork & Inclusion Elements */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14 sm:mb-16">
            
            {/* Left Column: Title & Context */}
            <div className="lg:col-span-7">
              <AnimeReveal variant="fade-up">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#B85D3B] text-xs font-bold tracking-[0.2em] uppercase font-mono">
                    ACCESS · DIGNITY · LEARNING
                  </span>
                  <span className="w-10 h-[1.5px] bg-[#B85D3B]/60" />
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.08]">
                  Taking opportunity beyond
                  <br />
                  <span className="font-serif italic font-normal text-[#B85D3B]">
                    conventional spaces.
                  </span>
                </h2>

                <div className="mt-5 space-y-2.5 text-muted-foreground text-sm sm:text-base leading-relaxed font-light max-w-xl">
                  <p>
                    Khajani’s work also reaches people and settings where the need is different—from prison inmates and community health initiatives to practical digital learning.
                  </p>
                </div>

                {/* Sub-strand line */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#EAE2D5]/70">
                  <span className="w-8 h-[1.5px] bg-[#B85D3B]/50" />
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.22em] text-[#8C6D46] uppercase">
                    OPPORTUNITY · PEOPLE · INCLUSION · EMPOWERMENT
                  </span>
                </div>
              </AnimeReveal>
            </div>

            {/* Right Column: Arch Art with Text — image left, text right */}
            <div className="lg:col-span-5 relative flex flex-row items-start justify-end gap-3 overflow-visible">
              {/* Left: Art Image — scaled 135%, anchored top-right */}
              <div
                className="relative shrink-0 origin-top-right"
                style={{ transform: "scale(1.35)", transformOrigin: "top right", width: "78%" }}
              >
                <img
                  src="/images/projects/inclusion-arch-art.png"
                  alt="Archway representing opportunity and new pathways"
                  className="w-full object-contain object-right-top select-none pointer-events-none"
                  style={{ maxHeight: "400px" }}
                />

                {/* Cursive tagline — overlaid at bottom-right of image */}
                <div className="absolute bottom-2 right-1 sm:right-3 text-right pointer-events-none">
                  <span
                    className="font-handwriting text-[1.5rem] sm:text-[1.85rem] lg:text-[2.1rem] text-[#B85D3B] italic leading-snug block"
                    style={{ textShadow: "0 1px 8px rgba(250,247,242,0.95), 0 0 3px rgba(250,247,242,1)" }}
                  >
                    Learning has<br />no boundaries.
                  </span>
                </div>
              </div>

              {/* Right: DIFFERENT PEOPLE BRIGHTER TOMORROWS label */}
              <div className="pt-1 pl-2.5 border-l-2 border-[#C4A070]/70 text-left z-10 shrink-0">
                <p className="text-[9px] sm:text-[10px] font-mono tracking-[0.28em] font-bold text-[#7A5530] uppercase leading-[1.6]">
                  DIFFERENT<br />
                  PEOPLE<br />
                  BRIGHTER<br />
                  TOMORROWS
                </p>
              </div>
            </div>

          </div>

          {/* Programmes Grid — 3 Bespoke Editorial Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* ─── Programme 1: BRIJ-ANSHUMAN ─── */}
            <AnimeReveal variant="fade-up" delay={100} className="h-full">
              <div
                id="brij-anshuman"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#FAF0EE]/60 border border-[#ECD1CD] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Terracotta Spine/Tab */}
                <div className="flex w-full overflow-hidden border-b border-[#ECD1CD]/70">
                  {/* Left Colored Spine */}
                  <div className="w-14 sm:w-16 bg-[#B85D3B] shrink-0 flex flex-col items-center justify-between py-5 text-white">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-mono font-bold tracking-wider">01</span>
                      <div className="w-5 h-[1px] bg-white/40 mt-1" />
                    </div>
                    <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center my-auto shadow-xs">
                      <BookOpen size={16} className="text-white" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>

                  {/* Image Frame */}
                  <Link to="/projects/brij-anshuman" className="flex-1 h-48 sm:h-52 relative overflow-hidden block group/img">
                    <img
                      src="/images/projects/brij-anshuman-icon.jpg"
                      alt="Brij-Anshuman Prison Rehabilitation Program"
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Rehabilitation & Learning
                    </span>
                  </Link>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      <Link to="/projects/brij-anshuman" className="hover:text-[#B85D3B] transition-colors">
                        BRIJ-ANSHUMAN
                      </Link>
                    </h3>
                    <p className="text-sm font-serif italic text-[#B85D3B] font-semibold mb-3">
                      Learning beyond conventional spaces.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      <p>
                        Brij-Anshuman brings Khajani's skill-development work into prisons and correctional settings.
                      </p>
                      <p>
                        Through practical training initiatives with inmates, the programme creates opportunities for learning and constructive engagement in an environment where access to conventional skill-development opportunities is limited.
                      </p>
                      <p>
                        The work is centred on skills, learning and rehabilitation, with dignity at its core.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ECD1CD]/60">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium">
                      <span className="bg-[#B85D3B]/10 text-[#B85D3B] font-semibold px-2.5 py-1 rounded-md">Skills</span>
                      <span className="bg-[#B85D3B]/10 text-[#B85D3B] font-semibold px-2.5 py-1 rounded-md">Learning</span>
                      <span className="bg-[#B85D3B]/10 text-[#B85D3B] font-semibold px-2.5 py-1 rounded-md">Rehabilitation</span>
                    </div>
                    <Link
                      to="/projects/brij-anshuman"
                      className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#B85D3B] hover:text-primary transition-colors group/link font-mono"
                    >
                      <span>EXPLORE BRIJ-ANSHUMAN</span>
                      <span className="w-7 h-7 rounded-full border border-[#B85D3B]/40 group-hover/link:border-[#B85D3B] group-hover/link:bg-[#B85D3B] group-hover/link:text-white flex items-center justify-center transition-all">
                        <ChevronRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Programme 2: BRIJ-SANGINI ─── */}
            <AnimeReveal variant="fade-up" delay={200} className="h-full">
              <div
                id="brij-sangini"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#EFF5F1]/60 border border-[#CFDDD3] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Sage Green Spine/Tab */}
                <div className="flex w-full overflow-hidden border-b border-[#CFDDD3]/70">
                  {/* Left Colored Spine */}
                  <div className="w-14 sm:w-16 bg-[#557A61] shrink-0 flex flex-col items-center justify-between py-5 text-white">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-mono font-bold tracking-wider">02</span>
                      <div className="w-5 h-[1px] bg-white/40 mt-1" />
                    </div>
                    <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center my-auto shadow-xs">
                      <Heart size={16} className="text-white" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>

                  {/* Image Frame */}
                  <Link to="/projects/brij-sangini" className="flex-1 h-48 sm:h-52 relative overflow-hidden block group/img">
                    <img
                      src="/images/projects/sanitary-napkin-vending.jpg"
                      alt="Brij-Sangini Health & Dignity Initiative"
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Health & Dignity
                    </span>
                  </Link>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      <Link to="/projects/brij-sangini" className="hover:text-[#557A61] transition-colors">
                        BRIJ-SANGINI
                      </Link>
                    </h3>
                    <p className="text-sm font-serif italic text-[#557A61] font-semibold mb-2">
                      Health, awareness and everyday dignity.
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      <p>
                        Brij-Sangini brings together Khajani's initiatives connected with health, awareness and dignity.
                      </p>
                      <p className="text-xs">
                        Rather than functioning as separate projects, activities such as Menstrual Hygiene initiatives and Blood Donation Camps form part of this larger programme:
                      </p>
                      <div className="p-3 rounded-2xl bg-white/80 border border-[#CFDDD3]/70 text-[11px] space-y-2 font-sans">
                        <div>
                          <span className="font-bold text-primary block text-[10px] uppercase tracking-wider">MENSTRUAL HYGIENE</span>
                          <span className="text-muted-foreground leading-tight block">
                            Khajani's menstrual-hygiene work combines awareness with practical intervention. Documented work includes the installation of 25 sanitary napkin vending machines and destroyers across 25 government schools and colleges.
                          </span>
                        </div>
                        <div>
                          <span className="font-bold text-primary block text-[10px] uppercase tracking-wider">BLOOD DONATION CAMPS</span>
                          <span className="text-muted-foreground leading-tight block">
                            Blood-donation camps bring together voluntary participation and a direct community-health need.
                          </span>
                        </div>
                      </div>
                      <p className="text-[10px] italic text-muted-foreground/90">
                        Other verified health and dignity initiatives can continue to be added within Brij-Sangini.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CFDDD3]/60">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-[#557A61]/15 text-[#3D5A46] font-semibold px-2.5 py-1 rounded-md">Health</span>
                      <span className="bg-[#557A61]/15 text-[#3D5A46] font-semibold px-2.5 py-1 rounded-md">Awareness</span>
                      <span className="bg-[#557A61]/15 text-[#3D5A46] font-semibold px-2.5 py-1 rounded-md">Dignity</span>
                      <span className="bg-[#557A61]/15 text-[#3D5A46] font-semibold px-2.5 py-1 rounded-md">Participation</span>
                    </div>
                    <Link
                      to="/projects/brij-sangini"
                      className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#557A61] hover:text-primary transition-colors group/link font-mono"
                    >
                      <span>EXPLORE BRIJ-SANGINI</span>
                      <span className="w-7 h-7 rounded-full border border-[#557A61]/40 group-hover/link:border-[#557A61] group-hover/link:bg-[#557A61] group-hover/link:text-white flex items-center justify-center transition-all">
                        <ChevronRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* ─── Programme 3: DIGI-SHALA ─── */}
            <AnimeReveal variant="fade-up" delay={300} className="h-full">
              <div
                id="digi-shala"
                className="rounded-3xl overflow-hidden flex flex-col h-full bg-gradient-to-b from-card via-card to-[#F0F4FA]/60 border border-[#CDD9E8] shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Media Top Section with Steel Blue Spine/Tab */}
                <div className="flex w-full overflow-hidden border-b border-[#CDD9E8]/70">
                  {/* Left Colored Spine */}
                  <div className="w-14 sm:w-16 bg-[#4A709C] shrink-0 flex flex-col items-center justify-between py-5 text-white">
                    <div className="flex flex-col items-center">
                      <span className="text-xs font-mono font-bold tracking-wider">03</span>
                      <div className="w-5 h-[1px] bg-white/40 mt-1" />
                    </div>
                    <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center my-auto shadow-xs">
                      <Laptop size={16} className="text-white" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                  </div>

                  {/* Image Frame */}
                  <Link to="/projects/digi-shala" className="flex-1 h-48 sm:h-52 relative overflow-hidden block group/img">
                    <img
                      src="/images/projects/digi-shala.jpg"
                      alt="Digi-Shala practical digital literacy"
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-xs border border-white/50 backdrop-blur-xs">
                      Digital Learning
                    </span>
                  </Link>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary tracking-tight mb-1">
                      <Link to="/projects/digi-shala" className="hover:text-[#4A709C] transition-colors">
                        DIGI-SHALA
                      </Link>
                    </h3>
                    <p className="text-sm font-serif italic text-[#4A709C] font-semibold mb-3">
                      Learning for an increasingly digital world.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      <p>
                        Digi-Shala brings digital learning into Khajani's wider education and skill-development work.
                      </p>
                      <p>
                        It provides practical exposure to relevant digital tools and helps participants develop greater familiarity and confidence in using technology.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#CDD9E8]/60">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-[#4A709C]/15 text-[#2A4D73] font-semibold px-2.5 py-1 rounded-md">Digital Learning</span>
                      <span className="bg-[#4A709C]/15 text-[#2A4D73] font-semibold px-2.5 py-1 rounded-md">Technology</span>
                      <span className="bg-[#4A709C]/15 text-[#2A4D73] font-semibold px-2.5 py-1 rounded-md">Practical Skills</span>
                    </div>
                    <Link
                      to="/projects/digi-shala"
                      className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#4A709C] hover:text-primary transition-colors group/link font-mono"
                    >
                      <span>EXPLORE DIGI-SHALA</span>
                      <span className="w-7 h-7 rounded-full border border-[#4A709C]/40 group-hover/link:border-[#4A709C] group-hover/link:bg-[#4A709C] group-hover/link:text-white flex items-center justify-center transition-all">
                        <ChevronRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

          </div>

          {/* Section Corner Accents */}
          <div className="mt-14 pt-6 border-t border-[#EAE2D5] flex items-center justify-between text-[10px] font-mono tracking-[0.25em] text-[#8C6D46]/70 uppercase">
            <span>SKILLS · DIGNITY · ACCESS · COMMUNITY</span>
            <span>SAME PEOPLE. MORE POSSIBILITIES.</span>
          </div>

        </div>
      </section>

      {/* ── Transition 3 ── */}
      <EditorialTransition
        line1="Some work begins with training."
        line2="Some begins simply with a community need."
      />

      {/* ════════════════════════════════════════════════════════════════
          SCREEN 5 — COMMUNITY & WOMEN’S ENTERPRISE
          When people participate, communities become stronger.
      ════════════════════════════════════════════════════════════════ */}
      <section id="community-womens-enterprise" className="py-20 lg:py-24 bg-card relative">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase inline-block mb-2">
                SERVICE · PARTICIPATION · ENTERPRISE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                When people participate, communities become stronger.
              </h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                Some Khajani initiatives begin not with a classroom or a formal training programme, but with participation—responding to a community need, sharing resources or creating connections.
              </p>
            </AnimeReveal>
          </div>

          {/* 2-Column Focus Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Programme 1: BRIJ-SEVA */}
            <AnimeReveal variant="fade-up" delay={100} className="h-full">
              <div
                id="brij-seva"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <Link to="/projects/brij-seva" className="relative aspect-[16/9] overflow-hidden block group/img">
                  <img
                    src="/images/projects/brij-seva-jal.jpg"
                    alt="Brij-Seva community drinking water service"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Community Service
                  </span>
                </Link>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">
                      <Link to="/projects/brij-seva" className="hover:text-accent transition-colors">
                        BRIJ-SEVA
                      </Link>
                    </h3>
                    <p className="text-base font-serif italic text-accent font-semibold mb-4">
                      Community service through practical action
                    </p>
                    <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Brij-Seva brings together Khajani’s community-service initiatives in Mathura and Braj, including Jal Seva, Daan Utsav and plantation drives.
                      </p>
                      <p>
                        The programme responds to everyday community needs through simple, practical action and encourages people to participate in serving the communities around them.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
                        <div className="p-3 rounded-xl bg-muted/40 border border-border/40 text-center sm:text-left">
                          <div className="flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-wide mb-1">
                            <Droplets size={13} className="text-secondary" />
                            Jal Seva
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            Drinking water during the summer months.
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-muted/40 border border-border/40 text-center sm:text-left">
                          <div className="flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-wide mb-1">
                            <Gift size={13} className="text-accent" />
                            Daan Utsav
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            Giving what can be useful to someone else.
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-muted/40 border border-border/40 text-center sm:text-left">
                          <div className="flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-wide mb-1">
                            <TreePine size={13} className="text-emerald-700" />
                            Plantation
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            Plant today. Care for tomorrow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Jal Seva</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Daan Utsav</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Plantation Drives</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Community Participation</span>
                    </div>
                    <Link
                      to="/projects/brij-seva"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5"
                    >
                      <span>EXPLORE BRIJ-SEVA →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* Programme 2: BRIJ BUSINESS WOMEN DIRECTORY */}
            <AnimeReveal variant="fade-up" delay={200} className="h-full">
              <div
                id="brij-directory"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <Link to="/projects/brij-directory" className="relative aspect-[16/9] overflow-hidden block group/img">
                  <img
                    src="/images/projects/shg-federation.jpg"
                    alt="Brij Business Women Directory women entrepreneurs"
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Women · Enterprise · Visibility
                  </span>
                </Link>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">
                      <Link to="/projects/brij-directory" className="hover:text-accent transition-colors">
                        BRIJ BUSINESS WOMEN DIRECTORY
                      </Link>
                    </h3>
                    <p className="text-base font-serif italic text-accent font-semibold mb-4">
                      A directory of women-led businesses in Mathura and Braj
                    </p>
                    <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        The Brij Business Women Directory brings women entrepreneurs, home-based businesses and women-led enterprises onto one platform, making their products and services easier to discover.
                      </p>
                      <p>
                        The initiative helps create visibility, connections and opportunities for women building their own businesses.
                      </p>
                      <div className="bg-muted/40 p-3.5 rounded-xl border border-border/40">
                        <p className="text-xs text-primary font-medium mb-1.5">
                          Connecting enterprise with visibility across:
                        </p>
                        <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-accent">
                          <span className="bg-background px-2 py-0.5 rounded-md border border-border/40">
                            Crafts & Sanjhi
                          </span>
                          <span className="bg-background px-2 py-0.5 rounded-md border border-border/40">
                            Fashion & Zari
                          </span>
                          <span className="bg-background px-2 py-0.5 rounded-md border border-border/40">
                            Home Food
                          </span>
                          <span className="bg-background px-2 py-0.5 rounded-md border border-border/40">
                            Beauty & Wellness
                          </span>
                          <span className="bg-background px-2 py-0.5 rounded-md border border-border/40">
                            Education & Services
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Women Entrepreneurs</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Local Businesses</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Visibility</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Opportunities</span>
                    </div>
                    <Link
                      to="/projects/brij-directory"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5"
                    >
                      <span>EXPLORE THE DIRECTORY →</span>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SCREEN 6 — EXPLORE THE COMPLETE PROJECT FAMILY
          Clean, visual navigation area of all 11 projects (In-page index)
      ════════════════════════════════════════════════════════════════ */}
      <section id="project-family" className="py-20 lg:py-24 bg-background relative border-t border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase inline-block mb-2">
                OUR PROGRAMMES & INITIATIVES
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight">
                Different initiatives. <br />
                <span className="font-serif italic font-normal text-accent">
                  Each with a purpose of its own.
                </span>
              </h2>
              <p className="mt-3 text-muted-foreground text-sm sm:text-base">
                Click any initiative below to inspect full program details and locate its presentation on this page.
              </p>
            </AnimeReveal>
          </div>

          {/* 11 Clean Visual Project Cards (Interactive In-Page Navigation) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[
              {
                id: "brij-hunar",
                name: "Brij-Hunar",
                subtitle: "Long-Term Skill Development",
                icon: Scissors,
                tag: "Vocational",
                link: "/projects/brij-hunar",
              },
              {
                id: "brij-nipun",
                name: "Brij-Nipun",
                subtitle: "Short-Term Skills & Camps",
                icon: Users,
                tag: "Workshops",
                link: "/projects/brij-nipun",
              },
              {
                id: "kla",
                name: "Khajani Learning Academy",
                subtitle: "Education & Learning",
                icon: BookOpen,
                tag: "Education",
                link: "/projects/kla",
              },
              {
                id: "digi-shala",
                name: "Digi-Shala",
                subtitle: "Digital Learning",
                icon: Laptop,
                tag: "Digital",
                link: "/projects/digi-shala",
              },
              {
                id: "sanjhi-art",
                name: "Royal Sanjhi Art",
                subtitle: "Keeping the traditional art of Braj alive",
                icon: Sparkles,
                tag: "Living Heritage",
                link: "/projects/royal-sanjhi",
              },
              {
                id: "mathura-poshak",
                name: "Mathura Zari Poshak",
                subtitle: "Traditional craftsmanship rooted in Mathura",
                icon: Palette,
                tag: "GI Registered",
                link: "/projects/mathura-zari-poshak",
              },
              {
                id: "brij-surabhi",
                name: "Brij-Surabhi",
                subtitle: "Cow Welfare · Temple Waste · Sustainable Livelihoods",
                icon: Flame,
                tag: "Ecology",
                link: "/projects/brij-surabhi",
              },
              {
                id: "brij-anshuman",
                name: "Brij-Anshuman",
                subtitle: "Rehabilitation & Learning",
                icon: ShieldAlert,
                tag: "Rehabilitation",
                link: "/projects/brij-anshuman",
              },
              {
                id: "brij-sangini",
                name: "Brij-Sangini",
                subtitle: "Health & Dignity",
                icon: Heart,
                tag: "Health",
                link: "/projects/brij-sangini",
              },
              {
                id: "brij-seva",
                name: "Brij-Seva",
                subtitle: "Community Service",
                icon: Droplets,
                tag: "Community",
                link: "/projects/brij-seva",
              },
              {
                id: "brij-directory",
                name: "Brij Business Women Directory",
                subtitle: "Women · Enterprise · Visibility",
                icon: Briefcase,
                tag: "Enterprise",
                link: "/projects/brij-directory",
              },
            ].map((proj, idx) => {
              const Icon = proj.icon;
              const cardContent = (
                <div className="group clay-card p-5 rounded-2xl flex flex-col justify-between h-full hover:border-accent/60 transition-all duration-300 border border-border/50 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                        {proj.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                      {proj.subtitle}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-accent group-hover:text-primary transition-colors">
                    <span>{proj.link ? "Explore Programme" : "View Program Overview"}</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );

              return (
                <AnimeReveal key={proj.name} variant="fade-up" delay={idx * 35}>
                  {proj.link ? (
                    <Link to={proj.link} className="block h-full">
                      {cardContent}
                    </Link>
                  ) : (
                    <div onClick={() => openProjectModal(proj.id)} className="h-full">
                      {cardContent}
                    </div>
                  )}
                </AnimeReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SCREEN 7 — HOW KHAJANI WORKS
          A COMMON THREAD
          Different projects. A shared way of working.
      ════════════════════════════════════════════════════════════════ */}
      <section id="how-khajani-works" className="py-20 lg:py-24 bg-card relative">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="max-w-3xl mb-14">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase inline-block mb-2">
                A COMMON THREAD
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Different projects. <br />
                <span className="font-serif italic font-normal text-accent">
                  A shared way of working.
                </span>
              </h2>
              <div className="mt-4 space-y-2 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  A months-long vocational programme cannot be approached in the same way as a community-service activity. Working with an artisan tradition is different from working in a classroom or a prison.
                </p>
                <p className="text-sm sm:text-base text-primary/80 font-medium">
                  The form changes with the context. A few principles remain consistent.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* 5 Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "UNDERSTAND THE CONTEXT",
                desc: "Begin with the people, place and actual need.",
              },
              {
                num: "02",
                title: "KEEP IT PRACTICAL",
                desc: "Learning and participation should connect with real activity.",
              },
              {
                num: "03",
                title: "BUILD CAPABILITY",
                desc: "Create opportunities for people to learn, practise and participate.",
              },
              {
                num: "04",
                title: "RESPECT EXISTING KNOWLEDGE",
                desc: "Especially where traditional skills and community knowledge already exist.",
              },
              {
                num: "05",
                title: "CREATE CONTINUITY",
                desc: "Where possible, allow an initiative to grow beyond a single activity or event.",
              },
            ].map((item, idx) => (
              <AnimeReveal key={item.num} variant="fade-up" delay={idx * 80} className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <div className="clay-card p-6 rounded-2xl h-full flex flex-col justify-between border border-border/50 hover:border-accent/40 transition-all">
                  <div>
                    <span className="text-3xl font-display font-bold text-secondary/70">
                      {item.num}
                    </span>
                    <h3 className="text-base font-display font-bold text-primary mt-2 tracking-wide uppercase">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimeReveal>
            ))}
          </div>

          {/* Accent Quote Callout */}
          <AnimeReveal variant="fade-up" delay={500}>
            <div className="mt-12 text-center p-6 rounded-2xl bg-accent/5 border border-accent/20">
              <p className="text-xl sm:text-2xl font-serif italic text-accent font-medium">
                “Different methods. The same respect for people.”
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          SCREEN 8 — CLOSING
          OUR WORK · OUR PEOPLE · OUR PLACE
          Different work. Shared roots.
      ════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-primary text-white py-24 lg:py-32 overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.9} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/25 via-transparent to-primary pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <AnimeReveal variant="fade-up">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-secondary mb-4 bg-white/10 px-4 py-1 rounded-full border border-white/15">
              OUR WORK · OUR PEOPLE · OUR PLACE
            </span>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={150}>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-6">
              Different work. <br />
              <span className="font-serif italic font-normal text-secondary">
                Shared roots.
              </span>
            </h2>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={300}>
            <div className="space-y-4 text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light">
              <p>
                Khajani’s projects do not follow a single model because the people and circumstances they respond to are not the same.
              </p>
              <p className="text-white/75 text-sm sm:text-base">
                A long-term training programme requires time and structure. A short camp serves a different purpose. Traditional knowledge requires continuity. Education needs consistency. Rehabilitation requires access and dignity. Community service may begin with an immediate need.
              </p>
              <p className="text-white/90 text-sm sm:text-base font-medium">
                Across these different forms of work is a continuing relationship with people, practical learning and the communities of Mathura and Braj.
              </p>
            </div>
          </AnimeReveal>

          {/* Handwritten Signature Quote */}
          <AnimeReveal variant="fade-up" delay={450}>
            <div className="mt-10 mb-10 py-4">
              <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-secondary leading-tight">
                “The need shapes the work. <br className="hidden sm:inline" />
                People give it meaning.”
              </p>
            </div>
          </AnimeReveal>

          {/* Dual CTAs (General Site Engagement) */}
          <AnimeReveal variant="fade-up" delay={600}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/media"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary hover:bg-secondary/95 text-secondary-foreground font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group"
              >
                <span>Explore Our Impact</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wider uppercase border border-white/20 transition-all duration-300 backdrop-blur-md hover:scale-105 active:scale-95"
              >
                <span>Connect With Khajani</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          IN-PAGE PROJECT DETAIL MODAL
          Allows users to inspect deep-dive info without leaving /projects
      ════════════════════════════════════════════════════════════════ */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl bg-card rounded-3xl border border-border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden flex-shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Close button */}
              <button
                type="button"
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md border border-white/20"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-secondary text-secondary-foreground shadow-sm">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1.5">
                  {selectedProject.name}
                </h3>
                <p className="text-sm font-serif italic text-white/90">
                  {selectedProject.tagline}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-muted text-primary text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Overview paragraphs */}
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {selectedProject.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Key Strands if present */}
              {selectedProject.keyStrands && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Core Operational Strands
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.keyStrands.map((strand) => (
                      <div
                        key={strand.title}
                        className="p-3.5 rounded-xl bg-muted/40 border border-border/50 text-xs"
                      >
                        <strong className="block text-primary font-semibold mb-1 uppercase tracking-wide">
                          {strand.title}
                        </strong>
                        <p className="text-muted-foreground leading-relaxed">{strand.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Highlights */}
              {selectedProject.highlights && (
                <div className="space-y-2 pt-2 border-t border-border/40">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                    Verified Dimensions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-8 border-t border-border/60 bg-muted/30 flex items-center justify-between">
              <a
                href={`#${selectedProject.id}`}
                onClick={closeProjectModal}
                className="text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors inline-flex items-center gap-1.5"
              >
                <span>Jump to card on this page</span>
                <ArrowDown size={13} />
              </a>
              <button
                type="button"
                onClick={closeProjectModal}
                className="px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 text-xs font-bold tracking-wider uppercase transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProjectsPage;
