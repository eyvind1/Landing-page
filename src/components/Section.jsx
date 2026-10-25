export default function Section({ id, title, subtitle, children, alt }) {
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
