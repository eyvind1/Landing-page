import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

export default function Process() {
  const { c } = useLang();
  return (
    <Section id="proceso" title={c.ui.processTitle} alt>
      <ol className="steps">
        {c.steps.map((s, i) => (
          <li key={i}>
            <span className="step-num">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
