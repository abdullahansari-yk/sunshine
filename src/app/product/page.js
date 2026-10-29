import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductSearch from "@/components/product/ProductSearch";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProductHero />
      <ProductSearch />
      <Footer />
    </main>
  );
}
