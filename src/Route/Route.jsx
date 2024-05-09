import {createBrowserRouter}from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Pages/Home/Home";
import Room from "../Pages/Room/Room";
import MyBooking from "../Pages/My Booking/MyBooking";
import ErrorPage from "../Pages/Error/ErrorPage";

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
               element:<MyBooking></MyBooking>
          }
     
       ]
     },
   ]);
export default router;   