import React, { lazy } from "react";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AddItems, RemoveItems } from "../redux/slices/favourite";
import { AddCartItems, RemoveCartItems } from "../redux/slices/cartItem";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
const CLD_BASE_URL = "https://res.cloudinary.com/ddkrcxdal/image/fetch/";
const OPTIMIZATIONS = "f_auto,q_auto,w_400,c_scale/"; 
// f_auto: best format (WebP), q_auto: compression, w_400: width resize
function Cart({ items, forfav }) {
  let dispatch = useDispatch();
  //  handle Addfavourites
  function handleFav(item) {
    dispatch(AddItems(item));
  }

  // handle remove favourites
  function removeFav(item) {
    dispatch(RemoveItems(item));
  }

  //  handle AddToCart
  function handleAddCart(item) {
    dispatch(AddCartItems(item));
    console.log("added!");
  }

  // handle removeFromCart
  function removeFromCart(item) {
    dispatch(RemoveCartItems(item));
    console.log("removed!");
  }
  let AllFavitems = useSelector((state) => state.favourites.items);
  let AllCartItems = useSelector((state) => state.cartItem.items);

  return (
   <>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    {items &&
      items.map((item) => {
        const isAlredyFav = AllFavitems?.some((obj) => obj.id == item.id);
        const isAlreadyInCart = AllCartItems?.some((obj) => obj.id == item.id);

        return (
          <div
            className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden"
            key={item.id}
          >
            {/* Image Container */}
            <div className="relative h-64 w-full bg-gray-50 p-4 overflow-hidden">
              <img
                className="h-full w-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500"
                src={`${CLD_BASE_URL}${OPTIMIZATIONS}${item.image}`}
                alt={item.title}
                loading="lazy"
              />
              
              {/* Floating Favorite Button */}
              <button 
                onClick={() => isAlredyFav ? removeFav(item) : handleFav(item)}
                className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-md text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
              >
                {isAlredyFav ? <MdDeleteOutline size={22} /> : <IoHeartCircleOutline size={22} />}
              </button>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-gray-800 font-medium text-lg line-clamp-2 min-h-[40px] mb-1">
                {item.title}
              </h2>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className=" text-gray-600  uppercase tracking-wider mr-2">Price</span>
                  <span className="text-lg font-bold text-gray-900">${item.price}</span>
                </div>
               ' {/* <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                  <span className="text-yellow-600 text-xs font-bold">★ {item.rating.rate}</span>
                </div>' */}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto space-y-3">
                <button
                  onClick={() => isAlreadyInCart ? removeFromCart(item) : handleAddCart(item)}
                  className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    isAlreadyInCart 
                    ? "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600" 
                    : "bg-teal-600 text-white hover:bg-teal-700 shadow-md shadow-teal-100"
                  }`}
                >
                  {isAlreadyInCart ? (
                    <>
                      <MdOutlineRemoveShoppingCart size={18} />
                      Remove from Cart
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </button>

                <div className="text-center">
                  <NavLink
                    className="text-xs font-medium text-teal-600 hover:text-teal-800 transition"
                    to={`/CartDetails/${item.id}`}
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        );
      })}
  </div>
</>
  );
}

export default Cart;
