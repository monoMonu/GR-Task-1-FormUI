import React, { StrictMode } from "react";
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import { createRoot } from "react-dom/client";
import Login from "./components/Login";
import App from "./App";
import Register from "./components/Register";
import Home from "./components/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <>
               <h1 className="text-4xl text-center font-bold m-5">Welcome to the home page</h1>
               <div className="flex flex-col items-center">
                  <Link
                     to="/register"
                     className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition duration-200 m-3 text-center"
                  >
                     Sign Up
                  </Link>
                  <Link
                     to="/login"
                     className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition duration-200 m-3 text-center"
                  >
                     Log In
                  </Link>
               </div>
            </>,
         },
         {
            path: "login",
            element: <Login />,
         },
         {
            path: "register",
            element: <Register />,
         },
         {
            path: "home",
            element: <Home />,
         },
      ],
   },
]);

const root = createRoot(document.getElementById("root"));
root.render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);