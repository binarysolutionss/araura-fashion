import React from "react";

const AboutHero = () => {
  return (
    <section className="bg-black pt-16 min-h-[70dvh] flex flex-col relative overflow-hidden">
      <div className="h-0.5 bg-linear-to-r from-transparent via-electric to-transparent opacity-60" />
      <span
        className="hidden lg:block absolute -bottom-4 -right-4 font-bebas leading-none text-transparent pointer-events-none select-none"
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
            <span className="block text-electric">COSTUME.</span>
          </h1>
          <p className="font-raleway text-[0.9rem] font-light leading-[1.85] text-white/35 max-w-[50ch]">
            It is skin. A Harare-based studio building garments that confront
            before they comfort. Founded 2019.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
