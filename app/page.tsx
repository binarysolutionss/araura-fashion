import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Collection from "@/components/Collection";
import Commissions from "@/components/Commissions";
import AboutDesigner from "@/components/AboutDesigner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#05050a]">
      <Navbar />
      <Hero />
      <Marquee />
      <AboutDesigner />
      <Collection />
      <Features />
      <Commissions />
      <Footer />
    </main>
  );
}
