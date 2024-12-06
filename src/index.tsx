import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import reportWebVitals from './reportWebVitals';
const queryclient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryclient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>
);