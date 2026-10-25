import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

export default function Services() {
  const { c } = useLang();
  return (
    <Section id="servicios" title={c.ui.servicesTitle} subtitle={c.ui.servicesSubtitle}>
      <div className="grid grid-3">
        {c.services.map((s, i) => (
          <div className="card" key={i}>
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
