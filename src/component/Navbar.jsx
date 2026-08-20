import React,{useContext,useEffect,useRef,useState} from "react";
import logo from "../assets/web logo khan market.png";
import {Link} from "react-router-dom";
import {AuthContext} from "../Authentication/AuthProvider";

const Navbar=()=>{
  const {user,signout}=useContext(AuthContext);
  const [open,setOpen]=useState(false),ref=useRef();

  useEffect(()=>{
    const close=e=>!ref.current?.contains(e.target)&&setOpen(false);
    document.addEventListener("mousedown",close);
    return()=>document.removeEventListener("mousedown",close);
  },[]);

  return(
    <div className="w-full bg-base-200 rounded-md shadow-sm">
      <div className="navbar w-full px-2 sm:px-3 lg:px-6 gap-1 sm:gap-2">
        <div className="shrink-0">
          <Link to="/">
            <button className="btn btn-ghost px-0 sm:px-2">
              <img src={logo} alt="Khan Market" className="w-16 sm:w-20 lg:w-28 rounded-xl"/>
            </button>
          </Link>
        </div>
        <div className="flex-1 min-w-0">
          <div className="relative w-full">
            <input type="search" placeholder="Search products..." className="w-full h-9 sm:h-10 lg:h-12 rounded-lg border-2 border-amber-400 bg-white text-gray-900 placeholder-gray-500 text-center text-xs sm:text-sm lg:text-base font-medium pl-3 pr-10 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"/>
            <button type="button" title="Search" className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.197 5.197a7.5 7.5 0 0 0 10.606 10.606Z"/>
              </svg>
            </button>
          </div> 
        </div>
        <Link to="/cart" className="shrink-0">
          <button className="btn btn-ghost btn-sm p-1 sm:p-2" title="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25h9.75m-9.75 0a2.25 2.25 0 0 0-2.25 2.25v.75h14.25v-.75a2.25 2.25 0 0 0-2.25-2.25m-9.75 0L4.5 5.25h14.625a1.125 1.125 0 0 1 1.08 1.44l-1.5 5.25a1.125 1.125 0 0 1-1.08.81H7.5Z"/>
            </svg>
          </button>
        </Link>
        <div ref={ref} className="relative shrink-0">
          <button onClick={()=>setOpen(!open)} className="btn btn-ghost btn-sm p-1" title="Profile">
            <img src="https://i.pravatar.cc/100?img=12" alt="Profile" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"/>
          </button>
          {open&&(
            <div className="absolute right-0 top-11 w-36 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
              {user?<>
                <p className="px-3 py-2 text-sm font-semibold truncate border-b">{user.displayName||user.email}</p>
                <Link to="/orders" className="block px-3 py-2 text-sm hover:bg-amber-50">Orders</Link>
                <Link onClick={signout} className="block px-3 py-2 text-sm hover:bg-amber-50">LogOut</Link>
              </>:<>
                <Link to="/login" className="block px-3 py-2 text-sm hover:bg-amber-50">Login</Link>
                <Link to="/register" className="block px-3 py-2 text-sm hover:bg-amber-50">Register</Link>
              </>}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;