import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collection from "@/components/Collection";

export default function Home() {
  return (
    <main className="bg-[#05050a]">
      <Navbar />
      <Hero />
      <Marquee />
      <Collection />
    </main>
  );
}
