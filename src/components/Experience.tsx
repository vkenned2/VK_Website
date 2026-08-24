"use client";

import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Building2, Globe, ChevronRight, Code2, Cpu } from "lucide-react";
import { useState } from "react";

interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  location: string;
  category: "research" | "built" | "policy" | "leadership";
  typeLabel?: string;
  highlights: string[];
  impactMetric?: string;
  tags: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    year: "Aug 2022 – Present",
    role: "Graduate Research Scientist (NSF Funded)",
    organization: "University of Tennessee, Armsworth Lab",
    location: "Knoxville, TN",
    category: "research",
    typeLabel: "National Policy Performance & Benchmarking",
    impactMetric: "210 Categories Nationwide & 4 Federal Data Sources",
    highlights: [
      "Determined which metric faithfully represents national policy performance to external audiences: proved the headline statistic in widest official use systematically overstates it, and designed the **proportional-parity benchmark** replacing it across **210 classification categories nationwide**.",
      "Quantified how metric definition drives externally reported results: the permissive tier supplies **70% of the headline number**, and a published policy target appears met for **63% of units under the loose definition against 19% under the strict one**. Exactly the discrepancy risk that surfaces when a figure is shared publicly without its definition.",
      "Audited a widely cited published result and proved its reported intercept and crossover point were **algebraic identities rather than empirical findings**, retracting an inference that had already propagated into downstream policy debate.",
      "Own the **Python and R pipelines** and partner-facing reporting tables reconciling **four heterogeneous federal data sources** with automated QA, so every externally reported figure traces to source; reproduced all **21 published statistics** from the prior national assessment as a validation gate. Sole technical lead on federal and NGO partners.",
      "Measured policy impact from observational data with a **matching design**: 174 matched clusters across two reporting vintages, benchmarked against null-model counterfactuals, with **variance decomposition** isolating where the national reporting bias originated.",
      "Built a **multi-jurisdiction burden-attribution model** from scenario-based projection across **13 state jurisdictions and 270 tracked units**, combining simulation and network analysis with concentration (HHI) and evenness (Pielou) indices to quantify where policy impacts cross regulatory boundaries no single authority spans."
    ],
    tags: ["Proportional-Parity Benchmark", "Python & R Pipelines", "Automated QA Validation", "Matching Estimators", "Variance Decomposition", "Multi-Jurisdiction Attribution", "HHI & Pielou Indices", "USGS & NatureServe"]
  },
  {
    id: "exp-2",
    year: "2025 – Present",
    role: "National Policy Board Member (Youth Seat)",
    organization: "U.S. Biosphere Network",
    location: "Washington, DC / National",
    category: "policy",
    typeLabel: "National Policy Board",
    impactMetric: "National Gap Analysis & Federal Briefings",
    highlights: [
      "Authored the **national gap analysis** behind the Network’s policy position and briefed senior federal agency leaders, a federal climate science center, and UNESCO working groups on national target performance.",
      "Translate quantitative findings into **policy positions agency and international stakeholders act on**, for audiences with no statistical background."
    ],
    tags: ["National Gap Analysis", "Executive Briefing", "Federal Agency Leadership", "UNESCO Working Groups", "Policy Translation"]
  },
  {
    id: "exp-3",
    year: "May 2025 – Oct. 2025",
    role: "EcoLeaders Graduate Research Fellow and Platform Strategist",
    organization: "National Wildlife Federation",
    location: "Reston, VA / Remote",
    category: "leadership",
    typeLabel: "Platform Analytics & Strategy",
    impactMetric: "+283% Engagement Increase & Executive Roadmap",
    highlights: [
      "Reconstructed several prior years of platform user-analytics records into a **consistent cohort panel**, then ran **longitudinal behavioral analysis** to isolate which onboarding and retention actions actually moved engagement, and rebuilt the funnel around them: **283% engagement increase** over the prior cycle.",
      "Built and maintained the **recurring dashboards** that made engagement, onboarding, and retention legible to staff and external partners, defining the underlying metrics and instrumentation so reported figures stayed consistent across cycles.",
      "Specified **enterprise API integrations** with platform engineers and delivered an **executive-adopted 6–12 month roadmap**, pairing qualitative stakeholder research with platform telemetry to validate findings before they reached external reporting."
    ],
    tags: ["Longitudinal Behavioral Analysis", "Cohort Panel Reconstruction", "+283% Engagement", "Recurring Dashboards", "Enterprise API Integrations", "Telemetry & Roadmapping"]
  },
  {
    id: "exp-4",
    year: "Jan. 2025 – Oct. 2025",
    role: "Campus Strategist and Training Program Lead",
    organization: "Perplexity AI",
    location: "Knoxville, TN / Remote",
    category: "leadership",
    typeLabel: "AI Enablement & Curriculum",
    impactMetric: "500+ Researchers, Faculty & Staff Trained",
    highlights: [
      "Built and delivered a **technical AI-literacy curriculum to 500+ researchers, faculty, and staff**, covering structured prompting, literature-synthesis workflows, and source-verification methods; mentored a cross-departmental network of student AI champions.",
      "Built **AI-assisted workflows aggregating news, literature, and public sources into verified briefs**; drafted department-adopted responsible-use guidelines and ran feedback cycles between users and product engineering across fast release windows."
    ],
    tags: ["Technical AI-Literacy", "500+ Researchers", "Structured Prompting", "Literature-Synthesis", "Responsible AI Guidelines", "User Feedback Loops"]
  },
  {
    id: "exp-5",
    year: "2024 – Present",
    role: "Regulatory Analysis and Disclosure Standards Specialist",
    organization: "Baker School Audit Workshop · Environmental Law Organization",
    location: "Knoxville, TN",
    category: "policy",
    typeLabel: "EMS & Regulatory Standards",
    impactMetric: "ISO 14001 Audit & EPA Disclosure Standards",
    highlights: [
      "Track and analyze state and federal energy and land-use policy: **EV infrastructure, utility incentives, clean energy standards, and siting compliance**; co-authored a regulatory comment letter on a contested federal permitting decision.",
      "Apply **ISO 14001 audit and U.S. EPA disclosure-reporting standards** to analytical documentation, holding externally filed figures to audit-trail consistency."
    ],
    tags: ["Regulatory Analysis", "ISO 14001 Lead Auditor", "EPA Disclosure Standards", "Clean Energy & EV Policy", "Public Comment Letter"]
  },
  {
    id: "exp-6",
    year: "2024 – 2026",
    role: "Policy Impact, Open Analysis & Peer-Reviewed Research",
    organization: "Independent Analysis & Academic Collaborations",
    location: "National / Open Source",
    category: "built",
    typeLabel: "Selected Policy Impact",
    impactMetric: "AI Adoption Parity Index · IALE Keynote 2026",
    highlights: [
      "**AI adoption parity index (2026)**: Open analysis measuring state-level AI adoption against AI-exposed employment rather than population, using the Anthropic Economic Index, BLS OES, and O*NET, with Lorenz curves and Gini coefficients on raw and exposure-adjusted distributions (`github.com/vkenned2/Anthropic_ai-adoption-parity-index`).",
      "**Written for external audiences**: Federal regulatory analysis of statutory authority, compliance standards, and multi-party co-management – policy memorandum, National Wildlife Federation, **third place, national** · co-authored public comment letter on a contested federal permitting decision · open-access guides on converting analytical results into federal regulatory comment (2024–2026).",
      "**Peer reviewed**: Kennedy, V., Armsworth, P. R., et al. Distributional measurement of national policy target attainment across governance tiers. In preparation, *Conservation Science & Practice*. Presented at **IALE North America (keynote, 2026)**, U.S. Biosphere Network, Washington DC (2026), and a federal climate adaptation science center (2025)."
    ],
    tags: ["AI Adoption Parity Index", "Anthropic Economic Index", "BLS OES & O*NET", "Gini & Lorenz Analysis", "NWF Policy Memo (3rd Place)", "IALE Keynote 2026"]
  },
  {
    id: "exp-7",
    year: "2024",
    role: "Applied AI Systems & Computer Vision Engineering",
    organization: "Oak Ridge National Lab & Google Competition",
    location: "Oak Ridge, TN / Global",
    category: "built",
    typeLabel: "ML Publication & Full-Stack App",
    impactMetric: "Peer-Reviewed ML Paper & Gemini Agent",
    highlights: [
      "Co-developed ML pipelines automating Transmission Electron Microscopy analysis with a four-university team (Penn State, NYU, Purdue, UTK); used autoencoders to surface nanoparticle-geometry correlations, published in *Machine Learning: Science and Technology* (DOI: 10.1088/2632-2153/ae1f5d).",
      "Designed and shipped a full-stack Node.js/Express conversational agent on the Google Gemini API, incorporating dynamic elicitation design and intent-conditioned queries."
    ],
    tags: ["Python & PyTorch", "Autoencoders", "Computer Vision", "ORNL Hackathon", "Google Gemini API", "Node.js & Express"]
  },
  {
    id: "exp-8",
    year: "Jun. 2021 – Aug. 2022",
    role: "Research Scientist; Summer Research Intern",
    organization: "Manipal Centre for Natural Sciences · University of Western Australia",
    location: "India / Australia",
    category: "research",
    typeLabel: "Quantitative Research & Screening Pipelines",
    impactMetric: "+30% Screening Throughput & SDG Modeling",
    highlights: [
      "Applied geospatial and statistical modeling to evaluate environmental program performance against **UN Sustainable Development Goals 13 (Climate Action) and 15 (Life on Land)**.",
      "Analyzed experimental phenotypic and genomic screening data for government-funded program on crop resilience to disease and climate stress (**input-side risk in agricultural supply chains**), optimizing pipeline throughput by **30%**."
    ],
    tags: ["Supply Chain Risk", "Throughput Optimization", "Data Pipelines", "UN SDGs", "Geospatial Modeling"]
  },
  {
    id: "exp-9",
    year: "Aug. 2016 – May 2027 (exp.)",
    role: "Ph.D. Researcher & Graduate Scholar (Candidacy Passed May 2026)",
    organization: "The University of Tennessee & IISER Kolkata",
    location: "Knoxville, TN & Kolkata, India",
    category: "leadership",
    typeLabel: "Education & Governance",
    impactMetric: "Ph.D. Candidacy Passed (May 2026) · Baker School Policy Training",
    highlights: [
      "**The University of Tennessee** (Ph.D., Ecology · Research focus: data-driven decision making and policy | Aug. 2022 – May 2027 expected): Dissertation on quantitative evaluation of national policy target performance – metric design, benchmark construction, and distributional measurement across federal administrative data. Developed with USGS, funded by NSF. Candidacy exam passed May 2026. Graduate policy training at Baker School: Administrative and Regulatory Policy, Public Policy Process, Public Management, Biometry.",
      "**IISER Kolkata** (Integrated B.S. and M.S. in Ecology and Environmental Biology | Aug. 2016 – Aug. 2021): Master's thesis research from 2020. Top 1% National INSPIRE Scholar. Elected General Secretary, Student Affairs Council: managed budgets and operations for a 4,000+ member organization."
    ],
    tags: ["Ph.D. Candidacy (May 2026)", "Baker School Policy Training", "USGS & NSF Funded", "IISER Kolkata B.S.-M.S.", "INSPIRE Scholar", "SAC General Secretary"]
  }
];

