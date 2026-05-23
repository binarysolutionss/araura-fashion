import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collection from "@/components/Collection";
import Commissions from "@/components/Commissions";
import AboutDesigner from "@/components/AboutDesigner";

export default function Home() {
  return (
    <main className="bg-[#05050a]">
      <Navbar />
      <Hero />
      <Marquee />
      <Collection />
      <AboutDesigner />
      <Commissions />
    </main>
  );
}
