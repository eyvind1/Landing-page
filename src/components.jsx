import { useEffect, useRef, useState } from "react";

const REVEAL_SELECTOR =
  ".section h2, .subtitle, .card, .steps li, .faq-item, .contact > *, .stat";

// Anima los elementos al entrar en pantalla, escalonando los hermanos.
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      const i = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty("--d", `${Math.min(i, 5) * 80}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
}

export function PromoBar() {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div className="promo">
      <span>
        🎁 Diagnóstico gratuito este mes. <a href="#contacto">Reserva el tuyo</a>
      </span>
      <button onClick={() => setOpen(false)} aria-label="Cerrar aviso">×</button>
    </div>
  );
}

export function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1500;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export function ProjectThumb({ project }) {
  if (project.image) {
    return <img className="thumb" src={project.image} alt={project.title} loading="lazy" />;
  }
  const [a, b] = project.gradient;
  return (
    <div className="thumb" style={{ background: `linear-gradient(135deg, ${a}, ${b})` }} aria-hidden="true">
      <span>{project.icon}</span>
    </div>
  );
}

export function ProjectModal({ project, onClose }) {
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
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <ProjectThumb project={project} />
        <div className="modal-body">
          <h3>{project.title}</h3>
          <p>{project.details}</p>
          <p><strong>Problema:</strong> {project.problem}</p>
          <p><strong>Solución:</strong> {project.solution}</p>
          <div className="tags">
            {project.stack.map((t) => <span key={t}>{t}</span>)}
          </div>
          <p className="result">{project.result}</p>
          <a href="#contacto" className="btn btn-primary" onClick={onClose}>
            Quiero algo similar
          </a>
        </div>
      </div>
    </div>
  );
}
