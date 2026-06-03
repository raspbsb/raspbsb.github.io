// ─────────────────────────────────────────
// main.js
// ─────────────────────────────────────────

import { projects } from "./data/projects.js";
import { renderProjectCards } from "./modules/renderProjectCards.js";

// ── 다크모드 토글 ─────────────────────────

const THEME_KEY = "theme";
const DARK = "dark";
const LIGHT = "light";

const themeToggleBtn = document.querySelector(".theme-toggle");
const themeIcon = themeToggleBtn.querySelector(".material-icons");

// 저장된 테마 또는 시스템 설정으로 초기화
function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? DARK : LIGHT;
}

function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);

  themeIcon.textContent = theme === DARK ? "light_mode" : "dark_mode";

  themeToggleBtn.setAttribute("aria-label", theme === DARK ? "라이트모드 전환" : "다크모드 전환");

  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = document.body.getAttribute("data-theme");

  applyTheme(current === DARK ? LIGHT : DARK);
}

// 초기 실행
applyTheme(getInitialTheme());

themeToggleBtn.addEventListener("click", toggleTheme);

// ── 프로젝트 카드 렌더링 ─────────────────

const projectList = document.querySelector("#projectList");

renderProjectCards(projects, projectList);
