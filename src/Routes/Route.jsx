import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/home/Home";
import Queries from "../Pages/queries/Queries";
import RecommendationsForMe from "../Pages/recommendationsForMe/RecommendationsForMe";
import MyQueries from "../Pages/myQueries/MyQueries";
import MyRecommendations from "../Pages/myRecommendations/MyRecommendations";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/queries',
            element: <Queries></Queries>
        },
        {
            path:'/recommendationsForme',
            element: <RecommendationsForMe></RecommendationsForMe>
        },
        {
            path:'/myqueries',
            element: <MyQueries></MyQueries>
        },
        {
            path:'/myrecommendations',
            element: <MyRecommendations></MyRecommendations>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        }
      ]
    },

  ]);

export default router;