import { useEffect, useState } from "react";
import { useLang } from "../../context/langContext.js";

const THEME_OPTIONS = [
  { value: "system", icon: "💻", key: "themeSystem" },
  { value: "light", icon: "☀️", key: "themeLight" },
  { value: "dark", icon: "🌙", key: "themeDark" },
];

export default function ThemeToggle() {
  const { c } = useLang();
  const [pref, setPref] = useState(() => localStorage.getItem("theme") || "system");

  useEffect(() => {
    const mq = matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      const dark = pref === "dark" || (pref === "system" && mq.matches);
      document.documentElement.dataset.theme = dark ? "dark" : "light";
    };
    apply();
    localStorage.setItem("theme", pref);
    if (pref !== "system") return;
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [pref]);

  const idx = THEME_OPTIONS.findIndex((o) => o.value === pref);
  const current = THEME_OPTIONS[idx];
  const next = THEME_OPTIONS[(idx + 1) % THEME_OPTIONS.length];

  return (
    <button
      className="theme-cycle"
      type="button"
      aria-label={`${c.ui.themeGroup}: ${c.ui[current.key]}`}
      title={`${c.ui.themeGroup}: ${c.ui[current.key]}`}
      onClick={() => setPref(next.value)}
    >
      <span aria-hidden="true">{current.icon}</span>
      {c.ui.themeNames[current.value]}
    </button>
  );
}
