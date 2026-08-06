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
    role: "Ph.D. Candidate & NSF Graduate Research Assistant",
    organization: "University of Tennessee, Knoxville",
    location: "Knoxville, TN",
    category: "research",
    typeLabel: "NSF Research Project",
    impactMetric: "270 Vertebrate Species Across 13 States",
    highlights: [
      "Engineered automated spatial data processing pipelines across **Python, R, and STATA** evaluating US protected-area effectiveness using federal datasets (PAD-US v4.1, NatureServe v1.0, USNVC, EPA ecoregions).",
      "Modeled climate-driven range shifts for **270 vertebrate species across 13 Appalachian states**, constructing co-responsibility matrices (HHI, Pielou's J, Bray-Curtis) that identify critical policy gaps in State Wildlife Action Plans.",
      "Scope research questions directly with NatureServe and USGS partners, translating spatial findings into federal comment letters and stakeholder briefs through the Environmental Law Organization (ELO)."
    ],
    tags: ["Spatial Data Pipelines", "Python & R", "GIS / PAD-US", "Climate Modeling", "Science Policy"]
  },
  {
    id: "exp-2",
    year: "2025",
    role: "EcoLeaders Platform Rebuild Lead",
    organization: "National Wildlife Federation",
    location: "Reston, VA / Hybrid",
    category: "built",
    typeLabel: "Product Analytics & UX",
    impactMetric: "+283% Platform Engagement Surge",
    highlights: [
      "Diagnosed participant churn on national youth engagement platform by combining user analytics with direct qualitative interviews.",
      "Rebuilt core platform experience around data findings—restructuring content hierarchy, onboarding flows, and outreach cadence—driving a **283% increase in platform engagement** over prior cycle.",
      "Documented outreach and retention framework for permanent staff execution and briefed executive leadership on strategic roadmap."
    ],
    tags: ["Python", "Platform Analytics", "UX Strategy", "Google Analytics", "Product Strategy"]
  },
  {
    id: "exp-3",
    year: "2024 – Present",
    role: "National Protected-Areas Representation Pipeline Developer",
    organization: "University of Tennessee, with NatureServe & USGS",
    location: "Knoxville, TN",
    category: "research",
    typeLabel: "National Spatial Pipeline",
    impactMetric: "210 USNVC Vegetation Groups Analyzed",
    highlights: [
      "Built a reproducible pipeline overlaying **210 USNVC vegetation groups** against PAD-US v4.1 and EPA Level-I ecoregions at national scale, measuring ecological quality over raw acreage.",
      "Demonstrated that strict (GAP 1/2) vs broad (GAP 1/2/3) protection gaps inflate apparent ecosystem representation, undercutting 30x30 policy narratives.",
      "Shipped per-ecoregion regression tables, publication figures, and documented Jupyter/R notebooks for USGS and NatureServe collaborators."
    ],
    tags: ["R & Python", "PAD-US", "NatureServe", "Geospatial Modeling", "30x30 Policy"]
  },
  {
    id: "exp-4",
    year: "Jan 2025 – Oct 2025",
    role: "Campus Strategist",
    organization: "Perplexity AI",
    location: "Remote / UTK Campus",
    category: "policy",
    typeLabel: "AI Adoption & Strategy",
    impactMetric: "500+ Researchers & Faculty Onboarded",
    highlights: [
      "Directed campus adoption program for an enterprise AI research platform, designing and delivering live workshops and hands-on demonstrations for **500+ graduate researchers and faculty**.",
      "Built a network of student leaders and department champions who fielded AI questions, while routing structured user feedback to product engineering teams.",
      "Drafted student-centered recommendations on transparent and academically responsible AI integration, shaping departmental policy guidelines."
    ],
    tags: ["AI Adoption Strategy", "Prompt Engineering", "Product Feedback Loops", "Responsible AI"]
  },
  {
    id: "exp-5",
    year: "2024",
    role: "Automated TEM Analysis Pipeline Developer",
    organization: "Mic-hackathon (ORNL & Microscopy Society of America)",
    location: "Oak Ridge National Lab / Remote",
    category: "built",
    typeLabel: "Hackathon & ML Publication",
    impactMetric: "Peer-Reviewed ML Publication (2025)",
    highlights: [
      "Co-developed machine-learning pipelines automating Transmission Electron Microscopy (TEM) analysis with a multi-university research team (Penn State, NYU, Purdue, UTK), replacing manual instrument acquisition.",
      "Benchmarked image-cropping and augmentation strategies for structure-property prediction in disordered systems using **autoencoder models** to surface nanoparticle geometry correlations.",
      "Contributed directly to peer-reviewed paper: *Mic-hackathon 2024: hackathon on machine learning for electron and scanning probe microscopy*, Machine Learning: Science and Technology (2025), DOI: 10.1088/2632-2153/ae1f5d."
    ],
    tags: ["Python", "Machine Learning", "Autoencoders", "Computer Vision", "ORNL Hackathon", "PyTorch"]
  },
  {
    id: "exp-6",
    year: "2024",
    role: "Clarifying-Question AI Chatbot Creator",
    organization: "Google Gemini API Developer Competition",
    location: "Global Competition",
    category: "built",
    typeLabel: "Google Gemini AI App",
    impactMetric: "Built & Shipped Full-Stack Node/Express App",
    highlights: [
      "Architected an intelligent conversational agent that asks clarifying follow-up questions before generating answers, surfacing intent to condition the **Google Gemini API** call.",
      "Shipped a working full-stack Node.js/Express web application with a responsive browser interface.",
      "Demonstrated that eliciting structured context upfront produces significantly higher output quality for non-expert users compared to traditional prompt engineering."
    ],
    tags: ["JavaScript", "Node.js", "Express", "Google Gemini API", "LLM Elicitation", "Full-Stack"]
  },
  {
    id: "exp-7",
    year: "2025 – Present",
    role: "Youth Board Member",
    organization: "US Biosphere Network (USBN)",
    location: "National / Washington, DC",
    category: "policy",
    typeLabel: "National Policy Board",
    impactMetric: "UNESCO Hangzhou Strategic Action Plan",
    highlights: [
      "Appointed to represent early-career scientists in national biosphere reserve strategy, multi-scale gap analysis, and global 30x30 conservation framework implementation.",
      "Authored nationwide spatial gap analysis evaluating ecosystem representation across US Biosphere Reserves (e.g. Southern Appalachian Biosphere Reserve) aligned with UNESCO targets.",
      "Briefed senior agency leaders and international working groups on ecosystem representation debt and conservation prioritization."
    ],
    tags: ["Biosphere Reserves", "UNESCO Policy", "30x30 Target", "Geospatial Gap Analysis"]
  },
  {
    id: "exp-8",
    year: "May 2025 – Nov 2025",
    role: "EcoLeader Community Management Intern",
    organization: "National Wildlife Federation",
    location: "Reston, VA / Hybrid",
    category: "policy",
    typeLabel: "Fellowship & Policy",
    impactMetric: "3rd Place National Policy Memo Contest",
    highlights: [
      "Authored strategic policy memoranda on sustainability governance and program implementation; earned an **Environmental Justice Badge** for Okefenokee protection advocacy.",
      "Awarded **3rd Place in NWF National Innovative Policy Memo Contest (2023)** for Clean Water Act and tribal co-management policy."
    ],
    tags: ["Policy Governance", "Environmental Justice", "Clean Water Act", "Strategic Writing"]
  },
  {
    id: "exp-9",
    year: "Jun 2021 – Aug 2021",
    role: "Summer Down Under Research Intern",
    organization: "The University of Western Australia",
    location: "Perth, Australia",
    category: "research",
    typeLabel: "Genomics Research",
    impactMetric: "+30% Screening Efficiency",
    highlights: [
      "Optimized disease-resistance screening efficiency by **30%** on a state-funded agricultural resilience project by rewriting analytical pipelines for phenotypic data.",
      "Executed genome-wide association study (GWAS) mapping and RGAugury bioinformatics annotation to identify climate-resilient crop traits."
    ],
    tags: ["Bioinformatics", "GWAS", "RGAugury", "Phenotypic Pipelines", "Crop Resilience"]
  },
  {
    id: "exp-10",
    year: "Aug 2016 – Aug 2021",
    role: "BS-MS Integrated Degree & Student Leader",
    organization: "IISER Kolkata",
    location: "Kolkata, India",
    category: "leadership",
    typeLabel: "Degree & Governance",
    impactMetric: "Top 1% National INSPIRE Scholar",
    highlights: [
      "Awarded prestigious **INSPIRE Fellowship** (Top 1% national merit, Govt of India) for outstanding academic achievement in natural sciences.",
      "Completed Master's Thesis on plant developmental biochemistry and calyptra morphology under rigorous empirical standards.",
      "Elected **General Secretary of the Student Affairs Council (SAC)**; managed annual budgets, campus logistics, and student governance for 2,000+ members."
    ],
    tags: ["Biological Sciences", "INSPIRE Fellow", "Master's Thesis", "Student Governance"]
  },
  {
    id: "exp-11",
    year: "2021 – Present",
    role: "Graduate Teaching Assistant & Science Communicator",
    organization: "Division of Biology & McClung Museum (UTK)",
    location: "Knoxville, TN",
    category: "leadership",
    typeLabel: "Instruction & Outreach",
    impactMetric: "CIRTL Practitioner Certified",
    highlights: [
      "Instructed lab sections for BIOL 159 & BioLit 150; earned **CIRTL Practitioner certification** in evidence-based STEM instruction and student mentorship.",
      "Curated interactive biodiversity public exhibits for annual **Darwin's Day at McClung Museum**, translating complex ecological datasets for public audiences."
    ],
    tags: ["STEM Pedagogy", "CIRTL Practitioner", "Public Communication", "Student Mentorship"]
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
            Building ML pipelines, shipping AI applications, leading national spatial research, and shaping environmental policy.
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
