import { useState } from "react";
import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

export default function Faq() {
  const { c } = useLang();
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <Section id="faq" title={c.ui.faqTitle}>
      <div className="faq">
        {c.faqs.map((f, i) => (
          <div className="faq-item" key={i}>
            <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}>
              {f.q}
              <span>{openFaq === i ? "−" : "+"}</span>
            </button>
            {openFaq === i && <p>{f.a}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
