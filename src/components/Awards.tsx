"use client";

import { motion } from "framer-motion";
import { Trophy, Presentation, CheckCircle2, ShieldCheck } from "lucide-react";

interface AwardItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  badge?: string;
  category: "fellowship" | "award" | "policy";
}

const AWARDS: AwardItem[] = [
  {
    year: "2026",
    title: "Elected Student Representative, Executive Committee",
    organization: "IALE North America (International Association for Landscape Ecology)",
    description: "Elected to the Executive Committee to represent student and early-career researchers across North American landscape ecology and policy.",
    badge: "Elected Leadership",
    category: "fellowship"
  },
  {
    year: "2026",
    title: "William Byrne-Hartz Fellowship",
    organization: "The University of Tennessee, Knoxville",
    description: "Highest-honor graduate fellowship awarded for outstanding quantitative environmental research and policy impact.",
    badge: "Fellowship Honor",
    category: "fellowship"
  },
  {
    year: "2026",
    title: "Real Brown Award",
    organization: "Ecological Society of America (ESA)",
    description: "Recognizing excellence in wildlife ecology, quantitative spatial modeling, and ecosystem protection.",
    badge: "National Award",
    category: "award"
  },
  {
    year: "2026",
    title: "Tom Gilbert Award",
    organization: "Howard H. Baker Jr. School of Public Policy and Public Affairs",
    description: "Awarded for impactful public policy research bridging data-driven quantitative modeling with federal decision-making.",
    badge: "Policy Honor",
    category: "policy"
  },
  {
    year: "2025",
    title: "EcoLeaders Graduate Research Fellowship",
    organization: "National Wildlife Federation (NWF)",
    description: "National fellowship leading platform analytics, longitudinal behavioral analysis, and enterprise digital strategy (+283% engagement increase).",
    badge: "National Fellowship",
    category: "fellowship"
  },
  {
    year: "2023",
    title: "Third Place Winner, National Innovative Policy Memo Contest",
    organization: "National Wildlife Federation",
    description: "National award for federal regulatory analysis of statutory authority, compliance standards, and multi-party co-management under the Clean Water Act.",
    badge: "3rd Place National",
    category: "policy"
  },
  {
    year: "2016–2021",
    title: "INSPIRE Fellowship (Top 1% National Merit)",
    organization: "Department of Science & Technology, Govt. of India",
    description: "Prestigious 5-year fellowship awarded to students ranking in the top 1% nationwide for scientific excellence during integrated B.S.-M.S.",
    badge: "Top 1% National Merit",
    category: "fellowship"
  }
];

const CERTIFICATIONS = [
  { title: "ISO 14001 Lead Auditor", issuer: "Audit Workshop / Exemplar Global Standards", year: "2025–2026" },
  { title: "EPA Regulatory Training (CAA, CWA, RCRA)", issuer: "U.S. EPA / Baker School Regulatory Frameworks", year: "2025" },
  { title: "Project Management Certification", issuer: "Howard H. Baker Jr. School of Public Policy", year: "2025–2026" },
  { title: "GIS & Remote Sensing Certification", issuer: "Indian Institute of Remote Sensing (ISRO)", year: "2023" },
  { title: "CIRTL Practitioner (Evidence-Based Instruction)", issuer: "Center for Integration of Research, Teaching & Learning", year: "2024" },
  { title: "Administrative & Regulatory Policy Training", issuer: "Baker School of Public Policy & Public Affairs", year: "2024–2025" },
];

const PRESENTATIONS = [
  {
    title: "Distributional Measurement of National Policy Target Attainment Across Governance Tiers",
    venue: "IALE North America Annual Meeting",
    location: "Keynote Presentation",
    year: "2026",
    type: "Keynote Address"
  },
  {
    title: "National Gap Analysis & Policy Target Performance Briefing",
    venue: "U.S. Biosphere Network & UNESCO Working Groups",
    location: "Washington, DC",
    year: "2026",
    type: "Executive Briefing"
  },
  {
    title: "Observational Matching & Climate Adaptation Performance",
    venue: "Federal Climate Adaptation Science Center",
    location: "Regional Science Briefing",
    year: "2025",
    type: "Agency Briefing"
  },
  {
    title: "Converting Analytical Results into Federal Regulatory Comment",
    venue: "Appalachian Public Interest Environmental Law Conference",
    location: "Knoxville, TN",
    year: "2024–2026",
    type: "Practitioner Workshop"
  }
];

export default function Awards() {
  return (
    <section id="awards" className="relative z-20 py-28 px-6 md:px-12 lg:px-24 bg-[#121212] w-full border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(120,119,198,0.05),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#86868b] font-semibold block mb-3">
            Recognition & Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            Awards, Honors & <span className="font-semibold">Certifications.</span>
          </h2>
          <p className="text-[#86868b] text-sm md:text-base font-light leading-relaxed">
            National fellowships, policy awards, professional certifications, and selected keynote presentations.
          </p>
        </div>

        {/* Awards & Fellowships Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="w-5 h-5 text-amber-300" />
            <h3 className="text-xl md:text-2xl font-light text-white">
              Honors & <span className="font-medium">Fellowships</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AWARDS.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
              >
                <div>
                  {/* Badge & Year */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider text-amber-300/90 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full uppercase font-medium">
                      {award.badge}
                    </span>
                    <span className="text-xs font-mono text-[#86868b]">{award.year}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-medium text-white mb-1.5 group-hover:text-amber-200 transition-colors">
                    {award.title}
                  </h4>

                  {/* Organization */}
                  <p className="text-xs text-[#86868b] font-medium mb-3">
                    {award.organization}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Two-Column Grid: Certifications & Keynote Talks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Section */}
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-light text-white">
                  Professional <span className="font-medium">Certifications</span>
                </h3>
              </div>

              <div className="space-y-3.5">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-medium text-white mb-0.5">{cert.title}</h4>
                        <p className="text-xs text-[#86868b]">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-[#86868b] uppercase shrink-0 ml-2">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selected Presentations Section */}
          <div className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Presentation className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-light text-white">
                  Keynote &amp; <span className="font-medium">Presentations</span>
                </h3>
              </div>

              <div className="space-y-3.5">
                {PRESENTATIONS.map((talk) => (
                  <div
                    key={talk.title}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#86868b] uppercase mb-1">
                      <span className="text-blue-300 font-medium">{talk.type}</span>
                      <span>{talk.year}</span>
                    </div>
                    <h4 className="text-sm font-medium text-white mb-1 leading-snug">{talk.title}</h4>
                    <p className="text-xs text-[#86868b]">
                      {talk.venue} • <span className="text-white/60">{talk.location}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
