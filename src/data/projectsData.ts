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
    slug: "us-nationwide-representation-analysis-quality-framework",
    title: "US Nationwide Representation Analysis & Two-Tier Quality Framework",
    tagline: "National ecosystem representation modeling, log-log benchmark models, and co-responsibility matrices across 210 ecosystem types (4.3M km²).",
    category: "Conservation Science & Spatial Modeling",
    year: "2024–2026",
    overview: "Designed and led a US nationwide conservation assessment evaluating ecological representation and protected area coverage across 210 ecosystem types (4.3 million km²). Established a two-tier quality assessment framework separating high-integrity protection outcomes from nominal ones, created baseline-setting methodologies with log-log benchmark models explaining up to 82% of representation variance, and constructed co-responsibility matrices for jurisdictional attribution where biodiversity and conservation assets cross federal, state, and private management boundaries.",
    meta: [
      { label: "Partners", value: "NatureServe, U.S. Geological Survey (USGS), NSF" },
      { label: "Software / Stack", value: "R, Python, STATA, GIS, Automated QA/QC Pipelines" },
      { label: "Type", value: "Nationwide Spatial Analysis & Quality Assessment" },
      { label: "Goal", value: "Build defensible, scalable quality frameworks and attribution models for national conservation targets." }
    ],
    role: "Lead Quantitative Researcher & Technical Lead. Owned research design, baseline-setting algorithms, benchmark statistical modeling, automated QA validation, and cross-functional partner documentation.",
    tools: ["Python", "R", "Log-Log Regression", "Baseline-Setting", "Two-Tier Quality Framework", "Co-Responsibility Matrices", "Automated QA/QC", "PAD-US", "NatureServe"],
    context: "Ph.D. dissertation developed with NatureServe and USGS, funded by NSF to evaluate nationwide ecological representation integrity at scale.",
    process: [
      "Reconcile four heterogeneous federal datasets (PAD-US v4.1, USNVC, EPA ecoregions, NatureServe G-ranks) into one unified analytical layer.",
      "Build a baseline-setting method defining each ecosystem type's expected representation under counterfactual assumptions.",
      "Develop linear and log-log benchmark models making results comparable across units differing by orders of magnitude (explaining up to 82% of variance).",
      "Construct co-responsibility matrices using concentration and evenness indices to allocate shared accountability across jurisdictions.",
      "Write automated QA validation checks into version-controlled Python and R pipelines, ensuring every figure traces to source data."
    ],
    image: "/projects/us-representation-analysis.png",
    workflowImage: null,
    cta: null,
    challenges: "Reconciling noisy, heterogeneous multi-agency datasets while avoiding permissive accounting definitions that overstate conservation protection success by up to 70%.",
    solution: "Structured a strict two-tier quality evaluation framework paired with log-log benchmark models and reproducible, version-controlled audit-trail pipelines.",
    outcome: "Delivered a scalable measurement framework adopted by NatureServe and USGS to distinguish high-integrity conservation outcomes from nominal claims."
  },
  {
    slug: "iso-14001-ems-compliance-auditing",
    title: "ISO 14001 EMS Audit & Environmental Compliance System",
    tagline: "Environmental management system audit methodology, EPA regulatory compliance (CAA, CWA, RCRA, SC DES), and digital dashboard metrics.",
    category: "Environmental Management Systems (EMS)",
    year: "2025–2026",
    overview: "Applied ISO 14001:2026 Environmental Management System (EMS) frameworks and Exemplar Global Lead Auditor audit methodologies to environmental compliance reporting, audit management, nonconformity tracking, and Plan-Do-Check-Act continual improvement. Covers U.S. EPA regulations (Clean Air Act, Clean Water Act, RCRA) and South Carolina DES permitting requirements, paired with digital metric dashboards.",
    meta: [
      { label: "Certification / Framework", value: "ISO 14001:2026 Lead Auditor (Audit Workshop, Exemplar Global)" },
      { label: "Regulatory Scope", value: "Clean Air Act (CAA), Clean Water Act (CWA), RCRA, SC DES" },
      { label: "Software / Stack", value: "Advanced Excel (VLOOKUP, Pivots, Macros), Power BI, Tableau, Python, Intranet" },
      { label: "Goal", value: "Maintain auditable compliance documentation, EMS audit trails, and executive metric reporting." }
    ],
    role: "EMS & Compliance Researcher. Responsible for environmental aspect/impact evaluations, audit planning/execution, compliance calculations, and dashboard maintenance.",
    tools: ["ISO 14001 EMS", "Lead Auditor Methodology", "Clean Air Act", "RCRA", "Clean Water Act", "SC DES Permitting", "Advanced Excel", "Power BI", "Tableau"],
    context: "Professional training and applied project work at UT's Baker School of Public Policy for corporate environmental management and compliance.",
    process: [
      "Evaluate environmental aspects and impacts across facility operations using Plan-Do-Check-Act (PDCA) continual improvement cycles.",
      "Design environmental audit checklists and nonconformity/corrective action tracking systems.",
      "Execute multi-source data calculations and automated QA checks in Excel and Python for recurring compliance reports.",
      "Build digital dashboards in Tableau and Power BI tracking key performance indicators for air, water, and waste metrics.",
      "Maintain SharePoint-style intranet documentation and develop environmental training materials for non-technical teams."
    ],
    image: "/projects/appalachian-modeling.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Ensuring complex regulatory reporting figures remain fully auditable and compliant across evolving EPA and state DES standards.",
    solution: "Implemented documented, version-controlled calculation workflows and automated QA validation sheets in Excel and Python.",
    outcome: "Built an auditable compliance and EMS reporting architecture capable of meeting ISO 14001 lead audit standards and state/federal regulatory deadlines."
  },
  {
    slug: "appalachian-climate-scenario-planning-connectivity",
    title: "Appalachian Climate Change, Scenario Planning & Corridor Connectivity",
    tagline: "Spatial land-use simulation (Dinamica EGO) and circuit theory connectivity (Circuitscape) predicting development footprints and climate-resilient corridors across Appalachia.",
    category: "Climate Projections & Scenario Planning",
    year: "2024–2025",
    overview: "Designed and built spatial land-use and climate projection models for the Appalachian mountain region to forecast development expansion, thermal shift patterns, and habitat fragmentation. Utilizing Dinamica EGO for future land-use simulations and Circuitscape for circuit-theory wildlife corridor connectivity, this project identifies critical unprotected migration bottlenecks vital for regional biodiversity under warming climate scenarios.",
    meta: [
      { label: "Institution", value: "Armsworth Lab, University of Tennessee, Knoxville" },
      { label: "Software / Stack", value: "Python, R, Dinamica EGO, Circuitscape, ArcGIS Pro, Google Earth Engine" },
      { label: "Type", value: "Climate Projections & Scenario Planning" },
      { label: "Goal", value: "Predict wildlife corridor fragmentation under future land development and warming scenarios." }
    ],
    role: "Lead Spatial Researcher. Responsible for future land-use simulation, environmental time-series preprocessing, resistance surface parameterization, and corridor connectivity assessments.",
    tools: ["Python", "R", "Dinamica EGO", "Circuitscape", "Google Earth Engine", "ArcGIS Pro", "Scenario Planning", "Connectivity Analysis"],
    context: "Ph.D. research funded to evaluate future climate-resilient migration corridors and land-use change impacts across the Southern and Central Appalachian mountains.",
    process: [
      "Retrieve historical multi-decadal land cover datasets and identify socioeconomic drivers of urban and suburban expansion.",
      "Parameterize spatial Markov chain and cellular automata models in Dinamica EGO to simulate future development footprints under alternate scenarios.",
      "Integrate downscaled CMIP6 climate warming projections to model species climate envelope shifts.",
      "Compute ecological resistance surfaces and run circuit theory algorithms in Circuitscape to trace omnidirectional wildlife migration pathways.",
      "Overlay projected connectivity corridors with the Protected Areas Database (PAD-US) to identify conservation representation gaps and critical acquisition priorities."
    ],
    image: "/projects/appalachian-modeling.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Harmonizing disparate multi-scale spatial rasters across different coordinate projections and resolving computational bottlenecks in high-resolution regional circuit theory simulations.",
    solution: "Built custom Python and R multiprocessing pipelines to downscale, harmonize, and tile raster inputs, enabling efficient parallelized Circuitscape runs across the Appalachian corridor.",
    outcome: "Identified critical unprotected movement corridors in the Southern Appalachians vulnerable to rapid development, providing regional land trusts and state agencies with spatial priorities for climate-resilient land acquisition."
  },
  {
    slug: "nwf-ecoleader-fellowship",
    title: "NWF EcoLeaders Platform Strategy & Behavioral Analytics",
    tagline: "National sustainability platform transformation combining longitudinal behavioral analytics, enterprise Personify architecture, gamification engines, and UX strategy (+283% engagement).",
    category: "Sustainability Platform & Behavioral Analytics",
    year: "2025",
    overview: "Selected as the National Wildlife Federation (NWF) EcoLeaders Graduate Research Fellow to spearhead the digital revitalization of America's premier youth sustainability and conservation leadership platform. Executed a multi-phase digital transformation bridging longitudinal statistical analytics, human-centered UX research with the National Youth Advisory Council (YAC), enterprise platform provider integration (Personify), and automated behavioral email journeys—delivering a scalable 4-pillar engagement framework that increased active participation by +283% over the historical baseline.",
    meta: [
      { label: "Sponsor", value: "National Wildlife Federation (NWF) — America's largest conservation non-profit" },
      { label: "Role", value: "NWF Graduate Research Fellow & Platform Strategist" },
      { label: "Platform Partner", value: "Personify Enterprise Community Platform" },
      { label: "Quantified Impact", value: "+283% Active Engagement, 4-Pillar Strategic Transformation, 6-12 Mo Roadmap" },
      { label: "Core Methodologies", value: "Longitudinal Analytics, Gamification Architecture, UX Journey Mapping, Multimedia Production" }
    ],
    role: "Lead Platform Strategist & Research Fellow. Led longitudinal statistical analysis, stakeholder co-design with the Youth Advisory Council, technical systems specification with Personify engineers, multimedia video tour production, and execution roadmap authoring.",
    tools: ["Behavioral Analytics", "Personify Platform API", "Gamification Engines", "Statistical Modeling (r = +0.84)", "UX Journey Mapping", "DaVinci Resolve / CapCut", "Automated Nudge Systems"],
    context: "Revitalizing the nation's largest collegiate and early-career sustainability changemaker platform to accelerate climate action, environmental justice certifications, and green workforce transitions.",
    process: [
      "Phase 1 — Longitudinal Analytics & Metric Diagnostics: Analyzed multi-year community datasets (2022 vs 2024 surveys, clickstream telemetry, weekly active users) and modeled correlation dynamics (r = +0.84 active users to actions; r = -0.06 active users to actions/user), diagnosing user onboarding friction and platform stickiness as primary drop-off levers.",
      "Phase 2 — Stakeholder Co-Design & YAC Governance: Convened and facilitated structured feedback sessions and custom usability surveys with NWF's Youth Advisory Council (YAC), synthesizing qualitative insights into a living user-journey blueprint.",
      "Phase 3 — 4-Pillar Strategic Engagement Transformation: Architected a comprehensive digital strategy covering: (1) Spotify-style interest-based onboarding quiz & interactive site tours; (2) Multi-tiered gamification progression (Bronze/Silver/Gold ladders, milestone badges, seasonal challenges); (3) Triggered behavioral email journeys & automated nudges; and (4) Structured peer mentorship matching & community circles.",
      "Phase 4 — Enterprise Platform Architecture (Personify): Partnered with Personify tech support and platform engineers to define API trigger events, automated credit rules, badge logic, and dynamic recommendation widgets ('Recommended for You', 'People You May Like to Connect With').",
      "Phase 5 — Multimedia Production & Certification UX: Scripted, voiced, animated, and edited full multimedia guided video tours across Canva, DaVinci Resolve, and CapCut; restructured the EcoLeader Certification application to streamline the Plan-Act-Communicate-Energize-Reflect workflow.",
      "Phase 6 — Phased Implementation Roadmap & Governance: Authored a multi-phase 6-12 month rollout timeline with KPI telemetry benchmarks (login velocity, forum interaction, project completion rate) for permanent staff handoff."
    ],
    image: "/projects/nwf-analytics.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Overcoming stagnant forum engagement, navigating enterprise CMS/platform constraints (Personify), and converting passive site visitors into certified, active sustainability project leaders.",
    solution: "Combined quantitative behavioral correlation modeling with consultative youth co-design to replace static directory pages with personalized onboarding, gamified milestone incentives, automated email nudges, and video tours.",
    outcome: "Delivered an executive-approved multi-phase improvement plan to NWF leadership, catalyzed a +283% lift in active platform engagement against the 3-year baseline, established permanent retention frameworks, and earned the NWF EcoLeaders Environmental Justice Campaign Badge."
  },
  {
    slug: "ecological-field-studies-grants-publishing",
    title: "Ecological Field Studies: Grants, Permitting & Publishing",
    tagline: "End-to-end environmental and botanical research lifecycle: field data collection, competitive grant acquisition, research permits, specimen analysis, and peer-reviewed publishing.",
    category: "Field Ecology & Research Lifecycle",
    year: "2024–2026",
    overview: "Led the complete empirical research lifecycle for doctoral botanical and ecological investigations, spanning regional field sampling and specimen collections, securing competitive botanical grants (Breedlove-Dennis & Hesler Awards), obtaining state and federal collection permits, performing anatomical profiling, and authoring peer-reviewed scientific manuscripts.",
    meta: [
      { label: "Institution", value: "Budke Laboratory, University of Tennessee, Knoxville" },
      { label: "Focus", value: "Ecological Field Science & Botanical Systems" },
      { label: "Funding / Awards", value: "Breedlove-Dennis Award, Hesler Award, A.J. & Evelyn Sharp Award" },
      { label: "Key Deliverables", value: "Field Data Collection, Permit Acquisition, Grant Management, Peer-Reviewed Manuscripts" }
    ],
    role: "Lead Doctoral Researcher. Responsible for multi-site field data collection, permit applications, securing research funding, laboratory specimen analysis, and writing/publishing scientific manuscripts.",
    tools: ["Field Data Collection", "Grant Writing", "Research Permits", "Imaging & Specimen Profiling", "Scientific Publishing", "Specimen Preservation"],
    context: "Doctoral dissertation research investigating micro-morphological adaptations, structural development, and ecological evolution in botanical systems.",
    process: [
      "Apply for and secure research collection permits and competitive research grants (Breedlove-Dennis & Hesler Awards).",
      "Execute rigorous field sampling and GPS data collection protocols across diverse regional habitats to gather botanical specimens.",
      "Perform microtome sectioning and anatomical profiling in laboratory environments.",
      "Synthesize statistical and anatomical data into peer-reviewed journal manuscripts.",
      "Navigate peer-review publication cycles and present findings at regional and national conferences."
    ],
    image: "/projects/botanical-field-research.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Securing competitive research funding and navigating multi-jurisdiction collection permits while collecting delicate botanical specimens across remote field locations.",
    solution: "Authored targeted grant proposals and structured standardized field sampling, GPS logging, and chain-of-custody documentation protocols.",
    outcome: "Successfully secured multiple grant awards, obtained all required research permits, and authored publication-ready scientific manuscripts in botanical and ecological systems."
  },
  {
    slug: "environmental-policy-tribal-comanagement-leadership",
    title: "Environmental Policy & Sustainability Leadership",
    tagline: "Award-winning federal policy memo on Clean Water Act wetland protection (3rd place national, NWF), Okefenokee mining comment letters, campus EV initiative (2026 Sustainability Award nominee), and mentoring.",
    category: "Environmental Policy & Community Leadership",
    year: "2022–Present",
    overview: "Combines high-impact federal environmental policy analysis with grassroots sustainability advocacy. Includes authoring an award-winning federal policy memorandum proposing modernized wetland protection frameworks under the Clean Water Act (3rd place nationally in the NWF contest), co-authoring public comment letters opposing strip mining near Okefenokee National Wildlife Refuge, founding a campus Electric Vehicle (EV) sustainability program nominated for the 2026 Campus Sustainability Award, and mentoring incoming graduate researchers through IP-PIPES.",
    meta: [
      { label: "Institution & Sponsors", value: "NWF (3rd Place National), Baker School of Public Policy, UTK" },
      { label: "Recognition", value: "2026 Campus Sustainability Award Nominee; 3rd Place National Policy Memo (NWF)" },
      { label: "Key Programs", value: "Clean Water Act Policy, EV Initiative, Okefenokee Advocacy, IP-PIPES Mentoring" },
      { label: "Scope", value: "Federal regulatory policy analysis, watershed protection & campus-wide sustainability" }
    ],
    role: "Lead Author & Founder. Drafted national policy memoranda, launched campus EV infrastructure initiatives, mentored graduate scholars, and coordinated public environmental education.",
    tools: ["Clean Water Act", "Policy Analysis", "EV Infrastructure", "Environmental Law", "Citizen Science", "Public Outreach", "Watershed Protection"],
    context: "Bridging federal environmental policy analysis at the Baker School with applied community leadership, watershed protection frameworks, and campus-wide decarbonization.",
    process: [
      "Review federal Clean Water Act implementation guidelines and identify legal protection gaps post-Sackett v. EPA.",
      "Analyze case studies of successful collaborative agreements and federal wetland permitting to formulate actionable policy alternatives.",
      "Draft concise executive policy memoranda detailing structural gaps, actionable recommendations, and statutory feasibility.",
      "Found and lead a campus Electric Vehicle (EV) sustainability initiative, expanding charging infrastructure awareness across the university community.",
      "Mentor incoming EEB graduate students through the IP-PIPES program, providing research guidance and fostering an inclusive academic environment.",
      "Co-author a public comment letter through the Environmental Law Organization opposing strip mining near Okefenokee National Wildlife Refuge.",
      "Volunteer at McClung Museum of Natural History & Culture, contributing to citizen science programs, Darwin Day public outreach events, and biodiversity education (2022–2025)."
    ],
    image: "/projects/wetlands-policy.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Translating complex hydrological, legal, and ecological dynamics into actionable policy proposals while simultaneously mobilizing diverse student and community groups around practical sustainability initiatives.",
    solution: "Combined rigorous statutory analysis with coalition-building across campus organizations (Environmental Law Org, Naturalists Club, SPES, ELG) to drive tangible policy and on-the-ground outcomes.",
    outcome: "Won 3rd place nationally in the NWF Innovative Student Policy Memo Contest, nominated for the 2026 Campus Sustainability Award, and established enduring mentorship and advocacy programs at the university."
  },
  {
    slug: "applied-ai-systems-machine-learning-adoption",
    title: "Applied AI Systems: Computer Vision, Gemini Apps & Technical Enablement",
    tagline: "Bridging machine learning engineering and user adoption: autoencoder computer vision (ORNL publication), Gemini conversational app, and campus AI training for 500+ researchers.",
    category: "Applied AI & Technical Enablement",
    year: "2024–2025",
    overview: "An integrated portfolio of applied AI engineering, computational vision modeling, and enterprise technical adoption. Highlights include co-developing autoencoder machine learning pipelines for automated transmission electron microscopy (published in Machine Learning: Science and Technology), architecting an intent-conditioned conversational web application for the global Google Gemini API Developer Competition, and designing/delivering enterprise technical AI adoption curricula and responsible-use governance for 500+ researchers and staff across university departments.",
    meta: [
      { label: "Collaborations", value: "Oak Ridge National Lab (ORNL), Google Gemini Competition, Perplexity AI" },
      { label: "Key Deliverables", value: "Peer-Reviewed ML Publication (IOP), Full-Stack Web App, Technical Curriculum (500+ Users)" },
      { label: "Stack / Software", value: "Python, PyTorch, Autoencoders, Google Gemini API, Node.js, Express, JavaScript" },
      { label: "Publication DOI", value: "10.1088/2632-2153/ae1f5d (ML: Science & Tech)" }
    ],
    role: "Lead Developer & Campus Strategist. Co-developed ML autoencoder pipelines for computer vision, built full-stack Node.js conversational apps, and authored responsible AI curriculum and intranet documentation.",
    tools: ["Python", "PyTorch", "Autoencoders", "Google Gemini API", "Node.js", "Express", "Computer Vision", "Responsible AI Governance", "Technical Curriculum"],
    context: "Cross-disciplinary initiatives demonstrating how advanced artificial intelligence and machine learning pipelines solve scientific analysis challenges and empower non-technical academic communities.",
    process: [
      "Co-develop convolutional autoencoder and image augmentation pipelines with a four-university team (Penn State, NYU, Purdue, UTK) at the ORNL/MSA Mic-hackathon to automate Transmission Electron Microscopy image analysis.",
      "Evaluate nanoparticle geometry correlations and co-author peer-reviewed publication in Machine Learning: Science and Technology.",
      "Design a conversational AI agent for the Google Gemini Developer Competition that dynamically asks clarifying questions before answering, conditioning API prompts on explicit user intent.",
      "Deploy full-stack Node.js/Express application with responsive browser interfaces and session state management.",
      "Coordinate and deliver enterprise technical training curricula to 500+ researchers and staff across diverse academic departments.",
      "Draft departmental responsible-use guidelines for generative AI tools and maintain supporting intranet documentation hubs."
    ],
    image: "/projects/gemini-ai-systems.png",
    workflowImage: null,
    cta: null,
    challenges: "Balancing complex mathematical AI model development with intuitive, accessible user experiences for researchers and non-technical staff.",
    solution: "Combined robust data engineering and deep learning architectures with human-centered UX design and tiered educational training tracks.",
    outcome: "Published peer-reviewed ML research with ORNL collaborators, shipped a functional conversational full-stack application, and successfully trained 500+ campus researchers in modern AI workflows."
  }
];
