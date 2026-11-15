
/* =========================================================
   FIND YOUR FUTURE
   DATA DATABASE
   Version: 3.0.1
   Malaysia-first | English + Chinese
   ========================================================= */

/* =========================================================
   1. SYSTEM CONFIGURATION
   ========================================================= */

export const APP_CONFIG = {
  name: "Find Your Future",
  version: "3.0.1",
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
    provisional: "Provisional accreditation",
    expired: "Expired",
    discontinued: "Discontinued",
    unavailable: "Unavailable",
    needsUpdate: "Needs update"
  }
};


export const DATA_GOVERNANCE = {
  institutionDirectorySource: "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
  polytechnicDirectorySource: "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
  communityCollegeDirectorySource: "https://www.mohe.gov.my/muat-turun?id=52&view=category",
  china985Source: "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
  china211Source: "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
  taiwanInstitutionSource: "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
  taiwanOverseasJointAdmissionSource: "https://www.overseas.edu.tw/en/university_system/taiwan-university-of-education-system/",
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
    "Directory records are not equivalent to active programme availability or current admissions.",
    "Generated course search seeds are pending records, not verified live offerings.",
    "Course status must be confirmed against MQR, PASP, JPK or the applicable professional regulator.",
    "Scholarship directory links do not guarantee that an award is currently open."
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
    "id": "um",
    "name": {
      "en": "Universiti Malaya",
      "zh": "马来亚大学"
    },
    "abbreviation": "UM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kuala Lumpur",
    "website": "https://www.um.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "ukm",
    "name": {
      "en": "Universiti Kebangsaan Malaysia",
      "zh": "马来西亚国民大学"
    },
    "abbreviation": "UKM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://www.ukm.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "usm",
    "name": {
      "en": "Universiti Sains Malaysia",
      "zh": "马来西亚理科大学"
    },
    "abbreviation": "USM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://www.usm.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "utm",
    "name": {
      "en": "Universiti Teknologi Malaysia",
      "zh": "马来西亚工艺大学"
    },
    "abbreviation": "UTM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://www.utm.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "upm",
    "name": {
      "en": "Universiti Putra Malaysia",
      "zh": "马来西亚博特拉大学"
    },
    "abbreviation": "UPM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://www.upm.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "uitm",
    "name": {
      "en": "Universiti Teknologi MARA",
      "zh": "玛拉工艺大学"
    },
    "abbreviation": "UiTM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://uitm.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "unimas",
    "name": {
      "en": "Universiti Malaysia Sarawak",
      "zh": "马来西亚砂拉越大学"
    },
    "abbreviation": "UNIMAS",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://www.unimas.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "ums",
    "name": {
      "en": "Universiti Malaysia Sabah",
      "zh": "马来西亚沙巴大学"
    },
    "abbreviation": "UMS",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://www.ums.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "taylors",
    "name": {
      "en": "Taylor's University",
      "zh": "泰莱大学"
    },
    "abbreviation": "Taylor's",
    "type": "Private University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://university.taylors.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://university.taylors.edu.my/",
    "lastVerified": null
  },
  {
    "id": "sunway",
    "name": {
      "en": "Sunway University",
      "zh": "双威大学"
    },
    "abbreviation": "Sunway",
    "type": "Private University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://sunwayuniversity.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://sunwayuniversity.edu.my/",
    "lastVerified": null
  },
  {
    "id": "monash-malaysia",
    "name": {
      "en": "Monash University Malaysia",
      "zh": "莫纳什大学马来西亚校区"
    },
    "abbreviation": "Monash Malaysia",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "parentCountry": "Australia",
    "state": "Selangor",
    "website": "https://www.monash.edu.my/",
    "parentUniversity": "Monash University",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.monash.edu.my/",
    "lastVerified": null
  },
  {
    "id": "nottingham-malaysia",
    "name": {
      "en": "University of Nottingham Malaysia",
      "zh": "诺丁汉大学马来西亚校区"
    },
    "abbreviation": "UNM",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "parentCountry": "United Kingdom",
    "state": "Selangor",
    "website": "https://www.nottingham.edu.my/",
    "parentUniversity": "University of Nottingham",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.nottingham.edu.my/",
    "lastVerified": null
  },
  {
    "id": "apu",
    "name": {
      "en": "Asia Pacific University of Technology & Innovation",
      "zh": "亚太科技大学"
    },
    "abbreviation": "APU",
    "type": "Private University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kuala Lumpur",
    "website": "https://www.apu.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.apu.edu.my/",
    "lastVerified": null
  },
  {
    "id": "ucsi",
    "name": {
      "en": "UCSI University",
      "zh": "思特雅大学"
    },
    "abbreviation": "UCSI",
    "type": "Private University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kuala Lumpur",
    "website": "https://www.ucsiuniversity.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.ucsiuniversity.edu.my/",
    "lastVerified": null
  },
  {
    "id": "utar",
    "name": {
      "en": "Universiti Tunku Abdul Rahman",
      "zh": "拉曼大学"
    },
    "abbreviation": "UTAR",
    "type": "Private University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Perak",
    "website": "https://www.utar.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.utar.edu.my/",
    "lastVerified": null
  },
  {
    "id": "utp",
    "name": {
      "en": "Universiti Teknologi PETRONAS",
      "zh": "国油科技大学"
    },
    "abbreviation": "UTP",
    "type": "Private University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Perak",
    "website": "https://www.utp.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.utp.edu.my/",
    "lastVerified": null
  },
  {
    "id": "politeknik-ungku-omar",
    "name": {
      "en": "Politeknik Ungku Omar",
      "zh": "翁姑奥马理工学院"
    },
    "abbreviation": "PUO",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://www.puo.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.puo.edu.my/",
    "lastVerified": null
  },
  {
    "id": "politeknik-ibrahim-sultan",
    "name": {
      "en": "Politeknik Ibrahim Sultan",
      "zh": "易卜拉欣苏丹理工学院"
    },
    "abbreviation": "PIS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://www.pis.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.pis.edu.my/",
    "lastVerified": null
  },
  {
    "id": "uum",
    "name": {
      "en": "Universiti Utara Malaysia",
      "zh": "马来西亚北方大学"
    },
    "abbreviation": "UUM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://www.uum.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "iium",
    "name": {
      "en": "International Islamic University Malaysia",
      "zh": "马来西亚国际伊斯兰大学"
    },
    "abbreviation": "IIUM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://www.iium.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "umpsa",
    "name": {
      "en": "Universiti Malaysia Pahang Al-Sultan Abdullah",
      "zh": "苏丹阿都拉大学"
    },
    "abbreviation": "UMPSA",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://www.umpsa.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "umt",
    "name": {
      "en": "Universiti Malaysia Terengganu",
      "zh": "马来西亚登嘉楼大学"
    },
    "abbreviation": "UMT",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://www.umt.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "unimap",
    "name": {
      "en": "Universiti Malaysia Perlis",
      "zh": "马来西亚玻璃市大学"
    },
    "abbreviation": "UniMAP",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perlis",
    "website": "https://www.unimap.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "upsi",
    "name": {
      "en": "Universiti Pendidikan Sultan Idris",
      "zh": "苏丹依德理斯教育大学"
    },
    "abbreviation": "UPSI",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://www.upsi.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "uthm",
    "name": {
      "en": "Universiti Tun Hussein Onn Malaysia",
      "zh": "马来西亚敦胡先翁大学"
    },
    "abbreviation": "UTHM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://www.uthm.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "utem",
    "name": {
      "en": "Universiti Teknikal Malaysia Melaka",
      "zh": "马六甲技术大学"
    },
    "abbreviation": "UTeM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "https://www.utem.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "unisza",
    "name": {
      "en": "Universiti Sultan Zainal Abidin",
      "zh": "苏丹再纳阿比丁大学"
    },
    "abbreviation": "UniSZA",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://www.unisza.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "usim",
    "name": {
      "en": "Universiti Sains Islam Malaysia",
      "zh": "马来西亚伊斯兰科学大学"
    },
    "abbreviation": "USIM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Negeri Sembilan",
    "website": "https://www.usim.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "umk",
    "name": {
      "en": "Universiti Malaysia Kelantan",
      "zh": "马来西亚吉兰丹大学"
    },
    "abbreviation": "UMK",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kelantan",
    "website": "https://www.umk.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "upnm",
    "name": {
      "en": "National Defence University of Malaysia",
      "zh": "马来西亚国防大学"
    },
    "abbreviation": "UPNM",
    "type": "Public University",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kuala Lumpur",
    "website": "https://www.upnm.edu.my/",
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://jpt.mohe.gov.my/portal/index.php/ms/korporat/19-ipt",
    "lastVerified": "2026-11-15"
  },
  {
    "id": "aimst",
    "name": {
      "en": "AIMST University",
      "zh": "亚太科技与创新大学"
    },
    "abbreviation": "AIMST",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kedah",
    "website": "https://www.aimst.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "albukhary",
    "name": {
      "en": "Albukhary International University",
      "zh": "亚布卡里国际大学"
    },
    "abbreviation": "AIU",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kedah",
    "website": "https://aiu.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "mediu",
    "name": {
      "en": "Al-Madinah International University",
      "zh": "麦地那国际大学"
    },
    "abbreviation": "MEDIU",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://www.mediu.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "aeu",
    "name": {
      "en": "Asia e University",
      "zh": "亚洲电子大学"
    },
    "abbreviation": "AeU",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://aeu.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "asia-metropolitan",
    "name": {
      "en": "Asia Metropolitan University",
      "zh": "亚洲都会大学"
    },
    "abbreviation": "AMU",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Johor",
    "website": "https://amu.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "asia-school-business",
    "name": {
      "en": "Asia School of Business",
      "zh": "亚洲商学院"
    },
    "abbreviation": "ASB",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kuala Lumpur",
    "website": "https://asb.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "binary",
    "name": {
      "en": "Binary University",
      "zh": "百纳利大学"
    },
    "abbreviation": "BINARY",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://binary.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "city-university",
    "name": {
      "en": "City University Malaysia",
      "zh": "城市大学"
    },
    "abbreviation": "CITY",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://city.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "drb-hicom",
    "name": {
      "en": "DRB-HICOM University of Automotive Malaysia",
      "zh": "DRB-HICOM 汽车大学"
    },
    "abbreviation": "DRB-HICOM",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Pahang",
    "website": "https://www.dhu.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "globalnxt",
    "name": {
      "en": "GlobalNxt University",
      "zh": "GlobalNxt 大学"
    },
    "abbreviation": "GNU",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kuala Lumpur",
    "website": "https://www.globalnxt.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "imu",
    "name": {
      "en": "IMU University",
      "zh": "国际医药大学"
    },
    "abbreviation": "IMU",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kuala Lumpur",
    "website": "https://imu.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "inceif",
    "name": {
      "en": "INCEIF University",
      "zh": "国际伊斯兰金融教育中心大学"
    },
    "abbreviation": "INCEIF",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kuala Lumpur",
    "website": "https://inceif.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "inti",
    "name": {
      "en": "INTI International University",
      "zh": "英迪国际大学"
    },
    "abbreviation": "INTI",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Negeri Sembilan",
    "website": "https://newinti.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "kpj-healthcare",
    "name": {
      "en": "KPJ Healthcare University",
      "zh": "KPJ 医疗保健大学"
    },
    "abbreviation": "KPJ",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Negeri Sembilan",
    "website": "https://kpju.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "klust",
    "name": {
      "en": "Kuala Lumpur University of Science and Technology",
      "zh": "吉隆坡科技大学"
    },
    "abbreviation": "KLUST",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://klust.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "limkokwing",
    "name": {
      "en": "Limkokwing University of Creative Technology",
      "zh": "林国荣创意科技大学"
    },
    "abbreviation": "LUCT",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://www.limkokwing.net/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "mahsa",
    "name": {
      "en": "MAHSA University",
      "zh": "玛莎大学"
    },
    "abbreviation": "MAHSA",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://mahsa.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "must",
    "name": {
      "en": "Malaysia University of Science and Technology",
      "zh": "马来西亚科技大学"
    },
    "abbreviation": "MUST",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://must.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "msu",
    "name": {
      "en": "Management and Science University",
      "zh": "管理与科学大学"
    },
    "abbreviation": "MSU",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://www.msu.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "mila",
    "name": {
      "en": "MILA University",
      "zh": "MILA 大学"
    },
    "abbreviation": "MILA",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Negeri Sembilan",
    "website": "https://mila.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "nilai",
    "name": {
      "en": "Nilai University",
      "zh": "汝来大学"
    },
    "abbreviation": "NILAI",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Negeri Sembilan",
    "website": "https://www.nilai.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "segi",
    "name": {
      "en": "SEGi University",
      "zh": "世纪大学"
    },
    "abbreviation": "SEGi",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://www.segi.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "unitar",
    "name": {
      "en": "UNITAR International University",
      "zh": "UNITAR 国际大学"
    },
    "abbreviation": "UNITAR",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://www.unitar.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "uniten",
    "name": {
      "en": "Universiti Tenaga Nasional",
      "zh": "国家能源大学"
    },
    "abbreviation": "UNITEN",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Selangor",
    "website": "https://www.uniten.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "unikl",
    "name": {
      "en": "Universiti Kuala Lumpur",
      "zh": "吉隆坡大学"
    },
    "abbreviation": "UniKL",
    "type": "Private Higher Education Institution",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "private",
    "state": "Kuala Lumpur",
    "website": "https://www.unikl.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "curtin-malaysia",
    "name": {
      "en": "Curtin University Malaysia",
      "zh": "科廷大学马来西亚校区"
    },
    "abbreviation": "CURTIN",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "state": "Sarawak",
    "website": "https://www.curtin.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "parentUniversity": "Curtin University",
    "parentCountry": "Australia",
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "swinburne-sarawak",
    "name": {
      "en": "Swinburne University of Technology Sarawak Campus",
      "zh": "斯威本科技大学砂拉越校区"
    },
    "abbreviation": "SWINBURNE",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "state": "Sarawak",
    "website": "https://www.swinburne.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "parentUniversity": "Swinburne University of Technology",
    "parentCountry": "Australia",
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "heriot-watt-malaysia",
    "name": {
      "en": "Heriot-Watt University Malaysia",
      "zh": "赫瑞瓦特大学马来西亚校区"
    },
    "abbreviation": "HWUM",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "state": "Putrajaya",
    "website": "https://www.hw.ac.uk/malaysia/",
    "institutionIds": [],
    "campuses": [],
    "parentUniversity": "Heriot-Watt University",
    "parentCountry": "United Kingdom",
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "newcastle-medicine-malaysia",
    "name": {
      "en": "Newcastle University Medicine Malaysia",
      "zh": "纽卡斯尔大学医学马来西亚校区"
    },
    "abbreviation": "NUMed",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "state": "Johor",
    "website": "https://www.ncl.ac.uk/numed/",
    "institutionIds": [],
    "campuses": [],
    "parentUniversity": "Newcastle University",
    "parentCountry": "United Kingdom",
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "southampton-malaysia",
    "name": {
      "en": "University of Southampton Malaysia",
      "zh": "南安普顿大学马来西亚校区"
    },
    "abbreviation": "UoSM",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "state": "Johor",
    "website": "https://www.southamptonmalaysia.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "parentUniversity": "University of Southampton",
    "parentCountry": "United Kingdom",
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "xiamen-malaysia",
    "name": {
      "en": "Xiamen University Malaysia",
      "zh": "厦门大学马来西亚分校"
    },
    "abbreviation": "XMUM",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "state": "Selangor",
    "website": "https://www.xmu.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "parentUniversity": "Xiamen University",
    "parentCountry": "China",
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "reading-malaysia",
    "name": {
      "en": "University of Reading Malaysia",
      "zh": "雷丁大学马来西亚校区"
    },
    "abbreviation": "UoRM",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "state": "Johor",
    "website": "https://www.reading.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "parentUniversity": "University of Reading",
    "parentCountry": "United Kingdom",
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "rcsi-ucd-malaysia",
    "name": {
      "en": "RCSI & UCD Malaysia Campus",
      "zh": "爱尔兰皇家外科医学院与都柏林大学学院马来西亚校区"
    },
    "abbreviation": "RUMC",
    "type": "Foreign Branch Campus",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "foreign-branch",
    "state": "Penang",
    "website": "https://www.rcsiucd.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "parentUniversity": "Royal College of Surgeons in Ireland & University College Dublin",
    "parentCountry": "Ireland",
    "description": {
      "en": "Official institutional directory entry. Programme availability, admission requirements, fees and accreditation must be checked on the institution website and relevant regulator register.",
      "zh": "院校目录记录。具体课程、入学条件、学费及认证状态须以院校官网和相关监管机构登记为准。"
    },
    "dataStatus": "directory",
    "source": "https://www2.mqa.gov.my/mqr/english/eakrbyipts.cfm",
    "lastVerified": null
  },
  {
    "id": "nus",
    "name": {
      "en": "National University of Singapore",
      "zh": "新加坡国立大学"
    },
    "abbreviation": "NUS",
    "type": "International University",
    "country": "Singapore",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Singapore",
    "website": "https://www.nus.edu.sg/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.nus.edu.sg/",
    "lastVerified": null
  },
  {
    "id": "ntu",
    "name": {
      "en": "Nanyang Technological University",
      "zh": "南洋理工大学"
    },
    "abbreviation": "NTU",
    "type": "International University",
    "country": "Singapore",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Singapore",
    "website": "https://www.ntu.edu.sg/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.ntu.edu.sg/",
    "lastVerified": null
  },
  {
    "id": "oxford",
    "name": {
      "en": "University of Oxford",
      "zh": "牛津大学"
    },
    "abbreviation": "Oxford",
    "type": "International University",
    "country": "United Kingdom",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Oxford",
    "website": "https://www.ox.ac.uk/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.ox.ac.uk/",
    "lastVerified": null
  },
  {
    "id": "imperial",
    "name": {
      "en": "Imperial College London",
      "zh": "帝国理工学院"
    },
    "abbreviation": "Imperial",
    "type": "International University",
    "country": "United Kingdom",
    "studyLocation": "international",
    "ownership": "public",
    "state": "London",
    "website": "https://www.imperial.ac.uk/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.imperial.ac.uk/",
    "lastVerified": null
  },
  {
    "id": "melbourne",
    "name": {
      "en": "The University of Melbourne",
      "zh": "墨尔本大学"
    },
    "abbreviation": "UniMelb",
    "type": "International University",
    "country": "Australia",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Victoria",
    "website": "https://www.unimelb.edu.au/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.unimelb.edu.au/",
    "lastVerified": null
  },
  {
    "id": "unsw",
    "name": {
      "en": "The University of New South Wales",
      "zh": "新南威尔士大学"
    },
    "abbreviation": "UNSW",
    "type": "International University",
    "country": "Australia",
    "studyLocation": "international",
    "ownership": "public",
    "state": "New South Wales",
    "website": "https://www.unsw.edu.au/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.unsw.edu.au/",
    "lastVerified": null
  },
  {
    "id": "mit",
    "name": {
      "en": "Massachusetts Institute of Technology",
      "zh": "麻省理工学院"
    },
    "abbreviation": "MIT",
    "type": "International University",
    "country": "United States",
    "studyLocation": "international",
    "ownership": "private",
    "state": "Massachusetts",
    "website": "https://www.mit.edu/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.mit.edu/",
    "lastVerified": null
  },
  {
    "id": "stanford",
    "name": {
      "en": "Stanford University",
      "zh": "斯坦福大学"
    },
    "abbreviation": "Stanford",
    "type": "International University",
    "country": "United States",
    "studyLocation": "international",
    "ownership": "private",
    "state": "California",
    "website": "https://www.stanford.edu/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.stanford.edu/",
    "lastVerified": null
  },
  {
    "id": "tokyo",
    "name": {
      "en": "The University of Tokyo",
      "zh": "东京大学"
    },
    "abbreviation": "UTokyo",
    "type": "International University",
    "country": "Japan",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Tokyo",
    "website": "https://www.u-tokyo.ac.jp/en/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.u-tokyo.ac.jp/en/",
    "lastVerified": null
  },
  {
    "id": "kyoto",
    "name": {
      "en": "Kyoto University",
      "zh": "京都大学"
    },
    "abbreviation": "KyotoU",
    "type": "International University",
    "country": "Japan",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Kyoto",
    "website": "https://www.kyoto-u.ac.jp/en",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.kyoto-u.ac.jp/en",
    "lastVerified": null
  },
  {
    "id": "snu",
    "name": {
      "en": "Seoul National University",
      "zh": "首尔大学"
    },
    "abbreviation": "SNU",
    "type": "International University",
    "country": "South Korea",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Seoul",
    "website": "https://en.snu.ac.kr/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://en.snu.ac.kr/",
    "lastVerified": null
  },
  {
    "id": "kaist",
    "name": {
      "en": "Korea Advanced Institute of Science and Technology",
      "zh": "韩国科学技术院"
    },
    "abbreviation": "KAIST",
    "type": "International University",
    "country": "South Korea",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Daejeon",
    "website": "https://www.kaist.ac.kr/en/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.kaist.ac.kr/en/",
    "lastVerified": null
  },
  {
    "id": "tsinghua",
    "name": {
      "en": "Tsinghua University",
      "zh": "清华大学"
    },
    "abbreviation": "THU",
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Beijing",
    "website": "https://www.tsinghua.edu.cn/en/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "ownershipLabel": "Public University"
  },
  {
    "id": "peking",
    "name": {
      "en": "Peking University",
      "zh": "北京大学"
    },
    "abbreviation": "PKU",
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "state": "Beijing",
    "website": "https://english.pku.edu.cn/",
    "institutionIds": [],
    "campuses": [],
    "description": {
      "en": "International institution directory entry. Confirm programme availability, admissions, fees and recognition with the institution and the relevant national authority.",
      "zh": "国际院校目录记录。课程、入学条件、学费及学历认可须向院校及当地监管机构核实。"
    },
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "ownershipLabel": "Public University"
  },
  {
    "id": "poly-politeknik-sultan-haji-ahmad-shah",
    "name": {
      "en": "Politeknik Sultan Haji Ahmad Shah",
      "zh": "Politeknik Sultan Haji Ahmad Shah"
    },
    "abbreviation": "POLISAS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://www.polisas.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-sultan-abdul-halim-muadzam-shah",
    "name": {
      "en": "Politeknik Sultan Abdul Halim Mu’adzam Shah",
      "zh": "Politeknik Sultan Abdul Halim Mu’adzam Shah"
    },
    "abbreviation": "POLIMAS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://polimas.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-kota-bharu",
    "name": {
      "en": "Politeknik Kota Bharu",
      "zh": "Politeknik Kota Bharu"
    },
    "abbreviation": "PKB",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kelantan",
    "website": "https://pkb.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-kuching-sarawak",
    "name": {
      "en": "Politeknik Kuching Sarawak",
      "zh": "Politeknik Kuching Sarawak"
    },
    "abbreviation": "PKS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://poliku.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-port-dickson",
    "name": {
      "en": "Politeknik Port Dickson",
      "zh": "Politeknik Port Dickson"
    },
    "abbreviation": "PPD",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Negeri Sembilan",
    "website": "https://polipd.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-kota-kinabalu",
    "name": {
      "en": "Politeknik Kota Kinabalu",
      "zh": "Politeknik Kota Kinabalu"
    },
    "abbreviation": "PKK",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://polikk.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-sultan-salahuddin-abdul-aziz-shah",
    "name": {
      "en": "Politeknik Sultan Salahuddin Abdul Aziz Shah",
      "zh": "Politeknik Sultan Salahuddin Abdul Aziz Shah"
    },
    "abbreviation": "PSA",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://psa.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-seberang-perai",
    "name": {
      "en": "Politeknik Seberang Perai",
      "zh": "Politeknik Seberang Perai"
    },
    "abbreviation": "PSP",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://www.psp.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-melaka",
    "name": {
      "en": "Politeknik Melaka",
      "zh": "Politeknik Melaka"
    },
    "abbreviation": "PMK",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "https://polimelaka.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-kuala-terengganu",
    "name": {
      "en": "Politeknik Kuala Terengganu",
      "zh": "Politeknik Kuala Terengganu"
    },
    "abbreviation": "PKT",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://pkt.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-sultan-mizan-zainal-abidin",
    "name": {
      "en": "Politeknik Sultan Mizan Zainal Abidin",
      "zh": "Politeknik Sultan Mizan Zainal Abidin"
    },
    "abbreviation": "PSMZA",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://psmza.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-merlimau",
    "name": {
      "en": "Politeknik Merlimau",
      "zh": "Politeknik Merlimau"
    },
    "abbreviation": "PMM",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "https://pmm.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-sultan-azlan-shah",
    "name": {
      "en": "Politeknik Sultan Azlan Shah",
      "zh": "Politeknik Sultan Azlan Shah"
    },
    "abbreviation": "PSAS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://psas.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-tuanku-sultanah-bahiyah",
    "name": {
      "en": "Politeknik Tuanku Sultanah Bahiyah",
      "zh": "Politeknik Tuanku Sultanah Bahiyah"
    },
    "abbreviation": "PTSB",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://ptsb.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-sultan-idris-shah",
    "name": {
      "en": "Politeknik Sultan Idris Shah",
      "zh": "Politeknik Sultan Idris Shah"
    },
    "abbreviation": "PSIS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://psis.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-tuanku-syed-sirajuddin",
    "name": {
      "en": "Politeknik Tuanku Syed Sirajuddin",
      "zh": "Politeknik Tuanku Syed Sirajuddin"
    },
    "abbreviation": "PTSS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perlis",
    "website": "https://ptss.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-muadzam-shah",
    "name": {
      "en": "Politeknik Muadzam Shah",
      "zh": "Politeknik Muadzam Shah"
    },
    "abbreviation": "PMS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://pms.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-mukah-sarawak",
    "name": {
      "en": "Politeknik Mukah Sarawak",
      "zh": "Politeknik Mukah Sarawak"
    },
    "abbreviation": "PMU",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://pmu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-balik-pulau",
    "name": {
      "en": "Politeknik Balik Pulau",
      "zh": "Politeknik Balik Pulau"
    },
    "abbreviation": "PBU",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://pbu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-jeli",
    "name": {
      "en": "Politeknik Jeli",
      "zh": "Politeknik Jeli"
    },
    "abbreviation": "PJK",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kelantan",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-nilai",
    "name": {
      "en": "Politeknik Nilai",
      "zh": "Politeknik Nilai"
    },
    "abbreviation": "PNS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Negeri Sembilan",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-banting",
    "name": {
      "en": "Politeknik Banting",
      "zh": "Politeknik Banting"
    },
    "abbreviation": "PBS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://pbs.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-mersing",
    "name": {
      "en": "Politeknik Mersing",
      "zh": "Politeknik Mersing"
    },
    "abbreviation": "PMJ",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://pmj.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-hulu-terengganu",
    "name": {
      "en": "Politeknik Hulu Terengganu",
      "zh": "Politeknik Hulu Terengganu"
    },
    "abbreviation": "PHT",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://pht.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-sandakan-sabah",
    "name": {
      "en": "Politeknik Sandakan Sabah",
      "zh": "Politeknik Sandakan Sabah"
    },
    "abbreviation": "PSS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://pss.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-metro-kuala-lumpur",
    "name": {
      "en": "Politeknik METrO Kuala Lumpur",
      "zh": "Politeknik METrO Kuala Lumpur"
    },
    "abbreviation": "PMKL",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kuala Lumpur",
    "website": "https://pmkl.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-metro-kuantan",
    "name": {
      "en": "Politeknik METrO Kuantan",
      "zh": "Politeknik METrO Kuantan"
    },
    "abbreviation": "PMKU",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://pmku.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-metro-johor-bahru",
    "name": {
      "en": "Politeknik METrO Johor Bahru",
      "zh": "Politeknik METrO Johor Bahru"
    },
    "abbreviation": "PMJB",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://pmjb.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-metro-betong-sarawak",
    "name": {
      "en": "Politeknik METrO Betong Sarawak",
      "zh": "Politeknik METrO Betong Sarawak"
    },
    "abbreviation": "PMBS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://www.pmbs.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-metro-tasek-gelugor",
    "name": {
      "en": "Politeknik METrO Tasek Gelugor",
      "zh": "Politeknik METrO Tasek Gelugor"
    },
    "abbreviation": "PMTG",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://pmtg.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-tun-syed-nasir-syed-ismail",
    "name": {
      "en": "Politeknik Tun Syed Nasir Syed Ismail",
      "zh": "Politeknik Tun Syed Nasir Syed Ismail"
    },
    "abbreviation": "PTSN",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://ptsn.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-besut",
    "name": {
      "en": "Politeknik Besut",
      "zh": "Politeknik Besut"
    },
    "abbreviation": "PBT",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://polibesut.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-maritim-sultan-nazrin-shah",
    "name": {
      "en": "Politeknik Maritim Sultan Nazrin Shah",
      "zh": "Politeknik Maritim Sultan Nazrin Shah"
    },
    "abbreviation": "PMSN",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://pbd.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "poly-politeknik-tawau",
    "name": {
      "en": "Politeknik Tawau",
      "zh": "Politeknik Tawau"
    },
    "abbreviation": "PTS",
    "type": "Polytechnic",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://politawau.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://ambilan.mypolycc.edu.my/PORTALBPP2/index.asp?pg=politeknik",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-arau",
    "name": {
      "en": "Kolej Komuniti Arau",
      "zh": "Kolej Komuniti Arau"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkarau.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-kangar-kolej-induk-kolej-komuniti-arau",
    "name": {
      "en": "Kolej Komuniti Cawangan Kangar (Kolej Induk – Kolej Komuniti Arau)",
      "zh": "Kolej Komuniti Cawangan Kangar (Kolej Induk – Kolej Komuniti Arau)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkkangar.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bandar-darul-aman",
    "name": {
      "en": "Kolej Komuniti Bandar Darul Aman",
      "zh": "Kolej Komuniti Bandar Darul Aman"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkbandardarulaman.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-jerai",
    "name": {
      "en": "Kolej Komuniti Jerai",
      "zh": "Kolej Komuniti Jerai"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkjerai.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bandar-baharu",
    "name": {
      "en": "Kolej Komuniti Bandar Baharu",
      "zh": "Kolej Komuniti Bandar Baharu"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkbandarbaharu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-langkawi-tourism-academy-kolej-komuniti-langkawi",
    "name": {
      "en": "Langkawi Tourism Academy @ Kolej Komuniti Langkawi",
      "zh": "Langkawi Tourism Academy @ Kolej Komuniti Langkawi"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://ltaklangkawi.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kulim",
    "name": {
      "en": "Kolej Komuniti Kulim",
      "zh": "Kolej Komuniti Kulim"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkkulim.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-sungai-petani",
    "name": {
      "en": "Kolej Komuniti Sungai Petani",
      "zh": "Kolej Komuniti Sungai Petani"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kksungaipetani.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-baling",
    "name": {
      "en": "Kolej Komuniti Baling",
      "zh": "Kolej Komuniti Baling"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkbaling.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-padang-terap",
    "name": {
      "en": "Kolej Komuniti Padang Terap",
      "zh": "Kolej Komuniti Padang Terap"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkpadangterap.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-sik",
    "name": {
      "en": "Kolej Komuniti Sik",
      "zh": "Kolej Komuniti Sik"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kksik.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-jerlun",
    "name": {
      "en": "Kolej Komuniti Cawangan Jerlun",
      "zh": "Kolej Komuniti Cawangan Jerlun"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kedah",
    "website": "https://kkjerlun.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kepala-batas",
    "name": {
      "en": "Kolej Komuniti Kepala Batas",
      "zh": "Kolej Komuniti Kepala Batas"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://kkkepalabatas.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-nibong-tebal",
    "name": {
      "en": "Kolej Komuniti Nibong Tebal",
      "zh": "Kolej Komuniti Nibong Tebal"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://kknibongtebal.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bukit-mertajam",
    "name": {
      "en": "Kolej Komuniti Bukit Mertajam",
      "zh": "Kolej Komuniti Bukit Mertajam"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://kkbukitmertajam.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bayan-baru",
    "name": {
      "en": "Kolej Komuniti Bayan Baru",
      "zh": "Kolej Komuniti Bayan Baru"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://kkbayanbaru.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-tasek-gelugor",
    "name": {
      "en": "Kolej Komuniti Tasek Gelugor",
      "zh": "Kolej Komuniti Tasek Gelugor"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://kktasekgelugor.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-seberang-jaya",
    "name": {
      "en": "Kolej Komuniti Seberang Jaya",
      "zh": "Kolej Komuniti Seberang Jaya"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Penang",
    "website": "https://kkseberangjaya.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-chenderoh",
    "name": {
      "en": "Kolej Komuniti Chenderoh",
      "zh": "Kolej Komuniti Chenderoh"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkchenderoh.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kuala-kangsar",
    "name": {
      "en": "Kolej Komuniti Kuala Kangsar",
      "zh": "Kolej Komuniti Kuala Kangsar"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkkualakangsar.mypolycc.edu.my/v2/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-gerik",
    "name": {
      "en": "Kolej Komuniti Gerik",
      "zh": "Kolej Komuniti Gerik"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkgerik.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-sungai-siput",
    "name": {
      "en": "Kolej Komuniti Sungai Siput",
      "zh": "Kolej Komuniti Sungai Siput"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kksungaisiput.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-lenggong-kolej-induk-kolej-komuniti-sungai-siput",
    "name": {
      "en": "Kolej Komuniti Cawangan Lenggong (Kolej Induk – Kolej Komuniti Sungai Siput)",
      "zh": "Kolej Komuniti Cawangan Lenggong (Kolej Induk – Kolej Komuniti Sungai Siput)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-pasir-salak",
    "name": {
      "en": "Kolej Komuniti Pasir Salak",
      "zh": "Kolej Komuniti Pasir Salak"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkpasirsalak.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-tapah",
    "name": {
      "en": "Kolej Komuniti Tapah",
      "zh": "Kolej Komuniti Tapah"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kktapah.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-teluk-intan",
    "name": {
      "en": "Kolej Komuniti Teluk Intan",
      "zh": "Kolej Komuniti Teluk Intan"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kktelukintan.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-manjung",
    "name": {
      "en": "Kolej Komuniti Manjung",
      "zh": "Kolej Komuniti Manjung"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkmanjung.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-taiping",
    "name": {
      "en": "Kolej Komuniti Taiping",
      "zh": "Kolej Komuniti Taiping"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kktaiping.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-batu-gajah",
    "name": {
      "en": "Kolej Komuniti Batu Gajah",
      "zh": "Kolej Komuniti Batu Gajah"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkbatugajah.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-rtc-gopeng",
    "name": {
      "en": "Kolej Komuniti RTC Gopeng",
      "zh": "Kolej Komuniti RTC Gopeng"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkrtcgopeng.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bagan-serai",
    "name": {
      "en": "Kolej Komuniti Bagan Serai",
      "zh": "Kolej Komuniti Bagan Serai"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkbaganserai.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bagan-datuk",
    "name": {
      "en": "Kolej Komuniti Bagan Datuk",
      "zh": "Kolej Komuniti Bagan Datuk"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Perak",
    "website": "https://kkbagandatuk.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-sabak-bernam",
    "name": {
      "en": "Kolej Komuniti Sabak Bernam",
      "zh": "Kolej Komuniti Sabak Bernam"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kksabakbernam.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-tanjong-karang",
    "name": {
      "en": "Kolej Komuniti Tanjong Karang",
      "zh": "Kolej Komuniti Tanjong Karang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kktanjongkarang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-hulu-selangor",
    "name": {
      "en": "Kolej Komuniti Hulu Selangor",
      "zh": "Kolej Komuniti Hulu Selangor"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kktanjongkarang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-selayang",
    "name": {
      "en": "Kolej Komuniti Selayang",
      "zh": "Kolej Komuniti Selayang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kkselayang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kuala-langat",
    "name": {
      "en": "Kolej Komuniti Kuala Langat",
      "zh": "Kolej Komuniti Kuala Langat"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kkkualalangat.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-sepang-kolej-induk-kolej-komuniti-kuala-langat",
    "name": {
      "en": "Kolej Komuniti Cawangan Sepang (Kolej Induk – Kolej Komuniti Kuala Langat)",
      "zh": "Kolej Komuniti Cawangan Sepang (Kolej Induk – Kolej Komuniti Kuala Langat)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-klang",
    "name": {
      "en": "Kolej Komuniti Klang",
      "zh": "Kolej Komuniti Klang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kkklang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-hulu-langat",
    "name": {
      "en": "Kolej Komuniti Hulu Langat",
      "zh": "Kolej Komuniti Hulu Langat"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kkhululangat.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-shah-alam",
    "name": {
      "en": "Kolej Komuniti Shah Alam",
      "zh": "Kolej Komuniti Shah Alam"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kkshahalam.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-ampang",
    "name": {
      "en": "Kolej Komuniti Ampang",
      "zh": "Kolej Komuniti Ampang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kkampang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kelana-jaya",
    "name": {
      "en": "Kolej Komuniti Kelana Jaya",
      "zh": "Kolej Komuniti Kelana Jaya"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Selangor",
    "website": "https://kkkelanajaya.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-jempol",
    "name": {
      "en": "Kolej Komuniti Jempol",
      "zh": "Kolej Komuniti Jempol"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Negeri Sembilan",
    "website": "https://kkjempol.mypolycc.edu.my/v1/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-jelebu",
    "name": {
      "en": "Kolej Komuniti Jelebu",
      "zh": "Kolej Komuniti Jelebu"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Negeri Sembilan",
    "website": "https://kkjelebu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-tampin",
    "name": {
      "en": "Kolej Komuniti Tampin",
      "zh": "Kolej Komuniti Tampin"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Negeri Sembilan",
    "website": "https://kktampin.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-rembau",
    "name": {
      "en": "Kolej Komuniti Rembau",
      "zh": "Kolej Komuniti Rembau"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Negeri Sembilan",
    "website": "https://kkrembau.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kuala-pilah",
    "name": {
      "en": "Kolej Komuniti Kuala Pilah",
      "zh": "Kolej Komuniti Kuala Pilah"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Negeri Sembilan",
    "website": "https://kkkualapilah.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-masjid-tanah",
    "name": {
      "en": "Kolej Komuniti Masjid Tanah",
      "zh": "Kolej Komuniti Masjid Tanah"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "https://kkmasjidtanah.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-tangga-batu",
    "name": {
      "en": "Kolej Komuniti Tangga Batu",
      "zh": "Kolej Komuniti Tangga Batu"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "http://kktanggabatu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-selandar",
    "name": {
      "en": "Kolej Komuniti Selandar",
      "zh": "Kolej Komuniti Selandar"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "https://kkselandar.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bukit-beruang",
    "name": {
      "en": "Kolej Komuniti Bukit Beruang",
      "zh": "Kolej Komuniti Bukit Beruang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "http://kkbukitberuang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kota-melaka",
    "name": {
      "en": "Kolej Komuniti Kota Melaka",
      "zh": "Kolej Komuniti Kota Melaka"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "http://kkotamelaka.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-jasin",
    "name": {
      "en": "Kolej Komuniti Jasin",
      "zh": "Kolej Komuniti Jasin"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Melaka",
    "website": "https://kkjasin.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-ledang",
    "name": {
      "en": "Kolej Komuniti Ledang",
      "zh": "Kolej Komuniti Ledang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "http://www.kklej.edu.my/v3/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-pagoh",
    "name": {
      "en": "Kolej Komuniti Pagoh",
      "zh": "Kolej Komuniti Pagoh"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkpagoh.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-muar",
    "name": {
      "en": "Kolej Komuniti Muar",
      "zh": "Kolej Komuniti Muar"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkmuar.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-segamat",
    "name": {
      "en": "Kolej Komuniti Segamat",
      "zh": "Kolej Komuniti Segamat"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kksegamat.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-segamat-2",
    "name": {
      "en": "Kolej Komuniti Segamat 2",
      "zh": "Kolej Komuniti Segamat 2"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kksegamat2.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bandar-penawar",
    "name": {
      "en": "Kolej Komuniti Bandar Penawar",
      "zh": "Kolej Komuniti Bandar Penawar"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkbandarpenawar.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bandar-tenggara",
    "name": {
      "en": "Kolej Komuniti Bandar Tenggara",
      "zh": "Kolej Komuniti Bandar Tenggara"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkbandartenggara.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-pasir-gudang",
    "name": {
      "en": "Kolej Komuniti Pasir Gudang",
      "zh": "Kolej Komuniti Pasir Gudang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkpasirgudang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-tanjung-piai",
    "name": {
      "en": "Kolej Komuniti Tanjung Piai",
      "zh": "Kolej Komuniti Tanjung Piai"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kktanjungpiai.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kota-tinggi",
    "name": {
      "en": "Kolej Komuniti Kota Tinggi",
      "zh": "Kolej Komuniti Kota Tinggi"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkkotatinggi.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-batu-pahat",
    "name": {
      "en": "Kolej Komuniti Batu Pahat",
      "zh": "Kolej Komuniti Batu Pahat"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkbatupahat.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kluang",
    "name": {
      "en": "Kolej Komuniti Kluang",
      "zh": "Kolej Komuniti Kluang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkkluang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-simpang-renggam",
    "name": {
      "en": "Kolej Komuniti Simpang Renggam",
      "zh": "Kolej Komuniti Simpang Renggam"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-gelang-patah-kolej-induk-kolej-komuniti-bandar-penawar",
    "name": {
      "en": "Kolej Komuniti Cawangan Gelang Patah (Kolej Induk – Kolej Komuniti Bandar Penawar)",
      "zh": "Kolej Komuniti Cawangan Gelang Patah (Kolej Induk – Kolej Komuniti Bandar Penawar)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Johor",
    "website": "https://kkgelangpatah.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-rompin",
    "name": {
      "en": "Kolej Komuniti Rompin",
      "zh": "Kolej Komuniti Rompin"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kkrompin.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bentong",
    "name": {
      "en": "Kolej Komuniti Bentong",
      "zh": "Kolej Komuniti Bentong"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kkbentong.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-raub",
    "name": {
      "en": "Kolej Komuniti Raub",
      "zh": "Kolej Komuniti Raub"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kkraub.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-temerloh",
    "name": {
      "en": "Kolej Komuniti Temerloh",
      "zh": "Kolej Komuniti Temerloh"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kktemerloh.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-bera",
    "name": {
      "en": "Kolej Komuniti Bera",
      "zh": "Kolej Komuniti Bera"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "http://kbera.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-lipis",
    "name": {
      "en": "Kolej Komuniti Lipis",
      "zh": "Kolej Komuniti Lipis"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kklipis.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kuantan",
    "name": {
      "en": "Kolej Komuniti Kuantan",
      "zh": "Kolej Komuniti Kuantan"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kkkuantan.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-paya-besar",
    "name": {
      "en": "Kolej Komuniti Paya Besar",
      "zh": "Kolej Komuniti Paya Besar"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kkpayabesar.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-pekan",
    "name": {
      "en": "Kolej Komuniti Pekan",
      "zh": "Kolej Komuniti Pekan"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kkpekan.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-jerantut",
    "name": {
      "en": "Kolej Komuniti Jerantut",
      "zh": "Kolej Komuniti Jerantut"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": "https://kkjerantut.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-maran-kolej-induk-kolej-komuniti-paya-besar",
    "name": {
      "en": "Kolej Komuniti Cawangan Maran (Kolej Induk – Kolej Komuniti Paya Besar)",
      "zh": "Kolej Komuniti Cawangan Maran (Kolej Induk – Kolej Komuniti Paya Besar)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Pahang",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kuala-terengganu",
    "name": {
      "en": "Kolej Komuniti Kuala Terengganu",
      "zh": "Kolej Komuniti Kuala Terengganu"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://kkkualaterengganu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kemaman",
    "name": {
      "en": "Kolej Komuniti Kemaman",
      "zh": "Kolej Komuniti Kemaman"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://kkkemaman.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-besut",
    "name": {
      "en": "Kolej Komuniti Besut",
      "zh": "Kolej Komuniti Besut"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://kkbesut.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-hulu-terengganu-kolej-induk-kolej-komuniti-kuala-terengganu",
    "name": {
      "en": "Kolej Komuniti Cawangan Hulu Terengganu (Kolej Induk – Kolej Komuniti Kuala Terengganu)",
      "zh": "Kolej Komuniti Cawangan Hulu Terengganu (Kolej Induk – Kolej Komuniti Kuala Terengganu)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://kkhuluterengganu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-kuala-nerus",
    "name": {
      "en": "Kolej Komuniti Cawangan Kuala Nerus",
      "zh": "Kolej Komuniti Cawangan Kuala Nerus"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://kkkualanerus.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-setiu-kolej-induk-kolej-komuniti-kuala-terengganu",
    "name": {
      "en": "Kolej Komuniti Cawangan Setiu (Kolej Induk – Kolej Komuniti Kuala Terengganu)",
      "zh": "Kolej Komuniti Cawangan Setiu (Kolej Induk – Kolej Komuniti Kuala Terengganu)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Terengganu",
    "website": "https://kksetiu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-pasir-mas",
    "name": {
      "en": "Kolej Komuniti Pasir Mas",
      "zh": "Kolej Komuniti Pasir Mas"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kelantan",
    "website": "https://kkpasirmas.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-rantau-panjang-kolej-induk-kolej-komuniti-pasir-mas",
    "name": {
      "en": "Kolej Komuniti Cawangan Rantau Panjang (Kolej Induk – Kolej Komuniti Pasir Mas)",
      "zh": "Kolej Komuniti Cawangan Rantau Panjang (Kolej Induk – Kolej Komuniti Pasir Mas)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kelantan",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-jeli",
    "name": {
      "en": "Kolej Komuniti Jeli",
      "zh": "Kolej Komuniti Jeli"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kelantan",
    "website": "https://kkjeli.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-tanah-merah-kolej-induk-kolej-komuniti-jeli",
    "name": {
      "en": "Kolej Komuniti Cawangan Tanah Merah (Kolej Induk – Kolej Komuniti Jeli)",
      "zh": "Kolej Komuniti Cawangan Tanah Merah (Kolej Induk – Kolej Komuniti Jeli)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kelantan",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kok-lanas",
    "name": {
      "en": "Kolej Komuniti Kok Lanas",
      "zh": "Kolej Komuniti Kok Lanas"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Kelantan",
    "website": "https://kkkoklanas.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kuching",
    "name": {
      "en": "Kolej Komuniti Kuching",
      "zh": "Kolej Komuniti Kuching"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://kkkuching.mypolycc.edu.my/v1/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-mas-gading",
    "name": {
      "en": "Kolej Komuniti Mas Gading",
      "zh": "Kolej Komuniti Mas Gading"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://kkmasgading.mypolycc.edu.my/v1/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-miri",
    "name": {
      "en": "Kolej Komuniti Miri",
      "zh": "Kolej Komuniti Miri"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://kkmiri.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-betong",
    "name": {
      "en": "Kolej Komuniti Betong",
      "zh": "Kolej Komuniti Betong"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "http://kkbetong.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-santubong",
    "name": {
      "en": "Kolej Komuniti Santubong",
      "zh": "Kolej Komuniti Santubong"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://kksantubong.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-sarikei",
    "name": {
      "en": "Kolej Komuniti Sarikei",
      "zh": "Kolej Komuniti Sarikei"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": "https://kksarikei.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-cawangan-sibu-kolej-induk-kolej-komuniti-sarikei",
    "name": {
      "en": "Kolej Komuniti Cawangan Sibu (Kolej Induk – Kolej Komuniti Sarikei)",
      "zh": "Kolej Komuniti Cawangan Sibu (Kolej Induk – Kolej Komuniti Sarikei)"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sarawak",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-tawau",
    "name": {
      "en": "Kolej Komuniti Tawau",
      "zh": "Kolej Komuniti Tawau"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "http://kktawau.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-semporna",
    "name": {
      "en": "Kolej Komuniti Semporna",
      "zh": "Kolej Komuniti Semporna"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://kksemporna.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-lahad-datu",
    "name": {
      "en": "Kolej Komuniti Lahad Datu",
      "zh": "Kolej Komuniti Lahad Datu"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://kklahaddatu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-sandakan",
    "name": {
      "en": "Kolej Komuniti Sandakan",
      "zh": "Kolej Komuniti Sandakan"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://kksandakan.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-tambunan",
    "name": {
      "en": "Kolej Komuniti Tambunan",
      "zh": "Kolej Komuniti Tambunan"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://kktambunan.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-beaufort",
    "name": {
      "en": "Kolej Komuniti Beaufort",
      "zh": "Kolej Komuniti Beaufort"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://kkbeaufort.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-penampang",
    "name": {
      "en": "Kolej Komuniti Penampang",
      "zh": "Kolej Komuniti Penampang"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "https://kkpenampang.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-kota-marudu",
    "name": {
      "en": "Kolej Komuniti Kota Marudu",
      "zh": "Kolej Komuniti Kota Marudu"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": "http://kkkotamarudu.mypolycc.edu.my/",
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cc-kolej-komuniti-papar",
    "name": {
      "en": "Kolej Komuniti Papar",
      "zh": "Kolej Komuniti Papar"
    },
    "abbreviation": "",
    "type": "Community College",
    "country": "Malaysia",
    "studyLocation": "domestic",
    "ownership": "public",
    "state": "Sabah",
    "website": null,
    "institutionIds": [],
    "campuses": [],
    "dataStatus": "directory",
    "source": "https://www.mohe.gov.my/muat-turun?id=52&view=category",
    "lastVerified": null
  },
  {
    "id": "cn-2",
    "name": {
      "en": "Renmin University of China",
      "zh": "中国人民大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-4",
    "name": {
      "en": "Beihang University",
      "zh": "北京航空航天大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-5",
    "name": {
      "en": "Beijing Institute of Technology",
      "zh": "北京理工大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-6",
    "name": {
      "en": "China Agricultural University",
      "zh": "中国农业大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-7",
    "name": {
      "en": "Beijing Normal University",
      "zh": "北京师范大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-8",
    "name": {
      "en": "Minzu University of China",
      "zh": "中央民族大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-9",
    "name": {
      "en": "Nankai University",
      "zh": "南开大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Tianjin",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-10",
    "name": {
      "en": "Tianjin University",
      "zh": "天津大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Tianjin",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-11",
    "name": {
      "en": "Dalian University of Technology",
      "zh": "大连理工大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Dalian",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-12",
    "name": {
      "en": "Northeastern University",
      "zh": "东北大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shenyang",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-13",
    "name": {
      "en": "Jilin University",
      "zh": "吉林大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Changchun",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-14",
    "name": {
      "en": "Harbin Institute of Technology",
      "zh": "哈尔滨工业大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Harbin",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-15",
    "name": {
      "en": "Fudan University",
      "zh": "复旦大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shanghai",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-16",
    "name": {
      "en": "Tongji University",
      "zh": "同济大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shanghai",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-17",
    "name": {
      "en": "Shanghai Jiao Tong University",
      "zh": "上海交通大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shanghai",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-18",
    "name": {
      "en": "East China Normal University",
      "zh": "华东师范大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shanghai",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-19",
    "name": {
      "en": "Nanjing University",
      "zh": "南京大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanjing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-20",
    "name": {
      "en": "Southeast University",
      "zh": "东南大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanjing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-21",
    "name": {
      "en": "Zhejiang University",
      "zh": "浙江大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Hangzhou",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-22",
    "name": {
      "en": "University of Science and Technology of China",
      "zh": "中国科学技术大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Hefei",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-23",
    "name": {
      "en": "Xiamen University",
      "zh": "厦门大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xiamen",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-24",
    "name": {
      "en": "Shandong University",
      "zh": "山东大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Jinan",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-25",
    "name": {
      "en": "Ocean University of China",
      "zh": "中国海洋大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Qingdao",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-26",
    "name": {
      "en": "Wuhan University",
      "zh": "武汉大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Wuhan",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-27",
    "name": {
      "en": "Huazhong University of Science and Technology",
      "zh": "华中科技大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Wuhan",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-28",
    "name": {
      "en": "Hunan University",
      "zh": "湖南大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Changsha",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-29",
    "name": {
      "en": "Central South University",
      "zh": "中南大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Changsha",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-30",
    "name": {
      "en": "National University of Defense Technology",
      "zh": "国防科技大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Changsha",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-31",
    "name": {
      "en": "Sun Yat-sen University",
      "zh": "中山大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Guangzhou",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-32",
    "name": {
      "en": "South China University of Technology",
      "zh": "华南理工大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Guangzhou",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-33",
    "name": {
      "en": "Sichuan University",
      "zh": "四川大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Chengdu",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-34",
    "name": {
      "en": "University of Electronic Science and Technology of China",
      "zh": "电子科技大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Chengdu",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-35",
    "name": {
      "en": "Chongqing University",
      "zh": "重庆大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Chongqing",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-36",
    "name": {
      "en": "Xi’an Jiaotong University",
      "zh": "西安交通大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xi’an",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-37",
    "name": {
      "en": "Northwestern Polytechnical University",
      "zh": "西北工业大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xi’an",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-38",
    "name": {
      "en": "Northwest A&F University",
      "zh": "西北农林科技大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Yangling",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-39",
    "name": {
      "en": "Lanzhou University",
      "zh": "兰州大学"
    },
    "type": "Public University · Project 985",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Lanzhou",
    "classificationTags": [
      "985",
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200612/t20061206_128833.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-40",
    "name": {
      "en": "Beijing Jiaotong University",
      "zh": "北京交通大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-41",
    "name": {
      "en": "Beijing University of Technology",
      "zh": "北京工业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-42",
    "name": {
      "en": "University of Science and Technology Beijing",
      "zh": "北京科技大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-43",
    "name": {
      "en": "Beijing University of Chemical Technology",
      "zh": "北京化工大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-44",
    "name": {
      "en": "Beijing University of Posts and Telecommunications",
      "zh": "北京邮电大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-45",
    "name": {
      "en": "Beijing Forestry University",
      "zh": "北京林业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-46",
    "name": {
      "en": "Beijing University of Chinese Medicine",
      "zh": "北京中医药大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-47",
    "name": {
      "en": "Beijing Foreign Studies University",
      "zh": "北京外国语大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-48",
    "name": {
      "en": "Communication University of China",
      "zh": "中国传媒大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-49",
    "name": {
      "en": "Central University of Finance and Economics",
      "zh": "中央财经大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-50",
    "name": {
      "en": "University of International Business and Economics",
      "zh": "对外经济贸易大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-51",
    "name": {
      "en": "China University of Political Science and Law",
      "zh": "中国政法大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-52",
    "name": {
      "en": "North China Electric Power University",
      "zh": "华北电力大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-53",
    "name": {
      "en": "Tianjin Medical University",
      "zh": "天津医科大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Tianjin",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-54",
    "name": {
      "en": "Hebei University of Technology",
      "zh": "河北工业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Tianjin",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-55",
    "name": {
      "en": "Taiyuan University of Technology",
      "zh": "太原理工大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Taiyuan",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-56",
    "name": {
      "en": "Inner Mongolia University",
      "zh": "内蒙古大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Hohhot",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-57",
    "name": {
      "en": "Liaoning University",
      "zh": "辽宁大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shenyang",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-58",
    "name": {
      "en": "Dalian Maritime University",
      "zh": "大连海事大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Dalian",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-59",
    "name": {
      "en": "Yanbian University",
      "zh": "延边大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Yanji",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-60",
    "name": {
      "en": "Northeast Normal University",
      "zh": "东北师范大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Changchun",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-61",
    "name": {
      "en": "Harbin Engineering University",
      "zh": "哈尔滨工程大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Harbin",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-62",
    "name": {
      "en": "Northeast Agricultural University",
      "zh": "东北农业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Harbin",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-63",
    "name": {
      "en": "Northeast Forestry University",
      "zh": "东北林业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Harbin",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-64",
    "name": {
      "en": "East China University of Science and Technology",
      "zh": "华东理工大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shanghai",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-65",
    "name": {
      "en": "Donghua University",
      "zh": "东华大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shanghai",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-66",
    "name": {
      "en": "Shanghai University",
      "zh": "上海大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shanghai",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-67",
    "name": {
      "en": "Soochow University",
      "zh": "苏州大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Suzhou",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-68",
    "name": {
      "en": "Nanjing University of Aeronautics and Astronautics",
      "zh": "南京航空航天大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanjing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-69",
    "name": {
      "en": "Nanjing University of Science and Technology",
      "zh": "南京理工大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanjing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-70",
    "name": {
      "en": "Hohai University",
      "zh": "河海大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanjing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-71",
    "name": {
      "en": "Jiangnan University",
      "zh": "江南大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Wuxi",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-72",
    "name": {
      "en": "Nanjing Agricultural University",
      "zh": "南京农业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanjing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-73",
    "name": {
      "en": "China Pharmaceutical University",
      "zh": "中国药科大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanjing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-74",
    "name": {
      "en": "Nanjing Normal University",
      "zh": "南京师范大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanjing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-75",
    "name": {
      "en": "Anhui University",
      "zh": "安徽大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Hefei",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-76",
    "name": {
      "en": "Hefei University of Technology",
      "zh": "合肥工业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Hefei",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-77",
    "name": {
      "en": "Fuzhou University",
      "zh": "福州大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Fuzhou",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-78",
    "name": {
      "en": "Nanchang University",
      "zh": "南昌大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanchang",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-79",
    "name": {
      "en": "Zhengzhou University",
      "zh": "郑州大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Zhengzhou",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-80",
    "name": {
      "en": "Jinan University",
      "zh": "暨南大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Guangzhou",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-81",
    "name": {
      "en": "South China Normal University",
      "zh": "华南师范大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Guangzhou",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-82",
    "name": {
      "en": "Guangxi University",
      "zh": "广西大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Nanning",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-83",
    "name": {
      "en": "Hainan University",
      "zh": "海南大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Haikou",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-84",
    "name": {
      "en": "Southwest Jiaotong University",
      "zh": "西南交通大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Chengdu",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-85",
    "name": {
      "en": "Sichuan Agricultural University",
      "zh": "四川农业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Ya’an",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-86",
    "name": {
      "en": "Southwestern University of Finance and Economics",
      "zh": "西南财经大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Chengdu",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-87",
    "name": {
      "en": "Southwest University",
      "zh": "西南大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Chongqing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-88",
    "name": {
      "en": "Guizhou University",
      "zh": "贵州大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Guiyang",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-89",
    "name": {
      "en": "Yunnan University",
      "zh": "云南大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Kunming",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-90",
    "name": {
      "en": "Northwest University",
      "zh": "西北大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xi’an",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-91",
    "name": {
      "en": "Xidian University",
      "zh": "西安电子科技大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xi’an",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-92",
    "name": {
      "en": "Chang’an University",
      "zh": "长安大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xi’an",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-93",
    "name": {
      "en": "Shaanxi Normal University",
      "zh": "陕西师范大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xi’an",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-94",
    "name": {
      "en": "Qinghai University",
      "zh": "青海大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xining",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-95",
    "name": {
      "en": "Ningxia University",
      "zh": "宁夏大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Yinchuan",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-96",
    "name": {
      "en": "Xinjiang University",
      "zh": "新疆大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Urumqi",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-97",
    "name": {
      "en": "Shihezi University",
      "zh": "石河子大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shihezi",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-98",
    "name": {
      "en": "National Taiwan University",
      "zh": "國立臺灣大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-99",
    "name": {
      "en": "National Tsing Hua University",
      "zh": "國立清華大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Hsinchu",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-100",
    "name": {
      "en": "National Yang Ming Chiao Tung University",
      "zh": "國立陽明交通大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Hsinchu",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-101",
    "name": {
      "en": "National Cheng Kung University",
      "zh": "國立成功大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Tainan",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-102",
    "name": {
      "en": "National Chengchi University",
      "zh": "國立政治大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-103",
    "name": {
      "en": "National Central University",
      "zh": "國立中央大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taoyuan",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-104",
    "name": {
      "en": "National Chung Hsing University",
      "zh": "國立中興大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-105",
    "name": {
      "en": "National Chung Cheng University",
      "zh": "國立中正大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Chiayi",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-106",
    "name": {
      "en": "National Sun Yat-sen University",
      "zh": "國立中山大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-107",
    "name": {
      "en": "National Taiwan Normal University",
      "zh": "國立臺灣師範大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-108",
    "name": {
      "en": "National Taiwan University of Science and Technology",
      "zh": "國立臺灣科技大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-109",
    "name": {
      "en": "National Taipei University of Technology",
      "zh": "國立臺北科技大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-110",
    "name": {
      "en": "National Taiwan Ocean University",
      "zh": "國立臺灣海洋大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Keelung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-111",
    "name": {
      "en": "National Taipei University",
      "zh": "國立臺北大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "New Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-112",
    "name": {
      "en": "National Dong Hwa University",
      "zh": "國立東華大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Hualien",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-113",
    "name": {
      "en": "National Chi Nan University",
      "zh": "國立暨南國際大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Nantou",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-114",
    "name": {
      "en": "National Chiayi University",
      "zh": "國立嘉義大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Chiayi",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-115",
    "name": {
      "en": "National Changhua University of Education",
      "zh": "國立彰化師範大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Changhua",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-116",
    "name": {
      "en": "National Kaohsiung Normal University",
      "zh": "國立高雄師範大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-117",
    "name": {
      "en": "National University of Kaohsiung",
      "zh": "國立高雄大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-118",
    "name": {
      "en": "National University of Tainan",
      "zh": "國立臺南大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Tainan",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-119",
    "name": {
      "en": "National Taitung University",
      "zh": "國立臺東大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taitung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-120",
    "name": {
      "en": "National Ilan University",
      "zh": "國立宜蘭大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Yilan",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-121",
    "name": {
      "en": "National Pingtung University",
      "zh": "國立屏東大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Pingtung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-122",
    "name": {
      "en": "National Yunlin University of Science and Technology",
      "zh": "國立雲林科技大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Yunlin",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-123",
    "name": {
      "en": "National Pingtung University of Science and Technology",
      "zh": "國立屏東科技大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Pingtung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-124",
    "name": {
      "en": "National Kaohsiung University of Science and Technology",
      "zh": "國立高雄科技大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-125",
    "name": {
      "en": "National Taichung University of Science and Technology",
      "zh": "國立臺中科技大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-126",
    "name": {
      "en": "National Formosa University",
      "zh": "國立虎尾科技大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Yunlin",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-127",
    "name": {
      "en": "National Taipei University of Nursing and Health Sciences",
      "zh": "國立臺北護理健康大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-128",
    "name": {
      "en": "National Taipei University of Education",
      "zh": "國立臺北教育大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-129",
    "name": {
      "en": "National Taichung University of Education",
      "zh": "國立臺中教育大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-130",
    "name": {
      "en": "National Taiwan University of Arts",
      "zh": "國立臺灣藝術大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "New Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-131",
    "name": {
      "en": "Tainan National University of the Arts",
      "zh": "國立臺南藝術大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Tainan",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-132",
    "name": {
      "en": "National Taiwan Sport University",
      "zh": "國立體育大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taoyuan",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-133",
    "name": {
      "en": "National Taiwan University of Sport",
      "zh": "國立臺灣體育運動大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-134",
    "name": {
      "en": "National Kaohsiung University of Hospitality and Tourism",
      "zh": "國立高雄餐旅大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-135",
    "name": {
      "en": "National Quemoy University",
      "zh": "國立金門大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Kinmen",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-136",
    "name": {
      "en": "National United University",
      "zh": "國立聯合大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "National University",
    "state": "Miaoli",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-137",
    "name": {
      "en": "University of Taipei",
      "zh": "臺北市立大學"
    },
    "type": "National / Public University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "National"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://ws.moe.edu.tw/Download.ashx?icon=..pdf&n=95DEEF0FD2631E14D84FA11C534B1329169F6F0F24D6C929CD4FBE5D664BF291076CCCFC242E02EFCE57990EF520E2FFC0252C0437C7CA1EDA4CEC506CE37471A751CF3956FB2193&u=C099358C81D4876CB0CF3DEEC9DAD008F1B55CAB56DE13DB48FBDEAA8134BE9ABE790C65442B5391F127137CFCCF5EF6AF7469E625AD231EA456F176DD362E895999EADDAE978B5206D520AF83CF99A0",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-138",
    "name": {
      "en": "Fu Jen Catholic University",
      "zh": "輔仁大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "New Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-139",
    "name": {
      "en": "Tunghai University",
      "zh": "東海大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-140",
    "name": {
      "en": "Soochow University",
      "zh": "東吳大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-141",
    "name": {
      "en": "Tamkang University",
      "zh": "淡江大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "New Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-142",
    "name": {
      "en": "Chung Yuan Christian University",
      "zh": "中原大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taoyuan",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-143",
    "name": {
      "en": "Feng Chia University",
      "zh": "逢甲大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-144",
    "name": {
      "en": "Chinese Culture University",
      "zh": "中國文化大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-145",
    "name": {
      "en": "Yuan Ze University",
      "zh": "元智大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taoyuan",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-146",
    "name": {
      "en": "Chang Gung University",
      "zh": "長庚大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taoyuan",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-147",
    "name": {
      "en": "Chung Shan Medical University",
      "zh": "中山醫學大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-148",
    "name": {
      "en": "China Medical University",
      "zh": "中國醫藥大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-149",
    "name": {
      "en": "Kaohsiung Medical University",
      "zh": "高雄醫學大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-150",
    "name": {
      "en": "Taipei Medical University",
      "zh": "臺北醫學大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-151",
    "name": {
      "en": "Tzu Chi University",
      "zh": "慈濟大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Hualien",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-152",
    "name": {
      "en": "Asia University",
      "zh": "亞洲大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-153",
    "name": {
      "en": "Ming Chuan University",
      "zh": "銘傳大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-154",
    "name": {
      "en": "Shih Hsin University",
      "zh": "世新大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-155",
    "name": {
      "en": "Shih Chien University",
      "zh": "實踐大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-156",
    "name": {
      "en": "Providence University",
      "zh": "靜宜大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-157",
    "name": {
      "en": "Fooyin University",
      "zh": "輔英科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-158",
    "name": {
      "en": "Southern Taiwan University of Science and Technology",
      "zh": "南臺科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Tainan",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-159",
    "name": {
      "en": "Ming Chi University of Technology",
      "zh": "明志科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "New Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-160",
    "name": {
      "en": "Chaoyang University of Technology",
      "zh": "朝陽科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-161",
    "name": {
      "en": "Hungkuang University",
      "zh": "弘光科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-162",
    "name": {
      "en": "Chihlee University of Technology",
      "zh": "致理科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "New Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-163",
    "name": {
      "en": "Shu-Te University",
      "zh": "樹德科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-164",
    "name": {
      "en": "Central Taiwan University of Science and Technology",
      "zh": "中臺科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taichung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-165",
    "name": {
      "en": "嘉南藥理大學",
      "zh": "嘉南藥理大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Tainan",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-166",
    "name": {
      "en": "I-Shou University",
      "zh": "義守大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-167",
    "name": {
      "en": "Nanhua University",
      "zh": "南華大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Chiayi",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-168",
    "name": {
      "en": "Chang Jung Christian University",
      "zh": "長榮大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Tainan",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-169",
    "name": {
      "en": "Tatung University",
      "zh": "大同大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-171",
    "name": {
      "en": "China University of Technology",
      "zh": "中國科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-173",
    "name": {
      "en": "Tungnan University",
      "zh": "東南科技大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "New Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-174",
    "name": {
      "en": "Wenzao Ursuline University of Languages",
      "zh": "文藻外語大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Kaohsiung",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-175",
    "name": {
      "en": "Kainan University",
      "zh": "開南大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Taoyuan",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-176",
    "name": {
      "en": "Fo Guang University",
      "zh": "佛光大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "Yilan",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "tw-177",
    "name": {
      "en": "Aletheia University",
      "zh": "真理大學"
    },
    "type": "Private University",
    "country": "Taiwan",
    "studyLocation": "international",
    "ownership": "private",
    "ownershipLabel": "Private University",
    "state": "New Taipei",
    "classificationTags": [
      "Taiwan",
      "Private"
    ],
    "admissionRoutes": [
      "Overseas Chinese Joint Admission (Malaysia)",
      "Independent Admission"
    ],
    "dataStatus": "directory",
    "source": "https://cmn-hant.overseas.ncnu.edu.tw/en/schools-individual-admission/university-admission-list/",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-391",
    "name": {
      "en": "Beijing Sport University",
      "zh": "北京体育大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-392",
    "name": {
      "en": "Central Conservatory of Music",
      "zh": "中央音乐学院"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-393",
    "name": {
      "en": "China University of Mining and Technology (Beijing)",
      "zh": "中国矿业大学（北京）"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-394",
    "name": {
      "en": "China University of Mining and Technology",
      "zh": "中国矿业大学（徐州）"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xuzhou",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-395",
    "name": {
      "en": "China University of Geosciences (Beijing)",
      "zh": "中国地质大学（北京）"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-396",
    "name": {
      "en": "China University of Geosciences (Wuhan)",
      "zh": "中国地质大学（武汉）"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Wuhan",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-397",
    "name": {
      "en": "China University of Petroleum (Beijing)",
      "zh": "中国石油大学（北京）"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Beijing",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-398",
    "name": {
      "en": "China University of Petroleum (East China)",
      "zh": "中国石油大学（华东）"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Qingdao",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-399",
    "name": {
      "en": "Huazhong Agricultural University",
      "zh": "华中农业大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Wuhan",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-400",
    "name": {
      "en": "Central China Normal University",
      "zh": "华中师范大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Wuhan",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-401",
    "name": {
      "en": "Zhongnan University of Economics and Law",
      "zh": "中南财经政法大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Wuhan",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-402",
    "name": {
      "en": "Hunan Normal University",
      "zh": "湖南师范大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Changsha",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-403",
    "name": {
      "en": "Tibet University",
      "zh": "西藏大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Lhasa",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-404",
    "name": {
      "en": "Naval Medical University",
      "zh": "海军军医大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Shanghai",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
  },
  {
    "id": "cn-211-405",
    "name": {
      "en": "Air Force Medical University",
      "zh": "空军军医大学"
    },
    "type": "Public University · Project 211",
    "country": "China",
    "studyLocation": "international",
    "ownership": "public",
    "ownershipLabel": "Public University",
    "state": "Xi’an",
    "classificationTags": [
      "211",
      "Mainland China"
    ],
    "admissionRoutes": [],
    "dataStatus": "directory",
    "source": "https://www.moe.gov.cn/srcsite/A22/s7065/200512/t20051223_82762.html",
    "lastVerified": null,
    "dataNote": "Directory entry only. Check the institution’s official website for current programmes, admission routes and recognition."
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
      en: "A complex community problem needs a long-term solution. Which fields would you be willing to study deeply to help solve it?",
      zh: "如果一个社区面对复杂问题，需要长期研究与解决，你愿意深入学习哪些领域来参与改善？"
    },
    options: [
      "Medicine & Healthcare",
      "Engineering",
      "Artificial Intelligence & Data Science",
      "Biology, Biotechnology & Genetics",
      "Business, Economics & Entrepreneurship",
      "Fundamental Science & Research",
      "Design, Media & Creative Technology",
      "Psychology & Social Sciences",
      "Architecture, Construction & Urban Systems",
      "Education & Human Development"
    ]
  },
  {
    id: "interest-2",
    section: "development-interest",
    type: "multi-select",
    question: {
      en: "Which challenging tasks would keep you engaged even when the answer is not obvious?",
      zh: "即使一开始没有明确答案，以下哪些有挑战性的任务仍会让你愿意持续投入？"
    },
    options: [
      "Investigating a problem with incomplete evidence and testing competing explanations",
      "Designing and prototyping a solution, then improving it after user feedback",
      "Supporting people through complex decisions and explaining options clearly",
      "Analysing data to identify patterns that are not immediately obvious",
      "Developing an original concept and communicating it to an audience",
      "Understanding how people, organisations and communities behave",
      "Integrating software, hardware and systems to solve a practical need",
      "Planning a controlled experiment and interpreting unexpected results"
    ]
  },
  {
    id: "interest-3",
    section: "development-interest",
    type: "multi-select",
    question: {
      en: "Imagine a project that moves from research to real-world implementation. In which settings would you most like to contribute?",
      zh: "想象一个项目从研究走向实际应用，你最希望在哪些环境中参与？"
    },
    options: [
      "A laboratory where results must be precise, repeatable and documented",
      "A healthcare team where decisions affect patient care and safety",
      "An engineering workshop where designs are tested against real constraints",
      "An organisation where you analyse operations, budgets and strategy",
      "A research centre where you compare evidence and develop new knowledge",
      "A construction or infrastructure project coordinating people and systems",
      "A technology team building and evaluating digital products",
      "A creative studio turning research into clear visual communication",
      "A field setting collecting observations and responding to changing conditions"
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
    type: "multi-select",
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
    type: "multi-select",
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
    type: "multi-select",
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
    type: "multi-select",
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


for (const [id, en, zh, order] of [
  ["tvet-certificate", "TVET Certificate", "TVET证书", 9],
  ["tvet-diploma", "TVET Diploma", "TVET文凭", 10],
  ["professional-qualification", "Professional Qualification", "专业资格", 11]
]) {
  if (!qualificationLevels.some(item => item.id === id)) qualificationLevels.push({ id, name: { en, zh }, order });
}


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
  },
  expired: { en: "Expired", zh: "已过期" },
  discontinued: { en: "Discontinued", zh: "已停办" },
  unavailable: { en: "Unavailable", zh: "暂无资料" },
  provisional: { en: "Provisional accreditation", zh: "临时认证" }
};


/* =========================================================
   13A. EXPANDED CATALOGUE TAXONOMY (V2.2)
   Search seeds are NOT confirmed active programmes.
   They remain pending until matched to an official institution page
   and the applicable MQA / JPK / professional register.
   ========================================================= */

const expandedDisciplineSeeds = [
  ["structural-engineering","engineering","Structural Engineering","结构工程","Analysis and design of structures, materials and building safety."],
  ["geotechnical-engineering","engineering","Geotechnical Engineering","岩土工程","Soil, rock, foundations, retaining structures and ground engineering."],
  ["water-resources-engineering","engineering","Water Resources Engineering","水资源工程","Hydrology, water infrastructure, drainage and water-resource systems."],
  ["transportation-engineering","engineering","Transportation Engineering","交通工程","Transport infrastructure, traffic systems and mobility planning."],
  ["chemical-engineering","engineering","Chemical Engineering","化学工程","Process design, chemical production, energy and industrial systems."],
  ["aerospace-engineering","engineering","Aerospace Engineering","航空航天工程","Aircraft, spacecraft, propulsion and aerospace systems."],
  ["biomedical-engineering","engineering","Biomedical Engineering","生物医学工程","Engineering methods applied to medical devices and healthcare technology."],
  ["mechatronics-engineering","engineering","Mechatronics Engineering","机电一体化工程","Integrated mechanical, electronic, control and robotics systems."],
  ["environmental-engineering","engineering","Environmental Engineering","环境工程","Engineering solutions for water, waste, pollution and sustainability."],
  ["materials-engineering","engineering","Materials Engineering","材料工程","Development and testing of metals, polymers, ceramics and advanced materials."],
  ["computer-engineering","engineering","Computer Engineering","计算机工程","Computer hardware, embedded systems and digital architecture."],
  ["nursing","medicine-health","Nursing","护理学","Nursing practice, patient care, health promotion and clinical placements."],
  ["pharmacy","medicine-health","Pharmacy","药剂学","Medicines, pharmaceutical sciences, patient safety and pharmacy practice."],
  ["physiotherapy","medicine-health","Physiotherapy","物理治疗","Movement science, rehabilitation and physical function."],
  ["occupational-therapy","medicine-health","Occupational Therapy","职业治疗","Supporting participation in daily activities through rehabilitation."],
  ["radiography","medicine-health","Radiography","放射影像学","Medical imaging, radiation science and diagnostic procedures."],
  ["public-health","medicine-health","Public Health","公共卫生","Population health, epidemiology, prevention and health policy."],
  ["medical-assistant","medicine-health","Medical Assistant Studies","医疗助理学","Clinical support, primary care and healthcare operations; scope depends on local regulation."],
  ["emergency-medical-care","medicine-health","Emergency Medical Care","紧急医疗护理","Pre-hospital care, emergency response and patient assessment."],
  ["medical-social-work","medicine-health","Medical Social Work","医疗社会工作","Psychosocial support, care coordination and social services in healthcare."],
  ["biology","biological-sciences","Biology","生物学","Living organisms, biological systems, ecology and laboratory science."],
  ["microbiology","biological-sciences","Microbiology","微生物学","Microorganisms, infection, industrial microbiology and laboratory methods."],
  ["molecular-biology","biological-sciences","Molecular Biology","分子生物学","Molecular mechanisms, gene expression and cellular processes."],
  ["genetics","biological-sciences","Genetics","遗传学","Genes, inheritance, genomics and genetic variation."],
  ["biochemistry","biological-sciences","Biochemistry","生物化学","Chemical processes in living systems and molecular biology."],
  ["bioinformatics","biological-sciences","Bioinformatics","生物信息学","Computational analysis of biological and biomedical data."],
  ["medical-biotechnology","biological-sciences","Medical Biotechnology","医学生物科技","Biotechnology applications in diagnostics, therapeutics and healthcare research."],
  ["computer-science","computer-technology","Computer Science","计算机科学","Algorithms, computation, software systems and theoretical foundations."],
  ["software-engineering","computer-technology","Software Engineering","软件工程","Software design, development, testing and lifecycle management."],
  ["data-science","computer-technology","Data Science","数据科学","Statistics, programming, machine learning and data-driven decision-making."],
  ["cybersecurity","computer-technology","Cybersecurity","网络安全","Security engineering, risk management and digital defence."],
  ["information-technology","computer-technology","Information Technology","信息技术","IT infrastructure, systems administration and technology services."],
  ["robotics","computer-technology","Robotics","机器人学","Robotic systems, automation, sensing and intelligent control."],
  ["accounting","business","Accounting","会计学","Financial reporting, audit, taxation and management accounting."],
  ["finance","business","Finance","金融学","Financial markets, investment, corporate finance and risk."],
  ["marketing","business","Marketing","市场营销","Consumer research, branding, digital marketing and strategy."],
  ["human-resource-management","business","Human Resource Management","人力资源管理","People management, employment relations and organisational development."],
  ["economics","business","Economics","经济学","Markets, policy, economic analysis and quantitative methods."],
  ["business-analytics","business","Business Analytics","商业分析","Data analysis and decision support for organisations."],
  ["logistics-management","transport-logistics","Logistics Management","物流管理","Transport operations, warehousing and distribution systems."],
  ["supply-chain-management","transport-logistics","Supply Chain Management","供应链管理","Procurement, operations, logistics and end-to-end supply networks."],
  ["physics","science","Physics","物理学","Matter, energy, forces and fundamental physical systems."],
  ["chemistry","science","Chemistry","化学","Chemical structures, reactions, materials and laboratory analysis."],
  ["mathematics","science","Mathematics","数学","Mathematical theory, modelling and quantitative problem-solving."],
  ["statistics","science","Statistics","统计学","Statistical inference, experimental design and data analysis."],
  ["forensic-science","science","Forensic Science","法证科学","Scientific methods used in investigation and evidence analysis."],
  ["environmental-science","science","Environmental Science","环境科学","Environmental systems, conservation, monitoring and sustainability."],
  ["construction-management","architecture-built-environment","Construction Management","建筑管理","Construction planning, site operations, contracts and project delivery."],
  ["building-surveying","architecture-built-environment","Building Surveying","建筑测量","Building inspection, maintenance, compliance and building performance."],
  ["urban-planning","architecture-built-environment","Urban and Regional Planning","城市与区域规划","Land use, urban development, transport and community planning."],
  ["landscape-architecture","architecture-built-environment","Landscape Architecture","景观建筑","Design of outdoor spaces, landscapes and public environments."],
  ["interior-design","architecture-built-environment","Interior Design","室内设计","Interior environments, spatial planning, materials and design communication."],
  ["geomatics","architecture-built-environment","Geomatics","测绘与地理信息","Surveying, geospatial data, mapping and positioning technologies."],
  ["building-information-modelling","architecture-built-environment","Building Information Modelling","建筑信息模型","Digital construction information, coordinated models and project data."],
  ["psychology","social-sciences","Psychology","心理学","Human behaviour, cognition, development and research methods."],
  ["sociology","social-sciences","Sociology","社会学","Social structures, institutions, communities and social change."],
  ["political-science","social-sciences","Political Science","政治学","Government, political systems, policy and political behaviour."],
  ["international-relations","social-sciences","International Relations","国际关系","Diplomacy, global affairs, security and international institutions."],
  ["social-work","social-sciences","Social Work","社会工作","Social support, community services and advocacy."],
  ["communication","social-sciences","Communication Studies","传播学","Communication theory, media, organisations and public engagement."],
  ["early-childhood-education","education","Early Childhood Education","幼儿教育","Learning, development and care in early childhood settings."],
  ["special-education","education","Special Education","特殊教育","Inclusive teaching and support for learners with diverse needs."],
  ["educational-technology","education","Educational Technology","教育科技","Digital learning design, educational media and learning systems."],
  ["tesl","education","Teaching English as a Second Language","英语作为第二语言教学","Language teaching, applied linguistics and classroom practice."],
  ["graphic-design","design-creative","Graphic Design","平面设计","Visual communication, typography, branding and digital design."],
  ["industrial-design","design-creative","Industrial Design","工业设计","Product form, usability, materials and design development."],
  ["animation","design-creative","Animation","动画","2D/3D animation, storytelling and digital production."],
  ["game-design","design-creative","Game Design","游戏设计","Game mechanics, interactive storytelling and production workflows."],
  ["food-science","agriculture","Food Science","食品科学","Food chemistry, safety, processing and product development."],
  ["veterinary-science","agriculture","Veterinary Science","兽医学","Animal health, disease prevention and veterinary practice."],
  ["aquaculture","agriculture","Aquaculture","水产养殖","Aquatic farming, fish health and sustainable production."],
  ["law","law","Law","法律","Legal systems, legal reasoning, research and professional practice."],
  ["corporate-law","law","Corporate Law","公司法","Company law, commercial transactions and corporate governance."],
  ["hospitality-management","hospitality-tourism","Hospitality Management","酒店管理","Hospitality operations, guest services and business management."],
  ["tourism-management","hospitality-tourism","Tourism Management","旅游管理","Tourism planning, destination management and visitor services."],
  ["culinary-arts","hospitality-tourism","Culinary Arts","烹饪艺术","Food preparation, kitchen operations and culinary management."],
  ["journalism","communication-media","Journalism","新闻学","News gathering, reporting, verification and multimedia storytelling."],
  ["mass-communication","communication-media","Mass Communication","大众传播","Media industries, communication strategy and content production."],
  ["public-relations","communication-media","Public Relations","公共关系","Reputation, stakeholder communication and strategic communications."],
  ["aviation-management","transport-logistics","Aviation Management","航空管理","Air transport operations, airport services and aviation business."],
  ["maritime-studies","transport-logistics","Maritime Studies","海事研究","Shipping, ports, maritime operations and ocean industries."]
];

for (const [id, fieldId, en, zh, description] of expandedDisciplineSeeds) {
  if (!disciplines.some(item => item.id === id)) {
    disciplines.push({
      id, fieldId, name: { en, zh },
      description: { en: description, zh: `${zh}相关知识、应用、研究与专业实践。` },
      subjects: [], careers: [], keywords: [en.toLowerCase(), zh]
    });
  }
  const field = studyFields.find(item => item.id === fieldId);
  if (field && !field.disciplines.includes(id)) field.disciplines.push(id);
}

const courseQualificationSeeds = [
  { qualification: "Diploma", prefix: "Diploma in", duration: null },
  { qualification: "Bachelor", prefix: "Bachelor in", duration: null },
  { qualification: "Master", prefix: "Master in", duration: null },
  { qualification: "PhD", prefix: "PhD in", duration: null }
];

for (const discipline of disciplines) {
  for (const level of courseQualificationSeeds) {
    const id = `${level.qualification.toLowerCase()}-${discipline.id}`;
    if (courses.some(item => item.id === id)) continue;
    const title = `${level.prefix} ${discipline.name.en}`;
    courses.push({
      id,
      disciplineId: discipline.id,
      fieldId: discipline.fieldId,
      name: { en: title, zh: `${discipline.name.zh}${({Certificate:"证书",Foundation:"预科",Diploma:"文凭", "Advanced Diploma":"高级文凭",Bachelor:"学士", "Postgraduate Diploma":"研究生文凭",Master:"硕士",PhD:"博士", "TVET Certificate":"TVET证书", "TVET Diploma":"TVET文凭"})[level.qualification]}` },
      qualification: level.qualification,
      duration: level.duration,
      studyMode: [],
      country: "Malaysia",
      description: {
        en: `Catalogue search seed for ${discipline.name.en}. This record is not evidence that a Malaysian institution currently offers this exact award title. Match it to an official institution programme page before publication as an active course.`,
        zh: `${discipline.name.zh}课程目录检索条目。此记录不代表马来西亚院校目前确实开办此名称课程，必须匹配院校官方课程网页后才能作为现行课程发布。`
      },
      entryRequirements: { en: "Pending institution-specific verification.", zh: "等待按院校及课程核实入学条件。" },
      curriculum: [],
      institutionIds: [],
      careerIds: [],
      accreditation: [],
      estimatedFees: null,
      dataStatus: "pending",
      dataNote: "Programme search seed only. No institution, active intake, fee, curriculum or accreditation has been verified.",
      source: null,
      lastVerified: null
    });
  }
}


const tvetDisciplineIds = [
  "civil-engineering", "mechanical-engineering", "electrical-engineering", "chemical-engineering",
  "mechatronics-engineering", "computer-engineering", "computer-science", "information-technology",
  "robotics", "construction-management", "building-information-modelling", "geomatics",
  "automotive-technology", "welding-technology", "electrical-technology", "culinary-arts",
  "food-technology", "agriculture", "aquaculture", "logistics-management", "hospitality-management",
  "graphic-design", "industrial-design", "network-technology"
];
for (const disciplineId of tvetDisciplineIds) {
  const discipline = disciplines.find(item => item.id === disciplineId);
  if (!discipline) continue;
  for (const level of [
    { qualification: "TVET Certificate", prefix: "TVET Certificate in" },
    { qualification: "TVET Diploma", prefix: "TVET Diploma in" }
  ]) {
    const id = `${level.qualification.toLowerCase().replaceAll(" ", "-")}-${discipline.id}`;
    if (courses.some(item => item.id === id)) continue;
    courses.push({
      id, disciplineId, fieldId: discipline.fieldId,
      name: { en: `${level.prefix} ${discipline.name.en}`, zh: `${discipline.name.zh}${level.qualification === "TVET Certificate" ? "技能证书" : "技能文凭"}` },
      qualification: level.qualification, duration: null, studyMode: [], country: "Malaysia",
      description: { en: `TVET catalogue search seed for ${discipline.name.en}. Exact NOSS code, JPK qualification level, training provider and current intake must be verified.`, zh: `${discipline.name.zh}的TVET目录检索条目。必须核实NOSS代码、JPK资格等级、培训机构及当前招生。` },
      entryRequirements: { en: "Pending provider- and NOSS-specific verification.", zh: "等待按培训机构及NOSS标准核实入学条件。" },
      curriculum: [], institutionIds: [], careerIds: [], accreditation: [], estimatedFees: null,
      dataStatus: "pending", dataNote: "TVET search seed only; not a verified JPK programme or active provider listing.", source: null, lastVerified: null
    });
  }
}

/* Additional career directory: occupational profiles are exploratory, not licensing advice. */
const careerSeeds = [
  ["structural-engineer","Structural Engineer","结构工程师","engineering","structural-engineering","Develops and assesses structural systems for buildings and infrastructure."],
  ["site-engineer","Site Engineer","现场工程师","engineering","civil-engineering","Coordinates technical construction activities, drawings, quality and site progress."],
  ["geotechnical-engineer","Geotechnical Engineer","岩土工程师","engineering","geotechnical-engineering","Assesses ground conditions, foundations and geotechnical risks."],
  ["transportation-engineer","Transportation Engineer","交通工程师","engineering","transportation-engineering","Analyses and plans transport infrastructure and traffic systems."],
  ["chemical-engineer","Chemical Engineer","化学工程师","engineering","chemical-engineering","Designs and improves industrial chemical and process operations."],
  ["aerospace-engineer","Aerospace Engineer","航空航天工程师","engineering","aerospace-engineering","Works on aircraft, spacecraft, propulsion or aerospace systems."],
  ["biomedical-engineer","Biomedical Engineer","生物医学工程师","engineering","biomedical-engineering","Develops and evaluates medical devices and healthcare technologies."],
  ["mechatronics-engineer","Mechatronics Engineer","机电工程师","engineering","mechatronics-engineering","Integrates mechanical, electronic and control technologies."],
  ["environmental-engineer","Environmental Engineer","环境工程师","engineering","environmental-engineering","Designs systems for pollution control, water and environmental protection."],
  ["manufacturing-engineer","Manufacturing Engineer","制造工程师","engineering","mechanical-engineering","Improves production processes, quality and manufacturing systems."],
  ["nurse","Registered Nurse","注册护士","medicine-health","nursing","Provides nursing care, monitors patients and supports health education."],
  ["pharmacist","Pharmacist","药剂师","medicine-health","pharmacy","Supports safe and effective use of medicines within regulated practice."],
  ["physiotherapist","Physiotherapist","物理治疗师","medicine-health","physiotherapy","Assesses movement and delivers rehabilitation interventions."],
  ["occupational-therapist","Occupational Therapist","职业治疗师","medicine-health","occupational-therapy","Helps people participate in daily activities through rehabilitation."],
  ["radiographer","Diagnostic Radiographer","放射技师","medicine-health","radiography","Performs medical imaging procedures under professional standards."],
  ["public-health-officer","Public Health Officer","公共卫生人员","medicine-health","public-health","Supports population health programmes, surveillance and prevention."],
  ["medical-assistant","Medical Assistant","医疗助理","medicine-health","medical-assistant","Supports clinical teams within the scope of local training and regulation."],
  ["biotechnologist","Biotechnologist","生物科技专员","biological-sciences","biotechnology","Applies biological methods in research, healthcare, agriculture or industry."],
  ["microbiologist","Microbiologist","微生物学家","biological-sciences","microbiology","Studies microorganisms in clinical, industrial or environmental settings."],
  ["molecular-biologist","Molecular Biologist","分子生物学家","biological-sciences","molecular-biology","Studies molecular processes in cells and living systems."],
  ["bioinformatician","Bioinformatician","生物信息学家","biological-sciences","bioinformatics","Analyses biological datasets using computational and statistical methods."],
  ["research-scientist","Research Scientist","研究科学家","science","physics","Plans experiments, analyses evidence and communicates research findings."],
  ["software-engineer","Software Engineer","软件工程师","computer-technology","software-engineering","Designs, builds, tests and maintains software systems."],
  ["data-scientist","Data Scientist","数据科学家","computer-technology","data-science","Uses statistics, programming and data to support decisions."],
  ["cybersecurity-analyst","Cybersecurity Analyst","网络安全分析师","computer-technology","cybersecurity","Monitors and assesses information security risks and controls."],
  ["cloud-engineer","Cloud Engineer","云端工程师","computer-technology","information-technology","Builds and maintains cloud-based infrastructure and services."],
  ["robotics-engineer","Robotics Engineer","机器人工程师","computer-technology","robotics","Develops robotic systems, automation and control solutions."],
  ["accountant","Accountant","会计师","business","accounting","Prepares and analyses financial information and reporting."],
  ["financial-analyst","Financial Analyst","金融分析师","business","finance","Evaluates financial data, performance and investment information."],
  ["marketing-executive","Marketing Executive","市场营销专员","business","marketing","Plans campaigns, studies customers and supports brand growth."],
  ["human-resource-executive","Human Resources Executive","人力资源专员","business","human-resource-management","Supports recruitment, employee services and people operations."],
  ["business-analyst","Business Analyst","商业分析师","business","business-analytics","Translates business needs into process and data-driven improvements."],
  ["construction-manager","Construction Manager","建筑项目经理","architecture-built-environment","construction-management","Coordinates construction delivery, resources, safety and programme."],
  ["building-surveyor","Building Surveyor","建筑测量师","architecture-built-environment","building-surveying","Inspects building condition, defects, maintenance and compliance."],
  ["architect","Architect","建筑师","architecture-built-environment","architecture","Develops building designs and coordinates architectural project requirements."],
  ["urban-planner","Urban Planner","城市规划师","architecture-built-environment","urban-planning","Plans land use, urban growth and community environments."],
  ["bim-coordinator","BIM Coordinator","BIM协调员","architecture-built-environment","building-information-modelling","Coordinates digital building models and project information workflows."],
  ["psychologist","Psychologist","心理学相关专业人员","social-sciences","psychology","Studies behaviour and may provide services subject to recognised qualifications and registration."],
  ["social-worker","Social Worker","社会工作者","social-sciences","social-work","Supports individuals, families and communities through social services."],
  ["policy-analyst","Policy Analyst","政策分析员","social-sciences","political-science","Researches policy issues and evaluates public programmes."],
  ["teacher","Teacher","教师","education","secondary-education","Plans learning activities, teaches and assesses student progress."],
  ["tesl-teacher","English Language Teacher","英语教师","education","tesl","Teaches English language skills in suitable education settings."],
  ["graphic-designer","Graphic Designer","平面设计师","design-creative","graphic-design","Creates visual communication for print and digital platforms."],
  ["product-designer","Product Designer","产品设计师","design-creative","industrial-design","Develops product concepts, prototypes and user-centred solutions."],
  ["animator","Animator","动画师","design-creative","animation","Creates animated sequences and digital visual content."],
  ["food-technologist","Food Technologist","食品科技专员","agriculture","food-science","Works on food processing, safety, quality and product development."],
  ["veterinarian","Veterinarian","兽医","agriculture","veterinary-science","Diagnoses and treats animal health conditions subject to registration."],
  ["lawyer","Lawyer","律师","law","law","Provides legal services subject to jurisdiction-specific admission and practice rules."],
  ["legal-executive","Legal Executive","法律事务专员","law","legal-studies","Supports legal research, documentation and case administration."],
  ["hotel-manager","Hotel Manager","酒店经理","hospitality-tourism","hotel-management","Oversees hospitality operations, guest experience and business performance."],
  ["chef","Chef","厨师","hospitality-tourism","culinary-arts","Plans and prepares food and coordinates kitchen operations."],
  ["journalist","Journalist","记者","communication-media","journalism","Researches, verifies and reports news and public-interest information."],
  ["public-relations-specialist","Public Relations Specialist","公关专员","communication-media","public-relations","Manages organisational communication and stakeholder relationships."],
  ["logistics-manager","Logistics Manager","物流经理","transport-logistics","logistics-management","Coordinates transport, warehousing and distribution operations."],
  ["aviation-operations-officer","Aviation Operations Officer","航空运营人员","transport-logistics","aviation-management","Supports airport or airline operations and service coordination."],
  ["marine-operations-officer","Marine Operations Officer","海事运营人员","transport-logistics","maritime-studies","Supports shipping, port or maritime operations." ]
];

for (const [id, en, zh, fieldId, disciplineId, description] of careerSeeds) {
  if (!careers.some(item => item.id === id)) careers.push({
    id, name: { en, zh }, fieldId, disciplineId,
    description: { en: description, zh: `${zh}相关工作，具体职责与资格要求取决于雇主、行业及适用法规。` },
    responsibilities: { en: [description, "Collaborate with relevant teams", "Maintain professional and safety standards"], zh: [description, "与相关团队合作", "遵守专业及安全标准"] },
    qualificationLevels: ["Diploma", "Bachelor", "Master"],
    professionalRequirements: [],
    dataStatus: "pending",
    dataNote: "Exploratory occupational profile. Confirm local licensing, protected titles and employer requirements before relying on it."
  });
}


const careerRequirementMap = {
  "civil-engineer": ["bem"], "mechanical-engineer": ["bem"], "structural-engineer": ["bem"],
  "site-engineer": ["bem"], "geotechnical-engineer": ["bem"], "transportation-engineer": ["bem"],
  "chemical-engineer": ["bem"], "aerospace-engineer": ["bem"], "biomedical-engineer": ["bem"],
  "mechatronics-engineer": ["bem"], "environmental-engineer": ["bem"], "manufacturing-engineer": ["bem"],
  "quantity-surveyor": ["bqsm"], "architect": ["lam"], "nurse": ["malaysian-nursing-board"],
  "pharmacist": ["pharmacy-board"], "lawyer": ["malaysian-bar"]
};
for (const career of careers) {
  if (careerRequirementMap[career.id]) career.professionalRequirements = careerRequirementMap[career.id];
  career.skills ??= ["Communication", "Problem-solving", "Professional ethics", "Digital literacy"];
  career.workEnvironments ??= ["Relevant industry workplaces", "Team-based professional environments"];
  career.progression ??= { en: "Progression depends on experience, further study, professional recognition and employer requirements.", zh: "職業发展取决于工作经验、继续进修、专业认可及雇主要求。" };
  career.salaryData ??= null;
  career.marketOutlook ??= null;
}
for (const discipline of disciplines) {
  discipline.careers = careers.filter(career => career.disciplineId === discipline.id).map(career => career.id);
}

/* Professional bodies and official reference points. A directory entry is not an eligibility decision. */
const professionalBodySeeds = [
  ["lam","Board of Architects Malaysia","马来西亚建筑师局","LAM","architecture-built-environment","https://www.lam.gov.my/","Architect registration and recognised professional pathways."],
  ["pam","Malaysian Institute of Architects","马来西亚建筑师协会","PAM","architecture-built-environment","https://www.pam.org.my/","Professional institute and architectural practice resources."],
  ["mbot","Malaysia Board of Technologists","马来西亚科技人员局","MBOT","engineering","https://www.mbot.org.my/","Technologist and technician registration information."],
  ["mqa","Malaysian Qualifications Agency","马来西亚学术资格鉴定机构","MQA","education","https://www.mqa.gov.my/","Programme accreditation and qualifications framework information."],
  ["pharmacy-board","Pharmacy Board Malaysia","马来西亚药剂局","PBM","medicine-health","https://pharmacy.moh.gov.my/","Pharmacy registration and professional requirements."],
  ["malaysian-nursing-board","Nursing Board Malaysia","马来西亚护士局","NBM","medicine-health","https://www.moh.gov.my/","Nursing registration and practice information."],
  ["malaysian-bar","Malaysian Bar","马来西亚律师公会","MB","law","https://www.malaysianbar.org.my/","Legal profession information and admission resources."],
  ["mip","Malaysian Institute of Planners","马来西亚规划师协会","MIP","architecture-built-environment","https://www.mip.org.my/","Planning profession resources and membership information."],
  ["mdec","Malaysia Digital Economy Corporation","马来西亚数字经济机构","MDEC","computer-technology","https://mdec.my/","Digital economy and talent ecosystem information."],
  ["moh","Ministry of Health Malaysia","马来西亚卫生部","MOH","medicine-health","https://www.moh.gov.my/","Health sector policies, services and professional information."],
  ["jpk","Department of Skills Development","马来西亚技能发展局","JPK","education","https://www.dsd.gov.my/","National occupational skills standards and Malaysian Skills Certification information."]
];
for (const [id, en, zh, abbreviation, fieldId, website, note] of professionalBodySeeds) {
  if (!professionalRequirements.some(item => item.id === id)) professionalRequirements.push({
    id, name: { en, zh }, abbreviation, fields: [fieldId], website,
    description: { en: note, zh: note }, requirements: [], dataStatus: "directory",
    note: "Reference directory only. Confirm current rules, registration categories and recognised qualifications directly with the authority."
  });
}

/* Additional generic progression routes; actual admission and credit transfer remain institution-specific. */
const pathwaySeeds = [
  ["uec-to-bachelor","UEC to Bachelor Degree","UEC 升读学士","UEC","Bachelor",["UEC","Bachelor"]],
  ["stpm-to-bachelor","STPM to Bachelor Degree","STPM 升读学士","STPM","Bachelor",["STPM","Bachelor"]],
  ["a-level-to-bachelor","A-Level to Bachelor Degree","A-Level 升读学士","A-Level","Bachelor",["A-Level","Bachelor"]],
  ["ib-to-bachelor","IB Diploma to Bachelor Degree","IB Diploma 升读学士","IB Diploma","Bachelor",["IB Diploma","Bachelor"]],
  ["matriculation-to-bachelor","Matriculation to Bachelor Degree","大学预科升读学士","Matriculation","Bachelor",["Matriculation","Bachelor"]],
  ["certificate-to-diploma","Certificate to Diploma","证书升读文凭","Certificate","Diploma",["Certificate","Diploma"]],
  ["foundation-to-bachelor","Foundation to Bachelor Degree","Foundation 升读学士","Foundation","Bachelor",["Foundation","Bachelor"]],
  ["bachelor-to-phd","Bachelor to Doctoral Study","学士衔接博士研究","Bachelor","PhD",["Bachelor","Master","PhD"]],
  ["skm-to-dkm-dlkm","SKM to DKM / DLKM","SKM → DKM / DLKM","SKM","DLKM",["SKM","DKM","DLKM"]],
  ["tvet-to-degree","TVET Diploma to Related Degree","TVET 文凭衔接相关学士","TVET Diploma","Bachelor",["TVET Diploma","Bachelor"]],
  ["professional-to-postgraduate","Professional Qualification to Postgraduate Study","专业资格衔接研究生课程","Professional Qualification","Master",["Professional Qualification","Master"]]
];
for (const [id, en, zh, start, end, steps] of pathwaySeeds) {
  if (!studyPathways.some(item => item.id === id)) studyPathways.push({
    id, name: { en, zh }, category: "progression", startQualification: start, endQualification: end,
    country: "Malaysia", steps: steps.map(qualification => ({ qualification, duration: null })),
    description: { en: "Potential progression route. Entry, equivalence, subject prerequisites and credit transfer must be confirmed with the receiving institution or relevant authority.", zh: "可能的升学衔接路线。入学、学历等值、科目先修条件及学分转移须向接收院校或相关机构核实。" },
    dataStatus: "pending"
  });
}

export const skills = [
  { id:"critical-thinking", name:{en:"Critical Thinking",zh:"批判性思维"}, category:"Thinking", description:{en:"Evaluate information, question assumptions and make reasoned decisions.",zh:"评估信息、检视假设并作出有依据的判断。"}, relatedFields:["science","engineering","business","social-sciences"], relatedCareers:["Researcher","Analyst","Engineer"], dataStatus:"directory" },
  { id:"problem-solving", name:{en:"Problem Solving",zh:"解决问题"}, category:"Thinking", description:{en:"Define problems, compare possible approaches and test solutions.",zh:"界定问题、比较不同方法并验证解决方案。"}, relatedFields:["engineering","technology","science"], relatedCareers:["Engineer","Software Developer","Technician"], dataStatus:"directory" },
  { id:"scientific-research", name:{en:"Scientific Research",zh:"科学研究"}, category:"Research", description:{en:"Develop research questions, review evidence and interpret findings.",zh:"提出研究问题、审阅证据并解释研究结果。"}, relatedFields:["science","medical-health","biotechnology"], relatedCareers:["Research Assistant","Biomedical Scientist","Research Scientist"], dataStatus:"directory" },
  { id:"data-analysis", name:{en:"Data Analysis",zh:"数据分析"}, category:"Digital", description:{en:"Organise data, identify patterns and communicate evidence-based insights.",zh:"整理数据、识别模式并传达有证据支持的见解。"}, relatedFields:["technology","business","science"], relatedCareers:["Data Analyst","Research Analyst","Business Analyst"], dataStatus:"directory" },
  { id:"programming", name:{en:"Programming",zh:"编程"}, category:"Digital", description:{en:"Use programming languages and computational thinking to build and test software.",zh:"运用编程语言与计算思维开发及测试软件。"}, relatedFields:["technology","engineering"], relatedCareers:["Software Developer","AI Engineer","Systems Analyst"], dataStatus:"directory" },
  { id:"communication", name:{en:"Communication",zh:"沟通"}, category:"People", description:{en:"Explain ideas clearly and adapt communication to different audiences.",zh:"清楚表达想法，并根据不同对象调整沟通方式。"}, relatedFields:["business","social-sciences","education","medical-health"], relatedCareers:["Teacher","Consultant","Healthcare Professional"], dataStatus:"directory" },
  { id:"teamwork", name:{en:"Teamwork",zh:"团队合作"}, category:"People", description:{en:"Coordinate responsibilities, contribute constructively and work toward shared outcomes.",zh:"协调职责、积极贡献并共同达成目标。"}, relatedFields:["engineering","business","medical-health","design"], relatedCareers:["Project Coordinator","Engineer","Healthcare Team Member"], dataStatus:"directory" },
  { id:"engineering-design", name:{en:"Engineering Design",zh:"工程设计"}, category:"Technical", description:{en:"Translate requirements into concepts, models and testable designs.",zh:"将需求转化为概念、模型和可测试的设计。"}, relatedFields:["engineering","built-environment"], relatedCareers:["Mechanical Engineer","Civil Engineer","Design Engineer"], dataStatus:"directory" },
  { id:"project-management", name:{en:"Project Management",zh:"项目管理"}, category:"Professional", description:{en:"Plan scope, resources, schedules, risks and project communication.",zh:"规划项目范围、资源、时间、风险与沟通。"}, relatedFields:["business","engineering","built-environment"], relatedCareers:["Project Manager","Construction Manager","Operations Manager"], dataStatus:"directory" },
  { id:"creativity", name:{en:"Creativity",zh:"创意"}, category:"Creative", description:{en:"Generate original ideas and explore alternative ways to meet a need.",zh:"提出新颖想法，并探索满足需求的不同方法。"}, relatedFields:["design","arts","technology"], relatedCareers:["Designer","Product Developer","Creative Technologist"], dataStatus:"directory" },
  { id:"attention-to-detail", name:{en:"Attention to Detail",zh:"注重细节"}, category:"Professional", description:{en:"Check accuracy, follow specifications and notice inconsistencies.",zh:"检查准确性、遵循规格并发现不一致之处。"}, relatedFields:["science","engineering","business","medical-health"], relatedCareers:["Laboratory Technologist","Quality Officer","Accountant"], dataStatus:"directory" },
  { id:"adaptability", name:{en:"Adaptability",zh:"适应能力"}, category:"Professional", description:{en:"Adjust approaches when tools, requirements or circumstances change.",zh:"当工具、要求或环境改变时调整做法。"}, relatedFields:["technology","business","engineering","social-sciences"], relatedCareers:["Technology Professional","Consultant","Project Coordinator"], dataStatus:"directory" }
];

export const scholarshipSources = [
  { id: "ptptn", name: { en: "PTPTN Education Financing", zh: "PTPTN 高等教育贷款" }, country: "Malaysia", website: "https://www.ptptn.gov.my/", dataStatus: "directory", note: "Financing eligibility and terms depend on current PTPTN rules." },
  { id: "jpa-scholarships", name: { en: "Public Service Department Scholarships", zh: "公共服务局奖学金" }, country: "Malaysia", website: "https://www.jpa.gov.my/", dataStatus: "directory", note: "Check current scholarship advertisements and eligibility." },
  { id: "mara-education", name: { en: "MARA Education Sponsorship", zh: "MARA 教育资助" }, country: "Malaysia", website: "https://www.mara.gov.my/", dataStatus: "directory", note: "Eligibility and available schemes are subject to current MARA announcements." },
  { id: "yayasan-khazanah", name: { en: "Yayasan Khazanah", zh: "Khazanah 基金会" }, country: "Malaysia", website: "https://www.yayasankhazanah.com.my/", dataStatus: "directory", note: "Check current scholarship programmes and application cycles." },
  { id: "bank-negara-scholarship", name: { en: "Bank Negara Malaysia Scholarships", zh: "马来西亚国家银行奖学金" }, country: "Malaysia", website: "https://www.bnm.gov.my/", dataStatus: "directory", note: "Check current scholarship announcements and eligibility." }
];

export const admissionsTests = [
  { id: "muet", name: "MUET", purpose: "English language proficiency", website: "https://www.mpm.edu.my/", dataStatus: "directory" },
  { id: "ielts", name: "IELTS", purpose: "English language proficiency", website: "https://ielts.org/", dataStatus: "directory" },
  { id: "toefl", name: "TOEFL iBT", purpose: "English language proficiency", website: "https://www.ets.org/toefl.html", dataStatus: "directory" },
  { id: "sat", name: "SAT", purpose: "Admissions testing where required by an institution", website: "https://satsuite.collegeboard.org/sat", dataStatus: "directory" },
  { id: "mathematics-prerequisite", name: "Mathematics prerequisite", purpose: "Programme-specific mathematics subject and grade requirements", website: null, dataStatus: "pending" },
  { id: "science-prerequisite", name: "Science prerequisite", purpose: "Programme-specific science subject and grade requirements", website: null, dataStatus: "pending" }
];

export const courseDataSchema = {
  requiredIdentity: ["id","name","qualification","fieldId","disciplineId","country"],
  institutionSpecific: ["institutionIds","campus","officialProgrammeTitle","officialUrl","intake","duration","studyMode"],
  admission: ["entryRequirements","subjectRequirements","languageRequirements","selectionRequirements"],
  academic: ["curriculum","creditHours","internship","industrialTraining","deliveryMode"],
  cost: ["estimatedFees","feeCurrency","feeAcademicYear","feeStudentCategory","feeSource"],
  recognition: ["accreditation","professionalRecognition","registerReference","accreditationValidity"],
  governance: ["dataStatus","source","lastVerified","verifiedBy","dataNote"],
  rule: "Never publish a course as active or accredited without matching its exact official title, institution, campus, mode and validity period."
};

export const institutionDataSchema = {
  identity: ["id","name","abbreviation","type","ownership","country"],
  campus: ["campusName","address","state","city","studyLocation"],
  delivery: ["officialWebsite","admissionsUrl","internationalAdmissionsUrl"],
  governance: ["source","dataStatus","lastVerified","dataNote"],
  rule: "An institution directory entry does not confirm a programme, campus intake or accreditation."
};

export const careerDataSchema = {
  identity: ["id","name","fieldId","disciplineId"],
  profile: ["description","responsibilities","skills","workEnvironments","progression"],
  education: ["qualificationLevels","recommendedCourseIds"],
  regulation: ["professionalRequirements","registrationNotes"],
  labourMarket: ["salaryData","marketOutlook","marketSource","marketYear"],
  rule: "Do not publish salary or job-growth figures without a dated and attributable source."
};

export const scholarshipDataSchema = {
  identity: ["id","name","provider","country"],
  award: ["awardType","amount","currency","coverage","renewalConditions"],
  eligibility: ["citizenship","academicRequirements","incomeRequirements","eligibleLevels","eligibleFields"],
  application: ["openingDate","deadline","applicationUrl","officialSource"],
  governance: ["dataStatus","lastVerified","dataNote"],
  rule: "A provider directory entry is not an active scholarship offer. Confirm the current application cycle and eligibility."
};

export const databaseSummaryExpanded = {
  courseSearchSeeds: courses.filter(item => item.dataStatus === "pending").length,
  illustrativeCourses: courses.filter(item => item.dataStatus === "illustrative").length,
  verifiedCourses: courses.filter(item => ["verified","official"].includes(item.dataStatus)).length,
  pendingCareers: careers.filter(item => item.dataStatus === "pending").length,
  scholarshipSources: scholarshipSources.length,
  admissionsTests: admissionsTests.length,
  skills: skills.length,
  note: "Counts describe records in this prototype, not the total number of active programmes available in Malaysia."
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
  discoveryQuestions: discoveryQuestions.length,
  scholarshipSources: scholarshipSources.length,
  admissionsTests: admissionsTests.length,
  skills: skills.length,
  verifiedCourses: courses.filter(item => ["verified", "official"].includes(item.dataStatus)).length,
  pendingCourses: courses.filter(item => item.dataStatus === "pending").length
};


/* =========================================================
   15. CONTENT COMPLETION LAYER (V3.0.1)
   Enriches the catalogue with bilingual learning frameworks.
   IMPORTANT: framework modules are guidance, NOT institution-issued
   syllabi. Programme-specific facts remain pending until sourced.
   ========================================================= */

const moduleTranslations = {
  "Engineering Mathematics":"工程数学", "Engineering Mechanics":"工程力学", "Structural Analysis":"结构分析",
  "Structural Design":"结构设计", "Geotechnical Engineering":"岩土工程", "Hydraulics":"水力学",
  "Transportation Engineering":"交通工程", "Construction Materials":"建筑材料", "Engineering Drawing":"工程制图",
  "Thermodynamics":"热力学", "Fluid Mechanics":"流体力学", "Machine Design":"机械设计",
  "Manufacturing Technology":"制造技术", "Control Systems":"控制系统", "Circuit Theory":"电路理论",
  "Electronics":"电子学", "Electrical Machines":"电机学", "Power Systems":"电力系统",
  "Digital Systems":"数字系统", "Programming Fundamentals":"编程基础", "Data Structures and Algorithms":"数据结构与算法",
  "Database Systems":"数据库系统", "Software Engineering":"软件工程", "Computer Networks":"计算机网络",
  "Operating Systems":"操作系统", "Statistics":"统计学", "Research Methods":"研究方法",
  "Cell Biology":"细胞生物学", "Genetics":"遗传学", "Microbiology":"微生物学",
  "Biochemistry":"生物化学", "Molecular Biology":"分子生物学", "Human Anatomy and Physiology":"人体解剖与生理学",
  "Pathology":"病理学", "Pharmacology":"药理学", "Epidemiology":"流行病学",
  "Clinical Practice":"临床实践", "Patient Care":"病患照护", "Health Promotion":"健康促进",
  "Accounting Principles":"会计原理", "Financial Accounting":"财务会计", "Management Accounting":"管理会计",
  "Auditing":"审计学", "Taxation":"税务", "Corporate Finance":"企业财务",
  "Marketing Principles":"市场营销原理", "Consumer Behaviour":"消费者行为", "Digital Marketing":"数码营销",
  "Organisational Behaviour":"组织行为学", "Human Resource Management":"人力资源管理",
  "Economics":"经济学", "Business Statistics":"商业统计学", "Business Communication":"商业沟通",
  "Design Fundamentals":"设计基础", "Visual Communication":"视觉传达", "Typography":"字体设计",
  "Design Studio":"设计工作室", "User Experience Design":"用户体验设计", "Digital Media Production":"数码媒体制作",
  "Psychology":"心理学", "Sociology":"社会学", "Social Research Methods":"社会研究方法",
  "Public Policy":"公共政策", "Community Development":"社区发展", "Counselling Skills":"辅导技巧",
  "Education Psychology":"教育心理学", "Curriculum Design":"课程设计", "Teaching Practice":"教学实践",
  "Learning Technologies":"学习科技", "Assessment and Evaluation":"评量与评价",
  "Environmental Science":"环境科学", "Ecology":"生态学", "Chemistry":"化学", "Physics":"物理学",
  "Food Safety":"食品安全", "Food Processing":"食品加工", "Quality Assurance":"品质保证",
  "Supply Chain Management":"供应链管理", "Logistics Operations":"物流运作", "Procurement":"采购管理",
  "Project Management":"项目管理", "Construction Technology":"建筑技术", "Quantity Measurement":"工程量计算",
  "Building Services":"建筑设备系统", "Building Information Modelling":"建筑信息模型", "Land Surveying":"土地测量"
};

Object.assign(moduleTranslations, {
  "Engineering Design":"工程设计", "Materials and Technology":"材料与技术", "Modelling and Analysis":"建模与分析", "Systems, Safety and Sustainability":"系统、安全与可持续发展", "Engineering Project Practice":"工程项目实践",
  "Human Biology and Health Science":"人体生物学与健康科学", "Evidence-Based Practice":"循证实践", "Professional Ethics and Patient Safety":"专业伦理与病患安全",
  "Cell and Molecular Biology":"细胞与分子生物学", "Genetics and Inheritance":"遗传学与遗传规律", "Biochemistry and Metabolism":"生物化学与代谢", "Biological Data Analysis":"生物数据分析", "Research Design and Ethics":"研究设计与伦理",
  "Programming and Computational Thinking":"编程与计算思维", "Algorithms and Data Structures":"算法与数据结构", "Computer Systems and Networks":"计算机系统与网络", "Databases and Information Management":"数据库与信息管理", "Security and Responsible Computing":"安全与负责任计算", "Software or Technology Project":"软件或科技项目",
  "Business Foundations":"商业基础", "Accounting and Financial Literacy":"会计与财务素养", "Marketing and Customer Insight":"市场营销与客户洞察", "Management and Organisations":"管理与组织", "Business Data and Analytics":"商业数据与分析", "Strategy and Professional Practice":"策略与专业实践",
  "Scientific Principles":"科学原理", "Mathematics and Quantitative Methods":"数学与定量方法", "Laboratory and Field Methods":"实验室与田野方法", "Measurement and Data Analysis":"测量与数据分析", "Science Communication and Ethics":"科学传播与伦理",
  "Built Environment Fundamentals":"建成环境基础", "Design and Technical Representation":"设计与技术表达", "Construction Materials and Methods":"建筑材料与施工方法", "Digital Modelling and Measurement":"数码建模与测量", "Contracts, Regulations and Safety":"合约、法规与安全", "Integrated Project Practice":"综合项目实践",
  "Social and Behavioural Foundations":"社会与行为基础", "People, Culture and Institutions":"人群、文化与制度", "Policy and Community Contexts":"政策与社区脉络", "Ethics and Professional Practice":"伦理与专业实践",
  "Learning and Development":"学习与发展", "Curriculum and Instruction":"课程与教学", "Teaching and Facilitation":"教学与引导", "Assessment and Evaluation":"评量与评价", "Inclusive Learning Environments":"融合教育环境", "Teaching Practice and Reflection":"教学实践与反思",
  "Creative and Design Foundations":"创意与设计基础", "Visual Communication and Concepts":"视觉传达与概念", "Digital Tools and Production":"数码工具与制作", "User or Audience Research":"用户或受众研究", "Studio and Portfolio Practice":"工作室与作品集实践", "Creative Industry and Professional Practice":"创意产业与专业实践",
  "Transport and Logistics Foundations":"运输与物流基础", "Operations and Process Design":"营运与流程设计", "Supply Networks and Distribution":"供应网络与配送", "Data and Performance Analysis":"数据与绩效分析", "Safety and Regulations":"安全与法规", "Industry Project Practice":"产业项目实践",
  "Agricultural and Food Systems":"农业与食品系统", "Biological and Production Science":"生物与生产科学", "Processing and Quality":"加工与品质", "Sustainability and Resource Management":"可持续发展与资源管理", "Applied Research Methods":"应用研究方法", "Industry and Professional Practice":"产业与专业实践"
});

const frameworkDescriptions = {
  en: "A study-planning topic commonly associated with this discipline. Exact module titles, sequencing and credit values vary by institution.",
  zh: "此为该学科常见的学习主题参考。实际科目名称、修读顺序及学分因院校而异。"
};

// Supply a structured topic framework where the original discipline record
// did not yet include subject examples. These are study guides, not official syllabi.
const fieldTopicFrameworks = {
  engineering: ["Engineering Mathematics", "Engineering Design", "Materials and Technology", "Modelling and Analysis", "Systems, Safety and Sustainability", "Engineering Project Practice"],
  "medicine-health": ["Human Biology and Health Science", "Anatomy and Physiology", "Clinical or Health Practice", "Evidence-Based Practice", "Research Methods and Data", "Professional Ethics and Patient Safety"],
  "biological-sciences": ["Cell and Molecular Biology", "Genetics and Inheritance", "Biochemistry and Metabolism", "Laboratory Methods", "Biological Data Analysis", "Research Design and Ethics"],
  "computer-technology": ["Programming and Computational Thinking", "Algorithms and Data Structures", "Computer Systems and Networks", "Databases and Information Management", "Security and Responsible Computing", "Software or Technology Project"],
  business: ["Business Foundations", "Accounting and Financial Literacy", "Marketing and Customer Insight", "Management and Organisations", "Business Data and Analytics", "Strategy and Professional Practice"],
  science: ["Scientific Principles", "Mathematics and Quantitative Methods", "Laboratory and Field Methods", "Measurement and Data Analysis", "Research Design", "Science Communication and Ethics"],
  "architecture-built-environment": ["Built Environment Fundamentals", "Design and Technical Representation", "Construction Materials and Methods", "Digital Modelling and Measurement", "Contracts, Regulations and Safety", "Integrated Project Practice"],
  "social-sciences": ["Social and Behavioural Foundations", "People, Culture and Institutions", "Research Methods", "Policy and Community Contexts", "Data Interpretation", "Ethics and Professional Practice"],
  education: ["Learning and Development", "Curriculum and Instruction", "Teaching and Facilitation", "Assessment and Evaluation", "Inclusive Learning Environments", "Teaching Practice and Reflection"],
  "design-creative": ["Creative and Design Foundations", "Visual Communication and Concepts", "Digital Tools and Production", "User or Audience Research", "Studio and Portfolio Practice", "Creative Industry and Professional Practice"],
  "transport-logistics": ["Transport and Logistics Foundations", "Operations and Process Design", "Supply Networks and Distribution", "Data and Performance Analysis", "Safety and Regulations", "Industry Project Practice"],
  agriculture: ["Agricultural and Food Systems", "Biological and Production Science", "Processing and Quality", "Sustainability and Resource Management", "Applied Research Methods", "Industry and Professional Practice"]
};
for (const discipline of disciplines) {
  if (!Array.isArray(discipline.subjects) || discipline.subjects.length === 0) {
    const topics = fieldTopicFrameworks[discipline.fieldId] || fieldTopicFrameworks.science;
    discipline.subjects = topics.map(topic => topic.replace(/^(Engineering|Business|Scientific|Built Environment|Social and Behavioural|Creative and Design|Transport and Logistics|Agricultural and Food) Foundations$/, `${discipline.name.en} Foundations`));
  }
}

// Expand each discipline into a useful bilingual study profile.
for (const discipline of disciplines) {
  const subjectList = Array.isArray(discipline.subjects) ? discipline.subjects : [];
  discipline.studyFocus = discipline.description;
  discipline.coreTopics = subjectList.map(subject => ({
    en: subject,
    zh: moduleTranslations[subject] || `${discipline.name.zh}相关主题：${subject}`,
  }));
  discipline.typicalProjects = discipline.typicalProjects || {
    en: [`Introductory ${discipline.name.en} case study`, `Applied project using ${subjectList.slice(0,2).join(" and ") || discipline.name.en}`, "Research, design or practice-based assignment"],
    zh: [`${discipline.name.zh}入门案例研究`, `运用${subjectList.slice(0,2).map(x => moduleTranslations[x] || x).join("与") || discipline.name.zh}的应用项目`, "研究、设计或实践型作业"]
  };
  discipline.industrySectors = discipline.industrySectors || {
    en: ["Private sector organisations", "Public agencies and services", "Research, education or consulting"],
    zh: ["私人企业与机构", "公共部门与服务", "研究、教育或顾问领域"]
  };
  discipline.profileNote = {
    en: "General discipline guide. This is not a substitute for an institution's official programme specification.",
    zh: "学科通用介绍，不能取代院校正式课程说明。"
  };
}

// Fill curriculum panels with transparent, discipline-based learning frameworks.
// These do not change the accreditation or verification status of any course.
for (const course of courses) {
  const discipline = disciplines.find(item => item.id === course.disciplineId);
  if (!discipline) continue;
  if (!Array.isArray(course.curriculum) || course.curriculum.length === 0) {
    const subjects = discipline.subjects || [];
    course.curriculum = subjects.map((subject, index) => ({
      id: `${course.id}-framework-${index+1}`,
      name: { en: subject, zh: moduleTranslations[subject] || `${discipline.name.zh}相关主题：${subject}` },
      description: frameworkDescriptions,
      stage: index < 2 ? "Foundation" : index < 4 ? "Core" : "Applied",
      frameworkOnly: true
    }));
  }
  course.curriculumBasis = "discipline-framework";
  course.curriculumNote = {
    en: "Indicative subject framework generated from the discipline profile. It is not an official curriculum for this named award. Confirm exact modules, credits, year of study and practical components with the institution.",
    zh: "此为依据学科资料整理的参考科目框架，并非该课程名称对应的院校官方课纲。实际科目、学分、修读年份及实习安排须向院校核实。"
  };
  if (!course.learningOutcomes) course.learningOutcomes = {
    en: ["Explain key concepts in the discipline", "Apply foundational methods to structured problems", "Interpret evidence and communicate findings"],
    zh: ["解释该学科的核心概念", "运用基础方法处理结构化问题", "解读证据并清楚表达研究结果"]
  };
}

// Career profiles are exploratory. They do not imply a licence or guaranteed job outcome.
const careerProfileDefaults = {
  engineering: {
    environments: ["Engineering consultancies", "Manufacturing and industrial sites", "Infrastructure and project teams", "Testing and research facilities"],
    skills: ["Problem Solving", "Engineering Design", "Data Analysis", "Project Management"],
    progression: ["Graduate / Junior Engineer", "Engineer", "Senior / Specialist Engineer", "Technical Lead / Engineering Manager"]
  },
  "medicine-health": {
    environments: ["Hospitals and clinics", "Diagnostic and healthcare laboratories", "Community health services", "Health research organisations"],
    skills: ["Communication", "Scientific Research", "Attention to Detail", "Teamwork"],
    progression: ["Entry-level support or graduate role", "Experienced practitioner / specialist pathway", "Senior or supervisory role", "Education, research or management pathway"]
  },
  "biological-sciences": {
    environments: ["Research laboratories", "Biotechnology and pharmaceutical companies", "Universities", "Public health and testing laboratories"],
    skills: ["Scientific Research", "Data Analysis", "Attention to Detail", "Problem Solving"],
    progression: ["Laboratory / Research Assistant", "Scientist / Research Associate", "Senior Scientist", "Research Lead / Laboratory Manager"]
  },
  "computer-technology": {
    environments: ["Technology companies", "Software and product teams", "Cybersecurity and IT operations", "Research and data teams"],
    skills: ["Programming", "Problem Solving", "Data Analysis", "Communication"],
    progression: ["Junior Developer / Analyst", "Developer / Engineer", "Senior / Specialist", "Technical Lead / Architect / Manager"]
  },
  "architecture-built-environment": {
    environments: ["Design and engineering consultancies", "Construction sites", "Property and infrastructure organisations", "Government planning agencies"],
    skills: ["Engineering Design", "Project Management", "Communication", "Attention to Detail"],
    progression: ["Assistant / Graduate", "Professional / Project Executive", "Senior Consultant / Manager", "Principal / Director"]
  },
  business: {
    environments: ["Corporations and SMEs", "Financial and professional services", "Start-ups", "Public and non-profit organisations"],
    skills: ["Data Analysis", "Communication", "Problem Solving", "Project Management"],
    progression: ["Assistant / Analyst", "Executive / Specialist", "Senior Executive / Manager", "Head of Function / Director"]
  },
  "social-sciences": {
    environments: ["Public services", "Community organisations", "Research institutions", "Policy and consulting teams"],
    skills: ["Communication", "Critical Thinking", "Scientific Research", "Teamwork"],
    progression: ["Research / Programme Assistant", "Officer / Analyst", "Senior Officer / Specialist", "Programme Lead / Policy or Research Manager"]
  },
  education: {
    environments: ["Schools and learning centres", "Education technology organisations", "Training providers", "Education research and policy"],
    skills: ["Communication", "Creativity", "Teamwork", "Adaptability"],
    progression: ["Teaching / Learning Assistant", "Educator / Trainer", "Senior Educator / Coordinator", "Education Lead / Specialist"]
  },
  "design-creative": {
    environments: ["Design studios", "Media and production companies", "Technology product teams", "Freelance and creative businesses"],
    skills: ["Creativity", "Communication", "Problem Solving", "Adaptability"],
    progression: ["Junior Designer / Assistant", "Designer / Creator", "Senior Designer / Art Director", "Creative Lead / Studio Director"]
  },
  science: {
    environments: ["Research laboratories", "Universities", "Testing and quality laboratories", "Government science agencies"],
    skills: ["Scientific Research", "Data Analysis", "Critical Thinking", "Attention to Detail"],
    progression: ["Research / Laboratory Assistant", "Scientist / Analyst", "Senior Scientist", "Research Lead / Laboratory Manager"]
  }
};
for (const career of careers) {
  const profile = careerProfileDefaults[career.fieldId] || careerProfileDefaults.science;
  career.workEnvironments = career.workEnvironments || { en: profile.environments, zh: profile.environments.map(x => ({
    "Engineering consultancies":"工程顾问公司", "Manufacturing and industrial sites":"制造与工业现场", "Infrastructure and project teams":"基础设施与项目团队", "Testing and research facilities":"测试与研究设施",
    "Hospitals and clinics":"医院与诊所", "Diagnostic and healthcare laboratories":"诊断与医疗实验室", "Community health services":"社区健康服务", "Health research organisations":"健康研究机构",
    "Research laboratories":"研究实验室", "Biotechnology and pharmaceutical companies":"生物科技与制药公司", "Universities":"大学", "Public health and testing laboratories":"公共卫生与检测实验室",
    "Technology companies":"科技公司", "Software and product teams":"软件与产品团队", "Cybersecurity and IT operations":"网络安全与IT营运", "Research and data teams":"研究与数据团队",
    "Design and engineering consultancies":"设计与工程顾问公司", "Construction sites":"建筑工地", "Property and infrastructure organisations":"房地产与基础设施机构", "Government planning agencies":"政府规划机构",
    "Corporations and SMEs":"企业与中小型企业", "Financial and professional services":"金融与专业服务", "Start-ups":"初创企业", "Public and non-profit organisations":"公共及非营利机构",
    "Public services":"公共服务", "Community organisations":"社区组织", "Research institutions":"研究机构", "Policy and consulting teams":"政策与顾问团队",
    "Schools and learning centres":"学校与学习中心", "Education technology organisations":"教育科技机构", "Training providers":"培训机构", "Education research and policy":"教育研究与政策",
    "Design studios":"设计工作室", "Media and production companies":"媒体与制作公司", "Technology product teams":"科技产品团队", "Freelance and creative businesses":"自由职业与创意企业",
    "Testing and quality laboratories":"测试与品质实验室", "Government science agencies":"政府科学机构"
  }[x] || x)) };
  career.skills = career.skills || { en: profile.skills, zh: profile.skills.map(x => ({"Problem Solving":"解决问题","Engineering Design":"工程设计","Data Analysis":"数据分析","Project Management":"项目管理","Communication":"沟通","Scientific Research":"科学研究","Attention to Detail":"注重细节","Teamwork":"团队合作","Programming":"编程","Critical Thinking":"批判性思维","Creativity":"创意","Adaptability":"适应能力"}[x] || x)) };
  career.progression = career.progression || { en: profile.progression, zh: profile.progression.map(x => x) };
  career.profileNote = { en: "Typical examples only. Actual duties, entry routes and regulated scopes vary by employer and jurisdiction.", zh: "以上为常见职业发展示例。实际职责、入职路线及受监管工作范围因雇主和司法管辖区而异。" };
}

// Extend the skill library with additional transferable and discipline skills.
const additionalSkillSeeds = [
  ["technical-writing","Technical Writing","技术写作","Communication","Explain technical information through clear, structured documents.","以清晰、有结构的文件说明技术信息。",["engineering","technology","science"],["Technical Writer","Engineer","Research Assistant"]],
  ["scientific-literacy","Scientific Literacy","科学素养","Research","Understand how scientific claims are tested, interpreted and communicated.","理解科学主张如何被验证、解释与传达。",["science","biological-sciences","medicine-health"],["Research Assistant","Laboratory Technologist","Science Communicator"]],
  ["laboratory-techniques","Laboratory Techniques","实验室技术","Technical","Follow laboratory procedures, document observations and handle instruments responsibly.","遵循实验室程序、记录观察并妥善使用仪器。",["science","biological-sciences","medicine-health"],["Laboratory Technologist","Research Assistant"]],
  ["clinical-communication","Clinical Communication","临床沟通","People","Communicate respectfully and accurately in healthcare learning and service settings.","在医疗学习与服务环境中尊重、准确地沟通。",["medicine-health"],["Healthcare Assistant","Nurse","Allied Health Professional"]],
  ["spatial-visualisation","Spatial Visualisation","空间想象","Technical","Interpret drawings, models and three-dimensional relationships.","理解图纸、模型与三维空间关系。",["engineering","architecture-built-environment","design-creative"],["Design Engineer","Architectural Assistant","BIM Technician"]],
  ["cad-modelling","CAD Modelling","CAD建模","Digital","Create and interpret computer-aided technical drawings and models.","建立及解读计算机辅助技术图纸与模型。",["engineering","architecture-built-environment","design-creative"],["CAD Technician","Design Engineer","BIM Modeller"]],
  ["bim-coordination","BIM Coordination","BIM协调","Digital","Coordinate digital building information across project disciplines.","协调不同项目专业之间的建筑数码信息。",["architecture-built-environment","engineering"],["BIM Coordinator","BIM Technician","Digital Construction Specialist"]],
  ["quantitative-reasoning","Quantitative Reasoning","数量推理","Thinking","Use numerical evidence, estimation and mathematical reasoning to assess questions.","运用数值证据、估算与数学推理分析问题。",["engineering","science","business"],["Analyst","Engineer","Quantity Surveyor"]],
  ["risk-assessment","Risk Assessment","风险评估","Professional","Identify uncertainties, assess possible impacts and document controls.","识别不确定因素、评估潜在影响并记录控制措施。",["engineering","business","architecture-built-environment"],["Safety Officer","Project Engineer","Risk Analyst"]],
  ["quality-control","Quality Control","品质控制","Technical","Check outputs against documented standards and acceptance criteria.","依据文件标准与验收条件检查成果。",["engineering","science","business"],["Quality Officer","Laboratory Analyst","Manufacturing Engineer"]],
  ["research-design","Research Design","研究设计","Research","Choose suitable questions, methods and evidence for a structured investigation.","为系统性研究选择合适的问题、方法与证据。",["science","social-sciences","medicine-health"],["Research Assistant","Research Analyst","Scientist"]],
  ["ethical-reasoning","Ethical Reasoning","伦理判断","Professional","Recognise ethical considerations and explain responsible choices.","识别伦理考量并说明负责任的选择。",["medicine-health","science","business","social-sciences"],["Healthcare Professional","Researcher","Policy Analyst"]],
  ["cyber-hygiene","Cybersecurity Awareness","网络安全意识","Digital","Use safe, privacy-aware practices when working with digital information.","处理数码信息时采用安全且尊重隐私的做法。",["technology","business","education"],["IT Support Specialist","Security Analyst"]],
  ["user-research","User Research","用户研究","Research","Understand user needs through structured observation, interviews and testing.","通过有结构的观察、访谈与测试了解用户需求。",["design-creative","technology","business"],["UX Researcher","Product Designer","Service Designer"]],
  ["financial-literacy","Financial Literacy","财务素养","Professional","Understand budgets, costs, financial choices and basic financial information.","理解预算、成本、财务选择与基础财务信息。",["business","engineering"],["Accountant","Business Analyst","Project Coordinator"]],
  ["sustainability-literacy","Sustainability Literacy","可持续发展素养","Thinking","Consider environmental, social and economic effects when evaluating solutions.","评估方案时考虑环境、社会与经济影响。",["engineering","science","business","architecture-built-environment"],["Environmental Analyst","Sustainability Officer","Engineer"]],
  ["conflict-resolution","Conflict Resolution","冲突协调","People","Listen to different perspectives and work toward constructive agreements.","倾听不同观点并推动建设性共识。",["business","education","social-sciences"],["HR Officer","Project Coordinator","Community Worker"]],
  ["presentation","Presentation","演讲与展示","Communication","Organise information and present ideas to an audience.","组织信息并向听众清楚展示想法。",["business","education","engineering","science"],["Consultant","Teacher","Researcher"]],
  ["digital-literacy","Digital Literacy","数码素养","Digital","Select and use digital tools appropriately and evaluate online information.","恰当选择数码工具并评估线上信息。",["technology","business","education","social-sciences"],["Digital Content Executive","IT Support Specialist","Analyst"]],
  ["systems-thinking","Systems Thinking","系统思维","Thinking","Understand how components interact within a larger process or organisation.","理解各组成部分如何在更大的流程或组织中互相影响。",["engineering","technology","business","science"],["Systems Engineer","Operations Analyst","Researcher"]]
];
for (const [id,en,zh,category,descEn,descZh,fields,relatedCareers] of additionalSkillSeeds) {
  if (!skills.some(skill => skill.id === id)) skills.push({ id, name:{en,zh}, category, description:{en:descEn,zh:descZh}, relatedFields:fields, relatedCareers, dataStatus:"directory" });
}

// Expand the official-source directory for Malaysia. These are reference portals,
// not proof that a specific course or scholarship is currently open.
DATA_GOVERNANCE.malaysiaQualificationFrameworkSource = "https://www.mqa.gov.my/";
DATA_GOVERNANCE.mqrSearchSource = "https://www2.mqa.gov.my/mqr/english/ecarianakr.cfm";
DATA_GOVERNANCE.tvetCatalogueSource = "https://mohon.tvet.gov.my/awam-kursus/katalog";
DATA_GOVERNANCE.tvetPortalSource = "https://www.tvet.gov.my/";
DATA_GOVERNANCE.upuPortalSource = "https://upu.mohe.gov.my/";
DATA_GOVERNANCE.upuCircular2026Source = "https://upu.mohe.gov.my/";
DATA_GOVERNANCE.scholarshipVerificationRule = "Only publish an award as currently open after checking the provider's current application notice, eligibility, deadline and official application page.";

// Connect every course search record to relevant career exploration entries.
// The relationship is a discovery aid, not a claim that a course guarantees a job.
for (const course of courses) {
  if (!Array.isArray(course.careerIds) || course.careerIds.length === 0) {
    const discipline = disciplines.find(item => item.id === course.disciplineId);
    const exact = careers.filter(career => career.disciplineId === course.disciplineId).map(career => career.id);
    const disciplineLinks = (discipline?.careers || []).filter(id => careers.some(career => career.id === id));
    const fieldLinks = careers.filter(career => career.fieldId === course.fieldId).slice(0, 4).map(career => career.id);
    course.careerIds = [...new Set([...exact, ...disciplineLinks, ...fieldLinks])].slice(0, 6);
  }
}
for (const career of careers) {
  career.recommendedCourseIds = courses.filter(course => course.disciplineId === career.disciplineId).slice(0, 8).map(course => course.id);
}

// Add a practical Malaysia scholarship-source directory based on MOHE's
// domestic sponsorship index. No record is marked as an active award.
const additionalScholarshipSources = [
  { id:"mohe-domestic-sponsorship-index", name:{en:"MOHE Domestic Sponsorship Directory",zh:"高等教育部国内奖助学金目录"}, country:"Malaysia", website:"https://www.mohe.gov.my/en/services/higher-education-funding/sponsorship-by-domestic-agencies-institutions/domestic-scholarship-list", dataStatus:"official", note:"Official consolidated directory of domestic sponsorship notices. Check each notice for its current cycle, eligibility and deadline." },
  { id:"petronas-education-sponsorship", name:{en:"PETRONAS Education Sponsorship",zh:"PETRONAS 教育赞助"}, country:"Malaysia", website:"https://educationsponsorship.petronas.com.my/OAS", dataStatus:"directory", note:"Sponsorship schemes and application periods vary by intake. The 2026 SPM-leaver cycle is historical; check for the next official notice." },
  { id:"tnb-ytn-scholarship", name:{en:"Yayasan Tenaga Nasional Scholarships",zh:"国家能源基金会奖学金"}, country:"Malaysia", website:"https://ytn.tnb.com.my/scholarships.html", dataStatus:"directory", note:"Includes different sponsorship routes. Confirm eligible qualification, institution and current application period." },
  { id:"jpa-sponsorship", name:{en:"Public Service Department Sponsorship",zh:"公共服务局教育赞助"}, country:"Malaysia", website:"https://penajaan.jpa.gov.my/", dataStatus:"directory", note:"Schemes and eligible applicant groups vary by announcement and year." },
  { id:"mara-education-financing", name:{en:"MARA Education Sponsorship and Financing",zh:"MARA 教育赞助与融资"}, country:"Malaysia", website:"https://www.mara.gov.my/bm/pendidikan/pembiayaan-pelajaran/", dataStatus:"directory", note:"Eligibility depends on the scheme, applicant category and current MARA announcement." },
  { id:"yayasan-peneraju", name:{en:"Yayasan Peneraju",zh:"Yayasan Peneraju 人才基金会"}, country:"Malaysia", website:"https://yayasanpeneraju.com.my/", dataStatus:"directory", note:"Provides selected education and talent-development financing programmes; check the current programme list." },
  { id:"bank-negara-scholarship", name:{en:"Bank Negara Malaysia Scholarships",zh:"马来西亚国家银行奖学金"}, country:"Malaysia", website:"https://www.bnm.gov.my/careers/scholarships", dataStatus:"directory", note:"Check current scholarship announcements and eligibility directly with Bank Negara Malaysia." },
  { id:"yayasan-khazanah-scholarship", name:{en:"Yayasan Khazanah Scholarships",zh:"Khazanah 基金会奖学金"}, country:"Malaysia", website:"https://www.yayasankhazanah.com.my/scholarship-programmes", dataStatus:"directory", note:"Different programmes may have different study levels, destinations and selection criteria." },
  { id:"yayasan-bank-rakyat", name:{en:"Yayasan Bank Rakyat Education Financing",zh:"银行人民基金会教育资助"}, country:"Malaysia", website:"https://www.ybr.com.my/", dataStatus:"directory", note:"Check the current education-financing announcement and repayment or award terms." },
  { id:"shell-malaysia-scholarship", name:{en:"Shell Malaysia Student Opportunities",zh:"Shell Malaysia 学生机会"}, country:"Malaysia", website:"https://www.shell.com.my/careers/students-and-graduates.html", dataStatus:"directory", note:"Student opportunities and sponsorship availability depend on the current recruitment cycle." },
  { id:"yayasan-sime-darby", name:{en:"Yayasan Sime Darby Scholarships",zh:"森那美基金会奖学金"}, country:"Malaysia", website:"https://www.yayasansimedarby.com/", dataStatus:"directory", note:"Check the foundation's current scholarship programme, eligible courses and deadlines." }
];
for (const item of additionalScholarshipSources) {
  if (!scholarshipSources.some(existing => existing.id === item.id)) scholarshipSources.push(item);
}
DATA_GOVERNANCE.scholarshipDirectorySource = "https://www.mohe.gov.my/en/services/higher-education-funding/sponsorship-by-domestic-agencies-institutions/domestic-scholarship-list";

// Qualification and admissions reference cards. These explain the credential;
// they do not replace programme-specific entry requirements or equivalency decisions.
const additionalAdmissionReferences = [
  { id:"spm-qualification", name:"SPM", purpose:"Malaysian secondary-school qualification. Programme entry depends on required subjects, grades and the institution's current rules.", website:"https://www.moe.gov.my/", dataStatus:"directory" },
  { id:"uec-qualification", name:"UEC", purpose:"Unified Examination Certificate. Acceptance, subject prerequisites and grade requirements vary by institution and programme; confirm directly with the receiving institution.", website:null, dataStatus:"pending" },
  { id:"stpm-qualification", name:"STPM", purpose:"Pre-university qualification used for selected undergraduate entry routes. Check the current UPU circular and programme-specific conditions.", website:"https://upu.mohe.gov.my/", dataStatus:"directory" },
  { id:"matriculation-qualification", name:"Matriculation", purpose:"Pre-university qualification. Entry requirements and programme selection are governed by the current admissions cycle.", website:"https://upu.mohe.gov.my/", dataStatus:"directory" },
  { id:"foundation-qualification", name:"Foundation / Asasi", purpose:"Pre-university route. Recognition and progression may be limited by institution, field, subject prerequisites and programme agreements.", website:"https://www2.mqa.gov.my/mqr/english/ecarianakr.cfm", dataStatus:"directory" },
  { id:"a-level-qualification", name:"A-Level", purpose:"International pre-university qualification. Subject combinations and grade requirements are programme-specific.", website:null, dataStatus:"directory" },
  { id:"diploma-qualification", name:"Diploma", purpose:"May support entry into a related degree, subject to accreditation, field relevance, grades and credit-transfer assessment.", website:"https://www2.mqa.gov.my/mqr/english/ecarianakr.cfm", dataStatus:"directory" },
  { id:"degree-qualification", name:"Bachelor's Degree", purpose:"Typical entry qualification for many postgraduate programmes; discipline, grades, research preparation and other conditions vary.", website:"https://www2.mqa.gov.my/mqr/english/ecarianakr.cfm", dataStatus:"directory" }
];
for (const item of additionalAdmissionReferences) {
  if (!admissionsTests.some(existing => existing.id === item.id)) admissionsTests.push(item);
}

// Fill missing institution descriptions with transparent directory guidance.
// Do not fabricate an institutional history, ranking, programme list or address.
for (const institution of institutions) {
  if (!institution.description) {
    const country = institution.country || "the listed country";
    const type = institution.type || "higher-education provider";
    institution.description = {
      en: `${type} directory entry in ${country}. Confirm current programmes, campus details, admissions, fees and recognition through the institution's official website and relevant national register.`,
      zh: `${country}的${type}目录条目。课程、校区、招生、学费及资格认可情况，须通过院校官方网站及相关国家登记册核实。`
    };
  }
  if (!institution.website) institution.websiteStatus = "pending";
  institution.profileNote = {
    en: "Directory information only. Listing an institution does not verify that a specific programme is active, accredited or open for admission.",
    zh: "此为院校目录资料。列出院校不代表其特定课程现行开办、已获认证或正在招生。"
  };
}

// Keep summary counters aligned with the enriched in-memory catalogue.
databaseSummaryExpanded.skills = skills.length;
databaseSummaryExpanded.courseSearchSeeds = courses.filter(item => item.dataStatus === "pending").length;
databaseSummaryExpanded.illustrativeCourses = courses.filter(item => item.dataStatus === "illustrative").length;
databaseSummaryExpanded.verifiedCourses = courses.filter(item => ["verified","official"].includes(item.dataStatus)).length;
