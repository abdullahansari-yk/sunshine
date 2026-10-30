import Image from "next/image";
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Learn",
    description: "Short lessons on soil, nutrition and protection.",
    badge: "24 articles",
    imageLabel: "/banana.jpg",
    href: "/learn",
  },
  {
    number: "02",
    title: "Weather",
    description: "7-day forecast for your district, with spray timing.",
    badge: "Live",
    imageLabel: "/cotton.jpg",
    href: "/weather",
  },
  {
    number: "03",
    title: "Govt. Schemes",
    description: "Central and state yojanas, and how to apply.",
    badge: "38 schemes",
    imageLabel: "/chilli.jpg",
    href: "/government-schemes",
  },
  {
    number: "04",
    title: "Ask an Expert",
    description: "Send a photo. An agronomist replies on WhatsApp.",
    badge: "Free",
    imageLabel: "/sugarcane.jpg",
    href: "/ask-expert",
  },
  {
    number: "05",
    title: "Choose Product",
    description: "Tell us crop, stage and problem. We suggest one.",
    badge: "3 taps",
    imageLabel: "/grape.jpg",
    href: "/choose-product",
  },
  {
    number: "06",
    title: "Farm Tools",
    description: "Crop planner, cost and profit, sowing calendar.",
    badge: "3 tools",
    imageLabel: "/soybean.jpg",
    href: "/farm-tools",
  },
  {
    number: "07",
    title: "Sell Your Harvest",
    description: "Connect with buyers and FPOs. No commission.",
    badge: "Free",
    imageLabel: "/wheat.jpg",
    href: "/sell-harvest",
  },
  {
    number: "08",
    title: "Diagnose",
    description: "Take a leaf photo, get the likely cause.",
    badge: "Coming in V2",
    imageLabel: "/tomato.jpg",
    href: null,
    disabled: true,
  },
];

export default function KrishikulList() {
  return (
    <section className="w-full bg-[#f7f4ee] px-6 py-12 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1400px]">
        {/* Section Heading */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-5 bg-[#e66a22]" />
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#d96825]">
                Start Here
              </span>
            </div>

            <h2 className="max-w-[430px] text-[30px] font-bold leading-[1.05] text-[#142c4b] md:text-[38px]">
              What do you want
              <br />
              <span className="text-[#ed6b19]">to do today?</span>
            </h2>
          </div>

          <p className="max-w-[260px] pb-1 text-[13px] leading-6 text-[#777777]">
            Tap one picture. Each one opens its own page.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.number}
              className={`overflow-hidden rounded-[7px] border border-[#dedede] bg-white shadow-sm transition-all duration-300 ${
                item.disabled
                  ? "opacity-60"
                  : "hover:-translate-y-1 hover:shadow-md"
              }`}
            >
              {/* Image Placeholder */}
              <div className="relative h-[200px] overflow-hidden bg-[#e9e5db]">
                <Image src={item.imageLabel} alt={item.title} fill />
              </div>

              {/* Card Content */}
              <div className="p-4">
                {/* Number and Badge */}
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-[#df6825]">
                    {item.number}
                  </span>

                  <span className="rounded-full bg-[#FBEEE2] px-2.5 py-1 text-[9px] font-semibold text-[#d96b2c]">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-1.5 text-[17px] font-bold leading-tight text-[#142c4b]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mb-3 min-h-[36px] text-[12px] leading-[1.5] text-[#777777]">
                  {item.description}
                </p>

                {/* Link */}
                {item.disabled ? (
                  <span className="text-[11px] font-semibold text-[#aaa]">
                    Tell me when ready
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#dc6424] transition-all duration-300 hover:gap-2"
                  >
                    Open
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
