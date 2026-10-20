"use client";

import Image from "next/image";
import { useState } from "react";
import {
  MapPin,
  Users,
  FlaskConical,
  BadgeCheck,
} from "lucide-react";

export default function WhysunshineStats() {
  const [batchNumber, setBatchNumber] = useState("");

  const [verified, setVerified] = useState(false);

  const verifyBatch = (e) => {
    e.preventDefault();

    if (!batchNumber.trim()) return;

    // Visual demonstration only; no real verification API yet.
    setVerified(true);
  };

  return (
    <section className="mx-auto max-w-[98vw] px-4 pb-12 md:px-6 lg:pb-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.05fr_1fr_1fr]">

        {/* FARMER IMAGE */}
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl md:row-span-2 lg:min-h-[500px]">
          <Image
            src="/land.jpg"
            alt="Farmer working in a green agricultural field"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />

          <div className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-2 text-[14 px] font-medium text-[#29145f] shadow-sm">
            <span className="mr-1 text-[#ffc400]">●</span>
            Welcome to your field
          </div>
        </div>

        {/* 21 YEARS */}
        <div className="rounded-2xl border border-[#eeeae2] bg-white p-4 md:p-5">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#eeeae2] bg-[#fbfaf7] text-[#c99a3a]">
            <MapPin size={21} />
          </div>

          <h3 className="text-4xl font-bold leading-none tracking-tight text-[#29145f]">
            21 years
          </h3>

          <p className="mt-2 text-xl font-semibold text-[#29145f]">
            Across 21 districts
          </p>

          <p className="mt-2 text-[15px] leading-4 text-gray-500">
            Built on local knowledge — from Raver to Nandurbar.
          </p>
        </div>

        {/* AGRONOMISTS */}
        <div className="rounded-2xl bg-[#21104f] p-4 text-white md:p-5">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#ffc400]">
            <Users size={21} />
          </div>

          <h3 className="text-4xl font-bold leading-none tracking-tight">
            38
          </h3>

          <p className="mt-2 text-xl font-semibold">
            Agronomists in the field
          </p>

          <p className="mt-2 text-[15px] leading-4 text-white/65">
            Real people, practical advice, in your language.
          </p>
        </div>

        {/* BATCHES TESTED */}
        <div className="rounded-2xl border border-[#eeeae2] bg-white p-4 md:p-5">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#eeeae2] bg-[#fbfaf7] text-[#c99a3a]">
            <FlaskConical size={21} />
          </div>

          <h3 className="text-4xl font-bold leading-none tracking-tight text-[#29145f]">
            100%
          </h3>

          <p className="mt-2 text-xl font-semibold text-[#29145f]">
            Batches tested
          </p>

          <p className="mt-2 text-[15px] leading-4 text-gray-500">
            Own formulation lab in Jalgaon, retention sample for every batch.
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {["CIB", "FCO", "ISO", "GMP"].map((certification) => (
              <span
                key={certification}
                className="rounded-full border border-[#e7d5b6] px-3.5 py-2 text-[12px] font-semibold text-[#29145f]"
              >
                {certification}
              </span>
            ))}
          </div>
        </div>

        {/* BATCH VERIFICATION */}
        <div className="flex flex-col rounded-2xl border border-[#eeeae2] bg-white p-4 md:p-5">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#eeeae2] bg-[#fbfaf7] text-[#c99a3a]">
            <BadgeCheck size={21} />
          </div>

          <h3 className="text-xl font-bold text-[#29145f]">
            Verify your batch
          </h3>

          <p className="mt-2 text-[15px] leading-4 text-gray-500">
            Check the test report behind your bag.
          </p>

          <form
            onSubmit={verifyBatch}
            className="mt-auto pt-5"
          >
            <div className="flex items-center rounded-full border border-[#eeeae2] bg-[#fbfaf7] p-1">
              <input
                type="text"
                value={batchNumber}
                onChange={(e) => {
                  setBatchNumber(e.target.value);
                  setVerified(false);
                }}
                placeholder="Batch number"
                aria-label="Batch number"
                className="min-w-0 flex-1 bg-transparent px-2 py-2 text-[16px] text-[#29145f] outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#21104f] px-4 py-2 text-[16px] font-semibold text-white transition hover:bg-[#392274]"
              >
                Verify
              </button>
            </div>

            {verified && (
              <p className="mt-2 text-[10px] text-amber-700">
                Demo only: connect a verification service to check this batch.
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}