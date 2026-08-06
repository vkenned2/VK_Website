"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Newspaper } from "lucide-react";
import Image from "next/image";

export default function NewsFeature() {
  const articleUrl =
    "https://www.nwf.org/Magazines/National-Wildlife/2026/Summer/Conservation/Vishal-Kennedy";
  const imageUrl =
    "https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Magazines/2026/Summer-2026/NEXT-GEN-Vishal-Kennedy-SUMMER26-960x630.jpg";

  return (
    <section
      id="news"
      aria-label="Recently in the News"
      className="relative z-20 py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-[#121212] w-full overflow-hidden"
    >
      {/* Environmental subtle radial gradient accent */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(16,185,129,0.06),rgba(18,18,18,0))]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-12"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.4em] text-emerald-400 font-semibold">
                RECENTLY IN THE NEWS
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white">
              National Press <span className="font-semibold text-white">Highlight.</span>
            </h2>
          </div>
          <p className="text-[#86868b] text-sm md:text-base max-w-md font-light">
            Featured coverage highlighting research at the intersection of data mapping, conservation science, and climate policy.
          </p>
        </motion.div>

        {/* Main Editorial Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <a
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read National Wildlife Magazine article: Vishal Kennedy Is Mapping the Future"
            className="block group rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#121212]"
          >
            <article className="relative rounded-2xl bg-[#161718]/90 border border-white/10 group-hover:border-emerald-500/40 transition-all duration-500 overflow-hidden shadow-2xl group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(16,185,129,0.1)] flex flex-col lg:flex-row">
              {/* Top/Left Subtle Accent Rule */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Cover Image Block (~58% width on desktop) */}
              <div className="relative w-full lg:w-[58%] min-h-[280px] sm:min-h-[360px] md:min-h-[440px] lg:min-h-[520px] overflow-hidden bg-zinc-900">
                <Image
                  src={imageUrl}
                  alt="Vishal Kennedy conducting field research in a mountainous landscape."
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                  className="object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Gradient vignette for text contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/20 lg:to-[#161718]" />

                {/* Floating Publication Pill (Top Left) */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs font-medium text-white shadow-lg">
                    <Newspaper className="w-3.5 h-3.5 text-emerald-400" />
                    <span>National Wildlife Magazine</span>
                  </div>
                </div>

                {/* Image Credit (Bottom Left) */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10">
                  <span className="text-[11px] font-medium tracking-wide text-zinc-300/90 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                    Courtesy of Vishal Kennedy
                  </span>
                </div>
              </div>

              {/* Story Information Panel (~42% width on desktop) */}
              <div className="w-full lg:w-[42%] p-7 sm:p-9 md:p-11 lg:p-12 flex flex-col justify-between bg-gradient-to-b from-[#161718] to-[#121314]">
                <div>
                  {/* Eyebrow & Publication */}
                  <div className="mb-4">
                    <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-emerald-400 block mb-1">
                      RECENTLY IN THE NEWS
                    </span>
                    <span className="text-xs font-medium text-zinc-400 tracking-wide block">
                      National Wildlife Federation
                    </span>
                  </div>

                  {/* Article Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-white leading-[1.2] mb-4 group-hover:text-emerald-100 transition-colors">
                    Vishal Kennedy Is Mapping the Future
                  </h3>

                  {/* Article Subhead */}
                  <p className="text-base md:text-lg font-normal text-emerald-300/95 leading-snug mb-5">
                    The former NWF EcoLeaders fellow uses data to model conservation and climate outlooks
                  </p>

                  {/* Byline and Date */}
                  <div className="text-xs text-zinc-400 tracking-wider uppercase flex items-center gap-2 mb-6 pb-6 border-b border-white/10">
                    <span>By Delaney McPherson</span>
                    <span className="text-zinc-600">•</span>
                    <time dateTime="2026-06-24">June 24, 2026</time>
                  </div>

                  {/* Supporting Text */}
                  <p className="text-sm font-light text-zinc-300 leading-relaxed mb-8">
                    Featured by National Wildlife magazine for applying data mapping, conservation science, and environmental policy to questions shaping the future of protected ecosystems and wildlife.
                  </p>
                </div>

                {/* Call to Action Button */}
                <div>
                  <div className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500/10 text-emerald-300 group-hover:bg-emerald-400 group-hover:text-black font-semibold text-sm transition-all duration-300 border border-emerald-500/30 group-hover:border-emerald-400 w-full sm:w-auto shadow-md group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                    <span>Read the National Wildlife Feature</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </article>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
