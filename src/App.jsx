import { useEffect, useRef } from "react";
import { useReveal } from "./hooks/useReveal.js";
import { useView } from "./hooks/useView.js";
import PromoBar from "./components/PromoBar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import HomeView from "./views/HomeView.jsx";
import Experiences3DView from "./views/Experiences3DView.jsx";

export default function App() {
  const view = useView();
  useReveal(view);

  // Al cambiar de vista, vuelve al ancla pedida (la landing se vuelve a montar).
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const target = view === "home" && location.hash ? document.querySelector(location.hash) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [view]);

  return (
    <>
      <PromoBar />
      <Header />
      {view === "3d" ? <Experiences3DView /> : <HomeView />}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
