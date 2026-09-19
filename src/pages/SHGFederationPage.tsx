import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Users, Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Layers } from "lucide-react";

const shgs = [
  { name: "Nipun", desc: "Focusing on advanced tailoring, precise garment construction, and designer stitching techniques.", tag: "Tailoring" },
  { name: "Saksham", desc: "Specializing in traditional embroidery, zari craftsmanship, and localized Braj heritage preservation.", tag: "Embroidery" },
  { name: "Pragati", desc: "Dedicated to bulk uniform manufacturing for regional schools, hospitals, and community institutions.", tag: "Manufacturing" },
  { name: "Ujjwal", desc: "Producing eco-friendly cloth bags, jute articles, and biodegradable packaging materials.", tag: "Eco-Products" },
  { name: "Jagriti", desc: "Expertise in intricate beadwork, festival accessories, and ceremonial artisanal articles.", tag: "Handicrafts" },
  { name: "Navya", desc: "Creating contemporary apparel blending modern design aesthetics with indigenous Braj handlooms.", tag: "Apparel" },
  { name: "Srishti", desc: "Focused on fabric upcycling, zero-waste textiles, and innovative circular fashion initiatives.", tag: "Upcycling" },
  { name: "Kiran", desc: "Managing the production of handcrafted, premium home decor textiles, cushion covers, and throws.", tag: "Home Decor" },
  { name: "Asha", desc: "Providing specialized peer training, foundational mentorship, and financial literacy to new entrants.", tag: "Mentorship" },
  { name: "Jyoti", desc: "Handling rigorous quality assurance, export packaging, and final finishing of all Federation products.", tag: "Quality Check" },
];

const SHGFederationPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-primary overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.75} />
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            alt="Group of women working at sewing machines"
            className="w-full h-full object-cover object-center"
            src="/images/projects/shg-federation.jpg"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 px-4 py-1.5 glass-dark rounded-full border border-accent/20">
              <Sparkles size={10} /> SHGs & Area Level Federation
            </span>
            <h1 className="text-primary-foreground text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight max-w-4xl">
              Together <br />
              <span className="text-secondary italic">We Rise</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mt-8 font-light">
              Empowering women through organized micro-enterprises, peer-supported credit, and sustainable self-reliance in the heart of Brij.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* About the Federation */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20 lg:py-28 relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.35} />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <AnimeReveal variant="fade-right" className="lg:col-span-5">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Institutional Backbone</span>
            <h2 className="text-primary text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
              The Brij Surabhi Federation
            </h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              The Brij Surabhi Federation acts as the central institutional pillar, overseeing operations, credit governance, and market access for self-help groups across Mathura district.
            </p>
            <div className="flex gap-4">
              <div className="clay-card p-4 flex-1 text-center">
                <span className="text-3xl font-display font-bold text-accent">10</span>
                <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Active Groups</p>
              </div>
              <div className="clay-card p-4 flex-1 text-center">
                <span className="text-3xl font-display font-bold text-accent">120+</span>
                <p className="text-xs font-bold text-muted-foreground uppercase mt-1">Women Members</p>
              </div>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={100} className="lg:col-span-7 space-y-6">
            <div className="clay-card p-8">
              <h3 className="text-xl font-display font-bold text-primary mb-3 flex items-center gap-2">
                <HeartHandshake className="text-accent" size={22} /> Collective Economic Power
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                By pooling small monthly savings, members create emergency loan buffers that eliminate predatory moneylenders, while gaining access to formal microfinance loans from nationalized banks.
              </p>
            </div>
            <div className="clay-card p-8">
              <h3 className="text-xl font-display font-bold text-primary mb-3 flex items-center gap-2">
                <Layers className="text-accent" size={22} /> Centralized Supply Chain & Market Linkage
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Raw materials are procured in bulk to reduce costs, and finished artisan products are distributed directly to temple trusts, retail fairs, and corporate gifting channels under unified quality benchmarks.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* SHG Grid */}
      <section className="w-full bg-card/60 py-20 lg:py-28 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <AnimeReveal variant="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Grassroots Network</span>
              <h2 className="text-primary text-3xl md:text-5xl font-display font-bold leading-tight">
                Our 10 Active Self-Help Groups
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm">
              Each group specializes in distinct artisanal, manufacturing, and support capabilities to form a resilient regional cooperative.
            </p>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shgs.map((shg, i) => (
              <AnimeReveal key={shg.name} variant="fade-up" delay={(i % 3) * 80}>
                <TiltCard maxTilt={8} className="h-full">
                  <div className="clay-card p-8 flex flex-col justify-between h-full group hover:border-accent/30 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="glass text-[10px] font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full border border-accent/20">
                          {shg.tag}
                        </span>
                        <span className="w-7 h-7 rounded-full bg-primary/5 flex items-center justify-center text-xs font-bold text-primary">
                          #{i + 1}
                        </span>
                      </div>
                      <h3 className="text-primary text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                        SHG {shg.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{shg.desc}</p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border/50 flex items-center justify-between text-xs font-bold text-accent uppercase tracking-wider">
                      <span>Certified Unit</span>
                      <ShieldCheck size={16} />
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.7} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Support Women's <span className="text-secondary italic">Self-Reliance</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto font-light">
            Help us scale the Federation to onboard 500 more rural women into sustainable micro-enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="btn-3d-accent inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest">
              Contribute Now
            </Link>
            <Link to="/collaborations" className="btn-3d-outline inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest">
              Partner With Federation
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default SHGFederationPage;
