import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import User from "./src/components/User";
// import About from "./components/About";
// import Recepies from "./components/Recepies";

import "./App.css";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div id="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

// Code Splitting
// Dynamic Bundling
// Lazy Loading

const Recepies = lazy(() => import("./src/components/Recepies"));
const About = lazy(() => import("./src/components/About"));

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
