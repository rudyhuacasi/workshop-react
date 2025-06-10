import React from "react"
import ReactDOM from "react-dom/client"
import App from "@/App"
import { Provider } from "@/components/ui/provider"
import { BrowserRouter, Routes, Route } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />      
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
