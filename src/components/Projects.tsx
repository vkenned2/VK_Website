"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: "01",
    title: "National Ecosystem Representation & 30x30 Benchmark (GBF Target 3)",
    category: "Conservation Indicators & Spatial Policy",
    year: "2022–Present",
    description: "Evaluated 210 USNVC ecosystem groups across PAD-US to benchmark GBF Target 3; revealed severe geographic bias (Western 4.1x, Eastern 3.3x vs Great Plains) and metric sensitivity.",
    tags: ["GBF Target 3", "210 Ecosystems", "PAD-US v4.1", "NatureServe & USGS", "Slope 0.86"],
    image: "/projects/us-representation-analysis.png",
    link: "/projects/us-nationwide-representation-analysis-quality-framework",
  },
  {
    id: "02",
    title: "Appalachian Climate Range Shifts & Multi-State Governance",
    category: "Spatial Modeling & Multi-Jurisdiction Policy",
    year: "2024–2026",
    description: "Modeled shifting conservation responsibility across 13 Appalachian states for 270 vertebrates under 13 climate models and 4 SSP scenarios through 2050.",
    tags: ["270 Vertebrates", "13 Climate Models", "Circuitscape", "HHI & Pielou", "IALE Keynote 2026"],
    image: "/projects/appalachian-modeling.jpg",
    link: "/projects/distributional-policy-measurement-jurisdiction-attribution",
  },
  {
    id: "03",
    title: "Federal Environmental Policy, Permitting Compliance & Statutory Analysis",
    category: "Environmental Law & Regulatory Comment",
    year: "2023–Present",
    description: "3rd place nationally for NWF policy memo on Mississippi River Basin flood resilience; co-authored USFWS comment letter on Okefenokee National Wildlife Refuge.",
    tags: ["Clean Water Act", "USFWS Okefenokee", "ISO 14001 Audit", "NWF 3rd Place", "Tom Gilbert Award"],
    image: "/projects/wetlands-policy.jpg",
    link: "/projects/environmental-policy-tribal-comanagement-leadership",
  },
  {
    id: "04",
    title: "NWF EcoLeaders Platform Strategy & Conservation Analytics",
    category: "Behavioral Analytics & Conservation Leadership",
    year: "2025",
    description: "Longitudinal behavioral analysis of national youth conservation changemakers (+283% engagement), recurring dashboards, and enterprise roadmap.",
    tags: ["+283% Engagement", "Cohort Panel", "Longitudinal Telemetry", "Recurring Dashboards", "NWF Fellow"],
    image: "/projects/nwf-analytics.jpg",
    link: "/projects/nwf-ecoleader-fellowship",
  },
  {
    id: "05",
    title: "AI Adoption Parity Index & Exposure-Adjusted Distributions",
    category: "Open Analysis & Causal Metrics",
    year: "2026",
    description: "Open analysis measuring state-level AI adoption against AI-exposed employment rather than population using Anthropic Economic Index, BLS OES, and O*NET.",
    tags: ["Anthropic Index", "BLS OES", "O*NET", "Gini & Lorenz", "Interactive Tool"],
    image: "/projects/anthropic-ai-adoption-parity.png",
    link: "/projects/ai-adoption-parity-index",
  },
  {
    id: "06",
    title: "Applied AI Systems, Scientific ML Pipelines & Technical Enablement",
    category: "Applied AI & Scientific Computing",
    year: "2024–2025",
    description: "Autoencoder computer vision pipeline (ORNL publication in IOP), Gemini full-stack agent, and AI-literacy curriculum for 500+ researchers at Perplexity AI.",
    tags: ["ORNL Publication", "IOP ML: Science & Tech", "Google Gemini API", "PyTorch", "Perplexity AI"],
    image: "/projects/gemini-ai-systems.png",
    link: "/projects/applied-ai-systems-machine-learning-adoption",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative z-20 py-32 px-6 md:px-12 lg:px-24 bg-[#121212] w-full">
      {/* Background radial gradient to give a subtle depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-emerald-400 font-semibold block mb-4">
              Case Studies &amp; Research
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              Selected <span className="font-semibold">Works.</span>
            </h2>
          </div>
          <p className="text-[#86868b] text-sm md:text-base max-w-sm font-light">
            A curated portfolio of ecosystem representation benchmarks, trans-boundary climate models, environmental policy filings, and scientific computing systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col h-full max-w-[360px] mx-auto w-full rounded-2xl overflow-hidden glass-card"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out filter grayscale-[20%] group-hover:grayscale-0 brightness-[85%] group-hover:brightness-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/10 to-transparent opacity-60" />
                </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-4">
                {/* Meta details */}
                <div className="flex items-center justify-between text-[9px] tracking-wider uppercase text-[#86868b] font-medium mb-2.5">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-1 group-hover:text-white transition-colors duration-300">
                  {project.title}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>

                {/* Description */}
                <p className="text-[11px] text-[#86868b] font-light leading-relaxed mb-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] tracking-wider font-light text-white/60 bg-white/5 px-2 py-0.5 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clickable Overlay link */}
              <Link href={project.link} className="absolute inset-0 z-10" aria-label={`View project ${project.title}`} />
            </motion.div>
          );
        })}
        </div>

        {/* Footer Contact Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-32 pt-20 border-t border-white/5 text-center flex flex-col items-center justify-center"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold mb-4">
            Get In Touch
          </span>
          <a
            href="mailto:vkenned2@vols.utk.edu"
            className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white hover:text-[#86868b] transition-colors duration-300 mb-6"
          >
            vkenned2@vols.utk.edu
          </a>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-[#86868b] text-sm font-light mt-4">
            <a href="https://www.linkedin.com/in/vishalkennedy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              LinkedIn
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://github.com/vkenned2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              GitHub
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://scholar.google.com/scholar?q=Vishal+Kennedy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              Google Scholar
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="/Vishal_Kennedy_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-emerald-500/20 hover:text-emerald-300 border border-white/10 hover:border-emerald-500/30 transition-all duration-300">
              Download Resume (PDF)
            </a>
          </div>
          <p className="text-[#86868b] text-xs mt-12 tracking-widest uppercase">
            © {new Date().getFullYear()} Vishal Kennedy. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
