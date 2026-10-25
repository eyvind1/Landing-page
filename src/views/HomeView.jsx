import { useState } from "react";
import { useLang } from "../context/langContext.js";
import ProjectModal from "../components/ProjectModal.jsx";
import Hero from "../sections/Hero.jsx";
import Stats from "../sections/Stats.jsx";
import Problems from "../sections/Problems.jsx";
import Services from "../sections/Services.jsx";
import Process from "../sections/Process.jsx";
import Projects from "../sections/Projects.jsx";
import Differentiators from "../sections/Differentiators.jsx";
import Team from "../sections/Team.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Plans from "../sections/Plans.jsx";
import Faq from "../sections/Faq.jsx";
import Contact from "../sections/Contact.jsx";

export default function HomeView() {
  const { c } = useLang();
  const [selected, setSelected] = useState(null);

  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Problems />
        <Services />
        <Process />
        <Projects onSelect={setSelected} />
        {/* Sección "tecnologías" desactivada: <Section id="tecnologias" title={c.ui.techTitle} alt> con c.techs */}
        <Differentiators />
        <Team />
        <Testimonials />
        <Plans />
        <Faq />
        <Contact />
      </main>
      {selected !== null && <ProjectModal project={c.projects[selected]} onClose={() => setSelected(null)} />}
    </>
  );
}
