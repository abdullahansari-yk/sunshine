import Image from "next/image";
import React from "react";
import { ArrowRight, Sprout } from "lucide-react";

const ProductCard = ({ numberOfProducts, no, name, desc }) => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden">
      <div className="relative w-full h-100">
        <Image src="/banana.jpg" alt="banana" fill className="relative " />
        <div className="absolute right-3 top-3 py-1 px-3 rounded-2xl bg-white">
          {numberOfProducts} products
        </div>
      </div>
      <div className="px-8 py-4 flex flex-col gap-1">
        <div className="bg-[#c2571a] flex justify-center items-center w-15 h-15 rounded-full -mt-13 zindex-10 absolute outline-white outline-3">
          <Sprout className="text-white" aria-label="Crops" />
        </div>
        <div className="text-[#c2571a] text-lg mt-6">{no}</div>
        <h2 className="text-3xl">{name}</h2>
        <p className="text-[#00000099]">{desc}</p>
        <div className="flex justify-between items-center gap-5 mt-4  ">
          <div className="bg-[#F7F4EE] flex flex-1 flex-col items-center justify-center gap-3 rounded-lg py-3">
            <Image
              src="/banana.jpg"
              alt="banana pic"
              width={80}
              height={50}
              className="rounded-lg"
            />
            <p>Rhizoplus</p>
          </div>{" "}
          <div className="bg-[#F7F4EE] flex flex-1 flex-col items-center justify-center gap-3 rounded-lg py-3  ">
            <Image
              src="/banana.jpg"
              alt="banana pic"
              width={80}
              height={50}
              className="rounded-lg"
            />
            <p>Rhizoplus</p>
          </div>{" "}
          <div className="bg-[#F7F4EE] flex flex-1 flex-col items-center justify-center gap-3 rounded-lg py-3">
            <Image
              src="/banana.jpg"
              alt="banana pic"
              width={80}
              height={50}
              className="rounded-lg"
            />
            <p>Rhizoplus</p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#12213C] p-3 rounded-lg mt-4 cursor-pointer hover:scale-101 transition-transform duration-300">
          <p className="text-white font-semibold text-base">See all {numberOfProducts} products</p>
          <ArrowRight className="text-[#c2571a]" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
