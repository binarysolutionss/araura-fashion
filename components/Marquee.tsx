"use client";

const items = ["SS 2025", "New Collection", "Made in Africa", "Wear Your Truth", "Araura Fashion"];

export default function Marquee() {
  // Duplicate for seamless loop
  const all = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-pink-500 overflow-hidden py-3.5">
      <div className="flex whitespace-nowrap">
        {all.map((item, i) => (
          <span
            key={i}
            className="font-bebas text-[0.85rem] tracking-[0.25em] text-black px-10 inline-flex items-center gap-10 after:content-['✦'] after:text-2xl after:opacity-60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
