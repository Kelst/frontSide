import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import  Login  from "../pages/login/Login";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index:true,
        element: <Home />,
      
      },
      {
        path: "/home",
        element: <Home />,
      },
     
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  
]);