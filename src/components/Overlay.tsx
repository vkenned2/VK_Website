"use client";

import { useEffect, useState } from "react";

export default function Overlay() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const container = document.getElementById("scrolly-container");
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      if (totalHeight <= 0) return;

      const p = Math.min(1, Math.max(0, -rect.top / totalHeight));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  // Interpolation helper (clamped by default)
  const interpolate = (val: number, input: number[], output: number[]) => {
    if (val <= input[0]) return output[0];
    if (val >= input[input.length - 1]) return output[output.length - 1];

    for (let i = 0; i < input.length - 1; i++) {
      if (val >= input[i] && val <= input[i + 1]) {
        const t = (val - input[i]) / (input[i + 1] - input[i]);
        return output[i] + t * (output[i + 1] - output[i]);
      }
    }
    return output[0];
  };

  const opacity1 = interpolate(progress, [0, 0.18, 0.25], [1, 1, 0]);
  const y1 = interpolate(progress, [0, 0.25], [0, -80]);

  const opacity2 = interpolate(progress, [0.22, 0.3, 0.48, 0.55], [0, 1, 1, 0]);
  const y2 = interpolate(progress, [0.22, 0.3, 0.48, 0.55], [60, 0, 0, -60]);

  const opacity3 = interpolate(progress, [0.52, 0.6, 0.78, 0.85], [0, 1, 1, 0]);
  const y3 = interpolate(progress, [0.52, 0.6, 0.78, 0.85], [60, 0, 0, -60]);

  const arrowOpacity = interpolate(progress, [0, 0.05], [0.8, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none">
      {/* Section 1: Introduction */}
      <div
        style={{ 
          opacity: opacity1, 
          transform: `translateY(${y1}px)`,
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out" 
        }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] mb-4 font-semibold">
          Ecology & Policy Research Portfolio
        </span>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white max-w-5xl leading-[1.15]">
          VISHAL KENNEDY<span className="font-semibold">.</span>
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-light text-[#86868b] mt-6 tracking-wide max-w-3xl text-balance">
          Ph.D. Candidate in Ecology & Evolutionary Biology mapping the future of biodiversity, conservation management, and environmental policy.
        </p>
      </div>

      {/* Section 2: Core Philosophy */}
      <div
        style={{ 
          opacity: opacity2, 
          transform: `translateY(${y2}px)`,
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out" 
        }}
        className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 lg:px-32 text-left max-w-3xl"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] mb-4 font-semibold">
          Spatial Ecology & Data
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
          Integrating <span className="font-medium text-white">niche modeling</span> and remote sensing to project biodiversity trends.
        </h2>
      </div>

      {/* Section 3: Professional Bridge */}
      <div
        style={{ 
          opacity: opacity3, 
          transform: `translateY(${y3}px)`,
          transition: "opacity 0.1s ease-out, transform 0.1s ease-out" 
        }}
        className="absolute inset-0 flex flex-col justify-center items-end px-8 md:px-20 lg:px-32 text-right max-w-3xl ml-auto"
      >
        <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] mb-4 font-semibold">
          Science &amp; Policy Bridge
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
          Translating complex <span className="font-medium text-white">scientific findings</span> into actionable environmental policies.
        </h2>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{ 
          opacity: arrowOpacity,
          transition: "opacity 0.15s ease-out" 
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#86868b] font-medium">
          Scroll to explore
        </span>
        <svg
          className="w-4 h-4 text-[#86868b] animate-bounce mt-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
