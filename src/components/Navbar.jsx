
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { defaultSiteContent } from "@/lib/site-content";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState(defaultSiteContent.navbar);

  useEffect(() => {
    fetch("/api/site-content", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load navbar");
        return res.json();
      })
      .then((data) => {
        if (data.navbar) {
          setNavbar((current) => ({ ...current, ...data.navbar }));
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const languages = navbar.languages || [];
  const links = navbar.links || [];

  return (
    <header className="relative z-50 border-[#eee9df] bg-white">
      <nav className="mx-auto flex max-w-[90vw] items-center justify-between gap-0 px-5 py-3 md:px-8 lg:px-12">
        <div className="flex w-base items-center justify-center gap-10">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f2e9] text-[#29145f] transition hover:bg-[#eee5d5]"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            {links.map((link, index) => (
              <a
                key={`${link.href}-${index}`}
                href={link.href}
                className="text-base font-semibold text-[#281653] transition hover:text-[#d59a24]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#home"
          aria-label="Sunshine home"
          className="flex shrink-0 flex-col items-center leading-none"
        >
          <Image
            src={navbar.logo || "/sunshine_logo.png"}
            alt="Sunshine logo"
            width={147}
            height={74}
          />
        </a>

        <div className="flex w-base items-center justify-center">
          <div className="hidden items-center gap-10 md:flex">
            <div className="flex items-center gap-1 rounded-full bg-[#F5F1E8] p-1">
              {languages.map((language, index) => (
                <button
                  key={`${language}-${index}`}
                  type="button"
                  className={`rounded-full px-2 py-2 text-xs font-semibold text-[#35265F] ${
                    index === 0 ? "bg-white px-3 shadow-sm" : ""
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>

            <a
              href={`tel:${navbar.phoneLink}`}
              className="flex flex-col text-right text-[#29145f]"
            >
              <span className="text-base font-semibold">{navbar.phone}</span>
              <span className="mt-1 text-[13px] text-gray-500">
                {navbar.hours}
              </span>
            </a>

            <a
              href={navbar.ctaLink}
              className="flex items-center gap-2 rounded-full bg-[#29145f] px-4 py-3 text-xs text-white transition hover:bg-[#41247f]"
            >
              {navbar.ctaText}
            </a>
          </div>
        </div>

        <a
          href={navbar.ctaLink}
          aria-label={navbar.ctaText || "Contact Sunshine"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#29145f] text-white md:hidden"
        >
          <ArrowUpRight size={18} />
        </a>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-[#eee9df] bg-white p-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                key={`${link.href}-${index}`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#29145f]"
              >
                {link.label}
              </a>
            ))}

            <a
              href={navbar.ctaLink}
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-[#ffc400] px-4 py-3 text-center text-sm font-semibold text-[#29145f]"
            >
              {navbar.ctaText}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
