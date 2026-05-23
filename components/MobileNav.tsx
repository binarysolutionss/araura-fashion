"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Collections", href: "#" },
  { label: "Features",    href: "#" },
  { label: "About",       href: "#" },
  { label: "Contact",     href: "#contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>

      {/* Trigger */}
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="flex items-center justify-center w-9 h-9 bg-transparent border-none cursor-pointer text-white hover:opacity-70 transition-opacity"
        >
          <Menu size={22} strokeWidth={1} />
        </button>
      </SheetTrigger>

      {/* Drawer — slides from right */}
      <SheetContent
        side="right"
        className="w-[280px] p-0 bg-[#05050a] border-l border-white/[0.08] flex flex-col"
        // closeClassName="hidden"
        showCloseButton={false}
      >

        {/* Electric blue top line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2a3fff] to-transparent opacity-70 flex-shrink-0" />

        {/* Logo row */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06] flex-shrink-0">
          <div>
            <span className="font-bebas text-[1.1rem] tracking-[0.15em] text-white block leading-none">
              ARAURA
            </span>
            <span className="font-raleway text-[0.42rem] tracking-[0.28em] uppercase text-[#2a3fff]">
              Fashion Designers
            </span>
          </div>
          <button
            onClick={close}
            aria-label="Close menu"
            className="font-raleway text-[0.5rem] tracking-[0.2em] uppercase text-white/25 hover:text-white/60 transition-colors bg-transparent border-none cursor-pointer"
          >
            Close
          </button>
        </div>

        {/* Nav links */}
        <ul className="list-none flex flex-col divide-y divide-white/[0.05] flex-1">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={close}
                className="flex items-center justify-between px-6 py-5 font-bebas text-[1rem] tracking-[0.12em] uppercase text-white no-underline hover:bg-white/[0.03] hover:text-[#2a3fff] transition-all duration-200"
              >
                {item.label}
                <span className="font-raleway text-[0.48rem] tracking-[0.2em] text-white/20">
                  0{i + 1}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="px-6 py-5 border-t border-white/[0.06] flex-shrink-0">
          <Link
            href="#contact"
            onClick={close}
            className="block font-bebas text-[0.78rem] tracking-[0.2em] uppercase text-center text-[#05050a] bg-white py-4 no-underline hover:bg-[#2a3fff] hover:text-white transition-colors duration-200"
          >
            Commission a Piece →
          </Link>
        </div>

      </SheetContent>
    </Sheet>
  );
}
