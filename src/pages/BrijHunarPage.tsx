import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { ArrowUpRight, GraduationCap, Wrench, Sparkles, Scissors, ArrowRight } from "lucide-react";

const BrijHunarPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <header className="relative overflow-hidden bg-card pt-20 pb-24 border-b border-border">
        <AuroraBackground variant="light" intensity={1.2} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimeReveal variant="fade-right" className="order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 glass text-accent text-xs font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border border-accent/20 mb-6">
                <Sparkles size={12} /> Project Brij-Hunar
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary mb-8 leading-[1.02]">
                Craftsmanship as a <br /><span className="text-accent italic font-serif">Living Future</span>
              </h1>
              <div className="flex items-start gap-6 mb-10 border-l-4 border-accent pl-6 py-2">
                <p className="text-xl text-muted-foreground italic font-display leading-relaxed">
                  "Reshaping the narrative of rural livelihoods by equipping young women with certified, market-ready vocational skills in tailoring, beauty wellness, and handicrafts."
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/donate" className="btn-3d-accent px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
                  Support an Artisan <ArrowRight size={16} />
                </Link>
                <a href="#process" className="btn-3d-outline px-8 py-4 text-sm uppercase tracking-widest">
                  View Curriculum
                </a>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={200} className="order-1 lg:order-2 relative">
              <TiltCard maxTilt={10}>
                <div
                  className="aspect-[4/5] overflow-hidden relative rounded-3xl"
                  style={{ boxShadow: "0 16px 0 hsl(var(--border)), 0 24px 48px rgba(27,46,107,0.16)" }}
                >
                  <img
                    alt="Vocational training session"
                    className="w-full h-full object-cover"
                    src="/images/projects/brij-hunar-training.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl text-white">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Vocational Excellence</span>
                    <span className="text-sm font-display italic">Tailoring &amp; Cosmetology Mastery Center</span>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <AnimeReveal variant="fade-right" className="lg:col-span-5">
            <TiltCard maxTilt={8}>
              <div className="clay-card overflow-hidden p-3">
                <span className="btn-3d-navy text-[11px] uppercase tracking-wider px-3 py-1 mb-3 inline-block">
                  Chapter I: Skills &amp; Dignity
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-primary mb-6 leading-tight">
                  Independence Through Hands-On Mastery
                </h2>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-inner">
                  <img
                    alt="Skills training in progress"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src="/images/projects/brij-hunar-class.jpg"
                  />
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-7 lg:pl-8 flex flex-col justify-center">
            <p className="drop-cap mb-6 text-lg leading-relaxed font-serif text-muted-foreground">
              In the culturally rich yet economically challenging region of Brij, underemployment among young rural women has historically limited personal independence. <strong className="text-primary font-bold">Project Brij-Hunar</strong> turns this challenge into opportunity by offering industry-aligned vocational skills.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground">
              From high-precision commercial stitching to bridal cosmetology and IT literacy, every course is structured with formal industry standards and certified master instructors.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="clay-card p-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-4 text-accent">
                  <GraduationCap size={24} />
                </div>
                <h4 className="font-display font-bold text-xl text-primary mb-1.5">NSQF Certified</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Curricula strictly compliant with National Skills Qualifications Framework guidelines.
                </p>
              </div>
              <div className="clay-card p-6">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-4 text-accent">
                  <Wrench size={24} />
                </div>
                <h4 className="font-display font-bold text-xl text-primary mb-1.5">Industry Labs</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-grade mechanized sewing machines and salon workstations mimicking real commercial hubs.
                </p>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.3} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Methodology</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold">
                The 4-Step Pathway to <br /><span className="italic text-secondary">Sustainable Employment</span>
              </h2>
            </div>
          </AnimeReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Mobilization", desc: "Door-to-door counseling through 'Kaushal Raths' and village gatherings to enroll first-generation learners." },
              { step: 2, title: "Training", desc: "3 to 6 months of rigorous practical training, digital accounting, and confidence grooming." },
              { step: 3, title: "Assessment", desc: "Independent evaluation and formal certification by accredited Sector Skill Councils." },
              { step: 4, title: "Placement", desc: "Connecting certified graduates to apparel units, salons, or facilitating home enterprise setup." },
            ].map((item, i) => (
              <AnimeReveal key={item.step} variant="fade-up" delay={i * 90}>
                <TiltCard className="h-full">
                  <div className="glass-dark rounded-3xl p-8 h-full border border-white/10 flex flex-col group hover:border-secondary/40 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-secondary text-primary font-bold text-lg flex items-center justify-center mb-6 shadow-md">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-background">
        <AnimeReveal variant="scale">
          <div className="clay-card-navy p-10 overflow-hidden mb-24 relative rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
              {[
                { num: "3,500+", label: "Artisans Trained" },
                { num: "92%", label: "Female Beneficiaries" },
                { num: "120+", label: "Placement Partners" },
                { num: "₹15,000", label: "Avg. Monthly Income" },
              ].map((s) => (
                <div key={s.label} className="p-4">
                  <span className="block text-4xl md:text-5xl font-display font-bold text-secondary mb-2">{s.num}</span>
                  <span className="text-xs font-bold tracking-widest text-primary-foreground/80 uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimeReveal>

        {/* Testimonials */}
        <AnimeReveal variant="fade-up">
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Voices of Impact</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Real Stories of Transformation</h2>
          </div>
        </AnimeReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { quote: "Before joining Brij-Hunar, I had never touched a modern stitching machine. Today, I earn independently and contribute proudly to my family's household expenses.", name: "Priya Sharma", batch: "Batch 2022 • Apparel & Tailoring", img: "/images/projects/brij-hunar-tailoring.jpg" },
            { quote: "The computer and digital literacy modules gave me the confidence to apply for administrative jobs. Today I work as a data operator in a local cooperative.", name: "Amit Kumar", batch: "Batch 2021 • IT & Logistics", img: "/images/projects/brij-hunar-computer-class.jpg" },
          ].map((t, i) => (
            <AnimeReveal key={t.name} variant="fade-up" delay={i * 120}>
              <TiltCard className="h-full">
                <div className="clay-card p-10 relative h-full flex flex-col justify-between">
                  <div>
                    <span className="text-6xl font-serif text-secondary/25 absolute top-6 left-6 select-none">“</span>
                    <p className="text-base sm:text-lg text-muted-foreground italic mb-8 leading-relaxed font-serif relative z-10 pl-6">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md shrink-0">
                      <img alt={t.name} className="w-full h-full object-cover" src={t.img} />
                    </div>
                    <div>
                      <h5 className="font-bold text-primary text-base font-display">{t.name}</h5>
                      <p className="text-xs text-accent font-bold uppercase tracking-wide">{t.batch}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden text-center">
        <AuroraBackground variant="dark" intensity={1.1} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Empower the Next Batch of <br /><span className="text-secondary italic">Women Changemakers</span>
          </h2>
          <p className="text-primary-foreground/75 mb-10 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Your support directly provides raw materials, sewing machines, and certified instructors to young women across the Braj countryside.
          </p>
          <Link to="/donate" className="btn-3d-accent px-12 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
            Donate Now <ArrowRight size={16} />
          </Link>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default BrijHunarPage;
