import React, { useState } from "react"; // 1. useState import karein
import hamburger from "../assets/images/hamburger.svg";
import navLink from '../constants/navLinks.js'
import { NavLink } from 'react-router-dom';
function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* big screen */}
    <div className="hidden md:flex bg- backdrop-blur-md border-b border-gray-200 justify-evenly items-center py-3 sticky top-0 z-50 font-grotesk font-semibold capitalize text-gray-800">
  
  <img 
    src="https://res.cloudinary.com/ddkrcxdal/image/upload/q_auto/f_auto/v1775940302/logo_nxr2qj.webp" 
    className="h-14 w-14 rounded-full shadow-sm"
  />

  {navLink.map((link) => (
    <NavLink
      key={link.Title}
      to={link.path}
      className={({ isActive }) =>
        `px-3 py-1.5 rounded-full transition-all duration-300 ${
          isActive
            ? "bg-teal-600 text-white shadow-md"
            : "hover:bg-teal-50 hover:text-teal-700"
        }`
      }
    >
      {link.Title}
    </NavLink>
  ))}
</div>

      {/* small screen */}
    <div className="md:hidden bg-white/90 backdrop-blur-md border-b border-gray-200 p-5 sticky top-0 z-50">
  
  <div className="flex justify-between items-center">
    <img  src="https://res.cloudinary.com/ddkrcxdal/image/upload/q_auto/f_auto/v1775940302/logo_nxr2qj.webp"  className="h-14 w-14 rounded-full" />

    <img
      src={hamburger}
      className="w-7 h-7 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    />
  </div>

  <div className={`${isOpen ? "flex" : "hidden"} flex-col mt-4 space-y-3`}>
    {navLink.map((link) => (
      <NavLink
        key={link.Title}
        to={link.path}
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg transition ${
            isActive
              ? "bg-teal-600 text-white"
              : "text-gray-700 hover:bg-teal-50"
          }`
        }
      >
        {link.Title}
      </NavLink>
    ))}
  </div>
</div>
   
        
        

    </>
  );
}

export default Navbar;
