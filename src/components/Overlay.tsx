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

  const opacity1 = interpolate(progress, [0, 0.20, 0.30], [1, 1, 0]);
  const y1 = interpolate(progress, [0, 0.30], [0, -60]);

  const opacity2 = interpolate(progress, [0.26, 0.34, 0.58, 0.66], [0, 1, 1, 0]);
  const y2 = interpolate(progress, [0.26, 0.34, 0.58, 0.66], [50, 0, 0, -50]);

  const opacity3 = interpolate(progress, [0.62, 0.70, 0.94, 1.0], [0, 1, 1, 0]);
  const y3 = interpolate(progress, [0.62, 0.70, 0.94, 1.0], [50, 0, 0, -50]);

  const arrowOpacity = interpolate(progress, [0, 0.08], [0.8, 0]);

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
        <span className="text-xs uppercase tracking-[0.4em] text-emerald-400 mb-4 font-semibold">
          DATA-DRIVEN POLICY &amp; QUANTITATIVE MEASUREMENT
        </span>
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white max-w-5xl leading-[1.15]">
          VISHAL KENNEDY<span className="font-semibold text-emerald-400">.</span>
        </h1>
        <p className="text-base md:text-xl lg:text-2xl font-light text-[#86868b] mt-6 tracking-wide max-w-3xl text-balance">
          Data-Driven Policy • Measurement, Causal Analysis, and External-Facing Analytics
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-400">
          <span>Knoxville, TN</span>
          <span className="text-zinc-600">•</span>
          <span className="text-emerald-400/90">Open to relocation: NYC, San Francisco, or Washington, DC</span>
        </div>
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
          EVIDENCE &amp; MEASUREMENT
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
          Producing national-scale evidence and briefing agency leadership directly.
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
          CAUSAL REASONING &amp; POLICY
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-tight">
          Translating quantitative findings into policy positions stakeholders act on.
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
