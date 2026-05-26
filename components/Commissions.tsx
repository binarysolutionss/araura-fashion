"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const COMMISSION_TYPES = [
  "Custom Garment",
  "Bridal / Occasion",
  "Editorial / Styling",
  "Wholesale Enquiry",
  "Press / Media",
  "Collaboration",
];

const BUDGETS = [
  "Under $200",
  "$200 – $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
  "To discuss",
];

export default function Commissions() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  return (
    <section id="contact" className="bg-black relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/4">
        {/* ── Left — info ── */}
        <div className="bg-black px-14 py-20 flex flex-col justify-between max-md:px-6 max-md:py-12">
          <div>
            <p className="flex items-center gap-3 font-raleway text-[0.55rem] tracking-[0.35em] uppercase text-white/25 mb-4">
              Get in Touch
            </p>

            <h2 className="font-bebas text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] tracking-wide text-electric mb-4">
              WEAR YOUR
              <br />
              <span className="text-electric">TRUTH.</span>
              <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.4)" }}
              >
                START HERE.
              </span>
            </h2>

            <p className="font-raleway text-[0.85rem] font-light leading-[1.9] text-white/40 max-w-[44ch] mb-12">
              Every Maita piece begins with a conversation. Tell us what you
              need — a custom garment, a collaboration, a press enquiry — and we
              will respond within 48 hours.
            </p>

            {/* Contact details */}
            {/* <div className="flex flex-col gap-px bg-white/4 mb-12">
              {[
                {
                  label: "Email",
                  value: "Maita@araura.com",
                  href: "#",
                },
                {
                  label: "Instagram",
                  value: "@Maita.araura",
                  href: "#",
                },
                { label: "Based in", value: "Harare, Zimbabwe", href: null },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-black flex items-center hover:bg-[#0d0d18] transition-colors gap-0"
                >
                  <div
                    className={`flex items-center justify-center w-2 h-2 rounded-full ${
                      i === 0
                        ? "bg-electric"
                        : i === 1
                          ? "bg-gray-500"
                          : i === 2
                            ? "bg-white"
                            : "bg-[#2a2a2a]"
                    }`}
                  >
                  
                  </div>
                  <div className="px-6 py-4 flex items-center">
                    {item.href ? (
                      <Link
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="font-bebas text-[0.82rem] tracking-[0.06em] text-white/60 no-underline hover:text-white transition-colors"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <span className="font-bebas text-[0.82rem] tracking-[0.06em] text-white/60">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div> */}

            <div className="relative mt-6 h-90 overflow-hidden rounded-xl border border-white/8 bg-white/2">
              <Image
                src="/fanueal-mengistu-gcLzTsvpzC8-unsplash.jpg"
                alt="Textile detail in the background"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-raleway text-[0.5rem] tracking-[0.3em] uppercase text-white/50 mb-1">
                  Atelier Detail
                </p>
                <p className="font-bebas text-[1rem] tracking-[0.18em] text-white">
                  TAILORED TO THE MOMENT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right — enquiry form ── */}
        <div className="bg-black px-14 py-20 max-md:px-6 max-md:py-12">
          <div className="mb-8">
            <p className="font-raleway text-[0.55rem] tracking-[0.35em] uppercase text-electric mb-4">
              Send an Enquiry
            </p>
            <p className="font-raleway text-[0.78rem] leading-[1.8] text-white/45 max-w-[40ch]">
              Share the mood, the occasion, and the level of detail you’re
              after. We’ll shape it into a tailored proposal.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative overflow-hidden rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-px shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <div className="rounded-[calc(1.5rem-1px)] bg-[#09090f]">
              <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-white/8">
                <div>
                  <p className="font-raleway text-[0.5rem] tracking-[0.3em] uppercase text-white/25">
                    Atelier Brief
                  </p>
                  <p className="font-bebas text-[1rem] tracking-[0.14em] text-white mt-1">
                    BESPOKE INQUIRY
                  </p>
                </div>
                <div className="rounded-full border border-white/1 bg-white/2 px-3 py-1 text-[0.55rem] tracking-[0.2em] uppercase text-white/45">
                  48h response
                </div>
              </div>

              {/* Name row */}
              <div className="grid grid-cols-2 border-b border-white/8 max-sm:grid-cols-1">
                <div className="flex flex-col gap-2 px-6 py-5 border-r border-white/8 max-sm:border-r-0 max-sm:border-b">
                  <label className="font-raleway text-[0.48rem] tracking-[0.28em] uppercase text-white/25">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="font-raleway text-[0.82rem] font-light text-white bg-transparent border-none outline-none placeholder:text-white/18 transition-all focus:translate-x-0.5"
                  />
                </div>
                <div className="flex flex-col gap-2 px-6 py-5">
                  <label className="font-raleway text-[0.48rem] tracking-[0.28em] uppercase text-white/25">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="font-raleway text-[0.82rem] font-light text-white bg-transparent border-none outline-none placeholder:text-white/18 transition-all focus:translate-x-0.5"
                  />
                </div>
              </div>

              {/* Commission type chips */}
              <div className="px-6 py-5 border-b border-white/8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <label className="font-raleway text-[0.48rem] tracking-[0.28em] uppercase text-white/25">
                    Type of Enquiry
                  </label>
                  <span className="font-raleway text-[0.5rem] uppercase text-white/20">
                    choose one
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {COMMISSION_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setSelectedType(selectedType === type ? null : type)
                      }
                      className={`font-raleway text-[0.6rem] tracking-[0.12em] uppercase px-3.5 py-2 rounded-full border transition-all duration-200 cursor-pointer
                        ${
                          selectedType === type
                            ? "bg-white text-black border-white shadow-[0_8px_24px_rgba(255,255,255,0.18)]"
                            : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white/75"
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget chips */}
              <div className="px-6 py-5 border-b border-white/8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <label className="font-raleway text-[0.48rem] tracking-[0.28em] uppercase text-white/25">
                    Budget Range
                  </label>
                  <span className="font-raleway text-[0.5rem] uppercase text-white/20">
                    optional
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() =>
                        setSelectedBudget(selectedBudget === b ? null : b)
                      }
                      className={`font-raleway text-[0.6rem] tracking-[0.12em] uppercase px-3.5 py-2 rounded-full border transition-all duration-200 cursor-pointer
                        ${
                          selectedBudget === b
                            ? "bg-electric text-white border-electric shadow-[0_8px_24px_rgba(42,63,255,0.28)]"
                            : "bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white/75"
                        }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 px-6 py-5 border-b border-white/8">
                <label className="font-raleway text-[0.48rem] tracking-[0.28em] uppercase text-white/25">
                  Tell Us About Your Vision
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe the occasion, the mood, references, silhouette, or fabric direction..."
                  className="font-raleway text-[0.82rem] font-light text-white bg-transparent border-none outline-none resize-none placeholder:text-white/18 w-full"
                />
                <p className="font-raleway text-[0.55rem] text-white/20">
                  Add a moodboard link, colour references, or your preferred
                  silhouette if you have one.
                </p>
              </div>

              {/* Submit */}
              <div className="flex justify-between items-center px-6 py-5 gap-4 max-sm:flex-col max-sm:items-start">
                <div>
                  <p className="font-raleway text-[0.55rem] tracking-[0.2em] uppercase text-white/25 mb-1">
                    Response time
                  </p>
                  <p className="font-raleway text-[0.75rem] text-white/45">
                    We reply within 24 hours.
                  </p>
                </div>
                <button
                  type="submit"
                  className="font-bebas text-[0.82rem] tracking-[0.2em] uppercase text-black bg-white px-8 py-3.5 rounded-xl border-none cursor-pointer hover:bg-electric hover:text-white transition-all duration-200 max-sm:w-full max-sm:text-center"
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Keyframe for marquee — add to globals.css if not already there */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
