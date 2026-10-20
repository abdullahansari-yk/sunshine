import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function FarmerStories() {
  return (
    <section className="mx-auto max-w-[98vw] px-5 py-12 md:px-8 lg:px-10 lg:py-16">

      {/* SECTION HEADING */}
      <div className="mb-7">
        <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c99a3a]">
          <span className="h-px w-5 bg-[#c99a3a]" />
          Farmer Stories
        </p>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#29145f] md:text-4xl">
          In their{" "}
          <span className="text-[#c99535]">own words.</span>
        </h2>
      </div>

      {/* TESTIMONIAL CONTENT */}
      <div className="grid grid-cols-1 items-center  gap-8 md:grid-cols-[35%_65%] md:gap-10 lg:gap-12">

        {/* LEFT: FARMER IMAGE */}
        <div className="relative h-[280px] overflow-hidden rounded-[22px] sm:h-[340px] lg:h-[480px]">
          <Image
            src="/img.jpg"
            alt="Farmer working in a paddy field"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

          {/* LOCATION BADGE */}
          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#ffc400]" />

            <span className="text-[12px] font-semibold text-[#29145f]">
              Paddy · Maharashtra
            </span>
          </div>
        </div>

        {/* RIGHT: TESTIMONIAL */}
        <div className="flex min-h-[280px] pr-10 flex-col bg-red- justify-between py-2 md:min-h-[340px] lg:min-h-[370px]">

          <div>
            {/* QUOTATION MARK */}
            <div className="mb-6 text-5xl font-bold leading-none tracking-tight text-[#ffc400]">
              “
            </div>

            {/* TESTIMONIAL TEXT */}
            <blockquote className="max-w-xl text-xl font-semibold leading-[1.55] tracking-tight text-[#29145f] md:text-3xl">
              Space for an approved farmer testimonial
              <br />
              —
              <br /> what changed on his
              field after the agronomist&apos;s visit.
            </blockquote>
          </div>

          {/* FARMER DETAILS + NEXT BUTTON */}
          <div className="mt-8 flex items-end justify-between gap-4">

            <div className="flex items-center gap-3">
              {/* FARMER AVATAR */}
              <div className="relative h-15 w-15 shrink-0 overflow-hidden rounded-full bg-[#f3eadb]">
                <Image
                  src="/img.jpg"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-[17px] font-semibold text-[#29145f]">
                  Paddy grower
                </p>

                <p className="mt-1 text-[14px] text-gray-500">
                  Farmer story · 1 of 3
                </p>
              </div>
            </div>

            {/* NEXT BUTTON */}
            <button
              type="button"
              aria-label="Next farmer story"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#29145f] text-white transition hover:bg-[#3b2477] md:h-16 md:w-16"
            >
              <ArrowRight size={18} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}