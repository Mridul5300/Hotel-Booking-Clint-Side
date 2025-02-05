import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";



const LogIn = () => {
const { googleLogin } = useContext(AuthContex)
const { signInUser } = useContext(AuthContex)
const location = useLocation();
const navigate = useNavigate();
// console.log("your location", location);
const [showpassword, setShowpassword] =useState(false);
const [error, setError] = useState(null);
const {
  register,
  handleSubmit,

  formState: { errors },
} = useForm()
const onSubmit = data => {

  
  const { email, password } = data;
  if (password.length < 6) {
      setError("password should be 6 character ")
      return
  }
  if (!/[a-z]/.test(password)) {
      return setError('Your password must contain at least one small letter')
  }
  if (!/[A-Z]/.test(password)) {
      return setError('Your password must contain at least one Capital letter.')
  }
  signInUser(email, password)
    .then(result => {
      console.log(result.user);
      
      // navigate after login 
      navigate(location?.state ? location.state : "/");
      
    })
    .catch(error => {
      console.error( error);
      
    })
};

const handleSociallogin = socialProvider => {
  socialProvider()
  .then(result => {
    if(result.user){
    navigate(location ?.state || "/")
    }
  });

};
     return (
          <div>
              <Helmet>
               <title>Login</title>
                </Helmet>
               <div>
            <div className="flex items-center bg-[#D2B48C] bg-opacity-15 justify-center p-6 mb-5">
      <div className="w-full  max-w-md p-4 rounded-md  border sm:p-8 dark:bg-gray-50 dark:text-gray-800">
        <h2 className="mb-3  text-3xl font-semibold text-center">Login to your account</h2>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-red-400'>This field is required</span>}
        
            </div>
            <div className="space-y-2 relative">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">Password</label>
                <span onClick={ () => setShowpassword (!showpassword)}  className="absolute right-3 top-1/2 my-4 transform -translate-y-1/2 cursor-pointer">
                
                {
                  showpassword ? <IoMdEyeOff className="text-2xl"></IoMdEyeOff> : <IoMdEye className="text-2xl"></IoMdEye>
                }
                </span>
              </div>
              <input 
              type={showpassword ? "text" : "password" }
              name="password" 
              id="password" 
              placeholder="password" 
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-red-400'>This field is required</span>}
            </div>
            <p className='text-red-500'>{error}</p>

            <button className="btn w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Log in</button>
          </div>

        </form>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <div className="my-6 space-y-4">
          <button
            onClick={() => handleSociallogin (googleLogin)}
            aria-label="Login with Google" type="button" className="btn flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          <p className="text-sm text-center dark:text-gray-600">Dont have account?
            <Link to={"/register"}>
              <button className="btn btn-link">create an account</button>
            </Link>
          </p>
        </div>
      
      </div>
      </div>
          </div>
          </div>
     );
};

export default LogIn;