import {
    createBrowserRouter,
  } from "react-router-dom";
  import HomePage from "../pages/HomePag";
import MainLayout from "../layaouts/MainLayout";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/about",
            element: <div>Hello about!</div>,
        },
        {
            path: "/recipes",
            element: <div>Hello recipes!</div>,
            children:[
                 {
                    path: "alphabetical/:alphabet",
                    element: <div>Hello alphabet!</div>,
                },
                {
                    path: "origin/:origin",
                    element: <div>Hello origin!</div>,
                },
                {
                    path: "category/:cate",
                    element: <div>Hello origin!</div>,
                },
            ]
        },
        
        {
            path: "/blogs",
            element: <div>Hello blogs!</div>,
        },
        {
            path: "/chefs",
            element: <div>Hello chefs!</div>,
            children:[{
                path: ":chefsId",
            element: <div>Hello chefsId!</div>,
            }]
        },
        
      ]

    },
])

    
    export default router