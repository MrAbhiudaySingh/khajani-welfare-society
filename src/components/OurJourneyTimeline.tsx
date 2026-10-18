import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { AnimeReveal } from "./AnimeReveal";

export interface MilestoneItem {
  year: string;
  step: string;
  title: string;
  desc: string;
  highlight?: string;
  image: string;
  alt: string;
}

export const MILESTONES: MilestoneItem[] = [
  {
    year: "2007",
    step: "01",
    title: "The Beginning",
    desc: "Khajani Welfare Society founded in Mathura by Dr. Hari Mohan Maheshwari, Abha Maheshwari and Shipra Rathi.",
    highlight: "Foundation",
    image: "/images/about/award-priyanka-chopra.jpg",
    alt: "Khajani founder receiving award from Priyanka Chopra",
  },
  {
    year: "2012",
    step: "02",
    title: "Skills Take Root",
    desc: "Early skill training initiatives for women and artisans across Mathura.",
    highlight: "Vocational Focus",
    image: "/images/projects/upsdm-tailor.jpg",
    alt: "Vocational tailoring and skill training session",
  },
  {
    year: "2015",
    step: "03",
    title: "Expanding Reach",
    desc: "More communities, more training programmes reaching rural clusters.",
    highlight: "Community Outreach",
    image: "/images/about/area-community.jpg",
    alt: "Rural community outreach in Mathura",
  },
  {
    year: "2018",
    step: "04",
    title: "Stronger Partnerships",
    desc: "Collaborations with government bodies, institutions and industry partners.",
    highlight: "Collaborations",
    image: "/images/about/govt-collab-1.jpg",
    alt: "Institutional partnership and collaborative initiative",
  },
  {
    year: "2020",
    step: "05",
    title: "Broader Impact",
    desc: "Education, digital literacy and community development initiatives scaled up.",
    highlight: "Digital & Literacy",
    image: "/images/projects/digi-shala.jpg",
    alt: "Digital literacy and education programme",
  },
  {
    year: "2021",
    step: "06",
    title: "Deeper Communities",
    desc: "Greater focus on inclusion, awareness and holistic health and dignity.",
    highlight: "Inclusive Growth",
    image: "/images/projects/sanitary-napkin-vending.jpg",
    alt: "Menstrual hygiene initiative in schools",
  },
  {
    year: "2025",
    step: "07",
    title: "GI Recognition",
    desc: "Mathura Zari Poshak receives Geographical Indication recognition, marking an important milestone for the traditional craft of Mathura.",
    highlight: "GI Recognition",
    image: "/images/projects/poshak-zari.jpg",
    alt: "Mathura Zari Poshak GI craft",
  },
  {
    year: "Today",
    step: "08",
    title: "The Work Continues",
    desc: "Khajani continues to work across skills, education, traditional crafts and community initiatives in Mathura and Braj.",
    highlight: "Ongoing Mission",
    image: "/images/about/our-story-workshop.jpg",
    alt: "Ongoing community and skill training workshops",
  },
];

