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
import QueryDetails from "../Pages/QueryDetails/QueryDetails";
import UpdateQueries from "../Pages/UpdateQueries/UpdateQueries";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader : ()=>fetch('http://localhost:5000/limitedQueries')
        },
        {
            path:'/queries',
            element: <Queries></Queries>,
            loader : ()=>fetch('http://localhost:5000/queries')
        },
        {
            path:'/recommendationsForme',
            element: <PrivateRoute><RecommendationsForMe></RecommendationsForMe></PrivateRoute>,
        },
        {
            path:'/myqueries',
            element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
        },
        {
            path:'/myrecommendations',
            element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
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
            element:<PrivateRoute><AddQueries></AddQueries></PrivateRoute>
        },
        {
            path: '/queryDetails/:productId',
            element : <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/queries/${params.productId}`)
        },
        {
            path: '/queryUpdate/:productId',
            element : <PrivateRoute><UpdateQueries></UpdateQueries></PrivateRoute>,
            loader: ({params})=>fetch(`http://localhost:5000/queries/${params.productId}`)
        },
      ]
    },

  ]);

export default router;