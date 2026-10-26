import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SoundContext } from "./soundContext.js";

const STORAGE_KEY = "sound";
const HOVER_TARGETS = ".nav a, .btn, .settings-btn, .lang-toggle, .theme-cycle";

let sounds = null;

function getSounds() {
  if (!sounds) {
    const make = (src, volume) => {
      const a = new Audio(src);
      a.volume = volume;
      a.preload = "auto";
      return a;
    };
    sounds = {
      click: make("/sounds/click.wav", 0.32),
      hover: make("/sounds/hover.wav", 0.14),
    };
  }
  return sounds;
}

function play(name) {
  const a = getSounds()[name];
  a.currentTime = 0;
  a.play().catch(() => {});
}

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(() => localStorage.getItem(STORAGE_KEY) === "on");
  const on = useRef(enabled);

  useEffect(() => {
    let lastHover = 0;

    const onClick = (e) => {
      if (on.current && e.target.closest("a, button")) play("click");
    };
    const onOver = (e) => {
      if (!on.current || e.pointerType !== "mouse") return;
      const el = e.target.closest(HOVER_TARGETS);
      if (!el || el.contains(e.relatedTarget)) return;
      const now = performance.now();
      if (now - lastHover < 90) return;
      lastHover = now;
      play("hover");
    };

    document.addEventListener("click", onClick);
    document.addEventListener("pointerover", onOver);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("pointerover", onOver);
    };
  }, []);

  const toggle = useCallback(() => {
    const next = !on.current;
    on.current = next;
    setEnabled(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
    } catch {
      // El almacenamiento puede estar bloqueado; la preferencia solo dura la sesión.
    }
  }, []);

  const value = useMemo(() => ({ enabled, toggle }), [enabled, toggle]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}
