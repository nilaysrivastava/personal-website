import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const captures = document.querySelectorAll(".glow-capture");

  captures.forEach((capture) => {
    const clonedChild = capture.children[0].cloneNode(true);
    const overlay = capture.querySelector(".glow-overlay");

    overlay.appendChild(clonedChild);

    capture.addEventListener("mousemove", (event) => {
      const rect = capture.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      overlay.style.setProperty("--glow-x", `${x}px`);
      overlay.style.setProperty("--glow-y", `${y}px`);
      overlay.style.setProperty("--glow-opacity", "1");
    });

    capture.addEventListener("mouseleave", () => {
      overlay.style.setProperty("--glow-opacity", "0");
    });
  });
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
