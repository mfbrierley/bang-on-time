import React from "react";
import ReactDOM from "react-dom/client";
import AppComponent from "./AppComponent";
import "./styles/variables.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);
