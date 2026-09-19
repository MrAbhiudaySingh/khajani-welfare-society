import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Paintbrush, Store, Globe, ArrowRight } from "lucide-react";

const CollaborationsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-card">
        <AuroraBackground variant="light" intensity={0.6} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-left" className="max-w-3xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 glass px-3 py-1.5 rounded-full border border-accent/20 inline-block">
              Institutional Framework
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-[0.95] mb-8 mt-4">
              Government & Global<br /><span className="text-accent">Collaborations</span>
            </h1>
            <div className="border-l-4 border-accent pl-8 py-2">
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic leading-relaxed">
                "We build sustainable pathways for empowerment through strategic institutional partnerships and certified training frameworks."
              </p>
            </div>
          </AnimeReveal>
        </div>
      </div>

      {/* UPSDM */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimeReveal variant="fade-left" delay={100} className="lg:col-span-5 lg:order-2">
              <span className="glass text-primary text-xs font-bold tracking-widest uppercase rounded-full px-3 py-1.5 border border-primary/20 inline-block mb-4">
                State Partnership
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 mt-4 leading-tight">
                Uttar Pradesh Skill Development Mission (UPSDM)
              </h2>
              <p className="drop-cap text-muted-foreground text-lg leading-relaxed mb-8">
                Our flagship collaboration with UPSDM has created a certified pathway for women in the Braj region. This isn't merely training; it is a masterclass in traditional and modern tailoring techniques.
              </p>
              <div className="clay-card-navy p-8 relative overflow-hidden">
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-secondary" />
                <h4 className="font-bold text-secondary text-xs uppercase tracking-[0.2em] mb-3">Key Outcome</h4>
                <p className="text-2xl font-display leading-tight text-primary-foreground">
                  125 participants successfully certified and placed in commercial units.
                </p>
              </div>
            </AnimeReveal>
            <AnimeReveal variant="fade-right" className="lg:col-span-7 lg:order-1 relative">
              <div className="relative">
                <img
                  alt="Women in tailoring workshop"
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition duration-700"
                  style={{ boxShadow: "0 12px 0 hsl(var(--primary)), 0 24px 48px rgba(0,0,0,0.2)" }}
                  src="/images/projects/upsdm-tailor.jpg"
                />
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* MSME */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.7} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Central Government</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">Ministry of MSME</h2>
              <p className="text-primary-foreground/60 text-lg leading-relaxed">
                Preserving cultural heritage while ensuring economic viability through partnership with the Ministry of Micro, Small & Medium Enterprises.
              </p>
            </div>
          </AnimeReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              { icon: Paintbrush, title: "Royal Sanjhi Art", desc: "Training women in the intricate, centuries-old paper cutting art of Sanjhi, indigenous to Mathura and Vrindavan." },
              { icon: Store, title: "Digital Marketing", desc: "Equipping artisans with digital literacy and marketing skills to sell their goods on e-commerce platforms." },
            ].map((item, i) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={i * 150}>
                <TiltCard maxTilt={8} className="h-full">
                  <div className="clay-card-navy rounded-2xl p-10 group hover:border-secondary/40 transition-colors h-full flex flex-col justify-between">
                    <div>
                      <div className="glass-dark w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
                        <item.icon size={24} className="text-secondary" />
                      </div>
                      <h3 className="font-display text-3xl text-primary-foreground mb-4">{item.title}</h3>
                      <p className="text-primary-foreground/70 leading-relaxed font-light text-sm">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* World Bank */}
      <section className="py-24 bg-background relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.5} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimeReveal variant="fade-right">
              <div className="flex items-center gap-2 mb-4">
                <div className="glass w-8 h-8 rounded-lg flex items-center justify-center">
                  <Globe size={16} className="text-accent" />
                </div>
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Global Initiative</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-primary mb-8 leading-none">
                World Bank<br />Pro-Poor Tourism
              </h2>
              <div className="w-20 h-1 bg-secondary mb-8 rounded-full" />
              <p className="text-xl text-primary font-display italic mb-8">
                "Integrating local artisans into the tourism value chain to ensure that economic benefits reach the grassroots level."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Under the UP Pro-Poor Tourism Development Project funded by the World Bank, Khajani Welfare Society implemented a comprehensive artisan development program focusing on design intervention, quality control, and direct market linkages.
              </p>
            </AnimeReveal>
            <AnimeReveal variant="fade-left" delay={150} className="flex flex-col justify-center">
              <div className="clay-card p-10 relative overflow-hidden">
                <span className="absolute -right-4 -bottom-8 text-[12rem] font-display font-bold text-muted/20 pointer-events-none select-none">125</span>
                <div className="relative z-10">
                  <span className="block text-6xl font-display font-bold text-accent mb-2">125</span>
                  <span className="text-sm font-bold tracking-widest uppercase text-primary border-b border-border pb-4 mb-6 block">Artisans Integrated</span>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Local women successfully trained, equipped, and connected to structured tourist markets, establishing sustainable livelihood models.
                  </p>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* Partners */}
      <AnimeReveal variant="fade">
        <section className="py-20 border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xs font-bold text-muted-foreground tracking-[0.3em] uppercase mb-16">Institutional Partners</h3>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {["UPSDM", "MSME", "WORLD BANK", "SIDBI", "NSDC"].map((p) => (
                <div
                  key={p}
                  className="clay-card px-8 py-5 group hover:border-accent/30 transition-all duration-300"
                >
                  <span className="font-display font-bold text-xl md:text-2xl text-muted-foreground group-hover:text-primary transition-colors">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimeReveal>
    </Layout>
  );
};

export default CollaborationsPage;
