"use client";

import { useState } from "react";
import Image from "next/image";

const FILTERS = ["All", "SS 2025", "Heritage Series", "Archive"];

const PIECES = [
  {
    id: 1,
    title: "The Robe",
    collection: "Archive",
    material: "Linen & Jute",
    year: "2023",
    status: "Sold",
    src: "/collections/rohan-odhiambo-DVMRYuULLgk-unsplash.jpg",
    height: "h-[480px]",
    color: "bg-electric",
  },
  {
    id: 2,
    title: "The Drape",
    collection: "SS 2025",
    material: "Pleated Crêpe",
    year: "2025",
    status: "Commissioned",
    src: "/collections/photo-1530884698386-d42ad3199b1f.jpeg",
    height: "h-[380px]",
    color: "bg-electric",
  },
  {
    id: 3,
    title: "Column No. 1",
    collection: "SS 2025",
    material: "Structured Linen",
    year: "2025",
    status: "Available",
    src: "/collections/photo-1605302596032-15e67c3cf66a.jpeg",
    height: "h-[460px]",
    color: "bg-[#013E37]",
  },
  {
    id: 4,
    title: "Ancestral Wrap",
    collection: "Heritage Series",
    material: "Kente & Silk Blend",
    year: "2024",
    status: "Sold",
    src: "/collections/photo-1667366925513-573975457271.jpeg",
    height: "h-[420px]",
    color: "bg-[#C8352A]",
  },
  {
    id: 5,
    title: "The Void Dress",
    collection: "Archive",
    material: "Raw Silk · Deconstructed",
    year: "2023",
    status: "Archive",
    src: "/collections/photo-1696962701419-6f510910e838.jpeg",
    height: "h-[500px]",
    color: "bg-electric",
  },
  {
    id: 6,
    title: "Utility Overcoat",
    collection: "SS 2025",
    material: "Waxed Cotton",
    year: "2025",
    status: "Available",
    src: "/collections/photo-1700912679829-bd525d1724a8.jpeg",
    height: "h-[420px]",
    color: "bg-[#013E37]",
  },
  {
    id: 7,
    title: "Cloth No. 7",
    collection: "Heritage Series",
    material: "Bogolan · Natural Dye",
    year: "2024",
    status: "Commissioned",
    src: "/collections/photo-1708170236215-b6edcad7f49a.png",
    height: "h-[360px]",
    color: "bg-[#C8352A]",
  },
  {
    id: 8,
    title: "Asymmetric Top",
    collection: "SS 2025",
    material: "Cotton Broderie",
    year: "2025",
    status: "Available",
    src: "/collections/photo-1664004475514-a50f6c4cee31.jpeg",
    height: "h-[490px]",
    color: "bg-[#013E37]",
  },
  {
    id: 9,
    title: "Burial Cloth Dress",
    collection: "Heritage Series",
    material: "Repurposed Mudcloth",
    year: "2024",
    status: "Archive",
    src: "/collections/photo-1669065964236-52773346cef9.jpeg",
    height: "h-[540px]",
    color: "bg-[#C8352A]",
  },
  {
    id: 10,
    title: "Wide Leg Trousers",
    collection: "SS 2025",
    material: "Heavy Plissé",
    year: "2025",
    status: "Available",
    src: "/collections/photo-1687052093309-7a14efa58ecb.jpeg",
    height: "h-[400px]",
    color: "bg-electric",
  },
  {
    id: 11,
    title: "The Shell",
    collection: "Archive",
    material: "Organza · Boned",
    year: "2022",
    status: "Sold",
    src: "/collections/photo-1740606281031-ec0e323afbf3.jpeg",
    height: "h-[440px]",
    color: "bg-[#013E37]",
  },
  {
    id: 12,
    title: "Fused",
    collection: "Archive",
    material: "Organza · Fused",
    year: "2020",
    status: "Sold",
    src: "/collections/photo-1773858437929-60fbf3900bfc.jpeg",
    height: "h-[350px]",
    color: "bg-[#013E37]",
  },
];

const STATUS_COLORS: Record<string, string> = {
  Available:
    "text-[#4caf50] border-[rgba(76,175,80,0.3)] bg-[rgba(76,175,80,0.08)]",
  Commissioned:
    "text-electric border-[rgba(42,63,255,0.3)] bg-[rgba(42,63,255,0.08)]",
  Sold: "text-white/25 border-white/10 bg-transparent",
  Archive: "text-white/25 border-white/10 bg-transparent",
};

const CollectionsGrid = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PIECES : PIECES.filter((p) => p.collection === active);

  return (
    <div>
      <section className="px-14 py-14 max-md:px-6 max-md:py-10 bg-[radial-gradient(circle_at_top,rgba(200,145,102,0.14),transparent_18%),linear-gradient(180deg,#08080d_0%,#05050a_60%,#0b0b13_100%)]">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-10 max-md:flex-col max-md:items-start max-md:gap-4">
          <p className="font-raleway text-[0.52rem] tracking-[0.3em] uppercase text-electric">
            {filtered.length} {active === "All" ? "Pieces" : active}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-xl font-raleway text-[0.58rem] tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-200 cursor-pointer
                  ${
                    active === f
                      ? "bg-white text-black border-white font-bold"
                      : "bg-transparent text-white/30 border-white/10 hover:border-white/30 hover:text-white/60"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry — CSS columns */}
        <div
          //   style={{ columnGap: "3px" }}
          className="columns-1 gap-2 md:columns-2 lg:columns-3"
        >
          {filtered.map((piece) => (
            <div
              key={piece.id}
              className="break-inside-avoid mb-0.75 relative overflow-hidden group cursor-pointer bg-[#0d0d18] duration-300"
              style={{ display: "inline-block", width: "100%" }}
            >
              <div className={`relative ${piece.height} w-full`}>
                <Image
                  src={piece.src}
                  alt={piece.title}
                  fill
                  className=" rounded-xl object-cover object-top group-hover:scale-[1.03] transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Status badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`font-raleway text-[0.45rem] tracking-[0.18em] uppercase border px-2.5 py-1 bg-white/10 backdrop-blur-sm rounded-sm text-black font-bold`}
                  >
                    {piece.status}
                  </span>
                </div>

                {/* Hover info */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <span className="font-raleway text-[0.45rem] tracking-[0.22em] uppercase text-electric block mb-1">
                    {piece.collection}
                  </span>
                  <span className="font-bebas text-[1.1rem] tracking-[0.06em] text-white leading-none block mb-1">
                    {piece.title}
                  </span>
                  <span className="font-raleway text-[0.58rem] font-light text-white/40 block">
                    {piece.material} · {piece.year}
                  </span>
                </div>

                {/* Coloured left flash */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-0 group-hover:w-0.75 transition-all duration-200`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollectionsGrid;
