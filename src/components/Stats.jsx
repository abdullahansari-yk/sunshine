import {
    Sprout,
    Users,
    Store,
    BadgeCheck,
  } from "lucide-react";
  
  const stats = [
    {
      icon: Sprout,
      value: "21",
      label: "years in Jalgaon",
    },
    {
      icon: Users,
      value: "4,20,000+",
      label: "farmers",
    },
    {
      icon: Store,
      value: "1,850+",
      label: "dealers",
    },
    {
      icon: BadgeCheck,
      value: "100%",
      label: "batches tested",
    },
  ];
  
  export default function Stats() {
    return (
      <section className="mx-auto mt-5 w-full max-w-[98vw] px-3 md:px-5">
        <div className="grid grid-cols-2 gap-3 rounded-2xl bg-[#f5f0e6] p-4 md:grid-cols-4 md:gap-5 md:px-8 md:py-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
  
            return (
              <div
                key={stat.label}
                className="flex items-center gap-3"
              >
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