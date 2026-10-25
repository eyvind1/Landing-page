import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

export default function Testimonials() {
  const { c } = useLang();
  return (
    <Section id="testimonios" title={c.ui.testimonialsTitle}>
      <div className="grid grid-2">
        {c.testimonials.map((t, i) => (
          <blockquote className="card" key={i}>
            <p>“{t.quote}”</p>
            <footer>— {t.author}, {t.role}</footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
