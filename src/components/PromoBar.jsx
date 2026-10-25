import { useState } from "react";
import { useLang } from "../context/langContext.js";

export default function PromoBar() {
  const { c } = useLang();
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="promo">
      <span>
        🎁 {c.ui.promoText} <a href="#contacto">{c.ui.promoLink}</a>
      </span>
      <button onClick={() => setOpen(false)} aria-label={c.ui.promoClose}>×</button>
    </div>
  );
}
