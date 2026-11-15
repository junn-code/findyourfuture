import * as DATA from "./data.js";
import * as PATHWAYS from "./pathways.js";

/* =========================================================
   FIND YOUR FUTURE — APPLICATION
   Five-file edition: admin is integrated in this module.
   ========================================================= */

const STORAGE = {
  language: "fyf-language",
  theme: "fyf-theme",
  discovery: "fyf-discovery-v2",
  admin: "fyf-admin-local-data"
};

const state = {
  language: localStorage.getItem(STORAGE.language) || DATA.APP_CONFIG.defaultLanguage || "en",
  theme: localStorage.getItem(STORAGE.theme) || DATA.APP_CONFIG.defaultTheme || "light",
  currentPage: "home",
  quizTab: "questions",
  quizIndex: 0,
  quizAnswers: {},
  selectedPathways: [],
  fieldCategory: "all",
  institutionCategory: "all",
  institutionOwnership: "all",
  courseLevel: "all",
  careerCategory: "all"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value = "") {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function t(en, zh) {
  return state.language === "zh" ? zh : en;
}

function localized(value, fallback = "") {
  if (value == null) return fallback;
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (typeof value === "object") {
    return value[state.language] ?? value.en ?? value.zh ?? value.name ?? fallback;
  }
  return fallback;
}

function readAdminOverrides() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE.admin) || "{}");
    return value && typeof value === "object" ? value : {};
  } catch {
    return {};
  }
}

function getArray(key) {
  const overrides = readAdminOverrides();
  if (Array.isArray(overrides[key])) return overrides[key];
  return Array.isArray(DATA[key]) ? DATA[key] : [];
}

function getName(item) {
  return localized(item?.name ?? item?.title ?? item?.question ?? item?.label, t("Untitled", "未命名"));
}

function getDescription(item) {
  return localized(item?.description ?? item?.overview ?? item?.summary ?? item?.details, "");
}

function getId(item) {
  return String(item?.id ?? item?.slug ?? item?.code ?? "");
}

function getFieldName(id) {
  const item = getArray("studyFields").find(field => getId(field) === String(id));
  return item ? getName(item) : String(id || t("General", "综合"));
}

function getQualification(course) {
  return course?.qualification ?? course?.level ?? course?.award ?? "";
}

function getQualificationLabel(value) {
  return PATHWAYS.getQualificationLabel?.(value, state.language) || String(value || "");
}

function formatDuration(duration) {
  if (!duration) return "";
  if (typeof duration === "string" || typeof duration === "number") return String(duration);
  const min = Number(duration.min);
  const max = Number(duration.max);
  const unit = duration.unit === "years" ? t("years", "年") : duration.unit || "";
  if (Number.isFinite(min) && Number.isFinite(max)) {
    return `${min === max ? min : `${min}–${max}`} ${unit}`.trim();
  }
  return "";
}

function statusLabel(item) {
  const status = item?.dataStatus ?? item?.status ?? "pending";
  const labels = {
    verified: t("Verified", "已核实"),
    official: t("Official source", "官方来源"),
    "official-source": t("Official source", "官方来源"),
    directory: t("Directory entry", "目录资料"),
    "directory-entry": t("Directory entry", "目录资料"),
    illustrative: t("Illustrative example", "示例资料"),
    pending: t("Pending verification", "等待核实"),
    "needs-verification": t("Needs verification", "待核实"),
    "needs-update": t("Needs update", "需要更新"),
    expired: t("Expired", "已过期"),
    discontinued: t("Discontinued", "已停办"),
    unavailable: t("Unavailable", "暂无资料"),
    provisional: t("Provisional accreditation", "临时认证")
  };
  return labels[status] || status;
}

function statusBadge(item) {
  const status = item?.dataStatus ?? item?.status ?? "pending";
  return `<span class="status-badge status-${escapeHTML(status)}">${escapeHTML(statusLabel(item))}</span>`;
}

function showToast(message) {
  const container = $("#toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.setAttribute("role", "status");
  toast.textContent = message;
  container.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2800);
}

function setText(selector, value) {
  const node = $(selector);
  if (node) node.textContent = value;
}

/* =========================================================
   NAVIGATION, LANGUAGE AND APPEARANCE
   ========================================================= */

const PAGE_IDS = ["home", "discover", "fields", "courses", "institutions", "pathways", "careers", "professional", "scholarships", "report", "admin"];

