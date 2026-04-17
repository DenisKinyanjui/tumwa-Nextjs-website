"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Become a Runner", href: "/become-a-runner" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white border-b border-transparent transition-all duration-200 ${
        scrolled ? "border-slate-200 shadow-sm" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-2xl tracking-tight"
          aria-label="Tumwa Home"
        >
          <span className="w-8 h-8 rounded-xl bg-[#FF6F3C] flex items-center justify-center text-white text-sm font-black">
            T
          </span>
          <span className="text-[#0F172A]">
            tumwa<span className="text-[#FF6F3C]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[#FF6F3C]/10 text-[#FF6F3C]"
                  : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/become-a-runner"
            className="text-sm font-medium text-[#2E8B57] hover:text-[#236b42]"
          >
            Earn as a runner
          </Link>
          <Link
            href="#download"
            className="px-4 py-2 bg-[#FF6F3C] hover:bg-[#e55a28] text-white text-sm font-semibold rounded-xl shadow-sm"
          >
            Download App
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg hover:bg-slate-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-slate-700 rounded transition-all duration-200 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 rounded transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-700 rounded transition-all duration-200 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#FF6F3C]/10 text-[#FF6F3C]"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/become-a-runner"
                className="px-4 py-3 rounded-xl text-sm font-semibold text-[#2E8B57] bg-[#2E8B57]/10 text-center"
              >
                Earn as a runner
              </Link>
              <Link
                href="#download"
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#FF6F3C] text-center"
              >
                Download App
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
