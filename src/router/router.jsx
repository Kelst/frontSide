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
import Payment from "../pages/paid/Payment";
import Info from "../pages/info/Info";
import News from "../pages/news/News";

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
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/info",
        element: <Info/>,
      },
      {
        path: "/news",
        element:<News/>
        ,
      },
      {
        path: "/intelekt-shop",
        element:<>HAllo</>
        ,
      },
      
     
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  
]);