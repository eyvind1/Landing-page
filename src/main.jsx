import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LangProvider } from "./context/LangProvider.jsx";
import { SoundProvider } from "./context/SoundProvider.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <SoundProvider>
        <App />
      </SoundProvider>
    </LangProvider>
  </React.StrictMode>
);
