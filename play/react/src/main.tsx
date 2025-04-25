import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ArtoUI from "arto-ui";

new ArtoUI();

createRoot(document.getElementById("root")!).render(<App />);
