
/* =========================================================
   FIND YOUR FUTURE
   STUDY PATHWAYS ENGINE
   Version: 2.3.0
   ========================================================= */

import {
  studyPathways,
  qualificationLevels
} from "./data.js";


/* =========================================================
   1. QUALIFICATION NORMALISATION
   ========================================================= */

const qualificationAliases = {
  "spm": "SPM",
  "uec": "UEC",
  "stpm": "STPM",
  "a-level": "A-Level",
  "alevel": "A-Level",
  "foundation": "Foundation",
  "certificate": "Certificate",
  "diploma": "Diploma",
  "advanced-diploma": "Advanced Diploma",
  "postgraduate-diploma": "Postgraduate Diploma",
  "bachelor": "Bachelor",
  "bachelor's-degree": "Bachelor",
  "degree": "Bachelor",
  "master": "Master",
  "master's-degree": "Master",
  "phd": "PhD",
  "doctoral-degree": "PhD",
  "tvet": "TVET",
  "doctorate": "PhD"
};

export function normaliseQualification(value) {
  if (!value) return null;

  const key = String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  return qualificationAliases[key] ?? value;
}


/* =========================================================
   2. QUALIFICATION ORDER
   ========================================================= */

const qualificationOrder = {
  SPM: 1,
  UEC: 1,
  "A-Level": 2,
  STPM: 2,
  Foundation: 2,
  Certificate: 2,
  Diploma: 3,
  "Advanced Diploma": 4,
  Bachelor: 5,
  "Postgraduate Diploma": 6,
  Master: 7,
  PhD: 8
};

export function getQualificationOrder(value) {
  const normalised = normaliseQualification(value);
  return qualificationOrder[normalised] ?? null;
}

export function getQualificationLabel(value, language = "en") {
  const normalised = normaliseQualification(value);

  const labels = {
    SPM: { en: "SPM", zh: "SPM" },
    UEC: { en: "UEC", zh: "UEC" },
    "A-Level": { en: "A-Level", zh: "A-Level" },
    STPM: { en: "STPM", zh: "STPM" },
    Foundation: { en: "Foundation", zh: "大学预科" },
    Certificate: { en: "Certificate", zh: "证书" },
    Diploma: { en: "Diploma", zh: "文凭" },
    "Advanced Diploma": { en: "Advanced Diploma", zh: "高级文凭" },
    Bachelor: { en: "Bachelor", zh: "学士" },
    "Postgraduate Diploma": { en: "Postgraduate Diploma", zh: "研究生文凭" },
    Master: { en: "Master", zh: "硕士" },
    PhD: { en: "PhD", zh: "博士" },
    TVET: { en: "TVET", zh: "技术与职业教育培训" }
  };

  return labels[normalised]?.[language]
    ?? labels[normalised]?.en
    ?? String(value ?? "");
}


/* =========================================================
   3. PATHWAY RETRIEVAL
   ========================================================= */

export function getAllPathways() {
  return [...studyPathways];
}

export function getPathwayById(id) {
  return studyPathways.find(pathway => pathway.id === id) ?? null;
}

export function getPathwaysByCategory(category) {
  if (!category || category === "all") {
    return getAllPathways();
  }

  return studyPathways.filter(
    pathway => pathway.category === category
  );
}

export function getPathwayCategories() {
  return [
    ...new Set(studyPathways.map(pathway => pathway.category))
  ];
}


/* =========================================================
   4. PATHWAY SEARCH
   ========================================================= */

export function searchPathways(keyword, language = "en") {
  const term = String(keyword ?? "").trim().toLowerCase();

  if (!term) return getAllPathways();

  return studyPathways.filter(pathway => {
    const searchable = [
      pathway.id,
      pathway.category,
      pathway.startQualification,
      pathway.endQualification,
      pathway.name?.en,
      pathway.name?.zh,
      pathway.description?.en,
      pathway.description?.zh,
      ...pathway.steps.map(step => step.qualification)
    ].join(" ").toLowerCase();

    return searchable.includes(term);
  });
}


/* =========================================================
   5. PATHWAY ELIGIBILITY
   ========================================================= */

