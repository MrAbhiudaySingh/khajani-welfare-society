import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { MediaLightbox, MediaItem } from "@/components/MediaLightbox";
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  Palette,
  Scissors,
  ChefHat,
  HeartHandshake,
  Laptop,
  CheckCircle2,
  Sparkle,
  Search,
  BookOpen,
  Eye,
  ZoomIn,
  Flame,
  Layers,
  HandMetal,
  Brush,
  Flower2,
  Coffee,
  Compass,
  Briefcase
} from "lucide-react";

const BrijNipunPage = () => {
  useEffect(() => {
    document.title = "Brij-Nipun | Short-Term Skill Training in Mathura | Khajani Welfare Society";
  }, []);

  // Lightbox state for Brij-Nipun in pictures
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryPhotos: MediaItem[] = [
    {
      image: "/images/projects/brij-nipun-activities.jpg",
      title: "Short-Term Skill Camps & Workshops",
      desc: "Participants engaging in hands-on creative activities and collaborative skill development.",
    },
    {
      image: "/images/projects/royal-sanjhi-training.jpg",
      title: "Traditional Sanjhi Art Workshop",
      desc: "Learning the stencil cutting and devotional craft techniques of Braj.",
    },
    {
      image: "/images/projects/shakti-ek-adhaar-3.jpg",
      title: "Creative Painting & Handicrafts",
      desc: "Hands-on decorative painting, clay work and festive craft sessions.",
    },
    {
      image: "/images/about/hero-women-training.jpg",
      title: "Personal Grooming & Skill Practice",
      desc: "Participants practicing grooming, mehendi, and personal care techniques.",
    },
    {
      image: "/images/projects/brij-surabhi-temple-waste.jpg",
      title: "Deity Products & Sacred Craft Traditions",
      desc: "Crafting temple flowers, dhoop sticks and handmade local heritage articles.",
    },
    {
      image: "/images/projects/brij-hunar-class.jpg",
      title: "Focused Practical Demonstrations",
      desc: "Interactive demonstration by trainers followed by participant trial and practice.",
    },
  ];

  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 1 — HERO
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <header className="relative overflow-hidden bg-card pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-border">
        <AuroraBackground variant="light" intensity={1.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#A32A29] text-xs font-bold tracking-[0.25em] uppercase font-mono">
                  KHAJANI WELFARE SOCIETY · SHORT-TERM TRAINING
                </span>
                <span className="h-px w-8 bg-[#A32A29]/30" />
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.08]">
                  BRIJ-NIPUN
                </h1>
                <p className="text-xl sm:text-2xl font-serif italic text-secondary mt-2">
                  Short-term practical skill training
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl border-l-4 border-secondary/50 pl-5">
                <p>
                  Brij-Nipun is Khajani Welfare Society’s short-term skill training programme. It offers focused workshops, camps and practical learning opportunities where women and other participants can learn a useful skill without joining a long-duration training programme.
                </p>
                <p>
                  The programme covers creative, practical and income-oriented skills that can be learned in shorter formats and used for personal development, home-based work or small earning opportunities.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#what-participants-learn"
                  className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Explore What They Learn</span>
                  <ArrowDown size={14} />
                </a>
                <Link
                  to="/contact"
                  className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Contact Khajani</span>
                </Link>
                <Link
                  to="/partnership-inquiry"
                  className="text-xs font-bold uppercase tracking-wider text-secondary hover:text-accent inline-flex items-center gap-1.5 transition-colors ml-1"
                >
                  <span>Work With Us</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </AnimeReveal>

            {/* Right Hero Image Card */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5 relative">
              <TiltCard maxTilt={6}>
                <div
                  className="aspect-[4/3.6] rounded-3xl overflow-hidden relative shadow-2xl border border-border/80 bg-muted group"
                  style={{
                    boxShadow: "0 20px 48px -12px rgba(27,46,107,0.18)",
                  }}
                >
                  <img
                    src="/images/projects/brij-nipun-activities.jpg"
                    alt="Participants learning hands-on craft skills in Brij-Nipun workshop"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary block mb-1">
                      FOCUSED HANDS-ON WORKSHOPS
                    </span>
                    <h4 className="text-lg font-display font-bold leading-snug">
                      Practical, creative, and income-oriented skill camps in Mathura
                    </h4>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 2 — LEARN A SKILL IN A SHORTER FORMAT
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background border-b border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-mono">
              FLEXIBLE LEARNING OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight mb-6">
              Learn a skill in a shorter format
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Not everyone can join a long-term training programme. Brij-Nipun provides shorter and more flexible learning opportunities through workshops, work camps and focused training programmes.
              </p>
              <p>
                Participants get hands-on experience in a specific skill, making the programme suitable for different groups, interests and learning needs.
              </p>
            </div>
            <div className="pt-6">
              <p className="font-handwriting text-2xl sm:text-3xl text-secondary italic">
                Focused learning. Practical experience. Lasting confidence.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 3 — WHAT PARTICIPANTS CAN LEARN (9 Practical Skill Domains)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="what-participants-learn" className="py-24 bg-card border-b border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              CURRICULUM &amp; WORKSHOP STREAMS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              What participants can learn
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 font-light leading-relaxed">
              Brij-Nipun training can include:
            </p>
          </AnimeReveal>

          {/* 9 Practical Learning Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Deity Products & Traditional Crafts",
                desc: "Making handmade products connected with local craft traditions.",
                icon: Flower2,
                iconBg: "bg-[#FAF3E6] text-[#B88732]",
                tag: "Heritage Craft",
              },
              {
                title: "Sanjhi Art",
                desc: "Learning the basic techniques of the traditional art of Braj.",
                icon: Sparkle,
                iconBg: "bg-[#FDF0ED] text-[#D35F4C]",
                tag: "Living Heritage",
              },
              {
                title: "Painting & Creative Crafts",
                desc: "Hands-on learning through painting and other creative activities.",
                icon: Palette,
                iconBg: "bg-[#EDF4FC] text-[#3D82D0]",
                tag: "Creative Arts",
              },
              {
                title: "Baking & Chocolate Making",
                desc: "Practical food-based skills that can also be developed into home-based earning activities.",
                icon: ChefHat,
                iconBg: "bg-[#FAF0E6] text-[#C0772C]",
                tag: "Food & Confectionery",
              },
              {
                title: "Mehendi & Nail Art",
                desc: "Creative skills that can be used professionally or for self-employment.",
                icon: Brush,
                iconBg: "bg-[#EDF7F0] text-[#439962]",
                tag: "Beauty & Styling",
              },
              {
                title: "Personal Grooming",
                desc: "Practical grooming and personal-care skills.",
                icon: Scissors,
                iconBg: "bg-[#FDF0F0] text-[#D45E5E]",
                tag: "Self-Care",
              },
              {
                title: "Cooking",
                desc: "Focused practical learning around food preparation.",
                icon: Coffee,
                iconBg: "bg-[#FFF4E5] text-[#D97706]",
                tag: "Culinary Skills",
              },
              {
                title: "Clay Work",
                desc: "Learning to make creative products using clay.",
                icon: HandMetal,
                iconBg: "bg-[#F5EFE6] text-[#92400E]",
                tag: "Pottery & Clay",
              },
              {
                title: "Digital Skills",
                desc: "Basic digital skills for everyday use and new opportunities.",
                icon: Laptop,
                iconBg: "bg-[#EFF1FB] text-[#4A64CF]",
                tag: "Digital Literacy",
              },
            ].map((item, idx) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={idx * 50}>
                <div className="clay-card rounded-3xl p-7 border border-border/80 hover:border-secondary/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1 bg-background">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                        <item.icon size={22} />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/40 flex items-center text-xs font-semibold text-secondary">
                    <span>Hands-On Learning Stream</span>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 4 — HOW BRIJ-NIPUN WORKS (Short. Focused. Practical.)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              OUR WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              How Brij-Nipun works
            </h2>
            <p className="text-xl font-serif italic text-secondary mt-2">
              Short. Focused. Practical.
            </p>
          </AnimeReveal>

          {/* 4 Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                label: "CHOOSE A SKILL",
                desc: "A focused skill or activity is selected according to the group and purpose of the programme.",
                icon: Search,
              },
              {
                step: "02",
                label: "LEARN BY DOING",
                desc: "Participants learn through demonstrations and hands-on practice.",
                icon: BookOpen,
              },
              {
                step: "03",
                label: "MAKE & PRACTISE",
                desc: "They use the skill themselves and build confidence through practical work.",
                icon: Palette,
              },
              {
                step: "04",
                label: "USE THE SKILL",
                desc: "Depending on the training, the skill can be used personally, developed further or explored as an earning opportunity.",
                icon: Briefcase,
              },
            ].map((st, i) => (
              <AnimeReveal key={st.step} variant="fade-up" delay={i * 80} className="h-full">
                <div className="p-7 rounded-3xl bg-card border border-border/80 flex flex-col justify-between h-full hover:border-secondary/60 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display font-black text-3xl sm:text-4xl text-secondary/40 group-hover:text-secondary transition-colors">
                        {st.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                        <st.icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-2 font-mono">
                      {st.label}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/40">
                    <span className="text-[11px] font-mono text-muted-foreground">
                      Step {st.step} of 04
                    </span>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 5 — DIFFERENT FORMATS FOR DIFFERENT LEARNERS
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-6">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block font-mono">
                FLEXIBLE FORMATS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                Different formats for different learners
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                Brij-Nipun is designed to remain flexible. Training may take the form of:
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  "Work Camps",
                  "Skill Workshops",
                  "Creative Workshops",
                  "Painter Camps",
                  "Short Training Programmes",
                ].map((format) => (
                  <span
                    key={format}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-background border border-border/80 text-primary text-xs sm:text-sm font-semibold shadow-xs hover:border-secondary/60 transition-colors"
                  >
                    <CheckCircle2 size={15} className="text-secondary" />
                    {format}
                  </span>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-muted/60 border border-border/60 text-sm sm:text-base text-foreground/90 font-serif italic leading-relaxed mt-4">
                &ldquo;This allows Khajani to organise learning around a particular group, skill or community need rather than requiring every participant to enter the same long-term course.&rdquo;
              </div>
            </AnimeReveal>

            {/* Right Illustration Card */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-background border border-border shadow-xl space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A32A29]">
                  Community-Centred Design
                </span>
                <h3 className="font-display font-bold text-2xl text-primary">
                  Responsive &amp; Adaptive
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  From residential village workshops to weekend community sessions and institution-hosted camps, learning travels to where the need and curiosity exist.
                </p>
                <div className="pt-2 border-t border-border/50 text-xs font-mono text-secondary">
                  Mathura · Vrindavan · Rural Braj Villages
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 6 — CREATIVITY CAN ALSO BECOME AN OPPORTUNITY
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              ENTREPRENEURIAL HORIZONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              Creativity can also become an opportunity
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 font-light leading-relaxed">
              A short workshop may begin with curiosity, but a useful skill can go much further. Brij-Nipun encourages participants to explore how creative and practical skills can be used for:
            </p>
          </AnimeReveal>

          {/* 5 Opportunity Pathway Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {[
              { title: "Home-Based Work", desc: "Crafting and earning flexibly from household spaces." },
              { title: "Small Orders", desc: "Fulfilling local community, festive and custom orders." },
              { title: "Self-Employment", desc: "Setting up independent services in grooming, mehendi or crafts." },
              { title: "Creative Enterprise", desc: "Developing distinctive handmade products into micro-ventures." },
              { title: "Further Learning", desc: "Stepping stone to longer vocational certification programmes." },
            ].map((opp, idx) => (
              <AnimeReveal key={opp.title} variant="fade-up" delay={idx * 70}>
                <div className="p-6 rounded-3xl bg-card border border-border/80 hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                  <div>
                    <span className="w-8 h-8 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-xs font-bold font-mono mb-3 group-hover:bg-secondary/15 group-hover:text-secondary transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                      {opp.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      {opp.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-primary text-primary-foreground text-center max-w-4xl mx-auto shadow-md">
            <p className="text-base sm:text-lg font-serif italic text-primary-foreground/95 leading-relaxed">
              &ldquo;The programme is designed to build practical ability as well as confidence, creativity and entrepreneurial thinking.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 7 — BRIJ-NIPUN IN PICTURES (Lively Variety Gallery)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 pb-4 border-b border-border">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                VISUAL RECORD
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
                Brij-Nipun in pictures
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2 font-light max-w-2xl">
                Painting · Sanjhi · Baking/Chocolate Making · Mehendi · Nail Art · Clay/Craft Work · Deity Products · Workshops
              </p>
            </AnimeReveal>

            <span className="text-xs font-mono text-muted-foreground mt-3 md:mt-0">
              Click any photograph to view
            </span>
          </div>

          {/* 6-Photo Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((item, idx) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={idx * 60}>
                <div
                  onClick={() => setLightboxIndex(idx)}
                  className="rounded-2xl overflow-hidden bg-background border border-border/80 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
                        <Eye size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base text-primary mb-1 group-hover:text-secondary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-secondary">
                      <span className="inline-flex items-center gap-1">
                        <ZoomIn size={13} /> View Photo
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 8 — RELATED WORK
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-2xl mb-10">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1 font-mono">
              CONTINUE EXPLORING
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
              Related Work
            </h2>
            <p className="text-sm text-muted-foreground font-light mt-1">
              Looking for longer-term vocational training or deeper cultural heritage?
            </p>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimeReveal variant="fade-up" delay={50}>
              <Link
                to="/projects/brij-hunar"
                className="p-8 rounded-3xl bg-card border border-border hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                    LONG-TERM VOCATIONAL TRAINING
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                    Explore Brij-Hunar
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Khajani’s structured long-term skill development programme combining technical vocational training with digital skills and employability.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors">
                  <span>Explore Brij-Hunar</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={100}>
              <Link
                to="/culture"
                className="p-8 rounded-3xl bg-card border border-border hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                    SANJHI &amp; BRAJ CRAFT TRADITIONS
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                    Explore Culture &amp; Heritage
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Where tradition remains a living practice: exploring Sanjhi stencil art, Mathura Zari Poshak, and the temple craft traditions of Braj.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors">
                  <span>Explore Culture &amp; Heritage</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 9 — INTERESTED IN A WORKSHOP OR SKILL PROGRAMME?
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.1} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-secondary border border-white/10 shadow-sm font-mono">
              <Sparkles size={13} />
              COLLABORATE WITH US
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              Interested in a workshop or skill programme?
            </h2>

            <p className="text-primary-foreground/80 text-base sm:text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Schools, community groups, institutions and other organisations can connect with Khajani to explore suitable short-term skill programmes and workshops.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-3d-accent px-8 py-4 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                <span>Contact Khajani</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/partnership-inquiry"
                className="btn-3d-outline px-8 py-4 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white/20"
              >
                <span>Work With Us</span>
              </Link>
            </div>

            <p className="text-xs font-mono tracking-widest text-primary-foreground/60 uppercase mt-10">
              People · Skills · Heritage · Opportunity
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* Lightbox Component for Pictures */}
      <MediaLightbox
        items={galleryPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </Layout>
  );
};

export default BrijNipunPage;
