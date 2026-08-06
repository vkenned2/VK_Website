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
    slug: "species-movement-climate-landuse-appalachians",
    title: "Species Movement in Climate & Land-Use Change Across Appalachians",
    tagline: "Modeling species movement, habitat connectivity, and corridor dynamics under changing climate and land-use patterns across the Appalachian mountain region.",
    category: "Conservation Spatial Modeling",
    year: "2024",
    overview: "Developed spatial connectivity and species movement models evaluating how climate change and land-use dynamics impact wildlife movement pathways and habitat fragmentation across the Appalachian region. This system helps conservation planners identify and protect critical climate-resilient corridors.",
    meta: [
      { label: "Institution", value: "University of Tennessee, Knoxville" },
      { label: "Software / Stack", value: "R, Python, Circuitscape, Google Earth Engine, QGIS" },
      { label: "Type", value: "Spatial Movement & Connectivity Modeling" },
      { label: "Goal", value: "Map species movement pathways and corridor connectivity across the Appalachians under climate and land-use scenarios." }
    ],
    role: "Lead Spatial Researcher. Responsible for processing environmental time-series data, building movement resistance surfaces, and modeling wildlife connectivity pathways.",
    tools: ["R", "Python", "Circuitscape", "Google Earth Engine", "Remote Sensing", "Species Movement Modeling", "Connectivity Analysis", "GIS Mapping"],
    context: "Ph.D. research mapping species movement and corridor fragmentation across Appalachian landscapes.",
    process: [
      "Gather high-resolution land cover, topographic, and climate projection layers across the Appalachian region.",
      "Parameterize resistance surfaces based on land-use changes, canopy loss, and thermal gradients.",
      "Run circuit theory and least-cost path models to simulate species movement and dispersal corridors.",
      "Evaluate how projected urban development and temperature changes shift connectivity bottlenecks.",
      "Export spatial rasters and priority maps highlighting critical migration corridors for protection."
    ],
    image: "/projects/species-movement-appalachians.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Quantifying complex multi-species movement patterns across broad geographical gradients with dynamic climate and land-use interactions.",
    solution: "Integrated circuit theory modeling (Circuitscape) with satellite remote sensing time-series data in Python and R.",
    outcome: "Provided conservation decision-makers with high-resolution movement maps identifying critical Appalachian wildlife corridors vulnerable to climate change and fragmentation."
  },
  {
    slug: "appalachian-biodiversity-projections",
    title: "Appalachian Biodiversity Projections",
    tagline: "Land-use and climate change projections for the Appalachian region to model biodiversity impacts.",
    category: "Ecology & Modeling",
    year: "2025",
    overview: "Designed and built spatial land-use change projections for the Appalachians to model and quantify the relative impacts of climate change versus land-use changes on regional biodiversity. By predicting development expansion and habitat fragmentation, this project guides conservation priorities.",
    meta: [
      { label: "Institution", value: "Armsworth Lab, University of Tennessee, Knoxville" },
      { label: "Software / Stack", value: "Python, R, ArcGIS Pro, Dinamica EGO, Circuitscape" },
      { label: "Type", value: "Biodiversity Forecasting" },
      { label: "Goal", value: "Predict wildlife corridor fragmentation under future land development and warming scenarios." }
    ],
    role: "Graduate Student Researcher. Focused on spatial modeling, future land-use simulation, and corridor connectivity assessments.",
    tools: ["Python", "R", "Dinamica EGO", "Circuitscape", "ArcGIS Pro", "Spatial Simulation", "Connectivity Analysis"],
    context: "Ph.D. project funded to identify climate-resilient corridors in the Appalachian mountains.",
    process: [
      "Retrieve historical land cover data and identify drivers of urban expansion.",
      "Run spatial Markov chain models to simulate future development footprints.",
      "Integrate climate projection data to model species range shifts.",
      "Compute ecological connectivity using circuit theory to trace wildlife migration corridors.",
      "Overlay projected corridors with current protected areas to identify conservation gaps."
    ],
    image: "/projects/appalachian-modeling.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Integrating disparate spatial datasets representing different scales, coordinate systems, and resolutions.",
    solution: "Developed custom preprocessing pipelines in Python to downscale and harmonize raster resolutions and reproject spatial coordinate systems.",
    outcome: "Identified critical unprotected corridors in the Southern Appalachians that are vital for long-term species migrations under warming climates."
  },
  {
    slug: "wetlands-policy-memo",
    title: "Indigenous Co-Management of Wetlands",
    tagline: "Strengthening wetlands regulatory frameworks through tribal collaboration and policy modernization.",
    category: "Environmental Policy",
    year: "2023",
    overview: "Authored a policy memo that proposed modernizing wetland protection frameworks by integrating co-management partnerships with Indigenous communities and strengthening federal regulatory definitions. The memo won 3rd place in the National Wildlife Federation (NWF) 2023 Innovative Student Policy Memo Contest.",
    meta: [
      { label: "Organizer", value: "National Wildlife Federation (NWF)" },
      { label: "Focus", value: "Policy Memo / Policy Analysis" },
      { label: "Award", value: "3rd Place National Winner (2023)" },
      { label: "Goal", value: "Draft action-oriented federal policy recommendations to protect vulnerable wetlands." }
    ],
    role: "Policy Advisor & Author. Evaluated current regulatory frameworks, formulated Indigenous co-management recommendations, and presented policy alternatives.",
    tools: ["Policy Analysis", "Federal Regulation", "Indigenous Co-management", "Science Communication", "Case Studies"],
    context: "National student competition to draft policy memos addressing critical environmental crises.",
    process: [
      "Review federal Clean Water Act guidelines and identify legal protection gaps.",
      "Analyze case studies of successful Indigenous-led co-management in Canada and Australia.",
      "Draft a concise policy memo outlining structural gaps, recommendations, and political feasibility.",
      "Format memo according to federal government standards for executive briefings."
    ],
    image: "/projects/wetlands-policy.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Translating complex ecological dynamics of wetlands into clear, actionable, and politically feasible policy guidelines under word count restrictions.",
    solution: "Structured the memo using clear executive bullet points, logical problem-solution trees, and concise economic feasibility tables.",
    outcome: "The memo was recognized nationally by policy professionals at the NWF, demonstrating how ecological data can be converted into federal conservation policy."
  },
  {
    slug: "nwf-ecoleader-fellowship",
    title: "EcoLeader Community Engagement",
    tagline: "Leveraging data analytics to evaluate and enhance student conservation community engagement on NWF platforms.",
    category: "Community & Data Analytics",
    year: "2025",
    overview: "Served as a National Wildlife Federation (NWF) Graduate Student EcoLeader Community Research Fellow. Focused on analyzing user engagement patterns on the NWF EcoLeaders digital platform to identify bottlenecks and recommend data-driven enhancements for national outreach.",
    meta: [
      { label: "Sponsor", value: "National Wildlife Federation (NWF)" },
      { label: "Fellowship", value: "Graduate Student EcoLeader Community Research Fellow (2025)" },
      { label: "Type", value: "Data Analytics & Engagement" },
      { label: "Goal", value: "Improve user retention and campaign participation on environmental education platforms." }
    ],
    role: "NWF Fellow. Responsible for designing surveys, performing user-clickstream analysis, and compiling the final engagement strategy report.",
    tools: ["Google Analytics", "Data Science", "Survey Design", "User Experience (UX) Research", "Community Engagement"],
    context: "Fellowship project focusing on enhancing digital platforms for young environmental leaders.",
    process: [
      "Analyze platform registration databases to map geographical user distributions.",
      "Track user paths through training modules using event logs and Google Analytics.",
      "Launch surveys and focus groups to gather feedback on community features.",
      "Identify drops in the onboarding funnel and propose navigation layout changes.",
      "Present key findings and UI design proposals to the NWF EcoLeaders directors."
    ],
    image: "/projects/nwf-analytics.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Extracting clean user insights from unstructured clickstream logs with significant noise.",
    solution: "Applied Python data cleaning pipelines to filter out bots and group user navigation logs into meaningful session profiles.",
    outcome: "Recommended redesign of the landing page navigation and email follow-up sequence, leading to improved registration-to-active conversion rates."
  },
  {
    slug: "moss-parent-offspring-conflict",
    title: "Parent-Offspring Conflict in Mosses",
    tagline: "Studying genetic resource allocation and evolutionary trade-offs in bryophytes.",
    category: "Evolutionary Genetics",
    year: "2026",
    overview: "Ph.D. research in the Budke Laboratory exploring parent-offspring conflicts using moss models. By analyzing resource allocation between maternal moss gametophytes and developing sporophytes, this study uncovers how evolutionary conflicts shape botanical morphology and chemistry.",
    meta: [
      { label: "Institution", value: "Budke Laboratory, University of Tennessee, Knoxville" },
      { label: "Focus", value: "Evolutionary Biology & Bryophyte Genetics" },
      { label: "Funding", value: "Breedlove-Dennis Award & Tom Gilbert Award" },
      { label: "Goal", value: "Elucidate evolutionary interactions and nutrient transport at the maternal-offspring boundary." }
    ],
    role: "Lead Doctoral Researcher. Responsible for culturing bryophytes, performing microscopic imaging, and conducting chemical profiling.",
    tools: ["Bryophyte Biology", "Microscopy", "Genetic Sequencing", "Chemical Profiling", "Evolutionary Theory"],
    context: "Ph.D. dissertation chapter investigating structural and metabolic evolution in primitive land plants.",
    process: [
      "Culture moss lines in controlled growth chambers under consistent light and temperature.",
      "Slice the maternal-sporophyte junction using microtome technique for anatomical analysis.",
      "Perform scanning electron microscopy (SEM) to visualize tissue interfaces and transport cells.",
      "Profile nutrient transport and allocation using radiolabeled carbons and mass spectrometry.",
      "Analyze sequence data to identify genes involved in placental development."
    ],
    image: "/projects/moss-conflict.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Handling extremely small botanical specimens (less than 1mm in size) without damaging cells at the junction.",
    solution: "Employed specialized cryo-preservation and paraffin embedding techniques to maintain structural integrity during microtome sectioning.",
    outcome: "Discovered novel transport structures that suggest maternal plants dynamically regulate sporophyte resource consumption, supporting evolutionary parental conflict theory."
  },
  {
    slug: "brassica-pathogen-genomics",
    title: "Brassica Pathogen Genomics",
    tagline: "GWAS and genomic mapping to identify Blackleg disease resistance in oilseed crops.",
    category: "Plant Pathogen Genetics",
    year: "2021",
    overview: "Investigated the genomic factors governing plant-pathogen interactions, specifically focusing on Blackleg (Leptosphaeria maculans) resistance in Brassica crops. This research was conducted during the Summer Down Under Research Internship (SDURI) program.",
    meta: [
      { label: "Program", value: "Summer Down Under Research Internship (SDURI)" },
      { label: "Focus", value: "Pathogen Genomics & GWAS" },
      { label: "Software / Stack", value: "RGAugury, PLINK, R" },
      { label: "Goal", value: "Identify candidate genes responsible for crop resilience against devastating fungal pathogens." }
    ],
    role: "Genomics Intern. Responsible for genome-wide association study (GWAS) data analysis, gene annotation, and running bioinformatic pipelines.",
    tools: ["GWAS", "Bioinformatics", "RGAugury", "R", "Genomic Mapping", "Plant Breeding"],
    context: "International internship researching global agricultural resilience under pathogenetic pressures.",
    process: [
      "Obtain genotyping data for diverse lines of Brassica napus.",
      "Run quality control and filtering steps on SNP arrays using PLINK.",
      "Map resistance genes using genome-wide association study (GWAS) models in R.",
      "Utilize the RGAugury pipeline to annotate resistance gene analogs (RGAs).",
      "Pinpoint candidate loci overlapping with known defense pathways."
    ],
    image: "/projects/brassica-genomics.jpg",
    workflowImage: null,
    cta: null,
    challenges: "Dealing with high levels of false positives in GWAS due to population structure in Brassica lines.",
    solution: "Implemented mixed linear models (MLM) incorporating kinship matrices and population structure covariates to control false positive rates.",
    outcome: "Successfully annotated three novel resistance gene clusters that correlate with field-observed resistance against Blackleg disease."
  }
];
