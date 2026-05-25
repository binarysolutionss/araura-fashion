"use client";
import Link from "next/link";

const PRESS = [
  {
    publication: "Vogue Africa",
    issue: "SS 2025 Issue",
    category: "Print & Digital",
    year: "2025",
    color: "bg-[#C8352A]",
    quote:
      "A designer unafraid of confrontation — Maita's mudcloth kaftan is the standout piece of the season. Her work sits at the intersection of heritage and provocation in a way few designers on the continent have managed.",
    href: "#",
  },
  {
    publication: "Arise Magazine",
    issue: "Heritage Edition",
    category: "Print",
    year: "2024",
    color: "bg-[#2a3fff]",
    quote:
      "The sculptural drape collection reframes African tailoring for a generation that refuses to be categorised. There is a rigour to Maita's construction that feels genuinely new.",
    href: "#",
  },
  {
    publication: "Zimbabwe Fashion Week",
    issue: "Annual Runway Show",
    category: "Runway",
    year: "2024",
    color: "bg-[#013E37]",
    quote:
      "The most talked-about collection on the runway. Every piece felt like a statement — not about fashion, but about what it means to exist in a body shaped by history.",
    href: "#",
  },
  {
    publication: "Elle Africa",
    issue: "Power Issue",
    category: "Digital",
    year: "2023",
    color: "bg-[#C8352A]",
    quote:
      "Maita is building a visual language that is entirely her own. The clothes are confrontational in the best possible way — they demand to be looked at.",
    href: "#",
  },
  {
    publication: "Afropunk",
    issue: "Style Feature",
    category: "Digital",
    year: "2023",
    color: "bg-[#2a3fff]",
    quote:
      "This is what African fashion looks like when it refuses to perform for anyone. Raw, structural, and deeply considered.",
    href: "#",
  },
  {
    publication: "Sunday Times Style",
    issue: "Designers to Watch",
    category: "Print",
    year: "2022",
    color: "bg-[#013E37]",
    quote:
      "One of the most exciting emerging voices in Southern African fashion. Watch this space.",
    href: "#",
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

export default function FeaturesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#05050a] pt-16 relative overflow-hidden">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#2a3fff] to-transparent opacity-60" />

        <span
          className="hidden lg:block absolute bottom-[-1rem] right-[-1rem] font-bebas leading-none text-transparent pointer-events-none select-none"
          style={{
            fontSize: "clamp(8rem,18vw,18rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.03)",
          }}
        >
          PRESS
        </span>

        <div className="px-14 py-16 relative z-10 max-md:px-6 max-md:py-12">
          <p className="font-raleway text-[0.52rem] tracking-[0.4em] uppercase text-white/20 mb-8">
            Features & Press — Araura Studio
          </p>
          <h1 className="font-bebas text-[clamp(3.5rem,9vw,10rem)] leading-[0.9] tracking-wide mb-8">
            <span className="block text-white">THE WORK</span>
            <span className="block text-[#2a3fff]">HAS BEEN</span>
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.45)" }}
            >
              NOTICED.
            </span>
          </h1>
          <p className="font-raleway text-[0.88rem] font-light leading-[1.85] text-white/35 max-w-[48ch]">
            Publications, platforms and runways that have featured Maita's work
            since 2022.
          </p>
        </div>

        {/* Logo strip */}
        <div className="border-t border-white/[0.05] px-14 py-6 max-md:px-6">
          <div className="flex items-center flex-wrap">
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="flex-1 min-w-[100px] border-r border-white/[0.06] last:border-r-0 px-6 py-2 flex items-center justify-center group max-sm:min-w-[80px] max-sm:px-3"
              >
                <span className="font-bebas text-[0.95rem] tracking-[0.1em] text-white/15 group-hover:text-white/45 transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS CARDS ── */}
      <section className="bg-[#05050a] px-14 py-14 max-md:px-6 max-md:py-10">
        <p className="flex items-center gap-3 font-raleway text-[0.52rem] tracking-[0.35em] uppercase text-white/20 mb-10">
          <span className="inline-block w-6 h-px bg-white/20 flex-shrink-0" />
          {PRESS.length} Features
        </p>

        <div className="flex flex-col gap-[1px] bg-white/[0.04]">
          {PRESS.map((item, i) => (
            <div
              key={i}
              className="bg-[#05050a] hover:bg-[#0d0d18] transition-colors duration-300 group grid grid-cols-1 md:grid-cols-[180px_1fr_auto]"
            >
              {/* Colour year column */}
              <div
                className={`${item.color} flex flex-col items-start justify-between p-6 max-md:flex-row max-md:items-center`}
              >
                <span className="font-bebas text-[2.5rem] text-white/20 leading-none max-md:text-[1.5rem]">
                  {item.year}
                </span>
                <span className="font-raleway text-[0.45rem] tracking-[0.2em] uppercase text-white/50">
                  {item.category}
                </span>
              </div>

              {/* Main content */}
              <div className="px-8 py-7 max-md:px-5 max-md:py-5">
                <h3 className="font-bebas text-[1.4rem] tracking-[0.06em] text-white leading-none mb-1">
                  {item.publication}
                </h3>
                <span className="font-raleway text-[0.55rem] tracking-[0.15em] uppercase text-white/30 block mb-5">
                  {item.issue}
                </span>
                <div className="border-l-[2px] border-[#2a3fff] pl-5">
                  <p className="font-raleway italic text-[0.85rem] leading-[1.75] text-white/40 font-light">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Read link */}
              <div className="flex items-center px-8 max-md:px-5 max-md:pb-6">
                <Link
                  href={item.href}
                  className="font-raleway text-[0.55rem] tracking-[0.2em] uppercase text-white/20 no-underline hover:text-[#2a3fff] transition-colors flex items-center gap-2 hover:gap-3 whitespace-nowrap"
                >
                  Read
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-[#05050a] px-14 py-16 border-t border-white/[0.05] max-md:px-6 max-md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="flex items-center gap-3 font-raleway text-[0.52rem] tracking-[0.35em] uppercase text-white/20 mb-6">
              <span className="inline-block w-6 h-px bg-white/20 flex-shrink-0" />
              Press Enquiries
            </p>
            <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] tracking-wide text-white mb-6">
              WORKING ON
              <br />
              <span className="text-[#2a3fff]">SOMETHING?</span>
            </h2>
            <p className="font-raleway text-[0.85rem] font-light leading-[1.85] text-white/35 max-w-[44ch]">
              For editorial requests, styling loans, interviews or collaboration
              enquiries — reach out directly. We respond within 48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:items-end">
            < Link
              href="#"
              className="font-bebas text-[0.85rem] tracking-[0.2em] uppercase text-[#05050a] bg-white px-10 py-4 no-underline hover:bg-[#2a3fff] hover:text-white transition-colors"
            >
              press@araura.design
            </Link>
            <Link
              href="/contact"
              className="font-raleway text-[0.6rem] tracking-[0.18em] uppercase text-white/25 no-underline hover:text-white/50 transition-colors flex items-center gap-2 hover:gap-3"
            >
              Use the contact form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
