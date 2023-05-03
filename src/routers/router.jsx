import {
    createBrowserRouter,
  } from "react-router-dom";
  import HomePage from "../pages/HomePag";
import MainLayout from "../layaouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import PageNotFound404 from "../pages/PageNotFound404";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import AboutUsPage from "../pages/AboutUsPage";
import ProfilePage from "../pages/ProfilePage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path: "/",
            element: <HomePage/>,
            loader : ()=> fetch(`${import.meta.env.VITE_API_SERVER}/chefsProfile-all/6`)
        },
        {
            path: "/login",
            element: <LoginPage/>,
        },
        {
            path: "/register",
            element: <RegisterPage/>,
        },
        {
            path: "/profile",
            element: <ProfilePage/>,
        },
        {
            path: "/about",
            element: <AboutUsPage/>,
        },
        {
            path: "/contact",
            element: <ContactPage/>,
        },
        {
            path: "/all-chefs",
            element: <div>Hello chefs!</div>,
        },
        {
            path: "/chef/:id",
            element: <div>Hello chefs recipe!</div>,
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
        {
            path: "*",
            element: <PageNotFound404 />,
          },
        
      ]

    },
])

    
    export default router