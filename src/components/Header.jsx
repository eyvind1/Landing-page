import { useState } from "react";
import { brand } from "../content/index.js";
import { useLang } from "../context/langContext.js";
import SettingsMenu from "./settings/SettingsMenu.jsx";

export default function Header() {
  const { c } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo">
          {"</>"} {brand}
        </a>
        <nav className={open ? "nav open" : "nav"}>
          {c.nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            {c.ui.cta}
          </a>
        </nav>
        <div className="header-actions">
          <SettingsMenu />
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={c.ui.menu}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
