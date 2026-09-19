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
  ExternalLink,
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
    category: "Digital Learning",
    tagline: "Learning for an increasingly digital world.",
    image: "/images/projects/digi-shala.jpg",
    tags: ["Digital Learning", "Technology", "Practical Skills", "Inclusion"],
    overview: [
      "Digi-Shala brings digital learning into Khajani’s wider education and skill-development work.",
      "It provides practical exposure to relevant digital tools and helps participants develop greater familiarity and confidence in using technology.",
    ],
    highlights: [
      "Hands-on exposure to computers, mobile internet, and essential office suites",
      "Awareness of digital identity, secure banking, and citizen e-governance services",
      "Overcoming technophobia for rural learners and traditional artisans",
    ],
  },
  "sanjhi-art": {
    id: "sanjhi-art",
    name: "SANJHI ART REVIVAL",
    category: "Living Heritage",
    tagline: "A tradition continues when it is practised.",
    image: "/images/projects/royal-sanjhi-training.jpg",
    tags: ["Sanjhi", "Braj", "Practice", "Continuity", "Living Heritage"],
    overview: [
      "Sanjhi is closely associated with the cultural and devotional landscape of Braj.",
      "Khajani’s initiative focuses on the revival and continuity of the art—bringing attention to its practice and creating opportunities for its knowledge and techniques to be learnt and carried forward.",
    ],
    highlights: [
      "Revival of delicate hand-stencil paper cutting rooted in the Radha-Krishna tradition",
      "Mentorship from traditional master craftsmen passing techniques to new practitioners",
      "Exploration of living applications in apparel, home decor, and contemporary galleries",
    ],
  },
  "mathura-poshak": {
    id: "mathura-poshak",
    name: "MATHURA ZARI POSHAK",
    category: "Craft · Heritage · GI",
    tagline: "A distinctive craft identity of Mathura.",
    image: "/images/projects/poshak-zari.jpg",
    tags: ["Craft", "Artisans", "Heritage", "Geographical Indication (GI)"],
    overview: [
      "Khajani’s engagement with Mathura Zari Poshak connects traditional craft knowledge, artisans and the cultural identity of Mathura.",
      "Its recognition as a Geographical Indication (GI) marks an important chapter in this journey.",
      "The initiative honours centuries-old temple attire embroidery traditions while safeguarding artisan rights and craft authenticity.",
    ],
    highlights: [
      "Formal Geographical Indication (GI) recognition securing Mathura's artisan heritage",
      "Preservation of specialized zari, gota, and hand-embroidery techniques",
      "Supporting the artisan ecosystem supplying sanctum attire across India and abroad",
    ],
  },
  "brij-surabhi": {
    id: "brij-surabhi",
    name: "BRIJ-SURABHI",
    category: "Cow Welfare · Temple Waste · Sustainable Livelihoods",
    tagline: "Turning what is often discarded into something of value.",
    image: "/images/projects/brij-surabhi-cow.jpg",
    tags: ["Cow Welfare", "Waste to Value", "Skills", "Livelihoods"],
    overview: [
      "Brij-Surabhi brings together two concerns closely connected with the Braj region—cow welfare and temple waste—and links them with practical skill development and livelihood activity.",
      "Through training, cow dung is transformed into traditional and useful products, including diyas and decorative or devotional items.",
      "A second strand works with discarded temple flowers and organic material, training participants to create products such as dhoopbatti, agarbatti, sambrani cups, itra and paper.",
      "In both, the approach is practical: reduce waste, make productive use of locally available material and develop useful skills.",
    ],
    highlights: [
      "Ecological circular economy model based on indigenous gaushala resources",
      "Diversion of tons of floral offerings from the Yamuna river into fragrant organic incense",
      "Sustainable home-based income generation for rural women collectives",
    ],
  },
  "brij-anshuman": {
    id: "brij-anshuman",
    name: "BRIJ-ANSHUMAN",
    category: "Rehabilitation & Learning",
    tagline: "Learning beyond conventional spaces.",
    image: "/images/projects/brij-anshuman-icon.jpg",
    tags: ["Skills", "Learning", "Rehabilitation", "Dignity"],
    overview: [
      "Brij-Anshuman brings Khajani’s skill-development work into prisons and correctional settings.",
      "Through practical training initiatives with inmates, the programme creates opportunities for learning and constructive engagement in an environment where access to conventional skill-development opportunities is limited.",
      "The work is centred on skills, learning and rehabilitation, with dignity at its core.",
    ],
    highlights: [
      "Correctional facility vocational workshops fostering creative engagement and self-worth",
      "Practical livelihood skills that facilitate reintegration into society upon release",
      "Respectful, dignity-first learning atmosphere breaking cycles of institutional despair",
    ],
  },
  "brij-sangini": {
    id: "brij-sangini",
    name: "BRIJ-SANGINI",
    category: "Health & Dignity",
    tagline: "Health, awareness and everyday dignity.",
    image: "/images/projects/sanitary-napkin-vending.jpg",
    tags: ["Health", "Awareness", "Dignity", "Participation"],
    overview: [
      "Brij-Sangini brings together Khajani’s initiatives connected with health, awareness and dignity.",
      "Rather than functioning as separate projects, activities such as Menstrual Hygiene initiatives and Blood Donation Camps form part of this larger programme.",
    ],
    keyStrands: [
      {
        title: "Menstrual Hygiene",
        desc: "Khajani’s menstrual-hygiene work combines awareness with practical intervention. Documented work includes the installation of 25 sanitary napkin vending machines and destroyers across 25 government schools and colleges.",
      },
      {
        title: "Blood Donation Camps",
        desc: "Blood-donation camps bring together voluntary participation and a direct community-health need. Other verified health and dignity initiatives can continue to be added within Brij-Sangini.",
      },
    ],
    highlights: [
      "Breakdown of deep-rooted taboos through frank, supportive adolescent health sessions",
      "Direct hardware infrastructure: 25 automated vending units ensuring institutional access",
      "Community blood donation drives addressing acute local clinical supply needs",
    ],
  },
  "brij-seva": {
    id: "brij-seva",
    name: "BRIJ-SEVA",
    category: "Community Service",
    tagline: "Service begins with showing up.",
    image: "/images/projects/brij-seva-jal.jpg",
    tags: ["Service", "Giving", "Participation", "Community"],
    overview: [
      "Brij-Seva brings together Khajani’s community-service initiatives.",
      "Its activities vary according to the need and occasion, but share a straightforward purpose: people coming together to contribute in practical ways.",
    ],
    keyStrands: [
      {
        title: "Jal Seva",
        desc: "Community service centred around providing drinking water during periods when it is particularly needed.",
      },
      {
        title: "Daan Utsav",
        desc: "Activities centred on giving, participation and bringing available resources together with community needs.",
      },
    ],
    highlights: [
      "Active citizen volunteerism answering direct humanitarian and climate realities",
      "Summertime clean drinking water kiosks serving pilgrims and local residents",
      "Resource mobilization channelled directly to underserved families without administrative drag",
    ],
  },
  "brij-directory": {
    id: "brij-directory",
    name: "BRIJ BUSINESS WOMEN DIRECTORY",
    category: "Women · Enterprise · Visibility",
    tagline: "Bringing Braj’s women-led enterprises into view.",
    image: "/images/projects/shg-federation.jpg",
    tags: ["Women", "Enterprise", "Visibility", "Market Access"],
    overview: [
      "The Brij Business Women Directory is an initiative to identify, document and showcase women entrepreneurs, home-based workers, artisans and skilled women across the Braj region.",
      "It creates a common platform where women-led businesses and skills can become more visible, build connections, reach potential customers and discover opportunities for collaboration.",
      "Its purpose can be understood through three simple ideas: Identity & Visibility · Network & Connect · Promote & Showcase.",
    ],
    highlights: [
      "Documentation of micro-enterprises, skilled artisans, and home producers",
      "Bridging grassroots women creators with urban buyers, events, and CSR networks",
      "Collective solidarity and peer learning among women business owners across Braj",
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
      <section id="skills-training-education" className="py-20 lg:py-24 bg-background relative">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase inline-block mb-2">
                SKILLS · TRAINING · EDUCATION
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Learning takes different forms.
              </h2>
              <div className="mt-4 space-y-2 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Some skills require months of structured training. Others can be introduced through a focused camp or workshop. For young learners, the need may be stronger educational foundations rather than vocational training.
                </p>
                <p className="text-sm sm:text-base text-primary/80 font-medium">
                  Khajani works across each of these spaces through distinct programmes.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Programme 1: BRIJ-HUNAR */}
            <AnimeReveal variant="fade-up" delay={100} className="h-full">
              <div
                id="brij-hunar"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/upsdm-tailor.jpg"
                    alt="Brij-Hunar vocational training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Long-Term Skill Development
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      BRIJ-HUNAR
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      Long-term skill training for women and girls
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Brij-Hunar provides structured vocational training in areas such as apparel and fashion, computer and digital skills, beauty and wellness, office skills, art and craft.
                      </p>
                      <p>
                        The programme helps participants develop practical skills that can support employment, self-employment and income generation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Long-Term Training</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Apparel &amp; Fashion</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Digital &amp; Wellness</span>
                    </div>
                    <Link
                      to="/projects/brij-hunar"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5"
                    >
                      <span>EXPLORE BRIJ-HUNAR</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* Programme 2: BRIJ-NIPUN */}
            <AnimeReveal variant="fade-up" delay={200} className="h-full">
              <div
                id="brij-nipun"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/brij-nipun-activities.jpg"
                    alt="Brij-Nipun short-term workshop and camps"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Short-Term Skills & Camps
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      BRIJ-NIPUN
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      Short-term practical skill training
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Brij-Nipun offers focused workshops and short training programmes in skills such as painting, Sanjhi art, baking, chocolate making, mehendi, nail art, clay work, creative crafts and digital skills.
                      </p>
                      <p>
                        Its flexible format gives participants an opportunity to learn and practise a useful skill without joining a long-duration training programme.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Short-Term Camps</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Creative Crafts</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Flexible Workshops</span>
                    </div>
                    <Link
                      to="/projects/brij-nipun"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5"
                    >
                      <span>EXPLORE BRIJ-NIPUN</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* Programme 3: KHAJANI LEARNING ACADEMY */}
            <AnimeReveal variant="fade-up" delay={300} className="h-full">
              <div
                id="kla"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/kla-students.jpg"
                    alt="Khajani Learning Academy students"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Education & Learning
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      KHAJANI LEARNING ACADEMY
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      Stronger foundations for what comes next.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Khajani Learning Academy extends the organisation’s work into education.
                      </p>
                      <p>
                        It provides structured learning support designed around the educational needs of its learners, with an emphasis on strengthening foundations, regular learning and confidence.
                      </p>
                      <p>
                        The Academy represents a continuing strand of Khajani’s work with younger learners.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Education</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Learning Support</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Foundations</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("kla")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore Khajani Learning Academy</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimeReveal>
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
      <section id="heritage-traditional-knowledge" className="py-20 lg:py-24 bg-card relative">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase inline-block mb-2">
                BRAJ · CRAFT · LIVING HERITAGE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Keeping knowledge in practice.
              </h2>
              <div className="mt-4 space-y-2 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Braj carries distinctive artistic and craft traditions shaped by generations of practice.
                </p>
                <p className="text-sm sm:text-base text-primary/80 font-medium">
                  Khajani’s heritage work engages with the people who practise these traditions, the knowledge involved in making them and the ways in which that knowledge can continue.
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Programme 1: SANJHI ART REVIVAL */}
            <AnimeReveal variant="fade-up" delay={100} className="h-full">
              <div
                id="sanjhi-art"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/royal-sanjhi-training.jpg"
                    alt="Sanjhi Art Revival Workshop"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Living Heritage
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      SANJHI ART REVIVAL
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      A tradition continues when it is practised.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Sanjhi is closely associated with the cultural and devotional landscape of Braj.
                      </p>
                      <p>
                        Khajani’s initiative focuses on the revival and continuity of the art—bringing attention to its practice and creating opportunities for its knowledge and techniques to be learnt and carried forward.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Sanjhi</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Braj</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Practice</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Continuity</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("sanjhi-art")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore Sanjhi Art Revival</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* Programme 2: MATHURA ZARI POSHAK */}
            <AnimeReveal variant="fade-up" delay={200} className="h-full">
              <div
                id="mathura-poshak"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/poshak-zari.jpg"
                    alt="Mathura Zari Poshak GI craft"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Craft · Heritage · GI
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      MATHURA ZARI POSHAK
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      A distinctive craft identity of Mathura.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Khajani’s engagement with Mathura Zari Poshak connects traditional craft knowledge, artisans and the cultural identity of Mathura.
                      </p>
                      <p>
                        Its recognition as a Geographical Indication (GI) marks an important chapter in this journey, explored in detail on Khajani’s dedicated GI page.
                      </p>
                      <p className="text-xs text-muted-foreground/75 italic">
                        *This stays deliberately brief because the dedicated GI page carries the complete story.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Craft</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Artisans</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Heritage</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("mathura-poshak")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore Mathura Zari Poshak GI</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* Programme 3: BRIJ-SURABHI */}
            <AnimeReveal variant="fade-up" delay={300} className="h-full">
              <div
                id="brij-surabhi"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/brij-surabhi-cow.jpg"
                    alt="Brij-Surabhi Cow Welfare & Temple Waste"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Cow Welfare · Temple Waste
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      BRIJ-SURABHI
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      Turning what is often discarded into something of value.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Brij-Surabhi brings together two concerns closely connected with the Braj region—cow welfare and temple waste—and links them with practical skill development and livelihood activity.
                      </p>
                      <p>
                        Through training, cow dung is transformed into traditional and useful products, including diyas and decorative or devotional items.
                      </p>
                      <p>
                        A second strand works with discarded temple flowers and organic material, training participants to create products such as dhoopbatti, agarbatti, sambrani cups, itra and paper.
                      </p>
                      <p>
                        In both, the approach is practical: reduce waste, make productive use of locally available material and develop useful skills.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Cow Welfare</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Waste to Value</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Skills</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Livelihoods</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("brij-surabhi")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore Brij-Surabhi</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimeReveal>
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
      <section id="rehabilitation-health-digital" className="py-20 lg:py-24 bg-background relative">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase inline-block mb-2">
                ACCESS · DIGNITY · LEARNING
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Taking opportunity beyond conventional spaces.
              </h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                Khajani’s work also reaches people and settings where the need is different—from prison inmates and community health initiatives to practical digital learning.
              </p>
            </AnimeReveal>
          </div>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Programme 1: BRIJ-ANSHUMAN */}
            <AnimeReveal variant="fade-up" delay={100} className="h-full">
              <div
                id="brij-anshuman"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/brij-anshuman-icon.jpg"
                    alt="Brij-Anshuman Prison Rehabilitation Program"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Rehabilitation & Learning
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      BRIJ-ANSHUMAN
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      Learning beyond conventional spaces.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Brij-Anshuman brings Khajani’s skill-development work into prisons and correctional settings.
                      </p>
                      <p>
                        Through practical training initiatives with inmates, the programme creates opportunities for learning and constructive engagement in an environment where access to conventional skill-development opportunities is limited.
                      </p>
                      <p>
                        The work is centred on skills, learning and rehabilitation, with dignity at its core.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Skills</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Learning</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Rehabilitation</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("brij-anshuman")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore Brij-Anshuman</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* Programme 2: BRIJ-SANGINI */}
            <AnimeReveal variant="fade-up" delay={200} className="h-full">
              <div
                id="brij-sangini"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/sanitary-napkin-vending.jpg"
                    alt="Brij-Sangini Health & Dignity Initiative"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Health & Dignity
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      BRIJ-SANGINI
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      Health, awareness and everyday dignity.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Brij-Sangini brings together Khajani’s initiatives connected with health, awareness and dignity.
                      </p>
                      <p>
                        Rather than functioning as separate projects, activities such as Menstrual Hygiene initiatives and Blood Donation Camps form part of this larger programme:
                      </p>
                      <div className="bg-muted/40 p-3 rounded-xl space-y-2 border border-border/40 text-xs">
                        <p>
                          <strong className="text-primary font-semibold block uppercase tracking-wide text-[10px]">
                            Menstrual Hygiene
                          </strong>
                          Khajani’s menstrual-hygiene work combines awareness with practical intervention. Documented work includes the installation of 25 sanitary napkin vending machines and destroyers across 25 government schools and colleges.
                        </p>
                        <p>
                          <strong className="text-primary font-semibold block uppercase tracking-wide text-[10px]">
                            Blood Donation Camps
                          </strong>
                          Blood-donation camps bring together voluntary participation and a direct community-health need.
                        </p>
                      </div>
                      <p className="text-[11px] text-muted-foreground/80 italic">
                        Other verified health and dignity initiatives can continue to be added within Brij-Sangini.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Health</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Awareness</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Dignity</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Participation</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("brij-sangini")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore Brij-Sangini</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            {/* Programme 3: DIGI-SHALA */}
            <AnimeReveal variant="fade-up" delay={300} className="h-full">
              <div
                id="digi-shala"
                className="clay-card rounded-2xl overflow-hidden flex flex-col h-full group hover:border-accent/40 transition-all border border-border/60"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/projects/digi-shala.jpg"
                    alt="Digi-Shala practical digital literacy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Digital Learning
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-1">
                      DIGI-SHALA
                    </h3>
                    <p className="text-sm font-serif italic text-accent font-semibold mb-3">
                      Learning for an increasingly digital world.
                    </p>
                    <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Digi-Shala brings digital learning into Khajani’s wider education and skill-development work.
                      </p>
                      <p>
                        It provides practical exposure to relevant digital tools and helps participants develop greater familiarity and confidence in using technology.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Digital Learning</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Technology</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Practical Skills</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("digi-shala")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore Digi-Shala</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </AnimeReveal>
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
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/projects/brij-seva-jal.jpg"
                    alt="Brij-Seva community drinking water service"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Community Service
                  </span>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">
                      BRIJ-SEVA
                    </h3>
                    <p className="text-base font-serif italic text-accent font-semibold mb-4">
                      Service begins with showing up.
                    </p>
                    <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        Brij-Seva brings together Khajani’s community-service initiatives.
                      </p>
                      <p>
                        Its activities vary according to the need and occasion, but share a straightforward purpose: people coming together to contribute in practical ways.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
                        <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40">
                          <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wide mb-1">
                            <Droplets size={14} className="text-secondary" />
                            Jal Seva
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Community service centred around providing drinking water during periods when it is particularly needed.
                          </p>
                        </div>
                        <div className="p-3.5 rounded-xl bg-muted/40 border border-border/40">
                          <div className="flex items-center gap-2 text-primary font-semibold text-xs uppercase tracking-wide mb-1">
                            <Gift size={14} className="text-accent" />
                            Daan Utsav
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            Activities centred on giving, participation and bringing available resources together with community needs.
                          </p>
                        </div>
                      </div>
                      <p className="text-[11px] text-muted-foreground/80 italic">
                        Other verified community-service activities can sit within Brij-Seva as the programme develops.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Service</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Giving</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Participation</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Community</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("brij-seva")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore Brij-Seva</span>
                      <ArrowRight size={14} />
                    </button>
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
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src="/images/projects/shg-federation.jpg"
                    alt="Brij Business Women Directory women entrepreneurs"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-md">
                    Women · Enterprise · Visibility
                  </span>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-1">
                      BRIJ BUSINESS WOMEN DIRECTORY
                    </h3>
                    <p className="text-base font-serif italic text-accent font-semibold mb-4">
                      Bringing Braj’s women-led enterprises into view.
                    </p>
                    <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      <p>
                        The Brij Business Women Directory is an initiative to identify, document and showcase women entrepreneurs, home-based workers, artisans and skilled women across the Braj region.
                      </p>
                      <p>
                        It creates a common platform where women-led businesses and skills can become more visible, build connections, reach potential customers and discover opportunities for collaboration.
                      </p>
                      <div className="bg-muted/40 p-3.5 rounded-xl border border-border/40">
                        <p className="text-xs text-primary font-medium mb-1.5">
                          Its purpose can be understood through three simple ideas:
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs font-semibold text-accent">
                          <span className="bg-background px-2.5 py-1 rounded-md border border-border/40">
                            Identity & Visibility
                          </span>
                          <span className="bg-background px-2.5 py-1 rounded-md border border-border/40">
                            Network & Connect
                          </span>
                          <span className="bg-background px-2.5 py-1 rounded-md border border-border/40">
                            Promote & Showcase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex flex-wrap gap-1.5 mb-4 text-[11px] font-medium text-primary/80">
                      <span className="bg-muted px-2.5 py-1 rounded-md">Women</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Enterprise</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Visibility</span>
                      <span className="bg-muted px-2.5 py-1 rounded-md">Market Access</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => openProjectModal("brij-directory")}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors group-hover:gap-2.5 cursor-pointer"
                    >
                      <span>Explore the Directory</span>
                      <ArrowRight size={14} />
                    </button>
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
                name: "Sanjhi Art Revival",
                subtitle: "Living Heritage",
                icon: Sparkles,
                tag: "Heritage",
                link: "/projects/royal-sanjhi",
              },
              {
                id: "mathura-poshak",
                name: "Mathura Zari Poshak",
                subtitle: "Craft · Heritage · GI",
                icon: Palette,
                tag: "Craft & GI",
                link: "/projects/radha-krishna-poshak",
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
              },
              {
                id: "brij-sangini",
                name: "Brij-Sangini",
                subtitle: "Health & Dignity",
                icon: Heart,
                tag: "Health",
              },
              {
                id: "brij-seva",
                name: "Brij-Seva",
                subtitle: "Community Service",
                icon: Droplets,
                tag: "Community",
              },
              {
                id: "brij-directory",
                name: "Brij Business Women Directory",
                subtitle: "Women · Enterprise · Visibility",
                icon: Briefcase,
                tag: "Enterprise",
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
