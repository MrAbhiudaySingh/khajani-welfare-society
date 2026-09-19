import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import TiltCard from "@/components/TiltCard";
import {
  Sparkles,
  ArrowDown,
  ArrowRight,
  Award,
  Scissors,
  Flame,
  Leaf,
  HeartHandshake,
  Compass,
  Layers,
  Feather,
  CheckCircle2,
  Flower2,
  Brush,
  Palette,
} from "lucide-react";

const CulturePage = () => {
  useEffect(() => {
    document.title = "Culture & Heritage of Braj | Traditional Arts & Crafts | Khajani Welfare Society";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore how Khajani Welfare Society preserves the living cultural heritage of Mathura and Braj through Sanjhi art, Mathura Zari Poshak, cow-dung crafts, and temple flower recycling."
      );
    }
  }, []);

  const scrollToScene2 = () => {
    const el = document.getElementById("rooted-in-braj");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <div className="bg-background text-foreground min-h-screen">
        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 1 — HERO
            One exceptional real Khajani photo with rich dark navy overlay matching site
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-primary text-primary-foreground py-24 sm:py-28">
          <AuroraBackground variant="dark" intensity={0.8} />

          {/* Full-width photo with deep navy heritage overlay */}
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity pointer-events-none">
            <img
              src="/images/projects/poshak-zari.jpg"
              alt="Artisan hands embroidering Mathura Zari Poshak"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/60 pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Tag badge */}
            <AnimeReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary text-xs font-mono font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                <Sparkles size={13} className="text-secondary" />
                CULTURE &amp; HERITAGE · MATHURA &amp; BRAJ
              </div>
            </AnimeReveal>

            {/* Main Headline */}
            <AnimeReveal variant="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.12] mb-6">
                Where tradition remains a{" "}
                <span className="text-secondary italic font-serif font-normal">living practice</span>.
              </h1>
            </AnimeReveal>

            {/* Sub-lead */}
            <AnimeReveal variant="fade-up" delay={200}>
              <div className="space-y-4 text-base sm:text-lg lg:text-xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed font-light mb-10">
                <p>
                  In Braj, heritage lives not only in monuments and memory, but in the hands of people who continue to practise its arts, crafts and traditions.
                </p>
                <p className="text-primary-foreground/75 text-sm sm:text-base">
                  Khajani Welfare Society works with this living knowledge—supporting traditional skills, strengthening artisan capabilities and creating new possibilities for practices rooted in the cultural life of Mathura and Braj.
                </p>
              </div>
            </AnimeReveal>

            {/* Highlights pill */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-white/90 mb-10">
                {["Sanjhi", "Zari Poshak", "Panchgavya", "Temple Flower Traditions"].map((item, idx) => (
                  <span key={item} className="inline-flex items-center">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                      {item}
                    </span>
                    {idx < 3 && <span className="ml-2 sm:ml-3 text-secondary">·</span>}
                  </span>
                ))}
              </div>
            </AnimeReveal>

            {/* CTA */}
            <AnimeReveal variant="fade-up" delay={400}>
              <div>
                <button
                  type="button"
                  onClick={scrollToScene2}
                  className="btn-3d-accent inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xl transition-all duration-300 hover:gap-3 cursor-pointer shadow-xl"
                >
                  <span>Explore the Story</span>
                  <ArrowDown size={16} />
                </button>
              </div>
            </AnimeReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 2 — ROOTED IN BRAJ
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section id="rooted-in-braj" className="py-24 bg-background border-b border-border scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimeReveal variant="fade-up" className="max-w-3xl mb-16">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-accent block mb-2">
                ROOTED IN BRAJ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                A cultural landscape shaped by devotion, craft and everyday practice.
              </h2>
              <div className="mt-5 space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Mathura, Vrindavan and the wider Braj region carry a distinctive cultural identity shaped over generations. Here, devotional traditions are closely connected with the things people make—from attire created for deities and intricate traditional art to objects associated with worship and materials that move through temple and community life.
                </p>
                <p className="text-foreground/90 font-medium font-serif italic text-base">
                  For Khajani, preserving this heritage does not mean keeping tradition static. It means helping traditional knowledge remain practised, relevant and connected with the people who carry it forward.
                </p>
              </div>
            </AnimeReveal>

            {/* 4 Pillars: PLACE, PEOPLE, PRACTICE, CONTINUITY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  title: "PLACE",
                  desc: "Braj gives these traditions their cultural context.",
                  tint: "text-[#D0704B]",
                },
                {
                  title: "PEOPLE",
                  desc: "Artisans and communities carry their knowledge.",
                  tint: "text-[#3B82C4]",
                },
                {
                  title: "PRACTICE",
                  desc: "Skills survive when they continue to be used.",
                  tint: "text-[#4E9954]",
                },
                {
                  title: "CONTINUITY",
                  desc: "Learning and opportunity help traditions move forward.",
                  tint: "text-[#C48332]",
                },
              ].map((p, idx) => (
                <AnimeReveal key={p.title} variant="fade-up" delay={idx * 80}>
                  <div className="clay-card rounded-2xl p-6 sm:p-7 border border-border/80 hover:border-accent/40 shadow-xs hover:shadow-md transition-all group hover:-translate-y-1 h-full flex flex-col justify-between">
                    <div>
                      <div className={`text-xs font-mono font-bold tracking-[0.2em] uppercase ${p.tint} mb-3`}>
                        {p.title}
                      </div>
                      <p className="text-foreground/80 text-sm font-light leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </AnimeReveal>
              ))}
            </div>

            {/* Heritage proposal note */}
            <AnimeReveal variant="fade-up" delay={350}>
              <div className="p-6 rounded-2xl bg-[#FDF8F3] border border-[#F3E5D5] text-foreground/85 text-xs sm:text-sm leading-relaxed shadow-xs">
                <p>
                  The heritage proposal itself identifies traditional crafts, deity Poshak making, Sanjhi, flower-waste products and cow-dung-based products as areas where cultural preservation can connect with skills and livelihood opportunities.
                </p>
              </div>
            </AnimeReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 3 — LIVING HERITAGE
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-card border-b border-border relative overflow-hidden">
          <AuroraBackground variant="light" intensity={0.4} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <AnimeReveal variant="fade-right" className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-accent block">
                  LIVING HERITAGE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                  Heritage stays alive through practice.
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    A traditional skill carries more than a technique. It carries knowledge of materials, motifs, processes, cultural meaning and ways of making developed over generations.
                  </p>
                  <p>
                    Khajani's approach brings preservation and participation together—creating opportunities to learn traditional skills, practise them, strengthen craftsmanship and carry the knowledge forward.
                  </p>
                </div>

                {/* Accent callout */}
                <div className="border-l-4 border-accent pl-5 py-3.5 space-y-2 bg-[#FDF8F3] rounded-r-2xl border-y border-r border-[#F3E5D5]">
                  <p className="font-serif text-lg text-primary font-semibold">
                    And continuity does not always mean repetition.
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    Traditional practices can also evolve. Different strands of Braj's cultural knowledge can meet—traditional artistic languages can find expression through locally rooted materials, familiar techniques can take contemporary forms, and established skills can lead to new kinds of making without losing their cultural connection.
                  </p>
                </div>

                {/* Conceptual Evolution Chain */}
                <div className="pt-2">
                  <div className="text-[11px] uppercase tracking-widest text-accent font-mono font-bold mb-3">
                    The Heritage Pathway
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-foreground/80">
                    <span className="px-3 py-1.5 bg-muted/70 border border-border rounded-lg">Traditional Knowledge</span>
                    <span className="text-[#C48332]">→</span>
                    <span className="px-3 py-1.5 bg-muted/70 border border-border rounded-lg">Skill</span>
                    <span className="text-[#C48332]">→</span>
                    <span className="px-3 py-1.5 bg-muted/70 border border-border rounded-lg">Practice</span>
                    <span className="text-[#C48332]">→</span>
                    <span className="px-3 py-1.5 bg-muted/70 border border-border rounded-lg">Innovation</span>
                    <span className="text-[#C48332]">→</span>
                    <span className="px-3 py-1.5 bg-muted/70 border border-border rounded-lg">Opportunity</span>
                    <span className="text-[#C48332]">→</span>
                    <span className="px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent font-bold rounded-lg">Continuity</span>
                  </div>
                </div>
              </AnimeReveal>

              {/* Editorial process visual */}
              <AnimeReveal variant="fade-left" delay={200} className="lg:col-span-5">
                <TiltCard maxTilt={8}>
                  <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl group bg-background">
                    <img
                      src="/images/projects/pathway-heritage-artisan.jpg"
                      alt="Process of traditional craftsmanship at Khajani"
                      className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass text-xs text-primary shadow-sm border border-white/20">
                      <span className="font-mono font-bold text-accent uppercase tracking-wider block mb-0.5">
                        Process in Action
                      </span>
                      Every motif, stitch, and stencil is a dialogue between ancestral memory and living hands.
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 4 — ROYAL SANJHI ART
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Visuals: Close-ups, stencils, training */}
              <AnimeReveal variant="fade-right" className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
                  <img
                    src="/images/projects/royal-sanjhi-training.jpg"
                    alt="Sanjhi Art Training at Khajani"
                    className="w-full h-72 sm:h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-border">
                    <img
                      src="/images/projects/poshak-sanjhi.jpg"
                      alt="Intricate Sanjhi paper cutting motif"
                      className="w-full h-40 sm:h-48 object-cover object-center"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-[#F3E5D5] bg-[#FDF8F3] flex flex-col justify-center p-5 shadow-xs">
                    <span className="text-xs uppercase font-mono font-bold tracking-wider text-[#C48332] mb-1">
                      Material Cross-over
                    </span>
                    <p className="text-xs text-foreground/80 leading-relaxed font-light">
                      Sanjhi stencils adapted across handmade paper, cow-dung composites, and fabric embellishments.
                    </p>
                  </div>
                </div>
              </AnimeReveal>

              {/* Sanjhi narrative & numbers */}
              <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-accent block">
                  ROYAL SANJHI ART
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                  Intricate stories, shaped by hand.
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    Sanjhi is deeply associated with the cultural traditions of Braj. Its delicate practice brings together stencil work, intricate paper cutting, pattern creation, traditional motifs and visual storytelling.
                  </p>
                  <p>
                    Khajani's work with Sanjhi focuses on keeping this knowledge in active practice—introducing the art to new learners, strengthening artisan skills and exploring ways in which its distinctive visual language can continue to find relevance in contemporary creative work.
                  </p>
                </div>

                {/* Verified Metrics */}
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-primary">
                      250+
                    </div>
                    <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider mt-1">
                      Sanjhi Artists Trained
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-xs">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-primary">
                      120+
                    </div>
                    <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider mt-1">
                      Women Earning Through Art
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                  But Sanjhi at Khajani is not limited to one material or one application. Its distinctive patterns and artistic language are also being explored alongside other traditional materials and forms of making—allowing heritage and innovation to meet naturally.
                </p>

                <div>
                  <Link
                    to="/projects/royal-sanjhi"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent hover:text-primary transition-colors"
                  >
                    <span>Explore Royal Sanjhi Art Initiative</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimeReveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 5 — MATHURA ZARI POSHAK
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              <AnimeReveal variant="fade-right" className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-accent block">
                  MATHURA ZARI POSHAK
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                  Craftsmanship woven into Mathura's devotional tradition.
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    The making of Radha-Krishna Poshak is closely connected with the devotional and craft traditions of Mathura and Vrindavan.
                  </p>
                  <p>
                    From design and fabric preparation to cutting, sewing, zari work and embellishment, each stage draws upon specialised skills developed and refined by artisans.
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Khajani's documented work includes a 30-day programme involving 125 artisans in Vrindavan, strengthening skills in Poshak design, fabric preparation, cutting, sewing and embellishment while retaining traditional techniques and introducing contemporary production considerations.
                  </p>
                </div>

                {/* Training Stats */}
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-xs">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-primary">
                      125
                    </div>
                    <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider mt-1">
                      Artisans Trained
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-background border border-border/80 shadow-xs">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-primary">
                      30 Days
                    </div>
                    <div className="text-xs font-mono font-bold text-accent uppercase tracking-wider mt-1">
                      Structured Training
                    </div>
                  </div>
                </div>

                {/* Elegant GI Badge & Secondary Link */}
                <div className="p-6 rounded-2xl bg-[#F4F8FC] border border-[#E0EDF7] space-y-3 shadow-xs">
                  <div className="flex items-center gap-2 text-xs uppercase font-mono font-bold tracking-wider text-[#3B82C4]">
                    <Award size={16} /> A craft with a recognised geographical identity.
                  </div>
                  <p className="text-xs text-foreground/80 leading-relaxed font-light">
                    Mathura Zari Poshak has received Geographical Indication recognition, formally connecting the product with its geographical and craft identity.
                  </p>
                  <Link
                    to="/gi-recognition"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#3B82C4] hover:text-primary transition-colors pt-1"
                  >
                    Explore GI Recognition <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimeReveal>

              {/* Rich Textile & Zari Visual */}
              <AnimeReveal variant="fade-left" delay={200} className="lg:col-span-6">
                <TiltCard maxTilt={8}>
                  <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl group bg-background">
                    <img
                      src="/images/projects/poshak-zari.jpg"
                      alt="Intricate Zari work on Mathura deity poshak"
                      className="w-full h-96 sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass text-xs text-primary shadow-sm border border-white/20">
                      <span className="font-mono font-bold text-accent block mb-0.5">
                        Devotional Needlework
                      </span>
                      Zari, resham, and gota patti embellishment carried out stitch by stitch by local women artisans.
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 6 — PANCHGAVYA & TRADITIONAL MATERIALS
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimeReveal variant="fade-up" className="max-w-3xl mb-14">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-accent block mb-2">
                PANCHGAVYA · TRADITIONAL MATERIALS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                Traditional resources. New possibilities.
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                Cows have a distinctive place in the cultural landscape of Braj. Khajani's work explores how materials connected with this tradition can also become a basis for practical skills, responsible use and creative making.
              </p>
              <p className="mt-2 text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                Training in Panchgavya and cow-dung-based product making has included the creation of diyas, incense cups, deity idols, decorative pieces, mementos, planters and other traditional products.
              </p>
            </AnimeReveal>

            {/* Convergence feature: Where traditions meet */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
              <AnimeReveal variant="fade-right" className="lg:col-span-7 bg-[#FDF8F3] border border-[#F3E5D5] rounded-3xl p-8 sm:p-10 space-y-5 shadow-sm">
                <div className="text-xs uppercase font-mono font-bold tracking-[0.2em] text-[#C48332]">
                  Where traditions meet.
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary leading-snug">
                  Merging sacred materials with the delicate visual language of Sanjhi.
                </h3>
                <p className="text-foreground/80 text-sm leading-relaxed font-light">
                  Khajani is also exploring ways in which cow-dung-based material and the artistic language of Sanjhi can come together, creating contemporary products that draw from more than one strand of Braj's traditional knowledge.
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                  This is an important part of what living heritage means: respecting where a tradition comes from while allowing skill, material and creativity to create new possibilities.
                </p>

                <div className="pt-2">
                  <div className="inline-block px-4 py-2 rounded-xl bg-white border border-[#D8C7B0] text-accent text-xs sm:text-sm font-mono font-bold shadow-xs">
                    Traditional Material × Traditional Art × Contemporary Making
                  </div>
                </div>
              </AnimeReveal>

              {/* Photos demonstrating evolution */}
              <AnimeReveal variant="fade-left" delay={200} className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                    <img
                      src="/images/projects/brij-surabhi-diya.jpg"
                      alt="Eco-friendly diyas crafted from cow dung"
                      className="w-full h-44 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                    <img
                      src="/images/projects/brij-surabhi-cow-craft.jpg"
                      alt="Cow dung craft and incense making"
                      className="w-full h-44 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full rounded-2xl overflow-hidden border border-border shadow-sm">
                    <img
                      src="/images/projects/brij-surabhi-idol-painting.jpg"
                      alt="Artisan painting sacred deity idols crafted with traditional materials"
                      className="w-full h-72 sm:h-92 object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </AnimeReveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 7 — TEMPLE FLOWER MANAGEMENT
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section className="py-24 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              <AnimeReveal variant="fade-right" className="lg:col-span-5">
                <TiltCard maxTilt={8}>
                  <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl group bg-background">
                    <img
                      src="/images/projects/brij-surabhi-flower-recycling.jpg"
                      alt="Repurposing sacred temple flower offerings in Mathura"
                      className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass text-xs text-primary shadow-sm border border-white/20">
                      <span className="font-mono font-bold text-accent block mb-0.5">
                        Responsible Circularity
                      </span>
                      Collected floral offerings processed gently into natural incense and handcrafted paper.
                    </div>
                  </div>
                </TiltCard>
              </AnimeReveal>

              <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-accent block">
                  TEMPLE FLOWER MANAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary tracking-tight leading-tight">
                  Giving sacred flowers another life.
                </h2>
                <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed font-light">
                  <p>
                    Flowers are integral to temple and devotional practice across Mathura and Vrindavan. Once offered, however, large quantities of floral material require thoughtful handling.
                  </p>
                  <p>
                    Khajani's approach sees these flowers not simply as waste, but as a resource that can be responsibly repurposed through skill and making.
                  </p>
                </div>

                {/* Product types */}
                <div>
                  <div className="text-xs uppercase font-mono font-bold tracking-wider text-[#C48332] mb-2.5">
                    Transformed Products Documented in Heritage Proposal:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {["Dhoopbatti", "Agarbatti", "Sambrani Cups", "Itra", "Paper"].map((item) => (
                      <span
                        key={item}
                        className="px-3.5 py-1.5 rounded-lg bg-background border border-border text-foreground font-medium font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Poetic statement */}
                <div className="p-5 rounded-2xl bg-[#FDF8F3] border border-[#F3E5D5] space-y-1 shadow-xs">
                  <div className="text-base sm:text-lg font-serif text-primary font-semibold">
                    Offered in devotion. Reimagined through skill.
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light">
                    The initiative brings together cultural sensitivity, practical skills, responsible resource use and livelihood possibilities, while addressing the challenge of temple flower waste.
                  </p>
                </div>

                {/* Flow formula */}
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-foreground/80 font-mono">
                    <span className="px-2.5 py-1 bg-muted/60 border border-border rounded">Temple Flowers</span>
                    <span className="text-accent">→</span>
                    <span className="px-2.5 py-1 bg-muted/60 border border-border rounded">Responsible Collection</span>
                    <span className="text-accent">→</span>
                    <span className="px-2.5 py-1 bg-muted/60 border border-border rounded">Processing</span>
                    <span className="text-accent">→</span>
                    <span className="px-2.5 py-1 bg-muted/60 border border-border rounded">Making</span>
                    <span className="text-accent">→</span>
                    <span className="px-2.5 py-1 bg-accent/10 border border-accent/30 text-accent font-bold rounded">New Products</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-2 font-light">
                    The proposal also connects this work with reducing waste and pollution pressure, including pollution affecting the sacred Yamuna river.
                  </p>
                </div>
              </AnimeReveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 8 — WHERE TRADITIONS CONNECT (Editorial Mosaic)
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section className="relative py-20 sm:py-28 bg-[#FAF7F2] text-foreground overflow-hidden border-b border-[#EAE2D5] select-none">
          {/* Top-Left: Decorative Arches & Cursive Tagline */}
          <div className="hidden lg:block absolute left-6 2xl:left-10 top-8 pointer-events-none select-none">
            <div className="font-serif italic text-base sm:text-lg text-[#C85A32] -rotate-12 leading-tight">
              Traditions <br />
              <span className="ml-2">today,</span> <br />
              <span className="ml-4 text-[#A32A29]">stronger</span> <br />
              <span className="ml-6">tomorrow.</span>
            </div>
          </div>

          {/* Left Side: Botanical Leaf Accent */}
          <div className="hidden xl:block absolute left-2 top-1/3 w-28 opacity-60 pointer-events-none select-none">
            <img
              src="/images/projects/botanical-leaf-branch.png"
              alt=""
              className="w-full h-auto"
            />
          </div>

          {/* Bottom-Left: Rooted in People Note */}
          <div className="hidden lg:block absolute left-6 2xl:left-10 bottom-8 text-[10px] tracking-[0.22em] text-[#8C7A6B] font-mono uppercase leading-relaxed pointer-events-none select-none">
            <div className="w-8 h-px bg-[#C85A32]/40 mb-2" />
            ROOTED <br />
            IN PEOPLE <br />
            RICHER <br />
            TOGETHER
          </div>

          {/* Top-Right: Editorial Taxonomy */}
          <div className="hidden lg:block absolute right-6 2xl:left-auto 2xl:right-10 top-8 text-[10px] tracking-[0.22em] text-[#8C7A6B] font-mono uppercase text-right leading-relaxed pointer-events-none select-none">
            PEOPLE <br />
            PRACTICES <br />
            PLACES <br />
            POSSIBILITIES
            <div className="w-8 h-px bg-[#C85A32]/40 mt-2 ml-auto" />
          </div>

          {/* Bottom-Right: Braj Lives On Calligraphy */}
          <div className="hidden lg:block absolute right-6 2xl:right-10 bottom-8 font-serif italic text-2xl sm:text-3xl text-[#C85A32] pointer-events-none select-none -rotate-3">
            Braj <br />
            <span className="ml-4 underline decoration-[#C85A32]/50 underline-offset-4">Lives On.</span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <AnimeReveal variant="fade-up" className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-3">
              <div className="inline-flex items-center justify-center gap-3 text-xs font-bold tracking-[0.25em] text-[#8C7A6B] uppercase">
                <span className="w-8 h-px bg-[#D8C7B5]" />
                <span>HERITAGE IN PRACTICE</span>
                <span className="w-8 h-px bg-[#D8C7B5]" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C2D42] tracking-tight leading-tight">
                Different traditions. <br />
                <span className="text-[#C85A32] italic font-serif font-normal">
                  A shared connection to Braj.
                </span>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm sm:max-w-xl mx-auto leading-relaxed pt-1 font-light">
                This is where the story converges—not four isolated initiatives, but an integrated living ecology of cultural knowledge.
              </p>
            </AnimeReveal>

            {/* 4 Distinctive Editorial Heritage Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14">
              {/* ── CARD 01: Royal Sanjhi Art ── */}
              <AnimeReveal variant="fade-up" delay={50}>
                <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-[#F0E2D2] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row group h-full">
                  <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-[#FDF8F3] shrink-0">
                    <img
                      src="/images/culture/culture-sanjhi-art.jpg"
                      alt="Royal Sanjhi Art"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 p-5 sm:p-7 bg-[#FDF8F3] flex flex-col justify-between relative overflow-hidden">
                    {/* Watermark Lotus Icon */}
                    <div className="absolute -right-3 -top-3 pointer-events-none opacity-10 text-[#C48332]">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 3c1.5 3 4 5.5 7 7-3 1.5-5.5 4-7 7-1.5-3-4-5.5-7-7 3-1.5 5.5-4 7-7z" />
                        <path d="M12 7c.8 1.6 2.1 2.9 3.7 3.7-1.6.8-2.9 2.1-3.7 3.7-.8-1.6-2.1-2.9-3.7-3.7C9.9 9.9 11.2 8.6 12 7z" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-4 h-0.5 bg-[#C48332]" />
                        <span className="font-serif font-bold text-base text-[#C48332]">01</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C2D42] leading-snug">
                        Royal Sanjhi Art
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#5A6578] leading-relaxed mt-2 font-normal">
                        Sanjhi carries an intricate visual language of pattern, precision and storytelling.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between gap-2 relative z-10">
                      <div className="flex flex-wrap gap-1.5">
                        {["Art", "Pattern", "Storytelling"].map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F5EBE1] text-[#9E6B38]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#C48332] text-white flex items-center justify-center shrink-0 shadow-md">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <path d="M12 2C8 7 3 9 3 14a9 9 0 0 0 18 0c0-5-5-7-9-12z" />
                          <path d="M12 8c-2 2.5-4 3.5-4 6a4 4 0 0 0 8 0c0-2.5-2-3.5-4-6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimeReveal>

              {/* ── CARD 02: Mathura Zari Poshak ── */}
              <AnimeReveal variant="fade-up" delay={120}>
                <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-[#DDEAF5] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row group h-full">
                  <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-[#F4F8FC] shrink-0">
                    <img
                      src="/images/culture/culture-zari-poshak.jpg"
                      alt="Mathura Zari Poshak"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 p-5 sm:p-7 bg-[#F4F8FC] flex flex-col justify-between relative overflow-hidden">
                    {/* Watermark Spool Icon */}
                    <div className="absolute -right-3 -top-3 pointer-events-none opacity-10 text-[#5B82A6]">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M6 3h12v4H6zM6 17h12v4H6zM8 7h8v10H8z" />
                        <path d="M10 7v10M14 7v10" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-4 h-0.5 bg-[#5B82A6]" />
                        <span className="font-serif font-bold text-base text-[#5B82A6]">02</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C2D42] leading-snug">
                        Mathura Zari Poshak
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#5A6578] leading-relaxed mt-2 font-normal">
                        Mathura Zari Poshak carries specialised textile and embellishment skills rooted in devotional craftsmanship.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between gap-2 relative z-10">
                      <div className="flex flex-wrap gap-1.5">
                        {["Textile", "Craftsmanship", "Devotion"].map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#E5EFF8] text-[#4A7296]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#5B82A6] text-white flex items-center justify-center shrink-0 shadow-md">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <path d="M4 12h16M12 4v16M8 4l8 16M16 4L8 20" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimeReveal>

              {/* ── CARD 03: Panchgavya & Traditional Materials ── */}
              <AnimeReveal variant="fade-up" delay={180}>
                <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-[#DCEADE] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row group h-full">
                  <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-[#F5F9F4] shrink-0">
                    <img
                      src="/images/culture/culture-panchgavya.jpg"
                      alt="Panchgavya & Traditional Materials"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 p-5 sm:p-7 bg-[#F5F9F4] flex flex-col justify-between relative overflow-hidden">
                    {/* Watermark Leaves Icon */}
                    <div className="absolute -right-3 -top-3 pointer-events-none opacity-10 text-[#528A61]">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 2L4 10l8 8 8-8-8-8z" />
                        <path d="M12 6l-4 4 4 4 4-4-4-4z" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-4 h-0.5 bg-[#528A61]" />
                        <span className="font-serif font-bold text-base text-[#528A61]">03</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C2D42] leading-snug">
                        Panchgavya &amp; Traditional Materials
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#5A6578] leading-relaxed mt-2 font-normal">
                        Panchgavya and cow-based materials connect traditional resources with useful and increasingly creative forms of making.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between gap-2 relative z-10">
                      <div className="flex flex-wrap gap-1.5">
                        {["Sustainability", "Tradition", "Innovation"].map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#E8F2E9] text-[#42754F]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#528A61] text-white flex items-center justify-center shrink-0 shadow-md">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <path d="M7 6c-2 2-3 5-3 8 0 4 3 7 8 7s8-3 8-7c0-3-1-6-3-8" />
                          <path d="M12 14v4M9 11l-3-3M15 11l3-3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimeReveal>

              {/* ── CARD 04: Temple Flower Management ── */}
              <AnimeReveal variant="fade-up" delay={240}>
                <div className="rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white border border-[#F0E2D2] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row group h-full">
                  <div className="sm:w-[42%] aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-[#FDF8F3] shrink-0">
                    <img
                      src="/images/culture/culture-temple-flowers.jpg"
                      alt="Temple Flower Management"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 p-5 sm:p-7 bg-[#FDF8F3] flex flex-col justify-between relative overflow-hidden">
                    {/* Watermark Lotus Stem Icon */}
                    <div className="absolute -right-3 -top-3 pointer-events-none opacity-10 text-[#C85A32]">
                      <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <path d="M12 4v16M8 8c2-2 6-2 8 0M7 12c3-2 7-2 10 0M8 16c2-1.5 6-1.5 8 0" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-4 h-0.5 bg-[#C85A32]" />
                        <span className="font-serif font-bold text-base text-[#C85A32]">04</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1C2D42] leading-snug">
                        Temple Flower Management
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#5A6578] leading-relaxed mt-2 font-normal">
                        Temple flower management gives materials used in worship another productive life through skill and thoughtful reuse.
                      </p>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between gap-2 relative z-10">
                      <div className="flex flex-wrap gap-1.5">
                        {["Reuse", "Livelihood", "Community"].map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#F9EFE4] text-[#B8582C]">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#C85A32] text-white flex items-center justify-center shrink-0 shadow-md">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            </div>

            {/* Bottom Heritage Ribbon / Taxonomy */}
            <div className="pt-6 border-t border-[#EAE2D5] flex items-center justify-center gap-3 text-xs font-mono font-medium tracking-[0.22em] text-[#8C7A6B] uppercase select-none">
              <span className="w-10 sm:w-20 h-px bg-[#D8C7B5]" />
              <span className="inline-flex items-center gap-2">
                <span>CULTURE</span>
                <span>•</span>
                <span>CRAFT</span>
                <span>•</span>
                <span>COMMUNITY</span>
                <span>•</span>
                <span>CONTINUITY</span>
              </span>
              <span className="w-10 sm:w-20 h-px bg-[#D8C7B5]" />
            </div>

            {/* Seamless Convergence Box */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-card border border-[#D8C7B0] text-center space-y-6 shadow-md">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-primary">
                  And increasingly, these boundaries can meet.
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-foreground/80">
                  <div className="p-4 rounded-xl bg-background border border-border">
                    An art form can meet a different traditional material.
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border">
                    A traditional process can find a contemporary application.
                  </div>
                  <div className="p-4 rounded-xl bg-background border border-border">
                    A cultural practice can create a new livelihood opportunity.
                  </div>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2 font-light">
                  For Khajani, this is what makes heritage living: it is respected, practised and passed forward, while remaining open to thoughtful new possibilities.
                </p>
                <div className="pt-2">
                  <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-[#C48332] font-semibold">
                    <span>Place</span>
                    <span>→</span>
                    <span>Knowledge</span>
                    <span>→</span>
                    <span>People</span>
                    <span>→</span>
                    <span>Practice</span>
                    <span>→</span>
                    <span>Innovation</span>
                    <span>→</span>
                    <span>Continuity</span>
                  </div>
                </div>
              </div>
            </AnimeReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════════════════════
            SCENE 9 — CLOSING
           ══════════════════════════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 sm:py-28 bg-primary text-primary-foreground text-center overflow-hidden">
          <AuroraBackground variant="dark" intensity={0.7} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
            <AnimeReveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-secondary text-xs font-mono font-bold tracking-widest uppercase">
                CULTURE · CRAFT · CONTINUITY
              </div>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={100}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white tracking-tight font-bold leading-tight">
                What is carried forward remains alive.
              </h2>
            </AnimeReveal>

            <AnimeReveal variant="fade-up" delay={200}>
              <div className="space-y-4 text-primary-foreground/85 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
                <p>
                  Khajani's work with heritage begins with respect—for the place from which a tradition comes, for the people who carry its knowledge, for the materials that shape it and for the hands that continue to practise it.
                </p>
                <p className="text-primary-foreground/75">
                  From Sanjhi and Mathura Zari Poshak to Panchgavya-based making and the thoughtful reuse of temple flowers, the forms may differ, but the purpose remains connected:
                </p>
                <p className="text-secondary font-serif italic text-lg sm:text-xl font-semibold">
                  “To keep knowledge in practice and create space for it to continue.”
                </p>
              </div>
            </AnimeReveal>

            {/* Action buttons */}
            <AnimeReveal variant="fade-up" delay={300}>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/our-work"
                  className="btn-3d-accent inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xl transition-all shadow-xl"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/gi-recognition"
                  className="btn-3d-outline inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold tracking-widest uppercase rounded-xl transition-all"
                >
                  <span>GI Recognition</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/projects/royal-sanjhi"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-white/80 hover:text-secondary transition-colors underline-offset-4 hover:underline py-2"
                >
                  Explore Royal Sanjhi Art →
                </Link>
              </div>
            </AnimeReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CulturePage;
