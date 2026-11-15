
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
  version: "2.0.0",
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
  careers: careers.length,
  professionalRequirements: professionalRequirements.length,
  pathways: studyPathways.length,
  discoveryQuestions: discoveryQuestions.length
};
