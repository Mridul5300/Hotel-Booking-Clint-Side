

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";




const Navbar = () => {
  const{user} = useContext(AuthContex)
  console.log(user);
  const {logout } = useContext(AuthContex)
  const NavItem = <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/room'}>Room</NavLink></li>
      <li><NavLink to={'/mybooking'}>My Booking</NavLink></li>
      <li><NavLink to={'/register'}>regi</NavLink></li>
    
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {NavItem}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavItem}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
                         {user ? (
                              <div className="dropdown dropdown-end flex justify-center items-center gap-2">
                                   <label tabIndex={0} className="btn btn-circle   avatar hover:ring-2 hover:ring-red-500">
                                        <div className="w-10 h-10 mt-1  mb-2 rounded-3xl ">
                                             <img src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} title={(user?.displayName || user.email)} alt="User avater" />
                                        </div>
                                        {/* <p className="text-black z-20 -mt-4">{user?.email || user.email || ""}</p> */}
                                   </label>
                                   <button onClick={logout} className="btn btn-ghost hover  text-black text-md md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#D2B48C] ">Logout</button>
                              </div>
                         )
                              : (
                                   <div className="flex space-x-5">
                                        <Link to='/register'>
                                             <button className="btn btn-ghost text-black text-lg md:text-xl  hover md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#D2B48C] bg-opacity-10">Register</button>
                                        </Link>
                                        <Link to='/login'>
                                             <button className="btn btn-ghost text-black text-lg md:text-xl  hover md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#D2B48C] bg-opacity-10">Login</button>
                                        </Link>

                                   </div>
                              )}
                    </div>
      </div>
    
    </div>
  );
};

export default Navbar;