import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

export default function Differentiators() {
  const { c } = useLang();
  return (
    <Section id="por-que" title={c.ui.whyTitle}>
      <div className="grid grid-4">
        {c.differentiators.map((d, i) => (
          <div className="card" key={i}>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
