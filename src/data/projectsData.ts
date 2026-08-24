export interface ProjectMeta {
  label: string;
  value: string;
}

export interface ProjectCTA {
  text: string;
  link: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  overview: string;
  meta: ProjectMeta[];
  role: string;
  tools: string[];
  context: string;
  process: string[];
  image: string;
  workflowImage: string | null;
  cta: ProjectCTA | null;
  challenges?: string;
  solution?: string;
  outcome?: string;
  galleryImages?: string[];
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    slug: "ai-adoption-parity-index",
    title: "AI Adoption Parity Index & Exposure-Adjusted Distributional Analysis",
    tagline: "Open analysis measuring state-level AI adoption against AI-exposed employment rather than population using the Anthropic Economic Index, BLS OES, and O*NET.",
    category: "Open Analysis & Causal Metrics",
    year: "2026",
    overview: "Conceived and engineered an open-source analysis measuring state-level AI adoption against AI-exposed employment rather than raw population. Utilizes the Anthropic Economic Index, BLS Occupational Employment and Wage Statistics (OES), and O*NET occupational exposure models, evaluating geographic concentration through Lorenz curves and Gini coefficients on both raw and exposure-adjusted distributions.",
    meta: [
      { label: "Data Sources", value: "Anthropic Economic Index, BLS OES, O*NET Occupational Data" },
      { label: "Methodologies", value: "Lorenz Curves, Gini Coefficients, Exposure-Adjusted Distributions" },
      { label: "Repository", value: "github.com/vkenned2/Anthropic_ai-adoption-parity-index" },
      { label: "Software / Stack", value: "Python (pandas, NumPy, statsmodels), R, Git & GitHub" }
    ],
    role: "Lead Quantitative Analyst. Conceived the research question, engineered the exposure weighting model, calculated concentration metrics, and open-sourced the analysis.",
    tools: ["Python", "R", "Anthropic Economic Index", "BLS OES", "O*NET", "Gini Coefficients", "Lorenz Curves", "Git & GitHub"],
    context: "Investigating whether geographic AI adoption correlates with raw population or specifically with knowledge-work occupational density across U.S. states.",
    process: [
      "Ingest state-level AI activity telemetry from the Anthropic Economic Index.",
      "Extract and harmonize employment distributions across detailed occupational categories from BLS OES.",
      "Map O*NET occupational exposure scores to estimate state-level AI-exposed labor forces.",
      "Construct Lorenz curves and compute Gini inequality coefficients on raw vs exposure-adjusted distributions.",
      "Publish open-access Jupyter notebooks and documentation enabling reproducible public replication."
    ],
    image: "/projects/anthropic-ai-adoption-parity.png",
    workflowImage: null,
    cta: {
      text: "View GitHub Repository",
      link: "https://github.com/vkenned2/Anthropic_ai-adoption-parity-index"
    },
    challenges: "Raw population normalization fundamentally skews public and policy understanding of AI adoption. It fails to account for regional differences in occupational exposure and knowledge-economy workforce concentration, misattributing geographic disparities to adoption reluctance rather than occupational mix.",
    solution: "Engineered an exposure-weighted parity index by mapping O*NET occupational task exposure scores to BLS OEWS state employment matrices. Constructed Lorenz curves and computed Gini inequality coefficients to compare raw population distributions against exposure-adjusted counterfactuals.",
    outcome: "Delivered a reproducible, open-source analysis showing that exposure weighting shifts state parity distributions significantly, providing policymakers and economists with a faithful benchmark for measuring regional AI workforce adoption."
  },
  {
    slug: "us-nationwide-representation-analysis-quality-framework",
    title: "National Policy Performance & Proportional-Parity Benchmark",
    tagline: "Proved headline metric systematically overstates national policy performance; designed proportional-parity benchmark across 210 categories nationwide.",
    category: "Policy Performance & Measurement",
    year: "2022–Present",
    overview: "Determined which metric faithfully represents national policy performance to external audiences: proved the headline statistic in widest official use systematically overstates it, and designed the proportional-parity benchmark replacing it across 210 classification categories nationwide. Quantified how metric definition drives externally reported results: the permissive tier supplies 70% of the headline number, and a published policy target appears met for 63% of units under the loose definition against 19% under the strict one. Audited a widely cited published result and proved its reported intercept and crossover point were algebraic identities rather than empirical findings, retracting an inference that had already propagated into downstream policy debate. Own the Python and R pipelines reconciling four heterogeneous federal data sources with automated QA.",
    meta: [
      { label: "Partners", value: "NatureServe, U.S. Geological Survey (USGS), NSF" },
      { label: "Federal Data Sources", value: "PAD-US v4.1, USNVC, EPA Ecoregions, NatureServe G-ranks" },
      { label: "Software / Stack", value: "Python, R, STATA, Automated QA/QC Pipelines" },
      { label: "Key Deliverables", value: "Proportional-Parity Benchmark, 2-Tier Quality Framework, Discrepancy QA" }
    ],
    role: "Graduate Research Scientist & Technical Lead. Owned research design, proportional-parity benchmark construction, algebraic audit, and automated QA validation.",
    tools: ["Python", "R", "Proportional-Parity Benchmark", "Two-Tier Quality Framework", "Algebraic Auditing", "Automated QA", "PAD-US", "NatureServe"],
    context: "Ph.D. dissertation developed with the U.S. Geological Survey and NatureServe, funded by the National Science Foundation to evaluate national policy target integrity.",
    process: [
      "Reconcile four heterogeneous federal data sources with automated QA so every externally reported figure traces to source.",
      "Reproduce all 21 published statistics from the prior national assessment as a validation gate.",
      "Audit published literature equations, identifying algebraic identities masquerading as empirical findings.",
      "Design proportional-parity benchmark algorithms across 210 ecosystem categories nationwide.",
      "Structure two-tier quality evaluation isolating permissive definitions that overstate outcomes (70% headline contribution)."
    ],
    image: "/projects/us-representation-analysis.png",
    workflowImage: null,
    cta: null,
    challenges: "Official headline figures often obscure metric definitions, creating discrepancy risks where 63% of units appear compliant under permissive standards versus only 19% under strict ones.",
    solution: "Designed the proportional-parity benchmark and a rigorous two-tier quality framework backed by automated Python and R validation pipelines.",
    outcome: "Proved systematic overstatement in official metrics, replaced legacy benchmarks across 210 categories, and retracted flawed mathematical inferences from downstream policy debate."
  },
  {
    slug: "distributional-policy-measurement-jurisdiction-attribution",
    title: "Observational Matching & Multi-Jurisdiction Attribution",
    tagline: "Matching design on observational data (174 matched clusters, null models) and multi-jurisdiction burden attribution (HHI, Pielou indices across 13 states / 270 units).",
    category: "Causal Inference & Attribution Modeling",
    year: "2024–2026",
    overview: "Measured policy impact from observational data with a quasi-experimental matching design: 174 matched clusters across two reporting vintages, benchmarked against null-model counterfactuals, with variance decomposition isolating where the national reporting bias originated. Built a multi-jurisdiction burden-attribution model from scenario-based projection across 13 state jurisdictions and 270 tracked units, combining simulation and network analysis with concentration (HHI) and evenness (Pielou) indices to quantify where policy impacts cross regulatory boundaries no single authority spans.",
    meta: [
      { label: "Scope", value: "13 State Jurisdictions, 270 Tracked Units, 174 Matched Clusters" },
      { label: "Methodologies", value: "Matching Estimators, Null-Model Counterfactuals, Variance Decomposition, HHI, Pielou Evenness" },
      { label: "Software / Stack", value: "Python, R (tidyverse, sf, lme4), Dinamica EGO, Circuitscape, GIS" },
      { label: "Key Milestone", value: "Keynote presentation at IALE North America 2026" }
    ],
    role: "Lead Quantitative Modeler. Designed observational matching estimators, null-model counterfactuals, and multi-jurisdiction attribution indices.",
    tools: ["Matching Estimators", "Null-Model Counterfactuals", "Variance Decomposition", "HHI Concentration", "Pielou Evenness", "Python", "R", "Circuitscape"],
    context: "Doctoral research evaluating jurisdictional spillover, policy impact attribution, and trans-boundary governance.",
    process: [
      "Construct matching design across 174 matched observational clusters spanning two reporting vintages.",
      "Execute null-model counterfactual simulations and perform variance decomposition to isolate reporting bias.",
      "Model trans-boundary spatial projections across 13 state jurisdictions and 270 tracked units.",
      "Compute Herfindahl-Hirschman Indices (HHI) and Pielou evenness metrics to quantify governance concentration.",
      "Present findings at IALE North America (Keynote, 2026) and Southeast Climate Adaptation Science Center."
    ],
    image: "/projects/appalachian-modeling.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Policy impacts and environmental assets cross state and administrative boundaries that no single governance authority spans, confounding traditional impact attribution.",
    solution: "Developed multi-jurisdiction burden-attribution models pairing matching estimators with HHI concentration and Pielou evenness indices.",
    outcome: "Isolated national reporting bias mechanisms and provided agency leaders with defensible trans-boundary attribution frameworks."
  },
  {
    slug: "nwf-ecoleader-fellowship",
    title: "NWF EcoLeaders Platform Strategy & Behavioral Analytics",
    tagline: "Reconstructed multi-year cohort panel, ran longitudinal behavioral analysis (+283% engagement increase), recurring dashboards, and enterprise API roadmap.",
    category: "Behavioral Analytics & Enterprise Strategy",
    year: "2025",
    overview: "Selected as the National Wildlife Federation (NWF) EcoLeaders Graduate Research Fellow. Reconstructed several prior years of platform user-analytics records into a consistent cohort panel, then ran longitudinal behavioral analysis to isolate which onboarding and retention actions actually moved engagement, and rebuilt the funnel around them: 283% engagement increase over the prior cycle. Built and maintained recurring dashboards that made engagement, onboarding, and retention legible to staff and external partners, defining the underlying metrics and instrumentation so reported figures stayed consistent across cycles. Specified enterprise API integrations with platform engineers and delivered an executive-adopted 6–12 month roadmap.",
    meta: [
      { label: "Sponsor", value: "National Wildlife Federation (NWF) — America's largest conservation non-profit" },
      { label: "Role", value: "EcoLeaders Graduate Research Fellow & Platform Strategist" },
      { label: "Platform Partner", value: "Personify Enterprise Community Platform" },
      { label: "Quantified Impact", value: "+283% Active Engagement Increase, 6–12 Month Executive Roadmap" },
      { label: "Core Methods", value: "Cohort Panel Reconstruction, Longitudinal Analysis, Recurring Dashboards, Telemetry" }
    ],
    role: "EcoLeaders Graduate Research Fellow & Platform Strategist. Owned cohort panel reconstruction, longitudinal modeling, recurring dashboard instrumentation, and enterprise roadmap specification.",
    tools: ["Longitudinal Behavioral Analysis", "Cohort Panel Analysis", "Recurring Dashboards", "Personify Platform API", "Telemetry", "Roadmap Planning"],
    context: "National fellowship optimizing youth changemaker retention, onboarding velocity, and credential completion.",
    process: [
      "Reconstruct several prior years of fragmented user analytics into a unified, consistent longitudinal cohort panel.",
      "Model user behavioral telemetry to identify critical retention inflection points and onboarding bottlenecks.",
      "Rebuild the engagement funnel with personalized onboarding, gamified ladders, and automated nudge journeys.",
      "Build recurring operational dashboards with standardized metric definitions for staff and leadership.",
      "Collaborate with Personify platform engineers on API specifications and deliver an executive-adopted 6–12 month roadmap."
    ],
    image: "/projects/nwf-analytics.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Legacy multi-year platform records were inconsistent, obscuring true user drop-off drivers across cycles.",
    solution: "Harmonized historical records into a clean cohort panel, instrumented automated dashboard metrics, and redesigned the user funnel based on empirical retention signals.",
    outcome: "Achieved a +283% increase in active platform engagement, established permanent reporting dashboards, and delivered an executive-approved implementation roadmap."
  },
  {
    slug: "environmental-policy-tribal-comanagement-leadership",
    title: "Federal Regulatory Analysis, Compliance & Policy Impact",
    tagline: "Federal regulatory analysis of statutory authority (3rd place national, NWF), contested permitting comment letters, and open-access guides on regulatory comments.",
    category: "Regulatory Analysis & Environmental Policy",
    year: "2023–Present",
    overview: "Authored high-impact federal regulatory and statutory analyses. Won 3rd place nationally for an innovative policy memorandum evaluating statutory authority, compliance standards, and multi-party co-management under the Clean Water Act. Co-authored a regulatory comment letter on a contested federal permitting decision near Okefenokee National Wildlife Refuge, and authored open-access guides on converting analytical results into federal regulatory comment (2024–2026). Applies ISO 14001 audit and U.S. EPA disclosure-reporting standards to analytical documentation, holding externally filed figures to audit-trail consistency.",
    meta: [
      { label: "Affiliations", value: "NWF (3rd Place National), Baker School of Public Policy, Environmental Law Org" },
      { label: "Regulatory Standards", value: "ISO 14001 Lead Auditor, Clean Air Act (CAA), Clean Water Act (CWA), RCRA" },
      { label: "Policy Deliverables", value: "Award-Winning Policy Memo, Regulatory Comment Letters, Open-Access Guides" },
      { label: "Scope", value: "Federal statutory authority, permitting compliance, energy & land-use policy" }
    ],
    role: "Lead Regulatory Analyst & Author. Authored national policy memoranda, co-authored public comment letters, and conducted ISO 14001 compliance reviews.",
    tools: ["Regulatory Landscape Analysis", "Statutory Authority", "Clean Water Act", "Clean Air Act", "RCRA", "ISO 14001 Audit", "Public Comment Drafting"],
    context: "Bridging quantitative analytical results with federal statutory frameworks, administrative rulemaking, and environmental law.",
    process: [
      "Evaluate statutory authority and compliance standards under Clean Water Act, CAA, and RCRA frameworks.",
      "Analyze multi-party co-management models and federal permitting requirements for contested infrastructure decisions.",
      "Draft concise executive policy memoranda detailing structural gaps, statutory feasibility, and regulatory alternatives.",
      "Co-author regulatory public comment letters submitted during active federal rulemaking periods.",
      "Author open-access guides instructing researchers and advocates on converting analytical findings into federal comment."
    ],
    image: "/projects/wetlands-policy.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Technical scientific analyses frequently fail to influence policy decisions because they are not formatted to meet administrative law and statutory comment standards.",
    solution: "Applied formal ISO 14001 audit standards and legal statutory frameworks to translate spatial and quantitative evidence into actionable regulatory filings.",
    outcome: "Won 3rd place nationally in the NWF Policy Memo contest, co-authored active federal comment letters, and published open-access guides for policy translation."
  },
  {
    slug: "applied-ai-systems-machine-learning-adoption",
    title: "Applied AI Systems, Technical Enablement & ML Pipelines",
    tagline: "Autoencoder computer vision pipeline (ORNL publication), Gemini full-stack agent, and AI-literacy curriculum for 500+ researchers at Perplexity AI.",
    category: "Applied AI & Technical Enablement",
    year: "2024–2025",
    overview: "Co-developed machine learning pipelines automating Transmission Electron Microscopy analysis with a four-university team (Penn State, NYU, Purdue, UTK) using autoencoders, published in Machine Learning: Science and Technology (DOI: 10.1088/2632-2153/ae1f5d). Shipped a full-stack Node/Express conversational agent on the Google Gemini API incorporating dynamic elicitation design and intent-conditioned prompting. Built and delivered a technical AI-literacy curriculum to 500+ researchers, faculty, and staff at Perplexity AI, with department-adopted responsible-use guidelines and AI-assisted workflows aggregating verified briefs.",
    meta: [
      { label: "Collaborations", value: "Oak Ridge National Lab (ORNL), Perplexity AI, Google Gemini API Competition" },
      { label: "Key Deliverables", value: "Peer-Reviewed IOP ML Publication, Full-Stack Web Agent, AI Curriculum (500+ Users)" },
      { label: "Stack / Software", value: "Python, PyTorch, Autoencoders, Google Gemini API, Node.js, Express, JavaScript" },
      { label: "Publication DOI", value: "10.1088/2632-2153/ae1f5d (ML: Science & Tech)" }
    ],
    role: "Machine Learning Engineer & Campus Strategist. Developed computer vision autoencoders, built full-stack conversational web apps, and delivered enterprise AI curricula.",
    tools: ["Python & PyTorch", "Autoencoders", "Computer Vision", "Google Gemini API", "Node.js & Express", "Responsible AI Governance", "AI Literacy Curriculum"],
    context: "Demonstrating end-to-end technical capabilities across deep learning pipelines, full-stack API integration, and enterprise technical adoption.",
    process: [
      "Co-develop convolutional autoencoders and data augmentation pipelines at ORNL to automate nanoparticle TEM image analysis.",
      "Evaluate geometry correlations and co-author peer-reviewed publication in Machine Learning: Science and Technology.",
      "Engineer a conversational agent on Google Gemini API that conditions prompts on clarified user intent.",
      "Deploy full-stack Node.js/Express web app with session state and responsive browser UI.",
      "Build and deliver AI-literacy workshops for 500+ researchers, postdocs, and faculty, drafting department responsible-use standards."
    ],
    image: "/projects/gemini-ai-systems.png",
    workflowImage: null,
    cta: null,
    challenges: "Creating ML models and AI workflows that combine rigorous computational performance with transparent, accessible adoption for researchers.",
    solution: "Built modular Python/PyTorch computer vision architectures and structured hands-on educational curricula for structured prompting and source verification.",
    outcome: "Published peer-reviewed ML paper with ORNL collaborators, deployed a full-stack Gemini agent, and trained 500+ campus researchers."
  }
];
