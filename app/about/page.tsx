import AboutPage from "@/components/AboutPage";
import AboutHero from "@/components/AboutHero";
import Philosophy from "@/components/Philosophy";
import AboutCTA from "@/components/AboutCTA";

export default function About() {
  return (
    <main className="bg-[#05050a]">
      <AboutHero />
      <AboutPage />
      <Philosophy />
      <AboutCTA />
    </main>
  );
}
