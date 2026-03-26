import React, { useState } from "react"; // 1. useState import karein
import hamburger from "../assets/images/hamburger.svg";
import navLink from '../constants/navLinks.js'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpeg'
function Navbar() {
  // 2. State define karein (shuru mein menu close hoga)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* big screen */}
      <div className="hidden md:flex bg-teal justify-evenly items-center py-3 sticky top-0 z-50 font-grotesk font-semibold capitalize text-amber-50" >
        <div><img src={logo} alt="" className="h-16 w-16 rounded-full "/></div>
        {navLink.map((link)=>(
           <NavLink key={link.Title} to={link.path} className={({isActive})=>(
              isActive?"bg-teal2 h-full p-1 border-b-2 border-amber-50 rounded":""
        )} >{link.Title}</NavLink>
        ))}
       
      </div>

      {/* small screen */}
      <div className="md:hidden bg-teal p-3 sticky top-3 z-50 ">
        <div className="flex justify-between items-center">
                 <div><img src={logo} alt="" className="h-16 w-16 rounded-full "/></div>

          <img
            src={hamburger}
            alt="menu"
            className="w-8 h-8 cursor-pointer mx-3"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div
          className={`${isOpen ? "flex flex-col" : "hidden"} mt-4 space-y-2 bg-teal p-4`}
        >
           {navLink.map((link)=>(
          <NavLink key={link.Title} to={link.path} className={({isActive})=>(
              isActive?"bg-teal2 h-full p-1 border-b-2 rounded capitalize":"font-semibold capitalize text-amber-50"
        )}>{link.Title}</NavLink>
        ))}
        
        
        </div>
      </div>
    </>
  );
}

export default Navbar;
