import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import { ArrowRight } from "lucide-react";

/* ─── Chapter section wrapper with alternating layout ─── */
function Chapter({
  num, title, subtitle, desc, children, reverse = false, quote, pills,
}: {
  num: string; title: string; subtitle?: string; desc: string | React.ReactNode;
  children: React.ReactNode; reverse?: boolean; quote?: string; pills?: string[];
}) {
  return (
    <section className="group">
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-24 items-center`}>
        {/* Text */}
        <AnimeReveal variant={reverse ? "fade-left" : "fade-right"} className="lg:w-5/12 pt-8">
          <span className="glass text-accent text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-accent/20 inline-block mb-6">
            Chapter {num}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-tight">{title}</h2>
          {subtitle && <h3 className="text-xl font-display italic text-muted-foreground mb-6">{subtitle}</h3>}
          {quote && (
            <div className="border-l-4 border-accent pl-6 py-2 mb-6">
              <p className="font-display text-xl italic text-muted-foreground">{quote}</p>
            </div>
          )}
          <div className="text-muted-foreground font-serif leading-relaxed text-lg">{desc}</div>
          {pills && (
            <div className="flex flex-wrap gap-2 mt-6">
              {pills.map((p) => (
                <span key={p} className="glass text-muted-foreground text-xs font-bold px-3 py-1.5 rounded-full border border-border">{p}</span>
              ))}
            </div>
          )}
        </AnimeReveal>
        {/* Media */}
        <AnimeReveal variant={reverse ? "fade-right" : "fade-left"} delay={200} className="lg:w-7/12 relative w-full">
          <TiltCard maxTilt={8}>
            {children}
          </TiltCard>
        </AnimeReveal>
      </div>
    </section>
  );
}

const CampaignsPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative pt-20 pb-24 overflow-hidden bg-card">
        <AuroraBackground variant="light" intensity={0.7} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimeReveal variant="fade-left" className="max-w-4xl">
            <span className="glass text-accent font-bold tracking-[0.2em] text-xs uppercase mb-6 px-4 py-1.5 rounded-full border border-accent/20 inline-block">
              Social Movements Hub
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary leading-[0.9] mb-8 mt-4">
              Beyond the <br /><span className="text-accent italic">Ordinary Care</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center border-l-4 border-accent pl-6 mt-12">
              <p className="text-xl md:text-2xl text-muted-foreground font-display italic max-w-2xl leading-relaxed">
                "We are reshaping the narrative of rural welfare by integrating health, ecology, and heritage into a single, cohesive movement."
              </p>
            </div>
          </AnimeReveal>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block opacity-5 pointer-events-none">
          <span className="text-[400px] font-display font-bold text-primary leading-none -mr-20 -mt-20 block">K</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 space-y-32">

        {/* I: Shakti Ek Adhaar */}
        <Chapter
          num="I" title="Shakti Ek Adhaar:" subtitle="Foundations of Strength"
          desc={<>
            <p className="drop-cap mb-4">Celebrating the remarkable contributions of women across sectors. 'Shakti Ek Adhaar' is not just a campaign but a movement to honor the strength, resilience, and achievements of women who inspire change.</p>
            <p>We focus on maternal health, child nutrition, and skill development, recognizing that the health of a community is directly proportional to the strength of its smallest units.</p>
          </>}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500" style={{ boxShadow: "0 12px 0 hsl(var(--border)), 0 20px 48px rgba(0,0,0,0.12)" }}>
            <img alt="Shakti Ek Adhaar" className="w-full h-full object-cover transition duration-1000 transform group-hover:scale-105" src="/images/projects/shakti-ek-adhaar.jpg" />
            <div className="absolute bottom-0 left-0 right-0 glass p-5 rounded-b-2xl">
              <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-1">Latest Event</span>
              <span className="font-display text-lg font-bold text-primary">International Women's Day 2024</span>
            </div>
          </div>
        </Chapter>

        {/* II: Brij Seva */}
        <Chapter
          num="II" title="Brij-Seva:" subtitle="Reviving the Landscape"
          desc={<>
            <p className="mb-4">Dedicated to the welfare of the Braj region, 'Brij-Seva' focuses on holistic community development. From providing healthcare to the underprivileged to maintaining clean public spaces, this initiative is the heartbeat of our on-ground operations.</p>
            <div className="flex flex-col gap-3 border-l-2 border-accent pl-4 mt-4">
              {["Healthcare Camps", "Food Distribution", "Cleanliness Drives"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </>}
          quote='"Service to the destitute is service to the divine."'
          reverse
        >
          <div className="clay-card-navy p-8 mb-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent" />
            <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-center opacity-90 relative z-10 text-primary-foreground">
              "Service to the destitute is service to the divine."
            </p>
            <p className="text-center text-[10px] uppercase tracking-[0.3em] mt-6 text-primary-foreground/50">Khajani Core Values</p>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[4/3] w-full overflow-hidden rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700" style={{ boxShadow: "0 10px 0 hsl(var(--border))" }}>
            <img alt="Brij-Seva" className="w-full h-full object-cover object-center" src="/images/projects/brij-seva-icon.jpg" />
          </div>
        </Chapter>

        {/* III: Brij Women Business Directory */}
        <section className="group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <AnimeReveal variant="fade-right" className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] relative overflow-hidden mt-12 rounded-2xl overflow-hidden" style={{ boxShadow: "0 8px 0 hsl(var(--border))" }}>
                  <img alt="Women Entrepreneurs" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition duration-500" src="/images/projects/shg-federation.jpg" />
                </div>
                <div className="aspect-[3/4] glass rounded-2xl border border-accent/20 flex items-center justify-center p-8 text-center">
                  <div>
                    <span className="text-sm font-bold uppercase tracking-widest text-accent mb-2 block">Coming Soon</span>
                    <span className="text-xs text-muted-foreground">Under Development</span>
                  </div>
                </div>
              </div>
            </AnimeReveal>
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5 lg:pl-12 order-1 lg:order-2">
              <span className="glass text-accent text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-accent/20 inline-block mb-6">Chapter III</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 mt-2">Brij Women<br />Business Directory</h2>
              <p className="text-muted-foreground text-lg font-serif leading-relaxed mb-6">
                Khajani Welfare Society is developing a digital directory of women entrepreneurs across the Braj region to promote women-owned businesses and connect artisans with wider markets.
              </p>
              <div className="space-y-3 mb-6">
                {["Promote women-owned businesses", "Connect artisans with wider markets", "Support entrepreneurship among women"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <span className="glass text-accent text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-accent/20 inline-block">
                Currently Under Development
              </span>
            </AnimeReveal>
          </div>
        </section>

        {/* IV: Jal Seva */}
        <Chapter
          num="IV" title="Jal Seva Campaign:" subtitle="Quenching Brij Heat"
          desc={<>
            <p className="drop-cap mb-4">As the summer sun scorches the plains, our Jal Seva initiative stands as an oasis. Running from the auspicious Akshay Tritiya to Nirjala Ekadashi, this campaign ensures no traveler or resident goes thirsty.</p>
            <p>We set up water kiosks at strategic pilgrim paths and crowded intersections, providing clean drinking water, buttermilk, and sharbat to thousands daily during the peak summer months.</p>
          </>}
          reverse
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl" style={{ boxShadow: "0 10px 0 hsl(var(--border))" }}>
            <img alt="Jal Seva Campaign" className="w-full h-full object-cover transition duration-1000 transform group-hover:scale-105" src="/images/projects/brij-seva-jal.jpg" />
            <div className="absolute top-6 right-6 clay-card px-5 py-3 text-center">
              <span className="block font-display text-2xl font-bold text-primary">50+</span>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Kiosks Active</span>
            </div>
          </div>
        </Chapter>

        {/* V: Daan Utsav */}
        <Chapter
          num="V" title="Daan Utsav:" subtitle="The Festival of Giving"
          desc={<>
            <p className="mb-4">Marking the harvest festival of Makar Sankranti, Daan Utsav embodies the spirit of selfless contribution. It is a time when the community comes together to ensure warmth and sustenance for the less fortunate.</p>
            <ul className="space-y-3 mt-4">
              {["Distribution of heavy woolens and blankets.", "Community feasts serving traditional khichdi."].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </>}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg" style={{ boxShadow: "0 10px 0 hsl(var(--border))" }}>
            <img alt="Daan Utsav - Festival of Giving" className="w-full h-full object-cover sepia-[20%] group-hover:sepia-0 transition duration-700" src="/images/projects/daan-utsav.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="glass text-primary-foreground font-display italic text-xl p-4 rounded-xl">
                "Warmth is not just in the clothes we give, but in the hands that give them."
              </p>
            </div>
          </div>
        </Chapter>

        {/* VI: Plantation Drive */}
        <Chapter
          num="VI" title="Plantation Drive:" subtitle="Rooting for Green"
          desc="Twice a year, we mobilize volunteers to plant 51 trees per drive, focusing on native species that support local biodiversity. This initiative is our pledge to future generations for a cleaner, greener environment."
          quote="Restoring the verdant glory of Braj, one sapling at a time."
          reverse
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-tr-[40px] rounded-bl-xl">
              <img alt="Plantation Drive 1" className="w-full h-full object-cover hover:scale-110 transition duration-700" src="/images/projects/plantation-drive.jpg" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-tl-xl rounded-br-[40px] mt-12">
              <img alt="Plantation Drive 2" className="w-full h-full object-cover hover:scale-110 transition duration-700" src="/images/projects/plantation-drive.jpg" />
            </div>
          </div>
        </Chapter>

        {/* VII: Raktdan Shivir */}
        <Chapter
          num="VII" title="Raktdan Shivir:" subtitle="Culture of Solidarity"
          desc={<>
            <p className="drop-cap mb-4">Blood connects us all. Our periodic blood donation camps are a testament to community solidarity, where strangers become lifesavers.</p>
            <p>With professional medical partners, we ensure safe and hygienic collection. Each session typically collects 30+ units, directly supporting local blood banks and emergency trauma centers.</p>
          </>}
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border-4 border-card shadow-xl" style={{ boxShadow: "0 10px 0 hsl(var(--border))" }}>
            <img alt="Blood Donation Camp at Khajani Welfare Society" className="w-full h-full object-cover" src="/images/projects/blood-donation-camp.jpg" />
          </div>
        </Chapter>

        {/* VIII: Mask Distribution */}
        <Chapter
          num="VIII" title="Mask Distribution:" subtitle="Guardian of Frontlines"
          desc="When the pandemic struck, Khajani stood firm. Our rapid response team facilitated the distribution of essential protective gear to frontline workers, police personnel, and vulnerable communities, acting as a shield against the crisis."
          reverse
        >
          <div className="clay-card p-8 mb-6">
            <h3 className="font-display text-2xl font-bold mb-6 text-primary">Impact Numbers</h3>
            <div className="grid grid-cols-2 gap-6">
              {[{ num: "5L+", label: "Masks Distributed" }, { num: "500", label: "PPE Kits" }].map((s) => (
                <div key={s.label} className="glass rounded-xl p-5 text-center">
                  <span className="block text-3xl font-bold text-primary font-display">{s.num}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl" style={{ boxShadow: "0 8px 0 hsl(var(--border))" }}>
            <img alt="Covid Relief" className="w-full h-full object-cover filter sepia contrast-110 hover:contrast-100 transition duration-700" src="/images/projects/brij-anshuman-icon.jpg" />
          </div>
        </Chapter>

        {/* IX: Menstrual Hygiene */}
        <section className="group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <AnimeReveal variant="fade-right" className="lg:col-span-7 relative">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-2xl" style={{ boxShadow: "0 10px 0 hsl(var(--border))" }}>
                <img alt="Menstrual Hygiene Session" className="w-full h-full object-cover hover:scale-105 transition duration-1000" src="/images/projects/sanitary-napkin.jpg" />
                <span className="absolute top-4 left-4 glass text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-accent/20">Education</span>
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 clay-card-gold rounded-full flex items-center justify-center shadow-lg hidden lg:flex z-10">
                <span className="text-center font-display font-bold text-primary leading-tight text-sm">Break<br />The<br />Stigma</span>
              </div>
            </AnimeReveal>
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-5 lg:pl-12">
              <span className="glass text-accent text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border border-accent/20 inline-block mb-6">Chapter IX</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 leading-none mt-2">Breaking the Silence</h2>
              <h3 className="text-xl font-display italic text-muted-foreground mb-6">Menstrual Hygiene Awareness</h3>
              <p className="text-muted-foreground text-lg font-serif leading-relaxed">
                We are dismantling age-old taboos through education. Conducting health sessions in schools and colleges, we empower young women with knowledge about menstrual health, hygiene management, and the confidence to speak up.
              </p>
            </AnimeReveal>
          </div>
        </section>
      </main>

      {/* CTA */}
      <section className="bg-primary relative overflow-hidden py-24 lg:py-32">
        <AuroraBackground variant="dark" intensity={0.9} />
        <AnimeReveal variant="fade-up" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 glass-dark rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-secondary border border-white/10 shadow-sm">
            Together We Create Opportunities
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Be part of <br />
            <span className="font-handwriting text-5xl sm:text-6xl md:text-7xl text-secondary font-normal italic tracking-normal -rotate-2 inline-block px-1">
              a brighter
            </span>{" "}
            tomorrow.
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
            Communities grow stronger when people come together. There are many ways you can support Khajani’s work and help create lasting change in Mathura and Braj.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/donate" className="btn-3d-accent inline-flex items-center justify-center px-10 py-4 text-xs font-bold uppercase tracking-widest shadow-xl">
              Donate Now <ArrowRight size={14} className="ml-1" />
            </Link>
            <Link to="/volunteer" className="btn-3d-outline inline-flex items-center justify-center px-9 py-4 text-xs font-bold uppercase tracking-widest">
              Join Us as Volunteer
            </Link>
          </div>
          <div className="mt-12 pt-6 border-t border-white/10">
            <p className="text-[11px] font-mono tracking-widest text-primary-foreground/50 uppercase">
              PEOPLE · HERITAGE · OPPORTUNITY · A BRIGHTER TOMORROW
            </p>
          </div>
        </AnimeReveal>
      </section>
    </Layout>
  );
};

export default CampaignsPage;
