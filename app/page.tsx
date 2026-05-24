import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collection from "@/components/Collection";
import Commissions from "@/components/Commissions";
import AboutDesigner from "@/components/AboutDesigner";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="bg-[#05050a]">
      <Hero />
      <Marquee />
      <AboutDesigner />
      <Collection />
      <Features />
      <Commissions />
    </main>
  );
}
