"use client";

import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Sparkles, 
  Globe2, 
  ChevronRight,
  Compass,
  Brain
} from "lucide-react";
import { useState } from "react";

interface TeachingItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  category: "instruction" | "mentorship" | "workshops" | "outreach";
  impactMetric?: string;
  highlights: string[];
  tags: string[];
}

const TEACHING_EXPERIENCES: TeachingItem[] = [
  {
    id: "teach-1",
    period: "2021 - Present",
    role: "Graduate Teaching Assistant & Laboratory Instructor",
    organization: "Division of Biology, University of Tennessee, Knoxville",
    location: "Knoxville, TN",
    category: "instruction",
    impactMetric: "120+ Undergraduates Taught",
    highlights: [
      "Instruct lab sections for BIOL 159 (Skills of Biological Investigation) and BioLit 150 (Biological Literacy).",
      "Guide students through hypothesis formulation, experimental design, and data analysis in R and Python.",
      "Apply CIRTL Practitioner methods (active learning, inclusive design) to every lab section.",
      "Give detailed feedback on empirical papers and facilitate collaborative scientific discussion."
    ],
    tags: ["STEM Pedagogy", "CIRTL Practitioner Certified", "BIOL 159 & 150", "R & Python Data", "Lab Instruction"]
  },
  {
    id: "teach-2",
    period: "Jan 2025 - Oct 2025",
    role: "Perplexity AI Campus Strategist & AI Literacy Lead",
    organization: "Perplexity AI & UT Knoxville",
    location: "Knoxville, TN / Remote",
    category: "workshops",
    impactMetric: "500+ Researchers & Faculty Onboarded",
    highlights: [
      "Designed and delivered AI research-literacy workshops for 500+ researchers, postdocs, and faculty.",
      "Taught structured prompting, literature-synthesis workflows, and source-verification techniques for scholarly work.",
      "Drafted university guidelines for responsible AI integration in research writing.",
      "Mentored a cross-departmental network of student AI champions."
    ],
    tags: ["AI Research Literacy", "Prompt Engineering", "Faculty Workshops", "500+ Trained", "Responsible AI"]
  },
  {
    id: "teach-3",
    period: "2022 - Present",
    role: "Undergraduate Spatial Ecology Research Mentor",
    organization: "Armsworth Lab, UT Knoxville",
    location: "Knoxville, TN",
    category: "mentorship",
    impactMetric: "1-on-1 Research & Career Mentorship",
    highlights: [
      "Mentor undergraduates in spatial connectivity modeling (Circuitscape), remote sensing, and GIS processing.",
      "Coach students to present poster research at UTK's EUReCA exhibition.",
      "Advise mentees on NSF REU applications, grad-school statements, and manuscript drafting.",
      "Host weekly code-review sessions teaching reproducible R and Python workflows."
    ],
    tags: ["Spatial Modeling", "EUReCA Mentor", "GIS/R Training", "NSF REU Prep", "Code Review"]
  },
  {
    id: "teach-4",
    period: "2024 - 2025",
    role: "NWF EcoLeaders Youth Leadership & Community Mentor",
    organization: "National Wildlife Federation",
    location: "Reston, VA / Remote",
    category: "mentorship",
    impactMetric: "National Student Policy Mentorship",
    highlights: [
      "Mentored youth leaders nationwide on policy writing, advocacy, and community outreach.",
      "Ran peer-review and coaching sessions for national policy memos on Clean Water Act and tribal co-management.",
      "Evaluated capstone projects for national sustainability-badge credentials."
    ],
    tags: ["Youth Leadership", "Policy Mentorship", "Clean Water Act", "Community Engagement"]
  },
  {
    id: "teach-5",
    period: "2021 - Present",
    role: "Public Science Communicator & Museum Educator",
    organization: "McClung Museum of Natural History & Culture",
    location: "Knoxville, TN",
    category: "outreach",
    impactMetric: "Public K-12 & Community Outreach",
    highlights: [
      "Curate interactive biodiversity and genetics stations for McClung Museum's annual Darwin's Day.",
      "Translate ecological datasets and specimen collections for K-12 students, teachers, and visitors.",
      "Design hands-on activities linking Appalachian biodiversity to climate conservation."
    ],
    tags: ["Darwin's Day", "Public Communication", "Museum Education", "K-12 Science"]
  },
  {
    id: "teach-6",
    period: "2024 - 2026",
    role: "Appalachian Environmental Policy Workshop Leader",
    organization: "Appalachian Public Interest Environmental Law (APIEL)",
    location: "Knoxville, TN",
    category: "workshops",
    impactMetric: "Practitioner Training Workshops",
    highlights: [
      "Lead practitioner workshops teaching advocates to turn spatial ecological data into federal comment letters.",
      "Authored open-access reference guides for translating GIS data into environmental law and policy."
    ],
    tags: ["Policy Workshops", "GIS Translation", "Environmental Advocacy", "APIEL Conference"]
  }
];

