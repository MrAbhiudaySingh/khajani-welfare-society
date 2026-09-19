import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { AnimeReveal } from "@/components/AnimeReveal";
import AuroraBackground from "@/components/AuroraBackground";
import { MediaLightbox, MediaItem } from "@/components/MediaLightbox";
import {
  ArrowDown,
  ArrowRight,
  Sparkles,
  Eye,
  ZoomIn,
  Newspaper,
  Award,
  Layers,
  Calendar
} from "lucide-react";

/* ─── SCENE 2: Field Gallery Categorized Items ─── */
interface FieldPhoto extends MediaItem {
  id: string;
  category: "skills" | "education" | "heritage" | "community" | "events";
}

const fieldPhotos: FieldPhoto[] = [
  // Skills & Training
  {
    id: "fp-1",
    category: "skills",
    image: "/images/projects/upsdm-tailor.jpg",
    title: "Vocational Tailoring & Garment Construction Training",
  },
  {
    id: "fp-2",
    category: "skills",
    image: "/images/projects/brij-hunar-training.jpg",
    title: "Hands-on Practical Training Session",
  },
  {
    id: "fp-3",
    category: "skills",
    image: "/images/about/computer-lab.jpg",
    title: "Computer Literacy Lab Session",
  },
  {
    id: "fp-4",
    category: "skills",
    image: "/images/about/apparel-beauty-lab.jpg",
    title: "Apparel & Beauty Wellness Lab",
  },
  {
    id: "fp-5",
    category: "skills",
    image: "/images/projects/hero-training.jpg",
    title: "Classroom Training and Skill Demonstration",
  },
  {
    id: "fp-6",
    category: "skills",
    image: "/images/about/hero-women-training.jpg",
    title: "Women Vocational Trainees in Class",
  },

  // Education
  {
    id: "fp-7",
    category: "education",
    image: "/images/projects/kla-students.jpg",
    title: "Khajani Learning Academy Students",
  },
  {
    id: "fp-8",
    category: "education",
    image: "/images/projects/kla-classroom-1.jpg",
    title: "Remedial Learning Classroom",
  },
  {
    id: "fp-9",
    category: "education",
    image: "/images/projects/digi-shala.jpg",
    title: "Digi-Shala Digital Education Activity",
  },
  {
    id: "fp-10",
    category: "education",
    image: "/images/projects/edudaksh-gallery.jpg",
    title: "EduDaksh Community Learning Gathering",
  },

  // Heritage & Crafts
  {
    id: "fp-11",
    category: "heritage",
    image: "/images/projects/royal-sanjhi-training.jpg",
    title: "Sanjhi Craft Workshop & Artisan Training",
  },
  {
    id: "fp-12",
    category: "heritage",
    image: "/images/projects/poshak-zari.jpg",
    title: "Mathura Zari Poshak Handcrafted Motifs",
  },
  {
    id: "fp-13",
    category: "heritage",
    image: "/images/get-involved/artisan-woman-embroidery.jpg",
    title: "Traditional Zari Embroidery on Stretched Loom",
  },
  {
    id: "fp-14",
    category: "heritage",
    image: "/images/projects/brij-surabhi-diya.jpg",
    title: "Eco-Friendly Cow Dung Diya Making",
  },

  // Health & Community
  {
    id: "fp-15",
    category: "community",
    image: "/images/projects/blood-donation-camp.jpg",
    title: "Community Voluntary Blood Donation Camp",
  },
  {
    id: "fp-16",
    category: "community",
    image: "/images/projects/sanitary-napkin-vending.jpg",
    title: "Sanitary Hygiene Awareness & Distribution",
  },
  {
    id: "fp-17",
    category: "community",
    image: "/images/projects/shg-federation.jpg",
    title: "Women Self-Help Group Village Federation",
  },
  {
    id: "fp-18",
    category: "community",
    image: "/images/projects/plantation-drive.jpg",
    title: "Ecological Tree Plantation Drive in Braj",
  },

  // Events
  {
    id: "fp-19",
    category: "events",
    image: "/images/projects/daan-utsav.jpg",
    title: "Daan Utsav Joy of Giving Celebration",
  },
  {
    id: "fp-20",
    category: "events",
    image: "/images/projects/shakti-ek-adhaar-3.jpg",
    title: "Annual Community Assembly and Celebration",
  },
  {
    id: "fp-21",
    category: "events",
    image: "/images/projects/brij-surabhi-flower-recycling.jpg",
    title: "Temple Flower Recycling Demonstration Event",
  },
  {
    id: "fp-22",
    category: "events",
    image: "/images/projects/shakti-ek-adhaar-1.jpg",
    title: "Shakti Ek Adhaar Felicitations & Gathering",
  },
];

