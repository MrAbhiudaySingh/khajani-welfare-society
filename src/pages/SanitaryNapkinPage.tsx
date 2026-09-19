import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Store, GraduationCap, Trash2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Store,
    title: "Access: 25+ Machine Installations",
    desc: "Installed automated sanitary napkin vending machines in rural schools, ensuring discreet, affordable, and 24/7 access.",
  },
  {
    icon: GraduationCap,
    title: "Education: De-stigmatization Sessions",
    desc: "Trained female health educators conduct open menstrual hygiene and biological awareness workshops for teenage girls.",
  },
  {
    icon: Trash2,
    title: "Ecological Safety: Incineration Units",
    desc: "Provided electric smokeless napkin incinerators in school restrooms for safe, dignified, and hygienic zero-waste disposal.",
  },
];

const SanitaryNapkinPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full bg-primary overflow-hidden min-h-[75vh] flex items-center justify-center pt-20 pb-24 text-center">
        <AuroraBackground variant="dark" intensity={1.3} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/sanitary-napkin.jpg"
            alt="Menstrual hygiene awareness camp"
            className="w-full h-full object-cover opacity-25 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
        </div>
        <div className="relative z-20 max-w-4xl px-4 sm:px-8 mt-8">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 glass-dark text-secondary text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-secondary/25 mb-6">
              <Sparkles size={12} /> Menstrual Health &amp; Hygiene
            </span>
            <h1 className="text-primary-foreground text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-6">
              Dignity in Education, <br /><span className="text-secondary italic font-serif">Health in Every School</span>
            </h1>
            <p className="text-primary-foreground/80 text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Removing menstrual taboos and preventing school absenteeism through automated napkin vending and smokeless disposal units.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
                Sponsor a Vending Machine <ArrowRight size={16} />
              </Link>
              <a href="#approach" className="btn-3d-outline px-8 py-4 text-sm uppercase tracking-widest">
                Our Model
              </a>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimeReveal variant="fade-right" className="lg:col-span-6">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Breaking the Taboo</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              A Comprehensive Menstrual Health Ecosystem
            </h2>
            <div className="h-1 w-20 bg-secondary mb-8 rounded-full" />
            <p className="drop-cap text-lg text-muted-foreground leading-relaxed mb-6 font-serif">
              In rural India, millions of adolescent girls miss up to 20% of their school days simply due to lack of sanitary pads and safe private facilities.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Khajani's integrated model combines token-operated automated dispensers, doctor-led biological awareness sessions, and electric incinerators to ensure no girl drops out of education because of a natural biological cycle.
            </p>
            <Link to="/donate" className="btn-3d-accent px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Support This Mission <ArrowRight size={16} />
            </Link>
          </AnimeReveal>

          <div className="lg:col-span-6 space-y-4">
            {pillars.map((pillar, i) => (
              <AnimeReveal key={pillar.title} variant="fade-left" delay={i * 100}>
                <TiltCard maxTilt={8}>
                  <div className="clay-card p-6 flex items-start gap-5">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent shrink-0 mt-1">
                      <pillar.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-primary mb-1.5">{pillar.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
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
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Healthcare Milestone</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-display font-bold text-secondary mb-4 tracking-tight">2,000+</h2>
          <p className="text-2xl md:text-3xl font-display font-medium text-white mb-2">Schoolgirls Continuously Supported</p>
          <p className="text-primary-foreground/75 text-base max-w-xl font-light">
            With over 80% reduction in menstruation-related school absenteeism across partner villages.
          </p>
        </AnimeReveal>
      </section>

      {/* Photo Showcase */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard maxTilt={8}>
            <div className="clay-card overflow-hidden rounded-3xl p-3">
              <img
                src="/images/projects/sanitary-napkin-vending.jpg"
                alt="Sanitary napkin vending installation"
                className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-center">
                <h4 className="font-display font-bold text-primary text-lg">Automated Vending Units</h4>
                <p className="text-xs text-muted-foreground mt-1">Discreet token &amp; coin-operated access in school facilities.</p>
              </div>
            </div>
          </TiltCard>

          <TiltCard maxTilt={8}>
            <div className="clay-card overflow-hidden rounded-3xl p-3">
              <img
                src="/images/projects/sanitary-napkin.jpg"
                alt="Health awareness workshop"
                className="w-full h-80 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-center">
                <h4 className="font-display font-bold text-primary text-lg">Doctor-Led Workshops</h4>
                <p className="text-xs text-muted-foreground mt-1">Dispelling myths and teaching positive menstrual hygiene habits.</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center bg-card border-t border-border relative overflow-hidden">
        <AuroraBackground variant="light" intensity={1.1} />
        <AnimeReveal variant="fade-up" className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Install a Machine in a Village School</h2>
          <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
            Your CSR or personal sponsorship covers the automated dispenser, electric incinerator, and 1 year of subsidized napkin supply.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="btn-3d-accent px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Sponsor an Installation <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-3d-outline px-10 py-4 text-sm uppercase tracking-widest">
              View All Programs
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default SanitaryNapkinPage;
