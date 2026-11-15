
/* =========================================================
   FIND YOUR FUTURE
   DATA DATABASE
   Version: 2.0
   Malaysia-first | English + Chinese
   ========================================================= */

/* =========================================================
   1. SYSTEM CONFIGURATION
   ========================================================= */

export const APP_CONFIG = {
  name: "Find Your Future",
  version: "2.1.0",
  defaultLanguage: "en",
  supportedLanguages: ["en", "zh"],
  defaultTheme: "light",
  databaseScope: "Malaysia-first",
  lastUpdated: "2026-11-15",

  dataStatuses: {
    official: "Officially verified",
    verified: "Verified",
    directory: "Directory entry",
    illustrative: "Illustrative example",
    pending: "Pending verification",
    needsUpdate: "Needs update"
  }
};


export const DATA_GOVERNANCE = {
  institutionDirectorySource: "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
  polytechnicDirectorySource: "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
  communityCollegeDirectorySource: "https://www.mohe.gov.my/muat-turun?id=52&view=category",
  publicInstitutionSource: "https://jpt.mohe.gov.my/portal/index.php/en/hei/public-hei/public-universities",
  accreditationRegister: "https://www2.mqa.gov.my/mqr/english/ecarianakr.cfm",
  provisionalAccreditationRegister: "https://www2.mqa.gov.my/pasp/",
  tvetQualificationSearch: "https://www.mqa.gov.my/mqr/carianjpk.cfm",
  rules: [
    "Institution directory inclusion does not prove that every programme is accredited.",
    "Programme accreditation must be checked by exact qualification, campus, mode and validity period.",
    "Tuition fees must include currency, academic year, student category and source URL.",
    "Unknown admission requirements, fees or curriculum must remain null or Pending Verification.",
    "Foreign branch-campus records must identify the home university and home country.",
    "Directory records are not equivalent to active programme availability or current admissions."
  ],
  lastDirectoryReview: "2026-11-15"
};


/* =========================================================
   2. STUDY FIELDS
   学科领域总目录
   ========================================================= */

export const studyFields = [
  {
    id: "engineering",
    name: { en: "Engineering", zh: "工程学" },
    description: {
      en: "Designing, developing and improving technologies, systems and infrastructure.",
      zh: "设计、开发和改进技术、系统与基础设施。"
    },
    icon: "⚙️",
    color: "blue",
    disciplines: [
      "civil-engineering",
      "mechanical-engineering",
      "electrical-engineering",
      "chemical-engineering",
      "aerospace-engineering",
      "biomedical-engineering",
      "mechatronics-engineering",
      "environmental-engineering",
      "computer-engineering",
      "materials-engineering"
    ]
  },
  {
    id: "medicine-health",
    name: { en: "Medicine & Health Sciences", zh: "医学与健康科学" },
    description: {
      en: "Understanding human health, disease prevention, diagnosis and treatment.",
      zh: "研究人体健康、疾病预防、诊断与治疗。"
    },
    icon: "🩺",
    color: "red",
    disciplines: [
      "medicine",
      "nursing",
      "pharmacy",
      "medical-laboratory-science",
      "medical-assistant",
      "physiotherapy",
      "occupational-therapy",
      "radiography",
      "public-health",
      "medical-social-work",
      "emergency-medical-care"
    ]
  },
  {
    id: "biological-sciences",
    name: { en: "Biological Sciences", zh: "生物科学" },
    description: {
      en: "Studying living organisms, cells, genetics and biological systems.",
      zh: "研究生物体、细胞、遗传学与生命系统。"
    },
    icon: "🧬",
    color: "green",
    disciplines: [
      "biology",
      "biotechnology",
      "microbiology",
      "molecular-biology",
      "genetics",
      "biochemistry",
      "marine-biology",
      "ecology",
      "medical-biotechnology",
      "bioinformatics"
    ]
  },
  {
    id: "computer-technology",
    name: { en: "Computing & Technology", zh: "计算机与科技" },
    description: {
      en: "Building software, intelligent systems and digital technologies.",
      zh: "开发软件、智能系统与数字技术。"
    },
    icon: "💻",
    color: "purple",
    disciplines: [
      "computer-science",
      "software-engineering",
      "artificial-intelligence",
      "data-science",
      "cybersecurity",
      "information-technology",
      "information-systems",
      "cloud-computing",
      "robotics",
      "computer-vision"
    ]
  },
  {
    id: "business",
    name: { en: "Business & Management", zh: "商业与管理" },
    description: {
      en: "Managing organisations, finance, markets and business operations.",
      zh: "管理组织、金融、市场与商业运营。"
    },
    icon: "📊",
    color: "orange",
    disciplines: [
      "business-administration",
      "accounting",
      "finance",
      "marketing",
      "human-resource-management",
      "international-business",
      "economics",
      "entrepreneurship",
      "logistics",
      "business-analytics"
    ]
  },
  {
    id: "science",
    name: { en: "Physical & Applied Sciences", zh: "物理与应用科学" },
    description: {
      en: "Exploring the fundamental principles of the natural world.",
      zh: "探索自然世界的基本原理。"
    },
    icon: "🔬",
    color: "cyan",
    disciplines: [
      "physics",
      "chemistry",
      "mathematics",
      "statistics",
      "applied-physics",
      "forensic-science",
      "geology",
      "environmental-science",
      "materials-science"
    ]
  },
  {
    id: "architecture-built-environment",
    name: { en: "Architecture & Built Environment", zh: "建筑与建成环境" },
    description: {
      en: "Planning, designing and constructing buildings and communities.",
      zh: "规划、设计与建设建筑物和社区。"
    },
    icon: "🏙️",
    color: "brown",
    disciplines: [
      "architecture",
      "quantity-surveying",
      "construction-management",
      "building-surveying",
      "urban-planning",
      "landscape-architecture",
      "interior-design",
      "property-management",
      "geomatics",
      "building-information-modelling"
    ]
  },
  {
    id: "social-sciences",
    name: { en: "Social Sciences", zh: "社会科学" },
    description: {
      en: "Understanding people, societies, cultures and human behaviour.",
      zh: "研究人类、社会、文化与行为。"
    },
    icon: "🌍",
    color: "pink",
    disciplines: [
      "psychology",
      "sociology",
      "political-science",
      "international-relations",
      "social-work",
      "anthropology",
      "communication",
      "criminology",
      "public-policy"
    ]
  },
  {
    id: "education",
    name: { en: "Education", zh: "教育学" },
    description: {
      en: "Developing teaching, learning and educational systems.",
      zh: "发展教学、学习与教育体系。"
    },
    icon: "🎓",
    color: "indigo",
    disciplines: [
      "early-childhood-education",
      "primary-education",
      "secondary-education",
      "special-education",
      "educational-psychology",
      "educational-technology",
      "tesl"
    ]
  },
  {
    id: "design-creative",
    name: { en: "Design & Creative Arts", zh: "设计与创意艺术" },
    description: {
      en: "Creating visual communication, products and creative experiences.",
      zh: "创造视觉传播、产品与创意体验。"
    },
    icon: "🎨",
    color: "pink",
    disciplines: [
      "graphic-design",
      "industrial-design",
      "product-design",
      "animation",
      "game-design",
      "multimedia-design",
      "fashion-design",
      "film-production",
      "digital-media"
    ]
  },
  {
    id: "agriculture",
    name: { en: "Agriculture & Food Sciences", zh: "农业与食品科学" },
    description: {
      en: "Improving agriculture, food production and sustainable resources.",
      zh: "改善农业、食品生产与可持续资源。"
    },
    icon: "🌱",
    color: "green",
    disciplines: [
      "agriculture",
      "food-science",
      "food-technology",
      "animal-science",
      "veterinary-science",
      "horticulture",
      "aquaculture",
      "forestry"
    ]
  },
  {
    id: "law",
    name: { en: "Law & Legal Studies", zh: "法律与法律研究" },
    description: {
      en: "Studying legal systems, justice and regulatory frameworks.",
      zh: "研究法律制度、司法与监管框架。"
    },
    icon: "⚖️",
    color: "slate",
    disciplines: [
      "law",
      "corporate-law",
      "international-law",
      "criminal-justice",
      "legal-studies"
    ]
  },
  {
    id: "hospitality-tourism",
    name: { en: "Hospitality & Tourism", zh: "酒店与旅游管理" },
    description: {
      en: "Managing hospitality, travel and tourism services.",
      zh: "管理酒店、旅游与相关服务。"
    },
    icon: "✈️",
    color: "orange",
    disciplines: [
      "hospitality-management",
      "tourism-management",
      "hotel-management",
      "event-management",
      "culinary-arts"
    ]
  },
  {
    id: "communication-media",
    name: { en: "Communication & Media", zh: "传播与媒体" },
    description: {
      en: "Creating and analysing media, journalism and communication.",
      zh: "创作与分析媒体、新闻及传播内容。"
    },
    icon: "📡",
    color: "blue",
    disciplines: [
      "journalism",
      "mass-communication",
      "public-relations",
      "broadcasting",
      "digital-communication",
      "media-studies"
    ]
  },
  {
    id: "transport-logistics",
    name: { en: "Transport & Logistics", zh: "交通与物流" },
    description: {
      en: "Planning transport networks, supply chains and logistics systems.",
      zh: "规划交通网络、供应链与物流系统。"
    },
    icon: "🚆",
    color: "cyan",
    disciplines: [
      "logistics-management",
      "supply-chain-management",
      "aviation-management",
      "maritime-studies",
      "transport-planning"
    ]
  }
];


/* =========================================================
   3. DISCIPLINES
   科系资料
   ========================================================= */

