import React from "react";
import Image from "next/image";

const ProductHero = () => {
  return (
    <section className="relative min-h-[90vh]  overflow-hidden">
      <Image
        src="/cotton.jpg"
        alt="banana image"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
      {/* <div className="absolute inset-0 bg-black/65" aria-hidden="true" /> */}
      <div
        className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end gap-5 py-10 px-5 md:px-10">
        <div className="flex  items-center gap-2 text-[#F0A35E] uppercase text-xs md:text-sm ">
          <span className="block w-6 h-px bg-[#F0A35E]"></span>
          <span>Products · 6 ranges</span>
        </div>
        <div className="text-3xl md:text-6xl lg:text-7xl font-bold text-white">
          Food and medicine
          <span> </span>
          <span className="text-[#F0A35E]">for</span>
          <br />
          <span className="text-[#F0A35E]">your crop.</span>
        </div>
        <p className="text-lg md:text-xl lg:text-2xl text-[#ffffffcc]">
          Pick a range. Tap a product to see the dose, pack size,
          <br className="hidden md:block" />
          and what it will not do
        </p>
      </div>
    </section>
  );
};

export default ProductHero;
