import React from 'react'
import Link from "next/link";

const AboutCTA = () => {
  return (
    <section className="bg-[#05050a] px-14 py-16 border-t border-white/[0.05] relative overflow-hidden max-md:px-6 max-md:py-12">
        <span
          className="hidden lg:block absolute bottom-[-2rem] right-[-1rem] font-bebas leading-none text-transparent pointer-events-none select-none"
          style={{
            fontSize: "clamp(6rem,12vw,12rem)",
            WebkitTextStroke: "1px rgba(255,255,255,0.02)",
          }}
        >
          START
        </span>

        <div className="relative z-10 max-w-2xl">
          <p className="flex items-center gap-3 font-raleway text-[0.52rem] tracking-[0.35em] uppercase text-white/20 mb-6">
            Ready to Begin
          </p>
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-wide text-white mb-6">
            WEAR YOUR
            <br />
            <span className="text-[#2a3fff]">TRUTH.</span>
          </h2>
          <p className="font-raleway text-[0.85rem] font-light leading-[1.85] text-white/35 max-w-[44ch] mb-10">
            Commission a piece, ask a question, or just start a conversation.
            Every Maita garment begins the same way.
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/contact"
              className="rounded-lg font-bebas text-[0.85rem] tracking-[0.2em] uppercase text-[#05050a] bg-white px-10 py-4 no-underline hover:bg-[#2a3fff] hover:text-white transition-colors"
            >
              Commission a Piece
            </Link>
            <Link
              href="/collections"
              className="font-raleway text-[0.6rem] tracking-[0.18em] uppercase text-white/25 no-underline hover:text-white/50 transition-colors flex items-center gap-2 hover:gap-3"
            >
              View the Work
            </Link>
          </div>
        </div>
      </section>
  )
}

export default AboutCTA