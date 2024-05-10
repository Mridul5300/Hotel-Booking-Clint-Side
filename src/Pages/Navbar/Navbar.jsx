import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import { FaArrowRight } from "react-icons/fa6";



const Navbar = () => {
  const{user,logout} = useContext(AuthContex)
  const NavItem = <>
      <li className=""><NavLink  to={'/'} className={({ isActive }) =>
         isActive ? "":"" }>Home</NavLink></li>
      <li><NavLink to={'/room'} className={({ isActive }) =>
         isActive ? " ":"" }>Room</NavLink></li>
      <li><NavLink to={'/mybooking'} className={({ isActive }) =>
         isActive ? " ":"" }>My Booking</NavLink></li>

    
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
          <Link to={'/'} className="btn btn-ghost text-xl">Hotel Genius</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavItem}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
                         {user ? (
                              <div className="dropdown dropdown-end flex justify-center items-center gap-2">
                                   <button onClick={logout} className="btn btn-ghost hover  text-black text-md md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#D2B48C] ">Sign Out</button>
                              </div>
                         )
                              : (
                                   <div className="flex space-x-5">
                                        <Link to='/register'>
                                             <button className="btn btn-ghost text-black text-lg md:text-xl  hover md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-[#D2B48C] bg-opacity-10">Sign Up <FaArrowRight className="text-2xl mt-0" /></button>
                                        </Link>
                                   </div>
                              )}
                    </div>
      </div>
    
    </div>
  );
};

export default Navbar;