"use client";

import Image from "next/image";

const FEATURES = [
  {
    publication: "Vogue Africa",
    issue: "SS 2025 Issue",
    quote:
      "A designer unafraid of confrontation — Maita's mudcloth kaftan is the standout piece of the season.",
    category: "Print & Digital",
    year: "2025",
    color: "bg-[#C8352A]",
  },
  {
    publication: "Arise Magazine",
    issue: "Heritage Edition",
    quote:
      "The sculptural drape collection reframes African tailoring for a generation that refuses to be categorised.",
    category: "Print",
    year: "2024",
    color: "bg-electric",
  },
  {
    publication: "Zimbabwe Fashion Week",
    issue: "Annual Show",
    quote:
      "The most talked-about collection on the runway. Every piece felt like a statement.",
    category: "Runway",
    year: "2024",
    color: "bg-[#013E37]",
  },
  {
    publication: "Elle Africa",
    issue: "Power Issue",
    quote: "Maita is building a visual language that is entirely her own.",
    category: "Digital",
    year: "2023",
    color: "bg-[#1a1a2e]",
  },
];

const LOGOS = [
  "Vogue Africa",
  "Arise",
  "Elle Africa",
  "ZFW",
  "Afropunk",
  "Sunday Times Style",
];

export default function Features() {
  return (
    <section className="bg-gray-950 relative overflow-hidden">
      {/* Top line */}
      <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* ── Feature cards ── */}
      <div className="px-14 py-16 max-md:px-6 max-md:py-12">
        <div className="flex justify-between items-end mb-12 max-md:flex-col max-md:items-start max-md:gap-4">
          <div>
            <p className="flex items-center gap-3 font-raleway text-[0.55rem] tracking-[0.35em] uppercase text-white/25 mb-3">
              Press & Features
            </p>
            <h2 className="font-bebas text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-wide text-white">
              THE WORK
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.35)" }}
              >
                HAS BEEN
              </span>
              <br />
              <span className="text-electric">NOTICED.</span>
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-white/8 rounded-xl"
            >
              <div className="p-4 md:p-6">
                {/* Header row */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bebas text-[1.3rem] tracking-[0.06em] text-white leading-none mb-1">
                      {f.publication}
                    </h3>
                    <span className="font-raleway text-[0.58rem] tracking-[0.15em] uppercase text-white/30">
                      {f.issue}
                    </span>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-bebas text-[1.5rem] text-white/80 leading-none block">
                      {f.year}
                    </span>
                    <span className="font-raleway text-[0.48rem] tracking-[0.18em] uppercase text-white/20 block">
                      {f.category}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <p className="font-raleway italic text-[0.85rem] leading-[1.7] text-white/45 font-light">
                    &ldquo;{f.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
