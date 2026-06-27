"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AppDownloadButtons from "./AppDownloadButtons";

const heroImages = ["/images/hero1.png", "/images/hero2.png", "/images/hero3.png"];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative w-full min-h-[480px] lg:aspect-[1440/811] lg:min-h-0 flex items-start">
        {/* Mobile/tablet background — static image, no carousel */}
        <div className="absolute inset-0 lg:hidden">
          <Image src="/images/hero.png" alt="" fill priority className="object-cover" />
        </div>

        {/* Desktop background — rotating photo carousel */}
        <div className="absolute inset-0 hidden lg:block">
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              priority
              className="object-cover object-center"
              style={{
                opacity: index === activeIndex ? 1 : 0,
                zIndex: index === activeIndex ? 1 : 0,
                transition: "opacity 1500ms ease-in-out",
              }}
            />
          ))}
        </div>

        {/* Legibility scrim — desktop only, directional fade over the photo */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-white via-white/85 to-transparent pointer-events-none" />

        {/* Copy */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 pt-10 pb-12 lg:pt-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
              Need something done?
              <br />
              Get a trusted runner.
            </h1>

            <p className="max-w-lg text-slate-600 text-base sm:text-[16px] leading-relaxed mb-10">
              Post an errand, get matched with a trusted runner, and track
              every step in real time. From deliveries to shopping and
              everyday tasks, Tumwa makes it simple.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <AppDownloadButtons size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
