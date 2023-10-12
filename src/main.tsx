import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root/Root.tsx";
import { MyCharacters } from "./pages/MyCharacters/MyCharacters.tsx";
import "./index.scss";
import { Login } from "./pages/Login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "/myCharacters",
        element: <MyCharacters />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
