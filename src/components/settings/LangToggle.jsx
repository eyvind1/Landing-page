import { useLang } from "../../context/langContext.js";

export default function LangToggle() {
  const { lang, setLang, c } = useLang();
  const en = lang === "en";
  return (
    <button
      className="lang-toggle"
      role="switch"
      aria-checked={en}
      aria-label={c.ui.langLabel}
      title={c.ui.langLabel}
      onClick={() => setLang(en ? "es" : "en")}
    >
      <i className="lang-thumb" />
      <span className={en ? "" : "on"}>ES</span>
      <span className={en ? "on" : ""}>EN</span>
    </button>
  );
}
