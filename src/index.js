import React from "react";
import * as ReactDOM from "react-dom/client";

import { App } from "./App.js";

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
