
"use client";

import { useEffect, useState } from "react";
import { Sprout, Users, Store, BadgeCheck } from "lucide-react";
import { defaultSiteContent } from "@/lib/site-content";

const icons = [Sprout, Users, Store, BadgeCheck];

export default function Stats() {
  const [items, setItems] = useState(defaultSiteContent.stats.items);

  useEffect(() => {
    fetch("/api/site-content", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load stats");
        return res.json();
      })
      .then((data) => {
        if (data.stats?.items) setItems(data.stats.items);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="mx-auto mt-5 w-full max-w-[98vw] px-3 md:px-5">
      <div className="grid grid-cols-2 gap-3 rounded-2xl bg-[#f5f0e6] p-4 md:grid-cols-4 md:gap-5 md:px-8 md:py-6">
        {items.map((stat, index) => {
          const Icon = icons[index] || Sprout;

          return (
            <div key={`${stat.label}-${index}`} className="flex items-center gap-3">
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-white text-[#d6a23a]">
                <Icon size={25} />
              </div>
              <div>
                <p className="text-lg font-bold leading-tight text-[#29145f] md:text-[30px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] text-gray-500 md:text-[15px]">
                  {stat.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
