import { ArrowUpRight,ArrowUp } from "lucide-react";

const footerColumns = [
  {
    heading: "For farmers",
    links: [
      ["Find my crop", "#crops"],
      ["Weather", "#weather"],
      ["Schemes", "#schemes"],
      ["Ask an expert", "#krishikul"],
    ],
  },
  {
    heading: "Company",
    links: [
      ["About us", "#story"],
      ["Certificates", "#certificates"],
      ["Careers", "#careers"],
      ["Dealers", "#dealers"],
    ],
  },
  {
    heading: "Talk to us",
    links: [
      ["Jalgaon, Maharashtra", "#contact"],
      ["+91 0000 000000", "tel:+910000000000"],
      ["WhatsApp, 7 am – 8 pm", "#krishikul"],
      ["EN · मराठी · हिंदी", "#languages"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#eeeae2] bg-white text-[#29145f]">

      {/* TOP CTA */}
      <div className="mx-auto max-w-[98vw] px-5 py-10 md:px-8 lg:px-10 lg:py-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

          <h2 className="max-w-lg text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Show us your crop.
            <br />
            <span className="text-[#c99535]">We'll show you</span> what it
            <br className="hidden md:block" /> needs.
          </h2>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="#crops"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffc400] px-7 py-3 text-[16px] font-semibold text-[#29145f] transition hover:bg-[#edb900]"
            >
              Find my crop
              <ArrowUp size={20} />
            </a>

            <a
              href="#krishikul"
              className="inline-flex items-center gap-2 rounded-full bg-[#21104f] px-7 py-3 text-[16px] font-semibold text-white transition hover:bg-[#392274]"
            >
              WhatsApp us
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-[#eeeae2] md:my-10" />

        {/* FOOTER COLUMNS */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-8">

          {/* COMPANY INTRO */}
          <div>
            <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#c99535]">
              Sunshine Agri
            </p>

            <p className="max-w-[210px] text-[16px] leading-[1.8] text-gray-500">
              Sunshine Agri Pvt. Ltd., Jalgaon, Maharashtra. Crop nutrition
              made and tested for Indian fields since 2005.
            </p>
          </div>

          {/* LINK COLUMNS */}
          {footerColumns.map((column) => (
            <div key={column.heading}>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#c99535]">
                {column.heading}
              </p>

              <ul className="space-y-2">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[16px] font-medium transition hover:text-[#c99535]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* LARGE BACKGROUND WORDMARK */}
      <div className="relative overflow-hidden border-b border-[#eeeae2] px-3 pt-8">
        <p
          aria-hidden="true"
          className="select-none text-center text-[19vw] font-bold leading-[0.85] tracking-[-0.07em] text-[#f3f1f5]"
        >
          sunshine
        </p>
      </div>

    </footer>
  );
}