/* ─── SCENE 3: Recognition & Milestones ─── */
interface RecognitionItem extends MediaItem {
  institution?: string;
  year?: string;
}

const recognitionItems: RecognitionItem[] = [
  {
    image: "/images/projects/gi-certificate-1147.jpg",
    title: "Geographical Indication (GI) Certificate — Mathura Sanjhi Craft (No. 1147)",
    institution: "Geographical Indications Registry, Government of India",
    year: "2024",
  },
  {
    image: "/images/about/hema-malini-award.jpg",
    title: "State Felicitation for Grassroots Women Livelihoods",
    institution: "District Administration & Parliamentary Recognition, Mathura",
    year: "2022",
  },
  {
    image: "/images/about/accomplishments.jpg",
    title: "Institutional Accolades & Milestone Trophies",
    institution: "Regional & State CSR Partners",
  },
  {
    image: "/images/about/awards-dignitaries.jpg",
    title: "Community Welfare & Rural Development Citation",
    institution: "Government of Uttar Pradesh",
    year: "2021",
  },
  {
    image: "/images/media/press-review-3.jpg",
    title: "Regional Women Changemaker Honour",
    institution: "Media & Civil Society Forum",
    year: "2023",
  },
  {
    image: "/images/about/collab-upsdm.jpg",
    title: "Uttar Pradesh Skill Development Mission (UPSDM) Training Partner Citation",
    institution: "UPSDM, Govt. of UP",
    year: "2019",
  },
];

/* ─── SCENE 4: Public & Institutional Moments (Pictures Only — No Names, No Dates, No Captions) ─── */
const publicMoments: string[] = [
  "/images/about/om-birla.jpg",
  "/images/about/awards-dignitaries.jpg",
  "/images/about/hema-malini-award.jpg",
  "/images/about/govt-collab-1.jpg",
  "/images/about/govt-collab-2.jpg",
  "/images/about/hema-malini.jpg",
];

/* ─── SCENE 5: Media Archive (Actual Newspaper Clippings) ─── */
interface MediaArchiveItem extends MediaItem {
  publication: string;
  headline: string;
}

const mediaArchiveList: MediaArchiveItem[] = [
  {
    image: "/images/media/news-clipping-1.jpg",
    publication: "The Hindu / Dainik Jagran",
    headline: "Coverage of Khajani Welfare Society's initiatives for women empowerment and vocational training across Braj",
    date: "July 2021",
  },
  {
    image: "/images/media/news-clipping-10.jpg",
    publication: "India Today / The Times of India",
    headline: "Mathura jail inmates produce PPE kits in collaborative initiative developed with IIT Kanpur and Khajani",
    date: "2020",
  },
  {
    image: "/images/media/news-clipping-11.jpg",
    publication: "The Times of India",
    headline: "Feature on protective kit manufacturing and livelihood training programs at Mathura correctional facility",
    date: "2020",
  },
  {
    image: "/images/media/news-clipping-14.jpg",
    publication: "Dainik Jagran",
    headline: "मथुरा की महिलाओं को कौशल से नई पहचान: Feature on women empowerment felicitation and artisan Thakur Ji poshak",
    date: "2018",
  },
  {
    image: "/images/media/news-clipping-2.jpg",
    publication: "Amar Ujala / Dainik Jagran",
    headline: "EduDaksh community education program launch and society's rural footprint across western UP",
    date: "2023",
  },
  {
    image: "/images/media/news-clipping-16.jpg",
    publication: "Amar Ujala / Dainik Jagran",
    headline: "Women's excellence ceremony honours outstanding grassroots female changemakers",
    date: "2024",
  },
  {
    image: "/images/media/news-clipping-4.jpg",
    publication: "Live Hindustan / Amar Ujala",
    headline: "Feature on skill training outreach expanding across 18,000+ beneficiaries in Mathura district",
  },
  {
    image: "/images/media/news-clipping-6.jpg",
    publication: "Amar Ujala / Regional Press",
    headline: "Sanitary napkin vending installation serving over 2,000 rural women alongside hygiene drives",
    date: "2022",
  },
  {
    image: "/images/media/news-clipping-7.jpg",
    publication: "Regional Daily",
    headline: "Digital literacy classrooms and remedial learning centres initiated in rural Mathura villages",
    date: "Dec 2021",
  },
  {
    image: "/images/media/news-clipping-12.jpg",
    publication: "Hindustan / Amar Ujala",
    headline: "Girls' educational support, Rakhi artisan showcase, and skill exhibition coverage",
  },
  {
    image: "/images/media/news-clipping-13.jpg",
    publication: "Amar Ujala / Hindustan",
    headline: "Blood donation camp, International Women's Day honors, and community self-reliance workshops",
  },
  {
    image: "/images/media/news-clipping-5.jpg",
    publication: "Amar Ujala",
    headline: "Extensive reporting on vocational programs reaching hundreds of women across rural Mathura",
    date: "2018",
  },
];

