import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

export default function Team() {
  const { c } = useLang();
  return (
    <Section id="nosotros" title={c.ui.aboutTitle} subtitle={c.ui.aboutSubtitle} alt>
      <div className="grid grid-3">
        {c.team.map((m, i) => (
          <div className="card team" key={i}>
            <div className="avatar">{m.name.split(" ").map((w) => w[0]).join("")}</div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            {m.linkedin && (
              <a
                className="linkedin"
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn - ${m.name}`}
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
