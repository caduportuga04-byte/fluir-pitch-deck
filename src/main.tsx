import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Deck } from "./components/Deck";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Deck />
  </StrictMode>
);