import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage, InvoicePage } from "../pages";
import { Layout } from "../layout";
import { PATHS } from "./Paths";

type Route = RouteObject & { title: string };
export const routes: Route[] = [
  {
    path: PATHS.INVOICE,
    title: "فاکتور",
    element: <InvoicePage />,
  },
];

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default AppRouter;
