import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { RiPokerHeartsLine } from "react-icons/ri";
import { footerLink } from "../constants/footerLink";
import { Link } from "react-router-dom";

function MobileFooter() {
  return (
    <>
   
      <div className="md:hidden sm:flex bg-teal justify-evenly items-center py-3 sticky bottom-0 z-50 font-grotesk font-semibold capitalize text-amber-50 opacity-90">
        <div className="flex justify-around">
          <Link to={footerLink.HomeLink}>
            <IoHomeOutline className="w-20 h-7" />
          </Link>
          <Link to={footerLink.CartLink}>
            {" "}
            <BsCart className="w-20 h-7" />
          </Link>
          <Link to={footerLink.FavLink}>
            <RiPokerHeartsLine className="w-20 h-7" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default MobileFooter;
