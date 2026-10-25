import { useLang } from "../context/langContext.js";

export default function Experiences3DView() {
  const { c } = useLang();
  const x = c.exp3d;

  return (
    <main>
      <section className="hero exp-hero">
        <div className="container">
          <a href="#inicio" className="back-link">{x.back}</a>
          <span className="badge">{x.badge}</span>
          <h1><span className="grad">{x.title}</span></h1>
          <p>{x.subtitle}</p>
        </div>
      </section>

      <section id="videojuego" className="section">
        <div className="container">
          <div className="game-card">
            <div className="game-art" aria-hidden="true">
              <span className="game-tag">{x.gameTag}</span>
              <strong>{x.gameTitle}</strong>
            </div>
            <div className="game-body">
              <span className="status">{x.gameStatus}</span>
              <h2>{x.gameTitle}</h2>
              <p>{x.gameText}</p>
              <p className="game-note">{x.gameNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="taller" className="section alt">
        <div className="container">
          <h2>{x.worksTitle}</h2>
          <p className="subtitle">{x.worksSubtitle}</p>
          <div className="grid grid-3">
            {x.works.map((w, i) => (
              <article className="card project" key={i}>
                <img className="thumb" src={w.image} alt={w.alt} loading="lazy" />
                <div className="project-body">
                  <div className="tags"><span>{w.tag}</span></div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container exp-cta">
          <h2>{x.ctaTitle}</h2>
          <p className="subtitle">{x.ctaText}</p>
          <a href="#contacto" className="btn btn-primary">{x.ctaButton}</a>
        </div>
      </section>
    </main>
  );
}
