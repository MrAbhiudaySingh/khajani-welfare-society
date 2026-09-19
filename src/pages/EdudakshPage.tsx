import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Search, GraduationCap, TrendingUp, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

const EdudakshPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full min-h-[75vh] flex items-center justify-center bg-primary overflow-hidden pt-20 pb-24 text-center">
        <AuroraBackground variant="dark" intensity={1.3} />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/projects/edudaksh-classroom.jpg"
            alt="EduDaksh classroom session"
            className="w-full h-full object-cover opacity-25 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/50" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto mt-8">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 glass-dark text-secondary text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border border-secondary/25 mb-6">
              <Sparkles size={12} /> Project EduDaksh
            </span>
            <h1 className="text-primary-foreground font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6">
              Tailored Learning for <br />
              <span className="text-secondary italic font-serif">Tomorrow's Leaders</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Launched in 2023, EduDaksh tackles foundational learning disparities for government school girls aged 10–14 in rural Mathura.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
                Sponsor a Class <ArrowRight size={16} />
              </Link>
              <a href="#curriculum" className="btn-3d-outline px-8 py-4 text-sm uppercase tracking-widest">
                Our Methodology
              </a>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto w-full bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <AnimeReveal variant="fade-right" className="md:col-span-5">
            <TiltCard maxTilt={10}>
              <div
                className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative"
                style={{ boxShadow: "0 16px 0 hsl(var(--border)), 0 24px 48px rgba(27,46,107,0.15)" }}
              >
                <img
                  alt="EduDaksh remedial learning in action"
                  className="w-full h-full object-cover"
                  src="/images/projects/edudaksh-training.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl text-white">
                  <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Foundational Literacy</span>
                  <span className="text-sm font-display italic">Targeted diagnostics closing the learning gap</span>
                </div>
              </div>
            </TiltCard>
          </AnimeReveal>

          <AnimeReveal variant="fade-left" delay={150} className="md:col-span-7 flex flex-col justify-center">
            <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Diagnostic Remediation</span>
            <h2 className="text-primary font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Closing the Learning Gap Before It Widens
            </h2>
            <div className="h-1 w-20 bg-secondary mb-8 rounded-full" />
            <p className="text-xl leading-snug font-serif italic text-primary border-l-4 border-accent pl-6 py-2 mb-6">
              "When a young girl masters basic arithmetic and reading comprehension, her entire academic trajectory changes forever."
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6 font-serif">
              Many bright girls in government schools fall behind not because of lack of intellect, but because curriculum pace leaves foundational doubts unresolved. EduDaksh steps in with diagnostic-driven tutoring to bring every student to grade-level proficiency.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* What EDUDAKSH Offers */}
      <section id="curriculum" className="py-24 px-4 sm:px-8 bg-card border-y border-border relative">
        <div className="max-w-7xl mx-auto">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Methodology</span>
              <h2 className="text-primary font-display text-4xl md:text-5xl font-bold mb-4">What EduDaksh Delivers</h2>
              <p className="text-muted-foreground text-base">A scientific, compassionate framework focused on tangible grade progression.</p>
            </div>
          </AnimeReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Search, title: "Individual Diagnostic Assessments", desc: "We evaluate baseline reading, writing, and arithmetic skills through non-threatening, child-friendly diagnostic tools." },
              { icon: GraduationCap, title: "Targeted Remedial Cohorts", desc: "Small peer cohorts grouped by competency rather than age, ensuring focused attention on core bottlenecks." },
              { icon: TrendingUp, title: "Continuous Formative Monitoring", desc: "Bi-weekly milestone checks celebrate small victories and calibrate teacher interventions in real-time." },
            ].map((item, i) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={i * 100}>
                <TiltCard className="h-full">
                  <div className="clay-card p-8 flex flex-col h-full group hover:border-accent/40 border border-transparent transition-all">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                      <item.icon size={26} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </TiltCard>
              </AnimeReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metric */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4 relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.3} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto relative z-10">
          <div className="clay-card-gold inline-flex items-center gap-2 px-6 py-2 mb-6">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Verified Result</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-display font-bold text-secondary mb-4 tracking-tight">85%</h2>
          <p className="text-2xl md:text-3xl font-display font-medium text-white mb-2">Grade-Level Mastery Attainment</p>
          <p className="text-primary-foreground/75 text-base max-w-xl mx-auto font-light">
            Within 6 months of diagnostic intervention, students demonstrate significant leap in standard curriculum evaluations.
          </p>
        </AnimeReveal>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center bg-background relative overflow-hidden">
        <AuroraBackground variant="light" intensity={1.1} />
        <AnimeReveal variant="fade-up" className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Help a Girl Reach Her Grade Potential</h2>
          <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
            Sponsoring an EduDaksh student covers specialized remedial workbooks, trained tutors, and diagnostic evaluation kits for an entire academic cycle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="btn-3d-accent px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Sponsor an EduDaksh Student <ArrowRight size={16} />
            </Link>
            <Link to="/projects" className="btn-3d-outline px-10 py-4 text-sm uppercase tracking-widest">
              Back to Programs
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default EdudakshPage;
