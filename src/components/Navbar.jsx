"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Menu,
    X,
    Phone,
    ArrowUpRight,
    ChevronDown,
} from "lucide-react";

const navigationLinks = [
    { label: "Products", href: "#products" },
    { label: "Crop guides", href: "#crops" },
    { label: "Krishikul", href: "#krishikul" },
    { label: "About", href: "#about" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="relative z-50 border-b border-[#eee9df] bg-white">
            <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 md:px-8 lg:px-12">

                {/* Menu button */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f6f2e9] text-[#29145f] transition hover:bg-[#eee5d5]"
                >
                    {menuOpen ? (
                        <X size={18} />
                    ) : (
                        <Menu size={18} />
                    )}
                </button>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 lg:flex">
                    {navigationLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-base font-semibold text-[#281653] transition hover:text-[#d59a24]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Logo placeholder */}
                <a
                    href="#home"
                    aria-label="Sunshine home"
                    className="flex shrink-0 flex-col items-center leading-none"
                >
                    <Image src="/sunshine_logo.png" alt="this is logo in navbar" width={147} height={74}/>
                </a>

                {/* Right-side actions */}
                <div className="hidden items-center gap-3 md:flex">

                   
                    <div className="flex items-center gap-1 rounded-full bg-[#F5F1E8] p-1">
                        <button className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#35265F] shadow-sm">
                            EN
                        </button>
                        <button className="px-2 py-2 text-xs font-semibold text-[#35265F]">
                            मराठी
                        </button>
                        <button className="px-2 py-2 text-xs font-semibold text-[#35265F]">
                            हिंदी
                        </button>
                    </div>

                    <a
                        href="tel:+910000000000"
                        className="flex flex-col text-right text-[#29145f]"
                    >
                        <span className="text-base font-semibold">
                            +91 00000 00000
                        </span>

                        <span className="mt-1 text-[13px] text-gray-500">
                            7 am – 8 pm
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="flex items-center gap-2 rounded-full bg-[#29145f] px-4 py-3 text-xs text-white transition hover:bg-[#41247f]"
                    >
                        Talk to us
                    </a>
                </div>

                {/* Mobile contact button */}
                <a
                    href="#contact"
                    aria-label="Contact Sunshine"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#29145f] text-white md:hidden"
                >
                    <ArrowUpRight size={18} />
                </a>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="absolute left-0 right-0 top-full border-b border-[#eee9df] bg-white p-5 shadow-lg lg:hidden">
                    <div className="flex flex-col gap-4">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-sm font-medium text-[#29145f]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 rounded-full bg-[#ffc400] px-4 py-3 text-center text-sm font-semibold text-[#29145f]"
                        >
                            Talk to us
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}