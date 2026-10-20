"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  FlaskConical,
  MessageCircle,
  AlertCircle,
} from "lucide-react";

const crops = [
  {
    name: "Banana",
    season: "Flowering · Aug-Sep",
    image: "/banana.jpg",
    warning:
      "Panama wilt and zinc deficiency — yellowing on the lower leaves.",
  },
  {
    name: "Cotton",
    season: "Boll setting · Sep-Oct",
    image: "/cotton.jpg",
    warning:
      "Monitor boll development and maintain balanced nutrition.",
  },
  {
    name: "Soybean",
    season: "Pod filling · Sep",
    image: "/soybean.jpg",
    warning:
      "Monitor pod development and check for nutrient deficiencies.",
  },
  {
    name: "Sugarcane",
    season: "Grand growth · Jul-Oct",
    image: "/sugarcane.jpg",
    warning:
      "Maintain adequate nutrition during active vegetative growth.",
  },
  {
    name: "Onion",
    season: "Bulb planting · Oct-Nov",
    image: "/onion.jpg",
    warning:
      "Maintain balanced nutrition during bulb development.",
  },
  {
    name: "Tomato",
    season: "Fruit set · Sep-Oct",
    image: "/tomato.jpg",
    warning:
      "Monitor fruit development and maintain balanced nutrition.",
  },
  {
    name: "Grape",
    season: "October pruning",
    image: "/grape.jpg",
    warning:
      "Follow an appropriate nutrition plan for the current growth stage.",
  },
  {
    name: "Pomegranate",
    season: "Hasta bahar · Sep-Oct",
    image: "/pomegranate.jpg",
    warning:
      "Monitor fruit development and maintain consistent irrigation.",
  },
  {
    name: "Chilli",
    season: "Flowering · Sep-Nov",
    image: "/chilli.jpg",
    warning:
      "Monitor flowering and fruit setting throughout the season.",
  },
  {
    name: "Turmeric",
    season: "Bulking · Sep-Nov",
    image: "/tumeric.jpg",
    warning:
      "Maintain suitable moisture and nutrition during rhizome development.",
  },
  {
    name: "Wheat",
    season: "Sowing · Nov",
    image: "/wheat.jpg",
    warning:
      "Prepare the soil and follow locally appropriate nutrient recommendations.",
  },
  {
    name: "Gram",
    season: "Sowing · Oct-Nov",
    image: "/gram.jpg",
    warning:
      "Check soil conditions and follow suitable nutrient recommendations.",
  },
];

const products = [
  {
    name: "Zinc Gold",
    description: "Chelated zinc · 500 ml",
    price: "₹380",
  },
  {
    name: "Mag Gold",
    description: "Magnesium sulphate · 1 kg",
    price: "₹210",
  },
  {
    name: "Sunshine Zinc EDTA 12%",
    description: "Chelated zinc · 250 ml",
    price: "₹240",
    bestseller: true,
  },
];

