import { useEffect } from "react";
import { useLang } from "../context/langContext.js";
import ProjectThumb from "./ProjectThumb.jsx";

export default function ProjectModal({ project, onClose }) {
  const { c } = useLang();
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label={c.ui.close}>×</button>
        <ProjectThumb project={project} />
        <div className="modal-body">
          <h3>{project.title}</h3>
          <p>{project.details}</p>
          <p><strong>{c.ui.problem}</strong> {project.problem}</p>
          <p><strong>{c.ui.solution}</strong> {project.solution}</p>
          {project.stack && (
            <div className="tags">
              {project.stack.map((t) => <span key={t}>{t}</span>)}
            </div>
          )}
          <p className="result">{project.result}</p>
          <a href="#contacto" className="btn btn-primary" onClick={onClose}>
            {c.ui.similar}
          </a>
        </div>
      </div>
    </div>
  );
}
