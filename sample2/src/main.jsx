import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App5.jsx";

createRoot(document.getElementById("root")).render(
  <App />
  // <StrictMode>   //엄격모드 side effect 감지위해 console 두번 찍힘
  //   <App />
  // </StrictMode>
);
