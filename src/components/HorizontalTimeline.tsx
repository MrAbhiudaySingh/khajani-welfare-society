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
  badgeType?: "gold" | "accent" | "secondary";
  icon: typeof Sparkles;
}

const MILESTONES: Milestone[] = [
  {
    id: "m-2007",
    year: "2007",
    tag: "WHERE IT ALL BEGAN",
    title: "A Grassroots Beginning in Mathura",
    desc: "Khajani began its journey in Mathura with a women's skill-training institute—creating a dedicated space where women could learn practical capabilities.",
    badge: "The Beginning",
    image: "/images/about/institute-entrance.jpg",
    alt: "Early training institute in Mathura",
    badgeType: "secondary",
    icon: Sparkles,
  },
  {
    id: "m-2010",
    year: "2010",
    tag: "EXPANSION & OUTREACH",
    title: "Reaching New Communities",
    desc: "Extended our work into rural Mathura and adjoining villages, bringing vocational workshops directly to local women at their doorsteps.",
    badge: "Access · Outreach",
    image: "/images/about/area-community.jpg",
    alt: "Rural community outreach",
    badgeType: "secondary",
    icon: Users,
  },
  {
    id: "m-2012",
    year: "2012",
    tag: "SKILLS FOR ALL",
    title: "Free Vocational Training Begins",
    desc: "Launched skill-training centres focused on practical, job-oriented learning in tailoring, embroidery, and craft techniques for women.",
    badge: "Skills · Opportunity",
    image: "/images/projects/upsdm-tailor.jpg",
    alt: "Free vocational sewing training",
    badgeType: "secondary",
    icon: Sparkles,
  },
  {
    id: "m-2015",
    year: "2015",
    tag: "FORMAL INSTITUTION",
    title: "Khajani Welfare Society Takes Shape",
    desc: "Formally registered under the Societies Registration Act, 1860, giving an institutional structure to widen our reach across the region.",
    badge: "Growth · Purpose",
    image: "/images/about/team-working.jpg",
    alt: "Khajani team members in planning session",
    badgeType: "secondary",
    icon: Building2,
  },
  {
    id: "m-2018",
    year: "2018",
    tag: "WIDER INCLUSION",
    title: "Skills Reach Wider Communities",
    desc: "Extended programmes in vocational learning to groups including inmates at Nari Niketan and school-going girls across diverse settings.",
    badge: "Inclusion · Capability",
    image: "/images/about/classroom.jpg",
    alt: "Women in community training class",
    badgeType: "secondary",
    icon: Users,
  },
  {
    id: "m-2020",
    year: "2020",
    tag: "HEALTH & DIGNITY",
    title: "Supporting Menstrual Hygiene",
    desc: "Installed 25 sanitary napkin vending machines and incinerators across schools and colleges, improving menstrual hygiene access for young girls.",
    badge: "Dignity · Access",
    image: "/images/projects/sanitary-napkin-vending.jpg",
    alt: "Sanitary napkin vending machine installation",
    badgeType: "secondary",
    icon: Heart,
  },
  {
    id: "m-2021",
    year: "2021",
    tag: "COVID RESPONSE",
    title: "Skills Put to Work in Crisis",
    desc: "Produced and distributed over 500,000 cotton masks and 500 PPE kits—turning artisan skills into a vital community frontline response.",
    badge: "Crisis Response",
    image: "/images/media/news-clipping-10.jpg",
    alt: "PPE kit and mask distribution reporting",
    quote: "“When circumstances changed, skills found a new purpose.”",
    badgeType: "secondary",
    icon: Sparkles,
  },
  {
    id: "m-2023",
    year: "2023",
    tag: "REMEDIAL EDUCATION",
    title: "EDUDAKSH Remedial Learning",
    desc: "Tailored remedial-learning initiative for girls aged 10–14 in government schools, strengthening foundational education and confidence.",
    badge: "Learning · Confidence",
    image: "/images/projects/kla-students.jpg",
    alt: "EDUDAKSH learning academy students",
    badgeType: "secondary",
    icon: GraduationCap,
  },
  {
    id: "m-2025",
    year: "2025",
    tag: "GI RECOGNITION",
    title: "Mathura Zari Poshak GI Landmark",
    desc: "Formal Geographical Indication (GI) recognition for Mathura Zari Poshak, establishing Khajani as the Registered Proprietor protecting this sacred craft.",
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
    tag: "JOURNEY CONTINUES",
    title: "Same Roots. A Wider Purpose",
    desc: "Touching over 22,000 women, artisans, and families across 152 villages through skill development, craft heritage, and community empowerment.",
    badge: "22,000+ Women Reached",
    image: "/images/about/hero-women-training.jpg",
    alt: "Khajani team and artisans today",
    quote: "“People · Skills · Heritage · Opportunity”",
    badgeType: "accent",
    icon: Sparkles,
  },
];

