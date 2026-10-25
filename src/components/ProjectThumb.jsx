export default function ProjectThumb({ project }) {
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
