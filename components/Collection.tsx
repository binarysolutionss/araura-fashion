"use client";

import Link from "next/link";

const pieces = [
  {
    num: "01",
    src: "/collections/photo-1708170236215-b6edcad7f49a.png",
    alt: "The Kaftan — Mudcloth Heritage Series",
    name: "The Kaftan",
    detail: "Mudcloth · Heritage Series · 2025",
  },
  {
    num: "02",
    src: "/collections/kingsley-hemans-_VYEcLzGJYk-unsplash.jpg",
    alt: "Wild Checkered — Pleated Crêpe Signature Series",
    name: "Wild Checkered",
    detail: "Pleated Crêpe · Signature Series · 2025",
  },
];

export default function Collection() {
  return (
    <section id="collection" className="bg-[#05050a] px-12 py-32 max-md:px-6 max-md:py-20">

      {/* Header */}
      <div className="grid grid-cols-1 items-end gap-8 mb-20 pb-8 border-b border-white/[0.06]">
        <div>
          <p className="flex items-center gap-3 text-[0.6rem] font-light tracking-[0.4em] uppercase text-electric mb-4">
            Latest Pieces
          </p>
          <h2 className="font-bebas text-[clamp(3rem,6vw,6rem)] leading-[0.9] tracking-wider text-white">
            THE<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px rgba(240,240,240,0.3)" }}>
              NEW
            </span>
            <br />
            GUARD
          </h2>
        </div>
        <p className="text-[0.72rem] font-extralight leading-[1.9] text-white/70">
          Two statements. Rooted in heritage, stripped of apology.
          Mud cloth geometry meets sculptural drape —
          this is African power dressed for the future.
        </p>
      </div>

      {/* Pieces grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pieces.map((piece) => (
          <div key={piece.num} className="relative overflow-hidden bg-[#05050a] group cursor-crosshair rounded-xl">

            {/* Ghost number */}
            <span
              className="absolute top-8 right-8 z-10 font-bebas text-[4rem] leading-none text-transparent pointer-events-none select-none"
              style={{ WebkitTextStroke: "1px rgba(200,212,255,0.2)" }}
            >
              {piece.num}
            </span>

            {/* Image */}
            <img
              src={piece.src}
              alt={piece.alt}
              className="w-full object-cover object-top block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              style={{
                height: "65vh",
                filter: "grayscale(15%) contrast(1.05)",
              }}
            />

            {/* Info overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 px-10 py-8 flex justify-between items-end"
              style={{
                background: "linear-gradient(transparent, rgba(5,5,10,0.92))",
              }}
            >
              <div>
                <div className="font-bebas text-[clamp(1.8rem,3vw,2.8rem)] tracking-wider text-white leading-none">
                  {piece.name}
                </div>
                <div className="text-[0.62rem] font-light tracking-[0.25em] uppercase text-white/40 mt-1.5">
                  {piece.detail}
                </div>
              </div>
              <Link
                href="/commissions"
                className="text-[0.6rem] font-light tracking-[0.2em] uppercase text-white border border-white/70 rounded-lg px-4 py-2 no-underline transition-all duration-200 group-hover:bg-electric group-hover:text-white"
              >
                Inquire
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
