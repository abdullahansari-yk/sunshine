"use client";

import Image from "next/image";
import {
  Sun,
  Landmark,
  Sprout,
  ArrowRight,
  Camera,
  Send,
  FlaskConical,
  Circle,
} from "lucide-react";

const services = [
  {
    title: "Weather for your village",
    description: "Forecast, read for your crop this week.",
    icon: Sun,
  },
  {
    title: "Government schemes",
    description: "What's open, who qualifies — 3 this month.",
    icon: Landmark,
  },
  {
    title: "Crop guides",
    description: "Stage, watch-out and what fixes it — 30 crops.",
    icon: Sprout,
  },
];

export default function KrishikulSection() {
  return (
    <section
      id="krishikul"
      className="mx-auto max-w-[98vw] px-5 py-12 md:px-8 lg:px-10 lg:py-16"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

        {/* LEFT: INTRODUCTION AND SERVICES */}
        <div>
          <p className="mb-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c99a3a]">
            <span className="h-px w-5 bg-[#c99a3a]" />
            Sunshine Krishikul
          </p>

          <h2 className="max-w-md text-4xl font-bold leading-[1.05] tracking-tight text-[#29145f] md:text-5xl">
            Send a photo.
            <br />
            Get an{" "}
            <span className="text-[#c99a3a]">answer.</span>
          </h2>

          <p className="mt-5 max-w-md text-xs leading-6 text-gray-600 md:text-[16px]">
            Advice before the sale, not after it. Real agronomists reply
            on WhatsApp in Marathi or Hindi, 7 am – 8 pm. Free, no app,
            no sign-up.
          </p>

          {/* SERVICE CARDS */}
          <div className="mt-7 space-y-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.title}
                  href="#contact"
                  className="group flex items-center gap-3 rounded-2xl py-3 transition hover:bg-[#fbfaf7]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f8f7f3] text-[#29145f]">
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-[#29145f]">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-[15px] leading-4 text-gray-500">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-[#29145f] shadow-sm transition group-hover:bg-[#ffc400]">
                    <ArrowRight size={20} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT: WHATSAPP CHAT MOCKUP */}
        <div className="overflow-hidden rounded-[28px] bg-white">

          {/* CHAT HEADER */}
          <div className="ml-auto flex  items-center justify-between gap-3 rounded-t-[26px] bg-[#29145f] px-4 py-4 text-white sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-[#f5f0e6]">
                <img src="/small.jpg" alt="" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-[11px] lg:text-[17px] font-semibold">
                  Sunshine agronomist
                </h3>

                <p className="mt-1 text-[9px] lg:text-[14px] text-white/70">
                  <span className="h-3 w-3 rounded-full bg-[#ffc400]" />
                  Usually replies in 15 min
                </p>
              </div>
            </div>

            <div className="flex shrink-0 gap-1">
              {["मराठी", "हिंदी", "EN"].map((language, index) => (
                <button
                  key={language}
                  type="button"
                  className={`rounded-full px-3.5 py-2 text-[12px] ${index === 0
                    ? "bg-[#ffc400] font-semibold text-[#29145f]"
                    : "bg-white/10 text-white"
                    }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          {/* CHAT BODY */}
          <div className="space-y-3 border-x border-[#f0ede7] bg-[#fbfaf7] p-4 sm:p-5">

            <div className="flex justify-center">
              <span className="rounded-full bg-white px-3 py-1 text-[8px] text-gray-500 shadow-sm">
                Today
              </span>
            </div>

            {/* USER MESSAGE */}
            <div className="ml-auto max-w-[88%] rounded-2xl border border-[#eeeae2] bg-white p-3 shadow-sm">
              <div className="relative h-28 overflow-hidden rounded-xl bg-[#e8e5d9] sm:h-60 max-w-xs">
                <Image
                  src="/banana.jpg"
                  alt="Banana plant showing yellowing leaves"
                  fill
                  // sizes="(max-width: 640px) 55vw, 350px"
                  
                  className="object-cover"
                />
              </div>

              <p className="mt-2 text-[16px] max-w-sm leading-5 text-gray-700">
                My banana leaves are turning yellow from the bottom.
                What should I spray?
              </p>

              <p className="mt-1 text-right text-[12px] text-gray-400">
                9:12 am
              </p>
            </div>

            {/* AGRONOMIST RESPONSE */}
            <div className="mr-auto max-w-[90%] rounded-2xl rounded-bl-sm bg-[#29145f] p-3 text-white">
              <p className="text-[16px] leading-5">
                That's <span className="font-semibold text-[#ffc400]">
                  zinc deficiency
                </span>{" "}
                at flowering — common in Raver this month. Spray twice,
                15 days apart. Avoid heavy urea now.
              </p>

              <div className="mt-2 flex items-center gap-3 rounded-xl bg-white/10 p-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/90 text-[#c99a3a]">
                  <FlaskConical size={20} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[14px] font-semibold">
                    Zinc Gold · 2 ml / litre
                  </p>

                  <p className="mt-1 text-[13px] text-white/60">
                    ₹380 · at your nearest dealer
                  </p>
                </div>
              </div>

              <p className="mt-1 text-right text-[12px] text-white/50">
                9:24 am
              </p>
            </div>

            {/* USER REPLY */}
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm border border-[#eeeae2] bg-white p-3">
              <p className="text-[16px] text-gray-700">
                Thank you! Will get it today.
              </p>

              <p className="mt-1 text-right text-[12px] text-gray-400">
                9:25 am
              </p>
            </div>

            {/* TYPING INDICATOR */}
            <div className="flex w-fit items-center gap-1 rounded-full bg-white px-3 py-2 shadow-sm">
              <Circle size={4} fill="currentColor" />
              <Circle size={4} fill="currentColor" />
              <Circle size={4} fill="currentColor" />
            </div>
          </div>

          {/* MESSAGE INPUT */}
          <div className="flex items-center gap-3 border border-[#f0ede7] bg-white p-3 sm:p-4">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#eeeae2] bg-[#fbfaf7] px-3 py-3">
              <Camera size={14} className="shrink-0 text-[#c99a3a]" />

              <span className="truncate text-[16px] text-gray-400">
                Send a photo of your crop...
              </span>
            </div>

            <button
              type="button"
              aria-label="Send message"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ffc400] text-[#29145f] transition hover:bg-[#edb900]"
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}