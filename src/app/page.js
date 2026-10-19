import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white">
      <Navbar />
      <Hero/>
    </main>
  );
}