export const OurJourneyTimeline: React.FC = () => {
  const [viewMode, setViewMode] = useState<"rail" | "pathway">("rail");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const maxScroll = scrollWidth - clientWidth;
    setScrollProgress(maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [viewMode]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = 330;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full my-8">
      {/* ─── Top Controls & View Mode Bar ─── */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground font-mono">
            Chronological Journey · 2007 – Today
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Toggle between Horizontal Rail and Vertical Pathway */}
          <div className="inline-flex items-center p-1 rounded-xl bg-muted/60 border border-border/80 text-xs font-medium">
            <button
              type="button"
              onClick={() => setViewMode("rail")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${viewMode === "rail"
                  ? "bg-white text-primary shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <span className="text-xs">↔</span> Horizontal Rail
            </button>
            <button
              type="button"
              onClick={() => setViewMode("pathway")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${viewMode === "pathway"
                  ? "bg-white text-primary shadow-xs font-semibold"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              <span className="text-xs">↕</span> Vertical Pathway
            </button>
          </div>

          {/* Navigation Arrows for Horizontal Rail */}
          {viewMode === "rail" && (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous milestones"
                className="w-8 h-8 rounded-full border border-border bg-white shadow-xs flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/10 hover:border-accent/40 transition-all cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next milestones"
                className="w-8 h-8 rounded-full border border-border bg-white shadow-xs flex items-center justify-center text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/10 hover:border-accent/40 transition-all cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ─── VIEW 1: HORIZONTAL TIMELINE RAIL ─── */}
      {viewMode === "rail" ? (
        <div className="relative pt-2 pb-4">
          {/* Continuous Connecting Rail Line */}
          <div className="absolute top-[28px] left-6 right-6 h-[2.5px] bg-gradient-to-r from-accent via-secondary to-primary/40 pointer-events-none z-0 rounded-full" />

          {/* Scrollable Timeline Track */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-1 scroll-smooth snap-x snap-mandatory relative z-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {MILESTONES.map((mile, idx) => (
              <div
                key={mile.year}
                className="min-w-[280px] sm:min-w-[310px] max-w-[330px] flex-shrink-0 snap-start flex flex-col group"
              >
                {/* Milestone Node on Rail */}
                <div className="flex items-center justify-center relative mb-4">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-accent text-primary flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-secondary transition-all duration-300 relative z-10">
                    <span className="font-display font-bold text-xs text-accent group-hover:text-secondary transition-colors">
                      {mile.step}
                    </span>
                  </div>
                </div>

                {/* Vertical Connector Stem */}
                <div className="w-[1.5px] h-3.5 bg-border group-hover:bg-accent/70 transition-colors mx-auto -mt-4 mb-2" />

                {/* Milestone Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-border/80 group-hover:border-secondary/60 group-hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group-hover:-translate-y-1 shadow-sm overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
                        {mile.year}
                      </span>
                      {mile.highlight && (
                        <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-secondary/10 text-secondary font-bold">
                          {mile.highlight}
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2 font-mono">
                      {mile.title}
                    </span>

                    <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-light">
                      {mile.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground/60">
                    <span className="font-mono">Milestone {mile.step} of 08</span>
                    <span className="text-secondary font-serif italic text-xs">Mathura Journey</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rail Progress Track Bar & Hints */}
          <div className="flex items-center justify-between gap-4 pt-2 px-1 text-[11px] text-muted-foreground/60">
            <span className="font-mono text-[10px] uppercase tracking-wider">← 2007 (Beginnings)</span>

            <div className="flex-1 max-w-xs h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary transition-all duration-200 rounded-full"
                style={{ width: `${Math.max(15, scrollProgress)}%` }}
              />
            </div>

            <span className="font-mono text-[10px] uppercase tracking-wider">Today (Ongoing) →</span>
          </div>
        </div>
      ) : (
        /* ─── VIEW 2: VERTICAL TIMELINE PATHWAY ─── */
        <div className="relative py-6 max-w-3xl mx-auto">
          {/* Central Vertical Spine Line (center on desktop, left on mobile) */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-accent via-secondary to-primary/40 pointer-events-none rounded-full" />

          <div className="space-y-8 sm:space-y-10 relative">
            {MILESTONES.map((mile, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={mile.year}
                  className="relative flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Left Column (Desktop) */}
                  <div
                    className={`hidden md:block w-1/2 ${isEven ? "pr-10 text-right" : "pl-10 order-2 text-left"
                      }`}
                  >
                    {isEven ? (
                      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-border/80 group-hover:border-secondary/60 group-hover:shadow-xl transition-all duration-300 shadow-sm text-left inline-block w-full group-hover:-translate-y-0.5 overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
                            {mile.year}
                          </span>
                          {mile.highlight && (
                            <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-secondary/10 text-secondary font-bold">
                              {mile.highlight}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2 font-mono">
                          {mile.title}
                        </span>
                        <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-light">
                          {mile.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-display font-bold text-primary/80">
                          {mile.year}
                        </span>
                        <div className="h-0.5 w-12 bg-secondary/40" />
                        <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                          {mile.title}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Milestone Node Pin on Spine Line */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 z-10">
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-accent text-accent font-bold text-xs flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-secondary transition-all duration-300">
                      <span className="font-display font-bold text-xs">{mile.step}</span>
                    </div>
                  </div>

                  {/* Right Column (Desktop) & Full Card (Mobile) */}
                  <div
                    className={`w-full pl-16 md:pl-0 md:w-1/2 ${isEven ? "md:pl-10 order-2 md:text-left" : "md:pr-10 md:text-right"
                      }`}
                  >
                    {!isEven ? (
                      <div className="p-5 sm:p-6 rounded-2xl bg-white border border-border/80 group-hover:border-secondary/60 group-hover:shadow-xl transition-all duration-300 shadow-sm text-left inline-block w-full group-hover:-translate-y-0.5 overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl sm:text-3xl font-display font-bold text-primary tracking-tight">
                            {mile.year}
                          </span>
                          {mile.highlight && (
                            <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-secondary/10 text-secondary font-bold">
                              {mile.highlight}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2 font-mono">
                          {mile.title}
                        </span>
                        <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed font-light">
                          {mile.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden md:flex items-center gap-3">
                        <div className="h-0.5 w-12 bg-secondary/40" />
                        <span className="text-3xl sm:text-4xl font-display font-bold text-primary/80">
                          {mile.year}
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                          {mile.title}
                        </span>
                      </div>
                    )}

                    {/* Mobile fallback card for even items */}
                    {isEven && (
                      <div className="block md:hidden p-5 rounded-2xl bg-white border border-border/80 shadow-sm text-left overflow-hidden">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-display font-bold text-primary">
                            {mile.year}
                          </span>
                          {mile.highlight && (
                            <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-md bg-secondary/10 text-secondary font-bold">
                              {mile.highlight}
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2 font-mono">
                          {mile.title}
                        </span>
                        <p className="text-xs text-muted-foreground leading-relaxed font-light">
                          {mile.desc}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default OurJourneyTimeline;
