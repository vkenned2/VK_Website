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
    year: "Aug 2022 - Present",
    role: "Graduate Research Scientist (NSF Funded)",
    organization: "University of Tennessee, Armsworth Lab",
    location: "Knoxville, TN",
    category: "research",
    typeLabel: "National Assessment & Modeling",
    impactMetric: "210 Ecosystem Types Across 4.3M km²",
    highlights: [
      "Designed and led a national environmental assessment covering **210 ecosystem types across 4.3 million km²**, owning research design, statistical modeling, documentation, and validation.",
      "Built a **two-tier quality assessment framework** separating high-integrity outcomes from nominal ones; revealed weaker tier supplies 70% of headline total, with targets met for 63% under permissive vs 19% under strict definitions.",
      "Created the **baseline-setting methodology** defining expected outcomes, plus linear and log-log benchmark models making results comparable across units differing by orders of magnitude, explaining up to **82% of outcome variance**.",
      "Reconciled 4 heterogeneous federal data sources (PAD-US, USNVC, EPA ecoregions, NatureServe G-ranks) into an analytical layer with automated QA/QC checks in Python and R, maintaining **ISO 14001-style audit-trail discipline**.",
      "Modeled climate-driven range shifts for **270 species across 13 states** and constructed **co-responsibility matrices** (concentration & evenness indices) for jurisdictional attribution where climate impacts cross boundaries.",
      "Served as technical lead in a cross-functional partnership with NatureServe and USGS, translating statistical methods into criteria non-specialist teams can apply."
    ],
    tags: ["Nationwide Spatial Modeling", "PAD-US Analytics", "Baseline Modeling", "Two-Tier Quality Framework", "Python & R Pipelines", "ISO 14001 Audit Discipline", "Co-Responsibility Matrix"]
  },
  {
    id: "exp-2",
    year: "May 2025 - Oct 2025",
    role: "National EcoLeaders Research Fellow & Platform Strategist",
    organization: "National Wildlife Federation",
    location: "Remote / Reston, VA",
    category: "leadership",
    typeLabel: "National Sustainability Fellowship",
    impactMetric: "+283% Engagement & Enterprise Roadmap",
    highlights: [
      "Led digital strategy and behavioral data analytics for America's largest youth sustainability network, achieving a **+283% surge in active engagement** across the national platform.",
      "Conducted longitudinal behavioral analytics on multi-year cohort datasets ($r = +0.84$ active user-action correlation), isolating onboarding bottlenecks and diagnosing platform stickiness levers.",
      "Architected enterprise integration specifications with **Personify platform engineers**, establishing automated API triggers, behavioral email nudge journeys, and dynamic personalized recommendation widgets.",
      "Engineered multi-tiered **gamification progression architecture** (milestone badges, Bronze/Silver/Gold ladders, seasonal challenges) and redesigned the EcoLeader Certification UX.",
      "Convened and facilitated consultative focus groups with NWF's **National Youth Advisory Council (YAC)**, embedding stakeholder co-design into national digital governance.",
      "Scripted, designed, and produced full-suite multimedia video tours (DaVinci Resolve / CapCut / Canva) and delivered an executive-adopted 6–12 month implementation roadmap."
    ],
    tags: ["Behavioral Analytics", "Personify Platform", "Gamification Engines", "Longitudinal Modeling", "Youth Advisory Council", "Multimedia UX"]
  },
  {
    id: "exp-3",
    year: "2024 - Present",
    role: "Environmental Management & Audit Systems Specialist",
    organization: "Baker School of Public Policy / Audit Workshop",
    location: "Knoxville, TN",
    category: "policy",
    typeLabel: "EMS & Regulatory Compliance",
    impactMetric: "ISO 14001 Lead Auditor Certified",
    highlights: [
      "Completed **Exemplar Global certified ISO 14001:2026 Lead Auditor training** covering EMS requirements, audit planning/execution, environmental aspects & impacts, nonconformity/corrective action, and Plan-Do-Check-Act continual improvement.",
      "Completed **U.S. EPA foundational regulatory training** in Clean Air Act (CAA) and RCRA, with self-directed review of South Carolina DES (SC DES) permitting requirements.",
      "Analyzed state & federal clean-energy and land-use policy with the Environmental Law Organization, including EV infrastructure, utility incentives, clean energy standards, and siting compliance.",
      "Trained in Advanced Microsoft Excel (VLOOKUP, pivot tables, multi-source data reconciliation, macros) and environmental compliance reporting software."
    ],
    tags: ["ISO 14001 EMS", "Lead Auditor Training", "Clean Air Act & RCRA", "SC DES Permitting", "Advanced Excel", "Compliance Reporting"]
  },
  {
    id: "exp-4",
    year: "Jan 2025 - Oct 2025",
    role: "Campus Strategist and Training Program Lead",
    organization: "Perplexity AI",
    location: "Knoxville, TN / Remote",
    category: "leadership",
    typeLabel: "Enterprise Program Lead",
    impactMetric: "500+ Researchers & Staff Trained",
    highlights: [
      "Coordinated and developed a technical training curriculum delivered to **500+ researchers and staff** across multiple departments.",
      "Drafted responsible-use guidelines adopted at department level for non-technical users and maintained supporting intranet, web content, and internal communications.",
      "Ran structured feedback cycles between campus users and product engineering team across fast-paced release windows."
    ],
    tags: ["Training Curriculum", "Intranet & Web Maintenance", "Cross-Functional Leadership", "User Feedback Loops"]
  },
  {
    id: "exp-5",
    year: "Dec 2021 - Aug 2022",
    role: "Research Scientist",
    organization: "Manipal Centre for Natural Sciences (Dr. Pandi Lab)",
    location: "Manipal, India",
    category: "research",
    typeLabel: "Global Sustainability Analytics",
    impactMetric: "UN SDG 13 & 15 Evaluation",
    highlights: [
      "Applied geospatial and statistical modeling to evaluate environmental program performance against **UN Sustainable Development Goals 13 (Climate Action)** and **15 (Life on Land)**.",
      "Integrated large, heterogeneous environmental datasets into technical compliance reports used by government decision-makers and international stakeholders."
    ],
    tags: ["UN SDGs 13 & 15", "Geospatial Modeling", "Technical Reports", "Environmental Performance"]
  },
  {
    id: "exp-6",
    year: "Jun 2021 - Aug 2021",
    role: "Summer Research Intern (SDURI Fellowship)",
    organization: "The University of Western Australia",
    location: "Perth, Australia",
    category: "research",
    typeLabel: "Supply Chain Risk Fellowship",
    impactMetric: "+30% Screening Throughput",
    highlights: [
      "Analyzed experimental phenotypic and genomic screening data for government-funded program on crop resilience to disease and climate stress (**input-side risk in agricultural supply chains**).",
      "Restructured analytical pipeline to **raise screening throughput 30%**, scaling evaluation across a heterogeneous dataset without loosening quality standards applied to each sample."
    ],
    tags: ["Supply Chain Risk", "Throughput Optimization", "Data Pipelines", "Multidisciplinary Collaboration"]
  },
  {
    id: "exp-7",
    year: "2025 - Present",
    role: "Youth Board Member",
    organization: "US Biosphere Network (USBN)",
    location: "National / Washington, DC",
    category: "policy",
    typeLabel: "National Policy Board",
    impactMetric: "UNESCO National Gap Analysis",
    highlights: [
      "Represent early-career scientists on national biosphere-reserve strategy and national ecosystem representation gap analysis.",
      "Authored national representation gap analysis and presented to U.S. Biosphere Network, Southeast Climate Adaptation Science Center, and agency leaders.",
      "Briefed senior agency leaders and international working groups on ecosystem protection targets."
    ],
    tags: ["UNESCO Policy", "Geospatial Gap Analysis", "National Agency Briefings", "Stakeholder Presentation"]
  },
  {
    id: "exp-8",
    year: "2024",
    role: "Automated TEM Analysis Pipeline Developer",
    organization: "Mic-hackathon (ORNL & MSA)",
    location: "Oak Ridge National Lab / Remote",
    category: "built",
    typeLabel: "ML Publication",
    impactMetric: "Peer-Reviewed ML Publication",
    highlights: [
      "Co-developed ML pipelines automating Transmission Electron Microscopy analysis with a four-university team (Penn State, NYU, Purdue, UTK).",
      "Benchmarked image-cropping and augmentation strategies, using autoencoders to surface nanoparticle-geometry correlations.",
      "Contributed to resulting peer-reviewed paper in *Machine Learning: Science and Technology* (DOI: 10.1088/2632-2153/ae1f5d)."
    ],
    tags: ["Python", "Machine Learning", "Autoencoders", "ORNL Hackathon", "Computer Vision"]
  },
  {
    id: "exp-9",
    year: "2024",
    role: "Clarifying-Question AI Chatbot Creator",
    organization: "Google Gemini API Developer Competition",
    location: "Global Competition",
    category: "built",
    typeLabel: "Full-Stack App",
    impactMetric: "Full-Stack Node/Express App Shipped",
    highlights: [
      "Designed a conversational agent that asks clarifying questions before answering, conditioning each API call on user intent.",
      "Shipped full-stack Node.js/Express app with responsive browser interface, demonstrating context-awareness and user guidance."
    ],
    tags: ["JavaScript", "Node.js", "Express", "Google Gemini API", "UX Engineering"]
  },
  {
    id: "exp-10",
    year: "Aug 2016 - Aug 2021",
    role: "Integrated B.S. and M.S., Ecology & Environmental Biology",
    organization: "IISER Kolkata",
    location: "Kolkata, India",
    category: "leadership",
    typeLabel: "Degree & Governance",
    impactMetric: "Top 1% National INSPIRE Scholar",
    highlights: [
      "Conferred Master's degree in 2021, followed by 5 years of continuous full-time quantitative research.",
      "Awarded INSPIRE Fellowship (top 1% national merit, Govt. of India) for academic excellence.",
      "Elected General Secretary of Student Affairs Council, governing budgets and logistics for a 2,000+ member organization across multicultural teams."
    ],
    tags: ["Ecology & Environment", "INSPIRE Fellow", "Student Governance", "Budget & Logistics"]
  },
  {
    id: "exp-11",
    year: "2022 - Present",
    role: "Graduate Teaching Associate & Science Communicator",
    organization: "University of Tennessee, Knoxville",
    location: "Knoxville, TN",
    category: "leadership",
    typeLabel: "Instruction & Outreach",
    impactMetric: "CIRTL Practitioner Certified",
    highlights: [
      "Instruct laboratory sections for 90+ credit hours of environmental science, regulatory policy, and quantitative methods.",
      "Earned CIRTL Practitioner certification in evidence-based STEM instruction.",
      "Designed and led public environmental education sessions, museum exhibits, and visitor programming for McClung Museum Darwin's Day (2022–2025)."
    ],
    tags: ["Evidence-Based Instruction", "CIRTL Practitioner", "Public Outreach", "Environmental Education"]
  },
  {
    id: "exp-12",
    year: "2022 - Present",
    role: "Environmental & Sustainability Leadership Initiative",
    organization: "University of Tennessee, Knoxville",
    location: "Knoxville, TN",
    category: "leadership",
    typeLabel: "Campus Sustainability & Advocacy",
    impactMetric: "2026 Sustainability Award Nominee",
    highlights: [
      "Founded and led a campus **Electric Vehicle (EV) sustainability initiative**, expanding EV charging infrastructure awareness and sustainable transportation advocacy—nominated for the **2026 Campus Sustainability Award**.",
      "Served as **IP-PIPES mentor** to incoming graduate students, providing research guidance and fostering inclusive academic community within EEB.",
      "Volunteered at **McClung Museum of Natural History & Culture**, contributing to citizen science programs, Darwin Day public outreach, and biodiversity education events (2022–2025).",
      "Active member of the **Environmental Law Organization**, co-authoring a public comment letter opposing strip mining near Okefenokee National Wildlife Refuge.",
      "Engaged with **Naturalists Club**, **Society for Professional Environmental Scientists (SPES)**, and **Ecological Leadership Group (ELG)** to lead campus invasive plant removal at Deans Woods trail and biodiversity awareness campaigns.",
      "Presented at the **Tennessee Biodiversity Summit**, **SE Climate Adaptation Science Center (SE-CASC)**, and **Appalachian Law Conference** on conservation policy and ecosystem representation gaps."
    ],
    tags: ["EV Initiative", "2026 Sustainability Award", "IP-PIPES Mentor", "McClung Museum", "Environmental Law", "Naturalists Club"]
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
