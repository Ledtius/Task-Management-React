import { createRoot } from "react-dom/client";

import "./styles/general.css";
import "./styles/variables.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
