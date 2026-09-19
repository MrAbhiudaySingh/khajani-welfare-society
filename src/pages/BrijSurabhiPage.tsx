import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { TreePine, Users, Flower2, Sparkles, ArrowRight, Recycle, Heart } from "lucide-react";

const BrijSurabhiPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <header className="relative pt-24 pb-20 px-4 sm:px-8 overflow-hidden bg-card border-b border-border">
        <AuroraBackground variant="light" intensity={1.2} />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <AnimeReveal variant="fade-right" className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 glass text-secondary text-xs font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border border-secondary/20 mb-6">
              <Sparkles size={12} /> Divine Ecology Initiative
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-[0.95] mb-6">
              Brij-<br /><span className="italic text-secondary font-serif">Surabhi</span>
            </h1>
            <p className="text-xl md:text-2xl font-display text-muted-foreground leading-relaxed italic border-l-4 border-secondary pl-6 py-2 mb-8">
              "A sacred convergence of indigenous cow welfare and sustainable temple waste upcycling. Transforming devotional offerings into fragrant livelihoods."
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Zero Waste", "Eco-Friendly", "Artisan Women Livelihoods"].map((tag) => (
                <span key={tag} className="glass px-3 py-1.5 text-xs font-bold text-primary rounded-full border border-border">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
                Support the Mission <ArrowRight size={16} />
              </Link>
              <a href="#divisions" className="btn-3d-outline px-8 py-4 text-sm uppercase tracking-widest">
                Our Divisions
              </a>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={200} className="lg:col-span-7">
            <TiltCard maxTilt={10}>
              <div
                className="relative aspect-[4/3] md:aspect-[16/11] overflow-hidden rounded-3xl shadow-2xl"
                style={{ boxShadow: "0 16px 0 hsl(var(--border)), 0 24px 48px rgba(27,46,107,0.15)" }}
              >
                <img
                  alt="Brij Surabhi project activities"
                  className="w-full h-full object-cover"
                  src="/images/projects/brij-surabhi-idol-painting.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl text-white">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Devotional Art &amp; Craft</span>
                  <span className="text-sm font-display italic">Handcrafted eco-friendly sacred idols &amp; incense</span>
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>
        </div>
      </header>

      {/* Quote / Mission Section */}
      <section className="py-20 px-4 sm:px-8 bg-background relative">
        <div className="max-w-5xl mx-auto">
          <AnimeReveal variant="fade-up">
            <div className="clay-card p-10 sm:p-14 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-1/3 shrink-0 text-center">
                <div className="w-36 h-36 mx-auto rounded-3xl overflow-hidden shadow-lg border-2 border-secondary/30">
                  <img
                    alt="Devotional heritage"
                    className="w-full h-full object-cover"
                    src="/images/projects/brij-surabhi-temple.jpg"
                  />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mt-4">Mathura &amp; Vrindavan</h3>
                <p className="text-xs uppercase tracking-widest text-secondary mt-0.5">Sacred Brij Heritage</p>
              </div>
              <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-10">
                <span className="text-5xl text-secondary opacity-40 font-serif leading-none block mb-2">“</span>
                <p className="text-2xl sm:text-3xl font-display font-bold text-primary leading-snug mb-4">
                  Brij-Surabhi is an offering to the land and its traditions.
                </p>
                <p className="text-muted-foreground font-light text-base leading-relaxed">
                  Every day, sacred floral offerings and stray cow waste pose an environmental dilemma across pilgrim hubs. Khajani transforms these sacred elements into aromatic incense, Gau-Kasht logs, and organic vermicompost through rural self-help groups.
                </p>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Cow Dung Products */}
      <section id="divisions" className="py-24 px-4 sm:px-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <AnimeReveal variant="fade-right" className="lg:col-span-5 order-2 lg:order-1">
              <span className="btn-3d-navy text-[11px] font-bold tracking-widest uppercase px-3 py-1 mb-4 inline-block">
                Division I • Gau-Dhan
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Cow Dung Products &amp;<br />Gau-Kasht Logs
              </h2>
              <p className="drop-cap text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 font-serif">
                Addressing stray cattle waste in Mathura, this initiative converts cow dung into high-density <strong className="text-primary font-bold">Gau-Kasht</strong> (compressed biomass logs). These serve as a sustainable alternative to felling trees for traditional wood cremation and domestic fuel.
              </p>
              <div className="space-y-4">
                <div className="clay-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent shrink-0">
                    <TreePine size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-base">Forest Protection</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Saves mature trees and drastically curtails deforestation for firewood.</p>
                  </div>
                </div>
                <div className="clay-card p-5 flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-primary text-base">Rural Female Employment</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Operated by SHG women managing processing and briquette machines.</p>
                  </div>
                </div>
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={200} className="lg:col-span-7 order-1 lg:order-2">
              <TiltCard maxTilt={10}>
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3]"
                  style={{ boxShadow: "0 16px 0 hsl(var(--border)), 0 24px 48px rgba(27,46,107,0.14)" }}
                >
                  <img
                    alt="Cow Dung and Eco Craft"
                    className="w-full h-full object-cover"
                    src="/images/projects/brij-surabhi-cow-craft.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl text-white">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Gau-Kasht Division</span>
                    <span className="text-sm font-display italic">Clean fuel briquettes saving thousands of trees</span>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* Floral Waste Section */}
      <section className="py-24 px-4 sm:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <AnimeReveal variant="fade-right" className="lg:col-span-7">
              <TiltCard maxTilt={10}>
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3]"
                  style={{ boxShadow: "0 16px 0 hsl(var(--border)), 0 24px 48px rgba(27,46,107,0.14)" }}
                >
                  <img
                    alt="Temple Flowers Processing"
                    className="w-full h-full object-cover"
                    src="/images/projects/brij-surabhi-flower-recycling.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl text-white">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Pushp-Seva Division</span>
                    <span className="text-sm font-display italic">Drying temple marigolds &amp; roses for charcoal-free incense</span>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
              <span className="btn-3d-accent text-[11px] font-bold tracking-widest uppercase px-3 py-1 mb-4 inline-block">
                Division II • Pushp-Seva
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                Floral Waste <br />to Fragrance
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Tons of discarded temple flowers in Mathura and Vrindavan are prevented from polluting the sacred Yamuna river. We collect and upcycle them into fragrant, chemical-free agarbattis and dhoop.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Organic Dhoop", desc: "Charcoal-free cones made from sacred petals." },
                  { num: "02", title: "Pure Havan Cups", desc: "Infused with guggul and temple floral extracts." },
                  { num: "03", title: "Natural Color", desc: "Eco-friendly dyes extracted from marigold petals." },
                  { num: "04", title: "Vermicompost", desc: "Returning organic matter as enriched soil nourishment." },
                ].map((item) => (
                  <div key={item.num} className="clay-card p-5">
                    <span className="text-xs font-bold text-secondary font-mono block mb-1">{item.num}</span>
                    <h4 className="text-base font-display font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden text-center">
        <AuroraBackground variant="dark" intensity={1.3} />
        <AnimeReveal variant="fade-up" className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16">
            Preserving Heritage, <br /><span className="text-secondary italic">Empowering Communities</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "500+", label: "Women Artisans" },
              { num: "20T+", label: "Temple Waste Recycled" },
              { num: "15,000+", label: "Trees Saved" },
              { num: "152", label: "Villages Served" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-display font-bold text-secondary mb-2">{s.num}</span>
                <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/75 font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/donate" className="btn-3d-accent px-12 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Support Brij-Surabhi <ArrowRight size={16} />
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default BrijSurabhiPage;
