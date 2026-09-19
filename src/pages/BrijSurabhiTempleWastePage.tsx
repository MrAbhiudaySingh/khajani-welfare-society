import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Sparkles, Flower2, Droplets, Quote, ArrowRight, CheckCircle } from "lucide-react";

const BrijSurabhiTempleWastePage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full bg-primary text-primary-foreground py-24 px-6 relative overflow-hidden min-h-[75vh] flex items-center">
        <AuroraBackground variant="dark" intensity={0.8} />
        <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-16 items-center z-10 relative">
          <AnimeReveal variant="fade-right" className="flex-1 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase glass-dark px-4 py-1.5 rounded-full border border-accent/20 mb-6 w-fit">
              <Sparkles size={10} /> Eco-Spiritual Circular Economy
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-primary-foreground">
              From Floral Offerings to <br />
              <span className="text-secondary italic">Fragrant Futures</span>
            </h1>
            <p className="text-lg md:text-xl font-light text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              Transforming discarded temple marigolds, roses, and sacred holy basil into organic incense, botanical perfumes, and artisanal petal paper — keeping the sacred Yamuna clean.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Support Floral Recycling
              </Link>
              <Link to="/collaborations" className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Wholesale Inquiries
              </Link>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={200} className="w-full lg:w-[500px]">
            <TiltCard maxTilt={10}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/images/projects/brij-surabhi-flower-recycling.jpg"
                  alt="Floral Waste Processing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Zero Chemical Extraction</span>
                  <p className="text-white text-xs font-serif italic mt-0.5">Sun-dried petals hand-blended with organic guggul, loban, and natural essential oils</p>
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>
        </div>
      </section>

      {/* Mentorship & Vision */}
      <section className="w-full py-20 px-6 bg-background relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.35} />
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
          <AnimeReveal variant="fade-right" className="flex-1 order-2 md:order-1">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Spiritual Stewardship</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">Vision & Blessings</h2>
            <h3 className="text-lg font-bold text-secondary mb-6 flex items-center gap-2">
              <Quote size={18} /> MP Hema Malini (Mathura Parliamentary Constituency)
            </h3>
            <div className="clay-card p-6 border-l-4 border-accent">
              <p className="text-lg leading-relaxed text-primary italic font-serif">
                "The Brij-Surabhi initiative is not just about waste management; it is a profound spiritual recycling. By transforming sacred floral offerings into fragrant, sustainable products, we honor the divine while providing dignified livelihoods for rural women."
              </p>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={150} className="w-full md:w-5/12 order-1 md:order-2">
            <div className="clay-card p-8 text-center flex flex-col items-center">
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent mb-4">
                <Flower2 size={30} />
              </div>
              <span className="text-4xl lg:text-5xl font-display font-bold text-primary mb-1">50+ Tons</span>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Temple Offerings Diverted From Yamuna</p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full py-24 px-6 bg-card border-t border-border">
        <div className="max-w-7xl w-full mx-auto">
          <AnimeReveal variant="fade-up">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4">
              <div>
                <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Handcrafted Range</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">Sacred Sustainable Products</h2>
              </div>
              <p className="text-muted-foreground text-sm max-w-sm">
                Chemical-free, charcoal-free, and hand-rolled by trained women SHG members of Mathura.
              </p>
            </div>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                img: "/images/projects/brij-surabhi-diya.jpg",
                title: "Vedic Dhoop Cones",
                desc: "Artisanal incense cones hand-crafted from recycled temple marigolds, pure cow ghee, and Himalayan resins.",
                tag: "Charcoal Free",
              },
              {
                img: "/images/projects/brij-surabhi-idol-painting.jpg",
                title: "Temple Agarbatti",
                desc: "Premium bamboo-less incense sticks rolled with dried lotus petals and therapeutic Vrindavan tulsi.",
                tag: "Hand Rolled",
              },
              {
                img: "/images/projects/brij-surabhi-temple.jpg",
                title: "Pure Floral Itra",
                desc: "Traditional alcohol-free botanical attar hydro-distilled in copper deg-bhapka stills from fresh temple blooms.",
                tag: "Deg-Bhapka",
              },
              {
                img: "/images/projects/brij-surabhi-flower-recycling.jpg",
                title: "Petal-Embedded Paper",
                desc: "Handmade seed paper and luxury stationery incorporating real pressed flower petals and recycled cotton rag.",
                tag: "Zero Tree Cut",
              },
            ].map((product, i) => (
              <AnimeReveal key={product.title} variant="fade-up" delay={i * 90}>
                <TiltCard maxTilt={8} className="h-full">
                  <div className="clay-card p-6 flex flex-col justify-between text-left group hover:border-accent/30 transition-all h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="glass text-[10px] font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full border border-accent/20">
                          {product.tag}
                        </span>
                        <Flower2 className="text-accent" size={16} />
                      </div>
                      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-sm">
                        <img
                          src={product.img}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {product.title}
                      </h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{product.desc}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-bold text-accent uppercase tracking-wider">
                      <span>SHG Handcrafted</span>
                      <CheckCircle size={14} />
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full bg-primary py-20 px-6 text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.65} />
        <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "50+", label: "Tons Diverted" },
            { num: "200+", label: "Artisans Employed" },
            { num: "15+", label: "Temples Enrolled" },
            { num: "100%", label: "River Safe & Organic" },
          ].map((s, i) => (
            <AnimeReveal key={s.label} variant="fade-up" delay={i * 80}>
              <div className="clay-card-gold p-6 flex flex-col items-center">
                <div className="text-4xl lg:text-5xl font-display font-bold text-secondary mb-1">{s.num}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-primary">{s.label}</div>
              </div>
            </AnimeReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BrijSurabhiTempleWastePage;