function navigateTo(page, updateHash = true) {
  if (!PAGE_IDS.includes(page)) page = "home";
  state.currentPage = page;

  $$("[data-page-section]").forEach(section => {
    section.classList.toggle("active", section.dataset.pageSection === page);
    section.setAttribute("aria-hidden", section.dataset.pageSection === page ? "false" : "true");
  });

  $$("[data-page]").forEach(link => {
    link.classList.toggle("active", link.dataset.page === page);
    if (link.tagName === "BUTTON") {
      if (link.dataset.page === page) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    }
  });

  $("#mobileNavigation")?.classList.remove("mobile-open");
  document.body.classList.remove("menu-open");
  document.title = `${page === "home" ? "Discover Your Potential" : page[0].toUpperCase() + page.slice(1)} | Find Your Future`;
  if (updateHash) history.replaceState(null, "", `#${page}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
  initCatalogFilters();

  if (page === "fields") renderFields();
  if (page === "courses") renderCourses();
  if (page === "institutions") renderInstitutions();
  if (page === "pathways") renderPathways();
  if (page === "careers") renderCareers();
  if (page === "professional") renderProfessional();
  if (page === "scholarships") renderScholarships();
  if (page === "discover") renderDiscovery();
  if (page === "report") renderReport();
  if (page === "admin") initAdmin({ container: $("#adminWorkspace"), data: DATA, language: state.language });
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.style.colorScheme = state.theme;
  const icon = $("#themeIcon");
  if (icon) icon.textContent = state.theme === "dark" ? "☼" : "☾";
  localStorage.setItem(STORAGE.theme, state.theme);
}

function applyLanguage() {
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  setText("#languageLabel", state.language === "en" ? "中文" : "EN");
  localStorage.setItem(STORAGE.language, state.language);
  // Static bilingual copy is switched through visibility rules in CSS.
  document.documentElement.dataset.language = state.language;
  if (state.currentPage) navigateTo(state.currentPage, false);
}

function initCatalogFilters() {
  const levelSelect = $("#courseLevelFilter");
  if (levelSelect) {
    const current = levelSelect.value || "all";
    levelSelect.innerHTML = `<option value="all">${t("All qualification levels", "全部学历层级")}</option>` +
      getArray("qualificationLevels").map(level => `<option value="${escapeHTML(level.name?.en || level.id)}">${escapeHTML(localized(level.name))}</option>`).join("");
    levelSelect.value = current;
  }

  const fieldSelect = $("#courseFieldFilter");
  if (fieldSelect) {
    const current = fieldSelect.value || "all";
    fieldSelect.innerHTML = `<option value="all">${t("All study fields", "全部学科领域")}</option>` +
      getArray("studyFields").map(field => `<option value="${escapeHTML(field.id)}">${escapeHTML(getName(field))}</option>`).join("");
    fieldSelect.value = current;
  }

  const institutionTypes = [...new Set(getArray("institutions").map(item => item.type || item.institutionType || item.category).filter(Boolean))].sort();
  const institutionSelect = $("#institutionTypeFilter");
  if (institutionSelect) {
    institutionSelect.innerHTML = `<option value="all">${t("All institution types", "全部院校类别")}</option>` + institutionTypes.map(type => `<option value="${escapeHTML(type)}">${escapeHTML(type)}</option>`).join("");
  }

  const countries = [...new Set(getArray("institutions").map(item => item.country).filter(Boolean))].sort();
  const countryFilters = $("#institutionCountryFilter");
  if (countryFilters) {
    countryFilters.innerHTML = countries.length > 1 ? countries.map(country => `<button type="button" class="filter-chip" data-country="${escapeHTML(country)}">${escapeHTML(country)}</button>`).join("") : "";
  }

  const careerCategories = [...new Set(getArray("careers").map(item => item.industry || item.category || item.fieldId).filter(Boolean))].sort();
  const careerSelect = $("#careerCategoryFilter");
  if (careerSelect) {
    careerSelect.innerHTML = `<option value="all">${t("All industries", "全部行业")}</option>` + careerCategories.map(category => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join("");
  }
}

function initGlobalEvents() {
  document.addEventListener("click", event => {
    const pageLink = event.target.closest("[data-page]");
    if (pageLink) {
      event.preventDefault();
      navigateTo(pageLink.dataset.page);
      return;
    }

    const close = event.target.closest("[data-modal-close]");
    if (close) closeModal();
  });

  $("#themeToggle")?.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  $("#languageToggle")?.addEventListener("click", () => {
    state.language = state.language === "en" ? "zh" : "en";
    applyLanguage();
  });

  $("#mobileMenuToggle")?.addEventListener("click", () => {
    const menu = $("#mobileNavigation");
    const open = menu?.classList.toggle("mobile-open");
    document.body.classList.toggle("menu-open", Boolean(open));
  });

  window.addEventListener("hashchange", () => {
    const page = location.hash.slice(1) || "home";
    if (page !== state.currentPage) navigateTo(page, false);
  });

  $("#printReport")?.addEventListener("click", () => window.print());
  $("#exportReport")?.addEventListener("click", exportReport);
  $("#resetQuiz")?.addEventListener("click", resetDiscovery);
  $("#homeQualificationGrid")?.addEventListener("click", event => {
    const button = event.target.closest("[data-level]");
    if (!button) return;
    state.courseLevel = button.dataset.level;
    navigateTo("courses");
    renderCourses();
  });
}

/* =========================================================
   HOME
   ========================================================= */

function renderHomeStats() {
  const counts = {
    fields: getArray("studyFields").length,
    courses: getArray("courses").length,
    institutions: getArray("institutions").length,
    careers: getArray("careers").length
  };
  const map = { field: counts.fields, course: counts.courses, institution: counts.institutions, career: counts.careers };
  Object.entries(map).forEach(([key, value]) => {
    const node = $(`[data-stat="${key}"]`);
    if (node) node.textContent = value.toLocaleString();
  });
}

/* =========================================================
   STUDY FIELDS
   ========================================================= */

function renderFields() {
  const grid = $("#fieldGrid");
  if (!grid) return;
  const query = ($("#fieldSearch")?.value || "").trim().toLowerCase();
  const fields = getArray("studyFields");
  const filtered = fields.filter(field => {
    const text = [getName(field), getDescription(field), ...(field.disciplines || [])].join(" ").toLowerCase();
    return (!query || text.includes(query)) && (state.fieldCategory === "all" || field.category === state.fieldCategory || field.id === state.fieldCategory);
  });
  grid.innerHTML = filtered.map(field => `
    <article class="field-card catalog-card" data-field-card="${escapeHTML(getId(field))}">
      <div class="card-topline"><span class="category-label">${escapeHTML(field.category || t("Study field", "学科领域"))}</span><span class="field-icon">${escapeHTML(field.icon || "◈")}</span></div>
      <h3>${escapeHTML(getName(field))}</h3>
      <p>${escapeHTML(getDescription(field))}</p>
      <div class="field-discipline-list">${getArray("disciplines").filter(item => item.fieldId === field.id).slice(0, 4).map(item => `<span>${escapeHTML(getName(item))}</span>`).join("") || `<span>${t("More discipline entries planned", "更多专业资料待补充")}</span>`}</div>
      <button class="text-button" type="button" data-field-courses="${escapeHTML(getId(field))}">${t("Explore related courses", "查看相关课程")} ↗</button>
    </article>
  `).join("");
  setText("#fieldCount", `${filtered.length} ${t("study fields", "个学科领域")}`);
  $("#fieldEmpty")?.classList.toggle("hidden", filtered.length > 0);
}

function initFieldEvents() {
  $("#fieldSearch")?.addEventListener("input", renderFields);
  $("#fieldCategoryFilter")?.addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.fieldCategory = button.dataset.filter;
    $$("#fieldCategoryFilter [data-filter]").forEach(item => item.classList.toggle("active", item === button));
    renderFields();
  });
  $("#fieldGrid")?.addEventListener("click", event => {
    const button = event.target.closest("[data-field-courses]");
    if (!button) return;
    navigateTo("courses");
    const select = $("#courseFieldFilter");
    if (select) { select.value = button.dataset.fieldCourses; renderCourses(); }
  });
}

/* =========================================================
   COURSES + COURSE DETAIL
   ========================================================= */

function renderCourses() {
  const grid = $("#courseGrid");
  if (!grid) return;
  const query = ($("#courseSearch")?.value || "").trim().toLowerCase();
  const field = $("#courseFieldFilter")?.value || "all";
  const levelSelect = $("#courseLevelFilter")?.value || "all";
  const level = state.courseLevel !== "all" ? state.courseLevel : levelSelect;
  const filtered = getArray("courses").filter(course => {
    const qualification = getQualification(course);
    const searchable = [getName(course), getDescription(course), course.id, course.fieldId, course.disciplineId, qualification, course.country].join(" ").toLowerCase();
    return (!query || searchable.includes(query)) && (field === "all" || course.fieldId === field) && (level === "all" || String(qualification).toLowerCase() === String(level).toLowerCase());
  });
  grid.innerHTML = filtered.map(course => `
    <article class="catalog-card course-card">
      <div class="card-topline"><span class="category-label">${escapeHTML(getFieldName(course.fieldId))}</span>${statusBadge(course)}</div>
      <h3>${escapeHTML(getName(course))}</h3>
      <p>${escapeHTML(getDescription(course))}</p>
      <div class="card-meta">
        ${getQualification(course) ? `<span>${escapeHTML(getQualificationLabel(getQualification(course)))}</span>` : ""}
        ${formatDuration(course.duration) ? `<span>${escapeHTML(formatDuration(course.duration))}</span>` : ""}
        ${course.studyMode?.length ? `<span>${escapeHTML(course.studyMode.join(", "))}</span>` : ""}
      </div>
      <button class="text-button" type="button" data-course-detail="${escapeHTML(getId(course))}">${t("View programme details", "查看课程详情")} ↗</button>
    </article>
  `).join("");
  setText("#courseCount", `${filtered.length} ${t("programmes", "项课程")}`);
  $("#courseEmpty")?.classList.toggle("hidden", filtered.length > 0);
  $$("#courseQualificationTabs [data-level]").forEach(button => button.classList.toggle("active", button.dataset.level === level));
}

function renderCourseDetail(id) {
  const course = getArray("courses").find(item => getId(item) === id);
  const content = $("#courseModalContent");
  if (!course || !content) return;
  const curriculum = Array.isArray(course.curriculum) ? course.curriculum : [];
  const institutionNames = (course.institutionIds || []).map(institutionId => getArray("institutions").find(item => getId(item) === institutionId)).filter(Boolean).map(getName);
  content.innerHTML = `
    <div class="detail-heading"><span class="section-eyebrow">${escapeHTML(getFieldName(course.fieldId))}</span><h2 id="courseModalTitle">${escapeHTML(getName(course))}</h2>${statusBadge(course)}</div>
    <p>${escapeHTML(getDescription(course))}</p>
    <dl class="detail-facts">
      <div><dt>${t("Qualification", "学历层级")}</dt><dd>${escapeHTML(getQualificationLabel(getQualification(course))) || "—"}</dd></div>
      <div><dt>${t("Duration", "学制")}</dt><dd>${escapeHTML(formatDuration(course.duration)) || "—"}</dd></div>
      <div><dt>${t("Study mode", "学习模式")}</dt><dd>${escapeHTML((course.studyMode || []).join(", ")) || "—"}</dd></div>
      <div><dt>${t("Country", "国家")}</dt><dd>${escapeHTML(course.country || "—")}</dd></div>
    </dl>
    <section class="detail-section"><h3>${t("Entry requirements", "入学要求")}</h3><p>${escapeHTML(localized(course.entryRequirements, t("Not provided. Check the institution's official programme page.", "暂无资料，请查阅院校官方课程页面。")))}</p></section>
    <section class="detail-section"><h3>${t("Curriculum", "课程大纲")}</h3>${curriculum.length ? `<ul>${curriculum.map(item => `<li>${escapeHTML(localized(item.name || item.subjectName || item.title || item))}</li>`).join("")}</ul>` : `<p>${t("Detailed curriculum has not been supplied yet.", "尚未提供详细课程大纲。")}</p>`}</section>
    ${institutionNames.length ? `<section class="detail-section"><h3>${t("Listed institutions", "开办院校")}</h3><p>${escapeHTML(institutionNames.join(", "))}</p></section>` : ""}
    ${course.dataNote ? `<p class="data-note">${escapeHTML(course.dataNote)}</p>` : ""}
    ${course.source ? `<a class="text-button" href="${escapeHTML(course.source)}" target="_blank" rel="noopener noreferrer">${t("View source", "查看来源")} ↗</a>` : ""}
  `;
  openModal("#courseModal");
}

function initCourseEvents() {
  $("#courseSearch")?.addEventListener("input", renderCourses);
  $("#courseLevelFilter")?.addEventListener("change", () => { state.courseLevel = "all"; renderCourses(); });
  $("#courseFieldFilter")?.addEventListener("change", renderCourses);
  $("#courseQualificationTabs")?.addEventListener("click", event => {
    const button = event.target.closest("[data-level]");
    if (!button) return;
    state.courseLevel = button.dataset.level;
    const select = $("#courseLevelFilter");
    if (select) select.value = "all";
    renderCourses();
  });
  $("#courseGrid")?.addEventListener("click", event => {
    const button = event.target.closest("[data-course-detail]");
    if (button) renderCourseDetail(button.dataset.courseDetail);
  });
}

/* =========================================================
   INSTITUTIONS
   ========================================================= */

function institutionOwnership(item) {
  if (item.ownership) return item.ownership;
  const type = String(item.type || item.institutionType || item.category || "").toLowerCase();
  if (type.includes("foreign branch") || type.includes("international branch")) return "foreign-branch";
  if (type.includes("public") || type.includes("government") || type.includes("polytechnic") || type.includes("community college") || type.includes("public tvet")) return "public";
  if (type.includes("private") || type.includes("private tvet")) return "private";
  return "other";
}

function institutionLocation(item) {
  if (item.studyLocation === "domestic" || item.studyLocation === "international") return item.studyLocation;
  return String(item.country || "").toLowerCase() === "malaysia" ? "domestic" : "international";
}

function renderInstitutions() {
  const grid = $("#institutionGrid");
  if (!grid) return;
  const query = ($("#institutionSearch")?.value || "").trim().toLowerCase();
  const type = $("#institutionTypeFilter")?.value || "all";
  const filtered = getArray("institutions").filter(item => {
    const itemType = item.type ?? item.institutionType ?? item.category ?? "";
    const ownership = institutionOwnership(item);
    const location = institutionLocation(item);
    const searchable = [getName(item), getDescription(item), item.abbreviation, item.type, item.state, item.country, item.parentUniversity, item.parentCountry].join(" ").toLowerCase();
    const locationMatch = state.institutionCategory === "all" ||
      (state.institutionCategory === "Malaysia" && location === "domestic") ||
      (state.institutionCategory === "international" && location === "international") ||
      (state.institutionCategory !== "Malaysia" && state.institutionCategory !== "international" && state.institutionCategory === item.country);
    const ownershipMatch = state.institutionOwnership === "all" || ownership === state.institutionOwnership;
    return (!query || searchable.includes(query)) && (type === "all" || itemType === type) && locationMatch && ownershipMatch;
  });
  grid.innerHTML = filtered.map(item => `
    <article class="catalog-card institution-card">
      <div class="card-topline"><span class="category-label">${escapeHTML(item.type || t("Institution", "院校"))}</span>${statusBadge(item)}</div>
      <h3>${escapeHTML(getName(item))}</h3>
      ${item.abbreviation ? `<span class="institution-abbreviation">${escapeHTML(item.abbreviation)}</span>` : ""}
      <p>${escapeHTML(getDescription(item) || t("Institution directory entry. Check the official website for current programme details.", "院校目录资料。课程详情请以官方网站为准。"))}</p>
      <div class="card-meta"><span>${escapeHTML([item.state, item.country].filter(Boolean).join(", "))}</span></div>
      ${item.parentUniversity ? `<p class="institution-parent">${t("Home university", "母校")}: ${escapeHTML(item.parentUniversity)}${item.parentCountry ? ` · ${escapeHTML(item.parentCountry)}` : ""}</p>` : ""}
      <div class="institution-links">
        ${item.website ? `<a class="text-button" href="${escapeHTML(item.website)}" target="_blank" rel="noopener noreferrer">${t("Official website", "官方网站")} ↗</a>` : ""}
        ${item.source ? `<a class="text-button" href="${escapeHTML(item.source)}" target="_blank" rel="noopener noreferrer">${t("Register / source", "登记册／资料来源")} ↗</a>` : ""}
      </div>
    </article>
  `).join("");
  setText("#institutionCount", `${filtered.length} ${t("institutions", "所院校")}`);
  $("#institutionEmpty")?.classList.toggle("hidden", filtered.length > 0);
}

function initInstitutionEvents() {
  $("#institutionSearch")?.addEventListener("input", renderInstitutions);
  $("#institutionTypeFilter")?.addEventListener("change", renderInstitutions);
  $("#institutionCategoryFilter")?.addEventListener("click", event => {
    const button = event.target.closest("[data-country]");
    if (!button) return;
    state.institutionCategory = button.dataset.country;
    $$("#institutionCategoryFilter [data-country]").forEach(item => item.classList.toggle("active", item === button));
    renderInstitutions();
  });
  $("#institutionOwnershipFilter")?.addEventListener("click", event => {
    const button = event.target.closest("[data-ownership]");
    if (!button) return;
    state.institutionOwnership = button.dataset.ownership;
    $$("#institutionOwnershipFilter [data-ownership]").forEach(item => item.classList.toggle("active", item === button));
    renderInstitutions();
  });
  $("#institutionCountryFilter")?.addEventListener("click", event => {
    const button = event.target.closest("[data-country]");
    if (!button) return;
    state.institutionCategory = button.dataset.country;
    $$("#institutionCategoryFilter [data-country]").forEach(item => item.classList.toggle("active", item.dataset.country === state.institutionCategory));
    renderInstitutions();
  });
}

/* =========================================================
   PATHWAYS + COMPARISON
   ========================================================= */

function renderPathways() {
  const grid = $("#pathwayGrid");
  if (!grid) return;
  const query = ($("#pathwaySearch")?.value || "").trim().toLowerCase();
  const current = $("#pathwayQualification")?.value || "";
  const pathways = getArray("studyPathways");
  const filtered = pathways.filter(pathway => {
    const searchable = [getName(pathway), getDescription(pathway), pathway.category, pathway.startQualification, pathway.endQualification, ...(pathway.steps || []).map(step => step.qualification)].join(" ").toLowerCase();
    return !query || searchable.includes(query);
  });
  grid.innerHTML = filtered.map(pathway => {
    const eligibility = current ? PATHWAYS.checkPathwayEligibility(pathway, current) : null;
    const duration = PATHWAYS.calculatePathwayDuration(pathway);
    const selected = state.selectedPathways.includes(pathway.id);
    return `
      <article class="pathway-card catalog-card ${selected ? "is-selected" : ""}">
        <div class="card-topline"><span class="category-label">${escapeHTML(pathway.category || t("Study route", "升学路线"))}</span>${statusBadge(pathway)}</div>
        <h3>${escapeHTML(getName(pathway))}</h3>
        <p>${escapeHTML(getDescription(pathway))}</p>
        <div class="pathway-sequence">${(pathway.steps || []).map(step => `<span>${escapeHTML(getQualificationLabel(step.qualification))}</span>`).join("<i>→</i>")}</div>
        <div class="card-meta"><span>${escapeHTML(duration.display || t("Duration unavailable", "学制未提供"))}</span>${eligibility ? `<span>${escapeHTML(eligibility.status === "matching-start" ? t("Starting qualification matches", "符合起点学历") : eligibility.message)}</span>` : ""}</div>
        <label class="compare-check"><input type="checkbox" data-compare-pathway="${escapeHTML(pathway.id)}" ${selected ? "checked" : ""}><span>${t("Add to comparison", "加入比较")}</span></label>
        <button class="text-button" type="button" data-pathway-detail="${escapeHTML(pathway.id)}">${t("View route details", "查看路线详情")} ↗</button>
      </article>`;
  }).join("");
  updatePathwayCompareCount();
}

function updatePathwayCompareCount() {
  setText("#pathwayCompareCount", `${state.selectedPathways.length} of 3 ${t("selected", "条已选择")}`);
}

function renderPathwayDetail(id) {
  const pathway = getArray("studyPathways").find(item => item.id === id);
  const content = $("#pathwayModalContent");
  if (!pathway || !content) return;
  content.innerHTML = `
    <span class="section-eyebrow">${escapeHTML(pathway.category || t("STUDY ROUTE", "升学路线"))}</span>
    <h2>${escapeHTML(getName(pathway))}</h2><p>${escapeHTML(getDescription(pathway))}</p>
    <ol class="pathway-detail-steps">${(pathway.steps || []).map(step => `<li><strong>${escapeHTML(getQualificationLabel(step.qualification))}</strong><span>${escapeHTML(step.duration || "")}</span></li>`).join("")}</ol>
    ${statusBadge(pathway)}
    <p class="data-note">${t("Illustrative pathway only. Confirm admission requirements and credit transfer with the receiving institution.", "升学路线仅供参考。实际入学要求及学分转移须向接收院校确认。")}</p>
  `;
  openModal("#pathwayModal");
}

function renderPathwayComparison() {
  const target = $("#pathwayComparison");
  if (!target) return;
  const selected = state.selectedPathways.map(id => getArray("studyPathways").find(item => item.id === id)).filter(Boolean).slice(0, 3);
  if (!selected.length) {
    target.innerHTML = `<div class="empty-state"><h3>${t("Select pathways to compare.", "请选择升学路线进行比较。")}</h3><p>${t("Choose up to three pathways above.", "最多可选择三条路线。")}</p></div>`;
    return;
  }
  target.innerHTML = `
    <div class="comparison-table-wrap"><table class="comparison-table">
      <thead><tr><th>${t("Comparison", "比较项目")}</th>${selected.map(item => `<th>${escapeHTML(getName(item))}</th>`).join("")}</tr></thead>
      <tbody>
        <tr><th>${t("Starting qualification", "起点学历")}</th>${selected.map(item => `<td>${escapeHTML(getQualificationLabel(item.startQualification))}</td>`).join("")}</tr>
        <tr><th>${t("Target qualification", "目标学历")}</th>${selected.map(item => `<td>${escapeHTML(getQualificationLabel(item.endQualification))}</td>`).join("")}</tr>
        <tr><th>${t("Estimated duration", "预计学制")}</th>${selected.map(item => `<td>${escapeHTML(PATHWAYS.calculatePathwayDuration(item).display)}</td>`).join("")}</tr>
        <tr><th>${t("Data status", "资料状态")}</th>${selected.map(item => `<td>${escapeHTML(item.dataStatus || "—")}</td>`).join("")}</tr>
      </tbody></table></div>`;
}

function initPathwayEvents() {
  $("#pathwaySearch")?.addEventListener("input", renderPathways);
  $("#pathwayQualification")?.addEventListener("change", renderPathways);
  $("#pathwayGrid")?.addEventListener("change", event => {
    const input = event.target.closest("[data-compare-pathway]");
    if (!input) return;
    const id = input.dataset.comparePathway;
    if (input.checked) {
      if (state.selectedPathways.length >= 3) {
        input.checked = false;
        showToast(t("You can compare up to three pathways.", "最多只能比较三条路线。"));
        return;
      }
      if (!state.selectedPathways.includes(id)) state.selectedPathways.push(id);
    } else state.selectedPathways = state.selectedPathways.filter(item => item !== id);
    renderPathways();
  });
  $("#pathwayGrid")?.addEventListener("click", event => {
    const button = event.target.closest("[data-pathway-detail]");
    if (button) renderPathwayDetail(button.dataset.pathwayDetail);
  });
  $("#clearPathwayCompare")?.addEventListener("click", () => {
    state.selectedPathways = [];
    renderPathways();
    renderPathwayComparison();
  });
  $("#comparePathways")?.addEventListener("click", renderPathwayComparison);
}

/* =========================================================
   SCHOLARSHIPS, FUNDING AND ADMISSIONS REFERENCES
   ========================================================= */
function renderScholarships() {
  const scholarships = getArray("scholarshipSources");
  const tests = getArray("admissionsTests");
  const scholarshipGrid = $("#scholarshipGrid");
  const testGrid = $("#admissionsTestGrid");
  if (scholarshipGrid) scholarshipGrid.innerHTML = scholarships.map(item => `
    <article class="catalog-card">
      <div class="card-topline"><span class="category-label">${escapeHTML(item.country || "Malaysia")}</span>${statusBadge(item)}</div>
      <h3>${escapeHTML(getName(item))}</h3>
      <p>${escapeHTML(item.note || "Check the provider's official website for current schemes and eligibility.")}</p>
      ${item.website ? `<a class="text-button" href="${escapeHTML(item.website)}" target="_blank" rel="noopener noreferrer">${t("Official provider website", "官方机构网站")} ↗</a>` : ""}
    </article>`).join("");
  if (testGrid) testGrid.innerHTML = tests.map(item => `
    <article class="catalog-card">
      <div class="card-topline"><span class="category-label">${t("Admissions reference", "入学参考")}</span>${statusBadge(item)}</div>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.purpose || "Check the relevant institution's current requirements.")}</p>
      ${item.website ? `<a class="text-button" href="${escapeHTML(item.website)}" target="_blank" rel="noopener noreferrer">${t("Official website", "官方网站")} ↗</a>` : ""}
    </article>`).join("");
  setText("#scholarshipCount", `${scholarships.length} ${t("sources", "个来源")}`);
}

/* =========================================================
   CAREERS + PROFESSIONAL REQUIREMENTS
   ========================================================= */

function renderCareers() {
  const grid = $("#careerGrid");
  if (!grid) return;
  const query = ($("#careerSearch")?.value || "").trim().toLowerCase();
  const category = $("#careerCategoryFilter")?.value || "all";
  const filtered = getArray("careers").filter(item => {
    const searchable = [getName(item), getDescription(item), item.industry, item.fieldId].join(" ").toLowerCase();
    return (!query || searchable.includes(query)) && (category === "all" || item.industry === category || item.category === category || item.fieldId === category);
  });
  grid.innerHTML = filtered.map(item => `
    <article class="catalog-card"><div class="card-topline"><span class="category-label">${escapeHTML(item.industry || getFieldName(item.fieldId))}</span>${statusBadge(item)}</div><h3>${escapeHTML(getName(item))}</h3><p>${escapeHTML(getDescription(item))}</p><div class="card-meta">${item.fieldId ? `<span>${escapeHTML(getFieldName(item.fieldId))}</span>` : ""}</div></article>
  `).join("");
  setText("#careerCount", `${filtered.length} ${t("careers", "种职业")}`);
  $("#careerEmpty")?.classList.toggle("hidden", filtered.length > 0);
}

function initCareerEvents() {
  $("#careerSearch")?.addEventListener("input", renderCareers);
  $("#careerCategoryFilter")?.addEventListener("change", renderCareers);
}

function renderProfessional() {
  const grid = $("#professionalGrid");
  if (!grid) return;
  const records = getArray("professionalRequirements");
  grid.innerHTML = records.map(item => `
    <article class="catalog-card"><div class="card-topline"><span class="category-label">${escapeHTML(item.profession || item.category || t("Professional field", "专业领域"))}</span>${statusBadge(item)}</div><h3>${escapeHTML(getName(item))}</h3><p>${escapeHTML(getDescription(item))}</p>${item.body ? `<div class="card-meta"><span>${escapeHTML(item.body)}</span></div>` : ""}${item.website ? `<a class="text-button" href="${escapeHTML(item.website)}" target="_blank" rel="noopener noreferrer">${t("Professional body", "专业机构")} ↗</a>` : ""}</article>
  `).join("");
}

/* =========================================================
   DISCOVERY — 72 RIASEC + 3 DEVELOPMENT + 5 PLANNING
   ========================================================= */

const RIASEC_LABELS = {
  R: { en: "Realistic", zh: "实作型" }, I: { en: "Investigative", zh: "研究型" },
  A: { en: "Artistic", zh: "艺术型" }, S: { en: "Social", zh: "社交型" },
  E: { en: "Enterprising", zh: "企业型" }, C: { en: "Conventional", zh: "事务型" }
};

function loadDiscovery() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE.discovery) || "{}");
    state.quizAnswers = saved.answers || {};
    return saved;
  } catch {
    state.quizAnswers = {};
    return {};
  }
}

function saveDiscovery(extra = {}) {
  const saved = {
    answers: state.quizAnswers,
    ...extra,
    updatedAt: new Date().toISOString()
  };
  localStorage.setItem(STORAGE.discovery, JSON.stringify(saved));
}

function getQuestions(section) {
  return getArray("discoveryQuestions").filter(question => question.section === section);
}

function answerCount() {
  const questions = getArray("discoveryQuestions");
  return questions.filter(question => {
    const answer = state.quizAnswers[question.id];
    return Array.isArray(answer) ? answer.length > 0 : answer !== undefined && answer !== null && answer !== "";
  }).length;
}

function updateDiscoveryProgress() {
  const total = getArray("discoveryQuestions").length;
  const completed = answerCount();
  setText("#quizProgressText", `${completed} / ${total} ${t("completed", "已完成")}`);
  const bar = $("#quizProgressBar");
  if (bar) bar.style.width = `${total ? completed / total * 100 : 0}%`;
}

function setQuizTab(tab) {
  state.quizTab = tab;
  const panelIds = { questions: "questionsPanel", dreams: "dreamsPanel", planning: "planningPanel" };
  Object.entries(panelIds).forEach(([key, id]) => $(`#${id}`)?.classList.toggle("active", key === tab));
  $$("[data-quiz-tab]").forEach(button => button.classList.toggle("active", button.dataset.quizTab === tab));
  renderDiscoveryPanel();
}