const COURSES = [
  {
    code: "BIOL 159",
    title: "Skills of Biological Investigation",
    institution: "University of Tennessee, Knoxville",
    role: "Laboratory Instructor",
    description: "Hands-on laboratory course introducing undergraduates to experimental design, statistical hypothesis testing, data visualization in R/Python, and scientific reporting."
  },
  {
    code: "BioLit 150",
    title: "Biological Literacy & Synthesis",
    institution: "University of Tennessee, Knoxville",
    role: "Graduate Teaching Assistant",
    description: "Foundational course focusing on critical evaluation of primary scientific literature, research synthesis, peer review, and scientific writing."
  },
  {
    code: "AI-101",
    title: "AI Workflows for Academic Research",
    institution: "Perplexity AI & UT Knoxville",
    role: "Workshop Creator & Leader",
    description: "Campus-wide workshop series covering computational research synthesis, advanced prompt engineering, source verification, and transparent AI integration."
  },
  {
    code: "GIS-POL",
    title: "Spatial Ecological Data in Environmental Policy",
    institution: "APIEL Conference",
    role: "Practitioner Workshop Leader",
    description: "Specialized training on translating species movement models and spatial GIS layers into federal public comment letters and legal briefs."
  }
];

const PEDAGOGY_CERTIFICATIONS = [
  { title: "CIRTL Practitioner Certification", issuer: "Center for Integration of Research, Teaching & Learning", year: "2024" },
  { title: "Evidence-Based STEM Teaching", issuer: "CIRTL Network / UTK Graduate School", year: "2023" },
  { title: "Inclusive Pedagogy & Active Learning", issuer: "UTK Teaching & Learning Innovation", year: "2023" },
  { title: "AI Literacy & Prompt Architecture", issuer: "Anthropic / Perplexity", year: "2025" }
];

