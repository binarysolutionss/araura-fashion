"use client";

export default function CollectionsHero() {
  return (
    <section className="bg-[#05050a] pt-16 relative overflow-hidden">
      {/* Electric gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#2a3fff] to-transparent opacity-60" />

      {/* Ghost text */}
      <span
        className="hidden lg:block absolute bottom-[-1rem] right-[-1rem] font-bebas font-normal leading-none text-transparent pointer-events-none select-none"
        style={{
          fontSize: "clamp(8rem,18vw,18rem)",
          WebkitTextStroke: "1px rgba(255,255,255,0.03)",
        }}
      >
        WEAR
      </span>

      <div className="px-14 py-16 relative z-10 max-md:px-6 max-md:py-12">
        <p className="font-raleway text-[0.52rem] tracking-[0.4em] uppercase text-white/20 mb-8">
          Collections — Araura Studio
        </p>

        <div className="flex justify-between items-end max-md:flex-col max-md:items-start max-md:gap-8">
          <h1 className="font-bebas text-[clamp(3.5rem,9vw,10rem)] leading-[0.9] tracking-wide">
            <span className="block text-white">THE</span>
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.5)" }}
            >
              FULL
            </span>
            <span className="block text-[#2a3fff]">ARCHIVE</span>
          </h1>

          <div className="max-w-[40ch]">
            <p className="font-raleway text-[0.88rem] font-light leading-[1.85] text-white/35 mb-8">
              Every piece that has left the studio. Each one a confrontation.
              Each one exactly right.
            </p>
            <div className="flex gap-10">
              {[
                { num: "2", label: "Collections" },
                { num: "24+", label: "Pieces" },
                { num: "2019", label: "Since" },
              ].map((s, i) => (
                <div key={i}>
                  <span className="font-bebas text-[1.8rem] text-white leading-none block">
                    {s.num}
                  </span>
                  <span className="font-raleway text-[0.5rem] tracking-[0.2em] uppercase text-white/25 mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
