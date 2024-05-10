import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import {FallingLines } from "react-loader-spinner";
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContex)
     const location = useLocation()
     console.log(location.pathname);
     console.log("ddddd", loading);
     if (loading) {
          return <div className="flex justify-center items-center h-screen">

               <FallingLines
                    color="#4fa94d"
                    width="100"
                    visible={true}
                    ariaLabel="falling-circles-loading"
               />
          </div>
     }
     if (user) {
          return children
     }
     return <Navigate state={location.pathname} to={"/login"}></Navigate>

};

PrivetRoute.propTypes = {
     children: PropTypes.object
   };

export default PrivetRoute;


