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
import AllChefsPage from "../pages/AllChefsPage";
import ChefsProfilePage from "../pages/ChefsProfilePage";
import PrivetRoute from "./PrivetRoute";
import PublicRoute from "./PublicRoute";
import RecipePage from "../pages/RecipePage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path: "/",
            element: <HomePage/>,       //done
            loader : ()=> fetch(`${import.meta.env.VITE_API_SERVER}/chefsProfile-all/6`)
        },
        {
            path: "/login",
            element: <PublicRoute><LoginPage/></PublicRoute> ,  //done
        },
        {
            path: "/register",
            element:<PublicRoute><RegisterPage/></PublicRoute> ,       //done
        },
        {
            path: "/profile",
            element: <ProfilePage/>,
        },
        {
            path: "/about",
            element: <AboutUsPage/>,        //done
        },
        {
            path: "/contact",
            element: <ContactPage/>,        //done
        },
        {
            path: "/all-chefs",
            element: <AllChefsPage /> ,
            loader : ()=> fetch(`${import.meta.env.VITE_API_SERVER}/chefsProfile-all`)          //done
        },
        {
            path: "/chef/:id",
            element:<PrivetRoute><ChefsProfilePage /></PrivetRoute>  ,
            loader : ({params})=> fetch(`${import.meta.env.VITE_API_SERVER}/recipes/${params.id}`)          //done

        },
        {
            path: "/recipe/:chefid/:mealid",
            element:<PrivetRoute><RecipePage /></PrivetRoute>  ,
            loader : ({params})=> fetch(`${import.meta.env.VITE_API_SERVER}/recipe/${params.mealid}`)          //done

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