import { useState, useRef, useEffect, useCallback } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Building2,
  Users,
  Heart,
  GraduationCap,
  MoveHorizontal,
  Compass,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { AnimeReveal } from "./AnimeReveal";

interface Milestone {
  id: string;
  year: string;
  tag: string;
  title: string;
  desc: string;
  badge: string;
  image: string;
  alt: string;
  quote?: string;
  badgeType?: "accent" | "secondary" | "gold";
  icon: typeof Sparkles;
}

const MILESTONES: Milestone[] = [
  {
    id: "m-2007",
    year: "2007",
    tag: "WHERE IT ALL BEGAN",
    title: "A Grassroots Beginning in Mathura",
    desc: "Khajani began its journey in Mathura with the establishment of a women's skill-training institute—creating a dedicated space where women could learn practical skills and explore new possibilities through training.",
    badge: "The Beginning",
    image: "/images/about/institute-entrance.jpg",
    alt: "Early training institute in Mathura",
    badgeType: "secondary",
    icon: Sparkles,
  },
  {
    id: "m-2012",
    year: "2012",
    tag: "SKILLS FOR OPPORTUNITY",
    title: "Free Vocational Training Begins",
    desc: "Khajani expanded its work through free vocational training programmes focused on practical, job-oriented skills for women from different communities. The emphasis was on making useful skills more accessible and helping women strengthen capabilities that could support greater economic participation.",
    badge: "Skills · Access · Opportunity",
    image: "/images/projects/upsdm-tailor.jpg",
    alt: "Free vocational sewing training",
    badgeType: "secondary",
    icon: Sparkles,
  },
  {
    id: "m-2015",
    year: "2015",
    tag: "FROM INITIATIVE TO INSTITUTION",
    title: "Khajani Welfare Society Takes Formal Shape",
    desc: "Khajani Welfare Society was formally registered under the Societies Registration Act, 1860, giving an institutional structure to work that had grown from its grassroots beginnings in Mathura. The registration marked an important stage in Khajani's journey—towards a more structured organisation with a widening field of work.",
    badge: "Growth · Structure · Purpose",
    image: "/images/about/team-working.jpg",
    alt: "Khajani team members in planning session",
    badgeType: "secondary",
    icon: Building2,
  },
  {
    id: "m-2018",
    year: "2018",
    tag: "LEARNING WITHOUT BARRIERS",
    title: "Skills Reach Wider Communities",
    desc: "Khajani extended short-term skill-training initiatives to groups with limited access to conventional learning opportunities, including inmates, women at Nari Niketan and school-going girls. This widened the reach of Khajani's skill-development work, taking practical learning into different social and institutional settings.",
    badge: "Access · Inclusion · Capability",
    image: "/images/about/classroom.jpg",
    alt: "Women in community training class",
    badgeType: "secondary",
    icon: Users,
  },
  {
    id: "m-2020",
    year: "2020",
    tag: "HEALTH, DIGNITY & AWARENESS",
    title: "Supporting Menstrual Hygiene",
    desc: "Khajani installed 25 sanitary napkin vending machines and napkin destroyers across 25 government schools and colleges, bringing practical menstrual-hygiene support into educational institutions. The initiative addressed an everyday need with a simple objective—making menstrual-hygiene facilities more accessible to girls and women.",
    badge: "Awareness · Access · Dignity",
    image: "/images/projects/sanitary-napkin-vending.jpg",
    alt: "Sanitary napkin vending machine installation",
    badgeType: "secondary",
    icon: Heart,
  },
  {
    id: "m-2021",
    year: "2021",
    tag: "RESPONDING IN A TIME OF NEED",
    title: "Skills Put to Work During the Pandemic",
    desc: "During the pandemic, Khajani connected its skill base with an urgent community need through the production of cotton masks and PPE kits. Khajani's records document the distribution of more than 500,000 masks and 500 PPE kits—turning practical skills into a direct response during an extraordinary period.",
    badge: "Skills · Response · Community",
    image: "/images/media/news-clipping-10.jpg",
    alt: "PPE kit and mask distribution reporting",
    quote: "“When circumstances changed, skills found a new purpose.”",
    badgeType: "secondary",
    icon: Sparkles,
  },
  {
    id: "m-2023",
    year: "2023",
    tag: "EXPANDING THE LEARNING JOURNEY",
    title: "EDUDAKSH Remedial Learning",
    desc: "Khajani expanded its engagement with education through EDUDAKSH, a tailored remedial-learning initiative for girls aged 10–14 years in government schools. The initiative extended Khajani's work into another form of capability-building—supporting learning at an age when stronger educational foundations open wider possibilities.",
    badge: "Learning · Confidence · Possibility",
    image: "/images/projects/kla-students.jpg",
    alt: "EDUDAKSH learning academy students",
    badgeType: "secondary",
    icon: GraduationCap,
  },
  {
    id: "m-2025",
    year: "2025",
    tag: "A LANDMARK FOR BRAJ HERITAGE",
    title: "Mathura Zari Poshak Receives GI Recognition",
    desc: "A significant milestone for the region's craft heritage came with Geographical Indication (GI) recognition for Mathura Zari Poshak, formally recognising the distinctive identity of a traditional craft deeply associated with Mathura and Braj. Khajani Welfare Society's role as the Registered Proprietor of the Mathura Zari Poshak GI connects this recognition with the organisation's continuing engagement in traditional crafts and artisan development.",
    badge: "GI Registered Proprietor",
    image: "/images/projects/poshak-zari.jpg",
    alt: "Mathura Zari Poshak GI craft",
    quote: "“A tradition of Braj. An identity recognised.”",
    badgeType: "gold",
    icon: Award,
  },
  {
    id: "m-today",
    year: "Today",
    tag: "THE JOURNEY CONTINUES",
    title: "Same Roots. A Wider Purpose",
    desc: "Today, Khajani's work brings together women-focused skill development, livelihoods, traditional crafts, education and community development—while continuing to explore new opportunities around the skills and cultural knowledge of Mathura and Braj. What has changed over the years is the scale and range of the work. What remains constant is its connection with people, practical capability and place.",
    badge: "22,000+ Women Reached",
    image: "/images/about/team-working.jpg",
    alt: "Khajani team and artisans today",
    quote: "“People · Skills · Heritage · Opportunity”",
    badgeType: "accent",
    icon: Sparkles,
  },
];

