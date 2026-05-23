"use client";

import Image from "next/image";

export default function AboutDesigner() {
  return (
    <section className="bg-[#05050a] relative overflow-hidden">

      {/* Top electric line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#2a3fff] to-transparent opacity-60" />

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">

        {/* ── Left — portrait ── */}
        <div className="relative overflow-hidden border-r border-white/[0.05] min-h-[70vw] lg:min-h-0">

          {/* Replace div with your portrait image */}
          <Image
                src="/erik-torres-PXkb185SIGE-unsplash.jpg"
                alt="Roberta — Designer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent opacity-70" />

          {/* Bottom name stamp */}
          <div className="absolute bottom-8 left-8 z-10">
            <span
              className="font-bebas text-[4rem] leading-none tracking-wide text-transparent pointer-events-none select-none"
              style={{ WebkitTextStroke: "1px rgba(200,212,255,0.15)" }}
            >
              ROBERTA
            </span>
          </div>

          {/* Year badge */}
          <div className="absolute top-8 right-8 z-10 border border-white/10 px-4 py-2">
            <span className="font-bebas text-[0.75rem] tracking-[0.3em] text-white/30">
              EST. 2019
            </span>
          </div>
        </div>

        {/* ── Right — text ── */}
        <div className="px-14 py-20 flex flex-col justify-between relative max-md:px-6 max-md:py-12">

          <div>
            {/* Eyebrow */}
            <p className="flex items-center gap-3 font-raleway text-[0.58rem] tracking-[0.35em] uppercase text-white/25 mb-10">
              <span className="inline-block w-8 h-px bg-white/20 flex-shrink-0" />
              The Designer
            </p>

            {/* Headline */}
            <h2 className="font-bebas text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] tracking-wide text-white mb-8">
              FASHION IS<br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" }}
              >
                NOT COSTUME.
              </span><br />
              IT IS <span className="text-[#2a3fff]">SKIN.</span>
            </h2>

            {/* Pull quote */}
            {/* <div className="border-l-[2px] border-[#2a3fff] pl-6 mb-10">
              <p className="font-raleway italic text-[1rem] leading-[1.7] text-white/55 font-light">
                &ldquo;Every garment I make is a confrontation between the body
                and the culture that tries to define it. I design for the
                person who refuses the definition.&rdquo;
              </p>
            </div> */}

            {/* Bio */}
            <div className="space-y-5 mb-12">
              <p className="font-raleway text-[0.85rem] font-light leading-[1.9] text-white/40">
                Roberta is a Harare-based fashion designer working at the
                intersection of traditional African textile and contemporary
                structural design. Since 2019, her work has interrogated
                what it means to dress a body that carries history.
              </p>
              <p className="font-raleway text-[0.85rem] font-light leading-[1.9] text-white/40">
                Her collections draw on mudcloth geometry, sculptural
                drape and the politics of fabric — each piece hand-developed
                in her Harare studio over weeks of iteration. Nothing leaves
                the studio until it is exactly right.
              </p>
            </div>

            {/* Credentials */}
            {/* <div className="grid grid-cols-2 gap-[1px] bg-white/[0.05] mb-12">
              {[
                { label: "Based in",  value: "Harare, Zimbabwe"     },
                { label: "Founded",   value: "2019"                 },
                { label: "Approach",  value: "Structural & Heritage" },
                { label: "Materials", value: "Natural & Reclaimed"  },
              ].map((d) => (
                <div key={d.label} className="bg-[#05050a] px-5 py-4 hover:bg-[#0f0f18] transition-colors">
                  <span className="font-raleway text-[0.48rem] tracking-[0.25em] uppercase text-white/20 block mb-1">{d.label}</span>
                  <span className="font-bebas text-[0.85rem] tracking-[0.08em] text-white/70">{d.value}</span>
                </div>
              ))}
            </div> */}
          </div>

          <div className="flex items-center gap-6 pr-4 flex-wrap">
            <a
              href="#contact"
              className="font-bebas rounded-lg text-[0.85rem] tracking-[0.2em] uppercase text-[#05050a] bg-white px-8 py-3.5 no-underline hover:bg-[#2a3fff] hover:text-white transition-colors duration-200"
            >
              Commission a Piece
            </a>
            <a
              href="#"
              className="font-raleway text-[0.72rem] font-light tracking-[0.15em] uppercase text-white/35 no-underline hover:text-white/60 transition-colors flex items-center gap-2 hover:gap-3"
            >
              View CV →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
