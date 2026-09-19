import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Sparkles, Leaf, Heart, ArrowRight, Award } from "lucide-react";

const BrijSurabhiCowWelfarePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-primary overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.75} />
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/projects/brij-surabhi-cow-craft.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-start py-24 z-10">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase text-xs glass-dark px-4 py-1.5 rounded-full border border-accent/20 mb-6">
              <Sparkles size={10} /> Circular Rural Economy & Animal Welfare
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-bold leading-[1.05] max-w-4xl mb-6">
              Turning Compassion <br />
              <span className="text-secondary italic">Into Livelihood</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl font-light leading-relaxed mb-8">
              Harmonizing indigenous cow welfare with rural women's empowerment. Transforming Gaushala bio-resources into biodegradable art, organic fertilizers, and festive artifacts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Support Gaushala Artisans
              </Link>
              <Link to="/collaborations" className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Procure Bulk Eco-Crafts
              </Link>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-card border-y border-border w-full py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 text-center">
          <AnimeReveal variant="fade-up">
            <div className="clay-card p-6 flex flex-col items-center min-w-[220px]">
              <span className="font-display text-4xl lg:text-5xl text-accent font-bold mb-1">200+</span>
              <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Women Trained in Panchgavya</p>
            </div>
          </AnimeReveal>
          <AnimeReveal variant="fade-up" delay={100}>
            <div className="clay-card p-6 flex flex-col items-center min-w-[220px]">
              <span className="font-display text-4xl lg:text-5xl text-secondary font-bold mb-1">10,000+</span>
              <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Handmade Festive Diyas Sold</p>
            </div>
          </AnimeReveal>
          <AnimeReveal variant="fade-up" delay={200}>
            <div className="clay-card p-6 flex flex-col items-center min-w-[220px]">
              <span className="font-display text-4xl lg:text-5xl text-accent font-bold mb-1">100%</span>
              <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Biodegradable Natural Clay & Dung</p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.35} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <AnimeReveal variant="fade-right" className="lg:col-span-7">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Ecological Stewardship</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              From Rural Waste to Divine Artefacts
            </h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              In traditional cattle rearing, non-milking cows are frequently abandoned due to upkeep expenses. The Brij-Surabhi Cow Welfare Division changes this economic equation by monetizing cow dung and urine into high-value artistic and agricultural inputs.
            </p>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              Our master trainers instruct village women in purification, blending with natural gums, precision mold-pressing, and sun-curing. The artifacts are painted using organic vegetable dyes and mineral pigments like geru and haldi.
            </p>
            <div className="clay-card p-8 border-l-4 border-accent my-8">
              <p className="text-lg md:text-xl font-display italic text-primary leading-snug">
                "We don't just advocate animal compassion — we build self-funding economics that make cow protection naturally profitable for rural families."
              </p>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={200} className="lg:col-span-5">
            <div className="sticky top-28 space-y-8">
              <div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Signature Creations</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">Eco-Friendly Craft Line</h3>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  {
                    img: "/images/projects/brij-surabhi-diya.jpg",
                    title: "Sacred Panchgavya Diyas",
                    desc: "10,000+ smokeless oil lamps molded by SHG women for Deepotsav celebrations that completely dissolve into organic soil compost after use.",
                    tag: "Festive Range",
                  },
                  {
                    img: "/images/projects/brij-surabhi-idol-painting.jpg",
                    title: "Purified Lakshmi-Ganesh Sculptures",
                    desc: "Hand-painted deity figurines utilizing natural clay and purified dung, ensuring complete water body safety during post-festival immersion.",
                    tag: "Eco-Idols",
                  },
                ].map((product) => (
                  <TiltCard key={product.title} maxTilt={8}>
                    <div className="clay-card p-6 group hover:border-accent/30 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <span className="glass text-[10px] font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full border border-accent/20">
                          {product.tag}
                        </span>
                        <Leaf className="text-accent" size={16} />
                      </div>
                      <div className="w-full aspect-[16/10] mb-4 overflow-hidden rounded-2xl shadow-sm">
                        <img
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={product.img}
                        />
                      </div>
                      <h4 className="font-display text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                        {product.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{product.desc}</p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>
    </Layout>
  );
};

export default BrijSurabhiCowWelfarePage;
