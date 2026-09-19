import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { CheckCircle, Scissors, Flame, Drama, Wrench, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

const BrijAnshumanPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden pt-20 pb-24 text-center">
        <AuroraBackground variant="dark" intensity={1.3} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/brij-anshuman-icon.jpg"
            alt="Inmate vocational workshop"
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
        </div>
        <div className="relative z-10 max-w-4xl px-4 sm:px-8 mx-auto mt-8">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 glass-dark text-secondary text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-secondary/25 mb-6">
              <Sparkles size={12} /> Project Brij-Anshuman
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[1.05] mb-6">
              Rebuilding Lives <br /><span className="text-secondary italic font-serif">Beyond Bars</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Transforming incarceration into an opportunity for reformation through certified vocational tailoring, handicraft production, and human dignity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
                Support Reformation <ArrowRight size={16} />
              </Link>
              <a href="#curriculum" className="btn-3d-outline px-8 py-4 text-sm uppercase tracking-widest">
                Explore Trades
              </a>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <AnimeReveal variant="fade-right" className="md:col-span-6">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Mathura District Jail</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Rehabilitation Through Industrial Skill
            </h2>
            <div className="h-1 w-20 bg-secondary mb-8 rounded-full" />
            <p className="drop-cap text-lg text-muted-foreground leading-relaxed mb-6 font-serif">
              Project Brij-Anshuman was established inside Mathura District Jail to provide incarcerated individuals with structured, marketable vocational training.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Recognized nationally for producing certified PPE safety kits in collaboration with IIT Kanpur during the pandemic, the initiative restores self-worth, instills work ethic, and guarantees post-release rehabilitation.
            </p>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={150} className="md:col-span-6">
            <TiltCard maxTilt={8}>
              <div className="clay-card p-8 sm:p-10 space-y-6">
                <h3 className="text-2xl font-display font-bold text-primary">Core Reformation Pillars</h3>
                <div className="space-y-4">
                  {[
                    { title: "Technical Skill Mastery", desc: "Commercial sewing, pattern cutting, and handicraft assembly." },
                    { title: "Psychological Rehabilitation", desc: "Constructive engagement fostering mental calm and purpose." },
                    { title: "Post-Release Integration", desc: "Connecting skilled inmates to garment enterprises upon sentence completion." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 border border-border/50">
                      <ShieldCheck className="text-accent mt-1 shrink-0" size={20} />
                      <div>
                        <h4 className="font-bold text-primary text-base">{item.title}</h4>
                        <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>
        </div>
      </section>

      {/* Courses */}
      <section id="curriculum" className="bg-card py-24 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Trades</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Vocational Disciplines</h2>
              <p className="text-muted-foreground text-base">Practical trades delivering high commercial demand outside jail walls.</p>
            </div>
          </AnimeReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Scissors, title: "Sacred Poshak Making", desc: "Designing ornate attire for Braj temple deities, instilling cultural craftsmanship and sewing discipline." },
              { icon: Flame, title: "Artisan Candle Crafting", desc: "Decorative and scented beeswax & paraffin candles supplying regional festivals and handicraft markets." },
              { icon: Drama, title: "PPE Kits & Safety Gear", desc: "Pioneering industrial protective wear in partnership with IIT Kanpur, lauded by regional authorities." },
              { icon: Wrench, title: "Commercial Tailoring", desc: "Heavy garment assembly, pattern grading, and sewing machine maintenance for factory placement." },
            ].map((item, i) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={i * 90}>
                <TiltCard className="h-full">
                  <div className="clay-card p-8 flex flex-col h-full group hover:border-accent/40 border border-transparent transition-all">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="w-full bg-primary text-primary-foreground py-24 px-4 text-center relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.3} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <div className="clay-card-gold inline-flex items-center gap-2 px-6 py-2 mb-6">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Reform Milestone</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-display font-bold text-secondary mb-4 tracking-tight">1,000+</h2>
          <p className="text-2xl md:text-3xl font-display font-medium text-white mb-2">Inmates Re-skilled &amp; Rehabilitated</p>
          <p className="text-primary-foreground/75 text-base max-w-xl font-light">With near-zero recidivism among certified program graduates.</p>
        </AnimeReveal>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center bg-background relative overflow-hidden">
        <AuroraBackground variant="light" intensity={1.1} />
        <AnimeReveal variant="fade-up" className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Support Human Reformation</h2>
          <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
            Your contributions help purchase heavy-duty industrial sewing machines, fabric rolls, and certification exam fees for inmate batches.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="btn-3d-accent px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Donate to Reform Programs <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-3d-outline px-10 py-4 text-sm uppercase tracking-widest">
              Explore All Projects
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default BrijAnshumanPage;
