"use client";

import Image from "next/image";

const PHILOSOPHY = [
  {
    num: "01",
    title: "Fabric is Political",
    desc: "Every textile carries the weight of the hands that made it, the culture that developed it, and the histories it has survived. Choosing a fabric is never neutral. It is always a declaration.",
    color: "bg-[#C8352A]",
  },
  {
    num: "02",
    title: "The Body is Not a Canvas",
    desc: "Fashion has spent decades treating the body as something to be corrected, covered, or decorated. Maita's work starts from a different place — the body as it is, dressed as it chooses.",
    color: "bg-[#2a3fff]",
  },
  {
    num: "03",
    title: "Structure Over Trend",
    desc: "Collections are not seasonal performances. Each piece is designed to outlast the moment it was made in. Trend is noise. Structure is what remains.",
    color: "bg-[#013E37]",
  },
  {
    num: "04",
    title: "Heritage Without Nostalgia",
    desc: "Drawing on African textile traditions is not an act of preservation — it is an act of continuation. The past is not a museum. It is material.",
    color: "bg-[#C8352A]",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#05050a] pt-16 min-h-[70dvh] flex flex-col relative overflow-hidden">
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#2a3fff] to-transparent opacity-60" />

        <span
          className="hidden lg:block absolute bottom-[-1rem] right-[-1rem] font-bebas leading-none text-transparent pointer-events-none select-none"
          style={{
            fontSize: "clamp(8rem,18vw,18rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.03)",
          }}
        >
          SKIN
        </span>

        <div className="flex-1 flex flex-col justify-between px-14 py-16 relative z-10 max-md:px-6 max-md:py-12">
          <p className="font-raleway text-[0.52rem] tracking-[0.4em] uppercase text-white/20 mb-8">
            About — Araura Studio
          </p>

          <div>
            <h1 className="font-bebas text-[clamp(3.5rem,9vw,10rem)] leading-[0.9] tracking-wide mb-8">
              <span className="block text-white">FASHION</span>
              <span
                className="block text-transparent"
                style={{ WebkitTextStroke: "2px rgba(255,255,255,0.45)" }}
              >
                IS NOT
              </span>
              <span className="block text-[#2a3fff]">COSTUME.</span>
            </h1>
            <p className="font-raleway text-[0.9rem] font-light leading-[1.85] text-white/35 max-w-[50ch]">
              It is skin. A Harare-based studio building garments that confront
              before they comfort. Founded 2019.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-[#05050a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] bg-white/[0.03]">
          {/* Portrait */}
          <div className="relative overflow-hidden bg-[#0d0d18] min-h-[60vh]">
            <Image src="/lord-bishop-7SXbARXk458-unsplash.jpg" alt="Maita" fill className="object-cover object-top grayscale" sizes="(max-width:1024px) 100vw, 50vw" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent opacity-60" />
            <span
              className="absolute bottom-8 left-8 font-bebas text-[5rem] leading-none tracking-wide text-transparent pointer-events-none"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}
            >
              Maita
            </span>
          </div>

          {/* Story text */}
          <div className="px-12 py-16 flex flex-col justify-center max-md:px-6 max-md:py-10">
            <p className="flex items-center gap-3 font-raleway text-[0.52rem] tracking-[0.35em] uppercase text-white/20 mb-8">
              The Story
            </p>

            <h2 className="font-bebas text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.95] tracking-wide text-white mb-8">
              BORN FROM A<br />
              <span className="text-[#2a3fff]">REFUSAL</span>
              <br />
              TO CONFORM.
            </h2>

            <div className="space-y-5 mb-10">
              <p className="font-raleway text-[0.82rem] font-light leading-[1.9] text-white/35">
                Maita is a Harare-based fashion designer working at the
                intersection of traditional African textile and contemporary
                structural design. Since 2019, her work has interrogated what it
                means to dress a body that carries history.
              </p>
              <p className="font-raleway text-[0.82rem] font-light leading-[1.9] text-white/35">
                Her collections draw on mudcloth geometry, sculptural drape and
                the politics of fabric — each piece hand-developed in her Harare
                studio over weeks of iteration. Nothing leaves the studio until
                it is exactly right.
              </p>
              <p className="font-raleway text-[0.82rem] font-light leading-[1.9] text-white/35">
                Featured in Vogue Africa, Arise Magazine, Elle Africa, and on
                the Zimbabwe Fashion Week runway, Maita's work has established
                her as one of the most distinctive voices in contemporary
                African fashion.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-[1px] bg-white/[0.05]">
              {[
                { num: "2019", label: "Founded" },
                { num: "6+", label: "Features" },
                { num: "24+", label: "Pieces" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#05050a] px-5 py-4 text-center hover:bg-[#0d0d18] transition-colors"
                >
                  <span className="font-bebas text-[1.4rem] text-white leading-none block">
                    {s.num}
                  </span>
                  <span className="font-raleway text-[0.48rem] tracking-[0.2em] uppercase text-white/25 mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="bg-[#05050a] px-14 py-16 max-md:px-6 max-md:py-12">
        <div className="flex justify-between items-end mb-12 border-b border-white/[0.05] pb-8 max-md:flex-col max-md:items-start max-md:gap-4">
          <div>
            <p className="flex items-center gap-3 font-raleway text-[0.52rem] tracking-[0.35em] uppercase text-white/20 mb-3">
              Design Philosophy
            </p>
            <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] tracking-wide text-white">
              WHAT THE
              <br />
              <span className="text-[#2a3fff]">WORK BELIEVES</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-[1px] bg-white/[0.04]">
          {PHILOSOPHY.map((p, i) => (
            <div
              key={i}
              className="bg-[#05050a] hover:bg-[#0d0d18] transition-colors duration-300 group grid grid-cols-[60px_1fr] md:grid-cols-[60px_200px_1fr]"
            >
              {/* Colour num col */}
              <div
                className={`flex items-start justify-center pt-7`}
              >
                <span className="font-raleway text-[0.48rem] tracking-[0.2em] uppercase text-white/50">
                  {p.num}
                </span>
              </div>

              {/* Title */}
              <div className="px-8 py-7 border-r border-white/[0.05] flex items-start max-md:hidden">
                <h3 className="font-bebas text-[0.95rem] tracking-[0.06em] text-white leading-snug group-hover:text-[#2a3fff] transition-colors">
                  {p.title}
                </h3>
              </div>

              {/* Desc */}
              <div className="px-8 py-7 max-md:px-5 max-md:py-5">
                <h3 className="font-bebas text-[0.95rem] tracking-[0.06em] text-white leading-snug mb-3 md:hidden group-hover:text-[#2a3fff] transition-colors">
                  {p.title}
                </h3>
                <p className="font-raleway text-[0.8rem] font-light leading-[1.8] text-white/35">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#05050a] px-14 py-16 border-t border-white/[0.05] relative overflow-hidden max-md:px-6 max-md:py-12">
        <span
          className="hidden lg:block absolute bottom-[-2rem] right-[-1rem] font-bebas leading-none text-transparent pointer-events-none select-none"
          style={{
            fontSize: "clamp(6rem,12vw,12rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.02)",
          }}
        >
          START
        </span>

        <div className="relative z-10 max-w-2xl">
          <p className="flex items-center gap-3 font-raleway text-[0.52rem] tracking-[0.35em] uppercase text-white/20 mb-6">
            Ready to Begin
          </p>
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-wide text-white mb-6">
            WEAR YOUR
            <br />
            <span className="text-[#2a3fff]">TRUTH.</span>
          </h2>
          <p className="font-raleway text-[0.85rem] font-light leading-[1.85] text-white/35 max-w-[44ch] mb-10">
            Commission a piece, ask a question, or just start a conversation.
            Every Maita garment begins the same way.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="/contact"
              className="rounded-lg font-bebas text-[0.85rem] tracking-[0.2em] uppercase text-[#05050a] bg-white px-10 py-4 no-underline hover:bg-[#2a3fff] hover:text-white transition-colors"
            >
              Commission a Piece
            </a>
            <a
              href="/collections"
              className="font-raleway text-[0.6rem] tracking-[0.18em] uppercase text-white/25 no-underline hover:text-white/50 transition-colors flex items-center gap-2 hover:gap-3"
            >
              View the Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
