import { useEffect } from "react";

const REVEAL_SELECTOR =
  ".section h2, .subtitle, .card, .steps li, .faq-item, .contact > *, .stat, .game-card";

// Anima los elementos al entrar en pantalla, escalonando los hermanos.
export function useReveal(view) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
      const i = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.setProperty("--d", `${Math.min(i, 5) * 80}ms`);
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [view]);
}
