import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KrishikulHero from "@/components/krishikul/KrishikulHero";
import KrishikulList from "@/components/krishikul/KrishikulList";
import KrishulCropCycle from "@/components/krishikul/KrishulCropCycle";

const KrishikulPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <KrishikulHero />
      <KrishikulList />
      <KrishulCropCycle />
      <Footer />
    </main>
  );
};

export default KrishikulPage;
