import { useEffect, useState } from "react";
import { content } from "../content/index.js";
import { LangContext } from "./langContext.js";

function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "es" || saved === "en") return saved;
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(detectLang);
  const c = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = c.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", c.meta.description);
    localStorage.setItem("lang", lang);
  }, [lang, c]);

  return <LangContext.Provider value={{ lang, setLang, c }}>{children}</LangContext.Provider>;
}
