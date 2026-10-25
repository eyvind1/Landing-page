import { useEffect, useRef, useState } from "react";
import { useLang } from "../../context/langContext.js";
import LangToggle from "./LangToggle.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import SoundToggle from "./SoundToggle.jsx";

// Los tres controles siguen montados aunque el panel esté cerrado para que el tema se siga aplicando.
export default function SettingsMenu() {
  const { c } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="settings" ref={ref}>
      <button
        className={open ? "settings-btn is-on" : "settings-btn"}
        type="button"
        aria-expanded={open}
        aria-controls="settings-panel"
        aria-label={c.ui.settings}
        title={c.ui.settings}
        onClick={() => setOpen(!open)}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>
      <div id="settings-panel" className="settings-panel" role="group" aria-label={c.ui.settings} hidden={!open}>
        <div className="settings-row"><span>{c.ui.settingsLang}</span><LangToggle /></div>
        <div className="settings-row"><span>{c.ui.settingsTheme}</span><ThemeToggle /></div>
        <div className="settings-row"><span>{c.ui.settingsSound}</span><SoundToggle /></div>
      </div>
    </div>
  );
}
