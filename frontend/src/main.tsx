import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
