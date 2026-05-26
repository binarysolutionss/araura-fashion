"use client";

export default function CollectionsHero() {
  return (
    <section className="bg-black pt-16 relative overflow-hidden">
      <div className="h-0.5 bg-linear-to-r from-transparent via-electric to-transparent opacity-60" />

      {/* Ghost word */}
      <span
        className="hidden lg:block absolute -bottom-4 -right-4 font-bebas font-black leading-none text-transparent pointer-events-none select-none"
        style={{
          fontSize: "clamp(8rem,18vw,18rem)",
          WebkitTextStroke: "1px rgba(255,255,255,0.03)",
        }}
      >
        PIECES
      </span>

      <div className="px-14 py-16 relative z-10 max-md:px-6 max-md:py-12">
        <p className="font-raleway text-[0.52rem] tracking-[0.4em] uppercase text-white/20 mb-8">
          Collections — Araura Studio
        </p>
        <div className="flex justify-between items-end max-md:flex-col max-md:items-start max-md:gap-6">
          <h1 className="font-bebas text-[clamp(3.5rem,9vw,10rem)] leading-[0.9] tracking-tight">
            <span className="block text-white">Our</span>
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}
            >
              WHOLE
            </span>
            <span className="block text-electric">COLLECTION</span>
          </h1>
          <p className="font-raleway text-[0.85rem] font-light leading-[1.85] text-white/35 max-w-[40ch]">
            Every piece made in the Harare studio — from the first Heritage
            Series to the current SS 2025 collection. Each garment is a
            document.
          </p>
        </div>
      </div>
    </section>
  );
}
