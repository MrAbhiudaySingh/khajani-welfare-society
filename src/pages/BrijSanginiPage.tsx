import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Stethoscope, Droplets, Sparkles, HeartPulse, Activity, ArrowRight, ShieldCheck } from "lucide-react";

const BrijSanginiPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary w-full min-h-[70vh] flex items-center py-20 px-6 text-primary-foreground relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.75} />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10 w-full">
          <AnimeReveal variant="fade-right" className="w-full lg:w-1/2 flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase text-xs glass-dark px-4 py-1.5 rounded-full border border-accent/20 w-fit">
              <Sparkles size={10} /> Community Health & Wellness
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight">
              Healthier Women, <br />
              <span className="text-secondary italic">Stronger Villages</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Project Brij-Sangini delivers preventive healthcare, specialized maternal screenings, anemia eradication, and voluntary blood donation camps directly to rural doorsteps.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Support Medical Camps
              </Link>
              <Link to="/volunteer" className="btn-3d-outline px-8 py-3.5 text-xs font-bold uppercase tracking-widest">
                Volunteer as Medic
              </Link>
            </div>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={200} className="w-full lg:w-1/2">
            <TiltCard maxTilt={8}>
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/images/projects/brij-sangini-icon.jpg"
                  alt="Brij Sangini Healthcare Camp"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Free Medical Checkup Hub</span>
                  <p className="text-white text-xs font-serif italic mt-0.5">Empowering rural women with diagnostic screening and free medicines</p>
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>
        </div>
      </section>

      {/* Impact Stat */}
      <section className="w-full bg-card border-y border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
          <AnimeReveal variant="fade-up">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass px-8 py-4 rounded-2xl border border-border">
              <HeartPulse className="text-accent" size={36} />
              <div className="text-left sm:text-left">
                <h2 className="text-primary text-3xl md:text-4xl font-display font-bold">
                  5,000+ Women & Adolescents Screened
                </h2>
                <p className="text-muted-foreground text-xs font-serif italic">Across 150+ villages in Mathura and Agra districts</p>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Key Programs */}
      <section className="max-w-7xl mx-auto w-full px-6 py-24 flex flex-col gap-12 relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.35} />
        <AnimeReveal variant="fade-up" className="relative z-10 max-w-2xl">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Core Medical Wings</span>
          <h2 className="text-primary text-3xl md:text-5xl font-display font-bold leading-tight tracking-tight">
            Key Health Initiatives
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mt-3">
            Removing distance and economic barriers by deploying trained medical staff and diagnostics directly to underserved villages.
          </p>
        </AnimeReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {[
            {
              icon: Stethoscope,
              title: "Comprehensive Village Health Camps",
              desc: "Periodic multi-specialty camps featuring gynecologists, pediatricians, and general physicians. Includes free hemoglobin testing, diabetes checks, and distribution of iron-folic acid supplements.",
              tags: ["Anemia Screening", "Maternal Care", "Free Pharmacy", "Preventive Vitals"],
            },
            {
              icon: Droplets,
              title: "Voluntary Community Blood Drives",
              desc: "Organized in collaboration with district hospitals and accredited blood banks to mitigate shortages for emergency obstetric care and thalassemic patients across the Braj pilgrimage corridor.",
              tags: ["Safe Phlebotomy", "Donor Cards", "District Hospital Tie-up", "Emergency Pool"],
            },
          ].map((program, i) => (
            <AnimeReveal key={program.title} variant="fade-up" delay={i * 120}>
              <TiltCard maxTilt={8} className="h-full">
                <div className="clay-card p-8 flex flex-col justify-between h-full group hover:border-accent/30 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 glass rounded-2xl text-accent flex items-center justify-center">
                        <program.icon size={28} />
                      </div>
                      <ArrowRight className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" size={20} />
                    </div>
                    <h3 className="text-primary text-2xl font-display font-bold leading-tight mb-4 group-hover:text-accent transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{program.desc}</p>
                  </div>
                  <div className="pt-6 border-t border-border flex gap-2 flex-wrap">
                    {program.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 glass text-accent text-xs font-semibold rounded-full border border-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BrijSanginiPage;
