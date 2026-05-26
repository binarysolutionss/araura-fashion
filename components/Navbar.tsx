"use client";

import Link from "next/link";
import MobileNav from "@/components/MobileNav";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About",       href: "/about" },
  { label: "Commissions",     href: "/commissions" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 h-16 mix-blend-difference max-md:mix-blend-normal bg-[rgba(5,5,10,0.7)] backdrop-blur-md">

      <Link href="/" className="font-bebas text-2xl tracking-[0.25em] text-white no-underline">
        ARAURA
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-12 list-none">
        {NAV_LINKS.map((item, index) => (
          <li key={item.label}>
            <Link 
              href={item.href}
              className="text-xs font-light tracking-[0.3em] uppercase text-white/80 hover:text-white hover:font-bold transition-colors no-underline"
            >
              {item.label}
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
