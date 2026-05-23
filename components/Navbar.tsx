"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 h-16 mix-blend-difference max-md:mix-blend-normal max-md:bg-[rgba(5,5,10,0.7)] max-md:backdrop-blur-md">

      <a href="#" className="font-bebas text-2xl tracking-[0.25em] text-white no-underline">
        ARAURA
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-12 list-none">
        {["Collections", "About", "Press", "Contact"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-sm font-light tracking-[0.3em] uppercase text-white/80 hover:text-white transition-colors no-underline"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1">
        <span className="block w-[22px] h-px bg-white" />
        <span className="block w-[22px] h-px bg-white" />
        <span className="block w-[22px] h-px bg-white" />
      </button>
    </nav>
  );
}
