import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router";
import MainLayout from "./components/layouts/MainLayout.jsx";
import AllRecipe from "./pages/AllRecipe.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import RecipeByTag from "./pages/RecipeByTag.jsx";
import RecipeByMealType from "./pages/RecipeByMealType.jsx";
import SearchRecipe from "./pages/SearchRecipe.jsx";
import Page404 from "./pages/Page404.jsx";

// router
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: "/recipe-list",
                children: [
                    {
                        index: true,
                        element: <AllRecipe />
                    },
                    {
                        path: ":recipeId",
                        element: <RecipeDetails />
                    },
                    {
                        path: "tag/:tagName",
                        element: <RecipeByTag />
                    },
                    {
                        path: "meal-type/:mealType",
                        element: <RecipeByMealType />
                    }
                ]
            },
            {
                path: "/search",
                element: <SearchRecipe />
            },
            {
                path: "*",
                element: <Page404 />
            }
        ]
    },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
