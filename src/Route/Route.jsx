import {createBrowserRouter}from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Pages/Home/Home";
import Room from "../Pages/Room/Room";
import MyBooking from "../Pages/My Booking/MyBooking";
import ErrorPage from "../Pages/Error/ErrorPage";
import LogIn from "../Pages/Log In/LogIn";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

   const router = createBrowserRouter([
     {
       path: "/",
       element: <Main></Main>,
       errorElement:<ErrorPage></ErrorPage>,
       children:[
          {
               path:'/',
               element:<Home></Home>
          },
          {
               path:'room',
               element:<Room></Room>
          },
          {
               path:'mybooking',
               element:<PrivetRoute><MyBooking></MyBooking></PrivetRoute>
          },
          {
               path:'login',
               element:<LogIn></LogIn>
          },
          {
               path:"register",
               element:<Register></Register>
          }
     
       ]
     },
   ]);
export default router;   