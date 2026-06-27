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
          <img
            src="/images/logo.svg"
            alt="Tumwa Logo"
            className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
          />
         
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "bg-[#F46525]/10 text-[#F46525]"
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
            className="text-sm font-medium text-[#248249] hover:text-[#236b42]"
          >
            Earn as a runner
          </Link>
          <Link
            href="#download"
            className="px-4 py-2 bg-[#F46525] hover:bg-[#e55a28] text-white text-sm font-semibold rounded-xl shadow-sm"
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
                    ? "bg-[#F46525]/10 text-[#F46525]"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/become-a-runner"
                className="px-4 py-3 rounded-xl text-sm font-semibold text-[#248249] bg-[#248249]/10 text-center"
              >
                Earn as a runner
              </Link>
              <Link
                href="#download"
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#F46525] text-center"
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
