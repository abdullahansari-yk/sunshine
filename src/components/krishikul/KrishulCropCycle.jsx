import React from "react";

const cropStages = [
  {
    id: 1,
    title: "Pre-sowing",
    description: "Soil test, choose the crop, add compost and biofertilizer.",
    category: "Biofertilizers",
    href: "/products/biofertilizers",
  },
  {
    id: 2,
    title: "Sowing",
    description: "Treat seed with Sunshine cultures before sowing.",
    category: "Biofertilizers",
    href: "/products/biofertilizers",
  },
  {
    id: 3,
    title: "Growth",
    description: "Biostimulant and micronutrient at the right stage.",
    category: "Biostimulants",
    href: "/products/biostimulants",
  },
  {
    id: 4,
    title: "Flowering",
    description: "Boron, calcium and growth promoters for fruit set.",
    category: "Micronutrients",
    href: "/products/micronutrients",
  },
  {
    id: 5,
    title: "Protection",
    description: "Check the field early. Spray only in a safe window.",
    category: "Plant Protection",
    href: "/products/plant-protection",
  },
  {
    id: 6,
    title: "Harvest",
    description: "Sell at the best mandi rate. Compost the leftovers.",
    category: "Biofertilizers",
    href: "/products/biofertilizers",
  },
];

const KrishulCropCycle = () => {
  return (
    <section className="w-full bg-[#F2EEE4]">
      <div className="w-[90vw] mx-auto py-15">
        {/* heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-xs text-[#d96825]">
              <span className=" uppercase">sop</span>
              <span className="h-[2px] w-5 bg-[#e66a22]" />
              <span className=" font-semibold uppercase tracking-[2px]">
                Krishikul crop cycle
              </span>
            </div>

            <h2 className="max-w-[430px] text-3xl font-bold leading-[1.05] text-[#142c4b] md:text-4xl">
              One crop.
              <br />
              <span className="text-[#ed6b19]">Six stages.</span>
            </h2>
          </div>

          <p className="max-w-82.5  pb-1 text-sm md:text-base leading-6 text-[#777777]">
            What to do at each stage, and which Sunshine range helps.
          </p>
        </div>

        {/* crop stages */}
        <div className="text-black flex flex-col md:flex-row items-center justify-start gap-0">
          {cropStages.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-start"
            >
              <div className="flex items-center justify-center gap-5">
                <div
                  className={`w-15 h-15 rounded-full bg-[#12213C] flex items-center justify-center text-white font-semibold text-2xl hover:bg-[#e66a22] transition-transform duration-300 `}
                >
                  {item.id}
                </div>
                {item.id !== 6 && (
                  <span className="h-[2.8px] w-40 bg-gray-400" />
                )}
              </div>
              <div className="flex flex-col justify-center items-start gap-2 mt-5">
                <div className="text-2xl">{item.title}</div>
                <div className="w-45 text-sm text-[#0000009e]">
                  {item.description}
                </div>
                <div className="text-[#c2571a] flex gap-2 ">
                  {item.category}
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KrishulCropCycle;
