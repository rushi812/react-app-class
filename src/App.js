import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import User from "./components/User";
// import About from "./components/About";
// import Recepies from "./components/Recepies";

import "../App.css";

const AppLayout = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Code Splitting
// Dynamic Bundling
// Lazy Loading

const Recepies = lazy(() => import("./components/Recepies"));
const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/user/:uId",
        element: <User />,
      },
      {
        path: "/recepies",
        element: (
          <Suspense fallback={<h1>Recepies Loading...</h1>}>
            <Recepies />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
