import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App.js";
import "./index.css";
import "modern-normalize";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
