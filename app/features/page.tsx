"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LOGOS = [
  "Vogue Africa",
  "Arise",
  "Elle Africa",
  "ZFW",
  "Afropunk",
  "Sunday Times Style",
];

const PRESS = [
  {
    publication: "Vogue Africa",
    issue: "SS 2025 Issue",
    category: "Print & Digital",
    year: "2025",
    color: "bg-[#C8352A]",
    quote:
      "A designer unafraid of confrontation — Maita's mudcloth kaftan is the standout piece of the season.",
    excerpt:
      "In a season crowded with safe choices, Maita arrived with something that demanded attention. The mudcloth kaftan — structured, bold, and rooted in West African textile tradition — read as both historical document and future vision. It is the kind of garment that changes the room.",
    href: "#",
  },
  {
    publication: "Arise Magazine",
    issue: "Heritage Edition",
    category: "Print",
    year: "2024",
    color: "bg-[#2a3fff]",
    quote:
      "The sculptural drape collection reframes African tailoring for a generation that refuses to be categorised.",
    excerpt:
      "Maita's Heritage Series is not nostalgia. It is excavation. She takes the forms and fabrics of tradition and rebuilds them around a contemporary body — one that moves, refuses, and demands to be seen on its own terms. The result is clothing that feels ancient and entirely new.",
    href: "#",
  },
  {
    publication: "Zimbabwe Fashion Week",
    issue: "Annual Show · 2024",
    category: "Runway",
    year: "2024",
    color: "bg-[#013E37]",
    quote:
      "The most talked-about collection on the runway. Every piece felt like a statement.",
    excerpt:
      "Opening with the Ancestral Wrap and closing with The Void Dress, Maita's ZFW presentation was the clearest articulation yet of what her studio stands for: garments as confrontation, fabric as argument. The audience was silent. Then they were not.",
    href: "#",
  },
  {
    publication: "Elle Africa",
    issue: "Power Issue",
    category: "Digital",
    year: "2023",
    color: "bg-[#1a1a2e]",
    quote: "Maita is building a visual language that is entirely her own.",
    excerpt:
      "There are designers who reference Africa and designers who are from it. Maita is firmly the latter — and that distinction shows in every decision, from the fabrics sourced from local weavers to the bodies she chooses to dress. This is not world fashion. This is Zimbabwean fashion.",
    href: "#",
  },
  {
    publication: "Afropunk",
    issue: "Style Feature",
    category: "Digital",
    year: "2023",
    color: "bg-[#C8352A]",
    quote: "Defiant, considered, and impossible to ignore.",
    excerpt:
      "Afropunk has long championed designers who refuse the mainstream, and Maita fits that lineage precisely. Her Utility Overcoat — waxed cotton, oversized, worn as armour — became the most photographed piece at last year's festival.",
    href: "#",
  },
  {
    publication: "Sunday Times Style",
    issue: "Emerging Designers",
    category: "Print",
    year: "2022",
    color: "bg-[#2a3fff]",
    quote: "One of five African designers to watch in 2023.",
    excerpt:
      "Named in the Sunday Times Style annual emerging designers feature, Maita was cited for her commitment to sustainable sourcing, her distinct visual language, and her refusal to dilute her work for international audiences.",
    href: "#",
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-[#05050a]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-[#05050a] pt-16 relative overflow-hidden">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#2a3fff] to-transparent opacity-60" />

        <span
          className="hidden lg:block absolute bottom-[-1rem] right-[-1rem] font-bebas font-black leading-none text-transparent pointer-events-none select-none"
          style={{
            fontSize: "clamp(8rem,16vw,16rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.03)",
          }}
        >
          PRESS
        </span>

        <div className="px-14 py-16 relative z-10 max-md:px-6 max-md:py-12">
          <p className="font-raleway text-[0.52rem] tracking-[0.4em] uppercase text-white/20 mb-8">
            Press & Features — Araura Studio
          </p>
          <h1 className="font-bebas text-[clamp(3.5rem,9vw,9rem)] leading-[0.9] tracking-tight mb-8">
            <span className="block text-white">THE WORK</span>
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.4)" }}
            >
              HAS BEEN
            </span>
            <span className="block text-[#2a3fff]">NOTICED.</span>
          </h1>
          <p className="font-raleway text-[0.88rem] font-light leading-[1.85] text-white/35 max-w-[48ch]">
            Press coverage, editorial features and runway reviews from
            publications across Africa and beyond.
          </p>
        </div>

        {/* Logo strip */}
        <div className="border-t border-white/[0.05] px-14 py-6 max-md:px-6">
          <div className="flex items-center flex-wrap">
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="flex-1 min-w-[100px] border-r border-white/[0.05] last:border-r-0 px-5 py-2 flex items-center justify-center group max-sm:min-w-[80px] max-sm:px-3"
              >
                <span className="font-bebas text-[0.95rem] tracking-[0.1em] text-white/15 group-hover:text-white/45 transition-colors duration-300 text-center">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press Cards ── */}
      <section className="px-14 py-14 max-md:px-6 max-md:py-10">
        <p className="flex items-center gap-3 font-raleway text-[0.55rem] tracking-[0.35em] uppercase text-white/20 mb-10">
          <span className="inline-block w-8 h-px bg-white/15 flex-shrink-0" />
          {PRESS.length} Features
        </p>

        <div className="flex flex-col gap-[1px] bg-white/[0.04]">
          {PRESS.map((item, i) => (
            <div
              key={i}
              className="bg-[#05050a] hover:bg-[#0d0d18] transition-colors duration-300 group"
            >
              {/* Colour tab */}
              <div
                className={`${item.color} h-[2px] w-full group-hover:h-[3px] transition-all duration-200`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_1fr] gap-0">
                {/* Left — publication meta */}
                <div className="px-8 py-8 border-r border-white/[0.05] flex flex-col justify-between max-lg:border-r-0 max-lg:border-b max-lg:px-6 max-lg:py-6">
                  <div>
                    <h3 className="font-bebas text-[1.2rem] tracking-[0.06em] text-white leading-none mb-1">
                      {item.publication}
                    </h3>
                    <span className="font-raleway text-[0.52rem] tracking-[0.15em] uppercase text-white/25 block">
                      {item.issue}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col gap-1">
                    <span className="font-raleway text-[0.48rem] tracking-[0.2em] uppercase text-white/20">
                      {item.category}
                    </span>
                    <span className="font-bebas text-[1.5rem] text-white/10 leading-none">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Centre — quote */}
                <div className="px-8 py-8 border-r border-white/[0.05] max-lg:border-r-0 max-lg:border-b max-lg:px-6 max-lg:py-6">
                  <div className="border-l-[2px] border-[#2a3fff] pl-5 mb-4">
                    <p className="font-raleway italic text-[0.88rem] leading-[1.7] text-white/50 font-light">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Right — excerpt + link */}
                <div className="px-8 py-8 flex flex-col justify-between max-lg:px-6 max-lg:py-6">
                  <p className="font-raleway text-[0.75rem] font-light leading-[1.85] text-white/30 mb-6">
                    {item.excerpt}
                  </p>
                  <a
                    href={item.href}
                    className="font-raleway text-[0.58rem] tracking-[0.2em] uppercase text-white/20 no-underline hover:text-[#2a3fff] transition-colors flex items-center gap-2 hover:gap-3"
                  >
                    Read feature →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="px-14 py-20 border-t border-white/[0.05] max-md:px-6 max-md:py-14">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 font-raleway text-[0.55rem] tracking-[0.35em] uppercase text-white/20 mb-8">
            <span className="inline-block w-8 h-px bg-[#2a3fff] flex-shrink-0" />
            Press Enquiries
          </p>
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-wide text-white mb-6">
            WRITING ABOUT
            <br />
            <span className="text-[#2a3fff]">Maita?</span>
          </h2>
          <p className="font-raleway text-[0.85rem] font-light leading-[1.85] text-white/35 max-w-[44ch] mb-10">
            For press requests, image licensing, interview enquiries and review
            samples, get in touch directly. We respond to all press enquiries
            within 48 hours.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="/contact"
              className="font-bebas text-[0.85rem] tracking-[0.2em] uppercase text-[#05050a] bg-white px-8 py-3.5 no-underline hover:bg-[#2a3fff] hover:text-white transition-colors"
            >
              Press Contact →
            </a>
            <a
              href="/collections"
              className="font-raleway text-[0.68rem] tracking-[0.15em] uppercase text-white/30 no-underline hover:text-white/60 transition-colors flex items-center gap-2 hover:gap-3 border-b border-white/10 hover:border-white/30 pb-px"
            >
              View Collections →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
