import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";


const PrivetRoute = ({children}) => {
     const {user, loading} = useContext(AuthContex)
     const location=useLocation()
     console.log(location.pathname);
     console.log("ddddd",loading);
     if(loading){
          return <div className="text-center"><span className="loading loading-bars loading-lg text-center mx-96 mb-3 mt-4 min-h-screen"></span></div>
     }
     if(user){
          return children
     }
     return <Navigate state={location.pathname} to={"/login"}></Navigate>

};

export default PrivetRoute;