function renderRiasecQuestion() {
  const target = $("#questionsContainer");
  if (!target) return;
  const questions = getQuestions("riasec");
  const question = questions[state.quizIndex];
  if (!question) return;
  const selected = state.quizAnswers[question.id];
  const questionText = localized(question.question, "");
  target.innerHTML = `
    <article class="question-stage" aria-live="polite">
      <div class="question-stage-meta"><span>${t("QUESTION", "问题")} ${state.quizIndex + 1} / ${questions.length}</span><span>${Math.round((state.quizIndex + 1) / questions.length * 100)}%</span></div>
      <div class="question-stage-progress"><span style="width:${(state.quizIndex + 1) / questions.length * 100}%"></span></div>
      <span class="question-category">${escapeHTML(localized(question.categoryName, RIASEC_LABELS[question.category]?.[state.language] || question.category))}</span>
      <h3 class="question-prompt">${escapeHTML(questionText)}</h3>
      <p class="question-hint">${t("How much do you enjoy this activity?", "你有多喜欢这项活动？")}</p>
      <div class="rating-options" role="group" aria-label="Interest rating">
        ${[1,2,3,4,5].map((value, index) => `<button type="button" class="rating-option ${Number(selected) === value ? "selected" : ""}" data-rating="${value}" aria-pressed="${Number(selected) === value}"><strong>${value}</strong><span>${escapeHTML(t(["Not at all","A little","Not sure","Quite a lot","Very much"][index], ["完全不喜欢","有一点","不确定","比较喜欢","非常喜欢"][index]))}</span></button>`).join("")}
      </div>
      <div class="question-stage-footer"><button type="button" class="button button-secondary" id="questionBack" ${state.quizIndex === 0 ? "disabled" : ""}>← ${t("Previous", "上一题")}</button><button type="button" class="button button-primary" id="questionNext" ${selected === undefined ? "disabled" : ""}>${state.quizIndex === questions.length - 1 ? t("Continue to interests", "继续发展兴趣") : t("Next question", "下一题")} →</button></div>
    </article>`;
  target.querySelectorAll("[data-rating]").forEach(button => button.addEventListener("click", () => {
    state.quizAnswers[question.id] = Number(button.dataset.rating);
    saveDiscovery(); updateDiscoveryProgress(); renderRiasecQuestion();
  }));
  $("#questionBack", target)?.addEventListener("click", () => { if (state.quizIndex > 0) { state.quizIndex--; renderRiasecQuestion(); } });
  $("#questionNext", target)?.addEventListener("click", () => {
    if (state.quizIndex < questions.length - 1) { state.quizIndex++; renderRiasecQuestion(); }
    else setQuizTab("dreams");
  });
}

