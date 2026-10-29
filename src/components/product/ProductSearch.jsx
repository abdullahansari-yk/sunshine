import React from "react";
import { Mic, Search, Sprout, MessageCircle } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductSearch = () => {
  return (
    <section className="bg-[#F7F4EE]">
      <section id="search-section" className="py-10">
        <div className="w-[90vw] border-3 border-gray-200 rounded-lg mx-auto bg-white text-black flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 px-10 py-8">
          <div className="flex-1 md:pr-15 flex flex-col gap-1 ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Find a product
            </h1>
            <p className="text-[#00000099]">
              Type the name from the pack, or tap Speak.
            </p>
          </div>
          <div className="flex-2 h-17 border-3 border-[#CACACA] rounded-lg bg-[#F7F4EE] flex items-center justify-center gap-3 ">
            <Search className="w-4 md:w-6 ml-5" />
            <input className="flex-5 outline-0" placeholder="e.g. ZincMax" />
            <div className="flex-1 flex items-center justify-center bg-[#E2711D] my-2 py-2 md:py-2.5 px-2 md:px-0 mr-2 rounded-lg text-white gap-2 cursor-pointer">
              <Mic size={20} />
              <h4 className="font-semibold  text-sm md:text-lg">Speak</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="which-product">
        <div className="w-[90vw] mx-auto text-black flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
          <p className="text-[#00000099] font-semibold">
            Don’t know which product?
          </p>
          <div className="flex border justify-center items-center gap-1.5 py-2.5 px-6 rounded-4xl">
            {/* <Sprout size={20} /> */}
            <Sprout className="h-4 w-4 md:h-5 md:w-5" />
            <h4 className="text-sm md:text-base">Start from your Crop</h4>
          </div>
          <div className="flex border justify-center items-center gap-1.5 py-2.5 px-6 rounded-4xl">
            {/* <MessageCircle size={20} /> */}
            <MessageCircle className="h-4 w-4 md:h-5 md:w-6" />
            <h4 className="text-sm md:text-base">Ask an Expert</h4>
          </div>
        </div>
      </section>
      <section id="ranges-section">
        <div className="w-[90vw] mx-auto text-black py-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Our six ranges
          </h1>
          <div className="grid grid-cols-2 gap-10 mt-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductSearch;
