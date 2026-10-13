import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource-variable/geist/wght.css";
import "@fontsource/geist-mono/latin-400.css";
import "@fontsource/geist-mono/latin-500.css";
import "@fontsource/instrument-serif/latin-400-italic.css";

import App from "./App";
import { ANALYTICS } from "./constants/config";
import "./index.css";

if (ANALYTICS.gaMeasurementId) {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.gaMeasurementId}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", ANALYTICS.gaMeasurementId);
}

const root = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Production HTML is prerendered (see scripts/prerender.js), so hydrate it;
// the dev server serves an empty root and renders from scratch.
if (root.firstElementChild) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
