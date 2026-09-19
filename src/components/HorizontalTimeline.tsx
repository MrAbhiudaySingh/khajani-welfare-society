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
    desc: "Khajani began its journey in Mathura with the establishment of a women's skill-training institute—creating a dedicated space where women could learn practical skills and explore new possibilities through training.",
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
    desc: "Extended our work into rural Mathura and adjoining village clusters, establishing localized vocational workshops to make practical training directly accessible to rural women at their doorsteps.",
    badge: "Access · Outreach",
    image: "/images/about/area-community.jpg",
    alt: "Rural community outreach",
    badgeType: "secondary",
    icon: Users,
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

  // Calculate 3D card transformation with spacious, balanced depth
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

    const spacing = isMobile ? 115 : isTablet ? 155 : isLaptop ? 180 : 205;
    const translateX = offset * spacing;
    const rotateY = offset === 0 ? 0 : offset > 0 ? -10 : 10;
    const translateZ = offset === 0 ? 0 : -absOffset * (isMobile ? 30 : 50);
    const scale = offset === 0 ? 1 : Math.max(0.85, 1 - absOffset * 0.08);
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
        <div className="relative w-full flex items-center justify-center h-[510px] sm:h-[530px] md:h-[550px]">

          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous milestone"
            className={`absolute left-2 sm:left-6 lg:left-10 xl:left-16 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E2D9CC] shadow-xl flex items-center justify-center text-[#1C2D42] transition-all duration-300 ${
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
            className={`absolute right-2 sm:right-6 lg:right-10 xl:right-16 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E2D9CC] shadow-xl flex items-center justify-center text-[#1C2D42] transition-all duration-300 ${
              activeIndex === MILESTONES.length - 1
                ? "opacity-35 cursor-not-allowed"
                : "hover:bg-[#C85A32] hover:text-white hover:border-[#C85A32] hover:scale-105 active:scale-95 cursor-pointer"
            }`}
          >
            <ChevronRight size={22} />
          </button>

          {/* 3D Cards Perspective Container */}
          <div
            className="relative w-full h-[510px] sm:h-[530px] md:h-[550px] overflow-visible flex items-center justify-center cursor-grab active:cursor-grabbing"
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
                  className={`absolute top-1/2 left-1/2 w-[310px] sm:w-[350px] md:w-[380px] lg:w-[400px] h-[460px] sm:h-[480px] md:h-[495px] rounded-3xl p-5 sm:p-6 bg-white border transition-all duration-400 cursor-pointer flex flex-col justify-between overflow-hidden select-none ${
                    isActive
                      ? "border-[#E5A93C] ring-4 ring-[#E5A93C]/25 shadow-2xl"
                      : "border-[#EAE2D5] shadow-lg hover:border-[#E5A93C]/50"
                  }`}
                >
                  {/* Background Watermark Year */}
                  <span
                    className={`absolute top-2 right-4 text-7xl sm:text-8xl font-serif font-black tracking-tighter transition-all duration-400 pointer-events-none select-none ${
                      isActive ? "text-[#E5A93C]/15 scale-105" : "text-[#1C2D42]/5"
                    }`}
                  >
                    {m.year}
                  </span>

                  {/* Top Row: Year, Tag & Milestone Number */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="inline-flex items-center gap-1.5">
                        <span
                          className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                            isActive ? "bg-[#C85A32] ring-2 ring-[#C85A32]/30" : "bg-[#C85A32]/60"
                          }`}
                        />
                        <span className="font-serif font-bold text-base sm:text-lg text-[#1C2D42]">
                          {m.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C85A32] bg-[#C85A32]/10 px-2.5 py-0.5 rounded-full truncate max-w-[170px]">
                          {m.tag}
                        </span>
                        <span className="text-xs font-mono font-semibold text-[#8C7A6B]">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C2D42] leading-snug mb-2">
                      {m.title}
                    </h3>

                    {/* Card Description - Full text restored */}
                    <p className="text-xs sm:text-[13px] text-[#5A6A7E] leading-relaxed font-light">
                      {m.desc}
                    </p>
                  </div>

                  {/* Card Image Area + Footer */}
                  <div className="relative z-10 mt-3 pt-2">
                    <div className="relative rounded-2xl overflow-hidden h-36 sm:h-40 md:h-42 w-full bg-[#F4EFE6] border border-black/5 shadow-xs group/img">
                      <img
                        src={m.image}
                        alt={m.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover/img:opacity-80 transition-opacity" />

                      {/* Optional Quote Badge */}
                      {m.quote && (
                        <div className="absolute bottom-2 left-2 right-2 p-1.5 px-2.5 rounded-xl bg-black/75 backdrop-blur-md text-white text-[11px] border border-white/10 shadow-xs">
                          <p className="font-serif italic text-amber-300 text-xs leading-tight">
                            {m.quote}
                          </p>
                        </div>
                      )}

                      {/* Special GI Badge for 2025 */}
                      {m.year === "2025" && (
                        <div className="absolute top-2.5 right-2.5">
                          <span className="px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#C85A32] text-white shadow-xs flex items-center gap-1 border border-white/20">
                            <Award size={11} /> GI Registered
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Card Bottom Category Badge */}
                    <div className="mt-3 pt-2 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#8C7A6B] font-medium">
                      <div className="inline-flex items-center gap-1.5 truncate">
                        <IconComp size={13} className="text-[#C85A32] shrink-0" />
                        <span className="truncate">{m.badge}</span>
                      </div>
                      <span className="font-mono text-[11px] text-[#A09080] shrink-0">
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