export default function HorizontalTimeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStartLeft = useRef(0);

  // Update scroll state & active milestone
  const updateScrollMetrics = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    
    // Calculate progress percentage
    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
    
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < maxScroll - 20);

    // Determine currently active card based on center position
    const containerCenter = scrollLeft + clientWidth / 2;
    let closestIndex = 0;
    let closestDist = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = idx;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      requestAnimationFrame(updateScrollMetrics);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    updateScrollMetrics();

    return () => el.removeEventListener("scroll", onScroll);
  }, [updateScrollMetrics]);

  // Scroll to specific index
  const scrollToMilestone = (index: number) => {
    const card = cardRefs.current[index];
    const container = scrollRef.current;
    if (!card || !container) return;

    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const targetScroll = cardCenter - container.clientWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToMilestone(activeIndex - 1);
    } else {
      const container = scrollRef.current;
      if (container) {
        container.scrollBy({ left: -380, behavior: "smooth" });
      }
    }
  };

  const handleNext = () => {
    if (activeIndex < MILESTONES.length - 1) {
      scrollToMilestone(activeIndex + 1);
    } else {
      const container = scrollRef.current;
      if (container) {
        container.scrollBy({ left: 380, behavior: "smooth" });
      }
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollStartLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.6; // Scroll speed factor
    scrollRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section
      id="timeline"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2] text-foreground overflow-hidden border-y border-[#EAE2D5]"
    >
      {/* Target anchor for backward compatibility */}
      <span id="timeline-part-1" className="absolute -top-24 left-0 pointer-events-none" />
      <span id="timeline-part-2" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Decorative ambient backdrop shapes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <AnimeReveal variant="fade-up" className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-primary text-xs font-bold tracking-[0.18em] uppercase mb-3 shadow-xs">
              <Sparkles size={13} className="text-secondary animate-pulse" />
              <span>18-Year Chronological Journey · 2007 to Present</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary leading-tight">
              A journey of people,
              <br />
              <span className="text-secondary font-serif italic font-normal">
                purpose and possibility.
              </span>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl">
              From a single vocational classroom in Mathura to a regional movement touching over 22,000 women, artisans, and families across 152 villages.
            </p>
          </AnimeReveal>

          {/* Controls: Prev/Next & Interaction Hint */}
          <AnimeReveal variant="fade-left" delay={150} className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold text-muted-foreground hidden sm:inline-flex items-center gap-1.5 bg-card/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-border/80">
                <MoveHorizontal size={13} className="text-accent animate-bounce" />
                Scroll or Drag
              </span>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={!canScrollLeft}
                  aria-label="Previous milestone"
                  className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    canScrollLeft
                      ? "bg-card text-primary border-border hover:border-secondary hover:bg-secondary/10 hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                      : "bg-muted/40 text-muted-foreground/40 border-border/40 cursor-not-allowed opacity-50"
                  }`}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canScrollRight}
                  aria-label="Next milestone"
                  className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    canScrollRight
                      ? "bg-primary text-white border-primary hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                      : "bg-muted/40 text-muted-foreground/40 border-border/40 cursor-not-allowed opacity-50"
                  }`}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Current Milestone Counter */}
            <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>Milestone {String(activeIndex + 1).padStart(2, "0")} of {String(MILESTONES.length).padStart(2, "0")}</span>
              <span className="text-secondary font-bold font-sans">({MILESTONES[activeIndex]?.year})</span>
            </div>
          </AnimeReveal>
        </div>

        {/* ─── Interactive Year Scrubber Bar ─── */}
        <div className="mb-8 relative">
          <div className="relative flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
            {/* Background connecting rail */}
            <div className="absolute top-1/2 left-4 right-4 h-1 bg-border/80 -translate-y-1/2 -z-0 rounded-full" />
            
            {/* Active progress rail fill */}
            <div
              className="absolute top-1/2 left-4 h-1 bg-gradient-to-r from-secondary via-accent to-amber-500 -translate-y-1/2 -z-0 rounded-full transition-all duration-300"
              style={{ width: `calc(${scrollProgress}% * 0.94)` }}
            />

            {MILESTONES.map((m, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => scrollToMilestone(idx)}
                  className={`group relative z-10 flex flex-col items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "scale-105 bg-white shadow-md border border-secondary/40 text-primary"
                      : "hover:bg-white/60 text-muted-foreground hover:text-primary"
                  }`}
                >
                  <div
                    className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border-2 ${
                      isActive
                        ? "bg-accent border-white ring-4 ring-accent/25 scale-125"
                        : "bg-background border-muted-foreground/40 group-hover:border-secondary group-hover:scale-110"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold tracking-tight font-display transition-colors ${
                      isActive ? "text-primary font-extrabold" : "text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    {m.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Horizontal Scroll Track ─── */}
        <div className="relative">
          {/* Edge shadow fades for scroll affordance */}
          <div
            className={`pointer-events-none absolute left-0 top-0 bottom-6 w-12 bg-gradient-to-r from-[#FAF7F2] to-transparent z-20 transition-opacity duration-300 ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`pointer-events-none absolute right-0 top-0 bottom-6 w-16 bg-gradient-to-l from-[#FAF7F2] to-transparent z-20 transition-opacity duration-300 ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]"
            style={{ scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {MILESTONES.map((m, idx) => {
              const isActive = activeIndex === idx;
              const IconComp = m.icon;

              return (
                <div
                  key={m.id}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[440px] flex-shrink-0 snap-center group"
                >
                  <div
                    className={`h-full rounded-3xl p-5 sm:p-6 bg-card border transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${
                      isActive
                        ? "border-secondary/60 shadow-xl ring-1 ring-secondary/30 -translate-y-1"
                        : "border-border/80 shadow-md hover:border-secondary/40 hover:shadow-lg hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Background Huge Watermark Year */}
                    <span
                      className={`absolute top-2 right-4 text-7xl sm:text-8xl font-display font-black tracking-tighter transition-all duration-500 pointer-events-none select-none ${
                        isActive
                          ? "text-secondary/20 scale-105"
                          : "text-muted-foreground/10 group-hover:text-secondary/15"
                      }`}
                    >
                      {m.year}
                    </span>

                    {/* Top Content Area */}
                    <div className="relative z-10">
                      {/* Milestone Number & Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                          {m.tag}
                        </span>
                        <span className="text-xs font-mono font-semibold text-muted-foreground">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Milestone Title */}
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-primary mb-2.5 leading-snug group-hover:text-accent transition-colors">
                        {m.title}
                      </h3>

                      {/* Milestone Description */}
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-light mb-4 line-clamp-4 group-hover:line-clamp-none transition-all">
                        {m.desc}
                      </p>
                    </div>

                    {/* Media Card Preview */}
                    <div className="relative z-10 mt-auto">
                      <div className="rounded-2xl overflow-hidden bg-muted border border-border/80 shadow-xs aspect-[16/10] relative group/img">
                        <img
                          src={m.image}
                          alt={m.alt}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover/img:scale-108 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                        {/* Optional Quote / Highlight Badge */}
                        {m.quote && (
                          <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-xl bg-black/75 backdrop-blur-md text-white text-[11px] border border-white/10 shadow-md">
                            <p className="font-handwriting text-amber-300 text-xs sm:text-sm leading-tight">
                              {m.quote}
                            </p>
                          </div>
                        )}

                        {/* Special GI Badge for 2025 */}
                        {m.year === "2025" && (
                          <div className="absolute top-2.5 right-2.5">
                            <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-accent text-white shadow-md flex items-center gap-1 border border-white/20">
                              <Award size={11} /> GI Recognized
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Footer Badge Pill */}
                      <div className="mt-3.5 flex items-center justify-between gap-2 pt-3 border-t border-border/60">
                        <div
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border transition-all ${
                            m.badgeType === "gold"
                              ? "bg-amber-500/15 text-amber-900 border-amber-500/30"
                              : m.badgeType === "accent"
                              ? "bg-accent/15 text-accent border-accent/30"
                              : "bg-secondary/15 text-primary border-secondary/30"
                          }`}
                        >
                          <IconComp size={12} className="text-secondary" />
                          <span>{m.badge}</span>
                        </div>

                        <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                          <Calendar size={11} />
                          {m.year}
                        </span>
                      </div>
                    </div>

                    {/* Creative Bottom Active Glow Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-secondary via-accent to-amber-500 opacity-100"
                          : "opacity-0 group-hover:opacity-60 bg-secondary"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
