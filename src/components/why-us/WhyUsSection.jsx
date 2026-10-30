const principles = [
  {
    number: "01",
    title: "Base fabric",
    description:
      "Our own formulation lines. Our own quality check on every batch. No outside product sold under our name.",
    icon: "factory",
    variant: "navy",
    span: "md:col-span-3",
  },
  {
    number: "02",
    title: "Sourcing",
    description:
      "Long-term partners for top-grade raw material. Every supplier checked every year for strength, purity and where it comes from.",
    icon: "box",
    variant: "white",
    span: "md:col-span-3",
  },
  {
    number: "03",
    title: "Protocols",
    description:
      "Written steps for every product. Every change recorded. No shortcuts — not even for large orders.",
    icon: "clipboard",
    variant: "orange",
    span: "md:col-span-2",
  },
  {
    number: "04",
    title: "Positioning",
    description:
      "Priced for the farmer, not the shelf. Value that shows at harvest, not at the counter.",
    icon: "rupee",
    variant: "cream",
    span: "md:col-span-2",
  },
  {
    number: "05",
    title: "Ethics",
    description:
      "No inflated claims. No tricky packaging. No hidden formula change between batches or seasons.",
    icon: "shield",
    variant: "white",
    span: "md:col-span-2",
  },
];

const iconPaths = {
  factory: (
    <>
      <path d="M3 21V9l6 3V9l6 3V5h6v16H3Z" />
      <path d="M7 16h2m3 0h2m3 0h2M17 9h1" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="M3 8v9l9 5 9-5V8" />
      <path d="M12 13v9" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="18" rx="2" />
      <path d="M9 4V2h6v2m-6 5h6m-6 4h6m-6 4h4" />
    </>
  ),
  rupee: (
    <>
      <path d="M6 5h12M6 9h12M8 5c5 0 7 2 7 5s-2 5-7 5l8 6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

function PrincipleIcon({ type }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      {iconPaths[type]}
    </svg>
  );
}

export default function WhyUsSection() {
  return (
    <section className="w-full border-t border-[#e5e2dc] bg-[#f6f3ed] px-6 py-12 md:px-10 md:py-16 lg:px-16">
      <div>
        {/* Heading */}
        <div className="mb-8 grid grid-cols-1 items-end gap-5 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs md:text-sm font-bold uppercase tracking-[2px] text-[#dc6827]">
              Why Us
            </p>

            <h2 className="text-3xl  font-bold leading-[1.08] tracking-tight text-[#142541] lg:text-5xl">
              Five things we won’t
              <br />
              <span className="text-[#eb6b1c]">compromise on.</span>
            </h2>
          </div>

          <p className="max-w-[400px] pb-1 text-base text-[#77736e]">
            We’d rather be the second-largest in a district we serve well than
            the largest in one we don’t. Every promise below is one we hold
            ourselves to — in public.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-6">
          {principles.map((item) => {
            const styles = {
              navy: {
                card: "bg-[#142541] text-white",
                icon: "bg-[#293b59] text-white",
                number: "text-[#263651]",
                description: "text-[#c3cbd7]",
                label: "text-[#f4a15f]",
              },
              white: {
                card: "border border-[#dedede] bg-white text-[#142541]",
                icon: "bg-[#142541] text-white",
                number: "text-[#f0f1f3]",
                description: "text-[#777777]",
                label: "text-[#dc6827]",
              },
              orange: {
                card: "bg-[#ed7019] text-white",
                icon: "bg-[#f18b42] text-white",
                number: "text-[#f58232]",
                description: "text-[#36200e]",
                label: "text-[#44210b]",
              },
              cream: {
                card: "bg-[#f0ece2] text-[#142541]",
                icon: "bg-[#142541] text-white",
                number: "text-[#e6e2d8]",
                description: "text-[#777777]",
                label: "text-[#dc6827]",
              },
            };

            const style = styles[item.variant];

            return (
              <article
                key={item.number}
                className={`group relative flex min-h-[215px] flex-col justify-between overflow-hidden rounded-[6px] p-5 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[325px] ${item.span} ${style.card}`}
              >
                {/* Background Number */}
                <span
                  className={`pointer-events-none absolute right-3 top-2 text-[76px] font-extrabold leading-none tracking-tighter md:text-[88px] ${style.number}`}
                  aria-hidden="true"
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className={`relative z-10 flex h-[34px] w-[34px] items-center justify-center rounded-full ${style.icon}`}
                >
                  <PrincipleIcon type={item.icon} />
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <p className={`mb-1 text-lg font-bold ${style.label}`}>
                    {item.number}
                  </p>

                  <h3 className="mb-2 text-2xl lg:text-3xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  <p
                    className={`max-w-[360px] text-sm leading-[1.6] ${style.description}`}
                  >
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
