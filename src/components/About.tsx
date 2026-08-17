"use client";

import { motion } from "framer-motion";
import { User, Tag, FileText, Download } from "lucide-react";

const FOCUS_AREAS = [
  "Biodiversity & Ecosystem Assessment",
  "Geospatial Analysis (Python / R / SQL)",
  "Conservation & Environmental Policy",
  "Statistical Modeling & Benchmarking",
  "ISO 14001 EMS & Compliance Auditing",
  "Nature-Related Risk & Disclosure",
  "Project Management",
  "Data Visualization & Reporting",
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Vishal Kennedy"
      className="relative z-20 py-20 md:py-28 px-6 md:px-12 lg:px-24 bg-[#121212] w-full border-t border-white/5"
    >
      {/* Subtle radial gradient accent */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(16,185,129,0.04),rgba(18,18,18,0))]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          {/* Header & Resume CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <User className="w-4 h-4 text-emerald-400" />
              <span className="text-xs uppercase tracking-[0.4em] text-emerald-400 font-semibold">
                ABOUT
              </span>
            </div>
            <a
              href="/Vishal_Kennedy_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 shadow-sm self-start sm:self-auto group"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Download Resume (PDF)</span>
              <Download className="w-3 h-3 text-emerald-400/70 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* User's Exact About Text */}
          <p className="text-base md:text-xl font-light text-white/90 leading-relaxed mb-6">
            I turn ecological and spatial data into decisions that survive scrutiny, whether the decision-maker is a conservation agency, a corporate sustainability team, or a firm assessing nature-related risk. Five years of quantitative research with NatureServe, USGS, and the National Wildlife Federation: nationwide baseline models across 210 ecosystem types (4.3M km²), benchmark algorithms explaining 82% of variance, and distributional analyses of where environmental protection concentrates and where it doesn&apos;t.
          </p>
          <p className="text-base md:text-lg font-light text-white/80 leading-relaxed mb-6">
            I build reproducible geospatial and statistical pipelines in Python, R, and SQL, then translate the output for people who don&apos;t read methods sections. <strong className="font-semibold text-emerald-300">ISO 14001 EMS</strong> and <strong className="font-semibold text-emerald-300">Exemplar Global Lead Auditor</strong> training adds audit-trail discipline and working fluency in U.S. environmental regulation.
          </p>
          <p className="text-base md:text-lg font-light text-white/75 leading-relaxed mb-10">
            <strong className="font-semibold text-emerald-300">2025 NWF Graduate Research Fellow</strong>. Completing my Ph.D. at UT Knoxville specializing in conservation and sustainability policy, with a <strong className="font-semibold text-emerald-300">Project Management Certificate</strong> from the Baker School.
          </p>

          {/* Focus Areas Chip Tags */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-3.5 h-3.5 text-[#86868b]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold">
                CORE COMPETENCIES & FOCUS AREAS
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {FOCUS_AREAS.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-white/80 bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
