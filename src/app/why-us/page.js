import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyUsHero from "@/components/why-us/WhyUsHero";
import WhyUsStats from "@/components/why-us/WhyUsStats";
import WhyUsSection from "@/components/why-us/WhyUsSection";

const WhyUs = () => {
  return (
    <main>
      <Navbar />
      <WhyUsHero />
      <WhyUsStats />
      <WhyUsSection />
      <Footer />
    </main>
  );
};

export default WhyUs;
