"use client";

import { motion } from "framer-motion";
import { User, Tag, FileText, Download, Code2, LineChart, Database, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const CORE_COMPETENCIES = [
  "Ecosystem representation & 30x30 targets",
  "Global Biodiversity Framework (GBF Target 3)",
  "Species Protection Index & indicator design",
  "Trans-boundary climate range shifts (270 vertebrates)",
  "PAD-US & protected area gap analysis",
  "Quasi-experimental matching & null models",
  "Federal regulatory comments & CWA / NEPA policy",
  "Multi-jurisdiction governance (HHI & Pielou)",
  "Circuitscape & spatial connectivity",
  "Executive briefings & stakeholder translation",
  "Automated QA data pipelines (R & Python)",
  "ISO 14001 & EPA disclosure standards",
];

const SKILL_GROUPS = [
  {
    title: "Spatial Modeling & Ecological Tools",
    icon: Code2,
    skills: "R (tidyverse, sf, terra, raster, lme4), Python (pandas, NumPy, statsmodels, scikit-learn, PyTorch), Circuitscape, ArcGIS Pro, QGIS, STATA, SQL, Git & GitHub.",
  },
  {
    title: "Causal Inference & Spatial Statistics",
    icon: LineChart,
    skills: "Protected area gap analysis, ecological niche modeling (13 climate models, 4 SSP scenarios through 2050), observational matching estimators (174 clusters), null-model benchmarking, variance decomposition, concentration & inequality metrics (Gini, Lorenz, HHI, Pielou evenness), log-log regressions, mixed-effects models.",
  },
  {
    title: "Policy, Indicators & Applied AI",
    icon: Database,
    skills: "Global Biodiversity Framework (Target 3) indicators, USNVC (6 hierarchical levels), NatureServe G-ranks, PAD-US v4.1, ISO 14001 lead auditor standards, Clean Water Act (CWA) & USFWS comment drafting, reproducible data QA pipelines; full-stack Node/Express agent on Google Gemini API; autoencoders at ORNL.",
  },
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
                BIOGRAPHY &amp; RESEARCH PROFILE
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

          {/* Resume Summary Text */}
          <p className="text-base md:text-xl font-light text-white/95 leading-relaxed mb-5">
            Ph.D. candidate in <strong className="font-semibold text-emerald-300">Ecology and Evolutionary Biology</strong> at the University of Tennessee, Knoxville, working with Paul Armsworth (defending May 2027), finishing a concurrent M.S. in Ecology and graduate policy training at UTK’s Baker School of Public Policy and Public Affairs.
          </p>
          <p className="text-base md:text-lg font-light text-white/85 leading-relaxed mb-5">
            Specializes in <strong className="font-semibold text-emerald-300">spatial ecology, biodiversity indicators, ecosystem representation, and conservation policy</strong>. Evaluates whether ecosystem-level and species-level protection tell the same story, developing ecosystem counterparts to global indicators (like the Species Protection Index for Target 3 of the Global Biodiversity Framework), and modeling trans-boundary climate migration across 13 Appalachian states.
          </p>
          <p className="text-sm md:text-base font-light text-[#86868b] leading-relaxed mb-8">
            Pre-doctoral background: integrated B.S.–M.S. in Biological Sciences at IISER Kolkata (top 1% national INSPIRE Scholar), with research stints at the Indian Institute of Science (IISc Bangalore), the Manipal Centre for Natural Sciences, and the University of Western Australia (Perth), alongside botanical and ecological fieldwork across the Western Ghats and the Great Smoky Mountains.
          </p>

          {/* Fast Contact & Relocation Bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-4 px-5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300 mb-10 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Knoxville, TN • Defending May 2027 • Available Summer/Fall 2027
            </span>
            <a href="mailto:vkenned2@vols.utk.edu" className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              vkenned2@vols.utk.edu
            </a>
            <a href="tel:865-398-5720" className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              865-398-5720
            </a>
            <a href="https://linkedin.com/in/vishalkennedy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              LinkedIn
            </a>
            <a href="https://github.com/vkenned2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              GitHub
            </a>
            <a href="https://vishalkennedy.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors">
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              vishalkennedy.com
            </a>
          </div>

          {/* Core Competencies Chip Tags */}
          <div className="pt-6 border-t border-white/10 mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-3.5 h-3.5 text-[#86868b]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold">
                CORE COMPETENCIES
              </span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {CORE_COMPETENCIES.map((chip) => (
                <span
                  key={chip}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-white/85 bg-white/5 border border-white/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Relevant Technical Skills Section */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-3.5 h-3.5 text-[#86868b]" />
              <span className="text-xs uppercase tracking-[0.3em] text-[#86868b] font-semibold">
                RELEVANT TECHNICAL SKILLS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SKILL_GROUPS.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2.5 text-emerald-400">
                        <Icon className="w-4 h-4" />
                        <h3 className="text-xs uppercase tracking-wider font-semibold font-mono text-white">
                          {group.title}
                        </h3>
                      </div>
                      <p className="text-xs text-white/75 font-light leading-relaxed">
                        {group.skills}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
