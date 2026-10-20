"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Droplet, Sprout } from "lucide-react";

const categories = [
  {
    title: "Micronutrients",
    description: "Zinc, boron, iron — hunger you can see on the leaf.",
    count: "24 products",
    image: "/micronutrients.jpg",
    icon: "drop",
  },
  {
    title: "Bio-stimulants",
    description: "Seaweed and amino bases, for a crop under stress.",
    count: "16 products",
    image: "/biostimulate.jpg",
    icon: "sprout",
  },
  {
    title: "Water-soluble fertilisers",
    description: "For drip and spray schedules, stage by stage.",
    count: "21 products",
    image: "/watersoluble.jpg",
    icon: "drop",
  },
  {
    title: "Plant nutrition",
    description: "Balanced nutrition to support healthy crop growth.",
    count: "18 products",
    image: "/wheat.jpg",
    icon: "sprout",
  },
  {
    title: "Crop protection",
    description: "Solutions to help manage crop health challenges.",
    count: "17 products",
    image: "/tomato.jpg",
    icon: "drop",
  },
  {
    title: "Soil health",
    description: "Support soil quality and healthy root development.",
    count: "12 products",
    image: "/sugarcane.jpg",
    icon: "sprout",
  },
];

export default function ProductsSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCategories = Array.from({ length: 3 }, (_, index) => {
    return categories[(startIndex + index) % categories.length];
  });

  const previous = () => {
    setStartIndex((current) =>
      (current - 1 + categories.length) % categories.length
    );
  };

  const next = () => {
    setStartIndex((current) =>
      (current + 1) % categories.length
    );
  };

  return (
    <section
      id="products"
      className="mx-auto max-w-[98vw] py-12 md:px-8 lg:px-10 lg:py-16"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.9fr_2.1fr] lg:gap-10">

        {/* LEFT CONTENT */}
        <div>
          <p className="mb-4 flex items-center gap-2 text-[10px] md:text-[14px] font-semibold uppercase tracking-[0.22em] text-[#c99a3a]">
            <span className="h-px w-5 bg-[#c99a3a]" />
            What we make
          </p>

          <h2 className="max-w-sm text-4xl font-bold leading-[1.05] tracking-tight text-[#29145f] md:text-[44px]">
            Nutrition for
            <br />
            every{" "}
            <span className="relative inline-block">
              <span className="absolute inset-x-[-5px] bottom-0 top-1 rounded-full bg-[#ffc400]" />
              <span className="relative z-10 px-1">stage.</span>
            </span>
          </h2>

          <p className="mt-5 max-w-xs text-xs md:text-[18px] leading-6 text-gray-500">
            Seven categories, 96 products. Pick one and its products
            open on their own page.
          </p>

          <a
            href="#all-products"
            className="mt-5 inline-flex items-center gap-4 rounded-full bg-[#ffc400] py-3.5 pl-6 pr-3.5 text-[11px] md:text-[16px] font-semibold text-[#29145f] transition hover:bg-[#edb900]"
          >
            All products

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#29145f] text-white">
              <ArrowRight size={14} />
            </span>
          </a>

          {/* CAROUSEL CONTROLS */}
          <div className="mt-5 flex gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous product categories"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#eee8de] text-[#29145f] transition hover:bg-[#f5f0e6]"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next product categories"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#eee8de] text-[#29145f] transition hover:bg-[#f5f0e6]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* RIGHT PRODUCT CARDS */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {visibleCategories.map((category) => (
            <a
              href="#all-products"
              key={category.title}
              className="group relative h-[270px] overflow-hidden rounded-2xl bg-[#e9e5d9] sm:h-[270px] lg:h-[440px]"
            >
              {/* Background image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 30vw, 350px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

              {/* Product count */}
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[13px] font-semibold text-[#29145f] shadow-sm">
                {category.count}
              </span>

              {/* Bottom information card */}
              <div className="absolute bottom-2 left-2 right-2  rounded-xl bg-white p-3 sm:p-2.5 lg:p-3">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#f5eddd] text-[#c99a3a]">
                  {category.icon === "drop" ? (
                    <Droplet size={18} />
                  ) : (
                    <Sprout size={18} />
                  )}
                </div>

                <h3 className=" text-[11px] md:text-xl font-bold leading-4 text-[#29145f]">
                  {category.title}
                </h3>

                <p className="mt-3 text-[9px] md:text-sm leading-4 text-gray-500">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}