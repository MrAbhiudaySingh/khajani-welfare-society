import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Monitor, Globe, Smartphone, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

const DigiShalaPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden pt-20 pb-24 text-center">
        <AuroraBackground variant="dark" intensity={1.3} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/digi-shala.jpg"
            alt="Digital literacy class"
            className="w-full h-full object-cover opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-8 mt-8">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 glass-dark text-secondary text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-secondary/25 mb-6">
              <Sparkles size={12} /> Digital Empowerment Movement
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[1.05] mb-6">
              Bridging the <br /><span className="text-secondary italic font-serif">Digital Divide</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Digi-Shala brings essential computer literacy, smartphone banking, and cyber safety directly to women across the rural Brij landscape.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
                Sponsor a Digital Lab <ArrowRight size={16} />
              </Link>
              <a href="#skills" className="btn-3d-outline px-8 py-4 text-sm uppercase tracking-widest">
                Our Curriculum
              </a>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <AnimeReveal variant="fade-right" className="md:col-span-5">
            <TiltCard maxTilt={10}>
              <div
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative"
                style={{ boxShadow: "0 16px 0 hsl(var(--border)), 0 24px 48px rgba(27,46,107,0.15)" }}
              >
                <img
                  alt="Women learning digital skills"
                  className="w-full h-full object-cover"
                  src="/images/projects/digi-shala.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl text-white">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Digi-Pathshala</span>
                  <span className="text-sm font-display italic">From first mouse click to online governance</span>
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={150} className="md:col-span-7 flex flex-col justify-center">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Grassroots Technology</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
              Empowering Through <span className="text-accent italic font-serif">Digital Autonomy</span>
            </h2>
            <div className="h-1 w-20 bg-secondary mb-8 rounded-full" />
            <p className="drop-cap text-lg text-muted-foreground leading-relaxed mb-6 font-serif">
              In today's digital economy, access to online tools is a non-negotiable gateway to financial independence, government entitlements, and children's academic success.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Through Digi-Shala mobile labs and village kiosks, Khajani demystifies digital banking, UPI payments, online ration/scheme registration, and cybersecurity for women who previously had no screen access.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* Impact Metric */}
      <section className="w-full bg-primary text-primary-foreground py-24 px-4 text-center relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.3} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <div className="clay-card-gold inline-flex items-center gap-2 px-6 py-2 mb-6">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Verified Milestone</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-display font-bold text-secondary mb-4 tracking-tight">10,000+</h2>
          <p className="text-2xl md:text-3xl font-display font-medium text-white mb-2">Rural Women Digitally Certified</p>
          <p className="text-primary-foreground/75 text-base max-w-xl font-light">Navigating digital banking, public portals, and education independently.</p>
        </AnimeReveal>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 bg-card border-b border-border">
        <AnimeReveal variant="fade-up">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Curriculum</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Core Skills Taught</h2>
            <p className="text-muted-foreground text-base">Practical, life-transforming modules tailored for first-time learners.</p>
          </div>
        </AnimeReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Monitor, title: "Computer Basics", desc: "Keyboard, mouse operations, typing in Hindi and English, and basic file management." },
            { icon: Globe, title: "Internet & Governance", desc: "Accessing Aadhaar, government DBT schemes, DigiLocker, and essential e-governance services." },
            { icon: Smartphone, title: "UPI & Digital Payments", desc: "Safe merchant transactions, mobile recharges, utility bill payments, and checking bank balances." },
            { icon: ShieldCheck, title: "Cyber Safety & Scams", desc: "Recognizing OTP fraud, lottery scams, safeguarding privacy, and secure password management." },
          ].map((item, i) => (
            <AnimeReveal key={item.title} variant="fade-up" delay={i * 90}>
              <TiltCard className="h-full">
                <div className="clay-card p-8 flex flex-col h-full group hover:border-accent/40 border border-transparent transition-all">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                    <item.icon size={26} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              </TiltCard>
            </AnimeReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center bg-background relative overflow-hidden">
        <AuroraBackground variant="light" intensity={1.1} />
        <AnimeReveal variant="fade-up" className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Equip a Village with Digi-Shala</h2>
          <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
            Your support provides refurbished laptops, internet hotspots, and trained volunteer instructors to remote hamlet centers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="btn-3d-accent px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Donate to Digi-Shala <ArrowRight size={16} />
            </Link>
            <Link to="/volunteer" className="btn-3d-outline px-10 py-4 text-sm uppercase tracking-widest">
              Teach as Volunteer
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default DigiShalaPage;