function renderDevelopmentChoices() {
  const target = $("#dreamChoices");
  if (!target) return;
  const questions = getQuestions("development-interest");
  target.innerHTML = questions.map((question, index) => {
    const selected = Array.isArray(state.quizAnswers[question.id]) ? state.quizAnswers[question.id] : [];
    const options = (question.options || []).map((option, optionIndex) => {
      const value = typeof option === "object" ? (option.value ?? option.id ?? optionIndex) : option;
      const label = typeof option === "object" ? localized(option.label ?? option.name ?? option) : option;
      return `<label class="dream-choice ${selected.includes(String(value)) ? "selected" : ""}"><input type="checkbox" data-dream-question="${escapeHTML(question.id)}" value="${escapeHTML(value)}" ${selected.includes(String(value)) ? "checked" : ""}><span>${escapeHTML(label)}</span></label>`;
    }).join("");
    return `<section class="development-question"><span class="section-eyebrow">${t("INTEREST AREA", "發展興趣")} ${index + 1} / ${questions.length}</span><h3>${escapeHTML(localized(question.question))}</h3><p>${t("Choose up to three options.", "最多选择三个选项。")}</p><div class="dream-choice-grid">${options}</div></section>`;
  }).join("");
  const total = questions.reduce((sum, question) => sum + (state.quizAnswers[question.id]?.length || 0), 0);
  setText("#dreamCounter", `${total} ${t("selections across three interest questions", "项选择（共三个兴趣问题）")}`);
  target.querySelectorAll("[data-dream-question]").forEach(input => input.addEventListener("change", () => {
    const id = input.dataset.dreamQuestion;
    const current = Array.isArray(state.quizAnswers[id]) ? [...state.quizAnswers[id]] : [];
    if (input.checked) {
      if (current.length >= 3) { input.checked = false; showToast(t("Choose up to three options for each question.", "每个问题最多选择三个选项。")); return; }
      current.push(input.value);
    } else {
      const index = current.indexOf(input.value); if (index >= 0) current.splice(index, 1);
    }
    state.quizAnswers[id] = current; saveDiscovery(); updateDiscoveryProgress(); renderDevelopmentChoices();
  }));
}

function renderPlanningQuestions() {
  const target = $("#planningFields");
  if (!target) return;
  const questions = getQuestions("study-planning");
  target.innerHTML = questions.map((question, index) => {
    const isMulti = question.type === "multi-select";
    const rawValue = state.quizAnswers[question.id] ?? (isMulti ? [] : "");
    const selectedValues = isMulti ? (Array.isArray(rawValue) ? rawValue.map(String) : rawValue ? [String(rawValue)] : []) : [];
    const hint = question.hint ? `<p class="planning-question-hint">${escapeHTML(localized(question.hint))}</p>` : (isMulti ? `<p class="planning-question-hint">${t("Select all that apply.", "可选择多个选项。")}</p>` : "");
    return `<fieldset class="planning-question"><legend><span>${String(index + 1).padStart(2,"0")}</span>${escapeHTML(localized(question.question))}</legend>${hint}<div class="planning-options">${(question.options || []).map((option, optionIndex) => {
      const optionValue = typeof option === "object" ? (option.value ?? option.id ?? optionIndex) : option;
      const label = typeof option === "object" ? localized(option.label ?? option.name ?? option) : option;
      const checked = isMulti ? selectedValues.includes(String(optionValue)) : String(rawValue) === String(optionValue);
      return `<label class="planning-option ${checked ? "selected" : ""}"><input type="${isMulti ? "checkbox" : "radio"}" name="${escapeHTML(question.id)}" value="${escapeHTML(optionValue)}" ${checked ? "checked" : ""}><span>${escapeHTML(label)}</span></label>`;
    }).join("")}</div></fieldset>`;
  }).join("");
  target.querySelectorAll(".planning-options input").forEach(input => input.addEventListener("change", () => {
    const question = questions.find(item => item.id === input.name);
    if (!question) return;
    if (question.type === "multi-select") {
      const current = Array.isArray(state.quizAnswers[question.id]) ? [...state.quizAnswers[question.id]].map(String) : (state.quizAnswers[question.id] ? [String(state.quizAnswers[question.id])] : []);
      if (input.checked && !current.includes(input.value)) current.push(input.value);
      if (!input.checked) { const index = current.indexOf(input.value); if (index >= 0) current.splice(index, 1); }
      state.quizAnswers[question.id] = current;
    } else {
      state.quizAnswers[question.id] = input.value;
    }
    input.closest(".planning-option")?.classList.toggle("selected", input.checked);
    saveDiscovery(); updateDiscoveryProgress();
  }));
}

