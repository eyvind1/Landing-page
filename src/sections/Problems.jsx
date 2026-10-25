import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

export default function Problems() {
  const { c } = useLang();
  return (
    <Section id="problema" title={c.ui.problemsTitle} alt>
      <div className="grid grid-3">
        {c.problems.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
