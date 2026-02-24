import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <HashRouter basename={import.meta.env.BASE_URL}>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>,
);