function renderDiscoveryPanel() {
  if (state.quizTab === "questions") renderRiasecQuestion();
  if (state.quizTab === "dreams") renderDevelopmentChoices();
  if (state.quizTab === "planning") renderPlanningQuestions();
  const prev = $("#quizPrevious");
  const next = $("#quizNext");
  const submit = $("#submitQuiz");
  if (prev) {
    prev.classList.toggle("hidden", state.quizTab === "questions");
    prev.disabled = state.quizTab === "questions" && state.quizIndex === 0;
  }
  if (next) next.classList.toggle("hidden", state.quizTab !== "dreams");
  if (submit) submit.classList.toggle("hidden", state.quizTab !== "planning");
  updateDiscoveryProgress();
}

function renderDiscovery() {
  loadDiscovery();
  renderDiscoveryPanel();
}

function initDiscoveryEvents() {
  $("#quizTabs")?.addEventListener("click", event => {
    const button = event.target.closest("[data-quiz-tab]");
    if (button) setQuizTab(button.dataset.quizTab);
  });
  $("#quizPrevious")?.addEventListener("click", () => {
    if (state.quizTab === "planning") setQuizTab("dreams");
    else if (state.quizTab === "dreams") setQuizTab("questions");
    else if (state.quizIndex > 0) { state.quizIndex--; renderRiasecQuestion(); }
  });
  $("#quizNext")?.addEventListener("click", () => {
    if (state.quizTab === "questions") setQuizTab("dreams");
    else if (state.quizTab === "dreams") setQuizTab("planning");
  });
  $("#submitQuiz")?.addEventListener("click", completeDiscovery);
}

function calculateRiasecScores() {
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  getQuestions("riasec").forEach(question => {
    const value = Number(state.quizAnswers[question.id] || 0);
    if (scores[question.category] !== undefined) scores[question.category] += value;
  });
  return Object.entries(scores).map(([code, score]) => ({ code, score, ...RIASEC_LABELS[code] })).sort((a,b) => b.score - a.score);
}

function completeDiscovery() {
  const total = getArray("discoveryQuestions").length;
  const completed = answerCount();
  if (completed < total) {
    const missing = total - completed;
    const message = t(`You still have ${missing} unanswered items. You can review each section before generating your report.`, `还有 ${missing} 项尚未回答，请先完成所有部分。`);
    setText("#quizMessage", message);
    showToast(message);
    return;
  }
  const result = { answers: state.quizAnswers, scores: calculateRiasecScores(), totalQuestions: total, completedAt: new Date().toISOString() };
  saveDiscovery({ result, completed: true });
  setText("#quizMessage", t("Your exploration report is ready.", "你的探索报告已准备好。"));
  showToast(t("Assessment completed.", "探索问卷已完成。"));
  navigateTo("report");
}

function resetDiscovery() {
  if (!confirm(t("Reset all discovery answers?", "确定要重置所有探索答案吗？"))) return;
  localStorage.removeItem(STORAGE.discovery);
  state.quizAnswers = {}; state.quizIndex = 0; state.quizTab = "questions";
  renderDiscovery(); showToast(t("Your discovery data has been reset.", "探索资料已重置。"));
}

/* =========================================================
   PERSONAL REPORT
   ========================================================= */

const RIASEC_FIELD_MAP = {
  R: ["engineering", "architecture-built-environment", "agriculture", "transport-logistics"],
  I: ["medicine-health", "biological-sciences", "science", "computer-technology"],
  A: ["design-creative", "communication-media", "architecture-built-environment"],
  S: ["medicine-health", "education", "social-sciences"],
  E: ["business", "law", "hospitality-tourism"],
  C: ["business", "transport-logistics", "computer-technology"]
};

function renderReport() {
  const target = $("#reportContent");
  if (!target) return;
  const saved = loadDiscovery();
  const result = saved.result;
  if (!saved.completed || !result) {
    target.innerHTML = `<div class="empty-state report-empty"><span>✧</span><h2>${t("Your future report starts here.", "你的未来报告从这里开始。")}</h2><p>${t("Complete the 80-item discovery experience to generate your personal exploration report.", "完成 80 道探索题目后，即可生成个人探索报告。")}</p><button class="button button-primary" data-page="discover">${t("Start discovery", "开始探索")} ↗</button></div>`;
    return;
  }
  const scores = result.scores || calculateRiasecScores();
  const top = scores.slice(0,3);
  const selectedFields = [...new Set(top.flatMap(item => RIASEC_FIELD_MAP[item.code] || []))].map(id => getArray("studyFields").find(field => field.id === id)).filter(Boolean).slice(0,6);
  const development = getQuestions("development-interest").map(question => ({ question: localized(question.question), answers: state.quizAnswers[question.id] || [] }));
  const planning = getQuestions("study-planning").map(question => ({ question: localized(question.question), answer: state.quizAnswers[question.id] || "" }));
  target.innerHTML = `
    <section class="report-summary"><span class="section-eyebrow">YOUR INTEREST PROFILE</span><h2>${t("Your strongest interest themes", "你的主要兴趣倾向")}</h2><p>${t("These results are a starting point for exploration, not a fixed career label or a guarantee of suitability.", "这些结果是探索起点，并不是固定的职业标签，也不代表适合度保证。")}</p>
      <div class="riasec-score-grid">${scores.map(item => `<div class="riasec-score"><span>${item.code}</span><strong>${item.score}</strong><small>${escapeHTML(item[state.language])}</small><div><i style="width:${item.score / 60 * 100}%"></i></div></div>`).join("")}</div>
    </section>
    <section class="report-section"><h2>${t("Your leading themes", "排名靠前的兴趣方向")}</h2><div class="report-theme-grid">${top.map((item,index) => `<article><span>0${index+1}</span><h3>${escapeHTML(item[state.language])}</h3><p>${escapeHTML(t(`Your answers show a stronger interest in ${item.en.toLowerCase()} activities.`, `你的答案显示你对${item.zh}相关活动有较高兴趣。`))}</p></article>`).join("")}</div></section>
    <section class="report-section"><h2>${t("Study fields to explore", "可以进一步探索的学科领域")}</h2><div class="catalog-grid">${selectedFields.map(field => `<article class="catalog-card"><h3>${escapeHTML(getName(field))}</h3><p>${escapeHTML(getDescription(field))}</p><button class="text-button" data-report-field="${escapeHTML(field.id)}">${t("Explore courses", "探索相关课程")} ↗</button></article>`).join("")}</div></section>
    <section class="report-section"><h2>${t("Your development interests", "你的发展兴趣选择")}</h2>${development.map(item => `<div class="report-answer"><strong>${escapeHTML(item.question)}</strong><p>${escapeHTML(item.answers.join(", ") || "—")}</p></div>`).join("")}</section>
    <section class="report-section"><h2>${t("Your study planning answers", "你的升学规划答案")}</h2>${planning.map(item => `<div class="report-answer"><strong>${escapeHTML(item.question)}</strong><p>${escapeHTML(Array.isArray(item.answer) ? item.answer.join(", ") : (item.answer || "—"))}</p></div>`).join("")}</section>
    <p class="report-disclaimer">${t("This self-exploration report is for educational guidance only. It is not a psychometric diagnosis, admissions decision or professional career assessment. Verify course requirements with each institution.", "本报告仅供教育探索参考，并非心理测评诊断、录取决定或专业职业评估。课程入学条件请向相关院校核实。")}</p>
  `;
  target.querySelectorAll("[data-report-field]").forEach(button => button.addEventListener("click", () => {
    navigateTo("courses"); const select = $("#courseFieldFilter"); if (select) { select.value = button.dataset.reportField; renderCourses(); }
  }));
}

