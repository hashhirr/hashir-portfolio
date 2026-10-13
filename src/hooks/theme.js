/**
 * Theme lives on <html data-theme>, set before first paint by the inline
 * script in index.html. Components style themselves with CSS (`light:`
 * variant), so prerendered HTML and the client always agree.
 */
export const toggleTheme = () => {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", next === "dark" ? "#090a0d" : "#f7f6f2");
  try {
    localStorage.setItem("theme", next);
  } catch (e) {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
};
