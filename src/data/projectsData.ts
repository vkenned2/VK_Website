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
  interactiveEmbed?: string | null;
  cta: ProjectCTA | null;
  challenges?: string;
  solution?: string;
  outcome?: string;
  galleryImages?: string[];
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    slug: "us-nationwide-representation-analysis-quality-framework",
    title: "National Ecosystem Representation & 30x30 Benchmark (GBF Target 3)",
    tagline: "Evaluated 210 USNVC ecosystem groups across PAD-US to benchmark GBF Target 3; revealed severe geographic bias (Western 4.1x, Eastern 3.3x vs Great Plains) and metric sensitivity.",
    category: "Conservation Indicators & Spatial Policy",
    year: "2022–Present",
    overview: "Compared 210 natural USNVC ecosystem Groups with PAD-US, verifying results across six hierarchical classification levels. Discovered that larger ecosystems receive proportionally less strict protection: a 10-fold larger ecosystem holds ~7.3 times strictly protected area (log-log slope 0.86, 95% CI 0.79 to 0.93), a finding that held across all classification checks. Demonstrated that ecosystem geography drives protection far more than endangerment: at identical size and rank, Western ecosystems hold 4.1x and Eastern 3.3x the strict protection of Great Plains ecosystems (Great Plains types cover 21.7% of the landscape but only 5.0% of the strict estate; conservation rank explains only 0.1% of variation). Revealed that protection definitions drastically alter compliance: 63% of ecosystem types reach 30% if multiple-use land counts, but only 19% under strict protection. Applying the species target rule to ecosystems would mandate protecting 58% of the U.S. landscape because 113 of 210 types are under 10,000 km², underscoring why ecosystems need targets of their own.",
    meta: [
      { label: "Partners", value: "NatureServe, U.S. Geological Survey (USGS), Forest Stewardship Council (FSC), NSF" },
      { label: "Datasets", value: "PAD-US v4.1, USNVC (6 levels), EPA Ecoregions, NatureServe G-ranks" },
      { label: "Policy Impact", value: "FSC annual meeting figures; longleaf pine analysis with Gwen Iacona (ASU); invited talk at George Wright Society 2027; presented to U.S. Biosphere Network; Target 3 indicator development" },
      { label: "Software / Stack", value: "R (tidyverse, sf, terra, lme4), Python, Automated QA/QC Pipelines" }
    ],
    role: "Doctoral Researcher & Lead Quantitative Analyst. Conceived the research design, built automated data pipelines reconciling heterogeneous federal and NGO spatial layers, audited legacy literature equations, and briefed conservation leaders.",
    tools: ["R (sf, tidyverse)", "Python", "PAD-US v4.1", "USNVC (6 Levels)", "NatureServe G-Ranks", "Global Biodiversity Framework", "Target 3 Indicators", "Log-Log Regression", "Automated QA"],
    context: "Ph.D. dissertation Chapter 2 developed with NatureServe and the U.S. Geological Survey, funded by the National Science Foundation to evaluate national policy target integrity under the Global Biodiversity Framework.",
    process: [
      "Reconcile 210 natural USNVC ecosystem Groups with PAD-US v4.1 spatial layers and NatureServe conservation status.",
      "Verify empirical scaling patterns across six hierarchical levels of the USNVC classification system.",
      "Model strict protection scaling against total ecosystem extent, estimating strict protection elasticities (slope 0.86, 95% CI 0.79 to 0.93).",
      "Decompose geographic and endangerment effects across Western, Eastern, and Great Plains ecoregions (revealing rank explains only 0.1% of variation).",
      "Assess definition sensitivity: contrast strict GAP 1–2 protection (19% compliance) against multiple-use GAP 1–3 lands (63% compliance).",
      "Simulate the species target rule on ecosystems (showing a 58% national land requirement due to 113 small-range types under 10,000 km²).",
      "Translate findings for the Forest Stewardship Council (FSC) annual meeting to support adding ecosystem status to forest certification standards."
    ],
    image: "/projects/us-representation-analysis.png",
    workflowImage: null,
    cta: null,
    challenges: "Target 3 of the Global Biodiversity Framework asks for representative protection, but current indicators (like the Species Protection Index) measure it only for species. Concurrently, official domestic figures often mask protection definitions, creating discrepancy risks where 63% of ecosystems appear protected under permissive definitions versus only 19% under strict protection.",
    solution: "Designed a comprehensive 6-level assessment framework integrating USNVC with PAD-US, audited legacy literature equations to retract flawed inferences, established empirical scaling baselines, and modeled species-versus-ecosystem target dynamics.",
    outcome: "Delivered the first national-scale evaluation of U.S. ecosystem representation for GBF Target 3; provided figures directly to the Forest Stewardship Council for forest certification standards; gave invited presentations at George Wright Society and the U.S. Biosphere Network; and advanced longleaf pine modeling with ASU collaborators."
  },
  {
    slug: "distributional-policy-measurement-jurisdiction-attribution",
    title: "Appalachian Climate Range Shifts & Multi-State Conservation Governance",
    tagline: "Modeled shifting conservation responsibility across 13 Appalachian states for 270 vertebrates under 13 climate models and 4 SSP scenarios through 2050.",
    category: "Spatial Modeling & Multi-Jurisdiction Policy",
    year: "2024–2026",
    overview: "Evaluated how conservation responsibility is shared among 13 Appalachian states as species move under climate change. Modeled niche projections from Barve et al. for 270 vertebrates under 13 climate models and four Shared Socioeconomic Pathways (SSPs) through 2050. Employed a quasi-experimental matching design (174 matched clusters across reporting vintages) benchmarked against null models, with variance decomposition isolating where reporting biases originate. Formulated a multi-jurisdiction burden-attribution model combining Circuitscape connectivity and spatial network simulation with Herfindahl-Hirschman (HHI) concentration and Pielou evenness indices to quantify trans-boundary governance spillover across regulatory boundaries no single authority spans.",
    meta: [
      { label: "Scope", value: "13 Appalachian States, 270 Vertebrate Species, 13 Climate Models, 4 SSP Scenarios" },
      { label: "Methodologies", value: "Ecological Niche Modeling, Matching Estimators (174 clusters), Null Models, Circuitscape, HHI & Pielou Indices" },
      { label: "Software / Stack", value: "R (tidyverse, sf, terra, lme4), Python, Circuitscape, GIS" },
      { label: "Key Milestones", value: "Keynote presentation at IALE-North America 2026; Southeast Climate Adaptation Science Center briefing" }
    ],
    role: "Lead Quantitative Modeler. Designed observational matching estimators, trans-boundary connectivity simulations, null-model counterfactuals, and multi-jurisdiction attribution indices.",
    tools: ["Circuitscape", "R (sf, terra)", "Python", "Niche Modeling (Barve et al.)", "13 Climate Models", "4 SSP Scenarios", "HHI Concentration", "Pielou Evenness", "Matching Estimators"],
    context: "Ph.D. dissertation Chapter 3 evaluating trans-boundary climate migration, jurisdictional spillover, and multi-state conservation burden attribution.",
    process: [
      "Construct matching design across 174 matched observational clusters spanning historical and contemporary reporting vintages.",
      "Execute null-model counterfactual simulations and perform variance decomposition to isolate reporting bias.",
      "Model trans-boundary spatial range shift projections across 13 Appalachian states for 270 vertebrate taxa through 2050.",
      "Evaluate connectivity and corridor pinch points across changing landscapes using Circuitscape.",
      "Compute Herfindahl-Hirschman Indices (HHI) and Pielou evenness metrics to quantify governance concentration across jurisdictions.",
      "Deliver keynote address at IALE-North America 2026 and present findings to the Southeast Climate Adaptation Science Center."
    ],
    image: "/projects/appalachian-modeling.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Species ranges shift in response to climate change without regard to state or administrative boundaries. Because no single state agency governs regional movement corridors, traditional impact attribution breaks down, causing underinvestment in critical multi-jurisdiction corridors.",
    solution: "Developed multi-jurisdiction burden-attribution models pairing matching estimators with HHI concentration and Pielou evenness indices across 13 states and 270 vertebrate taxa.",
    outcome: "Provided state and federal conservation planners with defensible trans-boundary attribution frameworks and delivered the student keynote at IALE-North America 2026."
  },
  {
    slug: "environmental-policy-tribal-comanagement-leadership",
    title: "Federal Environmental Policy, Permitting Compliance & Statutory Analysis",
    tagline: "3rd place nationally for NWF policy memo on Mississippi River Basin flood resilience; co-authored USFWS comment letter on Okefenokee National Wildlife Refuge.",
    category: "Environmental Law & Regulatory Comment",
    year: "2023–Present",
    overview: "Bridged quantitative ecological modeling with federal administrative rulemaking and statutory environmental law. Won 3rd place nationally in the National Wildlife Federation (NWF) Innovative Policy Memo Contest for an analysis evaluating statutory authority, compliance standards, and multi-party tribal and municipal co-management under the Clean Water Act for Mississippi River Basin flood resilience. Contributed to a formal regulatory public comment letter submitted to the U.S. Fish and Wildlife Service (USFWS) regarding a contested titanium mining permitting decision threatening the Okefenokee National Wildlife Refuge. Authored open-access reference guides for converting ecological datasets and spatial GIS findings into federal public comments, and applied ISO 14001 lead auditor standards and EPA disclosure protocols to environmental policy filings.",
    meta: [
      { label: "Affiliations", value: "National Wildlife Federation (3rd Place National), Baker School of Public Policy, USFWS Docket" },
      { label: "Regulatory Frameworks", value: "Clean Water Act (CWA), NEPA, Endangered Species Act, ISO 14001 Audit Standards" },
      { label: "Key Deliverables", value: "Award-Winning Flood Resilience Memo, USFWS Okefenokee Comment Letter, Regulatory Guides" },
      { label: "Honors", value: "Tom Gilbert Award (Baker School 2026), NWF 3rd Place National Award" }
    ],
    role: "Lead Regulatory Analyst & Author. Authored national policy memoranda, co-authored public comment letters, and conducted ISO 14001 compliance reviews.",
    tools: ["Regulatory Landscape Analysis", "Clean Water Act", "NEPA", "Endangered Species Act", "ISO 14001 Audit", "USFWS Public Comment", "Policy Memo Drafting"],
    context: "Bridging spatial ecological research with administrative law, federal rulemaking, and statutory environmental protections at UTK's Baker School of Public Policy.",
    process: [
      "Evaluate statutory authority and compliance standards under Clean Water Act, NEPA, and Endangered Species Act frameworks.",
      "Analyze multi-party tribal co-management models and nature-based solutions for Mississippi River Basin flood resilience.",
      "Draft concise executive policy memoranda detailing structural gaps, statutory feasibility, and regulatory alternatives (earning 3rd place nationally).",
      "Co-author regulatory public comment letters submitted during active federal rulemaking periods for the Okefenokee National Wildlife Refuge.",
      "Author open-access guides instructing researchers and advocates on converting analytical findings into federal comment."
    ],
    image: "/projects/wetlands-policy.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Technical scientific analyses frequently fail to influence policy decisions because they are not formatted to meet administrative law and statutory public comment standards.",
    solution: "Applied formal ISO 14001 audit standards and legal statutory frameworks to translate spatial and quantitative evidence into actionable regulatory filings.",
    outcome: "Won 3rd place nationally in the NWF Policy Memo contest, co-authored active federal comment letters, received the Tom Gilbert Award, and published open-access guides for policy translation."
  },
  {
    slug: "nwf-ecoleader-fellowship",
    title: "NWF EcoLeaders Platform Strategy & Conservation Analytics",
    tagline: "Longitudinal behavioral analysis of national youth conservation changemakers (+283% engagement), recurring dashboards, and enterprise roadmap.",
    category: "Behavioral Analytics & Conservation Leadership",
    year: "2025",
    overview: "Selected as the National Wildlife Federation (NWF) EcoLeaders Graduate Research Fellow, leading platform analytics and digital strategy for America's largest conservation non-profit. Reconstructed several years of fragmented analytics records into a unified cohort panel, executing longitudinal behavioral modeling that identified critical onboarding bottlenecks and increased active user engagement by +283%. Designed and maintained recurring operational dashboards for executive leadership, specified enterprise API integrations with Personify platform engineers, and delivered a 6–12 month strategic roadmap. Featured by National Wildlife magazine in an editorial profile: 'Vishal Kennedy Is Mapping the Future'.",
    meta: [
      { label: "Sponsor", value: "National Wildlife Federation (NWF) — America's largest conservation non-profit" },
      { label: "Press Feature", value: "National Wildlife Magazine: 'Vishal Kennedy Is Mapping the Future' (Summer 2026)" },
      { label: "Quantified Impact", value: "+283% Active Engagement Increase, 6–12 Month Executive Roadmap" },
      { label: "Core Methods", value: "Cohort Panel Reconstruction, Longitudinal Analysis, Recurring Dashboards, Telemetry" }
    ],
    role: "EcoLeaders Graduate Research Fellow & Platform Strategist. Owned cohort panel reconstruction, longitudinal modeling, recurring dashboard instrumentation, and enterprise roadmap specification.",
    tools: ["Longitudinal Behavioral Analysis", "Cohort Panel Analysis", "Recurring Dashboards", "Personify Platform API", "Telemetry", "Roadmap Planning"],
    context: "National fellowship optimizing youth changemaker retention, onboarding velocity, and conservation leadership credential completion.",
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
    slug: "ai-adoption-parity-index",
    title: "AI Adoption Parity Index & Exposure-Adjusted Distributional Analysis",
    tagline: "Open analysis measuring state-level AI adoption against AI-exposed employment rather than population using the Anthropic Economic Index, BLS OES, and O*NET.",
    category: "Open Analysis & Causal Metrics",
    year: "2026",
    overview: "Conceived and engineered an open-source analysis measuring state-level AI adoption against AI-exposed employment rather than raw population. Utilizes the Anthropic Economic Index, BLS Occupational Employment and Wage Statistics (OES), and O*NET occupational exposure models, evaluating geographic concentration through Lorenz curves and Gini coefficients on both raw and exposure-adjusted distributions.",
    meta: [
      { label: "Data Sources", value: "Anthropic Economic Index, BLS OES, O*NET Occupational Data" },
      { label: "Methodologies", value: "Lorenz Curves, Gini Coefficients, Exposure-Adjusted Distributions, Theil Index" },
      { label: "Repository", value: "github.com/vkenned2/aei-index-audit" },
      { label: "Software / Stack", value: "Python (pandas, NumPy, statsmodels), Plotly, R, Git & GitHub" }
    ],
    role: "Lead Quantitative Analyst. Conceived the research question, engineered the exposure weighting model, calculated concentration metrics, built the interactive audit visualization, and open-sourced the analysis.",
    tools: ["Python", "R", "Anthropic Economic Index", "BLS OES", "O*NET", "Plotly.js", "Gini Coefficients", "Theil Index", "Lorenz Curves", "Git & GitHub"],
    context: "Investigating how much of the measured geographic AI divide is an artifact of regional aggregation (the Modifiable Areal Unit Problem) vs true underlying knowledge-work exposure across U.S. states.",
    process: [
      "Ingest state-level AI activity telemetry from the Anthropic Economic Index (releases 2025-09 through 2026-06).",
      "Extract and harmonize employment distributions across detailed occupational categories from BLS OES.",
      "Map O*NET occupational exposure scores to estimate state-level AI-exposed labor forces on fixed working-age population denominators.",
      "Construct Lorenz curves and compute Gini inequality and Theil indices across 6 official US government geographical groupings.",
      "Build live interactive Plotly audit interface allowing researchers to inspect geographic aggregation sensitivity and counterfactual shifts.",
      "Publish open-access Jupyter notebooks, interactive tools, and documentation enabling reproducible public replication."
    ],
    image: "/projects/anthropic-ai-adoption-parity.png",
    workflowImage: null,
    interactiveEmbed: "/interactive/aei-audit.html",
    cta: {
      text: "View GitHub Repository",
      link: "https://github.com/vkenned2/aei-index-audit"
    },
    challenges: "Anthropic's AI Usage Index reports state Claude usage relative to population. However, raw population normalization and geographic aggregation boundaries create significant distortion: changing the geography (e.g. from states to BEA or Census regions) causes measured inequality (Theil/Gini) to fall dramatically, concealing substantial regional variation.",
    solution: "Built an interactive audit and exposure-weighted benchmark integrating the Anthropic Economic Index with BLS OEWS and O*NET occupational exposure models. Rendered dynamic Lorenz curves, Gini metrics, and Theil decompositions across multiple geographic tiers.",
    outcome: "Delivered a public open-source analysis proving that geographic aggregation hides up to 60%+ of measured variation, providing external researchers and policymakers with an interactive tool and exposure-adjusted benchmark for understanding true regional AI workforce dynamics."
  },
  {
    slug: "applied-ai-systems-machine-learning-adoption",
    title: "Applied AI Systems, Scientific ML Pipelines & Technical Enablement",
    tagline: "Autoencoder computer vision pipeline (ORNL publication in IOP), Gemini full-stack agent, and AI-literacy curriculum for 500+ researchers at Perplexity AI.",
    category: "Applied AI & Scientific Computing",
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
