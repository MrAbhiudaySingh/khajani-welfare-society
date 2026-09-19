import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Sparkles, Award, Scissors, CheckCircle, ArrowRight } from "lucide-react";

const skills = [
  {
    title: "Design & Sacred Iconography",
    desc: "Understanding canonical temple aesthetics, deity proportions, and translating devotional themes into intricate textile embroidery layouts.",
    image: "/images/projects/poshak-sanjhi.jpg",
    tag: "Concept",
  },
  {
    title: "Fabric Treatment & Raw Silks",
    desc: "Selecting, sizing, and treating premium pure silks, velvets, and brocades suitable for sacred sanctum adornment across the temples of Vrindavan and Mathura.",
    image: "/images/projects/brij-hunar-tailoring.jpg",
    tag: "Textiles",
  },
  {
    title: "Geometrical Pattern Cutting",
    desc: "Mastering complex dimensional cuts for flared skirts (ghaghras), turbans (pagris), and scarves (patkas) with zero fabric wastage.",
    image: "/images/projects/brij-hunar-sewing-hall.jpg",
    tag: "Patterning",
  },
  {
    title: "Specialized Assembly Stitching",
    desc: "Reinforced micro-stitching and lining techniques required to securely hold heavy gold threads and semi-precious stone embellishments.",
    image: "/images/projects/brij-hunar-class.jpg",
    tag: "Tailoring",
  },
  {
    title: "Mathura Zari & Zardozi Embellishment",
    desc: "The pinnacle of the craft: intricate hand-embroidery using real metallic threads, salma-sitara, beads, and seed pearls that have earned regional GI recognition.",
    image: "/images/projects/poshak-zari.jpg",
    tag: "GI Heritage",
    wide: true,
  },
];

const RadhaKrishnaPoshakPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.75} />
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/projects/poshak-zari.jpg"
            alt="Radhakrishna Poshak Making Training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto py-24 px-6">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 glass-dark rounded-full border border-accent/20">
              <Sparkles size={10} /> World Bank Aided • UP Pro-Poor Tourism
            </span>
          </AnimeReveal>
          <AnimeReveal variant="fade-up" delay={100}>
            <h1 className="text-primary-foreground text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight">
              Honoring Sacred Tradition, <br />
              <span className="text-secondary italic">Empowering Livelihoods</span>
            </h1>
          </AnimeReveal>
          <AnimeReveal variant="fade-up" delay={200}>
            <p className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Preserving the sacred art of deity garment crafting in Mathura-Vrindavan, training underprivileged women in high-demand heritage couture.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20 relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.35} />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <AnimeReveal variant="fade-right" className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Partnership Overview</span>
            <h2 className="text-primary text-3xl lg:text-5xl font-display font-bold leading-tight tracking-tight">
              Reviving the Mathura Poshak GI Legacy
            </h2>
            <div className="w-16 h-1 bg-accent" />
            <p className="text-muted-foreground text-base leading-relaxed">
              Under the World Bank aided Uttar Pradesh Pro-Poor Tourism Development Project, Khajani Welfare Society conducted high-intensity masterclasses for traditional artisans. The program transforms cottage workshops into thriving micro-enterprises supplying handcrafted attire to prominent temples across the globe.
            </p>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5">
            <div className="clay-card-gold p-8 text-center flex flex-col items-center">
              <Award className="text-secondary mb-3" size={36} />
              <span className="text-4xl lg:text-5xl font-display font-bold text-secondary mb-1">125+</span>
              <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-2">Artisans Certified</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Completed intensive 30-day master artisan curriculum with verified placement.</p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-7xl mx-auto w-full px-6 py-20 border-t border-border">
        <AnimeReveal variant="fade-up" className="flex flex-col items-center text-center mb-16">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2">Master Craftsmanship</span>
          <h2 className="text-primary text-3xl lg:text-5xl font-display font-bold leading-tight">
            5 Core Disciplines of Divine Attire
          </h2>
        </AnimeReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <AnimeReveal
              key={skill.title}
              variant="fade-up"
              delay={i * 90}
              className={skill.wide ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="clay-card p-6 flex flex-col justify-between h-full group hover:border-accent/30 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="glass text-[10px] font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full border border-accent/20">
                        {skill.tag}
                      </span>
                      <Scissors className="text-muted-foreground group-hover:text-accent transition-colors" size={16} />
                    </div>
                    <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl mb-5 shadow-sm">
                      <img
                        src={skill.image}
                        alt={skill.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-primary text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{skill.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border flex items-center gap-2 text-xs font-bold text-accent">
                    <CheckCircle size={14} /> Mastered Technique
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 text-center relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.7} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Preserve Sacred <span className="text-secondary italic">Heritage Crafts</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto font-light">
            Sponsor an artisan batch to safeguard India's living cultural traditions and provide financial dignity to women artisans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" className="btn-3d-accent inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest">
              Sponsor an Artisan
            </Link>
            <Link to="/collaborations" className="btn-3d-outline inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-widest">
              Procure Temple Poshak
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default RadhaKrishnaPoshakPage;
