import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import QuestionContextProvider from "./context/QuestionContextProvider";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <QuestionContextProvider>
      
        <App />
        </QuestionContextProvider>
    </BrowserRouter>
  </StrictMode>
);