export default function HorizontalTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  // Drag & Swipe tracking
  const isDragging = useRef(false);
  const startX = useRef(0);
  const dragDistance = useRef(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(MILESTONES.length - 1, prev + 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    dragDistance.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    dragDistance.current = e.touches[0].clientX - startX.current;
  };

  const handleTouchEnd = () => {
    if (dragDistance.current < -40) handleNext();
    else if (dragDistance.current > 40) handlePrev();
    dragDistance.current = 0;
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    dragDistance.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    dragDistance.current = e.clientX - startX.current;
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      if (dragDistance.current < -40) handleNext();
      else if (dragDistance.current > 40) handlePrev();
    }
    isDragging.current = false;
    dragDistance.current = 0;
  };

  // Calculate 3D card transformation with natural, subtle depth
  const getCardTransform = (index: number) => {
    const offset = index - activeIndex;
    const absOffset = Math.abs(offset);

    // Keep visible up to 2 preview cards on either side
    if (absOffset > 2) {
      return {
        display: "none",
        zIndex: 0,
        opacity: 0,
        transform: "translateX(0px)",
      };
    }

    const isMobile = windowWidth < 640;
    const isTablet = windowWidth >= 640 && windowWidth < 1024;
    const isLaptop = windowWidth >= 1024 && windowWidth < 1440;

    const spacing = isMobile ? 105 : isTablet ? 135 : isLaptop ? 155 : 175;
    const translateX = offset * spacing;
    const rotateY = offset === 0 ? 0 : offset > 0 ? -8 : 8;
    const translateZ = offset === 0 ? 0 : -absOffset * (isMobile ? 25 : 40);
    const scale = offset === 0 ? 1 : Math.max(0.86, 1 - absOffset * 0.07);
    const zIndex = 30 - absOffset * 5;

    return {
      transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      zIndex,
      opacity: 1,
      filter: offset === 0 ? "none" : "brightness(0.96)",
      transition: "all 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
    };
  };

  return (
    <section
      id="timeline"
      className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 bg-[#FAF7F2] text-[#1C2D42] overflow-hidden border-y border-[#EAE2D5] select-none"
    >
      {/* Anchor targets */}
      <span id="timeline-part-1" className="absolute -top-24 left-0 pointer-events-none" />
      <span id="timeline-part-2" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[260px] rounded-full bg-[#E5A93C]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[260px] rounded-full bg-[#C85A32]/8 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ─── Header: Moments that made a difference ─── */}
        <div className="relative text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
          <AnimeReveal variant="fade-up">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold tracking-[0.25em] text-[#8C7A6B] uppercase mb-1.5">
              <span>— OUR JOURNEY —</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C2D42] tracking-tight leading-tight">
              Moments that{" "}
              <span className="text-[#C85A32] italic font-serif font-normal">
                made a difference.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#718096] mt-2 leading-relaxed max-w-xl mx-auto font-light">
              From small beginnings to a larger impact — explore the milestones that continue to shape a more inclusive tomorrow.
            </p>
          </AnimeReveal>

          {/* Cursive Calligraphy positioned safely */}
          <div className="hidden lg:block absolute -right-10 sm:-right-24 top-2 font-serif italic text-xl sm:text-2xl text-[#C85A32]/85 pointer-events-none select-none -rotate-6 text-left leading-snug">
            People <br />
            <span className="ml-3">Purpose</span> <br />
            <span className="ml-6 text-[#A32A29]">Progress</span>
          </div>
        </div>

        {/* ─── 3D Cover Flow Carousel Stage ─── */}
        <div className="relative w-full flex items-center justify-center h-[460px] sm:h-[480px] md:h-[500px]">

          {/* Left Flank: Arched Gateway Illustration */}
          <div className="hidden sm:flex absolute left-2 sm:left-4 xl:left-8 top-1/2 -translate-y-1/2 items-center z-20 pointer-events-none select-none">
            <div className="relative w-20 sm:w-24 xl:w-28 aspect-[3/4] rounded-t-[50px] sm:rounded-t-[60px] xl:rounded-t-[70px] rounded-b-xl overflow-hidden border-2 border-white shadow-xl bg-white">
              <img
                src="/images/about/timeline-left-arch.jpg"
                alt="The Beginning Archway"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous milestone"
            className={`absolute left-3 sm:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E2D9CC] shadow-xl flex items-center justify-center text-[#1C2D42] transition-all duration-300 ${
              activeIndex === 0
                ? "opacity-35 cursor-not-allowed"
                : "hover:bg-[#C85A32] hover:text-white hover:border-[#C85A32] hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeIndex === MILESTONES.length - 1}
            aria-label="Next milestone"
            className={`absolute right-3 sm:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E2D9CC] shadow-xl flex items-center justify-center text-[#1C2D42] transition-all duration-300 ${
              activeIndex === MILESTONES.length - 1
                ? "opacity-35 cursor-not-allowed"
                : "hover:bg-[#C85A32] hover:text-white hover:border-[#C85A32] hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <ChevronRight size={22} />
          </button>

          {/* Right Flank: Palace Heritage Illustration */}
          <div className="hidden sm:flex absolute right-2 sm:right-4 xl:right-8 top-1/2 -translate-y-1/2 items-center z-20 pointer-events-none select-none">
            <div className="relative w-20 sm:w-24 xl:w-28 aspect-[3/4] rounded-t-[50px] sm:rounded-t-[60px] xl:rounded-t-[70px] rounded-b-xl overflow-hidden border-2 border-white shadow-xl bg-white">
              <img
                src="/images/about/timeline-right-palace.jpg"
                alt="Heritage Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* 3D Cards Perspective Container */}
          <div
            className="relative w-full h-[460px] sm:h-[480px] md:h-[500px] overflow-visible flex items-center justify-center cursor-grab active:cursor-grabbing"
            style={{ perspective: "1100px", transformStyle: "preserve-3d" }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {MILESTONES.map((m, idx) => {
              const isActive = activeIndex === idx;
              const cardStyle = getCardTransform(idx);
              const IconComp = m.icon;

              return (
                <div
                  key={m.id}
                  onClick={() => setActiveIndex(idx)}
                  style={cardStyle}
                  className={`absolute top-1/2 left-1/2 w-[290px] sm:w-[320px] md:w-[340px] h-[400px] sm:h-[415px] md:h-[430px] rounded-3xl p-4 sm:p-5 bg-white border transition-all duration-400 cursor-pointer flex flex-col justify-between overflow-hidden select-none ${
                    isActive
                      ? "border-[#E5A93C] ring-4 ring-[#E5A93C]/25 shadow-2xl"
                      : "border-[#EAE2D5] shadow-lg hover:border-[#E5A93C]/50"
                  }`}
                >
                  {/* Background Watermark Year */}
                  <span
                    className={`absolute top-2 right-4 text-6xl sm:text-7xl font-serif font-black tracking-tighter transition-all duration-400 pointer-events-none select-none ${
                      isActive ? "text-[#E5A93C]/15 scale-105" : "text-[#1C2D42]/5"
                    }`}
                  >
                    {m.year}
                  </span>

                  {/* Top Row: Year, Tag & Milestone Number */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="inline-flex items-center gap-1.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                            isActive ? "bg-[#C85A32] ring-2 ring-[#C85A32]/30" : "bg-[#C85A32]/60"
                          }`}
                        />
                        <span className="font-serif font-bold text-base text-[#1C2D42]">
                          {m.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[9px] font-bold uppercase tracking-wider text-[#C85A32] bg-[#C85A32]/10 px-2 py-0.5 rounded-full truncate max-w-[150px]">
                          {m.tag}
                        </span>
                        <span className="text-[11px] font-mono font-semibold text-[#8C7A6B]">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif font-bold text-sm sm:text-base text-[#1C2D42] leading-snug mb-1.5 line-clamp-2">
                      {m.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-[11px] sm:text-xs text-[#5A6A7E] leading-relaxed font-light line-clamp-3">
                      {m.desc}
                    </p>
                  </div>

                  {/* Card Image Area + Footer */}
                  <div className="relative z-10 mt-2">
                    <div className="relative rounded-xl overflow-hidden h-32 sm:h-36 w-full bg-[#F4EFE6] border border-black/5 shadow-xs group/img">
                      <img
                        src={m.image}
                        alt={m.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />

                      {/* Optional Quote Badge */}
                      {m.quote && (
                        <div className="absolute bottom-1.5 left-1.5 right-1.5 p-1 px-2 rounded-lg bg-black/75 backdrop-blur-md text-white text-[10px] border border-white/10 shadow-xs">
                          <p className="font-serif italic text-amber-300 leading-tight truncate">
                            {m.quote}
                          </p>
                        </div>
                      )}

                      {/* Special GI Badge for 2025 */}
                      {m.year === "2025" && (
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#C85A32] text-white shadow-xs flex items-center gap-1 border border-white/20">
                            <Award size={10} /> GI Registered
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Bottom Category Badge */}
                    <div className="mt-2 pt-1.5 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] text-[#8C7A6B] font-medium">
                      <div className="inline-flex items-center gap-1.5 truncate">
                        <IconComp size={12} className="text-[#C85A32] shrink-0" />
                        <span className="truncate">{m.badge}</span>
                      </div>
                      <span className="font-mono text-[10px] text-[#A09080] shrink-0">
                        {m.year}
                      </span>
                    </div>
                  </div>

                  {/* Inactive card subtle tone overlay */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-[#FAF7F2]/20 rounded-3xl pointer-events-none" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Bottom Timeline Scrubber Rail (Clean single-line layout) ─── */}
        <div className="mt-8 sm:mt-10 max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* 2007 Label on Left End */}
            <div className="text-left shrink-0">
              <div className="font-serif font-bold text-xl sm:text-2xl text-[#1C2D42] leading-none">2007</div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold text-[#8C7A6B] uppercase mt-1">
                THE BEGINNING
              </div>
            </div>

            {/* Horizontal Rail with Milestone Nodes */}
            <div className="relative flex-1 h-[2px] bg-[#D8C7B5] mx-2 sm:mx-6 flex items-center justify-between">
              {/* Progress active line fill */}
              <div
                className="absolute left-0 top-0 bottom-0 bg-[#C85A32] transition-all duration-500"
                style={{
                  width: `${(activeIndex / (MILESTONES.length - 1)) * 100}%`,
                }}
              />

              {MILESTONES.map((m, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Jump to ${m.year}`}
                    className="relative z-10 flex items-center justify-center p-1.5 cursor-pointer group"
                  >
                    {isActive ? (
                      /* Active enlarged node ring */
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C85A32] border-2 border-white shadow-md ring-4 ring-[#C85A32]/25 flex items-center justify-center transition-all duration-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    ) : (
                      /* Inactive node circle */
                      <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-[#C85A32] bg-[#FAF7F2] group-hover:scale-125 group-hover:bg-[#C85A32] transition-all duration-200" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Today Label on Right End */}
            <div className="text-right shrink-0">
              <div className="font-serif font-bold text-xl sm:text-2xl text-[#1C2D42] leading-none">Today</div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold text-[#8C7A6B] uppercase mt-1">
                A BRIGHTER TOMORROW
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