/* ─── SCENE 6: The Visual Archive (Masonry Wall — Pure Photography, No Text Boxes) ─── */
const visualArchivePhotos: string[] = [
  "/images/projects/kla-students.jpg",
  "/images/projects/royal-sanjhi-training.jpg",
  "/images/about/hero-women-training.jpg",
  "/images/projects/shg-federation.jpg",
  "/images/projects/brij-hunar-class.jpg",
  "/images/about/classroom.jpg",
  "/images/projects/upsdm-tailor.jpg",
  "/images/projects/poshak-zari.jpg",
  "/images/about/institute-entrance.jpg",
  "/images/projects/blood-donation-camp.jpg",
  "/images/about/shg-groups.jpg",
  "/images/projects/digi-shala.jpg",
  "/images/projects/edudaksh-gallery.jpg",
  "/images/projects/brij-surabhi-cow.jpg",
  "/images/projects/shakti-ek-adhaar-3.jpg",
  "/images/about/team-working.jpg",
];

const MediaPage = () => {
  // Lightbox state
  const [lightboxItems, setLightboxItems] = useState<MediaItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Field Gallery Category Filter
  const [selectedFilter, setSelectedFilter] = useState<"all" | "skills" | "education" | "heritage" | "community" | "events">("all");

  const filterOptions = [
    { key: "all", label: "All" },
    { key: "skills", label: "Skills & Training" },
    { key: "education", label: "Education" },
    { key: "heritage", label: "Heritage & Crafts" },
    { key: "community", label: "Health & Community" },
    { key: "events", label: "Events" },
  ] as const;

  const filteredFieldPhotos = selectedFilter === "all"
    ? fieldPhotos
    : fieldPhotos.filter((p) => p.category === selectedFilter);

  const openLightbox = (items: MediaItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 1 — HERO
          GALLERY & MEDIA · KHAJANI WELFARE SOCIETY
          The work, in pictures.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-[#FAF7F2] overflow-hidden pt-16 lg:pt-24 pb-20 border-b border-[#EAE2D5]">
        <AuroraBackground variant="light" intensity={0.6} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Headline & Intro (6 cols) */}
            <AnimeReveal variant="fade-up" className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE7DC] border border-[#DFCFC0] text-[#A6623B] text-xs font-bold tracking-[0.22em] uppercase mb-6 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A6623B]" />
                GALLERY &amp; MEDIA · KHAJANI WELFARE SOCIETY
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#142033] tracking-tight leading-[1.12] mb-6">
                The work, in pictures.
              </h1>

              <p className="text-base sm:text-lg text-[#55606E] font-sans font-light leading-relaxed max-w-xl mb-10">
                A visual record of Khajani Welfare Society—its programmes, learning spaces, traditional crafts, community initiatives, events and milestones across Mathura and Braj.
              </p>

              <div>
                <button
                  type="button"
                  onClick={() => scrollToSection("gallery-field")}
                  className="btn-3d-accent inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
                >
                  Explore the Gallery <ArrowDown size={14} className="animate-bounce" />
                </button>
              </div>
            </AnimeReveal>

            {/* Right: Sophisticated Asymmetric Photo Collage (6 cols) */}
            <AnimeReveal variant="fade-left" delay={150} className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-3 sm:gap-4 p-2 bg-white/70 rounded-3xl border border-[#EAE2D5] shadow-[0_16px_36px_rgba(20,32,51,0.08)] backdrop-blur-xs">
                
                {/* 1. Large Top Left */}
                <div className="col-span-7 row-span-2 overflow-hidden rounded-2xl border border-[#EAE2D5] group">
                  <img
                    src="/images/projects/royal-sanjhi-training.jpg"
                    alt="Sanjhi artisan craft training"
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 2. Top Right */}
                <div className="col-span-5 overflow-hidden rounded-2xl border border-[#EAE2D5] group">
                  <img
                    src="/images/projects/kla-students.jpg"
                    alt="Students in classroom"
                    className="w-full h-24 sm:h-26 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 3. Middle Right */}
                <div className="col-span-5 overflow-hidden rounded-2xl border border-[#EAE2D5] group">
                  <img
                    src="/images/about/hero-women-training.jpg"
                    alt="Vocational trainees"
                    className="w-full h-24 sm:h-26 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 4. Bottom Left */}
                <div className="col-span-5 overflow-hidden rounded-2xl border border-[#EAE2D5] group">
                  <img
                    src="/images/projects/brij-hunar-class.jpg"
                    alt="Skill development center"
                    className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 5. Bottom Right */}
                <div className="col-span-7 overflow-hidden rounded-2xl border border-[#EAE2D5] group">
                  <img
                    src="/images/about/apparel-beauty-lab.jpg"
                    alt="Apparel lab"
                    className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </AnimeReveal>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 2 — FROM THE FIELD
          PHOTO GALLERY
          Khajani in action.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="gallery-field" className="py-20 lg:py-24 bg-white border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                PHOTO GALLERY
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Khajani in action.
            </h2>
            <p className="text-sm sm:text-base text-[#55606E] font-light mt-3 leading-relaxed">
              Across classrooms, training spaces, craft workshops and community settings, these photographs offer glimpses of Khajani’s work as it happens.
            </p>
          </AnimeReveal>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {filterOptions.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setSelectedFilter(opt.key)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedFilter === opt.key
                    ? "bg-[#142033] text-white shadow-sm"
                    : "bg-[#FAF7F2] text-[#55606E] border border-[#EAE2D5] hover:border-[#D8C7B0] hover:text-[#142033]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Clean Grid — Photographs Open Immediately Into Lightbox, No Paragraphs Underneath */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {filteredFieldPhotos.map((item, idx) => (
              <AnimeReveal key={item.id} variant="fade-up" delay={(idx % 4) * 60}>
                <div
                  onClick={() => openLightbox(filteredFieldPhotos, idx)}
                  className="group relative rounded-2xl overflow-hidden border border-[#EAE2D5] bg-[#FAF7F2] aspect-[4/3] cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title || "Khajani in action"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-[#142033]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/90 text-[#142033] flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 3 — RECOGNITION & MILESTONES
          RECOGNITION
          Moments of recognition.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="recognition" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                RECOGNITION
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Moments of recognition.
            </h2>
            <p className="text-sm sm:text-base text-[#55606E] font-light mt-3 leading-relaxed">
              Over the years, Khajani’s work has been acknowledged through awards, certificates and institutional recognition. This section brings together selected moments from that journey.
            </p>
          </AnimeReveal>

          {/* Visual Grid of Awards, Trophies, Certificates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recognitionItems.map((item, idx) => (
              <AnimeReveal key={item.title} variant="fade-up" delay={idx * 80}>
                <div
                  onClick={() => openLightbox(recognitionItems, idx)}
                  className="bg-white rounded-3xl border border-[#EAE2D5] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF7F2] border-b border-[#EAE2D5]">
                    <img
                      src={item.image}
                      alt={item.title || "Recognition"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#142033]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white text-[#142033] flex items-center justify-center shadow-md">
                        <Eye size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Minimal Verified Information Only */}
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-lg text-[#142033] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    {(item.institution || item.year) && (
                      <p className="text-xs text-[#7A7165] font-mono tracking-wider uppercase">
                        {item.institution}
                        {item.institution && item.year && " · "}
                        {item.year}
                      </p>
                    )}
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 4 — PUBLIC & INSTITUTIONAL MOMENTS
          IN CONVERSATION · IN PUBLIC
          People, platforms and occasions.
          STRICT: Pictures only. No names, captions, designations, dates, or text.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                IN CONVERSATION · IN PUBLIC
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              People, platforms and occasions.
            </h2>
          </AnimeReveal>

          {/* Carefully curated premium photo mosaic (Large images, pictures only) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {publicMoments.map((src, idx) => (
              <AnimeReveal key={src} variant="fade-up" delay={idx * 90}>
                <div
                  onClick={() => openLightbox(publicMoments.map((img) => ({ image: img })), idx)}
                  className="rounded-3xl overflow-hidden border border-[#EAE2D5] bg-[#FAF7F2] aspect-[4/3] group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 relative"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#142033]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/95 text-[#142033] flex items-center justify-center shadow-lg">
                      <ZoomIn size={18} />
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 5 — MEDIA COVERAGE
          MEDIA ARCHIVE
          Khajani in the media.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section id="media-archive" className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                MEDIA ARCHIVE
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              Khajani in the media.
            </h2>
            <p className="text-sm sm:text-base text-[#55606E] font-light mt-3 leading-relaxed">
              Selected media coverage documenting Khajani Welfare Society, its programmes, initiatives and public work.
            </p>
          </AnimeReveal>

          {/* Media Cards with Actual Newspaper Clippings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaArchiveList.map((item, idx) => (
              <AnimeReveal key={item.image} variant="fade-up" delay={(idx % 3) * 80}>
                <div
                  onClick={() => openLightbox(mediaArchiveList, idx)}
                  className="bg-white rounded-3xl border border-[#EAE2D5] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  {/* Actual Newspaper Clipping Image */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF7F2] border-b border-[#EAE2D5] p-2">
                    <img
                      src={item.image}
                      alt={item.headline}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />
                    <div className="absolute inset-0 bg-[#142033]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-white text-[#142033] flex items-center justify-center shadow-md">
                        <Eye size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#A6623B]">
                          {item.publication}
                        </span>
                        {item.date && (
                          <span className="text-[10px] font-mono text-[#7A7165]">
                            {item.date}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#142033] leading-snug mb-4 line-clamp-2">
                        {item.headline}
                      </h3>
                    </div>

                    <div className="pt-3 border-t border-[#EAE2D5]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#A9442A] group-hover:text-[#88351F] inline-flex items-center gap-1.5 transition-colors">
                        View Coverage <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════════════════
          SCENE 6 — THE VISUAL ARCHIVE
          MORE FROM KHAJANI
          More moments from the journey.
          STRICT: Large masonry-style photo wall. No cards, no text boxes, no categories.
         ══════════════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#EAE2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <AnimeReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A6623B]">
                MORE FROM KHAJANI
              </span>
              <span className="w-8 h-[1px] bg-[#D8C7B0]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#142033] tracking-tight">
              More moments from the journey.
            </h2>
            <p className="text-sm sm:text-base text-[#55606E] font-light mt-3 leading-relaxed">
              Not every photograph needs a story or a caption. Together, they form a wider visual record of the people, activities and occasions that have shaped Khajani’s work.
            </p>
          </AnimeReveal>

          {/* Large Masonry-Style Photo Wall (Pure Photography Only) */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5 mb-16">
            {visualArchivePhotos.map((src, idx) => (
              <AnimeReveal key={src + idx} variant="fade-up" delay={(idx % 4) * 50}>
                <div
                  onClick={() => openLightbox(visualArchivePhotos.map((img) => ({ image: img })), idx)}
                  className="break-inside-avoid rounded-2xl overflow-hidden border border-[#EAE2D5] bg-[#FAF7F2] group cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 relative"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#142033]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-white text-[#142033] flex items-center justify-center shadow-md">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </AnimeReveal>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="text-center pt-8 border-t border-[#EAE2D5]">
            <Link
              to="/projects"
              className="btn-3d-accent inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider rounded-xl shadow-md"
            >
              Explore Our Work <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </section>

      {/* ─── Lightbox Viewer ─── */}
      <MediaLightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </Layout>
  );
};

export default MediaPage;
