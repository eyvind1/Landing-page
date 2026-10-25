import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";
import ProjectThumb from "../components/ProjectThumb.jsx";

export default function Projects({ onSelect }) {
  const { c } = useLang();
  return (
    <Section id="proyectos" title={c.ui.projectsTitle} subtitle={c.ui.projectsSubtitle}>
      <div className="grid grid-3">
        {c.projects.map((p, i) => (
          <article className="card project" key={i}>
            <ProjectThumb project={p} />
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.solution}</p>
              {p.stack && (
                <div className="tags">
                  {p.stack.map((t) => <span key={t}>{t}</span>)}
                </div>
              )}
              <p className="result">{p.result}</p>
              <button className="link-btn" onClick={() => onSelect(i)}>{c.ui.detail}</button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