export function checkPathwayEligibility(
  pathway,
  currentQualification
) {
  if (!pathway || !currentQualification) {
    return {
      eligible: false,
      status: "insufficient-information",
      message: "Current qualification or pathway is missing."
    };
  }

  const current = normaliseQualification(currentQualification);
  const start = normaliseQualification(pathway.startQualification);

  if (current === start) {
    return {
      eligible: true,
      status: "matching-start",
      message: "The starting qualification matches."
    };
  }

  const currentOrder = getQualificationOrder(current);
  const startOrder = getQualificationOrder(start);

  if (currentOrder === null || startOrder === null) {
    return {
      eligible: false,
      status: "manual-review",
      message: "The qualification needs individual assessment."
    };
  }

  if (currentOrder > startOrder) {
    return {
      eligible: false,
      status: "advanced-entry-review",
      message: "The user may already hold a higher qualification. Check advanced entry or credit transfer options."
    };
  }

  if (currentOrder < startOrder) {
    return {
      eligible: false,
      status: "additional-step-required",
      message: "An additional qualification stage may be required."
    };
  }

  return {
    eligible: false,
    status: "manual-review",
    message: "Eligibility must be checked with the institution."
  };
}


/* =========================================================
   6. RECOMMEND PATHWAYS
   ========================================================= */

export function recommendPathways({
  currentQualification = null,
  targetQualification = null,
  category = "all"
} = {}) {
  const current = normaliseQualification(currentQualification);
  const target = normaliseQualification(targetQualification);

  let results = getAllPathways();

  if (category !== "all") {
    results = results.filter(
      pathway => pathway.category === category
    );
  }

  if (current) {
    results = results.filter(pathway => {
      const steps = pathway.steps.map(step =>
        normaliseQualification(step.qualification)
      );

      return steps.includes(current);
    });
  }

  if (target && target !== "Not sure yet") {
    results = results.filter(pathway =>
      normaliseQualification(pathway.endQualification) === target
    );
  }

  return results.map(pathway => ({
    ...pathway,
    eligibility: current
      ? checkPathwayEligibility(pathway, current)
      : {
          eligible: null,
          status: "not-assessed",
          message: "Please provide your current qualification."
        }
  }));
}


/* =========================================================
   7. PATHWAY DURATION
   仅计算可识别的数字学制
   ========================================================= */

function parseDuration(duration) {
  if (!duration || typeof duration !== "string") {
    return null;
  }

  const text = duration.toLowerCase();

  const range = text.match(/(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)/);

  if (range) {
    return {
      min: Number(range[1]),
      max: Number(range[2])
    };
  }

  const single = text.match(/(\d+(?:\.\d+)?)/);

  if (single) {
    const value = Number(single[1]);

    return {
      min: value,
      max: value
    };
  }

  return null;
}

export function calculatePathwayDuration(pathway) {
  if (!pathway || !Array.isArray(pathway.steps)) {
    return {
      min: null,
      max: null,
      display: "Not available",
      complete: false
    };
  }

  const durations = pathway.steps
    .map(step => parseDuration(step.duration))
    .filter(Boolean);

  const stepsWithDuration = pathway.steps.filter(
    step => Boolean(step.duration)
  ).length;

  const hasUnknownDuration =
    stepsWithDuration !== pathway.steps.length - 1;

  if (durations.length === 0) {
    return {
      min: null,
      max: null,
      display: "Not available",
      complete: false
    };
  }

  const min = durations.reduce(
    (sum, item) => sum + item.min,
    0
  );

  const max = durations.reduce(
    (sum, item) => sum + item.max,
    0
  );

  return {
    min,
    max,
    display: min === max
      ? `${min} years`
      : `${min}–${max} years`,
    complete: !hasUnknownDuration
  };
}


/* =========================================================
   8. PATHWAY COMPARISON
   最多比较三条路线
   ========================================================= */

