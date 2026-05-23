"use client";

const items = ["SS 2025", "New Collection", "Made in Africa", "Wear Your Truth", "Araura Fashion"];

export default function Marquee() {
  // Duplicate for seamless loop
  const all = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-electric overflow-hidden py-3.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((item, i) => (
          <span
            key={i}
            className="font-bebas text-[0.85rem] tracking-[0.25em] text-white px-10 inline-flex items-center gap-10 after:content-['✦'] after:text-[0.6rem] after:opacity-60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
