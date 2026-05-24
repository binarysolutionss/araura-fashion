"use client";

import Image from "next/image";

const COLLECTIONS = [
  {
    id: "heritage-01",
    collection: "Heritage Series",
    season: "SS 2025",
    name: "The Kaftan",
    detail: "Mudcloth · Hand-woven · One of One",
    src: "/collections/kaftan.jpg",
    color: "bg-[#C8352A]",
    tall: true,
  },
  {
    id: "signature-01",
    collection: "Signature Series",
    season: "SS 2025",
    name: "The Drape",
    detail: "Pleated Crêpe · Sculptural · Limited",
    src: "/collections/drape.jpg",
    color: "bg-[#2a3fff]",
    tall: false,
  },
  {
    id: "heritage-02",
    collection: "Heritage Series",
    season: "AW 2024",
    name: "Cloth & Bone",
    detail: "Kente · Structural · Archive",
    src: "/collections/cloth-bone.jpg",
    color: "bg-[#013E37]",
    tall: false,
  },
  {
    id: "signature-02",
    collection: "Signature Series",
    season: "AW 2024",
    name: "Dissolved Silhouette",
    detail: "Organza · Deconstructed · Archive",
    src: "/collections/dissolved.jpg",
    color: "bg-[#C8352A]",
    tall: true,
  },
  {
    id: "heritage-03",
    collection: "Heritage Series",
    season: "SS 2024",
    name: "The Wrapper",
    detail: "Ankara · Traditional · Archive",
    src: "/collections/wrapper.jpg",
    color: "bg-[#2a3fff]",
    tall: false,
  },
  {
    id: "signature-03",
    collection: "Signature Series",
    season: "SS 2024",
    name: "Weight of Fabric",
    detail: "Wool · Layered · Archive",
    src: "/collections/weight.jpg",
    color: "bg-[#013E37]",
    tall: false,
  },
];

export default function CollectionsGrid() {
  return (
    <section className="bg-[#05050a] px-14 py-14 max-md:px-6 max-md:py-10">

      {/* Section label */}
      <div className="flex items-center justify-between mb-10 border-b border-white/[0.05] pb-6">
        <p className="flex items-center gap-3 font-raleway text-[0.52rem] tracking-[0.35em] uppercase text-white/20">
          <span className="inline-block w-6 h-px bg-white/20 flex-shrink-0" />
          {COLLECTIONS.length} Pieces
        </p>
        <a
          href="#contact"
          className="font-raleway text-[0.55rem] tracking-[0.2em] uppercase text-white/25 no-underline hover:text-[#2a3fff] transition-colors border-b border-white/10 hover:border-[#2a3fff] pb-px"
        >
          Commission a piece →
        </a>
      </div>

      {/* Masonry — CSS columns */}
      <div style={{ columnCount: 3, columnGap: "3px" }} className="max-md:columns-2 max-sm:columns-1">
        {COLLECTIONS.map((piece) => (
          <div
            key={piece.id}
            className="break-inside-avoid mb-[3px] relative overflow-hidden group cursor-pointer bg-[#111]"
            style={{ display: "inline-block", width: "100%" }}
          >
            <div className={`relative w-full ${piece.tall ? "h-[560px]" : "h-[360px]"}`}>

              {/* Image */}
              <Image
                src={piece.src}
                alt={piece.name}
                fill
                className="object-cover object-top grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Collection label — always visible top */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-5 py-4">
                <span className="font-raleway text-[0.45rem] tracking-[0.22em] uppercase text-white/25 group-hover:text-white/50 transition-colors">
                  {piece.collection}
                </span>
                <span className="font-raleway text-[0.45rem] tracking-[0.18em] uppercase text-white/20 group-hover:text-white/40 transition-colors">
                  {piece.season}
                </span>
              </div>

              {/* Colour left flash */}
              <div className={`absolute left-0 top-0 bottom-0 w-0 group-hover:w-[3px] transition-all duration-200 ${piece.color}`} />

              {/* Info — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-bebas text-[1.2rem] tracking-[0.06em] text-white block leading-tight mb-1">
                  {piece.name}
                </span>
                <span className="font-raleway text-[0.58rem] font-light tracking-[0.12em] text-white/45 block mb-4">
                  {piece.detail}
                </span>
                <a
                  href="#contact"
                  className="font-raleway text-[0.55rem] tracking-[0.18em] uppercase text-[#2a3fff] no-underline flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Enquire →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Commission CTA */}
      <div className="mt-14 pt-10 border-t border-white/[0.05] flex justify-center">
        <a
          href="#contact"
          className="font-bebas text-[0.85rem] tracking-[0.2em] uppercase text-[#05050a] bg-white px-14 py-4 no-underline hover:bg-[#2a3fff] hover:text-white transition-colors duration-200"
        >
          Commission a Custom Piece →
        </a>
      </div>

    </section>
  );
}
