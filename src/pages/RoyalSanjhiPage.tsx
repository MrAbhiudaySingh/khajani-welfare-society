import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Sparkles, Palette, Scissors, ArrowRight, Award, Compass } from "lucide-react";

const programs = [
  {
    title: "Fashion & Haute Couture",
    desc: "Integrate Sanjhi stencil motifs into contemporary textiles, bridal lehengas, and designer apparel. Master precise multi-layer cutting on raw silks and handlooms.",
    image: "/images/projects/royal-sanjhi-training.jpg",
    tag: "Textile Arts",
  },
  {
    title: "Luxury Interior & Spatial Design",
    desc: "Apply ancient stencil aesthetics to luxury architectural screens (jaalis), backlit panels, wall murals, and bespoke hospitality decor for high-end heritage properties.",
    image: "/images/projects/poshak-sanjhi.jpg",
    tag: "Spatial Decor",
  },
];

const RoyalSanjhiPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full bg-primary py-24 px-6 relative overflow-hidden min-h-[70vh] flex items-center">
        <AuroraBackground variant="dark" intensity={0.75} />
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimeReveal variant="fade-right" className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase text-xs px-4 py-1.5 glass-dark rounded-full border border-accent/20 w-fit">
                <Sparkles size={10} /> Cultural Heritage Preservation
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight text-primary-foreground">
                Reviving the <br />
                <span className="text-secondary italic">Royal Sanjhi Art</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-lg font-light">
                Preserving the sacred 16th-century Braj paper-cutting tradition. Blending Mughal-Braj royal aesthetics with modern couture and architecture.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/donate" className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                  Support Artisans
                </Link>
                <Link to="/collaborations" className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                  Commission Art
                </Link>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={200}>
              <TiltCard maxTilt={10}>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                  <img
                    src="/images/projects/royal-sanjhi-training.jpg"
                    alt="Royal Sanjhi Art Training Session"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider block mb-1">MSME Certified Workshop</span>
                    <p className="text-white text-sm font-serif italic">Freehand scissor cutting with curved custom blades without drawing lines</p>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-background py-24 relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.4} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimeReveal variant="fade-up" className="mb-16 max-w-3xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Specialized Pathways</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
              MSME Partnerships & Modern Applications
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We upgrade centuries-old craftsmanship into commercially valuable design disciplines, enabling youth and women to earn respectful livelihoods as master craft practitioners.
            </p>
          </AnimeReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {programs.map((program, i) => (
              <AnimeReveal key={program.title} variant="fade-up" delay={i * 120}>
                <TiltCard maxTilt={8} className="h-full">
                  <div className="clay-card p-8 flex flex-col h-full justify-between group hover:border-accent/30 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="glass text-xs font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full border border-accent/20">
                          {program.tag}
                        </span>
                        <Scissors className="text-accent" size={18} />
                      </div>
                      <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 shadow-md">
                        <img
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{program.desc}</p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Curriculum <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stat */}
      <section className="bg-primary py-20 text-center relative overflow-hidden border-t border-border">
        <AuroraBackground variant="dark" intensity={0.6} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 glass-dark px-4 py-1.5 rounded-full border border-secondary/30 mb-6">
            <Award className="text-secondary" size={16} />
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">Cultural Milestone</span>
          </div>
          <h3 className="text-primary-foreground text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight">
            500+ <span className="text-secondary italic">Artisans</span> Trained
          </h3>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            Reviving the royal legacy of Brij stencil art, connecting marginalized women directly with design houses and international collectors.
          </p>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default RoyalSanjhiPage;
