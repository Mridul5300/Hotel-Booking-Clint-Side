import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";
import { FaArrowRight } from "react-icons/fa6";



const Navbar = () => {
  const{user,logout} = useContext(AuthContex)
  const NavItem = <>
      <li><NavLink  to={'/'} className={({ isActive }) =>
         isActive ? "btn space-x-2 text-lime-300 bg-slate-800  border-b-2 border-b-lime-200 hover:text-lime-300 hover:bg-slate-800 hover":"text-amber-200 space-x-2  font-semibold btn border-b-2 border-b-yellow-200 bg-stone-600 hover hover:bg-stone-600 hover:text-amber-200 " }>Home</NavLink></li>
      <li><NavLink to={'/room'} className={({ isActive }) =>
         isActive ? "btn space-x-2 text-lime-300 bg-slate-800 border-b-2  border-b-lime-200 hover:text-lime-300 hover:bg-slate-800 hover ":"text-amber-200 space-x-2 font-semibold btn  border-b-2 border-b-yellow-200 bg-stone-600 hover hover:bg-stone-600 hover:text-amber-200" }>Room</NavLink></li>
      <li><NavLink to={'/mybooking'} className={({ isActive }) =>
         isActive ? " btn space-x-2 text-lime-300 bg-slate-800 border-b-2  border-b-lime-200 hover:text-lime-300 hover:bg-slate-800 hover":" text-amber-200  space-x-2 font-semibold btn border-b-2 border-b-yellow-200 bg-stone-600 hover hover:bg-stone-600 hover:text-amber-200" }>My Booking</NavLink></li>

    
  </>
  return (
    <div>
      <div className="navbar w-[1200px] ml-4 bg-gradient-to-r from-black to-indigo-400 mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {NavItem}
            </ul>
          </div>
          <Link to={'/'} className="btn ml-5 btn-ghost text-red-200 text-xl">Hotel Genius</Link>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal flex gap-4 px-1">
            {NavItem}
          </ul>
        </div>
        <div className="navbar-end space-x-3">
                         {user ? (
                              <div className="dropdown dropdown-end flex justify-center ml-3 items-center gap-2">
                                   <button onClick={logout} className="btn btn-ghost hover  text-black text-md md:text-xl md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-yellow-400 ">Sign Out</button>
                              </div>
                         )
                              : (
                                   <div className="flex space-x-5">
                                        <Link to='/register'>
                                             <button className="btn btn-ghost ml-4 text-black text-lg md:text-xl  hover md:pb-2 md:px-4 py-1 px-2 rounded-lg bg-yellow-400 bg-opacity-10">Sign Up <FaArrowRight className="text-2xl mt-0" /></button>
                                        </Link>
                                   </div>
                              )}
                    </div>
      </div>
    
    </div>
  );
};

export default Navbar;