function exportReport() {
  const saved = loadDiscovery();
  if (!saved.completed) { showToast(t("Complete the discovery assessment first.", "请先完成兴趣探索问卷。")); return; }
  const payload = { application: "Find Your Future", exportedAt: new Date().toISOString(), language: state.language, ...saved };
  downloadJSON(payload, "find-your-future-report.json");
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a"); link.href = url; link.download = filename; link.click();
  URL.revokeObjectURL(url);
}

/* =========================================================
   MODALS
   ========================================================= */

function openModal(selector) {
  const modal = $(selector);
  if (!modal) return;
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  $$(".modal.open").forEach(modal => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); });
  document.body.classList.remove("modal-open");
}

/* =========================================================
   ADMIN DASHBOARD — INTEGRATED FROM admin.js
   Browser-local prototype; no shared backend is implied.
   ========================================================= */

const ADMIN_CONFIG = { storageKey: STORAGE.admin, maxItemsPerPage: 100 };
const ADMIN_COLLECTIONS = [
  { key: "studyFields", label: { en: "Study Fields", zh: "学科领域" }, icon: "◈" },
  { key: "disciplines", label: { en: "Disciplines", zh: "专业方向" }, icon: "⌘" },
  { key: "courses", label: { en: "Courses", zh: "科系课程" }, icon: "▤" },
  { key: "institutions", label: { en: "Institutions", zh: "院校" }, icon: "⌂" },
  { key: "institutionTypes", label: { en: "Institution Types", zh: "院校类别" }, icon: "▦" },
  { key: "careers", label: { en: "Careers", zh: "职业" }, icon: "◇" },
  { key: "professionalRequirements", label: { en: "Professional Requirements", zh: "专业资格" }, icon: "◎" },
  { key: "studyPathways", label: { en: "Study Pathways", zh: "升学路线" }, icon: "⇢" },
  { key: "qualificationLevels", label: { en: "Qualification Levels", zh: "学历层级" }, icon: "▥" },
  { key: "discoveryQuestions", label: { en: "Discovery Questions", zh: "探索问卷" }, icon: "?" },
  { key: "scholarshipSources", label: { en: "Scholarship Sources", zh: "奖学金来源" }, icon: "☆" },
  { key: "admissionsTests", label: { en: "Admissions & Tests", zh: "入学考试与要求" }, icon: "✓" }
];

const adminState = { container: null, data: DATA, language: "en", activeCollection: "courses", search: "", localChanges: {} };

