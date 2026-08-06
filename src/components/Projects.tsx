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
    title: "Species Movement in Climate & Land-Use Change Across Appalachians",
    category: "Conservation Spatial Modeling",
    year: "2024",
    description: "Spatial modeling of species connectivity, movement patterns, and habitat corridors under future climate and land-use change scenarios across the Appalachian region.",
    tags: ["R", "Python", "Circuitscape", "Google Earth Engine", "Remote Sensing"],
    image: "/projects/species-movement-appalachians.jpg",
    link: "/projects/species-movement-climate-landuse-appalachians",
  },
  {
    id: "02",
    title: "Appalachian Biodiversity Projections",
    category: "Ecology & Modeling",
    year: "2025",
    description: "Spatial land-use and climate change projections in the Appalachians to predict development expansion and habitat fragmentation.",
    tags: ["Python", "R", "Dinamica EGO", "Circuitscape"],
    image: "/projects/appalachian-modeling.jpg",
    link: "/projects/appalachian-biodiversity-projections",
  },
  {
    id: "03",
    title: "Indigenous Co-Management of Wetlands",
    category: "Environmental Policy",
    year: "2023",
    description: "Federal policy proposal modernizing wetland protection through tribal co-management partnerships (3rd place national winner, NWF contest).",
    tags: ["Policy Analysis", "Clean Water Act", "Science Comm"],
    image: "/projects/wetlands-policy.jpg",
    link: "/projects/wetlands-policy-memo",
  },
  {
    id: "04",
    title: "EcoLeader Community Engagement",
    category: "Community & Data Analytics",
    year: "2025",
    description: "Data analytics fellowship using Google Analytics and survey design to evaluate and improve national student conservation outreach.",
    tags: ["Data Science", "Google Analytics", "UX Research"],
    image: "/projects/nwf-analytics.jpg",
    link: "/projects/nwf-ecoleader-fellowship",
  },
  {
    id: "05",
    title: "Parent-Offspring Conflict in Mosses",
    category: "Evolutionary Genetics",
    year: "2026",
    description: "Ph.D. research investigating resource allocation trade-offs and maternal-offspring interactions in bryophytes using microtomy and SEM.",
    tags: ["Microscopy", "Genetics", "Evolutionary Theory"],
    image: "/projects/moss-conflict.jpg",
    link: "/projects/moss-parent-offspring-conflict",
  },
  {
    id: "06",
    title: "Brassica Pathogen Genomics",
    category: "Plant Pathogen Genetics",
    year: "2021",
    description: "Genome-wide association study (GWAS) and bioinformatic pipelines to map and annotate resistance genes in Brassica crops against Blackleg.",
    tags: ["GWAS", "RGAugury", "PLINK", "R"],
    image: "/projects/brassica-genomics.jpg",
    link: "/projects/brassica-pathogen-genomics",
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
            <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold block mb-4">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white">
              Selected <span className="font-semibold">Works.</span>
            </h2>
          </div>
          <p className="text-[#86868b] text-sm md:text-base max-w-sm font-light">
            A curated selection of research, publications, and policy projects bridging ecological data with environmental conservation.
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
            <a href="https://scholar.google.com/scholar?q=Vishal+Kennedy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              Google Scholar
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
