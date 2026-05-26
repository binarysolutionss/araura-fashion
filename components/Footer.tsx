"use client";

import Link from "next/link";
import {
  GrFacebook,
  GrInstagram,
  GrPhone,
  GrPinterest,
  GrWhatsapp,
} from "react-icons/gr";

const LINKS = {
  Collections: [
    { label: "SS 2025", href: "#" },
    { label: "Heritage Series", href: "#" },
    { label: "Archive", href: "#" },
    { label: "Lookbook", href: "#" },
  ],
  Studio: [
    { label: "About", href: "#" },
    { label: "Process", href: "#" },
    { label: "Press", href: "#" },
    { label: "Stockists", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Returns", href: "#" },
  ],
};

const SOCIALS = [
  { label: "IG", icon: "GrInstagram", href: "#" },
  { label: "TK", icon: "GrPhone", href: "#" },
  { label: "BE", icon: "GrPinterest", href: "#" },
];

const BAUHAUS = [
  { color: "bg-[#C8352A]", flex: "flex-[2]" },
  { color: "bg-electric", flex: "flex-[3]" },
  { color: "bg-[#FFEFB3]", flex: "flex-[1]" },
  { color: "bg-[#013E37]", flex: "flex-[2]" },
];

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* Electric line */}
      <div className="h-0.5 bg-linear-to-r from-transparent via-electric to-transparent opacity-50" />

      <div className="px-14 pt-16 pb-10 max-md:px-6 max-md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-8 mb-16">
          {/* Brand col */}
          <div>
            <h3 className="font-bebas text-[1.8rem] tracking-[0.15em] text-white mb-1 leading-none">
              ARAURA
            </h3>
            <p className="font-raleway text-[0.48rem] tracking-[0.3em] uppercase text-electric mb-6">
              Fashion Designers
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full font-raleway text-xl tracking-widest text-white hover:text-electric transition-colors duration-400 flex items-center justify-center no-underline"
                >
                  {s.icon === "GrPinterest" && <GrPinterest />}
                  {s.icon === "GrPhone" && <GrPhone />}
                  {s.icon === "GrInstagram" && <GrInstagram />}
                </Link>
              ))}
            </div>
          </div>
          {/* Link cols */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <p className="font-bebas text-[0.75rem] tracking-[0.22em] uppercase text-white mb-5">
                {heading}
              </p>
              <ul className="flex flex-col gap-3.5 list-none">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="font-raleway text-[0.78rem] font-light text-white/35 hover:text-white/70 transition-colors no-underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          800
        </div>

        {/* Commission CTA strip */}
        <div className="flex items-center justify-between py-8 border-t border-b border-white/5 mb-10 max-md:flex-col max-md:items-start max-md:gap-5">
          <p className="font-bebas text-[1.2rem] tracking-[0.08em] text-white/30">
            Ready to make some fashion?
          </p>
          <Link
            href="/contact"
            className="rounded-xl font-bebas text-[0.78rem] tracking-[0.2em] uppercase text-black bg-white px-8 py-3 no-underline hover:bg-electric hover:text-white transition-colors"
          >
            Say hello
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <p className="font-raleway text-sm tracking-wide text-white/15">
            © {new Date().getFullYear()} Araura Studio. All rights reserved.
          </p>
          <p className="font-raleway text-sm tracking-wide text-white/15">
            Made by{" "}
            <Link
              href="https://binaryonline.co.zw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-electric animate-pulse transition-colors no-underline border-b border-white/10 hover:border-electric pb-px"
            >
              Binary Solutions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