export default function Teaching() {
  const [filter, setFilter] = useState<"all" | "instruction" | "mentorship" | "workshops" | "outreach">("all");

  const filteredExperiences = TEACHING_EXPERIENCES.filter(
    (exp) => filter === "all" || exp.category === filter
  );

  return (
    <section id="teaching" className="relative z-20 py-28 px-6 md:px-12 lg:px-24 bg-[#121212] w-full border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_75%_60%_at_50%_30%,rgba(16,185,129,0.05),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-emerald-400 font-semibold block mb-3">
            Pedagogy & Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            Teaching & Mentoring <span className="font-semibold">Experience.</span>
          </h2>
          <p className="text-[#86868b] text-sm md:text-base font-light leading-relaxed">
            Empowering students and early-career researchers through evidence-based STEM instruction, computational workshops, and inclusive academic mentorship.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8">
            {[
              { id: "all", label: "All Roles", icon: Sparkles },
              { id: "instruction", label: "University Instruction", icon: GraduationCap },
              { id: "mentorship", label: "Research Mentorship", icon: Users },
              { id: "workshops", label: "AI & Data Workshops", icon: Brain },
              { id: "outreach", label: "Public Science", icon: Globe2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as "all" | "instruction" | "mentorship" | "workshops" | "outreach")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-400 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-105"
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

        {/* Metrics Grid Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center bg-white/[0.02]">
            <div className="text-2xl md:text-3xl font-light text-white mb-1">500+</div>
            <div className="text-xs text-[#86868b] font-medium">Researchers & Faculty Trained in AI</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center bg-white/[0.02]">
            <div className="text-2xl md:text-3xl font-light text-emerald-400 mb-1">CIRTL</div>
            <div className="text-xs text-[#86868b] font-medium">Practitioner Certified in STEM Pedagogy</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center bg-white/[0.02]">
            <div className="text-2xl md:text-3xl font-light text-white mb-1">4+</div>
            <div className="text-xs text-[#86868b] font-medium">University Courses & Lab Sections</div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10 text-center bg-white/[0.02]">
            <div className="text-2xl md:text-3xl font-light text-emerald-400 mb-1">1-on-1</div>
            <div className="text-xs text-[#86868b] font-medium">Undergrad & Youth Policy Mentorship</div>
          </div>
        </div>

        {/* Teaching & Mentoring Cards */}
        <div className="space-y-6 mb-20">
          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group bg-white/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-emerald-400 font-semibold bg-emerald-400/10 px-3 py-1 rounded-full border border-emerald-400/20">
                      {exp.period}
                    </span>
                    {exp.impactMetric && (
                      <span className="text-xs font-mono text-white/80 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {exp.impactMetric}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-light text-white group-hover:text-emerald-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs md:text-sm text-[#86868b] mt-1 font-medium">
                    {exp.organization} • <span className="text-white/60">{exp.location}</span>
                  </p>
                </div>
              </div>

              {/* Highlights List */}
              <ul className="space-y-2.5 mb-6 text-sm text-white/80 font-light">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: highlight.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-white">$1</strong>') }} />
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-[#86868b] bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two-Column Grid: Courses Taught & Pedagogical Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Courses & Workshops Showcase (2 Cols) */}
          <div className="lg:col-span-2 glass-card p-8 rounded-2xl border border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <h3 className="text-xl font-light text-white">
                Courses Instructed & <span className="font-medium">Workshops</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COURSES.map((course) => (
                <div
                  key={course.code}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-medium mb-1">
                      <span>{course.code}</span>
                      <span className="text-[10px] text-[#86868b] uppercase">{course.role}</span>
                    </div>
                    <h4 className="text-sm font-medium text-white mb-1.5">{course.title}</h4>
                    <p className="text-xs text-[#86868b] leading-relaxed mb-3">
                      {course.description}
                    </p>
                  </div>
                  <span className="text-[10px] text-white/50 font-mono">{course.institution}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Philosophy Column (1 Col) */}
          <div className="space-y-6">
            {/* Certifications Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-amber-300" />
                <h3 className="text-lg font-light text-white">
                  Pedagogical <span className="font-medium">Training</span>
                </h3>
              </div>

              <div className="space-y-3">
                {PEDAGOGY_CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="p-3 rounded-lg bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between text-xs font-medium text-white mb-0.5">
                      <span>{cert.title}</span>
                      <span className="text-[10px] font-mono text-amber-300">{cert.year}</span>
                    </div>
                    <p className="text-[11px] text-[#86868b]">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Teaching Philosophy Card */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 text-emerald-400">
                <Compass className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Pedagogical Philosophy
                </span>
              </div>
              <p className="text-xs text-white/80 font-light leading-relaxed italic">
                &ldquo;Good STEM teaching pairs technical precision with inclusive, inquiry-driven mentorship. My aim is to give students the computational tools, scientific literacy, and confidence to drive real conservation impact.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
