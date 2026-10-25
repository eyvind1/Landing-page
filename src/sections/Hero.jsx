import { useLang } from "../context/langContext.js";

export default function Hero() {
  const { c } = useLang();
  return (
    <section id="inicio" className="hero">
      <div className="container hero-inner">
        <div>
          <span className="badge">{c.ui.heroBadge}</span>
          <h1>
            {c.ui.heroTitle} <span className="grad">{c.ui.heroGrad}</span>
          </h1>
          <p>{c.ui.heroText}</p>
          <div className="actions">
            <a href="#contacto" className="btn btn-primary">{c.ui.heroPrimary}</a>
            <a href="#proyectos" className="btn btn-outline">{c.ui.heroSecondary}</a>
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
          <div className="float-badge b1">{c.ui.mockDeployed}</div>
          <div className="float-badge b2">{c.ui.mockSales}</div>
        </div>
      </div>
    </section>
  );
}
