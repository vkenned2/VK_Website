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
    role: "Ph.D. Candidate & Graduate Research Scientist (NSF & USGS Funded)",
    organization: "University of Tennessee, Armsworth Lab (EEB)",
    location: "Knoxville, TN",
    category: "research",
    typeLabel: "Dissertation Research (Chapters 1, 2, 3)",
    impactMetric: "210 Ecosystem Groups • 270 Vertebrate Taxa • GBF Target 3",
    highlights: [
      "**Chapter 2 (Ecosystem Representation, with NatureServe & USGS)**: Evaluated 210 natural USNVC Groups across PAD-US at 6 hierarchical levels. Discovered larger ecosystems get proportionally less strict protection: a 10-fold larger ecosystem holds ~7.3 times strictly protected area (**slope 0.86, 95% CI 0.79 to 0.93**), holding across every classification check.",
      "**Geographic Disparity vs. Threat Status**: Geography matters far more than endangerment: Western ecosystems have **4.1x** and Eastern **3.3x** the strict protection of Great Plains ecosystems. Great Plains types cover **21.7% of the landscape but only 5.0% of the strict estate**, while conservation rank explains only **0.1%** of variation.",
      "**Policy Target Sensitivity & GBF Target 3**: 63% of ecosystem types meet 30% if multiple-use land counts, but only **19% under strict protection**. Applying the species target rule to ecosystems would mandate protecting **58% of the U.S. landscape** (113 of 210 types are <10,000 km²), proving ecosystems need targets of their own.",
      "**Forest Certification & Policy Uptake**: Provided figures to NatureServe for the **Forest Stewardship Council (FSC) annual meeting** as FSC considers adding ecosystem status to forest certification; shared follow-up longleaf pine modeling with Gwen Iacona at ASU; invited talk at **George Wright Society 2027**.",
      "**Chapter 3 (Appalachian Trans-boundary Climate Shifts)**: Modeled shifting conservation responsibility across 13 Appalachian states for 270 vertebrates under 13 climate models and 4 SSP scenarios through 2050 (Barve et al. niche models, Circuitscape, HHI concentration, and Pielou evenness indices).",
      "**Chapter 1 (Evolutionary Morphology)**: Investigated moss calyptra morphology with Jessica Budke, submitted to *The Bryologist*."
    ],
    tags: ["GBF Target 3", "210 USNVC Groups", "PAD-US v4.1", "Log-Log Scaling (Slope 0.86)", "FSC Forest Certification", "Longleaf Pine (ASU)", "270 Vertebrate Taxa", "Circuitscape", "NatureServe & USGS"]
  },
  {
    id: "exp-2",
    year: "2025 – Present",
    role: "National Policy Board Member & Youth Core Committee",
    organization: "U.S. Biosphere Network",
    location: "Washington, DC / National",
    category: "policy",
    typeLabel: "National Policy Board & Governance",
    impactMetric: "National Gap Analysis & UNESCO MAB Nominee (2026)",
    highlights: [
      "Serve on the **National Policy Board** and **Youth Core Committee** of the U.S. Biosphere Network; nominated by the Network for the **UNESCO MAB Young Scientists Award (2026)**.",
      "Authored the **national gap analysis** behind the Network’s policy position and briefed senior federal agency leaders, a federal climate science center, and UNESCO working groups on national conservation target performance.",
      "Presented ecosystem representation research directly to the U.S. Biosphere Network in 2026."
    ],
    tags: ["National Policy Board", "Youth Core Committee", "UNESCO MAB Nominee (2026)", "Federal Agency Briefings", "National Gap Analysis"]
  },
  {
    id: "exp-3",
    year: "2026 – Present",
    role: "Student Representative-Elect, Executive Committee",
    organization: "IALE-North America (Landscape Ecology)",
    location: "North America / National",
    category: "leadership",
    typeLabel: "Elected Professional Leadership",
    impactMetric: "Student Keynote Speaker · IALE 2026",
    highlights: [
      "Elected as **Student Representative-Elect** to the Executive Committee of the International Association for Landscape Ecology (IALE-North America).",
      "Delivered student **Keynote Presentation at IALE-North America 2026** on distributional measurement of national conservation target attainment and multi-jurisdiction burden attribution.",
      "Lead student and early-career professional development, research symposia, and landscape ecology networking."
    ],
    tags: ["IALE-North America", "Student Representative-Elect", "Keynote Address 2026", "Landscape Ecology", "Early-Career Mentorship"]
  },
  {
    id: "exp-4",
    year: "May 2025 – Oct. 2025",
    role: "EcoLeaders Graduate Research Fellow & Platform Strategist",
    organization: "National Wildlife Federation",
    location: "Reston, VA / Remote",
    category: "leadership",
    typeLabel: "Conservation Analytics & Digital Strategy",
    impactMetric: "+283% Engagement & National Wildlife Profile",
    highlights: [
      "Selected as the NWF EcoLeaders Graduate Research Fellow; featured in *National Wildlife* magazine profile: **'Vishal Kennedy Is Mapping the Future'**.",
      "Reconstructed several prior years of platform analytics records into a **consistent cohort panel**, executing longitudinal behavioral analysis to isolate engagement drivers: **+283% active engagement increase**.",
      "Built and maintained recurring executive dashboards, specified enterprise API integrations with Personify platform engineers, and delivered an adopted 6–12 month strategic roadmap."
    ],
    tags: ["National Wildlife Federation", "+283% Engagement", "National Wildlife Feature", "Longitudinal Telemetry", "Recurring Dashboards", "Youth Changemakers"]
  },
  {
    id: "exp-5",
    year: "2023 – Present",
    role: "Environmental Policy Analyst & Regulatory Specialist",
    organization: "Baker School of Public Policy · Environmental Law Organization",
    location: "Knoxville, TN",
    category: "policy",
    typeLabel: "Administrative Law & Federal Comments",
    impactMetric: "3rd Place National Policy Memo · USFWS Okefenokee Comment",
    highlights: [
      "**3rd place nationally** in the National Wildlife Federation Innovative Policy Memo Contest for analyzing statutory authority, compliance standards, and multi-party co-management under the Clean Water Act for Mississippi River Basin flood resilience.",
      "Contributed to a formal regulatory public comment letter submitted to the **U.S. Fish and Wildlife Service (USFWS)** on a contested titanium mining permitting decision threatening the **Okefenokee National Wildlife Refuge**.",
      "Received the **Tom Gilbert Award (2026)** from UTK's Baker School of Public Policy and Public Affairs for impactful environmental policy analysis bridging quantitative models with federal decisions.",
      "Apply **ISO 14001 lead auditor and U.S. EPA disclosure standards** to analytical documentation and environmental compliance reviews."
    ],
    tags: ["Clean Water Act", "USFWS Okefenokee Comment", "NWF 3rd Place National", "Tom Gilbert Award (2026)", "ISO 14001 Lead Auditor", "EPA Standards"]
  },
  {
    id: "exp-6",
    year: "2016 – 2022",
    role: "Pre-Doctoral Research Scholar & Field Ecologist",
    organization: "IISER Kolkata · IISc Bangalore · Manipal Centre · UWA Perth",
    location: "India & Australia",
    category: "research",
    typeLabel: "International Research & Fieldwork",
    impactMetric: "Top 1% INSPIRE Scholar · Western Ghats & Smokies Fieldwork",
    highlights: [
      "Completed integrated B.S.–M.S. in Biological Sciences at **IISER Kolkata** (top 1% national **INSPIRE Scholar**); elected General Secretary, Student Affairs Council (governing operations for 4,000+ members).",
      "Conducted extensive field research across the **Western Ghats biodiversity hotspot** and the **Great Smoky Mountains National Park**.",
      "Research stints at the **Indian Institute of Science (IISc Bangalore)**, the **Manipal Centre for Natural Sciences**, and the **University of Western Australia (UWA Perth)** evaluating crop resilience to disease and climate stress (optimizing screening pipeline throughput by 30%) and UN SDGs 13 & 15.",
      "Core team member of **Ek Pehal (2016–2021)**, student-run initiative teaching STEM and hygiene to children and women in underserved communities."
    ],
    tags: ["IISER Kolkata B.S.–M.S.", "INSPIRE Scholar (Top 1%)", "IISc Bangalore", "UWA Perth", "Western Ghats Fieldwork", "Smoky Mountains", "Ek Pehal"]
  },
  {
    id: "exp-7",
    year: "2024 – 2026",
    role: "Computational Policy & Open-Source Causal Analysis",
    organization: "Independent Analysis & AI Governance",
    location: "Open Source / National",
    category: "built",
    typeLabel: "Open Causal Analysis & Tooling",
    impactMetric: "AI Adoption Parity Index · Interactive Live Audit",
    highlights: [
      "**AI adoption parity index (2026)**: Conceived and engineered an open-source analysis measuring state-level AI adoption against AI-exposed employment rather than population using the Anthropic Economic Index, BLS OES, and O*NET.",
      "Rendered dynamic Lorenz curves, Gini inequality metrics, and Theil decompositions across 6 geographic tiers, publishing an interactive web audit and reproducible Jupyter notebooks."
    ],
    tags: ["Anthropic Economic Index", "BLS OES & O*NET", "Lorenz Curves", "Gini & Theil", "Python & R", "Open Source"]
  },
  {
    id: "exp-8",
    year: "2024 – 2025",
    role: "Applied AI Systems, ML Pipelines & Campus Enablement",
    organization: "Oak Ridge National Lab · Perplexity AI · Google API",
    location: "Oak Ridge, TN / Remote",
    category: "built",
    typeLabel: "IOP ML Publication & Enterprise Training",
    impactMetric: "Peer-Reviewed ML Paper & 500+ Researchers Trained",
    highlights: [
      "Co-developed autoencoders for Transmission Electron Microscopy with a four-university team (Penn State, NYU, Purdue, UTK), published in *Machine Learning: Science and Technology* (DOI: 10.1088/2632-2153/ae1f5d).",
      "Shipped full-stack Node/Express conversational agent on Google Gemini API.",
      "Built and delivered technical AI-literacy curriculum to **500+ researchers, faculty, and staff at Perplexity AI**."
    ],
    tags: ["ORNL Publication", "Autoencoders", "IOP ML: Science & Tech", "Google Gemini API", "Perplexity AI", "500+ Researchers"]
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
          <span className="text-xs uppercase tracking-[0.4em] text-emerald-400 font-semibold block mb-3">
            Track Record &amp; Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            Professional <span className="font-semibold">Experience.</span>
          </h2>
          <p className="text-[#86868b] text-sm md:text-base font-light leading-relaxed">
            Quantitative ecology, ecosystem representation benchmarks, trans-boundary climate modeling, and environmental policy translation.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            {[
              { id: "all", label: "All Experiences", icon: Sparkles },
              { id: "research", label: "Conservation & Spatial Ecology", icon: Cpu },
              { id: "policy", label: "Policy & Governance", icon: Building2 },
              { id: "leadership", label: "Leadership & Outreach", icon: GraduationCap },
              { id: "built", label: "Computational & Applied AI", icon: Code2 },
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
