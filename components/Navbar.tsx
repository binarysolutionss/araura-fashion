"use client";

import Link from "next/link";
import MobileNav from "@/components/MobileNav";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 h-16 mix-blend-difference max-md:mix-blend-normal max-md:bg-[rgba(5,5,10,0.7)] max-md:backdrop-blur-md">

      <Link href="#" className="font-bebas text-2xl tracking-[0.25em] text-white no-underline">
        ARAURA
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-12 list-none">
        {["Collections", "About", "Press", "Contact"].map((item) => (
          <li key={item}>
            <Link 
              href="#"
              className="text-sm font-light tracking-[0.3em] uppercase text-white/80 hover:text-white hover:font-bold transition-colors no-underline"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}
