"use client";

export default function Hero() {
  return (
    <section className="relative pt-56 lg:pt-28 flex flex-col justify-end overflow-hidden bg-[#05050a]">

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-85"
        src="/Roberta.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(5,5,10,1) 0%, rgba(5,5,10,0.5) 30%, rgba(5,5,10,0.1) 60%, transparent 100%), linear-gradient(to right, rgba(5,5,10,0.6) 0%, transparent 50%)",
        }}
      />

      {/* Ghost year */}
      <span className="hidden md:block absolute top-20 right-12 z-20 font-bebas text-[clamp(6rem,14vw,14rem)] leading-none tracking-tight text-transparent pointer-events-none select-none"
        style={{ WebkitTextStroke: "3px rgba(200,212,255,0.12)" }}
      >
        2025
      </span>

      {/* Content */}
      <div className="relative z-30 px-12 pb-16 max-md:px-6 max-md:pb-10">

        {/* Label */}
        <p className="flex items-center gap-4 text-[0.6rem] font-light tracking-[0.4em] uppercase text-ice mb-5 animate-fade-up">
          <span className="inline-block w-12 h-px bg-electric flex-shrink-0" />
          
        </p>

        {/* Title */}
        <h1 className="font-bebas text-[clamp(5rem,14vw,15rem)] leading-[0.88] tracking-wide mb-8 animate-fade-up [animation-delay:100ms]">
          <span className="block text-transparent" style={{ WebkitTextStroke: "2px #f0f0f0" }}>WEAR</span>
          <span className="block text-white">YOUR</span>
          <span className="block text-transparent" style={{ WebkitTextStroke: "2px #2a3fff" }}>TRUTH</span>
        </h1>

        {/* Bottom bar */}
        <div className="flex justify-between items-end gap-6 flex-wrap animate-fade-up [animation-delay:300ms]">
          <p className="text-lg font-extralight leading-[1.8] text-white/40 max-w-[38ch] italic">
            Garments that speak before you do. Each piece is a confrontation —
            with convention, with expectation, with the silence we&apos;ve been told to keep.
          </p>
          <div className="flex flex-col items-end gap-3 max-md:items-start">
            <a
              href="#collection"
              className="font-bebas rounded-lg text-2xl tracking-[0.25em] bg-white text-[#05050a] px-8 py-3.5 no-underline hover:bg-electric hover:text-white transition-colors duration-200"
            >
              View Collection
            </a>
            <a
              href="#collection"
              className="text-lg tracking-[0.3em] uppercase text-white/20 no-underline flex items-center gap-3"
            >
              Scroll to explore
              <span className="inline-block w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
            </a>
          </div>
        </div>
      </div>

      {/* Electric bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-40 bg-gradient-to-r from-transparent via-electric to-transparent animate-line-glow" />
    </section>
  );
}
