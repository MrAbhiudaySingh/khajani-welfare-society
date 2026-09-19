import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { MediaLightbox, MediaItem } from "@/components/MediaLightbox";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Heart,
  ShieldCheck,
  Laptop,
  Palette,
  Users,
  Smile,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Trophy,
  FileText,
  Mail,
  Eye,
  ZoomIn,
  School,
  Compass,
  Lightbulb,
  Award,
  Sparkle,
  MessageSquare
} from "lucide-react";

const KLAPage = () => {
  useEffect(() => {
    document.title = "Khajani Learning Academy | Learning Support for Girls in Mathura | Khajani Welfare Society";
  }, []);

  // Lightbox state for KLA in pictures
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryPhotos: MediaItem[] = [
    {
      image: "/images/projects/kla-students.jpg",
      title: "Students of Khajani Learning Academy",
      desc: "School-going girls from economically weaker backgrounds building learning confidence together.",
    },
    {
      image: "/images/projects/kla-classroom-1.jpg",
      title: "Remedial & Academic Tutoring in Progress",
      desc: "Small-group instruction focusing on reading, writing, and foundational numeracy concepts.",
    },
    {
      image: "/images/projects/kla-classroom-2.jpg",
      title: "Interactive Classroom & Peer Learning",
      desc: "A girl-friendly learning space where students ask questions, collaborate, and learn without hesitation.",
    },
    {
      image: "/images/projects/edudaksh-computer.jpg",
      title: "Computer & Digital Literacy Sessions",
      desc: "Hands-on exposure to computers, educational software, and basic digital skills.",
    },
    {
      image: "/images/projects/edudaksh-award.jpg",
      title: "Celebrating Academic Progress & Achievement",
      desc: "Recognising diligence, attendance, and milestone learning achievements to foster pride.",
    },
    {
      image: "/images/projects/edudaksh-classroom.jpg",
      title: "Creative Expression, Art & Life Skills",
      desc: "Art, craft, awareness workshops and teamwork activities that nurture well-rounded development.",
    },
  ];

  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 1 — HERO
          KHAJANI LEARNING ACADEMY
          Learning support for girls who need it most
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <header className="relative overflow-hidden bg-card pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-border">
        <AuroraBackground variant="light" intensity={1.2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-[#A32A29] text-xs font-bold tracking-[0.25em] uppercase font-mono">
                  KHAJANI WELFARE SOCIETY · GIRLS' EDUCATION SUPPORT
                </span>
                <span className="h-px w-8 bg-[#A32A29]/30" />
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary tracking-tight leading-[1.08]">
                  KHAJANI LEARNING ACADEMY
                </h1>
                <p className="text-xl sm:text-2xl font-serif italic text-secondary mt-2">
                  Learning support for girls who need it most
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl border-l-4 border-secondary/50 pl-5">
                <p>
                  Khajani Learning Academy (KLA) supports school-going girls from economically weaker families through regular learning support, remedial education and academic mentoring.
                </p>
                <p>
                  The Academy provides a safe and supportive space where girls can strengthen their studies, build confidence, learn new skills and continue their education with greater confidence.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-primary/85">
                {[
                  "Education Support",
                  "Confidence",
                  "Skills",
                  "Awareness",
                  "Future Opportunities",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary/15 text-primary border border-secondary/20 shadow-2xs font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  to="/donate"
                  className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Support a Child</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="#what-kla-provides"
                  className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>What KLA Provides</span>
                  <ArrowDown size={14} />
                </a>
                <Link
                  to="/contact"
                  className="text-xs font-bold uppercase tracking-wider text-secondary hover:text-accent inline-flex items-center gap-1.5 transition-colors ml-1"
                >
                  <span>Contact Us</span>
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
                    src="/images/projects/kla-students.jpg"
                    alt="Khajani Learning Academy students in Mathura"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-secondary block mb-1">
                      SUSTAINED EDUCATIONAL RETENTION
                    </span>
                    <h4 className="text-lg font-display font-bold leading-snug">
                      Nurturing confidence, literacy, and school continuity in Mathura
                    </h4>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 2 — WHY THIS SUPPORT MATTERS
          Helping girls stay confident and continue learning
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-background border-b border-border/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimeReveal variant="fade-up">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-3 font-mono">
              CONTINUITY &amp; EMPOWERMENT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight mb-6">
              Why this support matters
            </h2>
            <p className="text-xl font-serif italic text-secondary mb-6">
              Helping girls stay confident and continue learning
            </p>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed text-left sm:text-center">
              <p>
                Many girls, especially those studying in government schools, need additional support beyond the classroom. Learning gaps, limited access to academic support and challenges during the middle-school years can affect both performance and continuity in education.
              </p>
              <p>
                Khajani Learning Academy works with girls who need this additional support—helping them strengthen basic learning, remain engaged with school and become more confident learners.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-muted/60 border border-border/80 max-w-2xl mx-auto text-center">
              <p className="font-handwriting text-xl sm:text-2xl text-primary italic">
                &ldquo;Academic handholding to sustain school participation, continuity support during adolescence, and improving retention through learning confidence.&rdquo;
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 3 — WHAT KLA PROVIDES (8 Pillars of Support)
          Learning support for a stronger future
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="what-kla-provides" className="py-24 bg-card border-b border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              COMPREHENSIVE PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              What KLA provides
            </h2>
            <p className="text-xl font-serif italic text-secondary mt-1">
              Learning support for a stronger future
            </p>
          </AnimeReveal>

          {/* 8 Offerings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Remedial Learning",
                desc: "Regular support in reading, writing, numeracy and other areas where a learner needs additional help.",
                icon: BookOpen,
                iconBg: "bg-[#EDF4FC] text-[#3D82D0]",
                tag: "Foundations",
              },
              {
                title: "Homework & Academic Support",
                desc: "Guidance with schoolwork, homework and subjects that need more practice.",
                icon: GraduationCap,
                iconBg: "bg-[#FAF0E6] text-[#C0772C]",
                tag: "Academics",
              },
              {
                title: "Spoken English & Communication",
                desc: "Activities that help girls communicate and express themselves with greater confidence.",
                icon: MessageSquare,
                iconBg: "bg-[#FDF0ED] text-[#D35F4C]",
                tag: "Fluency",
              },
              {
                title: "Digital Learning",
                desc: "Exposure to computers and basic digital skills, helping girls become more comfortable with technology.",
                icon: Laptop,
                iconBg: "bg-[#EFF1FB] text-[#4A64CF]",
                tag: "Technology",
              },
              {
                title: "Art & Craft",
                desc: "Creative activities that give girls opportunities to learn, make, imagine and express themselves.",
                icon: Palette,
                iconBg: "bg-[#FAF3E6] text-[#B88732]",
                tag: "Creativity",
              },
              {
                title: "Practical Skills",
                desc: "Hands-on activities that introduce learners to useful skills beyond their regular academic studies.",
                icon: Sparkles,
                iconBg: "bg-[#EDF7F0] text-[#439962]",
                tag: "Capability",
              },
              {
                title: "Awareness Programmes",
                desc: "Sessions on subjects that matter in girls' everyday lives, including women's safety, menstrual hygiene and social awareness.",
                icon: ShieldCheck,
                iconBg: "bg-[#FDF0F0] text-[#D45E5E]",
                tag: "Wellbeing",
              },
              {
                title: "Recreation & Activities",
                desc: "Performances, events and group activities that encourage participation, teamwork and confidence.",
                icon: Smile,
                iconBg: "bg-[#FFF4E5] text-[#D97706]",
                tag: "Joy & Teamwork",
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

                    <h3 className="font-display font-bold text-lg text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-border/40 flex items-center text-xs font-semibold text-secondary">
                    <span>Core Learning Support</span>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 4 — HOW KLA SUPPORTS EACH LEARNER
          Learn. Understand. Grow.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-16 text-center mx-auto">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              MENTORING FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              How KLA supports each learner
            </h2>
            <p className="text-xl font-serif italic text-secondary mt-2">
              Learn. Understand. Grow.
            </p>
          </AnimeReveal>

          {/* 4 Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                label: "UNDERSTAND & SUPPORT",
                desc: "Understand where a learner needs help and provide suitable academic support.",
                icon: Lightbulb,
              },
              {
                step: "02",
                label: "LEARN & PRACTISE",
                desc: "Regular classes, mentoring, homework support and activities help strengthen learning.",
                icon: BookOpen,
              },
              {
                step: "03",
                label: "BUILD CONFIDENCE",
                desc: "Communication, life skills, creative activities and a supportive environment help girls express themselves more confidently.",
                icon: Sparkles,
              },
              {
                step: "04",
                label: "CONTINUE LEARNING",
                desc: "Encourage girls to remain engaged with school, continue their education and look ahead to future opportunities.",
                icon: GraduationCap,
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
                      Stage {st.step} of 04
                    </span>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-primary text-primary-foreground text-center max-w-4xl mx-auto shadow-md">
            <p className="text-base sm:text-lg font-serif italic text-primary-foreground/95 leading-relaxed">
              &ldquo;The KLA document specifically describes this work as academic handholding to sustain school participation, continuity support during adolescence and improving retention through learning confidence.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 5 — MORE THAN EXAMINATIONS
          Education for life
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                HOLISTIC HORIZONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                More than examinations
              </h2>
              <p className="text-xl font-serif italic text-secondary mt-1">
                Education for life
              </p>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed mt-4">
                <p>
                  At KLA, learning is not limited to textbooks, marks or examinations.
                </p>
                <p>
                  Along with academic support, girls get opportunities to develop:
                </p>
              </div>
            </AnimeReveal>
          </div>

          {/* 8 Growth Qualities Badges */}
          <AnimeReveal variant="fade-up" delay={100}>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
              {[
                { name: "Curiosity", color: "bg-blue-50 text-blue-800 border-blue-200" },
                { name: "Communication", color: "bg-purple-50 text-purple-800 border-purple-200" },
                { name: "Creativity", color: "bg-amber-50 text-amber-800 border-amber-200" },
                { name: "Confidence", color: "bg-emerald-50 text-emerald-800 border-emerald-200" },
                { name: "Values", color: "bg-rose-50 text-rose-800 border-rose-200" },
                { name: "Awareness", color: "bg-teal-50 text-teal-800 border-teal-200" },
                { name: "Life Skills", color: "bg-indigo-50 text-indigo-800 border-indigo-200" },
                { name: "Future Thinking", color: "bg-amber-50 text-amber-800 border-amber-200" },
              ].map((item) => (
                <div
                  key={item.name}
                  className={`p-4 rounded-2xl border text-center font-display font-bold text-sm shadow-xs ${item.color} flex flex-col items-center justify-center min-h-[85px]`}
                >
                  <Sparkle size={16} className="mb-1 opacity-70" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-up" delay={150}>
            <div className="p-6 rounded-2xl bg-background border border-border/80 text-sm sm:text-base text-muted-foreground font-light leading-relaxed max-w-4xl">
              <p>
                The Academy also creates opportunities for art and craft, computer learning, awareness programmes, performances, celebrations and other activities that contribute to a girl's overall development. The project photographs document these different aspects of KLA in practice.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 6 — A SAFE PLACE TO LEARN
          A space where girls can ask, learn and participate
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <AnimeReveal variant="fade-right" className="lg:col-span-6 space-y-6">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block font-mono">
                SAFE &amp; NURTURING ENVIRONMENT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                A safe place to learn
              </h2>
              <p className="text-xl font-serif italic text-secondary">
                A space where girls can ask, learn and participate
              </p>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  KLA aims to provide a safe, respectful and girl-friendly learning environment.
                </p>
                <p>
                  Girls are encouraged to ask questions, participate in activities, interact with their teachers and peers, and learn without hesitation.
                </p>
                <p>
                  This supportive environment is an important part of helping girls build confidence and remain engaged with their education.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-secondary shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-primary">Question Without Hesitation</span>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-border/80 flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-secondary shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-primary">Supportive Mentors &amp; Peers</span>
                </div>
              </div>
            </AnimeReveal>

            {/* Right Column Illustration */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-6">
              <TiltCard maxTilt={6}>
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] border border-border/80"
                  style={{ boxShadow: "0 16px 40px -10px rgba(27,46,107,0.15)" }}
                >
                  <img
                    src="/images/projects/kla-classroom-2.jpg"
                    alt="Safe and encouraging learning atmosphere at KLA"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-mono uppercase tracking-wider text-secondary block mb-1">
                      Respectful &amp; Inclusive
                    </span>
                    <p className="text-sm font-display font-medium">
                      Girls build lifelong confidence when they feel safe to explore, express, and speak their minds.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 7 — LEARNING BEYOND THE CLASSROOM (6 Facets)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
              MULTIFACETED EXPERIENCES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              Learning beyond the classroom
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 font-light leading-relaxed">
              KLA gives girls opportunities to experience different kinds of learning.
            </p>
          </AnimeReveal>

          {/* 6 Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Digital Learning",
                desc: "Computer exposure and technology-based learning.",
                icon: Laptop,
                iconColor: "text-blue-600 bg-blue-50",
              },
              {
                title: "Art & Craft",
                desc: "Creative classes, hands-on projects and exhibitions of students' work.",
                icon: Palette,
                iconColor: "text-purple-600 bg-purple-50",
              },
              {
                title: "Health & Hygiene Awareness",
                desc: "Age-appropriate awareness sessions, including menstrual hygiene.",
                icon: Heart,
                iconColor: "text-rose-600 bg-rose-50",
              },
              {
                title: "Women's Safety",
                desc: "Awareness programmes that help girls understand safety and become more informed.",
                icon: ShieldCheck,
                iconColor: "text-emerald-600 bg-emerald-50",
              },
              {
                title: "Values & Social Awareness",
                desc: "Activities that connect learning with responsibility, values and the world around them.",
                icon: Compass,
                iconColor: "text-amber-600 bg-amber-50",
              },
              {
                title: "Recreation & Performance",
                desc: "Dance, celebrations, outings and group activities that give girls opportunities to participate and enjoy learning together.",
                icon: Smile,
                iconColor: "text-teal-600 bg-teal-50",
              },
            ].map((facet, idx) => (
              <AnimeReveal key={facet.title} variant="fade-up" delay={idx * 60}>
                <div className="p-7 rounded-3xl bg-background border border-border/80 hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${facet.iconColor} group-hover:scale-110 transition-transform`}>
                      <facet.icon size={22} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">
                      {facet.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {facet.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-border/40 text-xs font-semibold text-secondary">
                    <span>Enrichment Stream</span>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 8 — CELEBRATING PROGRESS
          Every achievement matters
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Card */}
            <AnimeReveal variant="fade-right" className="lg:col-span-5 order-2 lg:order-1">
              <TiltCard maxTilt={6}>
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] border border-border/80"
                  style={{ boxShadow: "0 16px 40px -10px rgba(27,46,107,0.15)" }}
                >
                  <img
                    src="/images/projects/edudaksh-award.jpg"
                    alt="KLA students receiving academic recognition"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-mono uppercase tracking-wider text-secondary block mb-1">
                      Milestones of Pride
                    </span>
                    <p className="text-sm font-display font-medium">
                      Acknowledging academic perseverance, attendance, and creative excellence.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>

            {/* Right Narrative */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block font-mono">
                PRIDE &amp; MERIT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
                Celebrating progress
              </h2>
              <p className="text-xl font-serif italic text-secondary">
                Every achievement matters
              </p>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Academic progress and participation deserve recognition.
                </p>
                <p>
                  KLA encourages girls to take pride in what they learn and achieve. Academic recognition, exhibitions, performances and other activities give learners opportunities to present their work and celebrate their progress.
                </p>
                <p>
                  The KLA documentation itself shows girls receiving recognition for academic achievement as well as participating in exhibitions, performances and learning activities.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-card border border-border flex items-center gap-3 text-sm text-primary font-medium">
                <Trophy size={20} className="text-secondary shrink-0" />
                <span>Exhibitions, certificates, and annual celebrations honour each girl's journey.</span>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 9 — SUPPORT A CHILD'S LEARNING (Featured Sponsorship Box)
          ₹6,100 can support one girl for one year
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="support-a-child" className="py-24 bg-card border-y border-border scroll-mt-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="text-center mb-12">
            <span className="text-accent text-xs font-bold tracking-[0.25em] uppercase block mb-2 font-mono">
              SPONSORSHIP &amp; IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              Support a Child's Learning
            </h2>
            <p className="text-xl sm:text-2xl font-serif italic text-secondary mt-2">
              ₹6,100 can support one girl for one year
            </p>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light leading-relaxed">
              An annual contribution of ₹6,100 can support the learning journey of one girl through Khajani Learning Academy.
            </p>
          </AnimeReveal>

          {/* Pricing Highlight Card */}
          <AnimeReveal variant="fade-up" delay={100}>
            <div className="clay-card rounded-3xl p-8 sm:p-12 border-2 border-secondary/40 shadow-2xl bg-background relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

              <div className="text-center pb-8 border-b border-border/60">
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-5xl sm:text-7xl font-display font-extrabold text-primary tracking-tight">
                    ₹6,100
                  </span>
                </div>
                <div className="mt-2 inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary font-mono text-xs font-bold uppercase tracking-widest">
                  ONE GIRL · ONE YEAR
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto mt-4 font-light leading-relaxed">
                  The KLA document itself records the ₹6,100 annual support amount and identifies areas including education support, learning resources, health &amp; hygiene, community support and financial aid.
                </p>
              </div>

              {/* 3 Supporter Privileges */}
              <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-card border border-border/70 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
                      <FileText size={20} />
                    </div>
                    <h4 className="font-display font-bold text-base text-primary mb-1">
                      Receive a dedicated file
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      With details of the child being supported and her learning journey.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-border/70 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center mb-3">
                      <Mail size={20} />
                    </div>
                    <h4 className="font-display font-bold text-base text-primary mb-1">
                      Receive a special invitation
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      To Khajani Welfare Society's annual programme.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-card border border-border/70 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                      <Heart size={20} />
                    </div>
                    <h4 className="font-display font-bold text-base text-primary mb-1">
                      Stay connected with the purpose
                    </h4>
                    <p className="text-xs text-muted-foreground font-light leading-relaxed">
                      By seeing more closely the learning journey your contribution is supporting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="text-center pt-4">
                <Link
                  to="/donate"
                  className="btn-3d-accent px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest inline-flex items-center gap-2 shadow-xl"
                >
                  <span>SUPPORT A CHILD</span>
                  <ArrowRight size={16} />
                </Link>
                <p className="text-[11px] text-muted-foreground mt-4 font-mono">
                  Transparent reporting · Tax exempt under 80G · Direct learner impact
                </p>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 10 — KLA IN PICTURES (Moments of learning, confidence and joy)
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 pb-4 border-b border-border">
            <AnimeReveal variant="fade-up">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-2 font-mono">
                AUTHENTIC VISUAL ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-primary">
                KLA in pictures
              </h2>
              <p className="text-xl font-serif italic text-secondary mt-1">
                Moments of learning, confidence and joy
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm mt-2 font-light max-w-2xl">
                Classes in Progress · Audio-Visual Learning · Academic Achievement · Computer Learning · Art &amp; Craft · Exhibitions · Women's Safety Awareness · Menstrual Hygiene Workshops
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
                  className="rounded-2xl overflow-hidden bg-card border border-border/80 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full hover:-translate-y-1"
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
          SCENE 11 — RELATED WORK
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-card border-t border-border scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimeReveal variant="fade-up" className="max-w-2xl mb-10">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase block mb-1 font-mono">
              CONTINUE EXPLORING
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary">
              Related Work
            </h2>
            <p className="text-sm text-muted-foreground font-light mt-1">
              Interested in digital learning or discovering Khajani's wider educational footprint?
            </p>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimeReveal variant="fade-up" delay={50}>
              <Link
                to="/projects/digi-shala"
                className="p-8 rounded-3xl bg-background border border-border hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                    DIGITAL CAPABILITY &amp; LITERACY
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                    Explore Digi-Shala
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Khajani’s structured digital learning initiative introducing young learners and communities to computer skills, internet safety and digital literacy.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors">
                  <span>Explore Digi-Shala</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={100}>
              <Link
                to="/our-work"
                className="p-8 rounded-3xl bg-background border border-border hover:border-secondary/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-accent block mb-2">
                    ALL PROGRAMMES &amp; INITIATIVES
                  </span>
                  <h3 className="font-display font-bold text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                    See All Our Work
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    From long-term skill training and cultural heritage revival to correctional reform, health initiatives and community service across Braj.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-secondary transition-colors">
                  <span>See All Our Work</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 12 — WANT TO SUPPORT LEARNING OPPORTUNITIES?
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.1} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-secondary border border-white/10 shadow-sm font-mono">
              <Sparkles size={13} />
              GIRLS' EDUCATION INITIATIVE
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              Want to support learning opportunities?
            </h2>

            <p className="text-primary-foreground/80 text-base sm:text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Individuals, institutions and organisations can connect with Khajani to support girls' education, learning resources and development opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/donate"
                className="btn-3d-accent px-8 py-4 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2"
              >
                <span>SUPPORT A CHILD</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="btn-3d-outline px-8 py-4 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white/20"
              >
                <span>CONTACT KHAJANI</span>
              </Link>
              <Link
                to="/partnership-inquiry"
                className="btn-3d-outline px-8 py-4 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 bg-white/10 text-white hover:bg-white/20"
              >
                <span>WORK WITH US</span>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="font-serif italic text-lg sm:text-xl text-secondary">
                Empowering young girls through education.
              </p>
              <p className="text-xs font-mono tracking-widest text-primary-foreground/60 uppercase mt-2">
                Learning · Confidence · Skills · Opportunity
              </p>
            </div>
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

export default KLAPage;
