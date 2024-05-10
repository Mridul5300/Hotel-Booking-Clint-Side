import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FIreBase/firebase config";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContex = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
     const [reload, setReload]=useState(false)
    const [user, setUser]= useState(null)
    const [loading,setLoading]=useState(true)
    console.log("aaa",loading);
//     console.log(user);
     // creatuser
     const creatUser = (email, password) => {
          setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password)
     }


     const signInUser = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
     };

   const  googleLogin = () => {
     setLoading(true)
     return signInWithPopup(auth,googleProvider)
   };
const logout = () => {
     setLoading(true)
     setUser(null)
     signOut(auth)
}

     // observer
     useEffect(() => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
               setUser(user)
               
               }
               setLoading(false)
             });
          
     },[reload]);


     const allValues ={
          user,
          loading,
          creatUser,
          signInUser,
          googleLogin,
     
          logout,
          setReload
          
     };
     return (
          <AuthContex.Provider  value={allValues}>
               {children}
          </AuthContex.Provider>
     );
};

AuthProvider.propTypes = {
     children: PropTypes.object
   };

export default AuthProvider;