import { useState } from "react";
import { useLang } from "../context/langContext.js";
import Section from "../components/Section.jsx";

function ContactForm() {
  const { c } = useLang();
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Demo: aquí se conectaría con un backend o servicio de correo.
    setSent(true);
  };

  if (sent) {
    return <p className="success">{c.ui.formSuccess}</p>;
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input name="name" placeholder={c.ui.formName} required />
      <input name="email" type="email" placeholder={c.ui.formEmail} required />
      <select name="type" defaultValue="" required>
        <option value="" disabled>{c.ui.formType}</option>
        {c.ui.formTypes.map((t, i) => <option key={i} value={i}>{t}</option>)}
      </select>
      <textarea name="message" rows="4" placeholder={c.ui.formMessage} required />
      <button className="btn btn-primary" type="submit">{c.ui.formSend}</button>
    </form>
  );
}

export default function Contact() {
  const { c } = useLang();
  return (
    <Section id="contacto" title={c.ui.contactTitle} subtitle={c.ui.contactSubtitle} alt>
      <div className="contact">
        <ContactForm />
        <div className="contact-info">
          <p>📧 hola@novacode.dev</p>
          <p>💬 WhatsApp: +00 000 000 0000</p>
          <p>📍 {c.ui.remote}</p>
        </div>
      </div>
    </Section>
  );
}
