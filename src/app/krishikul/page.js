import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KrishikulHero from "@/components/krishikul/KrishikulHero";
import KrishikulList from "@/components/krishikul/KrishikulList";

const KrishikulPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <KrishikulHero/>
      <KrishikulList/>
      <Footer />
    </main>
  );
};

export default KrishikulPage;
