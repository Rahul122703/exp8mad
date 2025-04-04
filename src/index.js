import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js') 
    .then((reg) => {
      console.log("Service Worker registered", reg);
    })
    .catch((err) => {
      console.log("Service Worker not registered", err);
    });
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
