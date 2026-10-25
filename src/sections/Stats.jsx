import { useLang } from "../context/langContext.js";
import Counter from "../components/Counter.jsx";

export default function Stats() {
  const { c } = useLang();
  return (
    <section className="stats">
      <div className="container grid grid-4">
        {c.stats.map((s, i) => (
          <div className="stat" key={i}>
            <strong><Counter value={s.value} suffix={s.suffix} /></strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
