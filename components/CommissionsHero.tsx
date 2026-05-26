import React from "react";

const CommissionsHero = () => {
  return (
    <section className="relative pt-46 lg:pt-14 overflow-hidden bg-black">
      <span
        className="hidden lg:block absolute -bottom-4 -right-4 font-bebas leading-none text-transparent pointer-events-none select-none"
        style={{
          fontSize: "clamp(8rem,18vw,18rem)",
          WebkitTextStroke: "1px rgba(255,255,255,0.03)",
        }}
      >
        SAY HI
      </span>

      <div className="flex-1 flex flex-col justify-between px-14 py-16 relative z-10 max-md:px-6 max-md:py-12">
        <p className="font-raleway text-[0.52rem] tracking-[0.4em] uppercase text-white/20 mb-8">
          Commissions — Araura Studio
        </p>

        <div>
          <h1 className="font-bebas text-[clamp(3.5rem,9vw,10rem)] leading-[0.9] tracking-wide mb-8">
            <span className="block text-white">LET'S</span>
            <span
              className="block text-transparent"
              style={{ WebkitTextStroke: "2px rgba(255,255,255,0.45)" }}
            >
              DESIGN
            </span>
            <span className="block text-electric">SOMETHING.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CommissionsHero;
