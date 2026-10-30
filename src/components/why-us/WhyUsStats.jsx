const stats = [
  {
    value: "21",
    label: "years, Jalgaon",
  },
  {
    value: "4,20,000+",
    label: "farmers",
  },
  {
    value: "1,850+",
    label: "dealers",
  },
  {
    value: "96",
    label: "products",
  },
];

export default function WhyUsStats() {
  return (
    <section className="w-full border-y border-[#e5e5e5] border-t-[6px] border-t-[#142744] bg-white px-6 py-7 md:px-10 lg:px-16">
      <div>
        {/* Section Label */}
        <p className="mb-6 text-sm md:text-base font-bold uppercase tracking-[2px] text-[#d95f24]">
          Trusted Across Maharashtra
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-extrabold leading-none tracking-tight text-[#142744] md:text-4xl">
                {stat.value}
              </h3>

              <p className="mt-1 text-base text-[#777777]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
