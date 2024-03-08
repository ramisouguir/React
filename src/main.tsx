import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import World from "./pages/World.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "world",
    element: <World />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
