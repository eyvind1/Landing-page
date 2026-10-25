import { useEffect, useState } from "react";

const viewFromHash = () => (location.hash === "#experiencias-3d" ? "3d" : "home");

// Vista actual según el hash de la URL: "home" o "3d".
export function useView() {
  const [view, setView] = useState(viewFromHash);
  useEffect(() => {
    const onHash = () => setView(viewFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return view;
}
