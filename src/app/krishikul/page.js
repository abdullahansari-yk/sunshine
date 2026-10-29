import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KrishikulHero from "@/components/krishikul/KrishikulHero";

const KrishikulPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <KrishikulHero/>
      <Footer />
    </main>
  );
};

export default KrishikulPage;