export default function Experience() {
  const [filter, setFilter] = useState<"all" | "research" | "built" | "policy" | "leadership">("all");

  const filteredExperiences = EXPERIENCES.filter(
    (exp) => filter === "all" || exp.category === filter
  );

  return (
    <section id="experience" className="relative z-20 py-28 px-6 md:px-12 lg:px-24 bg-[#121212] w-full border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(120,119,198,0.06),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold block mb-3">
            Track Record & Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            Professional <span className="font-semibold">Experience.</span>
          </h2>
          <p className="text-[#86868b] text-sm md:text-base font-light leading-relaxed">
            Quantitative research, causal analysis, national reporting pipelines, and evidence-based policy for federal agencies and NGO partners.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            {[
              { id: "all", label: "All Experiences", icon: Sparkles },
              { id: "built", label: "Built & Shipped (AI / Hackathons)", icon: Code2 },
              { id: "research", label: "Research & Spatial Data", icon: Cpu },
              { id: "policy", label: "Policy & Strategy", icon: Building2 },
              { id: "leadership", label: "Leadership & Teaching", icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as "all" | "research" | "built" | "policy" | "leadership")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.25)] scale-105"
                      : "bg-white/5 text-[#86868b] hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Grid Container */}
        <div className="relative mt-16 max-w-6xl mx-auto">
          {/* Vertical Timeline Center Line (Desktop center, Mobile left-4) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/25 via-white/10 to-transparent -translate-x-[1px] md:-translate-x-1/2" />

          <div className="space-y-12">
            {filteredExperiences.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-stretch">
                  {/* Glowing Node Dot on Timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-white border-4 border-[#121212] shadow-[0_0_12px_rgba(255,255,255,0.9)] z-10 -translate-x-1/2" />

                  {/* LEFT COLUMN */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-10 flex justify-end">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full glass-card p-6 rounded-2xl border border-white/10 relative hover:border-white/25 transition-all duration-300 group"
                      >
                        {/* Time & Type Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono tracking-wider text-[#86868b] uppercase mb-2">
                          <span className="flex items-center gap-1.5 text-white/90 font-medium">
                            <Building2 className="w-3 h-3 text-[#86868b]" />
                            {item.organization}
                          </span>
                          <span className="text-[#86868b] font-semibold">{item.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-medium text-white mb-1 group-hover:text-amber-200 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-xs text-[#86868b] mb-3 flex items-center gap-1">
                          <Globe className="w-3 h-3" /> {item.location}
                          {item.typeLabel && (
                            <span className="ml-2 text-[9px] px-2 py-0.5 rounded bg-white/10 text-white/80 font-mono">
                              {item.typeLabel}
                            </span>
                          )}
                        </p>

                        {/* Impact Highlight Badge */}
                        {item.impactMetric && (
                          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs text-white font-medium">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            <span>{item.impactMetric}</span>
                          </div>
                        )}

                        {/* Bullet Points */}
                        <ul className="space-y-2.5 mb-5 text-xs text-white/80 font-light leading-relaxed">
                          {item.highlights.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                              <span dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>') }} />
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] tracking-wider font-light text-white/70 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      /* Empty placeholder for Desktop layout balance */
                      <div className="hidden md:block w-full" />
                    )}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-10 flex justify-start">
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full glass-card p-6 rounded-2xl border border-white/10 relative hover:border-white/25 transition-all duration-300 group"
                      >
                        {/* Time & Type Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono tracking-wider text-[#86868b] uppercase mb-2">
                          <span className="flex items-center gap-1.5 text-white/90 font-medium">
                            <Building2 className="w-3 h-3 text-[#86868b]" />
                            {item.organization}
                          </span>
                          <span className="text-[#86868b] font-semibold">{item.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-medium text-white mb-1 group-hover:text-amber-200 transition-colors">
                          {item.role}
                        </h3>
                        <p className="text-xs text-[#86868b] mb-3 flex items-center gap-1">
                          <Globe className="w-3 h-3" /> {item.location}
                          {item.typeLabel && (
                            <span className="ml-2 text-[9px] px-2 py-0.5 rounded bg-white/10 text-white/80 font-mono">
                              {item.typeLabel}
                            </span>
                          )}
                        </p>

                        {/* Impact Highlight Badge */}
                        {item.impactMetric && (
                          <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-xs text-white font-medium">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            <span>{item.impactMetric}</span>
                          </div>
                        )}

                        {/* Bullet Points */}
                        <ul className="space-y-2.5 mb-5 text-xs text-white/80 font-light leading-relaxed">
                          {item.highlights.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ChevronRight className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" />
                              <span dangerouslySetInnerHTML={{ __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>') }} />
                            </li>
                          ))}
                        </ul>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[9px] tracking-wider font-light text-white/70 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      /* Empty placeholder for Desktop layout balance */
                      <div className="hidden md:block w-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
