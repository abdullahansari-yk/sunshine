import CropSection from "@/components/CropSection";
import Hero from "@/components/Hero";
import KrishikulSection from "@/components/KrishikulSection";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white">
      <Navbar />
      <Hero/>
      <Stats/>
      <CropSection/>
      <ProductSection/>
      <KrishikulSection/>
    </main>
  );
}