export const disciplines = [
  {
    id: "civil-engineering",
    fieldId: "engineering",
    name: { en: "Civil Engineering", zh: "土木工程" },
    description: {
      en: "Designing and maintaining infrastructure such as roads, bridges, buildings and water systems.",
      zh: "设计与维护道路、桥梁、建筑及水利系统等基础设施。"
    },
    subjects: [
      "Structural Engineering",
      "Geotechnical Engineering",
      "Hydraulics",
      "Transportation Engineering",
      "Construction Materials",
      "Engineering Mathematics"
    ],
    careers: [
      "civil-engineer",
      "structural-engineer",
      "site-engineer",
      "construction-manager"
    ],
    keywords: ["construction", "infrastructure", "bridge", "building", "土木", "建筑"]
  },
  {
    id: "mechanical-engineering",
    fieldId: "engineering",
    name: { en: "Mechanical Engineering", zh: "机械工程" },
    description: {
      en: "Designing machines, mechanical systems, manufacturing processes and energy systems.",
      zh: "设计机械、机械系统、制造流程与能源系统。"
    },
    subjects: [
      "Engineering Mechanics",
      "Thermodynamics",
      "Fluid Mechanics",
      "Machine Design",
      "Manufacturing Technology",
      "Control Systems"
    ],
    careers: [
      "mechanical-engineer",
      "design-engineer",
      "manufacturing-engineer",
      "maintenance-engineer"
    ],
    keywords: ["machine", "mechanical", "manufacturing", "机械", "机器"]
  },
  {
    id: "electrical-engineering",
    fieldId: "engineering",
    name: { en: "Electrical Engineering", zh: "电气工程" },
    description: {
      en: "Working with electrical power, electronics, control systems and electrical infrastructure.",
      zh: "研究电力、电子、控制系统与电气基础设施。"
    },
    subjects: [
      "Circuit Theory",
      "Electrical Machines",
      "Power Systems",
      "Electronics",
      "Control Engineering",
      "Electrical Design"
    ],
    careers: [
      "electrical-engineer",
      "power-engineer",
      "electronics-engineer",
      "control-engineer"
    ],
    keywords: ["electricity", "electronics", "power", "电气", "电力"]
  },
  {
    id: "medicine",
    fieldId: "medicine-health",
    name: { en: "Medicine", zh: "医学" },
    description: {
      en: "Studying human diseases, clinical diagnosis and medical treatment.",
      zh: "研究人体疾病、临床诊断与医疗治疗。"
    },
    subjects: [
      "Anatomy",
      "Physiology",
      "Pathology",
      "Pharmacology",
      "Clinical Medicine",
      "Medical Ethics"
    ],
    careers: ["medical-doctor"],
    keywords: ["doctor", "clinical", "hospital", "医学", "医生"]
  },
  {
    id: "medical-laboratory-science",
    fieldId: "medicine-health",
    name: { en: "Medical Laboratory Science", zh: "医学检验科学" },
    description: {
      en: "Performing laboratory investigations to support disease diagnosis and healthcare.",
      zh: "通过实验室检验协助疾病诊断与医疗服务。"
    },
    subjects: [
      "Clinical Chemistry",
      "Haematology",
      "Medical Microbiology",
      "Immunology",
      "Histopathology",
      "Laboratory Practice"
    ],
    careers: [
      "medical-laboratory-scientist",
      "laboratory-technologist",
      "clinical-research-assistant"
    ],
    keywords: ["laboratory", "medical science", "检验", "实验室"]
  },
  {
    id: "biotechnology",
    fieldId: "biological-sciences",
    name: { en: "Biotechnology", zh: "生物科技" },
    description: {
      en: "Applying biological systems and technologies in healthcare, agriculture and industry.",
      zh: "将生物系统与技术应用于医疗、农业及工业。"
    },
    subjects: [
      "Molecular Biology",
      "Genetics",
      "Biochemistry",
      "Cell Culture",
      "Bioprocess Technology",
      "Bioinformatics"
    ],
    careers: [
      "biotechnologist",
      "research-scientist",
      "bioprocess-engineer"
    ],
    keywords: ["biotech", "genetics", "cell", "生物科技", "基因"]
  },
  {
    id: "artificial-intelligence",
    fieldId: "computer-technology",
    name: { en: "Artificial Intelligence", zh: "人工智能" },
    description: {
      en: "Developing systems that can learn, reason and support decision-making.",
      zh: "开发能够学习、推理并辅助决策的智能系统。"
    },
    subjects: [
      "Programming",
      "Machine Learning",
      "Deep Learning",
      "Data Structures",
      "Computer Vision",
      "Natural Language Processing"
    ],
    careers: [
      "ai-engineer",
      "machine-learning-engineer",
      "data-scientist"
    ],
    keywords: ["AI", "machine learning", "robotics", "人工智能"]
  },
  {
    id: "quantity-surveying",
    fieldId: "architecture-built-environment",
    name: { en: "Quantity Surveying", zh: "工料测量" },
    description: {
      en: "Managing construction costs, contracts, procurement and project financial matters.",
      zh: "管理建筑成本、合约、采购及项目财务事项。"
    },
    subjects: [
      "Measurement of Building Works",
      "Construction Technology",
      "Cost Planning",
      "Contract Administration",
      "Construction Economics",
      "Building Information Modelling"
    ],
    careers: [
      "quantity-surveyor",
      "contract-manager",
      "cost-consultant"
    ],
    keywords: ["QS", "construction cost", "BIM", "工料测量"]
  },
  {
    id: "architecture",
    fieldId: "architecture-built-environment",
    name: { en: "Architecture", zh: "建筑学" },
    description: {
      en: "Designing buildings, spaces and environments for people.",
      zh: "为人们设计建筑物、空间与环境。"
    },
    subjects: [
      "Architectural Design",
      "Building Technology",
      "Architectural History",
      "Environmental Design",
      "Structures",
      "Digital Modelling"
    ],
    careers: [
      "architect",
      "architectural-designer",
      "urban-designer"
    ],
    keywords: ["building design", "architecture", "建筑设计"]
  }
];


/* =========================================================
   4. COURSES
   课程数据库
   注意：示例资料不代表院校官方课程
   ========================================================= */

export const courses = [
  {
    id: "dip-medical-health-science",
    disciplineId: "medical-laboratory-science",
    fieldId: "medicine-health",
    name: {
      en: "Diploma in Medical and Health Science",
      zh: "医学与健康科学文凭"
    },
    qualification: "Diploma",
    duration: {
      min: 2,
      max: 3,
      unit: "years"
    },
    studyMode: ["Full-time"],
    country: "Malaysia",
    description: {
      en: "A health-science-oriented diploma example. Exact programme content and professional recognition must be checked with the institution.",
      zh: "健康科学方向的文凭课程示例。实际课程内容与专业认可须向开办院校核实。"
    },
    entryRequirements: {
      en: "Requirements vary by institution. Check the official programme admission page.",
      zh: "入学条件因院校而异，请查阅院校官方课程入学页面。"
    },
    curriculum: [],
    institutionIds: [],
    careerIds: [
      "medical-laboratory-scientist",
      "healthcare-assistant"
    ],
    accreditation: [],
    estimatedFees: null,
    dataStatus: "illustrative",
    dataNote: "Illustrative programme record. Not an official programme listing.",
    source: null,
    lastVerified: null
  },
  {
    id: "bachelor-civil-engineering",
    disciplineId: "civil-engineering",
    fieldId: "engineering",
    name: {
      en: "Bachelor of Civil Engineering",
      zh: "土木工程学士"
    },
    qualification: "Bachelor",
    duration: {
      min: 4,
      max: 4,
      unit: "years"
    },
    studyMode: ["Full-time"],
    country: "Malaysia",
    description: {
      en: "An illustrative degree structure covering structural, geotechnical, water and transportation engineering.",
      zh: "土木工程学士课程结构示例，涵盖结构、岩土、水利及交通工程。"
    },
    entryRequirements: {
      en: "Entry requirements depend on the university and accreditation pathway.",
      zh: "入学条件取决于大学及课程认证路径。"
    },
    curriculum: [],
    institutionIds: [],
    careerIds: [
      "civil-engineer",
      "structural-engineer",
      "site-engineer"
    ],
    accreditation: ["BEM - verify programme accreditation"],
    estimatedFees: null,
    dataStatus: "illustrative",
    dataNote: "Illustrative curriculum example—not an official university curriculum.",
    source: null,
    lastVerified: null
  },
  {
    id: "bachelor-mechanical-engineering",
    disciplineId: "mechanical-engineering",
    fieldId: "engineering",
    name: {
      en: "Bachelor of Mechanical Engineering",
      zh: "机械工程学士"
    },
    qualification: "Bachelor",
    duration: {
      min: 4,
      max: 4,
      unit: "years"
    },
    studyMode: ["Full-time"],
    country: "Malaysia",
    description: {
      en: "An illustrative programme covering mechanical design, manufacturing, energy and thermal systems.",
      zh: "机械工程课程示例，涵盖机械设计、制造、能源与热力系统。"
    },
    entryRequirements: {
      en: "Check the relevant university's current admission requirements.",
      zh: "请核实相关大学最新入学条件。"
    },
    curriculum: [],
    institutionIds: [],
    careerIds: [
      "mechanical-engineer",
      "design-engineer",
      "manufacturing-engineer"
    ],
    accreditation: ["BEM - verify programme accreditation"],
    estimatedFees: null,
    dataStatus: "illustrative",
    dataNote: "Illustrative curriculum example—not an official university curriculum.",
    source: null,
    lastVerified: null
  },
  {
    id: "bachelor-artificial-intelligence",
    disciplineId: "artificial-intelligence",
    fieldId: "computer-technology",
    name: {
      en: "Bachelor of Artificial Intelligence",
      zh: "人工智能学士"
    },
    qualification: "Bachelor",
    duration: {
      min: 3,
      max: 4,
      unit: "years"
    },
    studyMode: ["Full-time"],
    country: "Malaysia",
    description: {
      en: "An illustrative degree structure covering programming, machine learning and intelligent systems.",
      zh: "人工智能学士课程示例，涵盖编程、机器学习与智能系统。"
    },
    entryRequirements: {
      en: "Mathematics and computing requirements vary by institution.",
      zh: "数学及计算机相关入学要求因院校而异。"
    },
    curriculum: [],
    institutionIds: [],
    careerIds: [
      "ai-engineer",
      "machine-learning-engineer",
      "data-scientist"
    ],
    accreditation: [],
    estimatedFees: null,
    dataStatus: "illustrative",
    dataNote: "Illustrative curriculum example—not an official university curriculum.",
    source: null,
    lastVerified: null
  },
  {
    id: "bachelor-quantity-surveying",
    disciplineId: "quantity-surveying",
    fieldId: "architecture-built-environment",
    name: {
      en: "Bachelor of Quantity Surveying",
      zh: "工料测量学士"
    },
    qualification: "Bachelor",
    duration: {
      min: 3,
      max: 4,
      unit: "years"
    },
    studyMode: ["Full-time"],
    country: "Malaysia",
    description: {
      en: "An illustrative programme covering measurement, cost management, procurement and construction contracts.",
      zh: "工料测量课程示例，涵盖工程量计算、成本管理、采购与建筑合约。"
    },
    entryRequirements: {
      en: "Check the institution's current entry requirements.",
      zh: "请查阅院校最新入学条件。"
    },
    curriculum: [],
    institutionIds: [],
    careerIds: [
      "quantity-surveyor",
      "contract-manager",
      "cost-consultant"
    ],
    accreditation: ["Board of Quantity Surveyors Malaysia - verify"],
    estimatedFees: null,
    dataStatus: "illustrative",
    dataNote: "Illustrative curriculum example—not an official university curriculum.",
    source: null,
    lastVerified: null
  }
];


/* =========================================================
   5. CURRICULUM STRUCTURE
   通用课纲资料结构
   ========================================================= */

export const curriculumSchema = {
  version: "1.0",

  fields: [
    "subjectCode",
    "subjectName",
    "creditHours",
    "courseType",
    "prerequisites",
    "description",
    "learningObjectives",
    "learningOutcomes",
    "topicsCovered",
    "teachingMethods",
    "assessmentMethods",
    "laboratoryActivities",
    "practicalActivities",
    "references",
    "weeklySchedule"
  ],

  courseTypes: [
    "Core",
    "Major Core",
    "Elective",
    "University Required",
    "Practical",
    "Laboratory",
    "Industrial Training",
    "Research Project"
  ],

  versions: {
    curriculumVersion: null,
    academicSession: null,
    effectiveDate: null,
    applicableIntake: null,
    verifiedDate: null
  },

  disciplineExtensions: {
    engineering: [
      "designProject",
      "laboratoryWork",
      "industrialTraining",
      "engineeringDrawing"
    ],
    medicine: [
      "clinicalTraining",
      "clinicalPlacement",
      "patientCare",
      "clinicalAssessment"
    ],
    biologicalSciences: [
      "laboratoryWork",
      "fieldwork",
      "researchProject",
      "experimentalMethods"
    ],
    computerScience: [
      "programmingLab",
      "softwareProject",
      "systemDevelopment",
      "industrialProject"
    ],
    architecture: [
      "designStudio",
      "designPortfolio",
      "modelMaking",
      "designCritique"
    ],
    business: [
      "caseStudies",
      "businessProject",
      "internship",
      "businessSimulation"
    ],
    law: [
      "mootCourt",
      "legalResearch",
      "caseAnalysis",
      "legalDrafting"
    ],
    education: [
      "teachingPracticum",
      "classroomObservation",
      "lessonPlanning",
      "teachingAssessment"
    ],
    tvet: [
      "workshopPractice",
      "competencyAssessment",
      "industryAttachment",
      "technicalSkills"
    ]
  }
};


/* =========================================================
   6. INSTITUTIONS
   马来西亚院校目录
   这里只建立目录条目，不代表所有课程均已核实
   ========================================================= */

