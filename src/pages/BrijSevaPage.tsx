import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Droplets, TreePine, Heart, Shirt, BookOpen, UtensilsCrossed, Sparkles, ArrowRight } from "lucide-react";

const BrijSevaPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="w-full bg-primary text-primary-foreground min-h-[75vh] flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.8} />
        <div className="absolute inset-0 grid grid-cols-3 z-0 opacity-20">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/projects/brij-seva-jal.jpg')" }} />
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/projects/plantation-drive.jpg')" }} />
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('/images/projects/daan-utsav.jpg')" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary" />
        <div className="relative z-10 max-w-5xl text-center flex flex-col items-center gap-6">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase glass-dark px-4 py-1.5 rounded-full border border-accent/20 mb-4">
              <Sparkles size={10} /> Community Relief & Environmental Care
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-primary-foreground">
              Serving the Community, <br />
              <span className="text-secondary italic">Nurturing the Earth</span>
            </h1>
            <p className="text-lg md:text-2xl font-light italic max-w-3xl text-primary-foreground/80 leading-relaxed mt-6">
              A dedicated grassroots effort to uplift communities through essential summer water relief, mass afforestation, and dignified seasonal giving across the Brij region.
            </p>
            <div className="pt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/donate" className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Support Seva Drives
              </Link>
              <Link to="/volunteer" className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Join as Volunteer
              </Link>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full bg-card border-y border-border py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { num: "10,000+", label: "Daily Thirst Relief Beneficiaries" },
            { num: "5,000+", label: "Indigenous Saplings Planted" },
            { num: "50+", label: "Active Regional Relief Nodes" },
          ].map((s, i) => (
            <AnimeReveal key={s.label} variant="fade-up" delay={i * 100}>
              <div className="clay-card p-6 flex flex-col items-center">
                <span className="font-display text-4xl lg:text-5xl font-bold text-accent mb-1">{s.num}</span>
                <span className="uppercase tracking-wider text-xs font-bold text-muted-foreground">{s.label}</span>
              </div>
            </AnimeReveal>
          ))}
        </div>
      </section>

      {/* Initiatives */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col gap-28 relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.35} />
        {/* Jal Seva */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <AnimeReveal variant="fade-right" className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent">
                <Droplets size={26} />
              </div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Summer Lifeline</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Jal Seva Campaign</h2>
            <h3 className="text-xl font-display italic text-secondary">5 Consecutive Years of Uninterrupted Water Camps</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              During the scorching 47°C northern summers, dehydration poses critical risks for daily wage laborers, pilgrims on the 84-Kos Parikrama, and rural travelers. We deploy hygienic chilled water, buttermilk, and oral rehydration stations at transit terminals.
            </p>
            <div className="clay-card p-4 border-l-4 border-accent">
              <p className="font-bold text-primary uppercase tracking-wider text-xs mb-1">Peak Season Footprint</p>
              <p className="text-xs text-muted-foreground">Serving over 10,000 individuals daily across Mathura, Vrindavan, Govardhan, and Barsana transit corridors.</p>
            </div>
          </AnimeReveal>
          <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-7">
            <TiltCard maxTilt={8}>
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border group relative">
                <img
                  src="/images/projects/brij-seva-jal.jpg"
                  alt="Jal Seva Campaign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider">Clean Drinking Water Access</span>
                  <p className="text-white text-xs font-serif italic mt-0.5">Free hygienic drinking water and fresh lemon sharbat</p>
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>
        </article>

        {/* Plantation Drives */}
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <AnimeReveal variant="fade-right" className="lg:col-span-7 order-2 lg:order-1">
            <TiltCard maxTilt={8}>
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border group relative">
                <img
                  src="/images/projects/plantation-drive.jpg"
                  alt="Plantation Drives"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider">Eco-Restoration</span>
                  <p className="text-white text-xs font-serif italic mt-0.5">Community tree plantations with geo-tagged sapling care</p>
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>
          <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5 flex flex-col gap-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent">
                <TreePine size={26} />
              </div>
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Environmental Mission</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Afforestation Drives</h2>
            <h3 className="text-xl font-display italic text-secondary">Reviving the Sacred Groves (Vans) of Braj</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Inspired by the historical forest tapestry of Braj, our monsoon plantation drives restore native flora including Kadamba, Peepal, Banyan, and Neem. We engage schoolchildren and women's self-help groups to ensure sustained watering and guardianship.
            </p>
            <div className="clay-card p-4 border-l-4 border-accent">
              <p className="font-bold text-primary uppercase tracking-wider text-xs mb-1">85% Survival Rate</p>
              <p className="text-xs text-muted-foreground">Rigorous monitoring and fencing protect young trees from grazing livestock.</p>
            </div>
          </AnimeReveal>
        </article>

        {/* Daan Utsav */}
        <article className="flex flex-col gap-12 relative z-10">
          <AnimeReveal variant="fade-up" className="text-center flex flex-col items-center gap-4 max-w-3xl mx-auto">
            <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent">
              <Heart size={30} />
            </div>
            <span className="text-accent text-xs font-bold uppercase tracking-widest">Festival of Giving</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">Daan Utsav: Dignified Relief</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Celebrated during Makar Sankranti and festival periods, Daan Utsav channels community philanthropy into transparent, highly targeted relief for pavement dwellers and destitute widows.
            </p>
          </AnimeReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              { icon: Shirt, title: "Winter Warmth", desc: "Distributing thick thermal blankets and woolens before the freezing Himalayan winter winds set in." },
              { icon: BookOpen, title: "Education Kits", desc: "Providing school backpacks, stationary, books, and geometry boxes to encourage school retention." },
              { icon: UtensilsCrossed, title: "Annadaan Packs", desc: "Delivering wholesome dry ration supplies including pulses, whole wheat flour, mustard oil, and salt." },
            ].map((item, i) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={i * 100}>
                <TiltCard maxTilt={8} className="h-full">
                  <div className="clay-card p-8 flex flex-col items-center text-center h-full justify-between group hover:border-accent/30 transition-all">
                    <div>
                      <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-accent mb-6 mx-auto">
                        <item.icon size={24} />
                      </div>
                      <h4 className="font-display text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-border w-full text-xs font-bold text-accent uppercase tracking-widest">
                      100% Direct Delivery
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default BrijSevaPage;
