import CropSection from "@/components/CropSection";
import FarmerStories from "@/components/FarmerStories";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import KrishikulSection from "@/components/KrishikulSection";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";
import ProductSection from "@/components/ProductSection";
import Stats from "@/components/Stats";
import Whysunshine from "@/components/Whysunshine";
import WhysunshineStats from "@/components/WhysunshineStats";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats/>
      <CropSection/>
      <ProductSection/>
      <KrishikulSection/>
      <Whysunshine/>
      <WhysunshineStats/>
      <FarmerStories/>
      <NewsSection/>
      <Footer/>
    </main>
  );
}