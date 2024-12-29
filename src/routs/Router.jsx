import React from "react";
import {
  // Navigate,
  // RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import { useSelector } from "react-redux";
// import Header from "../components/Header";
import Experience from "../components/Experience";
import Project from "../components/Project";
import LayOut from "../LayOut/Layout";
import About from "../components/About";
import Contact from "../components/Contact";

// import PageAbout from "../Screans/PageAbout";
import PageHome from "../Screans/Pagehome";
// import { useSelector } from "react-redux";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/Home",
        element: <PageHome />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Experience",
        element: <Experience />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
