import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
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
  CheckCircle2 
} from "lucide-react";

const CulturePage = () => {
  const scrollToScene2 = () => {
    const el = document.getElementById("rooted-in-braj");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <div className="bg-stone-950 text-stone-100 min-h-screen selection:bg-amber-500/30 selection:text-amber-200">
        
        {/* ========================================================= */}
        {/* SCENE 1 — HERO                                            */}
        {/* Look: One exceptional full-width real Khajani photo       */}
        {/* Hands/craft/process over generic temple                   */}
        {/* ========================================================= */}
        <section className="relative min-h-[90vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-20">
          {/* Full-width real photo with cinematic overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/projects/poshak-zari.jpg"
              alt="Artisan hands embroidering Mathura Zari Poshak"
              className="w-full h-full object-cover object-center brightness-[0.38] contrast-105 scale-102 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/65 to-stone-950/45" />
            <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply pointer-events-none" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase mb-6 backdrop-blur-md">
              <Sparkles size={13} className="text-amber-400" />
              CULTURE & HERITAGE · MATHURA & BRAJ
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight font-medium leading-[1.14] mb-6">
              Where tradition remains a living practice.
            </h1>

            {/* Sub-lead */}
            <div className="space-y-4 text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-light mb-10">
              <p>
                In Braj, heritage lives not only in monuments and memory, but in the hands of people who continue to practise its arts, crafts and traditions.
              </p>
              <p className="text-stone-400 text-sm sm:text-base">
                Khajani Welfare Society works with this living knowledge—supporting traditional skills, strengthening artisan capabilities and creating new possibilities for practices rooted in the cultural life of Mathura and Braj.
              </p>
            </div>

            {/* Highlights pill */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-serif text-amber-200/90 mb-10">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                Sanjhi
              </span>
              <span className="text-amber-500">·</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                Zari Poshak
              </span>
              <span className="text-amber-500">·</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                Panchgavya
              </span>
              <span className="text-amber-500">·</span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                Temple Flower Traditions
              </span>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={scrollToScene2}
                className="btn-3d-accent inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-xl transition-all duration-300 hover:gap-3 cursor-pointer shadow-lg shadow-amber-500/20"
              >
                Explore the Story <ArrowDown size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 2 — ROOTED IN BRAJ                                  */}
        {/* ========================================================= */}
        <section id="rooted-in-braj" className="py-24 sm:py-28 bg-stone-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block mb-2">
                ROOTED IN BRAJ
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                A cultural landscape shaped by devotion, craft and everyday practice.
              </h2>
              <div className="mt-6 space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Mathura, Vrindavan and the wider Braj region carry a distinctive cultural identity shaped over generations. Here, devotional traditions are closely connected with the things people make—from attire created for deities and intricate traditional art to objects associated with worship and materials that move through temple and community life.
                </p>
                <p className="text-amber-200/90 font-medium">
                  For Khajani, preserving this heritage does not mean keeping tradition static. It means helping traditional knowledge remain practised, relevant and connected with the people who carry it forward.
                </p>
              </div>
            </div>

            {/* 4 Pillars: PLACE, PEOPLE, PRACTICE, CONTINUITY */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-stone-900/60 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm space-y-3">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-amber-400">
                  PLACE
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Braj gives these traditions their cultural context.
                </p>
              </div>

              <div className="bg-stone-900/60 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm space-y-3">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-amber-400">
                  PEOPLE
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Artisans and communities carry their knowledge.
                </p>
              </div>

              <div className="bg-stone-900/60 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm space-y-3">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-amber-400">
                  PRACTICE
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Skills survive when they continue to be used.
                </p>
              </div>

              <div className="bg-stone-900/60 border border-white/10 rounded-2xl p-6 sm:p-7 backdrop-blur-sm space-y-3">
                <div className="text-xs font-bold tracking-[0.2em] uppercase text-amber-400">
                  CONTINUITY
                </div>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Learning and opportunity help traditions move forward.
                </p>
              </div>
            </div>

            {/* Heritage proposal note */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-stone-300 text-xs sm:text-sm leading-relaxed">
              <p>
                The heritage proposal itself identifies traditional crafts, deity Poshak making, Sanjhi, flower-waste products and cow-dung-based products as areas where cultural preservation can connect with skills and livelihood opportunities.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 3 — LIVING HERITAGE                                 */}
        {/* Look: Conceptual / editorial, process & detail            */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-28 bg-stone-900/40 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block">
                  LIVING HERITAGE
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                  Heritage stays alive through practice.
                </h2>
                <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    A traditional skill carries more than a technique. It carries knowledge of materials, motifs, processes, cultural meaning and ways of making developed over generations.
                  </p>
                  <p>
                    Khajani's approach brings preservation and participation together—creating opportunities to learn traditional skills, practise them, strengthen craftsmanship and carry the knowledge forward.
                  </p>
                </div>

                {/* Accent callout */}
                <div className="border-l-2 border-amber-400 pl-5 py-2 space-y-2 bg-white/[0.02] rounded-r-xl">
                  <p className="font-serif text-lg text-white font-medium">
                    And continuity does not always mean repetition.
                  </p>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    Traditional practices can also evolve. Different strands of Braj's cultural knowledge can meet—traditional artistic languages can find expression through locally rooted materials, familiar techniques can take contemporary forms, and established skills can lead to new kinds of making without losing their cultural connection.
                  </p>
                </div>

                {/* Conceptual Evolution Chain */}
                <div className="pt-4">
                  <div className="text-[11px] uppercase tracking-widest text-amber-400/90 font-bold mb-3">
                    The Heritage Pathway
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-300">
                    <span className="px-3 py-1.5 bg-stone-900 border border-white/10 rounded-lg">Traditional Knowledge</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-3 py-1.5 bg-stone-900 border border-white/10 rounded-lg">Skill</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-3 py-1.5 bg-stone-900 border border-white/10 rounded-lg">Practice</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-3 py-1.5 bg-stone-900 border border-white/10 rounded-lg">Innovation</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-3 py-1.5 bg-stone-900 border border-white/10 rounded-lg">Opportunity</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-lg">Continuity</span>
                  </div>
                </div>
              </div>

              {/* Editorial process visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/projects/pathway-heritage-artisan.jpg"
                    alt="Process of traditional craftsmanship at Khajani"
                    className="w-full h-80 sm:h-96 object-cover object-center brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-950/80 backdrop-blur-md border border-white/10 text-xs text-stone-300">
                    <span className="font-semibold text-amber-400 uppercase tracking-wider block mb-0.5">
                      Process in Action
                    </span>
                    Every motif, stitch, and stencil is a dialogue between ancestral memory and living hands.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 4 — ROYAL SANJHI ART                                */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-28 bg-stone-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              {/* Visuals: Close-ups, stencils, training */}
              <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/projects/royal-sanjhi-training.jpg"
                    alt="Sanjhi Art Training at Khajani"
                    className="w-full h-72 sm:h-80 object-cover object-center"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src="/images/projects/poshak-sanjhi.jpg"
                      alt="Intricate Sanjhi paper cutting motif"
                      className="w-full h-40 sm:h-48 object-cover object-center"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 bg-stone-900 flex flex-col justify-center p-5">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-400 mb-1">
                      Material Cross-over
                    </span>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Sanjhi stencils adapted across handmade paper, cow-dung composites, and fabric embellishments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sanjhi narrative & numbers */}
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block">
                  ROYAL SANJHI ART
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                  Intricate stories, shaped by hand.
                </h2>
                <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Sanjhi is deeply associated with the cultural traditions of Braj. Its delicate practice brings together stencil work, intricate paper cutting, pattern creation, traditional motifs and visual storytelling.
                  </p>
                  <p>
                    Khajani's work with Sanjhi focuses on keeping this knowledge in active practice—introducing the art to new learners, strengthening artisan skills and exploring ways in which its distinctive visual language can continue to find relevance in contemporary creative work. The uploaded heritage material also documents Sanjhi training with students from government schools and colleges.
                  </p>
                </div>

                {/* Verified Metrics */}
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">
                      250+
                    </div>
                    <div className="text-xs font-medium text-stone-300 uppercase tracking-wider mt-1">
                      Sanjhi Artists Trained
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">
                      120+
                    </div>
                    <div className="text-xs font-medium text-stone-300 uppercase tracking-wider mt-1">
                      Women Earning Through Sanjhi Art
                    </div>
                  </div>
                </div>

                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                  But Sanjhi at Khajani is not limited to one material or one application. Its distinctive patterns and artistic language are also being explored alongside other traditional materials and forms of making—allowing heritage and innovation to meet naturally.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 5 — MATHURA ZARI POSHAK                             */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-28 bg-stone-900/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block">
                  MATHURA ZARI POSHAK
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                  Craftsmanship woven into Mathura's devotional tradition.
                </h2>
                <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    The making of Radha-Krishna Poshak is closely connected with the devotional and craft traditions of Mathura and Vrindavan.
                  </p>
                  <p>
                    From design and fabric preparation to cutting, sewing, zari work and embellishment, each stage draws upon specialised skills developed and refined by artisans.
                  </p>
                  <p className="text-stone-400 text-xs sm:text-sm">
                    Khajani's documented work includes a 30-day programme involving 125 artisans in Vrindavan, strengthening skills in Poshak design, fabric preparation, cutting, sewing and embellishment while retaining traditional techniques and introducing contemporary production considerations.
                  </p>
                </div>

                {/* Training Stats */}
                <div className="grid grid-cols-2 gap-4 py-2">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">
                      125
                    </div>
                    <div className="text-xs font-medium text-stone-300 uppercase tracking-wider mt-1">
                      Artisans Trained
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">
                      30 Days
                    </div>
                    <div className="text-xs font-medium text-stone-300 uppercase tracking-wider mt-1">
                      of Structured Artisan Training
                    </div>
                  </div>
                </div>

                {/* Elegant GI Badge & Secondary Link */}
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-amber-300">
                    <Award size={16} /> A craft with a recognised geographical identity.
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Mathura Zari Poshak has received Geographical Indication recognition, formally connecting the product with its geographical and craft identity.
                  </p>
                  <Link
                    to="/gi-recognition"
                    className="inline-flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-amber-400 hover:text-amber-300 transition-colors pt-1"
                  >
                    Explore GI Recognition <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Rich Textile & Zari Visual */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/projects/poshak-zari.jpg"
                    alt="Intricate Zari work on Mathura deity poshak"
                    className="w-full h-96 sm:h-[480px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-950/85 backdrop-blur-md border border-white/10 text-xs text-stone-300">
                    <span className="font-semibold text-amber-300 block mb-0.5">
                      Devotional Needlework
                    </span>
                    Zari, resham, and gota patti embellishment carried out stitch by stitch by local women artisans.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 6 — PANCHGAVYA & TRADITIONAL MATERIALS               */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-28 bg-stone-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block mb-2">
                PANCHGAVYA · TRADITIONAL MATERIALS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                Traditional resources. New possibilities.
              </h2>
              <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                Cows have a distinctive place in the cultural landscape of Braj. Khajani's work explores how materials connected with this tradition can also become a basis for practical skills, responsible use and creative making.
              </p>
              <p className="mt-2 text-stone-400 text-sm leading-relaxed">
                Training in Panchgavya and cow-dung-based product making has included the creation of diyas, incense cups, deity idols, decorative pieces, mementos, planters and other traditional products.
              </p>
            </div>

            {/* Convergence feature: Where traditions meet */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
              <div className="lg:col-span-7 bg-gradient-to-br from-amber-500/10 via-stone-900 to-stone-950 border border-amber-500/20 rounded-3xl p-8 sm:p-10 space-y-5">
                <div className="text-xs uppercase font-bold tracking-[0.2em] text-amber-400">
                  Where traditions meet.
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white leading-snug">
                  Merging sacred materials with the delicate visual language of Sanjhi.
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Khajani is also exploring ways in which cow-dung-based material and the artistic language of Sanjhi can come together, creating contemporary products that draw from more than one strand of Braj's traditional knowledge.
                </p>
                <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                  This is an important part of what living heritage means: respecting where a tradition comes from while allowing skill, material and creativity to create new possibilities.
                </p>

                <div className="pt-2">
                  <div className="inline-block px-4 py-2 rounded-xl bg-stone-950 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-serif">
                    Traditional Material × Traditional Art × Contemporary Making
                  </div>
                </div>
              </div>

              {/* Photos demonstrating evolution */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <img
                      src="/images/projects/brij-surabhi-diya.jpg"
                      alt="Eco-friendly diyas crafted from cow dung"
                      className="w-full h-44 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <img
                      src="/images/projects/brij-surabhi-cow-craft.jpg"
                      alt="Cow dung craft and incense making"
                      className="w-full h-44 object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <img
                      src="/images/projects/brij-surabhi-idol-painting.jpg"
                      alt="Artisan painting sacred deity idols crafted with traditional materials"
                      className="w-full h-72 sm:h-92 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 7 — TEMPLE FLOWER MANAGEMENT                        */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-28 bg-stone-900/60 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="/images/projects/brij-surabhi-flower-recycling.jpg"
                    alt="Repurposing sacred temple flower offerings in Mathura"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-950/85 backdrop-blur-md border border-white/10 text-xs text-stone-300">
                    <span className="font-semibold text-amber-300 block mb-0.5">
                      Responsible Circularity
                    </span>
                    Collected floral offerings processed gently into natural incense and handcrafted paper.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-400 block">
                  TEMPLE FLOWER MANAGEMENT
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                  Giving sacred flowers another life.
                </h2>
                <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Flowers are integral to temple and devotional practice across Mathura and Vrindavan. Once offered, however, large quantities of floral material require thoughtful handling.
                  </p>
                  <p>
                    Khajani's approach sees these flowers not simply as waste, but as a resource that can be responsibly repurposed through skill and making.
                  </p>
                </div>

                {/* Product types */}
                <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-amber-400/90 mb-2.5">
                    Transformed Products Documented in Heritage Proposal:
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {["Dhoopbatti", "Agarbatti", "Sambrani Cups", "Itra", "Paper"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg bg-stone-950 border border-white/10 text-amber-200 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Poetic statement */}
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="text-base sm:text-lg font-serif text-white font-medium">
                    Offered in devotion. Reimagined through skill.
                  </div>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    The initiative brings together cultural sensitivity, practical skills, responsible resource use and livelihood possibilities, while addressing the challenge of temple flower waste.
                  </p>
                </div>

                {/* Flow formula */}
                <div className="pt-2">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-300 font-mono">
                    <span className="px-2.5 py-1 bg-stone-900 border border-white/10 rounded">Temple Flowers</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-2.5 py-1 bg-stone-900 border border-white/10 rounded">Responsible Collection</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-2.5 py-1 bg-stone-900 border border-white/10 rounded">Processing</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-2.5 py-1 bg-stone-900 border border-white/10 rounded">Making</span>
                    <span className="text-amber-400">→</span>
                    <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-300 rounded">New Products</span>
                  </div>
                  <p className="text-[11px] text-stone-500 mt-2">
                    The proposal also connects this work with reducing waste and pollution pressure, including pollution affecting the sacred Yamuna river.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 8 — WHERE TRADITIONS CONNECT (Editorial Mosaic)     */}
        {/* ========================================================= */}
        <section className="py-24 sm:py-32 bg-stone-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-amber-400 block">
                HERITAGE IN PRACTICE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                Different traditions. A shared connection to Braj.
              </h2>
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed pt-2">
                This is where the story converges—not four isolated initiatives, but an integrated living ecology of cultural knowledge.
              </p>
            </div>

            {/* Editorial 4-part Mosaic / convergence narrative */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-14">
              <div className="p-8 rounded-3xl bg-stone-900/50 border border-white/10 space-y-3">
                <div className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  01 · Royal Sanjhi Art
                </div>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Sanjhi carries an intricate visual language of pattern, precision and storytelling.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-stone-900/50 border border-white/10 space-y-3">
                <div className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  02 · Mathura Zari Poshak
                </div>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Mathura Zari Poshak carries specialised textile and embellishment skills rooted in devotional craftsmanship.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-stone-900/50 border border-white/10 space-y-3">
                <div className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  03 · Panchgavya & Traditional Materials
                </div>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Panchgavya and cow-based materials connect traditional resources with useful and increasingly creative forms of making.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-stone-900/50 border border-white/10 space-y-3">
                <div className="text-xs uppercase font-bold tracking-widest text-amber-400">
                  04 · Temple Flower Management
                </div>
                <p className="text-sm text-stone-300 leading-relaxed">
                  Temple flower management gives materials used in worship another productive life through skill and thoughtful reuse.
                </p>
              </div>
            </div>

            {/* Seamless Convergence Box */}
            <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-stone-900 to-stone-950 border border-amber-500/20 text-center space-y-6 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-serif text-white">
                And increasingly, these boundaries can meet.
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-stone-300">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  An art form can meet a different traditional material.
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  A traditional process can find a contemporary application.
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  A cultural practice can create a new livelihood opportunity.
                </div>
              </div>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-2">
                For Khajani, this is what makes heritage living: it is respected, practised and passed forward, while remaining open to thoughtful new possibilities.
              </p>
              <div className="pt-2">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-amber-300">
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

          </div>
        </section>

        {/* ========================================================= */}
        {/* SCENE 9 — CLOSING                                         */}
        {/* ========================================================= */}
        <section className="relative py-28 sm:py-36 bg-gradient-to-b from-stone-950 to-stone-900 border-t border-white/5 text-center overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold tracking-widest uppercase">
              CULTURE · CRAFT · CONTINUITY
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight font-medium leading-tight">
              What is carried forward remains alive.
            </h2>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light">
              <p>
                Khajani's work with heritage begins with respect—for the place from which a tradition comes, for the people who carry its knowledge, for the materials that shape it and for the hands that continue to practise it.
              </p>
              <p className="text-stone-400">
                From Sanjhi and Mathura Zari Poshak to Panchgavya-based making and the thoughtful reuse of temple flowers, the forms may differ, but the purpose remains connected:
              </p>
              <p className="text-amber-200/90 font-serif text-lg">
                To keep knowledge in practice and create space for it to continue.
              </p>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/our-work"
                className="btn-3d-accent inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-xl transition-all"
              >
                Explore Our Work <ArrowRight size={15} />
              </Link>
              <Link
                to="/gi-recognition"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-widest uppercase rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 hover:text-white transition-all"
              >
                GI Recognition <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default CulturePage;