export const institutions = [
  {
    id: "um",
    name: {
      en: "Universiti Malaya",
      zh: "马来亚大学"
    },
    abbreviation: "UM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Kuala Lumpur",
    website: "https://www.um.edu.my/",
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "ukm",
    name: {
      en: "Universiti Kebangsaan Malaysia",
      zh: "马来西亚国民大学"
    },
    abbreviation: "UKM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Selangor",
    website: "https://www.ukm.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "usm",
    name: {
      en: "Universiti Sains Malaysia",
      zh: "马来西亚理科大学"
    },
    abbreviation: "USM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Penang",
    website: "https://www.usm.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "utm",
    name: {
      en: "Universiti Teknologi Malaysia",
      zh: "马来西亚工艺大学"
    },
    abbreviation: "UTM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Johor",
    website: "https://www.utm.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "upm",
    name: {
      en: "Universiti Putra Malaysia",
      zh: "马来西亚博特拉大学"
    },
    abbreviation: "UPM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Selangor",
    website: "https://www.upm.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "uitm",
    name: {
      en: "Universiti Teknologi MARA",
      zh: "玛拉工艺大学"
    },
    abbreviation: "UiTM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Selangor",
    website: "https://uitm.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "unimas",
    name: {
      en: "Universiti Malaysia Sarawak",
      zh: "马来西亚砂拉越大学"
    },
    abbreviation: "UNIMAS",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Sarawak",
    website: "https://www.unimas.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "ums",
    name: {
      en: "Universiti Malaysia Sabah",
      zh: "马来西亚沙巴大学"
    },
    abbreviation: "UMS",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Sabah",
    website: "https://www.ums.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "taylors",
    name: {
      en: "Taylor's University",
      zh: "泰莱大学"
    },
    abbreviation: "Taylor's",
    type: "Private University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "private",
    state: "Selangor",
    website: "https://university.taylors.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://university.taylors.edu.my/",
    lastVerified: null
  },
  {
    id: "sunway",
    name: {
      en: "Sunway University",
      zh: "双威大学"
    },
    abbreviation: "Sunway",
    type: "Private University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "private",
    state: "Selangor",
    website: "https://sunwayuniversity.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://sunwayuniversity.edu.my/",
    lastVerified: null
  },
  {
    id: "monash-malaysia",
    name: {
      en: "Monash University Malaysia",
      zh: "莫纳什大学马来西亚校区"
    },
    abbreviation: "Monash Malaysia",
    type: "Foreign Branch Campus",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "foreign-branch",
    parentCountry: "Australia",
    state: "Selangor",
    website: "https://www.monash.edu.my/",
    parentUniversity: "Monash University",
    parentCountry: "Australia",
    campuses: [],
    dataStatus: "directory",
    source: "https://www.monash.edu.my/",
    lastVerified: null
  },
  {
    id: "nottingham-malaysia",
    name: {
      en: "University of Nottingham Malaysia",
      zh: "诺丁汉大学马来西亚校区"
    },
    abbreviation: "UNM",
    type: "Foreign Branch Campus",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "foreign-branch",
    parentCountry: "United Kingdom",
    state: "Selangor",
    website: "https://www.nottingham.edu.my/",
    parentUniversity: "University of Nottingham",
    parentCountry: "United Kingdom",
    campuses: [],
    dataStatus: "directory",
    source: "https://www.nottingham.edu.my/",
    lastVerified: null
  },
  {
    id: "apu",
    name: {
      en: "Asia Pacific University of Technology & Innovation",
      zh: "亚太科技大学"
    },
    abbreviation: "APU",
    type: "Private University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "private",
    state: "Kuala Lumpur",
    website: "https://www.apu.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://www.apu.edu.my/",
    lastVerified: null
  },
  {
    id: "ucsi",
    name: {
      en: "UCSI University",
      zh: "思特雅大学"
    },
    abbreviation: "UCSI",
    type: "Private University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "private",
    state: "Kuala Lumpur",
    website: "https://www.ucsiuniversity.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://www.ucsiuniversity.edu.my/",
    lastVerified: null
  },
  {
    id: "utar",
    name: {
      en: "Universiti Tunku Abdul Rahman",
      zh: "拉曼大学"
    },
    abbreviation: "UTAR",
    type: "Private University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "private",
    state: "Perak",
    website: "https://www.utar.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://www.utar.edu.my/",
    lastVerified: null
  },
  {
    id: "utp",
    name: {
      en: "Universiti Teknologi PETRONAS",
      zh: "国油科技大学"
    },
    abbreviation: "UTP",
    type: "Private University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "private",
    state: "Perak",
    website: "https://www.utp.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://www.utp.edu.my/",
    lastVerified: null
  },
  {
    id: "politeknik-ungku-omar",
    name: {
      en: "Politeknik Ungku Omar",
      zh: "翁姑奥马理工学院"
    },
    abbreviation: "PUO",
    type: "Polytechnic",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Perak",
    website: "https://www.puo.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://www.puo.edu.my/",
    lastVerified: null
  },
  {
    id: "politeknik-ibrahim-sultan",
    name: {
      en: "Politeknik Ibrahim Sultan",
      zh: "易卜拉欣苏丹理工学院"
    },
    abbreviation: "PIS",
    type: "Polytechnic",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Johor",
    website: "https://www.pis.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://www.pis.edu.my/",
    lastVerified: null
  },
  {
    id: "uum",
    name: { en: "Universiti Utara Malaysia", zh: "马来西亚北方大学" },
    abbreviation: "UUM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Kedah",
    website: "https://www.uum.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "iium",
    name: { en: "International Islamic University Malaysia", zh: "马来西亚国际伊斯兰大学" },
    abbreviation: "IIUM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Selangor",
    website: "https://www.iium.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "umpsa",
    name: { en: "Universiti Malaysia Pahang Al-Sultan Abdullah", zh: "苏丹阿都拉大学" },
    abbreviation: "UMPSA",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Pahang",
    website: "https://www.umpsa.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "umt",
    name: { en: "Universiti Malaysia Terengganu", zh: "马来西亚登嘉楼大学" },
    abbreviation: "UMT",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Terengganu",
    website: "https://www.umt.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "unimap",
    name: { en: "Universiti Malaysia Perlis", zh: "马来西亚玻璃市大学" },
    abbreviation: "UniMAP",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Perlis",
    website: "https://www.unimap.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "upsi",
    name: { en: "Universiti Pendidikan Sultan Idris", zh: "苏丹依德理斯教育大学" },
    abbreviation: "UPSI",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Perak",
    website: "https://www.upsi.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "uthm",
    name: { en: "Universiti Tun Hussein Onn Malaysia", zh: "马来西亚敦胡先翁大学" },
    abbreviation: "UTHM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Johor",
    website: "https://www.uthm.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "utem",
    name: { en: "Universiti Teknikal Malaysia Melaka", zh: "马六甲技术大学" },
    abbreviation: "UTeM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Melaka",
    website: "https://www.utem.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "unisza",
    name: { en: "Universiti Sultan Zainal Abidin", zh: "苏丹再纳阿比丁大学" },
    abbreviation: "UniSZA",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Terengganu",
    website: "https://www.unisza.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "usim",
    name: { en: "Universiti Sains Islam Malaysia", zh: "马来西亚伊斯兰科学大学" },
    abbreviation: "USIM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Negeri Sembilan",
    website: "https://www.usim.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "umk",
    name: { en: "Universiti Malaysia Kelantan", zh: "马来西亚吉兰丹大学" },
    abbreviation: "UMK",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Kelantan",
    website: "https://www.umk.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  },
  {
    id: "upnm",
    name: { en: "National Defence University of Malaysia", zh: "马来西亚国防大学" },
    abbreviation: "UPNM",
    type: "Public University",
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: "Kuala Lumpur",
    website: "https://www.upnm.edu.my/",
    campuses: [],
    dataStatus: "directory",
    source: "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    lastVerified: "2026-11-15"
  }  ,
  {
    id: 'aimst',
    name: { en: 'AIMST University', zh: '亚太科技与创新大学' },
    abbreviation: 'AIMST',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Kedah',
    website: 'https://www.aimst.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'albukhary',
    name: { en: 'Albukhary International University', zh: '亚布卡里国际大学' },
    abbreviation: 'AIU',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Kedah',
    website: 'https://aiu.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'mediu',
    name: { en: 'Al-Madinah International University', zh: '麦地那国际大学' },
    abbreviation: 'MEDIU',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://www.mediu.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'aeu',
    name: { en: 'Asia e University', zh: '亚洲电子大学' },
    abbreviation: 'AeU',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://aeu.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'asia-metropolitan',
    name: { en: 'Asia Metropolitan University', zh: '亚洲都会大学' },
    abbreviation: 'AMU',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Johor',
    website: 'https://amu.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'asia-school-business',
    name: { en: 'Asia School of Business', zh: '亚洲商学院' },
    abbreviation: 'ASB',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Kuala Lumpur',
    website: 'https://asb.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'binary',
    name: { en: 'Binary University', zh: '百纳利大学' },
    abbreviation: 'BINARY',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://binary.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'city-university',
    name: { en: 'City University Malaysia', zh: '城市大学' },
    abbreviation: 'CITY',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://city.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'drb-hicom',
    name: { en: 'DRB-HICOM University of Automotive Malaysia', zh: 'DRB-HICOM 汽车大学' },
    abbreviation: 'DRB-HICOM',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Pahang',
    website: 'https://www.dhu.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'globalnxt',
    name: { en: 'GlobalNxt University', zh: 'GlobalNxt 大学' },
    abbreviation: 'GNU',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Kuala Lumpur',
    website: 'https://www.globalnxt.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'imu',
    name: { en: 'IMU University', zh: '国际医药大学' },
    abbreviation: 'IMU',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Kuala Lumpur',
    website: 'https://imu.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'inceif',
    name: { en: 'INCEIF University', zh: '国际伊斯兰金融教育中心大学' },
    abbreviation: 'INCEIF',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Kuala Lumpur',
    website: 'https://inceif.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'inti',
    name: { en: 'INTI International University', zh: '英迪国际大学' },
    abbreviation: 'INTI',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Negeri Sembilan',
    website: 'https://newinti.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'kpj-healthcare',
    name: { en: 'KPJ Healthcare University', zh: 'KPJ 医疗保健大学' },
    abbreviation: 'KPJ',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Negeri Sembilan',
    website: 'https://kpju.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'klust',
    name: { en: 'Kuala Lumpur University of Science and Technology', zh: '吉隆坡科技大学' },
    abbreviation: 'KLUST',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://klust.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'limkokwing',
    name: { en: 'Limkokwing University of Creative Technology', zh: '林国荣创意科技大学' },
    abbreviation: 'LUCT',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://www.limkokwing.net/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'mahsa',
    name: { en: 'MAHSA University', zh: '玛莎大学' },
    abbreviation: 'MAHSA',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://mahsa.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'must',
    name: { en: 'Malaysia University of Science and Technology', zh: '马来西亚科技大学' },
    abbreviation: 'MUST',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://must.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'msu',
    name: { en: 'Management and Science University', zh: '管理与科学大学' },
    abbreviation: 'MSU',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://www.msu.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'mila',
    name: { en: 'MILA University', zh: 'MILA 大学' },
    abbreviation: 'MILA',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Negeri Sembilan',
    website: 'https://mila.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'nilai',
    name: { en: 'Nilai University', zh: '汝来大学' },
    abbreviation: 'NILAI',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Negeri Sembilan',
    website: 'https://www.nilai.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'segi',
    name: { en: 'SEGi University', zh: '世纪大学' },
    abbreviation: 'SEGi',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://www.segi.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'unitar',
    name: { en: 'UNITAR International University', zh: 'UNITAR 国际大学' },
    abbreviation: 'UNITAR',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://www.unitar.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'uniten',
    name: { en: 'Universiti Tenaga Nasional', zh: '国家能源大学' },
    abbreviation: 'UNITEN',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Selangor',
    website: 'https://www.uniten.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'unikl',
    name: { en: 'Universiti Kuala Lumpur', zh: '吉隆坡大学' },
    abbreviation: 'UniKL',
    type: "Private Higher Education Institution",
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'private',
    state: 'Kuala Lumpur',
    website: 'https://www.unikl.edu.my/',
    institutionIds: [],
    campuses: [],
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'curtin-malaysia',
    name: { en: 'Curtin University Malaysia', zh: '科廷大学马来西亚校区' },
    abbreviation: 'CURTIN',
    type: 'Foreign Branch Campus',
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'foreign-branch',
    state: 'Sarawak',
    website: 'https://www.curtin.edu.my/',
    institutionIds: [],
    campuses: [],
    parentUniversity: 'Curtin University',
    parentCountry: "Australia",
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'swinburne-sarawak',
    name: { en: 'Swinburne University of Technology Sarawak Campus', zh: '斯威本科技大学砂拉越校区' },
    abbreviation: 'SWINBURNE',
    type: 'Foreign Branch Campus',
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'foreign-branch',
    state: 'Sarawak',
    website: 'https://www.swinburne.edu.my/',
    institutionIds: [],
    campuses: [],
    parentUniversity: 'Swinburne University of Technology',
    parentCountry: "Australia",
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'heriot-watt-malaysia',
    name: { en: 'Heriot-Watt University Malaysia', zh: '赫瑞瓦特大学马来西亚校区' },
    abbreviation: 'HWUM',
    type: 'Foreign Branch Campus',
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'foreign-branch',
    state: 'Putrajaya',
    website: 'https://www.hw.ac.uk/malaysia/',
    institutionIds: [],
    campuses: [],
    parentUniversity: 'Heriot-Watt University',
    parentCountry: "United Kingdom",
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'newcastle-medicine-malaysia',
    name: { en: 'Newcastle University Medicine Malaysia', zh: '纽卡斯尔大学医学马来西亚校区' },
    abbreviation: 'NUMed',
    type: 'Foreign Branch Campus',
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'foreign-branch',
    state: 'Johor',
    website: 'https://www.ncl.ac.uk/numed/',
    institutionIds: [],
    campuses: [],
    parentUniversity: 'Newcastle University',
    parentCountry: "United Kingdom",
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'southampton-malaysia',
    name: { en: 'University of Southampton Malaysia', zh: '南安普顿大学马来西亚校区' },
    abbreviation: 'UoSM',
    type: 'Foreign Branch Campus',
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'foreign-branch',
    state: 'Johor',
    website: 'https://www.southamptonmalaysia.edu.my/',
    institutionIds: [],
    campuses: [],
    parentUniversity: 'University of Southampton',
    parentCountry: "United Kingdom",
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'xiamen-malaysia',
    name: { en: 'Xiamen University Malaysia', zh: '厦门大学马来西亚分校' },
    abbreviation: 'XMUM',
    type: 'Foreign Branch Campus',
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'foreign-branch',
    state: 'Selangor',
    website: 'https://www.xmu.edu.my/',
    institutionIds: [],
    campuses: [],
    parentUniversity: 'Xiamen University',
    parentCountry: "China",
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'reading-malaysia',
    name: { en: 'University of Reading Malaysia', zh: '雷丁大学马来西亚校区' },
    abbreviation: 'UoRM',
    type: 'Foreign Branch Campus',
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'foreign-branch',
    state: 'Johor',
    website: 'https://www.reading.edu.my/',
    institutionIds: [],
    campuses: [],
    parentUniversity: 'University of Reading',
    parentCountry: "United Kingdom",
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'rcsi-ucd-malaysia',
    name: { en: 'RCSI & UCD Malaysia Campus', zh: '爱尔兰皇家外科医学院与都柏林大学学院马来西亚校区' },
    abbreviation: 'RUMC',
    type: 'Foreign Branch Campus',
    country: 'Malaysia',
    studyLocation: 'domestic',
    ownership: 'foreign-branch',
    state: 'Penang',
    website: 'https://www.rcsiucd.edu.my/',
    institutionIds: [],
    campuses: [],
    parentUniversity: 'Royal College of Surgeons in Ireland & University College Dublin',
    parentCountry: "Ireland",
    description: { en: 'Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.', zh: '院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。' },
    dataStatus: "directory",
    source: 'https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm',
    lastVerified: null
  }
  ,
  {
    id: 'nus',
    name: { en: 'National University of Singapore', zh: '新加坡国立大学' },
    abbreviation: 'NUS',
    type: 'International University',
    country: 'Singapore',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Singapore',
    website: 'https://www.nus.edu.sg/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.nus.edu.sg/',
    lastVerified: null
  }
  ,
  {
    id: 'ntu',
    name: { en: 'Nanyang Technological University', zh: '南洋理工大学' },
    abbreviation: 'NTU',
    type: 'International University',
    country: 'Singapore',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Singapore',
    website: 'https://www.ntu.edu.sg/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.ntu.edu.sg/',
    lastVerified: null
  }
  ,
  {
    id: 'oxford',
    name: { en: 'University of Oxford', zh: '牛津大学' },
    abbreviation: 'Oxford',
    type: 'International University',
    country: 'United Kingdom',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Oxford',
    website: 'https://www.ox.ac.uk/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.ox.ac.uk/',
    lastVerified: null
  }
  ,
  {
    id: 'imperial',
    name: { en: 'Imperial College London', zh: '帝国理工学院' },
    abbreviation: 'Imperial',
    type: 'International University',
    country: 'United Kingdom',
    studyLocation: 'international',
    ownership: 'public',
    state: 'London',
    website: 'https://www.imperial.ac.uk/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.imperial.ac.uk/',
    lastVerified: null
  }
  ,
  {
    id: 'melbourne',
    name: { en: 'The University of Melbourne', zh: '墨尔本大学' },
    abbreviation: 'UniMelb',
    type: 'International University',
    country: 'Australia',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Victoria',
    website: 'https://www.unimelb.edu.au/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.unimelb.edu.au/',
    lastVerified: null
  }
  ,
  {
    id: 'unsw',
    name: { en: 'The University of New South Wales', zh: '新南威尔士大学' },
    abbreviation: 'UNSW',
    type: 'International University',
    country: 'Australia',
    studyLocation: 'international',
    ownership: 'public',
    state: 'New South Wales',
    website: 'https://www.unsw.edu.au/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.unsw.edu.au/',
    lastVerified: null
  }
  ,
  {
    id: 'mit',
    name: { en: 'Massachusetts Institute of Technology', zh: '麻省理工学院' },
    abbreviation: 'MIT',
    type: 'International University',
    country: 'United States',
    studyLocation: 'international',
    ownership: 'private',
    state: 'Massachusetts',
    website: 'https://www.mit.edu/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.mit.edu/',
    lastVerified: null
  }
  ,
  {
    id: 'stanford',
    name: { en: 'Stanford University', zh: '斯坦福大学' },
    abbreviation: 'Stanford',
    type: 'International University',
    country: 'United States',
    studyLocation: 'international',
    ownership: 'private',
    state: 'California',
    website: 'https://www.stanford.edu/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.stanford.edu/',
    lastVerified: null
  }
  ,
  {
    id: 'tokyo',
    name: { en: 'The University of Tokyo', zh: '东京大学' },
    abbreviation: 'UTokyo',
    type: 'International University',
    country: 'Japan',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Tokyo',
    website: 'https://www.u-tokyo.ac.jp/en/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.u-tokyo.ac.jp/en/',
    lastVerified: null
  }
  ,
  {
    id: 'kyoto',
    name: { en: 'Kyoto University', zh: '京都大学' },
    abbreviation: 'KyotoU',
    type: 'International University',
    country: 'Japan',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Kyoto',
    website: 'https://www.kyoto-u.ac.jp/en',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.kyoto-u.ac.jp/en',
    lastVerified: null
  }
  ,
  {
    id: 'snu',
    name: { en: 'Seoul National University', zh: '首尔大学' },
    abbreviation: 'SNU',
    type: 'International University',
    country: 'South Korea',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Seoul',
    website: 'https://en.snu.ac.kr/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://en.snu.ac.kr/',
    lastVerified: null
  }
  ,
  {
    id: 'kaist',
    name: { en: 'Korea Advanced Institute of Science and Technology', zh: '韩国科学技术院' },
    abbreviation: 'KAIST',
    type: 'International University',
    country: 'South Korea',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Daejeon',
    website: 'https://www.kaist.ac.kr/en/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.kaist.ac.kr/en/',
    lastVerified: null
  }
  ,
  {
    id: 'tsinghua',
    name: { en: 'Tsinghua University', zh: '清华大学' },
    abbreviation: 'THU',
    type: 'International University',
    country: 'China',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Beijing',
    website: 'https://www.tsinghua.edu.cn/en/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://www.tsinghua.edu.cn/en/',
    lastVerified: null
  }
  ,
  {
    id: 'peking',
    name: { en: 'Peking University', zh: '北京大学' },
    abbreviation: 'PKU',
    type: 'International University',
    country: 'China',
    studyLocation: 'international',
    ownership: 'public',
    state: 'Beijing',
    website: 'https://english.pku.edu.cn/',
    institutionIds: [],
    campuses: [],
    description: { en: 'International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.', zh: '国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。' },
    dataStatus: "directory",
    source: 'https://english.pku.edu.cn/',
    lastVerified: null
  }  ,
  {
    id: 'poly-politeknik-sultan-haji-ahmad-shah',
    name: { en: 'Politeknik Sultan Haji Ahmad Shah', zh: 'Politeknik Sultan Haji Ahmad Shah' },
    abbreviation: 'POLISAS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://www.polisas.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-sultan-abdul-halim-muadzam-shah',
    name: { en: 'Politeknik Sultan Abdul Halim Mu’adzam Shah', zh: 'Politeknik Sultan Abdul Halim Mu’adzam Shah' },
    abbreviation: 'POLIMAS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://polimas.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-kota-bharu',
    name: { en: 'Politeknik Kota Bharu', zh: 'Politeknik Kota Bharu' },
    abbreviation: 'PKB',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kelantan',
    website: 'https://pkb.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-kuching-sarawak',
    name: { en: 'Politeknik Kuching Sarawak', zh: 'Politeknik Kuching Sarawak' },
    abbreviation: 'PKS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'https://poliku.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-port-dickson',
    name: { en: 'Politeknik Port Dickson', zh: 'Politeknik Port Dickson' },
    abbreviation: 'PPD',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Negeri Sembilan',
    website: 'https://polipd.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-kota-kinabalu',
    name: { en: 'Politeknik Kota Kinabalu', zh: 'Politeknik Kota Kinabalu' },
    abbreviation: 'PKK',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://polikk.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-sultan-salahuddin-abdul-aziz-shah',
    name: { en: 'Politeknik Sultan Salahuddin Abdul Aziz Shah', zh: 'Politeknik Sultan Salahuddin Abdul Aziz Shah' },
    abbreviation: 'PSA',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://psa.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-seberang-perai',
    name: { en: 'Politeknik Seberang Perai', zh: 'Politeknik Seberang Perai' },
    abbreviation: 'PSP',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://www.psp.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-melaka',
    name: { en: 'Politeknik Melaka', zh: 'Politeknik Melaka' },
    abbreviation: 'PMK',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Melaka',
    website: 'https://polimelaka.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-kuala-terengganu',
    name: { en: 'Politeknik Kuala Terengganu', zh: 'Politeknik Kuala Terengganu' },
    abbreviation: 'PKT',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://pkt.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-sultan-mizan-zainal-abidin',
    name: { en: 'Politeknik Sultan Mizan Zainal Abidin', zh: 'Politeknik Sultan Mizan Zainal Abidin' },
    abbreviation: 'PSMZA',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://psmza.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-merlimau',
    name: { en: 'Politeknik Merlimau', zh: 'Politeknik Merlimau' },
    abbreviation: 'PMM',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Melaka',
    website: 'https://pmm.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-sultan-azlan-shah',
    name: { en: 'Politeknik Sultan Azlan Shah', zh: 'Politeknik Sultan Azlan Shah' },
    abbreviation: 'PSAS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://psas.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-tuanku-sultanah-bahiyah',
    name: { en: 'Politeknik Tuanku Sultanah Bahiyah', zh: 'Politeknik Tuanku Sultanah Bahiyah' },
    abbreviation: 'PTSB',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://ptsb.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-sultan-idris-shah',
    name: { en: 'Politeknik Sultan Idris Shah', zh: 'Politeknik Sultan Idris Shah' },
    abbreviation: 'PSIS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://psis.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-tuanku-syed-sirajuddin',
    name: { en: 'Politeknik Tuanku Syed Sirajuddin', zh: 'Politeknik Tuanku Syed Sirajuddin' },
    abbreviation: 'PTSS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perlis',
    website: 'https://ptss.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-muadzam-shah',
    name: { en: 'Politeknik Muadzam Shah', zh: 'Politeknik Muadzam Shah' },
    abbreviation: 'PMS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://pms.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-mukah-sarawak',
    name: { en: 'Politeknik Mukah Sarawak', zh: 'Politeknik Mukah Sarawak' },
    abbreviation: 'PMU',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'https://pmu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-balik-pulau',
    name: { en: 'Politeknik Balik Pulau', zh: 'Politeknik Balik Pulau' },
    abbreviation: 'PBU',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://pbu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-jeli',
    name: { en: 'Politeknik Jeli', zh: 'Politeknik Jeli' },
    abbreviation: 'PJK',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kelantan',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-nilai',
    name: { en: 'Politeknik Nilai', zh: 'Politeknik Nilai' },
    abbreviation: 'PNS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Negeri Sembilan',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-banting',
    name: { en: 'Politeknik Banting', zh: 'Politeknik Banting' },
    abbreviation: 'PBS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://pbs.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-mersing',
    name: { en: 'Politeknik Mersing', zh: 'Politeknik Mersing' },
    abbreviation: 'PMJ',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://pmj.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-hulu-terengganu',
    name: { en: 'Politeknik Hulu Terengganu', zh: 'Politeknik Hulu Terengganu' },
    abbreviation: 'PHT',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://pht.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-sandakan-sabah',
    name: { en: 'Politeknik Sandakan Sabah', zh: 'Politeknik Sandakan Sabah' },
    abbreviation: 'PSS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://pss.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-metro-kuala-lumpur',
    name: { en: 'Politeknik METrO Kuala Lumpur', zh: 'Politeknik METrO Kuala Lumpur' },
    abbreviation: 'PMKL',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kuala Lumpur',
    website: 'https://pmkl.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-metro-kuantan',
    name: { en: 'Politeknik METrO Kuantan', zh: 'Politeknik METrO Kuantan' },
    abbreviation: 'PMKU',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://pmku.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-metro-johor-bahru',
    name: { en: 'Politeknik METrO Johor Bahru', zh: 'Politeknik METrO Johor Bahru' },
    abbreviation: 'PMJB',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://pmjb.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-metro-betong-sarawak',
    name: { en: 'Politeknik METrO Betong Sarawak', zh: 'Politeknik METrO Betong Sarawak' },
    abbreviation: 'PMBS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'https://www.pmbs.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-metro-tasek-gelugor',
    name: { en: 'Politeknik METrO Tasek Gelugor', zh: 'Politeknik METrO Tasek Gelugor' },
    abbreviation: 'PMTG',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://pmtg.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-tun-syed-nasir-syed-ismail',
    name: { en: 'Politeknik Tun Syed Nasir Syed Ismail', zh: 'Politeknik Tun Syed Nasir Syed Ismail' },
    abbreviation: 'PTSN',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://ptsn.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-besut',
    name: { en: 'Politeknik Besut', zh: 'Politeknik Besut' },
    abbreviation: 'PBT',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://polibesut.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-maritim-sultan-nazrin-shah',
    name: { en: 'Politeknik Maritim Sultan Nazrin Shah', zh: 'Politeknik Maritim Sultan Nazrin Shah' },
    abbreviation: 'PMSN',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://pbd.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'poly-politeknik-tawau',
    name: { en: 'Politeknik Tawau', zh: 'Politeknik Tawau' },
    abbreviation: 'PTS',
    type: 'Polytechnic',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://politawau.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-arau',
    name: { en: 'Kolej Komuniti Arau', zh: 'Kolej Komuniti Arau' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkarau.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-kangar-kolej-induk-kolej-komuniti-arau',
    name: { en: 'Kolej Komuniti Cawangan Kangar (Kolej Induk – Kolej Komuniti Arau)', zh: 'Kolej Komuniti Cawangan Kangar (Kolej Induk – Kolej Komuniti Arau)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkkangar.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bandar-darul-aman',
    name: { en: 'Kolej Komuniti Bandar Darul Aman', zh: 'Kolej Komuniti Bandar Darul Aman' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkbandardarulaman.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-jerai',
    name: { en: 'Kolej Komuniti Jerai', zh: 'Kolej Komuniti Jerai' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkjerai.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bandar-baharu',
    name: { en: 'Kolej Komuniti Bandar Baharu', zh: 'Kolej Komuniti Bandar Baharu' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkbandarbaharu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-langkawi-tourism-academy-kolej-komuniti-langkawi',
    name: { en: 'Langkawi Tourism Academy @ Kolej Komuniti Langkawi', zh: 'Langkawi Tourism Academy @ Kolej Komuniti Langkawi' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://ltaklangkawi.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kulim',
    name: { en: 'Kolej Komuniti Kulim', zh: 'Kolej Komuniti Kulim' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkkulim.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-sungai-petani',
    name: { en: 'Kolej Komuniti Sungai Petani', zh: 'Kolej Komuniti Sungai Petani' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kksungaipetani.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-baling',
    name: { en: 'Kolej Komuniti Baling', zh: 'Kolej Komuniti Baling' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkbaling.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-padang-terap',
    name: { en: 'Kolej Komuniti Padang Terap', zh: 'Kolej Komuniti Padang Terap' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkpadangterap.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-sik',
    name: { en: 'Kolej Komuniti Sik', zh: 'Kolej Komuniti Sik' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kksik.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-jerlun',
    name: { en: 'Kolej Komuniti Cawangan Jerlun', zh: 'Kolej Komuniti Cawangan Jerlun' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kedah',
    website: 'https://kkjerlun.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kepala-batas',
    name: { en: 'Kolej Komuniti Kepala Batas', zh: 'Kolej Komuniti Kepala Batas' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://kkkepalabatas.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-nibong-tebal',
    name: { en: 'Kolej Komuniti Nibong Tebal', zh: 'Kolej Komuniti Nibong Tebal' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://kknibongtebal.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bukit-mertajam',
    name: { en: 'Kolej Komuniti Bukit Mertajam', zh: 'Kolej Komuniti Bukit Mertajam' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://kkbukitmertajam.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bayan-baru',
    name: { en: 'Kolej Komuniti Bayan Baru', zh: 'Kolej Komuniti Bayan Baru' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://kkbayanbaru.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-tasek-gelugor',
    name: { en: 'Kolej Komuniti Tasek Gelugor', zh: 'Kolej Komuniti Tasek Gelugor' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://kktasekgelugor.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-seberang-jaya',
    name: { en: 'Kolej Komuniti Seberang Jaya', zh: 'Kolej Komuniti Seberang Jaya' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Penang',
    website: 'https://kkseberangjaya.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-chenderoh',
    name: { en: 'Kolej Komuniti Chenderoh', zh: 'Kolej Komuniti Chenderoh' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkchenderoh.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kuala-kangsar',
    name: { en: 'Kolej Komuniti Kuala Kangsar', zh: 'Kolej Komuniti Kuala Kangsar' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkkualakangsar.mypolycc.edu.my/v2/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-gerik',
    name: { en: 'Kolej Komuniti Gerik', zh: 'Kolej Komuniti Gerik' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkgerik.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-sungai-siput',
    name: { en: 'Kolej Komuniti Sungai Siput', zh: 'Kolej Komuniti Sungai Siput' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kksungaisiput.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-lenggong-kolej-induk-kolej-komuniti-sungai-siput',
    name: { en: 'Kolej Komuniti Cawangan Lenggong (Kolej Induk – Kolej Komuniti Sungai Siput)', zh: 'Kolej Komuniti Cawangan Lenggong (Kolej Induk – Kolej Komuniti Sungai Siput)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-pasir-salak',
    name: { en: 'Kolej Komuniti Pasir Salak', zh: 'Kolej Komuniti Pasir Salak' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkpasirsalak.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-tapah',
    name: { en: 'Kolej Komuniti Tapah', zh: 'Kolej Komuniti Tapah' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kktapah.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-teluk-intan',
    name: { en: 'Kolej Komuniti Teluk Intan', zh: 'Kolej Komuniti Teluk Intan' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kktelukintan.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-manjung',
    name: { en: 'Kolej Komuniti Manjung', zh: 'Kolej Komuniti Manjung' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkmanjung.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-taiping',
    name: { en: 'Kolej Komuniti Taiping', zh: 'Kolej Komuniti Taiping' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kktaiping.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-batu-gajah',
    name: { en: 'Kolej Komuniti Batu Gajah', zh: 'Kolej Komuniti Batu Gajah' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkbatugajah.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-rtc-gopeng',
    name: { en: 'Kolej Komuniti RTC Gopeng', zh: 'Kolej Komuniti RTC Gopeng' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkrtcgopeng.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bagan-serai',
    name: { en: 'Kolej Komuniti Bagan Serai', zh: 'Kolej Komuniti Bagan Serai' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkbaganserai.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bagan-datuk',
    name: { en: 'Kolej Komuniti Bagan Datuk', zh: 'Kolej Komuniti Bagan Datuk' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Perak',
    website: 'https://kkbagandatuk.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-sabak-bernam',
    name: { en: 'Kolej Komuniti Sabak Bernam', zh: 'Kolej Komuniti Sabak Bernam' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kksabakbernam.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-tanjong-karang',
    name: { en: 'Kolej Komuniti Tanjong Karang', zh: 'Kolej Komuniti Tanjong Karang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kktanjongkarang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-hulu-selangor',
    name: { en: 'Kolej Komuniti Hulu Selangor', zh: 'Kolej Komuniti Hulu Selangor' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kktanjongkarang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-selayang',
    name: { en: 'Kolej Komuniti Selayang', zh: 'Kolej Komuniti Selayang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kkselayang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kuala-langat',
    name: { en: 'Kolej Komuniti Kuala Langat', zh: 'Kolej Komuniti Kuala Langat' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kkkualalangat.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-sepang-kolej-induk-kolej-komuniti-kuala-langat',
    name: { en: 'Kolej Komuniti Cawangan Sepang (Kolej Induk – Kolej Komuniti Kuala Langat)', zh: 'Kolej Komuniti Cawangan Sepang (Kolej Induk – Kolej Komuniti Kuala Langat)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-klang',
    name: { en: 'Kolej Komuniti Klang', zh: 'Kolej Komuniti Klang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kkklang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-hulu-langat',
    name: { en: 'Kolej Komuniti Hulu Langat', zh: 'Kolej Komuniti Hulu Langat' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kkhululangat.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-shah-alam',
    name: { en: 'Kolej Komuniti Shah Alam', zh: 'Kolej Komuniti Shah Alam' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kkshahalam.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-ampang',
    name: { en: 'Kolej Komuniti Ampang', zh: 'Kolej Komuniti Ampang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kkampang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kelana-jaya',
    name: { en: 'Kolej Komuniti Kelana Jaya', zh: 'Kolej Komuniti Kelana Jaya' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Selangor',
    website: 'https://kkkelanajaya.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-jempol',
    name: { en: 'Kolej Komuniti Jempol', zh: 'Kolej Komuniti Jempol' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Negeri Sembilan',
    website: 'https://kkjempol.mypolycc.edu.my/v1/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-jelebu',
    name: { en: 'Kolej Komuniti Jelebu', zh: 'Kolej Komuniti Jelebu' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Negeri Sembilan',
    website: 'https://kkjelebu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-tampin',
    name: { en: 'Kolej Komuniti Tampin', zh: 'Kolej Komuniti Tampin' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Negeri Sembilan',
    website: 'https://kktampin.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-rembau',
    name: { en: 'Kolej Komuniti Rembau', zh: 'Kolej Komuniti Rembau' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Negeri Sembilan',
    website: 'https://kkrembau.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kuala-pilah',
    name: { en: 'Kolej Komuniti Kuala Pilah', zh: 'Kolej Komuniti Kuala Pilah' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Negeri Sembilan',
    website: 'https://kkkualapilah.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-masjid-tanah',
    name: { en: 'Kolej Komuniti Masjid Tanah', zh: 'Kolej Komuniti Masjid Tanah' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Melaka',
    website: 'https://kkmasjidtanah.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-tangga-batu',
    name: { en: 'Kolej Komuniti Tangga Batu', zh: 'Kolej Komuniti Tangga Batu' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Melaka',
    website: 'http://kktanggabatu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-selandar',
    name: { en: 'Kolej Komuniti Selandar', zh: 'Kolej Komuniti Selandar' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Melaka',
    website: 'https://kkselandar.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bukit-beruang',
    name: { en: 'Kolej Komuniti Bukit Beruang', zh: 'Kolej Komuniti Bukit Beruang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Melaka',
    website: 'http://kkbukitberuang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kota-melaka',
    name: { en: 'Kolej Komuniti Kota Melaka', zh: 'Kolej Komuniti Kota Melaka' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Melaka',
    website: 'http://kkotamelaka.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-jasin',
    name: { en: 'Kolej Komuniti Jasin', zh: 'Kolej Komuniti Jasin' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Melaka',
    website: 'https://kkjasin.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-ledang',
    name: { en: 'Kolej Komuniti Ledang', zh: 'Kolej Komuniti Ledang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'http://www.kklej.edu.my/v3/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-pagoh',
    name: { en: 'Kolej Komuniti Pagoh', zh: 'Kolej Komuniti Pagoh' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkpagoh.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-muar',
    name: { en: 'Kolej Komuniti Muar', zh: 'Kolej Komuniti Muar' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkmuar.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-segamat',
    name: { en: 'Kolej Komuniti Segamat', zh: 'Kolej Komuniti Segamat' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kksegamat.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-segamat-2',
    name: { en: 'Kolej Komuniti Segamat 2', zh: 'Kolej Komuniti Segamat 2' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kksegamat2.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bandar-penawar',
    name: { en: 'Kolej Komuniti Bandar Penawar', zh: 'Kolej Komuniti Bandar Penawar' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkbandarpenawar.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bandar-tenggara',
    name: { en: 'Kolej Komuniti Bandar Tenggara', zh: 'Kolej Komuniti Bandar Tenggara' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkbandartenggara.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-pasir-gudang',
    name: { en: 'Kolej Komuniti Pasir Gudang', zh: 'Kolej Komuniti Pasir Gudang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkpasirgudang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-tanjung-piai',
    name: { en: 'Kolej Komuniti Tanjung Piai', zh: 'Kolej Komuniti Tanjung Piai' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kktanjungpiai.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kota-tinggi',
    name: { en: 'Kolej Komuniti Kota Tinggi', zh: 'Kolej Komuniti Kota Tinggi' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkkotatinggi.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-batu-pahat',
    name: { en: 'Kolej Komuniti Batu Pahat', zh: 'Kolej Komuniti Batu Pahat' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkbatupahat.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kluang',
    name: { en: 'Kolej Komuniti Kluang', zh: 'Kolej Komuniti Kluang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkkluang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-simpang-renggam',
    name: { en: 'Kolej Komuniti Simpang Renggam', zh: 'Kolej Komuniti Simpang Renggam' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-gelang-patah-kolej-induk-kolej-komuniti-bandar-penawar',
    name: { en: 'Kolej Komuniti Cawangan Gelang Patah (Kolej Induk – Kolej Komuniti Bandar Penawar)', zh: 'Kolej Komuniti Cawangan Gelang Patah (Kolej Induk – Kolej Komuniti Bandar Penawar)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Johor',
    website: 'https://kkgelangpatah.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-rompin',
    name: { en: 'Kolej Komuniti Rompin', zh: 'Kolej Komuniti Rompin' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kkrompin.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bentong',
    name: { en: 'Kolej Komuniti Bentong', zh: 'Kolej Komuniti Bentong' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kkbentong.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-raub',
    name: { en: 'Kolej Komuniti Raub', zh: 'Kolej Komuniti Raub' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kkraub.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-temerloh',
    name: { en: 'Kolej Komuniti Temerloh', zh: 'Kolej Komuniti Temerloh' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kktemerloh.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-bera',
    name: { en: 'Kolej Komuniti Bera', zh: 'Kolej Komuniti Bera' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'http://kbera.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-lipis',
    name: { en: 'Kolej Komuniti Lipis', zh: 'Kolej Komuniti Lipis' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kklipis.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kuantan',
    name: { en: 'Kolej Komuniti Kuantan', zh: 'Kolej Komuniti Kuantan' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kkkuantan.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-paya-besar',
    name: { en: 'Kolej Komuniti Paya Besar', zh: 'Kolej Komuniti Paya Besar' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kkpayabesar.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-pekan',
    name: { en: 'Kolej Komuniti Pekan', zh: 'Kolej Komuniti Pekan' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kkpekan.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-jerantut',
    name: { en: 'Kolej Komuniti Jerantut', zh: 'Kolej Komuniti Jerantut' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: 'https://kkjerantut.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-maran-kolej-induk-kolej-komuniti-paya-besar',
    name: { en: 'Kolej Komuniti Cawangan Maran (Kolej Induk – Kolej Komuniti Paya Besar)', zh: 'Kolej Komuniti Cawangan Maran (Kolej Induk – Kolej Komuniti Paya Besar)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Pahang',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kuala-terengganu',
    name: { en: 'Kolej Komuniti Kuala Terengganu', zh: 'Kolej Komuniti Kuala Terengganu' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://kkkualaterengganu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kemaman',
    name: { en: 'Kolej Komuniti Kemaman', zh: 'Kolej Komuniti Kemaman' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://kkkemaman.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-besut',
    name: { en: 'Kolej Komuniti Besut', zh: 'Kolej Komuniti Besut' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://kkbesut.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-hulu-terengganu-kolej-induk-kolej-komuniti-kuala-terengganu',
    name: { en: 'Kolej Komuniti Cawangan Hulu Terengganu (Kolej Induk – Kolej Komuniti Kuala Terengganu)', zh: 'Kolej Komuniti Cawangan Hulu Terengganu (Kolej Induk – Kolej Komuniti Kuala Terengganu)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://kkhuluterengganu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-kuala-nerus',
    name: { en: 'Kolej Komuniti Cawangan Kuala Nerus', zh: 'Kolej Komuniti Cawangan Kuala Nerus' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://kkkualanerus.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-setiu-kolej-induk-kolej-komuniti-kuala-terengganu',
    name: { en: 'Kolej Komuniti Cawangan Setiu (Kolej Induk – Kolej Komuniti Kuala Terengganu)', zh: 'Kolej Komuniti Cawangan Setiu (Kolej Induk – Kolej Komuniti Kuala Terengganu)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Terengganu',
    website: 'https://kksetiu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-pasir-mas',
    name: { en: 'Kolej Komuniti Pasir Mas', zh: 'Kolej Komuniti Pasir Mas' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kelantan',
    website: 'https://kkpasirmas.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-rantau-panjang-kolej-induk-kolej-komuniti-pasir-mas',
    name: { en: 'Kolej Komuniti Cawangan Rantau Panjang (Kolej Induk – Kolej Komuniti Pasir Mas)', zh: 'Kolej Komuniti Cawangan Rantau Panjang (Kolej Induk – Kolej Komuniti Pasir Mas)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kelantan',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-jeli',
    name: { en: 'Kolej Komuniti Jeli', zh: 'Kolej Komuniti Jeli' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kelantan',
    website: 'https://kkjeli.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-tanah-merah-kolej-induk-kolej-komuniti-jeli',
    name: { en: 'Kolej Komuniti Cawangan Tanah Merah (Kolej Induk – Kolej Komuniti Jeli)', zh: 'Kolej Komuniti Cawangan Tanah Merah (Kolej Induk – Kolej Komuniti Jeli)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kelantan',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kok-lanas',
    name: { en: 'Kolej Komuniti Kok Lanas', zh: 'Kolej Komuniti Kok Lanas' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Kelantan',
    website: 'https://kkkoklanas.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kuching',
    name: { en: 'Kolej Komuniti Kuching', zh: 'Kolej Komuniti Kuching' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'https://kkkuching.mypolycc.edu.my/v1/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-mas-gading',
    name: { en: 'Kolej Komuniti Mas Gading', zh: 'Kolej Komuniti Mas Gading' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'https://kkmasgading.mypolycc.edu.my/v1/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-miri',
    name: { en: 'Kolej Komuniti Miri', zh: 'Kolej Komuniti Miri' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'https://kkmiri.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-betong',
    name: { en: 'Kolej Komuniti Betong', zh: 'Kolej Komuniti Betong' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'http://kkbetong.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-santubong',
    name: { en: 'Kolej Komuniti Santubong', zh: 'Kolej Komuniti Santubong' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'https://kksantubong.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-sarikei',
    name: { en: 'Kolej Komuniti Sarikei', zh: 'Kolej Komuniti Sarikei' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: 'https://kksarikei.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-cawangan-sibu-kolej-induk-kolej-komuniti-sarikei',
    name: { en: 'Kolej Komuniti Cawangan Sibu (Kolej Induk – Kolej Komuniti Sarikei)', zh: 'Kolej Komuniti Cawangan Sibu (Kolej Induk – Kolej Komuniti Sarikei)' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sarawak',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-tawau',
    name: { en: 'Kolej Komuniti Tawau', zh: 'Kolej Komuniti Tawau' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'http://kktawau.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-semporna',
    name: { en: 'Kolej Komuniti Semporna', zh: 'Kolej Komuniti Semporna' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://kksemporna.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-lahad-datu',
    name: { en: 'Kolej Komuniti Lahad Datu', zh: 'Kolej Komuniti Lahad Datu' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://kklahaddatu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-sandakan',
    name: { en: 'Kolej Komuniti Sandakan', zh: 'Kolej Komuniti Sandakan' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://kksandakan.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-tambunan',
    name: { en: 'Kolej Komuniti Tambunan', zh: 'Kolej Komuniti Tambunan' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://kktambunan.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-beaufort',
    name: { en: 'Kolej Komuniti Beaufort', zh: 'Kolej Komuniti Beaufort' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://kkbeaufort.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-penampang',
    name: { en: 'Kolej Komuniti Penampang', zh: 'Kolej Komuniti Penampang' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'https://kkpenampang.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-kota-marudu',
    name: { en: 'Kolej Komuniti Kota Marudu', zh: 'Kolej Komuniti Kota Marudu' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: 'http://kkkotamarudu.mypolycc.edu.my/',
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  },
  {
    id: 'cc-kolej-komuniti-papar',
    name: { en: 'Kolej Komuniti Papar', zh: 'Kolej Komuniti Papar' },
    abbreviation: '',
    type: 'Community College',
    country: "Malaysia",
    studyLocation: "domestic",
    ownership: "public",
    state: 'Sabah',
    website: null,
    institutionIds: [],
    campuses: [],
    dataStatus: "directory",
    source: 'https://www.mohe.gov.my/muat-turun?id=52&view=category',
    lastVerified: null
  }
];


/* =========================================================
   7. INSTITUTION TYPES
   ========================================================= */

export const institutionTypes = [
  { id: "public-university", name: { en: "Public Universities", zh: "公立大学" } },
  { id: "private-university", name: { en: "Private Universities", zh: "私立大学" } },
  { id: "foreign-branch", name: { en: "Foreign Branch Campuses", zh: "外国大学分校" } },
  { id: "university-college", name: { en: "University Colleges", zh: "大学学院" } },
  { id: "private-college", name: { en: "Private Colleges", zh: "私立学院" } },
  { id: "polytechnic", name: { en: "Polytechnics", zh: "理工学院" } },
  { id: "community-college", name: { en: "Community Colleges", zh: "社区学院" } },
  { id: "tvet", name: { en: "TVET Institutions", zh: "技术与职业教育机构" } },
  { id: "healthcare-training", name: { en: "Healthcare Training Institutions", zh: "医疗培训机构" } },
  { id: "government-training", name: { en: "Government Training Institutions", zh: "政府培训机构" } }
];


/* =========================================================
   8. CAREERS
   职业数据库
   ========================================================= */

export const careers = [
  {
    id: "civil-engineer",
    name: { en: "Civil Engineer", zh: "土木工程师" },
    fieldId: "engineering",
    disciplineId: "civil-engineering",
    description: {
      en: "Plans, designs and supervises civil infrastructure projects.",
      zh: "规划、设计及监督土木基础设施项目。"
    },
    responsibilities: {
      en: [
        "Infrastructure design",
        "Engineering calculations",
        "Project coordination",
        "Construction supervision"
      ],
      zh: [
        "基础设施设计",
        "工程计算",
        "项目协调",
        "施工监督"
      ]
    },
    qualificationLevels: ["Bachelor", "Master"],
    professionalRequirements: ["bem"],
    dataStatus: "illustrative"
  },
  {
    id: "mechanical-engineer",
    name: { en: "Mechanical Engineer", zh: "机械工程师" },
    fieldId: "engineering",
    disciplineId: "mechanical-engineering",
    description: {
      en: "Designs, develops and maintains mechanical equipment and systems.",
      zh: "设计、开发与维护机械设备及系统。"
    },
    responsibilities: {
      en: [
        "Mechanical system design",
        "Testing and development",
        "Manufacturing support",
        "Maintenance planning"
      ],
      zh: [
        "机械系统设计",
        "测试与开发",
        "制造支持",
        "维护规划"
      ]
    },
    qualificationLevels: ["Bachelor", "Master"],
    professionalRequirements: ["bem"],
    dataStatus: "illustrative"
  },
  {
    id: "quantity-surveyor",
    name: { en: "Quantity Surveyor", zh: "工料测量师" },
    fieldId: "architecture-built-environment",
    disciplineId: "quantity-surveying",
    description: {
      en: "Manages construction costs, quantities, procurement and contracts.",
      zh: "管理建筑成本、工程量、采购与合约。"
    },
    responsibilities: {
      en: [
        "Cost estimation",
        "Quantity measurement",
        "Tender documentation",
        "Contract administration"
      ],
      zh: [
        "成本估算",
        "工程量计算",
        "招标文件",
        "合约管理"
      ]
    },
    qualificationLevels: ["Diploma", "Bachelor", "Master"],
    professionalRequirements: ["bqsm"],
    dataStatus: "illustrative"
  },
  {
    id: "medical-laboratory-scientist",
    name: { en: "Medical Laboratory Scientist", zh: "医学检验科学人员" },
    fieldId: "medicine-health",
    disciplineId: "medical-laboratory-science",
    description: {
      en: "Conducts laboratory investigations to support clinical diagnosis.",
      zh: "进行医学实验室检验，协助临床诊断。"
    },
    responsibilities: {
      en: [
        "Laboratory testing",
        "Specimen analysis",
        "Quality control",
        "Laboratory reporting"
      ],
      zh: [
        "实验室检验",
        "样本分析",
        "质量控制",
        "实验室报告"
      ]
    },
    qualificationLevels: ["Diploma", "Bachelor", "Master"],
    professionalRequirements: [],
    dataStatus: "illustrative"
  },
  {
    id: "ai-engineer",
    name: { en: "AI Engineer", zh: "人工智能工程师" },
    fieldId: "computer-technology",
    disciplineId: "artificial-intelligence",
    description: {
      en: "Develops and integrates artificial intelligence systems and applications.",
      zh: "开发并整合人工智能系统与应用。"
    },
    responsibilities: {
      en: [
        "Machine learning development",
        "AI model integration",
        "Data preparation",
        "System testing"
      ],
      zh: [
        "机器学习开发",
        "AI 模型整合",
        "数据准备",
        "系统测试"
      ]
    },
    qualificationLevels: ["Bachelor", "Master", "PhD"],
    professionalRequirements: [],
    dataStatus: "illustrative"
  },
  {
    id: "medical-doctor",
    name: { en: "Medical Doctor", zh: "医生" },
    fieldId: "medicine-health",
    disciplineId: "medicine",
    description: {
      en: "Assesses patients, diagnoses conditions and provides medical care.",
      zh: "评估病人、诊断疾病并提供医疗服务。"
    },
    responsibilities: {
      en: [
        "Patient assessment",
        "Clinical diagnosis",
        "Treatment planning",
        "Patient care"
      ],
      zh: [
        "病人评估",
        "临床诊断",
        "治疗规划",
        "病人照护"
      ]
    },
    qualificationLevels: ["Bachelor", "Postgraduate"],
    professionalRequirements: ["mmc"],
    dataStatus: "illustrative"
  }
];


/* =========================================================
   9. PROFESSIONAL REQUIREMENTS
   专业机构与资格
   ========================================================= */

export const professionalRequirements = [
  {
    id: "bem",
    name: {
      en: "Board of Engineers Malaysia",
      zh: "马来西亚工程师局"
    },
    abbreviation: "BEM",
    fields: ["engineering"],
    website: "https://bem.org.my/",
    description: {
      en: "Regulates engineering registration and related professional matters in Malaysia.",
      zh: "负责马来西亚工程师注册及相关专业事务。"
    },
    requirements: [],
    dataStatus: "directory",
    note: "Check the applicable registration category and recognised programme requirements."
  },
  {
    id: "bqsm",
    name: {
      en: "Board of Quantity Surveyors Malaysia",
      zh: "马来西亚工料测量师局"
    },
    abbreviation: "BQSM",
    fields: ["architecture-built-environment"],
    website: "https://www.bqsm.gov.my/",
    description: {
      en: "Regulates quantity surveying professional registration in Malaysia.",
      zh: "负责马来西亚工料测量专业注册事务。"
    },
    requirements: [],
    dataStatus: "directory",
    note: "Professional registration requirements must be checked with BQSM."
  },
  {
    id: "mmc",
    name: {
      en: "Malaysian Medical Council",
      zh: "马来西亚医药理事会"
    },
    abbreviation: "MMC",
    fields: ["medicine-health"],
    website: "https://mmc.gov.my/",
    description: {
      en: "Regulates medical practitioner registration and professional matters.",
      zh: "负责医生注册及专业监管事务。"
    },
    requirements: [],
    dataStatus: "directory",
    note: "A medical degree does not automatically mean a person is registered to practise."
  },
  {
    id: "mia",
    name: {
      en: "Malaysian Institute of Accountants",
      zh: "马来西亚会计师协会"
    },
    abbreviation: "MIA",
    fields: ["business"],
    website: "https://mia.org.my/",
    description: {
      en: "Regulates and supports the accounting profession in Malaysia.",
      zh: "负责马来西亚会计专业相关监管与发展。"
    },
    requirements: [],
    dataStatus: "directory",
    note: "Membership and professional recognition depend on applicable requirements."
  }
];


/* =========================================================
   10. STUDY PATHWAYS
   升学路线资料
   ========================================================= */

export const studyPathways = [
  {
    id: "spm-to-diploma",
    name: {
      en: "SPM to Diploma",
      zh: "SPM 升读文凭"
    },
    category: "local",
    startQualification: "SPM",
    endQualification: "Diploma",
    country: "Malaysia",
    steps: [
      { qualification: "SPM", duration: null },
      { qualification: "Diploma", duration: "2–3 years" }
    ],
    description: {
      en: "A common route into applied, technical and professional study.",
      zh: "进入应用型、技术型及专业课程的常见路线。"
    },
    dataStatus: "illustrative"
  },
  {
    id: "spm-to-foundation",
    name: {
      en: "SPM to Foundation to Bachelor",
      zh: "SPM → Foundation → 学士"
    },
    category: "local",
    startQualification: "SPM",
    endQualification: "Bachelor",
    country: "Malaysia",
    steps: [
      { qualification: "SPM", duration: null },
      { qualification: "Foundation", duration: "1 year" },
      { qualification: "Bachelor", duration: "3–4 years" }
    ],
    description: {
      en: "A pre-university route designed to prepare students for a related degree.",
      zh: "通过大学预科为相关学士课程作准备。"
    },
    dataStatus: "illustrative"
  },
  {
    id: "spm-to-stpm",
    name: {
      en: "SPM to STPM to Bachelor",
      zh: "SPM → STPM → 学士"
    },
    category: "local",
    startQualification: "SPM",
    endQualification: "Bachelor",
    country: "Malaysia",
    steps: [
      { qualification: "SPM", duration: null },
      { qualification: "STPM", duration: "Approximately 1.5 years" },
      { qualification: "Bachelor", duration: "3–4 years" }
    ],
    description: {
      en: "An academic pre-university route recognised by many institutions.",
      zh: "受许多院校认可的学术型大学预科路线。"
    },
    dataStatus: "illustrative"
  },
  {
    id: "diploma-to-bachelor",
    name: {
      en: "Diploma to Bachelor",
      zh: "文凭升读学士"
    },
    category: "progression",
    startQualification: "Diploma",
    endQualification: "Bachelor",
    country: "Malaysia",
    steps: [
      { qualification: "Diploma", duration: null },
      { qualification: "Bachelor", duration: "Usually 2–3 years, depending on credit transfer" }
    ],
    description: {
      en: "Diploma holders may apply for related degrees. Credit transfer is subject to university assessment.",
      zh: "文凭毕业生可申请相关学士课程，学分转移须由大学评估。"
    },
    dataStatus: "illustrative"
  },
  {
    id: "bachelor-to-master",
    name: {
      en: "Bachelor to Master",
      zh: "学士升读硕士"
    },
    category: "postgraduate",
    startQualification: "Bachelor",
    endQualification: "Master",
    country: "Malaysia",
    steps: [
      { qualification: "Bachelor", duration: null },
      { qualification: "Master", duration: "1–2 years, depending on programme" }
    ],
    description: {
      en: "Postgraduate study for advanced knowledge, specialisation or research.",
      zh: "通过研究生课程深化专业知识、专门领域或研究能力。"
    },
    dataStatus: "illustrative"
  },
  {
    id: "master-to-phd",
    name: {
      en: "Master to PhD",
      zh: "硕士升读博士"
    },
    category: "postgraduate",
    startQualification: "Master",
    endQualification: "PhD",
    country: "Malaysia",
    steps: [
      { qualification: "Master", duration: null },
      { qualification: "PhD", duration: "Usually 3–5 years, depending on research and institution" }
    ],
    description: {
      en: "A research-focused route for advanced academic and specialist development.",
      zh: "以研究为主的进阶路线，培养高级学术与专业能力。"
    },
    dataStatus: "illustrative"
  }
];


/* =========================================================
   11. DISCOVERY QUESTIONS
   80-QUESTION EXPLORATION STRUCTURE
   72 RIASEC + 3 INTERESTS + 5 PLANNING
   ========================================================= */

const riasecItems = [
  ["R", "Realistic", "现实型", "I enjoy building or repairing things.", "我喜欢制作或修理东西。"],
  ["R", "Realistic", "现实型", "I like working with tools and equipment.", "我喜欢使用工具与设备。"],
  ["R", "Realistic", "现实型", "I enjoy practical technical tasks.", "我喜欢实际的技术工作。"],
  ["R", "Realistic", "现实型", "I like understanding how machines work.", "我喜欢了解机器如何运作。"],
  ["R", "Realistic", "现实型", "I enjoy outdoor or field activities.", "我喜欢户外或实地活动。"],
  ["R", "Realistic", "现实型", "I prefer hands-on learning.", "我比较喜欢动手学习。"],
  ["R", "Realistic", "现实型", "I like designing physical objects.", "我喜欢设计实体物品。"],
  ["R", "Realistic", "现实型", "I enjoy solving practical problems.", "我喜欢解决实际问题。"],
  ["R", "Realistic", "现实型", "I like working with engineering systems.", "我喜欢接触工程系统。"],
  ["R", "Realistic", "现实型", "I enjoy making or improving products.", "我喜欢制作或改进产品。"],
  ["R", "Realistic", "现实型", "I like learning technical skills.", "我喜欢学习技术技能。"],
  ["R", "Realistic", "现实型", "I enjoy seeing a project become a real object.", "我喜欢看到项目变成真实的成果。"],

  ["I", "Investigative", "研究型", "I enjoy investigating difficult questions.", "我喜欢研究复杂的问题。"],
  ["I", "Investigative", "研究型", "I like understanding how the human body works.", "我喜欢了解人体如何运作。"],
  ["I", "Investigative", "研究型", "I enjoy scientific experiments.", "我喜欢科学实验。"],
  ["I", "Investigative", "研究型", "I like analysing information and evidence.", "我喜欢分析资料与证据。"],
  ["I", "Investigative", "研究型", "I enjoy studying biology or medicine.", "我喜欢研究生物或医学。"],
  ["I", "Investigative", "研究型", "I like exploring new technologies.", "我喜欢探索新科技。"],
  ["I", "Investigative", "研究型", "I enjoy solving mathematical problems.", "我喜欢解决数学问题。"],
  ["I", "Investigative", "研究型", "I like finding out why something happens.", "我喜欢研究事情发生的原因。"],
  ["I", "Investigative", "研究型", "I enjoy reading research or scientific articles.", "我喜欢阅读研究或科学文章。"],
  ["I", "Investigative", "研究型", "I like observing human behaviour.", "我喜欢观察人类行为。"],
  ["I", "Investigative", "研究型", "I enjoy working with data.", "我喜欢处理数据。"],
  ["I", "Investigative", "研究型", "I like discovering information that others may overlook.", "我喜欢发现别人可能忽略的信息。"],

  ["A", "Artistic", "艺术型", "I enjoy creating original ideas.", "我喜欢创造原创想法。"],
  ["A", "Artistic", "艺术型", "I like visual design.", "我喜欢视觉设计。"],
  ["A", "Artistic", "艺术型", "I enjoy photography or video production.", "我喜欢摄影或视频制作。"],
  ["A", "Artistic", "艺术型", "I like expressing ideas creatively.", "我喜欢用创意表达想法。"],
  ["A", "Artistic", "艺术型", "I enjoy designing websites or digital interfaces.", "我喜欢设计网站或数字界面。"],
  ["A", "Artistic", "艺术型", "I like writing stories or articles.", "我喜欢写故事或文章。"],
  ["A", "Artistic", "艺术型", "I enjoy exploring different art styles.", "我喜欢探索不同艺术风格。"],
  ["A", "Artistic", "艺术型", "I like developing creative projects.", "我喜欢开发创意项目。"],
  ["A", "Artistic", "艺术型", "I enjoy creating presentations.", "我喜欢制作演示作品。"],
  ["A", "Artistic", "艺术型", "I like experimenting with new visual ideas.", "我喜欢尝试新的视觉想法。"],
  ["A", "Artistic", "艺术型", "I enjoy making things look and feel better.", "我喜欢改善事物的视觉与体验。"],
  ["A", "Artistic", "艺术型", "I like combining technology and creativity.", "我喜欢结合科技与创意。"],

  ["S", "Social", "社会型", "I enjoy helping people learn.", "我喜欢帮助别人学习。"],
  ["S", "Social", "社会型", "I like supporting people who need assistance.", "我喜欢帮助有需要的人。"],
  ["S", "Social", "社会型", "I enjoy explaining difficult ideas.", "我喜欢解释复杂的概念。"],
  ["S", "Social", "社会型", "I like understanding other people's feelings.", "我喜欢理解别人的感受。"],
  ["S", "Social", "社会型", "I enjoy working in a team.", "我喜欢团队合作。"],
  ["S", "Social", "社会型", "I like contributing to community projects.", "我喜欢参与社区项目。"],
  ["S", "Social", "社会型", "I enjoy teaching or mentoring others.", "我喜欢教导或指导别人。"],
  ["S", "Social", "社会型", "I like solving problems that affect society.", "我喜欢解决影响社会的问题。"],
  ["S", "Social", "社会型", "I enjoy communicating with different people.", "我喜欢与不同的人交流。"],
  ["S", "Social", "社会型", "I like working in healthcare or education.", "我喜欢医疗或教育领域。"],
  ["S", "Social", "社会型", "I enjoy listening to people's experiences.", "我喜欢聆听别人的经历。"],
  ["S", "Social", "社会型", "I like making a positive difference.", "我喜欢为他人带来正面改变。"],

  ["E", "Enterprising", "企业型", "I enjoy leading a project.", "我喜欢带领项目。"],
  ["E", "Enterprising", "企业型", "I like presenting ideas to others.", "我喜欢向别人展示想法。"],
  ["E", "Enterprising", "企业型", "I enjoy organising people and activities.", "我喜欢组织人员与活动。"],
  ["E", "Enterprising", "企业型", "I like making decisions.", "我喜欢作出决定。"],
  ["E", "Enterprising", "企业型", "I enjoy developing business ideas.", "我喜欢发展商业想法。"],
  ["E", "Enterprising", "企业型", "I like negotiating and persuading.", "我喜欢协商与说服。"],
  ["E", "Enterprising", "企业型", "I enjoy taking responsibility.", "我喜欢承担责任。"],
  ["E", "Enterprising", "企业型", "I like planning projects.", "我喜欢规划项目。"],
  ["E", "Enterprising", "企业型", "I enjoy setting goals and achieving them.", "我喜欢设定目标并完成目标。"],
  ["E", "Enterprising", "企业型", "I like exploring opportunities.", "我喜欢探索机会。"],
  ["E", "Enterprising", "企业型", "I enjoy coordinating a team.", "我喜欢协调团队。"],
  ["E", "Enterprising", "企业型", "I like turning ideas into action.", "我喜欢把想法付诸行动。"],

  ["C", "Conventional", "事务型", "I enjoy organising information.", "我喜欢整理资料。"],
  ["C", "Conventional", "事务型", "I like working with structured systems.", "我喜欢使用有系统的流程。"],
  ["C", "Conventional", "事务型", "I enjoy checking details for accuracy.", "我喜欢检查细节是否准确。"],
  ["C", "Conventional", "事务型", "I like working with spreadsheets or databases.", "我喜欢使用电子表格或数据库。"],
  ["C", "Conventional", "事务型", "I enjoy following clear procedures.", "我喜欢按照清楚的程序工作。"],
  ["C", "Conventional", "事务型", "I like planning and scheduling tasks.", "我喜欢安排任务与时间。"],
  ["C", "Conventional", "事务型", "I enjoy keeping records organised.", "我喜欢保持记录整齐。"],
  ["C", "Conventional", "事务型", "I like comparing information carefully.", "我喜欢仔细比较资料。"],
  ["C", "Conventional", "事务型", "I enjoy managing documents.", "我喜欢管理文件。"],
  ["C", "Conventional", "事务型", "I like making sure tasks are completed properly.", "我喜欢确保工作正确完成。"],
  ["C", "Conventional", "事务型", "I enjoy working with numbers.", "我喜欢处理数字。"],
  ["C", "Conventional", "事务型", "I like improving an organised process.", "我喜欢改善有系统的流程。"]
];

export const discoveryQuestions = [
  ...riasecItems.map((item, index) => ({
    id: `riasec-${index + 1}`,
    section: "riasec",
    type: "rating",
    category: item[0],
    categoryName: {
      en: item[1],
      zh: item[2]
    },
    question: {
      en: item[3],
      zh: item[4]
    },
    options: [1, 2, 3, 4, 5]
  })),

  {
    id: "interest-1",
    section: "development-interest",
    type: "multi-select",
    question: {
      en: "Which areas would you like to explore further?",
      zh: "你想进一步探索哪些领域？"
    },
    options: [
      "Medicine & Healthcare",
      "Engineering",
      "Artificial Intelligence",
      "Biology & Biotechnology",
      "Business",
      "Science & Research",
      "Design & Creative Arts",
      "Social Sciences",
      "Architecture & Construction",
      "Education"
    ]
  },
  {
    id: "interest-2",
    section: "development-interest",
    type: "multi-select",
    question: {
      en: "Which activities interest you most?",
      zh: "以下哪些活动最吸引你？"
    },
    options: [
      "Solving difficult problems",
      "Building something useful",
      "Helping people",
      "Discovering new information",
      "Creating something original",
      "Understanding human behaviour",
      "Working with technology",
      "Conducting experiments"
    ]
  },
  {
    id: "interest-3",
    section: "development-interest",
    type: "multi-select",
    question: {
      en: "Which learning environments appeal to you?",
      zh: "你比较喜欢在哪种环境学习？"
    },
    options: [
      "Laboratory",
      "Hospital or healthcare setting",
      "Engineering workshop",
      "Office or business environment",
      "Research centre",
      "Construction site",
      "Technology company",
      "Creative studio",
      "Outdoor or field environment"
    ]
  },

  {
    id: "planning-1",
    section: "study-planning",
    type: "multi-select",
    question: {
      en: "What is your current education level?",
      zh: "你目前具备哪些学历或升学资格？"
    },
    hint: {
      en: "Select all that apply. You may hold more than one qualification.",
      zh: "可选择所有符合的选项，你可以同时拥有多种学历或考试资格。"
    },
    options: [
      "SPM",
      "UEC",
      "STPM",
      "A-Level",
      "IB Diploma",
      "Matriculation",
      "Foundation",
      "Certificate",
      "Diploma",
      "Bachelor",
      "Master",
      "PhD",
      "Other"
    ]
  },
  {
    id: "planning-2",
    section: "study-planning",
    type: "single-select",
    question: {
      en: "Which qualification are you aiming for?",
      zh: "你希望取得什么学历？"
    },
    options: [
      "Certificate",
      "Foundation",
      "Diploma",
      "Bachelor",
      "Master",
      "PhD",
      "Not sure yet"
    ]
  },
  {
    id: "planning-3",
    section: "study-planning",
    type: "single-select",
    question: {
      en: "Where would you prefer to study?",
      zh: "你希望在哪里升学？"
    },
    options: [
      "Malaysia",
      "Singapore",
      "United Kingdom",
      "Australia",
      "United States",
      "Other countries",
      "Open to options"
    ]
  },
  {
    id: "planning-4",
    section: "study-planning",
    type: "single-select",
    question: {
      en: "What is your preferred study budget?",
      zh: "你的升学预算是多少？"
    },
    options: [
      "Below RM 10,000",
      "RM 10,000–30,000",
      "RM 30,000–60,000",
      "RM 60,000–100,000",
      "Above RM 100,000",
      "Not sure"
    ]
  },
  {
    id: "planning-5",
    section: "study-planning",
    type: "single-select",
    question: {
      en: "What matters most when choosing a course?",
      zh: "选择科系时，你最重视什么？"
    },
    options: [
      "Career opportunities",
      "Future industry growth",
      "Personal interest",
      "Affordable study fees",
      "Professional recognition",
      "International opportunities",
      "Practical skills",
      "Research opportunities"
    ]
  }
];


/* =========================================================
   12. QUALIFICATION LEVELS
   ========================================================= */

export const qualificationLevels = [
  {
    id: "certificate",
    name: { en: "Certificate", zh: "证书课程" },
    order: 1
  },
  {
    id: "foundation",
    name: { en: "Foundation", zh: "大学预科" },
    order: 2
  },
  {
    id: "diploma",
    name: { en: "Diploma", zh: "文凭" },
    order: 3
  },
  {
    id: "advanced-diploma",
    name: { en: "Advanced Diploma", zh: "高级文凭" },
    order: 4
  },
  {
    id: "bachelor",
    name: { en: "Bachelor", zh: "学士" },
    order: 5
  },
  {
    id: "postgraduate-diploma",
    name: { en: "Postgraduate Diploma", zh: "研究生文凭" },
    order: 6
  },
  {
    id: "master",
    name: { en: "Master", zh: "硕士" },
    order: 7
  },
  {
    id: "phd",
    name: { en: "PhD", zh: "博士" },
    order: 8
  }
];


/* =========================================================
   13. DATA STATUS LABELS
   ========================================================= */

export const dataStatusLabels = {
  official: {
    en: "Officially verified",
    zh: "官方资料已核实"
  },
  verified: {
    en: "Verified",
    zh: "已核实"
  },
  directory: {
    en: "Directory entry",
    zh: "院校目录资料"
  },
  illustrative: {
    en: "Illustrative example",
    zh: "示例资料"
  },
  pending: {
    en: "Pending verification",
    zh: "等待核实"
  },
  needsUpdate: {
    en: "Needs update",
    zh: "需要更新"
  }
};


/* =========================================================
   14. DATA HELPERS
   ========================================================= */

export function getLocalized(value, language = "en") {
  if (value === null || value === undefined) return "";

  if (typeof value === "string") return value;

  if (typeof value === "object") {
    return value[language] ?? value.en ?? value.zh ?? "";
  }

  return String(value);
}

export function getFieldById(id) {
  return studyFields.find(item => item.id === id) ?? null;
}

export function getDisciplineById(id) {
  return disciplines.find(item => item.id === id) ?? null;
}

export function getCourseById(id) {
  return courses.find(item => item.id === id) ?? null;
}

export function getInstitutionById(id) {
  return institutions.find(item => item.id === id) ?? null;
}

export function getCareerById(id) {
  return careers.find(item => item.id === id) ?? null;
}

export function getDisciplinesByField(fieldId) {
  return disciplines.filter(item => item.fieldId === fieldId);
}

export function getCoursesByField(fieldId) {
  return courses.filter(item => item.fieldId === fieldId);
}

export function getCoursesByDiscipline(disciplineId) {
  return courses.filter(item => item.disciplineId === disciplineId);
}

export function getCareersByField(fieldId) {
  return careers.filter(item => item.fieldId === fieldId);
}

export function searchStudyDatabase(keyword, language = "en") {
  const term = String(keyword ?? "").trim().toLowerCase();

  if (!term) return [];

  const results = [];

  for (const field of studyFields) {
    const searchable = [
      field.id,
      field.name.en,
      field.name.zh,
      field.description.en,
      field.description.zh
    ].join(" ").toLowerCase();

    if (searchable.includes(term)) {
      results.push({ type: "field", item: field });
    }
  }

  for (const discipline of disciplines) {
    const searchable = [
      discipline.id,
      discipline.name.en,
      discipline.name.zh,
      discipline.description.en,
      discipline.description.zh,
      ...(discipline.keywords ?? [])
    ].join(" ").toLowerCase();

    if (searchable.includes(term)) {
      results.push({ type: "discipline", item: discipline });
    }
  }

  for (const course of courses) {
    const searchable = [
      course.id,
      course.name.en,
      course.name.zh,
      course.qualification,
      course.description.en,
      course.description.zh
    ].join(" ").toLowerCase();

    if (searchable.includes(term)) {
      results.push({ type: "course", item: course });
    }
  }

  for (const institution of institutions) {
    const searchable = [
      institution.id,
      institution.name.en,
      institution.name.zh,
      institution.abbreviation,
      institution.type
    ].join(" ").toLowerCase();

    if (searchable.includes(term)) {
      results.push({ type: "institution", item: institution });
    }
  }

  return results;
}


/* =========================================================
   15. DATABASE SUMMARY
   ========================================================= */

export const databaseSummary = {
  fields: studyFields.length,
  disciplines: disciplines.length,
  courses: courses.length,
  institutions: institutions.length,
  malaysiaInstitutions: institutions.filter(item => item.country === "Malaysia").length,
  internationalInstitutions: institutions.filter(item => item.country !== "Malaysia").length,
  malaysiaPublicUniversities: institutions.filter(item => item.country === "Malaysia" && item.type === "Public University").length,
  malaysiaPrivateInstitutions: institutions.filter(item => item.country === "Malaysia" && item.ownership === "private").length,
  malaysiaForeignBranchCampuses: institutions.filter(item => item.country === "Malaysia" && item.ownership === "foreign-branch").length,
  malaysiaPolytechnics: institutions.filter(item => item.country === "Malaysia" && item.type === "Polytechnic").length,
  malaysiaCommunityColleges: institutions.filter(item => item.country === "Malaysia" && item.type === "Community College").length,
  careers: careers.length,
  professionalRequirements: professionalRequirements.length,
  pathways: studyPathways.length,
  discoveryQuestions: discoveryQuestions.length
};
