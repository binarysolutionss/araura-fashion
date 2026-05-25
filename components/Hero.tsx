"use client";

import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative pt-46 lg:pt-40 flex flex-col justify-end overflow-hidden bg-[#05050a]">

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
      <span className="hidden md:block absolute top-46 lg:top-50 right-12 z-20 font-bebas text-[clamp(6rem,14vw,14rem)] leading-none tracking-tight text-transparent pointer-events-none select-none"
        style={{ WebkitTextStroke: "3px rgba(200,212,255,0.12)" }}
      >
        2026
      </span>

      {/* Content */}
      <div className="relative z-30 px-12 pb-16 max-md:px-6 max-md:pb-10">
       

        {/* Title */}
        <h1 className="font-bebas text-[clamp(5rem,14vw,7rem)] leading-[0.88] tracking-wide mb-8 animate-fade-up [animation-delay:100ms]">
          <span className="block text-transparent" style={{ WebkitTextStroke: "2px #f0f0f0" }}>WEAR</span>
          <span className="block text-white animate-pulse">YOUR</span>
          <span className="block text-transparent" style={{ WebkitTextStroke: "2px #2a3fff" }}>TRUTH</span>
        </h1>

        {/* Bottom bar */}
        <div className="flex justify-between items-end gap-6 flex-wrap animate-fade-up [animation-delay:300ms]">
          <p className="text-lg font-extralight leading-[1.8] text-white/40 max-w-[38ch]">
            Garments that speak before you do. Each piece is a confrontation —
            with convention, with expectation, with the silence we&apos;ve been told to keep.
          </p>
          <div className="flex flex-col items-end gap-3 max-md:items-start">
            <Link
              href="/collections"
              className="font-bebas rounded-lg text-lg tracking-[0.25em] bg-white text-[#05050a] px-8 py-3.5 no-underline hover:bg-electric hover:text-white transition-colors duration-200"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
