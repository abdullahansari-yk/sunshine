import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const news = [
  {
    category: "Registration",
    title: "New FCO registration for two micronutrient grades",
    date: "12 SEP 2026",
    action: "Read story",
    image: "/banana.jpg",
  },
  {
    category: "Field camps",
    title: "Free soil camps across six districts this kharif",
    date: "02 SEP 2026",
    action: "See villages",
    image: "/wheat.jpg",
  },
  {
    category: "Dealers",
    title: "Dealer onboarding opens in Marathwada",
    date: "21 AUG 2026",
    action: "Apply now",
    image: "/soybean.jpg",
  },
];

export default function NewsSection() {
  return (
    <section
      id="news"
      className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 lg:px-10 lg:py-16"
    >
      {/* SECTION HEADER */}
      <div className="mb-7 flex items-end justify-between gap-4">
        <div>
          <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c99a3a]">
            <span className="h-px w-5 bg-[#c99a3a]" />
            From the field
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#29145f] md:text-4xl">
            News & <span className="text-[#c99535]">camps.</span>
          </h2>
        </div>

        <a
          href="#all-news"
          className="mb-1 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#eeeae2] px-4 py-2.5 text-[10px] font-semibold text-[#29145f] transition hover:bg-[#fbfaf7]"
        >
          All news
          <ArrowUpRight size={12} />
        </a>
      </div>

      {/* NEWS CARDS */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {news.map((item) => (
          <article key={item.title} className="group min-w-0">
            {/* IMAGE */}
            <a
              href="#news"
              aria-label={item.action}
              className="relative block h-[190px] overflow-hidden rounded-[18px] bg-[#f1eee7] sm:h-[180px] lg:h-[153px] xl:h-[190px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* CATEGORY BADGE */}
              <span className="absolute left-2.5 top-2.5 rounded-full bg-white px-3 py-1.5 text-[9px] font-medium text-[#29145f] shadow-sm">
                {item.category}
              </span>
            </a>

            {/* CARD CONTENT */}
            <div className="relative flex min-h-[100px] items-stretch">
              <div className="flex-1 px-2 pt-3 pb-2">
                <h3 className="max-w-[270px] text-[13px] font-bold leading-[1.35] text-[#29145f]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[9px] font-medium text-[#c99535]">
                  {item.date}
                </p>

                <a
                  href="#news"
                  className="mt-1 block text-[11px] font-semibold text-[#29145f] hover:underline"
                >
                  {item.action}
                </a>
              </div>

              {/* ARROW BUTTON */}
              <a
                href="#news"
                aria-label={`Open: ${item.title}`}
                className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-tl-[20px] bg-white text-[#29145f] transition group-hover:bg-[#ffc400]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fbfaf7] transition group-hover:bg-[#ffc400]">
                  <ArrowUpRight size={14} />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}