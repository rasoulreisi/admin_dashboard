import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "../pages";
import Contact from "./Contact";
import { Layout } from "../layout";
import { ROUTS } from "./Paths";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: ROUTS.map((route) => ({
        path: route.path,
        element: route.component,
      })),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRouter;
