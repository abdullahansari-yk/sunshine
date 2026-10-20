import CropSection from "@/components/cropSection";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white">
      <Navbar />
      <Hero/>
      <Stats/>
      <CropSection/>
    </main>
  );
}