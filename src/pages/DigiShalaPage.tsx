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
  CheckCircle2,
  School,
  Users,
  Compass,
  Laptop,
  Brain,
  ShieldAlert,
  Lightbulb,
  MousePointerClick,
  Lock,
  Search,
  BookOpen,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  GraduationCap
} from "lucide-react";

interface GalleryImage {
  url: string;
  caption: string;
  tag: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "/images/projects/digi-shala.jpg",
    caption: "Girls engaging in hands-on computer and digital application sessions",
    tag: "Computer Learning",
  },
  {
    url: "/images/projects/digi-shala-icon.jpg",
    caption: "Interactive classroom demonstration exploring modern digital tools",
    tag: "Digital Demonstrations",
  },
  {
    url: "/images/projects/pathway-education-digital.jpg",
    caption: "Collaborative group learning and practical software exploration",
    tag: "Girls Working Together",
  },
  {
    url: "/images/projects/edudaksh-computer.jpg",
    caption: "Foundational digital literacy and computer-based educational training",
    tag: "Technology Awareness",
  },
  {
    url: "/images/projects/kla-students.jpg",
    caption: "Students participating enthusiastically in tech guidance workshops",
    tag: "Classroom Interaction",
  },
  {
    url: "/images/projects/upsdm-computer.jpg",
    caption: "Instructor-led digital orientation and safe internet browsing practice",
    tag: "Learning Activities",
  },
  {
    url: "/images/projects/kla-classroom-1.jpg",
    caption: "Integrating digital tools alongside regular school academic support",
    tag: "Institutional Integration",
  },
  {
    url: "/images/projects/hero-training.jpg",
    caption: "Building confidence and digital capability for future career pathways",
    tag: "Digital Confidence",
  },
];

const DigiShalaPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    document.title = "Digi-Shala | Digital Literacy & AI Awareness for Girls in Mathura";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Digi-Shala by Khajani Welfare Society helps school- and college-going girls in Mathura build digital literacy, AI awareness, cyber-security awareness and confidence with technology."
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
          <span className="text-secondary font-medium">Digi-Shala</span>
        </div>
      </nav>

      {/* ── Screen 1: Hero Section ── */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-primary text-white overflow-hidden py-20 lg:py-28">
        <AuroraBackground variant="dark" intensity={1.2} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/digi-shala.jpg"
            alt="Digi-Shala digital learning classroom for girls"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] bg-white/10 text-secondary border border-secondary/30 mb-6 backdrop-blur-sm">
              <Sparkles size={13} className="text-secondary" />
              Digital Learning &amp; Future Skills for Girls
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white mb-6">
              DIGI-SHALA
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-secondary/95 max-w-3xl mx-auto mb-6 leading-relaxed">
              Digital skills for girls in a changing world
            </p>

            <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8">
              Technology is now part of how we learn, communicate, find information and prepare for future opportunities.
              Digi-Shala is Khajani Welfare Society’s digital-learning initiative for school- and college-going girls.
              It helps girls understand and use digital tools with greater confidence while introducing them to technology,
              AI awareness and online safety.
            </p>

            {/* 5 Core Pillars */}
            <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-4 py-3 px-6 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-medium text-white/90 mb-10 shadow-lg">
              <span className="text-secondary font-semibold">Digital Literacy</span>
              <span className="text-white/40">·</span>
              <span>AI Awareness</span>
              <span className="text-white/40">·</span>
              <span>Technology</span>
              <span className="text-white/40">·</span>
              <span>Online Safety</span>
              <span className="text-white/40">·</span>
              <span className="text-secondary font-semibold">Digital Confidence</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#what-girls-learn"
                className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                <span>What Girls Learn</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#how-it-works"
                className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white border-white/30 hover:bg-white/10"
              >
                How It Works
              </a>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 2: Why Digi-Shala? ── */}
      <section className="py-20 lg:py-24 bg-card border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
                  Everyday Need
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                  Knowing how to use technology is becoming an everyday skill
                </h2>
                <div className="h-1 w-20 bg-secondary mb-6 rounded-full" />
                <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-serif">
                  <p>
                    Access to a phone or computer does not automatically mean that a young person knows how to use technology confidently, safely or effectively.
                  </p>
                  <p className="text-foreground/90 font-sans text-base">
                    Digi-Shala helps girls move from simply using technology to understanding it and using it with purpose.
                  </p>
                  <p className="text-foreground/90 font-sans text-base">
                    The programme focuses on practical digital learning, awareness of new technologies and the confidence to explore educational and future opportunities.
                  </p>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="clay-card p-8 rounded-3xl border border-border/80 bg-background/90 shadow-xl space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <Laptop size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-base">Purposeful Learning</h4>
                      <p className="text-xs text-muted-foreground">Beyond passive screen consumption</p>
                    </div>
                  </div>

                  <div className="space-y-3.5 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Practical hands-on exposure to productivity and web tools</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Demystifying Artificial Intelligence in age-appropriate ways</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Essential cyber security and responsible digital habits</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-accent mt-1 shrink-0" />
                      <span>Confidence to pursue higher study, exams, and future careers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 3: What Girls Learn (7 Core Areas) ── */}
      <section id="what-girls-learn" className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Learning Modules
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                What girls learn
              </h2>
              <p className="text-lg font-serif italic text-accent font-medium mb-3">
                Simple digital skills. Better understanding of technology.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base">
                Digi-Shala provides a well-rounded foundation covering operational skills, emerging technology, safe online practices, and real-world opportunities.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "DIGITAL LITERACY",
                desc: "Building familiarity with digital tools and their practical use in study and daily life.",
                icon: Laptop,
              },
              {
                title: "TECHNOLOGY AWARENESS",
                desc: "Understanding the role technology plays in education, communication and everyday life.",
                icon: Cpu,
              },
              {
                title: "AI AWARENESS",
                desc: "Introducing girls to Artificial Intelligence and helping them understand what AI is and how technology is changing.",
                icon: Brain,
              },
              {
                title: "EDUCATIONAL TECHNOLOGY",
                desc: "Understanding how digital tools can support learning, academic research, and access to information.",
                icon: BookOpen,
              },
              {
                title: "CYBER SECURITY",
                desc: "Building awareness about safer and more responsible use of the digital world.",
                icon: ShieldAlert,
              },
              {
                title: "DIGITAL CONFIDENCE",
                desc: "Helping girls become more comfortable exploring, troubleshooting, and using technology independently.",
                icon: Lightbulb,
              },
              {
                title: "ACCESS TO OPPORTUNITIES",
                desc: "Helping learners understand how digital knowledge can open access to learning, scholarships, and future opportunities.",
                icon: TrendingUp,
              },
            ].map((item, idx) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={idx * 60} className="h-full">
                <div className="clay-card p-6 rounded-2xl border border-border/80 bg-card hover:border-accent/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <item.icon size={22} />
                    </div>
                    <h3 className="font-display font-bold text-primary text-base mb-2 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screen 4: How Digi-Shala Works (5-Step Framework) ── */}
      <section id="how-it-works" className="py-20 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Structured Pathway
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                How Digi-Shala works
              </h2>
              <p className="text-lg font-serif italic text-accent font-medium">
                Learn. Explore. Use. Stay safe.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                action: "LEARN THE BASICS",
                desc: "Build an understanding of digital tools, hardware, and core technology concepts.",
                icon: Laptop,
              },
              {
                step: "02",
                action: "EXPLORE",
                desc: "Discover how technology and digital resources can support education and everyday tasks.",
                icon: Search,
              },
              {
                step: "03",
                action: "UNDERSTAND NEW TECH",
                desc: "Introduce concepts such as Artificial Intelligence in a simple, relatable, age-appropriate way.",
                icon: Brain,
              },
              {
                step: "04",
                action: "USE TECH SAFELY",
                desc: "Build awareness about cyber security, privacy preservation, and responsible online behaviour.",
                icon: ShieldCheck,
              },
              {
                step: "05",
                action: "GROW IN CONFIDENCE",
                desc: "Encourage girls to explore digital learning and future opportunities without hesitation.",
                icon: TrendingUp,
              },
            ].map((s, idx) => (
              <AnimeReveal key={s.step} variant="fade-up" delay={idx * 80} className="h-full">
                <div className="clay-card p-6 rounded-2xl border border-border flex flex-col justify-between h-full bg-background hover:shadow-lg transition-shadow">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-accent/10 text-accent">
                        {s.step}
                      </span>
                      <s.icon size={18} className="text-muted-foreground/70" />
                    </div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-primary mb-2 tracking-wide">
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

      {/* ── Screen 5: Digital Learning Beyond the Computer ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Contemporary Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4 leading-tight">
                Digital learning beyond the computer
              </h2>
              <p className="text-xl font-serif italic text-accent font-medium mb-6">
                Understanding technology, not just operating it
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mb-8 rounded-full" />
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-serif">
                Digi-Shala does not treat digital learning like an old-style “computer course”.
                The purpose is to help girls become more informed and confident users of technology, rather than simply teaching them how to operate a device.
              </p>
            </div>

            <div className="clay-card p-8 sm:p-10 rounded-3xl border border-border bg-card shadow-lg text-center">
              <span className="text-[11px] font-mono tracking-widest text-accent uppercase font-bold block mb-4">
                The Integrated Digi-Shala Model
              </span>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-primary max-w-3xl mx-auto">
                <span className="bg-background px-4 py-2 rounded-xl border border-border">Digital Skills</span>
                <span className="text-accent font-mono">+</span>
                <span className="bg-background px-4 py-2 rounded-xl border border-border">Technology Awareness</span>
                <span className="text-accent font-mono">+</span>
                <span className="bg-background px-4 py-2 rounded-xl border border-border">AI Awareness</span>
                <span className="text-accent font-mono">+</span>
                <span className="bg-background px-4 py-2 rounded-xl border border-border">Online Safety</span>
                <span className="text-accent font-mono">+</span>
                <span className="bg-background px-4 py-2 rounded-xl border border-border">Educational Use</span>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 6: Staying Safe Online ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Cyber Security &amp; Responsibility
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4 leading-tight">
                Staying safe online
              </h2>
              <p className="text-xl font-serif italic text-accent font-medium mb-6">
                Digital confidence also means knowing how to be careful
              </p>
              <div className="h-1 w-20 bg-secondary mx-auto mb-8 rounded-full" />
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-serif">
                Learning to use technology should include understanding that the online world needs responsible behaviour.
                Digi-Shala therefore includes cyber-security awareness as part of its digital-learning focus.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Protect Personal Information",
                desc: "Understand what information should be kept private and never shared carelessly.",
                icon: Lock,
              },
              {
                title: "Think Before You Click",
                desc: "Be careful with unknown links, unsolicited messages and questionable online requests.",
                icon: MousePointerClick,
              },
              {
                title: "Use Technology Responsibly",
                desc: "Understand that actions online have real-world consequences for yourself and others.",
                icon: ShieldCheck,
              },
              {
                title: "Ask When Unsure",
                desc: "Encourage girls to seek guidance from mentors and teachers whenever something feels unsafe.",
                icon: Users,
              },
            ].map((item, idx) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={idx * 75} className="h-full">
                <div className="clay-card p-6 rounded-2xl border border-border/80 bg-card hover:border-accent/40 transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <item.icon size={20} />
                    </div>
                    <h3 className="font-display font-bold text-primary text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screen 8: A Five-Year Learning Initiative (Prominent Approved Figures) ── */}
      <section className="py-20 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Documented Scope
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              A five-year learning initiative
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto mb-10 rounded-full" />

            {/* 3 Approved Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
              <div className="clay-card p-8 rounded-3xl border border-border bg-background shadow-md">
                <span className="text-5xl sm:text-6xl font-display font-bold text-primary block mb-2">
                  1,800
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  Girls
                </span>
                <p className="text-xs text-muted-foreground">Designed to reach</p>
              </div>

              <div className="clay-card p-8 rounded-3xl border border-border bg-background shadow-md">
                <span className="text-5xl sm:text-6xl font-display font-bold text-primary block mb-2">
                  18
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  Educational Institutions
                </span>
                <p className="text-xs text-muted-foreground">Partner schools &amp; colleges</p>
              </div>

              <div className="clay-card p-8 rounded-3xl border border-border bg-background shadow-md">
                <span className="text-5xl sm:text-6xl font-display font-bold text-primary block mb-2">
                  5
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">
                  Years
                </span>
                <p className="text-xs text-muted-foreground">Initiative duration</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-muted/50 border border-border/60 max-w-3xl mx-auto text-center">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-serif">
                One collaborative Digi-Shala initiative was designed to reach <strong className="text-primary font-semibold">1,800 girls from 18 educational institutions over five years</strong>.
                The initiative embodies Khajani’s institutional commitment to expanding digital inclusion for adolescent girls.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 9: Taking Digital Learning Where Girls Already Study ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimeReveal variant="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-6">
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                  Institutional Partnerships
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4 leading-tight">
                  Taking digital learning where girls already study
                </h2>
                <p className="text-lg font-serif italic text-accent font-medium mb-4">
                  Working through educational institutions
                </p>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-serif">
                  <p>
                    Digi-Shala's institutional approach allows digital learning to reach school- and college-going girls within familiar educational settings.
                  </p>
                  <p className="text-foreground/90 font-sans text-sm">
                    This creates an opportunity to introduce technology alongside their existing education rather than treating digital skills as something separate from learning.
                  </p>
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-border">
                  <img
                    src="/images/projects/digi-shala-icon.jpg"
                    alt="Digi-Shala interactive computer training inside campus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <span className="font-bold uppercase tracking-wider text-secondary block text-[10px]">Campus Learning</span>
                    Integrating digital tools directly into partner school environments
                  </div>
                </div>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 10: From Access to Confidence (Clean Visual Progression) ── */}
      <section className="py-20 lg:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Growth Sequence
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                From access to confidence
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                phase: "ACCESS",
                desc: "Get an opportunity to engage directly with digital tools and devices.",
                icon: Laptop,
              },
              {
                phase: "UNDERSTAND",
                desc: "Learn what technology can do and how it works in everyday life.",
                icon: Lightbulb,
              },
              {
                phase: "USE",
                desc: "Apply digital tools actively to learning, study aids, and information.",
                icon: BookOpen,
              },
              {
                phase: "STAY SAFE",
                desc: "Understand responsible, informed, and safer online behaviour.",
                icon: ShieldCheck,
              },
              {
                phase: "EXPLORE",
                desc: "Become more confident about exploring future digital opportunities.",
                icon: Compass,
              },
            ].map((p, idx) => (
              <AnimeReveal key={p.phase} variant="fade-up" delay={idx * 75} className="h-full">
                <div className="clay-card p-6 rounded-2xl border border-border bg-background text-center flex flex-col justify-between h-full hover:border-accent/40 transition-all">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-3">
                      <p.icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold block mb-1">
                      Phase {idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-primary text-base mb-2 tracking-wide">
                      {p.phase}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Screen 11: Digi-Shala in Pictures (Interactive Gallery) ── */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
                Photo Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-3">
                Digi-Shala in pictures
              </h2>
              <p className="text-lg font-serif italic text-accent font-medium mb-4">
                Girls learning with technology
              </p>
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
                Genuine field photographs capturing girls learning real technology—from computer basics and classroom demonstrations to group exploration and safe digital habits.
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

      {/* ── Screen 12: Connected with Khajani Learning Academy ── */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimeReveal variant="fade-up">
            <div className="p-8 rounded-3xl bg-background border border-border shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-accent uppercase font-bold block mb-1">
                  Natural Educational Link
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-primary mb-2">
                  Connected with Khajani Learning Academy
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
                  Education and digital learning naturally connect. Khajani Learning Academy provides broader academic and development support to girls, while Digi-Shala focuses specifically on building their understanding and confidence with technology.
                </p>
              </div>
              <Link
                to="/projects/kla"
                className="btn-3d-accent px-6 py-3 text-xs font-bold uppercase tracking-widest shrink-0 inline-flex items-center gap-2"
              >
                <span>EXPLORE KLA</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ── Screen 13: Call to Action / Engagement ── */}
      <section className="py-20 lg:py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4">
              Interested in bringing digital learning to more girls?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              Schools, colleges, educational institutions, CSR partners and other organisations can connect with Khajani to explore digital-learning programmes and collaborations.
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

      {/* ── Screen 14: Closing Section ── */}
      <section className="py-16 bg-primary text-white text-center border-t border-white/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimeReveal variant="fade-up">
            <p className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              “Understand technology. Use it confidently.”
            </p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-secondary uppercase font-semibold">
              <span>Learn</span>
              <span>·</span>
              <span>Explore</span>
              <span>·</span>
              <span>Stay Safe</span>
              <span>·</span>
              <span>Move Forward</span>
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

export default DigiShalaPage;
