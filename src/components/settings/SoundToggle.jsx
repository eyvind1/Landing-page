import { useLang } from "../../context/langContext.js";
import { useSound } from "../../context/soundContext.js";

export default function SoundToggle() {
  const { c } = useLang();
  const { enabled, toggle } = useSound();
  const label = enabled ? c.ui.soundOn : c.ui.soundOff;
  return (
    <button
      className={enabled ? "sound-toggle is-on" : "sound-toggle"}
      type="button"
      aria-pressed={enabled}
      aria-label={label}
      title={label}
      onClick={toggle}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 10h3l5-4v12l-5-4H4z" />
        {enabled ? (
          <path d="M16 9c1.2 1 1.8 2 1.8 3s-.6 2-1.8 3M18.5 7c1.8 1.6 2.7 3.2 2.7 5s-.9 3.4-2.7 5" />
        ) : (
          <path d="M16 10l5 5M21 10l-5 5" />
        )}
      </svg>
    </button>
  );
}
