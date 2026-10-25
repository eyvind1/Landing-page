import { useEffect, useRef, useState } from "react";

export default function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 1500;
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(ref.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return <span ref={ref}>{n}{suffix}</span>;
}