export function comparePathways(pathwayIds = []) {
  const uniqueIds = [...new Set(pathwayIds)].slice(0, 3);

  const selected = uniqueIds
    .map(id => getPathwayById(id))
    .filter(Boolean);

  return {
    pathways: selected.map(pathway => ({
      id: pathway.id,
      name: pathway.name,
      category: pathway.category,
      startQualification: pathway.startQualification,
      endQualification: pathway.endQualification,
      steps: pathway.steps,
      duration: calculatePathwayDuration(pathway),
      dataStatus: pathway.dataStatus
    })),
    count: selected.length,
    maximum: 3
  };
}


/* =========================================================
   9. PATHWAY STEP VALIDATION
   ========================================================= */

export function validatePathway(pathway) {
  const errors = [];
  const warnings = [];

  if (!pathway) {
    return {
      valid: false,
      errors: ["Pathway does not exist."],
      warnings
    };
  }

  if (!pathway.id) {
    errors.push("Missing pathway ID.");
  }

  if (!pathway.name?.en) {
    errors.push("Missing English pathway name.");
  }

  if (!pathway.name?.zh) {
    warnings.push("Missing Chinese pathway name.");
  }

  if (!Array.isArray(pathway.steps) || pathway.steps.length < 2) {
    errors.push("A pathway must contain at least two steps.");
  }

  if (Array.isArray(pathway.steps)) {
    pathway.steps.forEach((step, index) => {
      if (!step.qualification) {
        errors.push(`Step ${index + 1} has no qualification.`);
      }
    });

    const orders = pathway.steps
      .map(step => getQualificationOrder(step.qualification))
      .filter(order => order !== null);

    for (let i = 1; i < orders.length; i++) {
      if (orders[i] < orders[i - 1]) {
        warnings.push(
          "Qualification sequence may not be in ascending order."
        );
        break;
      }
    }
  }

  if (!pathway.dataStatus) {
    warnings.push("Missing data verification status.");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}


/* =========================================================
   10. PATHWAY DISPLAY HELPERS
   ========================================================= */

export function getPathwayDisplayName(pathway, language = "en") {
  if (!pathway) return "";

  return pathway.name?.[language]
    ?? pathway.name?.en
    ?? pathway.id;
}

export function getPathwayDescription(pathway, language = "en") {
  if (!pathway) return "";

  return pathway.description?.[language]
    ?? pathway.description?.en
    ?? "";
}

export function getPathwaySteps(pathway, language = "en") {
  if (!pathway || !Array.isArray(pathway.steps)) {
    return [];
  }

  return pathway.steps.map((step, index) => ({
    index: index + 1,
    qualification: step.qualification,
    label: getQualificationLabel(step.qualification, language),
    duration: step.duration ?? null
  }));
}


/* =========================================================
   11. PATHWAY REPORT
   ========================================================= */

export function generatePathwayReport({
  currentQualification,
  targetQualification,
  selectedPathwayIds = [],
  language = "en"
} = {}) {
  const current = normaliseQualification(currentQualification);
  const target = normaliseQualification(targetQualification);

  const comparison = comparePathways(selectedPathwayIds);

  return {
    generatedAt: new Date().toISOString(),

    language,

    currentQualification: current
      ? getQualificationLabel(current, language)
      : null,

    targetQualification: target
      ? getQualificationLabel(target, language)
      : null,

    selectedPathways: comparison.pathways,

    recommendations: recommendPathways({
      currentQualification: current,
      targetQualification: target
    }),

    notices: language === "zh"
      ? [
          "升学路线仅供规划参考。",
          "实际入学资格须由相关院校审核。",
          "学分转移不保证获批。",
          "学制及费用须以院校最新官方资料为准。",
          "专业资格及执业注册须向相关专业机构核实。"
        ]
      : [
          "Pathways are provided for planning purposes only.",
          "Actual admission eligibility must be assessed by the institution.",
          "Credit transfer is not guaranteed.",
          "Duration and fees must be confirmed using current official institutional information.",
          "Professional recognition and registration must be checked with the relevant professional body."
        ]
  };
}


/* =========================================================
   12. PATHWAY DATABASE SUMMARY
   ========================================================= */

export function getPathwayDatabaseSummary() {
  const categories = getPathwayCategories();

  return {
    total: studyPathways.length,
    categories,
    qualificationLevels: qualificationLevels.length,
    comparisonLimit: 3
  };
}
