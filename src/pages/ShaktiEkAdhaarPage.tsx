import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Award, Sparkles, HeartHandshake, Theater, Users, ArrowRight } from "lucide-react";

const ShaktiEkAdhaarPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground px-6 py-20 lg:py-32 relative overflow-hidden min-h-[75vh] flex items-center">
        <AuroraBackground variant="dark" intensity={0.8} />
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/projects/shakti-ek-adhaar-1.jpg')" }}
        />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 w-full">
          <AnimeReveal variant="fade-right" className="flex-1 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-accent font-bold text-xs tracking-[0.2em] uppercase glass-dark px-4 py-1.5 rounded-full border border-accent/20 w-fit">
              <Sparkles size={10} /> Flagship Annual Celebration
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight text-primary-foreground">
              Celebrating the <br />
              <span className="text-secondary italic">Power of Every Woman</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
              Shakti Ek Adhaar: Our signature International Women's Day assembly honoring female grassroots leadership, courage, and transformative community impact across Braj.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/collaborations" className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Nominate an Achiever
              </Link>
              <Link to="/donate" className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Support the Summit
              </Link>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={200} className="flex-1 w-full grid grid-cols-2 gap-4 h-[420px] lg:h-[500px]">
            <TiltCard maxTilt={6} className="h-full">
              <div
                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-cover bg-center group relative"
                style={{ backgroundImage: "url('/images/projects/shakti-ek-adhaar-1.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 glass p-3 rounded-xl">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">Felicitation Gala</span>
                </div>
              </div>
            </TiltCard>
            <div className="grid grid-rows-2 gap-4 h-full">
              <TiltCard maxTilt={8} className="h-full">
                <div
                  className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-cover bg-center group relative"
                  style={{ backgroundImage: "url('/images/projects/shakti-ek-adhaar-2.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                </div>
              </TiltCard>
              <TiltCard maxTilt={8} className="h-full">
                <div
                  className="w-full h-full rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-cover bg-center group relative"
                  style={{ backgroundImage: "url('/images/projects/shakti-ek-adhaar-3.jpg')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                </div>
              </TiltCard>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* About & Honoring */}
      <div className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.4} />
        <div className="relative z-10">
          <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">The Movement</span>
            <h2 className="text-primary text-4xl lg:text-5xl font-display font-bold leading-tight mb-6 tracking-tight">
              An Ode to Grassroots Resilience
            </h2>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed font-serif italic">
              "When a woman is empowered, she doesn't just uplift herself — she transforms her household, her village, and generations to come."
            </p>
          </AnimeReveal>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Award,
                title: "Nari Shakti Honors",
                desc: "Felicitating self-taught micro-entrepreneurs, dedicated teachers, frontline health workers, and social reformers from rural Mathura.",
                img: "/images/projects/shakti-ek-adhaar-3.jpg",
                tag: "Felicitation",
              },
              {
                icon: Theater,
                title: "Braj Cultural Showcases",
                desc: "Vibrant traditional Raas, folk theatre, and devotional music performances honoring the maternal and divine feminine heritage of Braj.",
                img: "/images/projects/shakti-ek-adhaar-1.jpg",
                tag: "Culture & Arts",
              },
              {
                icon: Users,
                title: "Leadership Summits",
                desc: "Interactive panel discussions on women's property rights, digital financial inclusion, and peer-to-peer mentoring networks.",
                img: "/images/projects/shakti-ek-adhaar-2.jpg",
                tag: "Dialogues",
              },
            ].map((item, i) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={i * 120}>
                <TiltCard maxTilt={8} className="h-full">
                  <div className="clay-card p-6 flex flex-col justify-between h-full group hover:border-accent/30 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="glass text-[10px] font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full border border-accent/20">
                          {item.tag}
                        </span>
                        <item.icon className="text-accent" size={18} />
                      </div>
                      <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden mb-5 shadow-sm">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-bold text-accent uppercase tracking-wider">
                      <span>Annual Feature</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShaktiEkAdhaarPage;
