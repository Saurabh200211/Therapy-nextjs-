"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  const toggleMenu = () => {
    document.getElementById("mobile-nav")?.classList.toggle("hidden");
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="container-width flex h-24 items-center justify-between">
        <Link href="#" className="group">
          <div className="font-serif text-2xl font-semibold tracking-tight text-white">
            Maya Reynolds<span className="text-terracotta">.</span>
          </div>

          <div className="mt-0.5 text-[9px] font-bold uppercase tracking-[.24em] text-white/65">
            PsyD · Clinical Psychologist
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <a href="#approach" className="nav-link text-sm text-white/85">
            Approach
          </a>

          <a href="#services" className="nav-link text-sm text-white/85">
            Services
          </a>

          <a href="#about" className="nav-link text-sm text-white/85">
            About
          </a>

          <a href="#office" className="nav-link text-sm text-white/85">
            Office
          </a>

          <a href="#faq" className="nav-link text-sm text-white/85">
            FAQs
          </a>

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[.12em] text-forest transition hover:bg-sand"
          >
            Book a consultation
          </a>
        </nav>

        <button
          type="button"
          aria-label="Open navigation"
          className="rounded-full border border-white/25 p-2 text-white md:hidden"
          onClick={toggleMenu}
        >
          <Menu size={20} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className="hidden border-t border-white/10 bg-forest px-5 pb-7 pt-4 md:hidden"
      >
        {["Approach", "Services", "About", "Office", "FAQs"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block border-b border-white/10 py-4 text-sm text-white"
            onClick={() => {
              document.getElementById("mobile-nav")?.classList.add("hidden");
            }}
          >
            {item}
          </a>
        ))}

        <a
          href="#contact"
          className="mt-5 block rounded-full bg-white px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-forest"
        >
          Book a consultation
        </a>
      </div>
    </header>
  );
}