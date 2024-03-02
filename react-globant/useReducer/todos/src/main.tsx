import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TodoCtxProvider } from "./context/todoContext";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <StrictMode>
  <TodoCtxProvider>
    <App />
  </TodoCtxProvider>
  // </StrictMode>
);
