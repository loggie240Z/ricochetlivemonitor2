import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

// Only create root once, Vite's HMR will handle hot reloads
createRoot(rootElement).render(<App />);
