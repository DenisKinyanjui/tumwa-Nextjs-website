"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Platform = "android" | "ios" | "both";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.tumwa.app";
const APP_STORE_URL = "https://apps.apple.com/app/tumwa/id0000000000";

export default function AppDownloadButtons({
  size = "default",
}: {
  size?: "default" | "large";
}) {
  const [platform, setPlatform] = useState<Platform>("both");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) {
      setPlatform("android");
    } else if (/iphone|ipad|ipod/.test(ua)) {
      setPlatform("ios");
    }
  }, []);

  const isLarge = size === "large";
  const btnClass = isLarge
    ? "inline-flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold text-base shadow-md"
    : "inline-flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm shadow-sm";

  return (
    <div className="flex flex-wrap gap-3">
      {(platform === "android" || platform === "both") && (
        <Link
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} bg-[#0F172A] hover:bg-[#1E293B] text-white border border-slate-700`}
          aria-label="Download Tumwa on Google Play"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={isLarge ? "w-7 h-7" : "w-5 h-5"}>
            <path d="M3.18 23.76c.35.19.74.24 1.12.14l12.44-7.19-2.64-2.64-10.92 9.69zm-1.34-20.2A1.97 1.97 0 001.5 5v14c0 .56.21 1.05.55 1.43L15.49 12 1.84 3.56zM20.84 10.5l-2.7-1.56-3.01 3.06 3.01 3.06 2.73-1.58A2 2 0 0022 12a2 2 0 00-1.16-1.5zM4.3.1a1.97 1.97 0 00-1.12.14l12.31 12.3 2.64-2.63L4.3.1z" />
          </svg>
          <div className="text-left">
            <div className={`${isLarge ? "text-xs" : "text-[10px]"} opacity-70 font-normal leading-none`}>
              Get it on
            </div>
            <div className={isLarge ? "text-base" : "text-sm"}>Google Play</div>
          </div>
        </Link>
      )}

      {(platform === "ios" || platform === "both") && (
        <Link
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btnClass} bg-[#0F172A] hover:bg-[#1E293B] text-white border border-slate-700`}
          aria-label="Download Tumwa on App Store"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className={isLarge ? "w-7 h-7" : "w-5 h-5"}>
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <div className="text-left">
            <div className={`${isLarge ? "text-xs" : "text-[10px]"} opacity-70 font-normal leading-none`}>
              Download on the
            </div>
            <div className={isLarge ? "text-base" : "text-sm"}>App Store</div>
          </div>
        </Link>
      )}
    </div>
  );
}
