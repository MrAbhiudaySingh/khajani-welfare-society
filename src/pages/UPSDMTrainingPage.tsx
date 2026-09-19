import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { Award, Check, Sparkles, ArrowRight, Clock, BookOpen, GraduationCap } from "lucide-react";

const programs = [
  {
    tag: "Tailoring Program",
    hours: "300 Hours",
    title: "Self Employed Tailor",
    desc: "A comprehensive curriculum focusing on garment construction, pattern making, and entrepreneurial skills essential for setting up an independent tailoring business.",
    skills: ["Advanced Stitching Techniques", "Business Management & Marketing", "Quality Control Standards"],
    image: "/images/projects/upsdm-tailor.jpg",
  },
  {
    tag: "Wellness Program",
    hours: "250 Hours",
    title: "Assistant Beauty Therapist",
    desc: "Expert training covering skincare, makeup artistry, and salon management, preparing candidates for professional roles in the growing wellness industry.",
    skills: ["Skincare Fundamentals", "Professional Makeup Application", "Client Consultation Ethics"],
    image: "/images/projects/upsdm-beauty.jpg",
  },
];

const UPSDMTrainingPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-primary overflow-hidden">
        <AuroraBackground variant="dark" intensity={0.75} />
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            alt="A modern training classroom with students"
            className="w-full h-full object-cover object-center"
            src="/images/projects/upsdm-class.jpg"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/85 to-primary" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
          <AnimeReveal variant="fade-up">
            <span className="inline-flex items-center gap-2 text-accent font-bold tracking-[0.2em] uppercase text-xs mb-6 px-4 py-1.5 glass-dark rounded-full border border-accent/20">
              <Sparkles size={10} /> UPSDM Certified Training
            </span>
            <h1 className="text-primary-foreground text-4xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
              Government-Backed Skills for <br />
              <span className="text-secondary italic">Real Employment</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Empowering communities through rigorous UPSDM certified training programs designed for immediate industry readiness.
            </p>
          </AnimeReveal>
        </div>
      </section>

      {/* Award Bar */}
      <section className="w-full bg-accent/10 border-y border-accent/20 py-8 px-6 backdrop-blur-md">
        <AnimeReveal variant="fade-up">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-accent shrink-0 shadow-lg">
              <Award size={32} />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-wider mb-1">
                <GraduationCap size={14} /> State Recognition
              </div>
              <h2 className="text-primary text-xl md:text-2xl font-display font-bold">
                Best UPSDM Skill Training Provider Award — 2025
              </h2>
              <p className="text-muted-foreground text-sm max-w-2xl mt-1 leading-relaxed">
                Recognized for outstanding contribution to skill development and employment generation under the Uttar Pradesh Skill Development Mission.
              </p>
            </div>
          </div>
        </AnimeReveal>
      </section>

      {/* Programs */}
      <section className="py-24 px-6 bg-background relative overflow-hidden">
        <AuroraBackground variant="light" intensity={0.4} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <AnimeReveal variant="fade-right" className="md:w-5/12 md:sticky md:top-32">
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">Curriculum Excellence</span>
              <h2 className="text-primary text-3xl md:text-5xl font-display font-bold leading-tight mb-6">
                Bridging the Gap Between Talent & Opportunity
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                Our partnership with the Uttar Pradesh Skill Development Mission (UPSDM) focuses on delivering high-quality, practical training in high-demand sectors with 100% placement assistance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="clay-card p-4 flex items-center gap-3">
                  <Clock className="text-accent shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Flexible Batches</h4>
                    <p className="text-xs text-muted-foreground">Morning and evening sessions tailored for working women</p>
                  </div>
                </div>
                <div className="clay-card p-4 flex items-center gap-3">
                  <BookOpen className="text-accent shrink-0" size={20} />
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider">Govt Certification</h4>
                    <p className="text-xs text-muted-foreground">Nationally recognized qualification cards upon graduation</p>
                  </div>
                </div>
              </div>
              <Link to="/volunteer" className="btn-3d-accent inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest">
                Enroll or Volunteer <ArrowRight size={14} />
              </Link>
            </AnimeReveal>

            <div className="md:w-7/12 flex flex-col gap-10">
              {programs.map((program, i) => (
                <AnimeReveal key={program.title} variant="fade-up" delay={i * 150}>
                  <TiltCard maxTilt={8}>
                    <article className="clay-card p-8 group transition-all duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <span className="glass text-xs font-bold tracking-widest uppercase text-accent px-3 py-1 rounded-full border border-accent/20">
                          {program.tag}
                        </span>
                        <span className="text-xs font-mono font-bold text-primary bg-accent/10 px-3 py-1 rounded-full border border-accent/20 flex items-center gap-1.5">
                          <Clock size={12} /> {program.hours}
                        </span>
                      </div>
                      <div className="aspect-[16/9] mb-8 overflow-hidden rounded-2xl shadow-md">
                        <img
                          alt={program.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                          src={program.image}
                        />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-display font-bold text-primary mb-3">{program.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{program.desc}</p>
                      <ul className="flex flex-col gap-3 pt-4 border-t border-border">
                        {program.skills.map((skill) => (
                          <li key={skill} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center text-accent shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-primary text-xs sm:text-sm font-medium">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </TiltCard>
                </AnimeReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UPSDMTrainingPage;
