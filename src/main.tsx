import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/Root/Root.tsx";
import "./global.scss";
import { Login } from "./pages/Login/Login.tsx";
import { Profile } from "./pages/Profile/Profile";
import { NewCharacter } from "./pages/NewCharacter/NewCharacter.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { Sheet } from "./pages/Sheet/Sheet.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />, 
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/character/:idCharacter/create",
        element: <NewCharacter />,
      },
      {
        path: "/characterSheet",
        element: <Sheet />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
