"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Commissions", href: "/commissions" },
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
        className="w-70 p-0 bg-black/95 backdrop-blur-md border-l border-white/8 flex flex-col"
        // closeClassName="hidden"
        showCloseButton={false}
      >
        {/* Logo row */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/6 shrink-0">
          <div>
            <span className="font-bebas text-[1.1rem] tracking-[0.15em] text-white block leading-none">
              ARAURA
            </span>
            <span className="font-raleway text-[0.42rem] tracking-[0.28em] uppercase text-electric">
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
        <ul className="list-none flex flex-col divide-y divide-white/5 flex-1">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={close}
                className="flex items-center justify-between px-6 py-5 font-bebas text-[1rem] tracking-[0.12em] uppercase text-white no-underline hover:bg-white/3 hover:text-electric transition-all duration-200"
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
        <div className="px-6 py-5 border-t border-white/6 shrink-0">
          <Link
            href="/commissions"
            onClick={close}
            className="rounded-lg block font-bebas text-[0.78rem] tracking-[0.2em] uppercase text-center text-black bg-white py-4 no-underline hover:bg-electric hover:text-white transition-colors duration-200"
          >
            Commission a Piece
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
