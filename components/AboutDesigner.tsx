"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutDesigner() {
  return (
    <section className="bg-[#05050a] relative overflow-hidden border-b border-gray-500">
      {/* Top electric line */}

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
        {/* ── Left — portrait ── */}
        <div className="relative overflow-hidden border-r border-white/[0.05] min-h-[70vh] lg:min-h-0">
          {/* Replace div with your portrait image */}
          <Image
            src="/lord-bishop-7SXbARXk458-unsplash.jpg"
            alt="Maita — Designer"
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
              Maita Phiri
            </span>
          </div>

          {/* Year badge */}
          <div className="absolute top-8 right-8 z-10 border border-white/10 px-4 py-2">
            <span className="rounded-lg font-bebas text-[0.75rem] tracking-[0.3em] text-white/30">
              EST. 2019
            </span>
          </div>
        </div>

        {/* ── Right — text ── */}
        <div className=" px-14 py-20 flex flex-col justify-between relative max-md:px-6 max-md:py-12">
          <div>
            {/* Eyebrow */}
            <p className="flex items-center gap-3 font-raleway text-[0.58rem] tracking-[0.35em] uppercase text-pink-500 mb-4">
              The Designer
            </p>

            {/* Headline */}
            <h2 className="font-bebas text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] tracking-wide text-white mb-8">
              FASHION IS
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" }}
              >
                NOT COSTUME.
              </span>
              <br />
              IT IS <span className="text-[#2a3fff]">SKIN.</span>
            </h2>

            {/* Bio */}
            <div className="space-y-5 mb-12">
              <p className="font-raleway text-[0.85rem] font-light leading-[1.9] text-white/40">
                Maita is a Harare-based fashion designer working at the
                intersection of traditional African textile and contemporary
                structural design. Since 2019, her work has interrogated what it
                means to dress a body that carries history.
              </p>
              <p className="font-raleway text-[0.85rem] font-light leading-[1.9] text-white/40">
                Her collections draw on mudcloth geometry, sculptural drape and
                the politics of fabric — each piece hand-developed in her Harare
                studio over weeks of iteration. Nothing leaves the studio until
                it is exactly right.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 pr-4 flex-wrap">
            <Link
              href="#"
              className="font-bebas rounded-lg text-[0.85rem] tracking-[0.2em] uppercase text-[#05050a] bg-white px-8 py-3.5 no-underline hover:bg-[#2a3fff] hover:text-white transition-colors duration-200"
            >
              Commission a piece
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