export default function CropSection() {
  const [selectedCrop, setSelectedCrop] = useState("Banana");

  const crop = crops.find((item) => item.name === selectedCrop);

  return (
    <section id="crops" className="mx-auto max-w-[98vw] px-4 py-10 md:px-6">

      {/* SECTION HEADING */}
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#eee7dc] px-3 py-1.5 text-[10px] text-[#29145f]">
          <span className="h-2 w-2 rounded-full bg-[#ffc400]" />
          Find my crop
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#29145f] md:text-4xl">
          Start with your crop
        </h2>

        <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-gray-500">
          Twelve crops, all on one screen. Tap yours to see what it
          needs this month.
        </p>
      </div>

      {/* FIRST ROW: SIX CROPS */}
      <div className="grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-4 md:grid-cols-6">
        {crops.slice(0, 6).map((item) => {
          const isSelected = selectedCrop === item.name;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelectedCrop(item.name)}
              aria-pressed={isSelected}
              className={`group min-w-0 rounded-xl text-left ${
                isSelected
                  ? "ring-2 ring-[#29145f] ring-offset-2"
                  : ""
              }`}
            >
              <div className="relative h-24 overflow-hidden rounded-xl sm:h-28 md:h-24 lg:h-49">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 30vw, 16vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                {isSelected && (
                  <span className="absolute left-2 top-3 rounded-full bg-white px-2 py-1 text-[14px] font-medium text-[#29145f]">
                    Selected
                  </span>
                )}

                <span
                  className={`absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-xl ${
                    isSelected
                      ? "bg-[#FFC60B] text-[#29145f]"
                      : "bg-[#1C0C4A] text-white"
                  }`}
                >
                  <ArrowRight size={18} />
                </span>
              </div>

              <p className="mt-2 truncate text-[17px] font-semibold text-[#29145f]">
                {item.name}
              </p>

              <p className="mt-1 text-[13px] leading-4 text-gray-500">
                {item.season}
              </p>
            </button>
          );
        })}
      </div>

      {/* SELECTED CROP DETAILS */}
      <div className="my-6 grid gap-6 rounded-2xl border border-[#b9add5] bg-[#fbfaf7] p-4 md:grid-cols-2 md:p-6">

        {/* LEFT SIDE */}
        <div>
          <p className="text-[9px] lg:text-[12px] font-semibold uppercase tracking-widest text-[#C89440]">
            Your crop this month
          </p>

          <h3 className="mt-1 text-2xl lg:text-[34px] font-bold text-[#1C0C4A]">
            {selectedCrop}
          </h3>

          <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] text-gray-600">
            <span className="h-2 w-2 rounded-full bg-[#ffc400]" />
            {crop.season}
          </p>

          {/* WARNING CARD */}
          <div className="mt-4 rounded-xl border border-[#eee8de] bg-white p-3">
            <p className="flex items-center gap-2 text-[9px] lg:text-[12px] font-semibold uppercase tracking-wider text-[#c99a3a]">
              <AlertCircle size={20} />
              Watch out for
            </p>

            <p className="mt-2 text-[11px] lg:text-[17px] font-medium leading-5 text-[#29145f]">
              {crop.warning}
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href="#products"
              className="inline-flex items-center gap-3 rounded-full bg-[#ffc400] px-4 py-3 text-[10px] lg:text-[16px] font-semibold text-[#29145f] transition hover:bg-[#edb900]"
            >
              Full {selectedCrop.toLowerCase()} guide

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#29145f] text-white">
                <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#e7dfd2] bg-white px-4 py-3 text-[10px] lg:text-[16px] font-semibold text-[#29145f] transition hover:bg-gray-50"
            >
              <MessageCircle size={13} />
              Ask on WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: PRODUCTS */}
        <div id="products">
          <p className="text-[9px] lg:text-[12px] font-semibold uppercase tracking-widest text-[#c99a3a]">
            Products that help right now
          </p>

          <div className="mt-3 space-y-2">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex items-center gap-3 rounded-xl border border-[#eee8de] bg-white p-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#f7f1e5] text-[#c99a3a]">
                  <FlaskConical size={16} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[16px] font-semibold text-[#29145f]">
                      {product.name}
                    </p>

                    {product.bestseller && (
                      <span className="rounded bg-[#ffc400] px-1.5 py-0.5 text-[7px] font-bold text-[#29145f]">
                        BESTSELLER
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-[12px] text-gray-500">
                    {product.description}
                  </p>
                </div>

                <p className="shrink-0 text-[14px] font-bold text-[#29145f]">
                  {product.price}
                </p>

                <button
                  type="button"
                  aria-label={`View ${product.name}`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#eee8de] text-gray-400 transition hover:bg-[#f5f0e6]"
                >
                  <Plus size={17} />
                </button>
              </div>
            ))}
          </div>

          <p className="mt-3 text-left text-[9px] lg:text-[14px] text-gray-500">
            Not sure which one? An agronomist replies on WhatsApp,
            7 am – 8 pm.
          </p>
        </div>
      </div>

      {/* SECOND ROW: SIX CROPS */}
      <div className="grid grid-cols-3 gap-x-2 gap-y-5 sm:grid-cols-4 md:grid-cols-6">
        {crops.slice(6).map((item) => {
          const isSelected = selectedCrop === item.name;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setSelectedCrop(item.name)}
              aria-pressed={isSelected}
              className={`group min-w-0 rounded-xl text-left ${
                isSelected
                  ? "ring-2 ring-[#29145f] ring-offset-2"
                  : ""
              }`}
            >
              <div className="relative h-24 overflow-hidden rounded-xl sm:h-28 md:h-24 lg:h-49">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 30vw, 16vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />

                {isSelected && (
                  <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-1 text-[14px] font-medium text-[#29145f]">
                    Selected
                  </span>
                )}

                <span
                  className={`absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-xl ${
                    isSelected
                     ? "bg-[#FFC60B] text-[#29145f]"
                      : "bg-[#1C0C4A] text-white"
                  }`}
                >
                  <ArrowRight size={18} />
                </span>
              </div>

              <p className="mt-2 truncate text-[17px] font-semibold text-[#29145f]">
                {item.name}
              </p>

              <p className="mt-1 text-[13px] leading-4 text-gray-500">
                {item.season}
              </p>
            </button>
          );
        })}
      </div>

    </section>
  );
}