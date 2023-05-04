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
import TermsPage from "../pages/TermsPage";
import AllRecipesPage from "../pages/AllRecipesPage";
import PrimaryFetchedRecipes from "../components/PrimaryFetchedRecipes";
import AlphaFetchedRecipes from "../components/AlphaFetchedRecipes";
import CategoryFetchedRecipes from "../components/CategoryFetchedRecipes";
import BlogPage from "../pages/BlogPage";
import BlogDetailPage from "../pages/BlogDetailPage";




  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
            path: "/",
            element: <HomePage/>,       //done
            // loader : ()=> fetch(`${import.meta.env.VITE_API_SERVER}/chefsProfile-all/6`)
            
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
            element: <PrivetRoute><ProfilePage/></PrivetRoute>  ,
        },
        {
            path: "/terms",
            element: <TermsPage/>,           //done
        },
        {
            path: "/about",
            element: <AboutUsPage/>,        //done
            loader : ()=> fetch(`${import.meta.env.VITE_API_SERVER}/chefsProfile-all/6`)

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
            path: "/recipe/:mealid",
            element: <PrivetRoute><RecipePage /></PrivetRoute>,
            loader : ({params})=> fetch(`${import.meta.env.VITE_API_SERVER}/recipe/${params.mealid}`)          //done

        },
        {
            path: "/recipes",
            element: <PrivetRoute><AllRecipesPage/> </PrivetRoute>,            
            children:[
                 {
                    path: "",
                    element: <PrimaryFetchedRecipes/>,
                    loader : ()=> fetch(`${import.meta.env.VITE_API_SERVER}/recipes-all/6`) ,
                    
                },
                 {
                    path: "alphabetical/:alphabet",
                    element:<AlphaFetchedRecipes />,
                    loader : ({params})=> fetch(`${import.meta.env.VITE_API_SERVER}/recipe/alpha/${params.alphabet}`) ,                    
                },
                {
                    path: "category/:cate",
                    element: < CategoryFetchedRecipes />,
                    loader : ({params})=> fetch(`${import.meta.env.VITE_API_SERVER}/recipe/strCategory/${params.cate}`) ,
                },
            ]
        },        
        {
            path: "/blogs",
            element: <BlogPage/>,
            loader : ()=> fetch(`${import.meta.env.VITE_API_SERVER}/blogs`)
        },
        {
            path: "/blogs/:id",
            element: <BlogDetailPage/>,
             loader : ({params})=> fetch(`${import.meta.env.VITE_API_SERVER}/blogs/${params.id}`) 
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