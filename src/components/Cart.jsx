import React, { lazy, useEffect, useState } from "react";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { IoHeartCircleOutline, IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AddItems, RemoveItems } from "../redux/slices/favourite";
import { AddCartItems, RemoveCartItems } from "../redux/slices/cartItem";
import { MdDeleteOutline, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";

const CLD_BASE_URL = "https://res.cloudinary.com/ddkrcxdal/image/fetch/";
const OPTIMIZATIONS = "f_auto,q_auto,w_400,c_scale/";

function Cart({ items, forfav }) {
  let dispatch = useDispatch();

  // handle Addfavourites
  function handleFav(item) {
    dispatch(AddItems(item));
  }

  // handle remove favourites
  function removeFav(item) {
    dispatch(RemoveItems(item));
  }

  // handle AddToCart
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
  let [allItems, setAllItems] = useState(items);

  // Synchronize state if incoming items prop changes externally
  useEffect(() => {
    setAllItems(items);
  }, [items]);

  function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    if (query) {
      const filteredResults = items.filter((filterredItem) =>
        filterredItem.title.toLowerCase().startsWith(query)
      );
      setAllItems(filteredResults);
    } else {
      setAllItems(items);
    }
  }

  return (
    <>
      {/* Clean White Header Bar with Teal Search Input */}
      <div className="bg-white px-6 py-5 border-b border-gray-100 shadow-sm mb-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-gray-800 tracking-wide">
              Discover Products
            </h1>
            <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">
              Type to filter instantly through your catalog
            </p>
          </div>

          <div className="relative w-full sm:w-80 md:w-96 group">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none z-10">
              <IoSearchOutline className="h-5 w-5 text-teal-100 group-focus-within:text-white transition-colors" />
            </span>
            <input
              type="text"
              placeholder="Search products by title..."
              onInput={handleSearch}
              className="w-full pl-11 pr-4 py-2.5 bg-teal-800 text-sm text-white placeholder-teal-200/60 rounded-xl border border-teal-900 shadow-sm focus:outline-none focus:bg-teal-900 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300 font-medium"
            />
          </div>
        </div>
      </div>

      {/* Main Grid View / State Layout Conditional */}
      {allItems.length <= 0 ? (
        <div className="max-w-md mx-auto my-12 px-4">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center transform transition-all duration-500 border border-gray-100">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-50 to-teal-50 rounded-2xl mx-auto shadow-inner">
                <FiShoppingBag className="w-10 h-10 text-teal-500" />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              No Items Found
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              We couldn't find any products matching your current search term. Try adjusting your wording!
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
          {allItems.map((item) => {
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
                    onClick={() => (isAlredyFav ? removeFav(item) : handleFav(item))}
                    className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-3xl shadow-md text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                  >
                    {isAlredyFav ? (
                      <MdDeleteOutline size={22} />
                    ) : (
                      <IoHeartCircleOutline size={22} />
                    )}
                  </button>
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-gray-800 font-medium text-lg line-clamp-2 min-h-[40px] mb-1">
                    {item.title}
                  </h2>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-gray-600 uppercase tracking-wider mr-2 text-xs">
                        Price
                      </span>
                      <span className="text-lg font-bold text-gray-900">
                        ${item.price}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto space-y-3">
                    <button
                      onClick={() =>
                        isAlreadyInCart ? removeFromCart(item) : handleAddCart(item)
                      }
                      className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
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
      )}
    </>
  );
}

export default Cart;