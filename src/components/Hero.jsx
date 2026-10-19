"use client";

import Image from "next/image";
import { ArrowUpRight, Plus, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto mt-2 w-full max-w-[1600px] px-3 md:px-5"
    >
      <div className="relative min-h-[480px] overflow-hidden rounded-[24px] bg-[#f5f0e6] md:min-h-[580px]">

        {/* Background image */}
        <Image
          src="/landingpage.jpeg"
          alt="Banana crops growing on an agricultural farm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom-right"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f6f1e7] via-[#f6f1e7]/95 to-transparent md:via-[#f6f1e7]/80" />

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[480px] flex-col justify-center px-6 py-12 md:min-h-[530px] md:w-[65%] md:px-12 lg:px-14">

          {/* Eyebrow */}
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c99a3a]">
            — Jalgaon · Since 2005
          </p>

          {/* Heading */}
          <h1 className="max-w-[560px] text-[38px] font-bold leading-[1.04] tracking-[-1.8px] text-[#29145f] sm:text-5xl lg:text-[62px]">
            Grown with care.
            <br />
            Tested for{" "}
            <span className="text-[#dca52d]">every</span>
            <br />
            field.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-95 text-[12px] leading-[1.8] text-[#625c67] md:text-[18px]">
            Crop nutrition made in our own Jalgaon lab —
            with free advice from agronomists who come to
            your farm.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#crops"
              className="inline-flex items-center gap-3 rounded-full bg-[#ffc400] px-4 py-3 text-[16px] font-semibold text-[#29145f] transition hover:bg-[#edb900]"
            >
              Find my crop
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#29145f] text-white">
                <ArrowUpRight size={12} />
              </span>
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[#e5ded1] bg-white/80 px-4 py-3 text-[16px] font-semibold text-[#29145f] transition hover:bg-white"
            >
              Get crop advice
            </a>
          </div>

          {/* Seasonal information */}
          <div className="mt-8 inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-[14px] text-[#625c67] shadow-sm">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffc400]" />
            September · Banana flowering, cotton boll setting
          </div>
        </div>

        {/* Floating farmers card 1 */}
        <div className="absolute right-4 top-5 z-20 hidden w-[380px] items-center gap-3 rounded-2xl border border-white/70 bg-white/60 p-3 shadow-lg backdrop-blur-md lg:flex">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#f5f0e6]">
            {/* <Globe2 size={21} className="text-[#29145f]" /> */}
            <img src="/world.png" alt="" width="92px" height="92px" />
          </div>

          <div>
            <p className="text-[16px] font-bold text-[#29145f]">
              4,20,000+ farmers
            </p>
            <p className="mt-1 text-[14px] leading-4 text-gray-500">
              Punjab · Maharashtra · Tamil Nadu and more
            </p>
          </div>
        </div>

        {/* Floating field card 2 */}
        <div className="absolute bottom-5 right-5 z-20 hidden w-120 items-center gap-3 rounded-2xl bg-white/60 p-3 shadow-lg backdrop-blur-md lg:flex">
          <div className="relative h-21 w-30 shrink-0 overflow-hidden rounded-lg bg-[#e5e9d6]">
            <Image
              src="/land.jpg"
              alt="Agricultural field"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="text-[17px] font-semibold text-[#29145f]">
              From our lab to your field
            </p>
            <p className="mt-1 text-[14px] text-gray-500">
              Free soil checks and science-led advice
            </p>
          </div>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-blue-#FFFFFF border-gray-100 text-[#29145f]">
            <Plus size={16} />
          </span>
        </div>
      </div>
    </section>
  );
}