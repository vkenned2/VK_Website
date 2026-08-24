"use client";

import { motion } from "framer-motion";
import { User, Tag, FileText, Download, Code2, LineChart, Database, MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const CORE_COMPETENCIES = [
  "Policy impact evaluation",
  "Quasi-experimental design & matching estimators",
  "Metric definition & benchmark construction",
  "Measurement frameworks for public-affairs campaigns",
  "Reporting pipelines, dashboards & discrepancy control",
  "Environmental compliance & audit reporting standards",
  "Regulatory landscape analysis",
  "Scenario analysis under uncertainty",
  "Program & project management",
  "Executive briefing",
];

const SKILL_GROUPS = [
  {
    title: "Languages & Tools",
    icon: Code2,
    skills: "Python (pandas, NumPy, statsmodels, scikit-learn, PyTorch), R (tidyverse, sf, lme4), SQL, Git and GitHub, JavaScript and Node.js, STATA, advanced Excel.",
  },
  {
    title: "Statistics & Causal Inference",
    icon: LineChart,
    skills: "Matching estimators on observational data, counterfactual and null-model benchmarking, variance decomposition, regression (linear, log-log, GLM, mixed-effects), concentration and inequality metrics (Gini, Lorenz, HHI, Pielou), longitudinal cohort analysis, scenario projection, power analysis, uncertainty quantification.",
  },
  {
    title: "Data, Reporting & Applied AI",
    icon: Database,
    skills: "Large public, federal, and administrative datasets; automated QA and consistency checks; reproducible notebooks and reporting pipelines; Tableau, Power BI, ArcGIS, QGIS. LLM APIs and elicitation design; shipped a full-stack Node/Express agent on the Gemini API; autoencoder computer-vision pipelines at ORNL.",
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
                SUMMARY
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
          <p className="text-base md:text-xl font-light text-white/95 leading-relaxed mb-6">
            Data scientist specializing in <strong className="font-semibold text-emerald-300">quantitative measurement, policy evaluation, and external reporting</strong>. Six years of quantitative research experience using Python, R, and SQL across federal, administrative, and behavioral datasets, producing national-scale evidence for federal agencies and NGO partners, and briefing agency leadership directly.
          </p>
          <p className="text-base md:text-lg font-light text-white/85 leading-relaxed mb-8">
            Works in environments where ambiguity is expected. Good policy questions rarely arrive with perfect datasets or clean experimental settings; they require judgment, careful measurement, causal reasoning, and the ability to explain uncertainty without losing clarity.
          </p>

          {/* Fast Contact & Relocation Bar */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-4 px-5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300 mb-10 font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Knoxville, TN • Open to NYC, SF, or DC
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
