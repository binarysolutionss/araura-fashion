"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* ── STORY ── */}
      <section className="bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0.5 bg-white/3">
          {/* Portrait */}
          <div className="relative overflow-hidden bg-[#0d0d18] min-h-[60vh]">
            <Image
              src="/lord-bishop-7SXbARXk458-unsplash.jpg"
              alt="Maita"
              fill
              className="object-cover object-top grayscale"
              sizes="(max-width:1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent opacity-60" />
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
              <span className="text-electric">REFUSAL</span>
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
            <div className="grid grid-cols-3 gap-px bg-white/5">
              {[
                { num: "2019", label: "Founded" },
                { num: "6+", label: "Features" },
                { num: "24+", label: "Pieces" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-black px-5 py-4 text-center hover:bg-[#0d0d18] transition-colors"
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
    </>
  );
}
