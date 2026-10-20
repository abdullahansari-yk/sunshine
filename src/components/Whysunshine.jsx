import Image from "next/image";
import { ArrowRight } from "lucide-react";

const floatingImages = [
  {
    src: "/whysunshine1.jpg",
    alt: "Farmer working in the field",
    position: "left-6 top-8 md:left-8 md:top-8",
    rotation: "-rotate-6",
  },
  {
    src: "/whysunshine2.jpg",
    alt: "Healthy crops growing in a field",
    position: "right-6 top-8 md:right-8 md:top-8",
    rotation: "rotate-6",
  },
  {
    src: "/whysunshine3.jpg",
    alt: "Close-up of a crop",
    position: "bottom-8 left-8 md:bottom-8 md:left-10",
    rotation: "rotate-3",
  },
  {
    src: "/whysunshine4.jpg",
    alt: "Farmer inspecting crops",
    position: "bottom-8 right-8 md:bottom-8 md:right-10",
    rotation: "-rotate-3",
  },
];

export default function Whysunshine() {
  return (
    <section className="mx-auto max-w-[98vw] px-4 py-8 md:px-6 lg:py-12">
      <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-[24px] border border-[#eeeae2] bg-[#fbfaf7] px-5 py-14 md:min-h-[520px] md:px-20">

        {/* FLOATING IMAGES */}
        {floatingImages.map((image) => (
          <div
            key={image.position}
            className={`absolute ${image.position} ${image.rotation} z-10 h-[85px] w-[75px] overflow-hidden rounded-xl shadow-[0_12px_24px_rgba(25,15,60,0.16)] transition duration-300 hover:rotate-0 hover:scale-105 md:h-[170px] md:w-[130px]`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="210px"
              className="object-cover"
            />
          </div>
        ))}

        {/* CENTER CONTENT */}
        <div className="relative z-20 mx-auto max-w-[650px] text-center">

          {/* LABEL */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#eee7dc] bg-white px-3 py-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ffc400]" />

            <span className="text-[13px] font-semibold text-[#29145f]">
              Why Sunshine
            </span>
          </div>

          {/* HEADLINE */}
          <h2 className="text-[25px] font-semibold leading-[1.35] tracking-tight text-[#292929] md:text-[34px] md:leading-[1.3]">
            At <span className="font-bold text-[#29145f]">Sunshine</span>, we
            make crop nutrition in{" "}
            <span className="text-[#c99535]">our own Jalgaon lab</span>, test{" "}
            <span className="font-bold text-[#29145f]">every batch</span>, and
            send agronomists to{" "}
            <span className="text-[#c99535]">your field</span> — so you know
            what your crop needs{" "}
            <span className="font-bold text-[#29145f]">before you buy.</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-[420px] text-[16px] leading-[1.8] text-gray-500">
            21 years, 21 districts, and one rule: a farmer should never pay
            for advice or for a product his crop does not need.
          </p>

          {/* CTA */}
          <a
            href="#story"
            className="mx-auto mt-5 inline-flex items-center gap-4 rounded-full bg-[#29145f] py-1.5 pl-7 px-1.5 text-[16px] font-medium text-white transition hover:bg-[#3a2379]"
          >
            Our story

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffc400] text-[#29145f]">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}