function adminText(en, zh) { return adminState.language === "zh" ? zh : en; }
function adminLocalized(value, fallback = "") {
  if (value == null) return fallback;
  if (typeof value === "object") return value[adminState.language] ?? value.en ?? value.zh ?? fallback;
  return String(value);
}
function adminEscape(value = "") { return escapeHTML(value); }
function adminItemId(item) { return String(item?.id ?? item?.slug ?? item?.code ?? ""); }
function adminOriginalCollection(key) { return Array.isArray(adminState.data?.[key]) ? adminState.data[key] : []; }
function adminGetCollection(key) {
  return Array.isArray(adminState.localChanges[key]) ? adminState.localChanges[key] : [...adminOriginalCollection(key)];
}
function adminSaveLocalChanges() {
  try { localStorage.setItem(ADMIN_CONFIG.storageKey, JSON.stringify(adminState.localChanges)); }
  catch (error) { console.error(error); alert(adminText("Unable to save. Browser storage may be full.", "无法保存，浏览器储存空间可能已满。")); }
}
function initAdmin(options = {}) {
  adminState.container = options.container || $("#adminWorkspace");
  adminState.data = options.data || DATA;
  adminState.language = options.language || state.language;
  if (!adminState.container) return;
  adminState.localChanges = readAdminOverrides();
  renderAdminDashboard();
}
function adminStatus(record) {
  const status = record?.dataStatus ?? record?.status ?? "pending";
  return status;
}
function renderAdminDashboard() {
  adminState.search = "";
  const total = ADMIN_COLLECTIONS.reduce((sum, item) => sum + adminGetCollection(item.key).length, 0);
  const verified = ADMIN_COLLECTIONS.reduce((sum, item) => sum + adminGetCollection(item.key).filter(record => ["verified", "official", "official-source"].includes(adminStatus(record))).length, 0);
  if (!adminState.container) return;
  adminState.container.innerHTML = `
    <div class="admin-dashboard-integrated">
      <header class="admin-dashboard-header"><div><span class="section-eyebrow">DATABASE MANAGEMENT</span><h2>${adminText("Manage your education database.", "管理教育资料数据库。")}</h2><p>${adminText("Edit records, maintain sources and track verification status.", "编辑资料、维护来源并追踪核实状态。")}</p></div><div class="admin-actions"><button class="button button-secondary" id="adminExport">${adminText("Export JSON", "导出 JSON")}</button><button class="button button-primary" id="adminImportTrigger">${adminText("Import JSON", "导入 JSON")}</button><input id="adminImportFile" type="file" accept="application/json,.json" hidden></div></header>
      <div class="admin-summary"><div><span>${adminText("Total records", "资料总数")}</span><strong>${total}</strong></div><div><span>${adminText("Verified / official", "已核实／官方资料")}</span><strong>${verified}</strong></div><div><span>${adminText("Collections", "数据库类别")}</span><strong>${ADMIN_COLLECTIONS.length}</strong></div></div>
      <div class="admin-workspace-integrated"><aside class="admin-collection-nav"><h3>${adminText("DATABASE", "数据库")}</h3>${ADMIN_COLLECTIONS.map(item => `<button type="button" class="admin-collection-button ${item.key === adminState.activeCollection ? "active" : ""}" data-admin-collection="${item.key}"><span>${item.icon}</span><span>${adminLocalized(item.label)}</span><small>${adminGetCollection(item.key).length}</small></button>`).join("")}</aside><section class="admin-collection-panel"><div id="adminCollectionContent"></div></section></div>
      <p class="admin-local-note">${adminText("Local prototype: changes are saved in this browser only. They do not update a shared database or official institution records. Export your JSON regularly to keep a backup.", "本地原型：修改只保存在当前浏览器，不会更新共享数据库或官方院校资料。请定期导出 JSON 备份。")}</p>
    </div>`;
  adminState.container.querySelectorAll("[data-admin-collection]").forEach(button => button.addEventListener("click", () => {
    adminState.activeCollection = button.dataset.adminCollection; adminState.search = "";
    adminState.container.querySelectorAll("[data-admin-collection]").forEach(item => item.classList.toggle("active", item === button));
    renderAdminCollection();
  }));
  $("#adminExport", adminState.container)?.addEventListener("click", exportAdminData);
  $("#adminImportTrigger", adminState.container)?.addEventListener("click", () => $("#adminImportFile", adminState.container)?.click());
  $("#adminImportFile", adminState.container)?.addEventListener("change", importAdminData);
  renderAdminCollection();
  updateAdminLegacyStats();
}
function updateAdminLegacyStats() {
  const map = { "#adminFieldCount": "studyFields", "#adminCourseCount": "courses", "#adminInstitutionCount": "institutions", "#adminCareerCount": "careers" };
  Object.entries(map).forEach(([selector, key]) => setText(selector, String(adminGetCollection(key).length)));
}
function renderAdminCollection() {
  const key = adminState.activeCollection;
  const definition = ADMIN_COLLECTIONS.find(item => item.key === key);
  const target = $("#adminCollectionContent", adminState.container);
  if (!definition || !target) return;
  const records = adminGetCollection(key);
  target.innerHTML = `
    <div class="admin-collection-heading"><div><h2>${adminLocalized(definition.label)}</h2><p>${adminText("Manage the complete record structure as JSON.", "以完整 JSON 结构管理资料。")}</p></div><button type="button" class="button button-primary" id="adminAddRecord">+ ${adminText("Add record", "新增资料")}</button></div>
    <div class="admin-toolbar"><input type="search" id="adminSearch" placeholder="${adminText("Search by name, ID or description...", "按名称、编号或说明搜索……")}"><select id="adminStatusFilter"><option value="all">${adminText("All statuses", "全部状态")}</option><option value="verified">Verified</option><option value="official">Official</option><option value="directory">Directory</option><option value="illustrative">Illustrative</option><option value="pending">Pending</option></select></div>
    <div class="admin-table-wrapper"><table class="admin-table"><thead><tr><th>${adminText("Record", "资料名称")}</th><th>ID</th><th>${adminText("Status", "状态")}</th><th>${adminText("Actions", "操作")}</th></tr></thead><tbody id="adminTableBody"></tbody></table></div><p class="admin-record-count" id="adminRecordCount"></p>`;
  $("#adminAddRecord", target)?.addEventListener("click", () => openAdminEditor(null));
  $("#adminSearch", target)?.addEventListener("input", event => { adminState.search = event.target.value.toLowerCase(); renderAdminTable(); });
  $("#adminStatusFilter", target)?.addEventListener("change", renderAdminTable);
  renderAdminTable();
}
function renderAdminTable() {
  const records = adminGetCollection(adminState.activeCollection);
  const body = $("#adminTableBody", adminState.container);
  if (!body) return;
  const statusFilter = $("#adminStatusFilter", adminState.container)?.value || "all";
  const filtered = records.filter(record => {
    const searchText = [adminLocalized(record.name), adminLocalized(record.title), adminLocalized(record.question), record.id, adminLocalized(record.description)].join(" ").toLowerCase();
    const status = adminStatus(record);
    return searchText.includes(adminState.search) && (statusFilter === "all" || status === statusFilter || (statusFilter === "pending" && ["pending", "needs-verification"].includes(status)));
  });
  body.innerHTML = filtered.map(record => `<tr><td><strong>${adminEscape(adminLocalized(record.name ?? record.title ?? record.question, "Untitled"))}</strong></td><td><code>${adminEscape(adminItemId(record) || "—")}</code></td><td><span class="status-badge status-${adminEscape(adminStatus(record))}">${adminEscape(adminStatus(record))}</span></td><td><div class="admin-row-actions"><button type="button" class="text-button" data-admin-edit="${adminEscape(adminItemId(record))}">${adminText("Edit", "编辑")}</button><button type="button" class="text-button danger-text" data-admin-delete="${adminEscape(adminItemId(record))}">${adminText("Delete", "删除")}</button></div></td></tr>`).join("") || `<tr><td colspan="4" class="admin-empty">${adminText("No records found.", "没有找到资料。")}</td></tr>`;
  setText("#adminRecordCount", `${filtered.length} ${adminText("records", "项资料")}`);
  body.querySelectorAll("[data-admin-edit]").forEach(button => button.addEventListener("click", () => {
    const record = records.find(item => adminItemId(item) === button.dataset.adminEdit);
    if (record) openAdminEditor(record);
  }));
  body.querySelectorAll("[data-admin-delete]").forEach(button => button.addEventListener("click", () => deleteAdminRecord(button.dataset.adminDelete)));
}
function openAdminEditor(record) {
  const isNew = !record;
  const draft = record ? structuredClone(record) : { id: "new-record", name: { en: "", zh: "" }, description: { en: "", zh: "" }, dataStatus: "pending", source: null, lastVerified: null };
  const overlay = document.createElement("div");
  overlay.className = "admin-editor-overlay";
  overlay.innerHTML = `<section class="admin-editor-dialog" role="dialog" aria-modal="true" aria-labelledby="adminEditorTitle"><header><div><span class="section-eyebrow">${adminText("DATABASE RECORD", "数据库资料")}</span><h2 id="adminEditorTitle">${isNew ? adminText("Add record", "新增资料") : adminText("Edit record", "编辑资料")}</h2></div><button type="button" class="modal-close" data-admin-editor-close aria-label="Close">×</button></header><p>${adminText("Edit the full JSON object. Keep the field names and data types consistent with the database schema.", "编辑完整 JSON 对象。请保持字段名称与资料类型符合数据库结构。")}</p><textarea id="adminRecordJSON" spellcheck="false"></textarea><footer><button type="button" class="button button-secondary" data-admin-editor-close>${adminText("Cancel", "取消")}</button><button type="button" class="button button-primary" id="adminSaveRecord">${adminText("Save locally", "保存到本地")}</button></footer></section>`;
  document.body.appendChild(overlay);
  $("#adminRecordJSON", overlay).value = JSON.stringify(draft, null, 2);
  overlay.querySelectorAll("[data-admin-editor-close]").forEach(button => button.addEventListener("click", () => overlay.remove()));
  $("#adminSaveRecord", overlay).addEventListener("click", () => {
    let parsed;
    try { parsed = JSON.parse($("#adminRecordJSON", overlay).value); }
    catch (error) { alert(`${adminText("Invalid JSON:", "JSON 格式错误：")} ${error.message}`); return; }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed) || !adminItemId(parsed)) { alert(adminText("A record must be an object with an id.", "资料必须是包含 id 的对象。")); return; }
    const collection = adminGetCollection(adminState.activeCollection);
    const existingIndex = collection.findIndex(item => adminItemId(item) === adminItemId(parsed));
    if (isNew && existingIndex >= 0) { alert(adminText("This ID already exists.", "这个编号已经存在。")); return; }
    if (!isNew && existingIndex < 0) { alert(adminText("The original record could not be found.", "找不到原始资料。")); return; }
    if (existingIndex >= 0) collection[existingIndex] = parsed; else collection.push(parsed);
    adminState.localChanges[adminState.activeCollection] = collection;
    adminSaveLocalChanges(); overlay.remove(); renderAdminDashboard();
    showToast(adminText("Record saved in this browser.", "资料已保存在当前浏览器。"));
  });
}
function deleteAdminRecord(id) {
  if (!confirm(adminText("Delete this local record?", "确定删除这项本地资料吗？"))) return;
  adminState.localChanges[adminState.activeCollection] = adminGetCollection(adminState.activeCollection).filter(item => adminItemId(item) !== id);
  adminSaveLocalChanges(); renderAdminDashboard();
}
function exportAdminData() {
  const output = {};
  ADMIN_COLLECTIONS.forEach(item => output[item.key] = adminGetCollection(item.key));
  output._metadata = { application: "Find Your Future", exportedAt: new Date().toISOString(), formatVersion: 2, note: "Browser-local admin data export" };
  downloadJSON(output, "find-your-future-database.json");
}
async function importAdminData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!imported || typeof imported !== "object" || Array.isArray(imported)) throw new Error("Expected a JSON object.");
    if (!confirm(adminText("Import this JSON? Matching collections will replace local records.", "确定导入此 JSON 吗？相同类别的本地资料将被替换。"))) return;
    const next = { ...adminState.localChanges };
    ADMIN_COLLECTIONS.forEach(item => { if (Array.isArray(imported[item.key])) next[item.key] = imported[item.key]; });
    adminState.localChanges = next; adminSaveLocalChanges(); renderAdminDashboard();
    showToast(adminText("Import completed.", "导入完成。"));
  } catch (error) { alert(`${adminText("Import failed:", "导入失败：")} ${error.message}`); }
  finally { event.target.value = ""; }
}

/* =========================================================
   INITIALIZATION
   ========================================================= */

function initApp() {
  // The original index.html is the application shell. Never replace it with innerHTML.
  applyTheme();
  document.documentElement.dataset.language = state.language;
  setText("#languageLabel", state.language === "en" ? "中文" : "EN");
  initGlobalEvents();
  initCatalogFilters();
  initFieldEvents();
  initCourseEvents();
  initInstitutionEvents();
  initPathwayEvents();
  initCareerEvents();
  initDiscoveryEvents();
  renderHomeStats();
  const initialPage = location.hash.slice(1) || "home";
  navigateTo(initialPage, false);
}

document.addEventListener("DOMContentLoaded", initApp);
