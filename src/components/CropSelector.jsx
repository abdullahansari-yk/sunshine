"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const crops = [
  {
    name: "Banana",
    season: "Flowering · Aug-Sep",
    image: "/images/hero-banner.jpg",
    color: "#ffc400",
  },
  {
    name: "Cotton",
    season: "Boll setting · Sep-Oct",
    image: "/images/cotton.jpg",
    color: "#29145f",
  },
  {
    name: "Soybean",
    season: "Pod filling · Sep",
    image: "/images/soybean.jpg",
    color: "#29145f",
  },
  {
    name: "Sugarcane",
    season: "Grand growth · Jul-Oct",
    image: "/images/sugarcane.jpg",
    color: "#29145f",
  },
  {
    name: "Onion",
    season: "Bulb planting · Oct-Nov",
    image: "/images/onion.jpg",
    color: "#29145f",
  },
  {
    name: "Tomato",
    season: "Fruit set · Sep-Oct",
    image: "/images/tomato.jpg",
    color: "#29145f",
  },
  {
    name: "Grape",
    season: "October pruning",
    image: "/images/grape.jpg",
    color: "#29145f",
  },
  {
    name: "Pomegranate",
    season: "Hasta bahar · Sep-Oct",
    image: "/images/pomegranate.jpg",
    color: "#29145f",
  },
  {
    name: "Chilli",
    season: "Flowering · Sep-Nov",
    image: "/images/chilli.jpg",
    color: "#29145f",
  },
  {
    name: "Turmeric",
    season: "Bulking · Sep-Nov",
    image: "/images/turmeric.jpg",
    color: "#29145f",
  },
  {
    name: "Wheat",
    season: "Sowing · Nov",
    image: "/images/wheat.jpg",
    color: "#29145f",
  },
  {
    name: "Gram",
    season: "Sowing · Oct-Nov",
    image: "/images/gram.jpg",
    color: "#29145f",
  },
];

export default function CropSelector({ selectedCrop, onSelectCrop }) {
  return (
    <section id="crops" className="mx-auto max-w-[1440px] px-4 py-10 md:px-6">
      <div className="mb-8 text-center">
        <span className="rounded-full border border-[#eee7dc] px-3 py-1 text-[10px] text-[#29145f]">
          🌱 Find my crop
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#29145f] md:text-4xl">
          Start with your crop
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-gray-500">
          Twelve crops, all on one screen. Tap yours to see what it needs this month.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6">
        {crops.map((crop) => {
          const isSelected = selectedCrop === crop.name;

          return (
            <button
              key={crop.name}
              type="button"
              onClick={() => onSelectCrop(crop.name)}
              aria-pressed={isSelected}
              className={`group min-w-0 rounded-xl text-left transition ${
                isSelected
                  ? "ring-2 ring-[#29145f] ring-offset-2"
                  : ""
              }`}
            >
              <div className="relative h-24 overflow-hidden rounded-xl sm:h-28 md:h-32">
                <Image
                  src={crop.image}
                  alt={crop.name}
                  fill
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 16vw, 180px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                <span
                  className={`absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full text-white ${
                    isSelected
                      ? "bg-[#ffc400] text-[#29145f]"
                      : "bg-[#29145f]"
                  }`}
                >
                  <ArrowUpRight size={13} />
                </span>

                {isSelected && (
                  <span className="absolute left-1 top-1 rounded-full bg-white px-2 py-1 text-[8px] font-medium text-[#29145f]">
                    Selected
                  </span>
                )}
              </div>

              <p className="mt-2 truncate text-[11px] font-semibold text-[#29145f]">
                {crop.name}
              </p>

              <p className="mt-1 text-[9px] leading-4 text-gray-500">
                {crop.season}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}