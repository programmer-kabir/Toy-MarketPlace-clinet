import { createBrowserRouter } from "react-router-dom";

import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Main from "../Layout/Main";
import Home from "../Layout/Home";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from '../Pages/MyToys/MyToys'
import UpdateToys from "../Pages/MyToys/UpdateToys";
import PrivetRoute from "./PrivetRoute";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/toyDetails";
import Sob from "./Sob";
import AllDetails from "../Pages/AllToys/AllDetails";
import Blog from "../Pages/Home/Blog/Blog";
import Error from "../Error/Error";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/all_toys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys')
      },
      {
        path: "/toyDetails/:id",
        element: <PrivetRoute><ToyDetails></ToyDetails></PrivetRoute>,
        loader:({params}) => fetch(`https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys/${params.id}`)
      },
      {
        path: "/allDetails/:id",
        element: <PrivetRoute><AllDetails></AllDetails></PrivetRoute>,
        loader:({params}) => fetch(`https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/toys/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add_toys",
        element: <AddToys></AddToys>
      },
      {
        path:'/sobtoys',
        element:<Sob></Sob>,
      },
      {
        path: "/my_toys",
        element: <PrivetRoute><MyToys></MyToys></PrivetRoute>,
        loader: () => fetch('https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys')
      },
      {
        path: "/update/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({params}) => fetch(`https://b7a11-toy-marketplace-server-side-kabi-r.vercel.app/my_toys/${params.id}`)
      },
    ], 
  },
]);
