import { useState } from "react";
import {
  brand,
  navLinks,
  problems,
  services,
  steps,
  projects,
  techs,
  differentiators,
  team,
  testimonials,
  plans,
  faqs,
  stats,
} from "./data.js";
import { useReveal, PromoBar, Counter, ProjectThumb, ProjectModal } from "./components.jsx";

function Section({ id, title, subtitle, children, alt }) {
  return (
    <section id={id} className={alt ? "section alt" : "section"}>
      <div className="container">
        <h2>{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="logo">
          {"</>"} {brand}
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          ☰
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Agenda una reunión
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-inner">
        <div>
          <span className="badge">Consultoría inicial gratuita</span>
          <h1>
            Software a medida que <span className="grad">impulsa tu negocio</span>
          </h1>
          <p>
            Diseñamos y desarrollamos aplicaciones web y móviles para pymes y startups, con entregas
            rápidas y comunicación directa.
          </p>
          <div className="actions">
            <a href="#contacto" className="btn btn-primary">Solicita una cotización</a>
            <a href="#proyectos" className="btn btn-outline">Ver proyectos</a>
          </div>
        </div>
        <div className="mockup" aria-hidden="true">
          <div className="laptop">
            <div className="dots"><span /><span /><span /></div>
            <div className="screen">
              <div className="mock-side"><i /><i /><i /><i /></div>
              <div className="mock-main">
                <div className="mock-kpis"><i /><i /><i /></div>
                <div className="mock-chart">
                  {[40, 65, 50, 80, 60, 95, 75].map((h, k) => (
                    <b key={k} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="phone">
            <div className="phone-notch" />
            <i /><i /><i /><i />
          </div>
          <div className="float-badge b1">✔ Desplegado</div>
          <div className="float-badge b2">⚡ +35% ventas</div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="container grid grid-4">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong><Counter value={s.value} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo: aquí se conectaría con un backend o servicio de correo.
    setSent(true);
  };

  if (sent) {
    return <p className="success">¡Gracias! Te responderemos en menos de 24 horas.</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input name="name" placeholder="Nombre" required />
      <input name="email" type="email" placeholder="Correo electrónico" required />
      <select name="type" defaultValue="" required>
        <option value="" disabled>Tipo de proyecto</option>
        <option>Aplicación web</option>
        <option>App móvil</option>
        <option>Software a medida</option>
        <option>Integración / API</option>
        <option>Otro</option>
      </select>
      <textarea name="message" rows="4" placeholder="Cuéntanos sobre tu proyecto" required />
      <button className="btn btn-primary" type="submit">Enviar mensaje</button>
    </form>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [selected, setSelected] = useState(null);
  useReveal();

  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <Stats />

        <Section id="problema" title="¿Te suena familiar?" alt>
          <div className="grid grid-3">
            {problems.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="servicios" title="Servicios" subtitle="Soluciones de principio a fin para tu producto.">
          <div className="grid grid-3">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="proceso" title="Nuestro proceso" alt>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="proyectos" title="Proyectos" subtitle="Casos de ejemplo (reemplaza por tus proyectos reales).">
          <div className="grid grid-3">
            {projects.map((p) => (
              <article className="card project" key={p.title}>
                <ProjectThumb project={p} />
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.solution}</p>
                  <div className="tags">
                    {p.stack.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <p className="result">{p.result}</p>
                  <button className="link-btn" onClick={() => setSelected(p)}>Ver detalle →</button>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="tecnologias" title="Tecnologías" alt>
          <div className="tags center">
            {techs.map((t) => <span key={t}>{t}</span>)}
          </div>
        </Section>

        <Section id="por-que" title="¿Por qué elegirnos?">
          <div className="grid grid-4">
            {differentiators.map((d) => (
              <div className="card" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="nosotros" title="Sobre nosotros" subtitle="Un equipo pequeño, apasionado y cercano." alt>
          <div className="grid grid-3">
            {team.map((m) => (
              <div className="card team" key={m.name}>
                <div className="avatar">{m.name.split(" ").map((w) => w[0]).join("")}</div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="testimonios" title="Lo que dicen de nosotros">
          <div className="grid grid-2">
            {testimonials.map((t) => (
              <blockquote className="card" key={t.author}>
                <p>“{t.quote}”</p>
                <footer>— {t.author}, {t.role}</footer>
              </blockquote>
            ))}
          </div>
        </Section>

        <Section id="planes" title="Modelos de contratación" alt>
          <div className="grid grid-3">
            {plans.map((p) => (
              <div className={p.featured ? "card featured" : "card"} key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul>
                  {p.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
                <a href="#contacto" className="btn btn-outline">Consultar</a>
              </div>
            ))}
          </div>
        </Section>

        <Section id="faq" title="Preguntas frecuentes">
          <div className="faq">
            {faqs.map((f, i) => (
              <div className="faq-item" key={f.q}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
                  {f.q}
                  <span>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p>{f.a}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="contacto" title="Hablemos de tu proyecto" subtitle="Agenda una consultoría inicial sin costo." alt>
          <div className="contact">
            <ContactForm />
            <div className="contact-info">
              <p>📧 hola@novacode.dev</p>
              <p>💬 WhatsApp: +00 000 000 0000</p>
              <p>📍 Trabajamos de forma remota</p>
            </div>
          </div>
        </Section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} {brand}. Todos los derechos reservados.</span>
          <span>
            <a href="#">LinkedIn</a> · <a href="#">GitHub</a> · <a href="#">Política de privacidad</a>
          </span>
        </div>
      </footer>

      <a className="whatsapp" href="https://wa.me/0000000000" aria-label="WhatsApp">💬</a>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
