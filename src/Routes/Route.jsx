import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/home/Home";
import Queries from "../Pages/queries/Queries";
import RecommendationsForMe from "../Pages/recommendationsForMe/RecommendationsForMe";
import MyQueries from "../Pages/myQueries/MyQueries";
import MyRecommendations from "../Pages/myRecommendations/MyRecommendations";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import AddQueries from "../Pages/AddQueries/AddQueries";

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
            element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>
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
        },
        {
            path: '/addQueries',
            element: <AddQueries></AddQueries>
        }
      ]
    },

  ]);

export default router;