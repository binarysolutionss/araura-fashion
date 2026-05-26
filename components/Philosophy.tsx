import React from "react";

const PHILOSOPHY = [
  {
    num: "01",
    title: "Fabric is Political",
    desc: "Every textile carries the weight of the hands that made it, the culture that developed it, and the histories it has survived. Choosing a fabric is never neutral. It is always a declaration.",
    color: "bg-[#C8352A]",
  },
  {
    num: "02",
    title: "The Body is Not a Canvas",
    desc: "Fashion has spent decades treating the body as something to be corrected, covered, or decorated. Maita's work starts from a different place — the body as it is, dressed as it chooses.",
    color: "bg-electric",
  },
  {
    num: "03",
    title: "Structure Over Trend",
    desc: "Collections are not seasonal performances. Each piece is designed to outlast the moment it was made in. Trend is noise. Structure is what remains.",
    color: "bg-[#013E37]",
  },
  {
    num: "04",
    title: "Heritage Without Nostalgia",
    desc: "Drawing on African textile traditions is not an act of preservation — it is an act of continuation. The past is not a museum. It is material.",
    color: "bg-[#C8352A]",
  },
];

const Philosophy = () => {
  return (
    <section className="bg-black px-14 py-16 max-md:px-6 max-md:py-12">
      <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-8 max-md:flex-col max-md:items-start max-md:gap-4">
        <div>
          <p className="flex items-center gap-3 font-raleway text-[0.52rem] tracking-[0.35em] uppercase text-white/20 mb-3">
            Design Philosophy
          </p>
          <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-[0.95] tracking-wide text-white">
            WHAT THE
            <br />
            <span className="text-electric">WORK BELIEVES</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-px bg-white/4">
        {PHILOSOPHY.map((p, i) => (
          <div
            key={i}
            className="bg-black hover:bg-[#0d0d18] transition-colors duration-300 group grid grid-cols-[60px_1fr] md:grid-cols-[60px_200px_1fr]"
          >
            {/* Colour num col */}
            <div className={`flex items-start justify-center pt-7`}>
              <span className="font-raleway text-[0.48rem] tracking-[0.2em] uppercase text-white/50">
                {p.num}
              </span>
            </div>

            {/* Title */}
            <div className="px-8 py-7 border-r border-white/5 flex items-start max-md:hidden">
              <h3 className="font-bebas text-[0.95rem] tracking-[0.06em] text-white leading-snug group-hover:text-electric transition-colors">
                {p.title}
              </h3>
            </div>

            {/* Desc */}
            <div className="px-8 py-7 max-md:px-5 max-md:py-5">
              <h3 className="font-bebas text-[0.95rem] tracking-[0.06em] text-white leading-snug mb-3 md:hidden group-hover:text-electric transition-colors">
                {p.title}
              </h3>
              <p className="font-raleway text-[0.8rem] font-light leading-[1.8] text-white/35">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
