import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { BookOpen, Globe, Monitor, Brain, Lightbulb, Library, Shield, Sparkles, ArrowRight } from "lucide-react";

const KLAPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-primary overflow-hidden pt-20 pb-24">
        <AuroraBackground variant="dark" intensity={1.2} />
        <div className="absolute inset-0 z-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-25 mix-blend-screen"
            style={{ backgroundImage: "url('/images/projects/kla-classroom-2.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8 text-center mt-10">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6 glass-dark px-4 py-1.5 rounded-full border border-secondary/20">
              <Sparkles size={12} /> Khajani Learning Academy
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[1.05] mb-8">
              Every Girl Deserves<br />
              <span className="text-secondary italic font-serif">an Equal Chance</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              Khajani Learning Academy (KLA) is dedicated to bridging the educational gap for girls from marginalized communities, providing remedial education, digital skills, and a safe space to flourish.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/donate" className="btn-3d-accent px-8 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
                Sponsor a Girl <ArrowRight size={16} />
              </Link>
              <a href="#offers" className="btn-3d-outline px-8 py-4 text-sm uppercase tracking-widest">
                Explore Curriculum
              </a>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-4 sm:px-8 bg-background relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <AnimeReveal variant="fade-right" className="md:col-span-5 md:col-start-2 relative">
              <TiltCard maxTilt={10}>
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[3/4]"
                  style={{ boxShadow: "0 16px 0 hsl(var(--border)), 0 24px 48px rgba(27,46,107,0.15)" }}
                >
                  <img
                    alt="Students in a focused learning environment"
                    className="w-full h-full object-cover"
                    src="/images/projects/kla-classroom-1.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl text-white">
                    <span className="text-secondary text-xs font-bold uppercase tracking-wider block">Empowerment in Action</span>
                    <span className="text-sm font-display italic">Classes 6 to 10 remedial academic support</span>
                  </div>
                </div>
              </TiltCard>
            </AnimeReveal>

            <AnimeReveal variant="fade-left" delay={150} className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-3">Academic Excellence</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6 leading-tight">
                Empowering Through<br />Targeted Support
              </h2>
              <div className="h-1 w-20 bg-secondary mb-8 rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-serif drop-cap">
                For many girls in underserved areas of the Brij region, enrolling in school is only the first step. Staying in school and achieving meaningful educational outcomes requires continuous, targeted support that addresses the specific hurdles they face.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                KLA was established to provide a safe, nurturing, and academically rigorous after-school environment where girls receive remedial tutoring, life skills, and confidence-building activities necessary to thrive.
              </p>
              <div className="clay-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary text-lg">Our Core Mission</h3>
                  <p className="text-muted-foreground text-xs mt-0.5">To ensure no girl's potential is lost due to lack of academic support.</p>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* What KLA Offers */}
      <section id="offers" className="py-24 px-4 sm:px-8 bg-card border-y border-border relative">
        <div className="max-w-7xl mx-auto">
          <AnimeReveal variant="fade-up">
            <div className="text-center mb-16">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Pedagogy</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">What KLA Offers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">A comprehensive approach to holistic education and personal development.</p>
            </div>
          </AnimeReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: "Remedial Support", desc: "Personalized tutoring in core subjects to help students bridge learning gaps and catch up to their grade levels." },
              { icon: Globe, title: "English Classes", desc: "Dedicated language labs and conversational practice to build fluency and confidence in English communication." },
              { icon: Monitor, title: "Digital Literacy", desc: "Hands-on training in computer basics, internet research, and essential software to prepare for the modern workforce." },
              { icon: Brain, title: "Life Skills", desc: "Workshops focusing on critical thinking, problem-solving, financial literacy, and personal health and hygiene." },
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
        </div>
      </section>

      {/* Impact Callout */}
      <section className="py-24 bg-primary text-primary-foreground text-center px-4 sm:px-8 relative overflow-hidden">
        <AuroraBackground variant="dark" intensity={1.3} />
        <AnimeReveal variant="fade-up" className="relative z-10 mx-auto max-w-4xl">
          <div className="clay-card-gold inline-flex items-center gap-2 px-6 py-2 mb-8">
            <Sparkles size={16} className="text-secondary" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Verified Milestone</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-display font-bold mb-4 text-secondary tracking-tight">100+</h2>
          <p className="text-2xl md:text-4xl font-display font-medium text-primary-foreground mb-4">Schoolgirls Actively Supported</p>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
            Every single day, we provide a safe sanctuary for learning, academic growth, and self-confidence.
          </p>
        </AnimeReveal>
      </section>

      {/* Infrastructure */}
      <section className="py-24 px-4 sm:px-8 bg-background relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimeReveal variant="fade-right" className="order-2 lg:order-1">
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Campus</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                Modern Infrastructure &amp;<br />Nurturing Environment
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Lightbulb, title: "Smart Classrooms", desc: "Well-lit, ventilated classrooms equipped with multimedia visual aids and ergonomic seating." },
                  { icon: Library, title: "Resource Library", desc: "A curated collection of curriculum books, reference manuals, and digital tablets." },
                  { icon: Shield, title: "Safe Campus", desc: "Secure premises with chaperoned pickup points ensuring worry-free commute for families." },
                ].map((item) => (
                  <div key={item.title} className="clay-card p-6 flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <item.icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-primary mb-1.5">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimeReveal>
            <AnimeReveal variant="fade-left" delay={200} className="order-1 lg:order-2 grid grid-cols-2 gap-6">
              <TiltCard className="translate-y-6">
                <img
                  alt="Students studying in classroom"
                  className="rounded-3xl w-full h-72 object-cover shadow-xl"
                  style={{ boxShadow: "0 12px 0 hsl(var(--border)), 0 20px 40px rgba(0,0,0,0.12)" }}
                  src="/images/projects/kla-classroom-1.jpg"
                />
              </TiltCard>
              <TiltCard className="-translate-y-6">
                <img
                  alt="Girls in school uniform learning"
                  className="rounded-3xl w-full h-72 object-cover shadow-xl"
                  style={{ boxShadow: "0 12px 0 hsl(var(--border)), 0 20px 40px rgba(0,0,0,0.12)" }}
                  src="/images/projects/kla-classroom-2.jpg"
                />
              </TiltCard>
            </AnimeReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-card border-t border-border text-center relative overflow-hidden">
        <AuroraBackground variant="light" intensity={1.1} />
        <AnimeReveal variant="fade-up" className="max-w-3xl mx-auto relative z-10">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Get Involved</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Support Their Journey</h2>
          <p className="text-lg text-muted-foreground mb-10 font-light leading-relaxed">
            Your contribution directly funds remedial classes, learning kits, and certified teachers for the girls at KLA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/donate" className="btn-3d-accent px-10 py-4 text-sm uppercase tracking-widest inline-flex items-center gap-2">
              Make a Donation <ArrowRight size={16} />
            </Link>
            <Link to="/get-involved" className="btn-3d-outline px-10 py-4 text-sm uppercase tracking-widest">
              Institutional Partnership
            </Link>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default KLAPage;
