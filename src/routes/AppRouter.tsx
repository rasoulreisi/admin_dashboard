import React from 'react';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {ErrorPage} from "../pages";
import Contact from "./Contact";




function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>hello <Outlet/></p>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact/>,
        },
      ],
    },
  ])
  return (
      <RouterProvider router={router}/>
  );
}

export default AppRouter;