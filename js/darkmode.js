
const THEME_KEY = "theme";

function applyTheme(theme, toggleBtn) {
  const body = document.body;
  const isDark = theme === "dark";

  if (isDark) {
    body.classList.add("dark-theme");
    localStorage.setItem(THEME_KEY, "dark");
  } else {
    body.classList.remove("dark-theme");
    localStorage.setItem(THEME_KEY, "light");
  }

  if (toggleBtn) {
    toggleBtn.setAttribute("aria-pressed", String(isDark));
    toggleBtn.innerHTML = isDark
      ? `☀️ <span class="theme-toggle-text">Light</span>`
      : `🌙 <span class="theme-toggle-text">Dark</span>`;
  }
}

function initTheme(toggleBtn) {
  const storedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    applyTheme("dark", toggleBtn);
  } else {
    applyTheme("light", toggleBtn);
  }
}


export function initDarkMode(toggleSelector = "#theme-toggle") {
  const toggleBtn = document.querySelector(toggleSelector);
  if (!toggleBtn) return;

  initTheme(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    const body = document.body;
    const isCurrentlyDark = body.classList.contains("dark-theme");
    applyTheme(isCurrentlyDark ? "light" : "dark", toggleBtn);
  });
}
