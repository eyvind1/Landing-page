import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

export default function Plans() {
  const { c } = useLang();
  return (
    <Section id="planes" title={c.ui.plansTitle} alt>
      <div className="grid grid-3">
        {c.plans.map((p, i) => (
          <div className={p.featured ? "card featured" : "card"} key={i}>
            <h3>{p.name}</h3>
            <p>{p.text}</p>
            <ul>
              {p.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href="#contacto" className="btn btn-outline">{c.ui.plansCta}</a>
          </div>
        ))}
      </div>
    </Section>
  );
}
