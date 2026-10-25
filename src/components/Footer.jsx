import { brand } from "../content/index.js";
import { useLang } from "../context/langContext.js";

export default function Footer() {
  const { c } = useLang();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {brand}. {c.ui.rights}</span>
        <span>
          <a href="#">LinkedIn</a> · <a href="#">GitHub</a> · <a href="#">{c.ui.privacy}</a>
        </span>
      </div>
    </footer>
  );
}
