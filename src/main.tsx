import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/Home.tsx";
import { Header } from "./components/Header/Header.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
;