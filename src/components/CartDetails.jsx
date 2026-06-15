import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/slices/fetchProduct";
import Spinner from "./Spinner";
import Categories from "./Categories";
import { FaStar, FaStarHalf } from "react-icons/fa";

function CartDetails() {
  let paramsID = useParams();
  let dispatch = useDispatch();
  let { items } = useSelector((state) => state.fetchProducts);
  let item = items.find((p) => p.id == paramsID.id);
  
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  if (!item) {
    return <Spinner />;
  }
  
  let stars = item.rating.rate;
  let fullstar = Math.floor(stars);
  let fullStarArray = Array.from({ length: fullstar });
  let avgHalfStar = stars % 5;
  let half = avgHalfStar >= 0.5 ? 1 : 0;
  let remainingStar = 5 - fullstar - half;
  let remainingStarArray = Array.from({ length: remainingStar });

  return (
    <>
      <div>
        {/* Main Detail Card */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 rounded-2xl p-6 m-3">
          {/* Left Content Section (Detail Section) */}
          <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                {item.title}
              </h2>
              
              {/* Rating Section - Below Title */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {fullStarArray.map((_, index) => (
                    <FaStar key={index} className="text-yellow-400 w-5 h-5" />
                  ))}
                  {half === 1 && <FaStarHalf className="text-yellow-400 w-5 h-5" />}
                  {remainingStarArray.map((_, index) => (
                    <FaStar key={index} className="text-white w-5 h-5" />
                  ))}
                </div>
                <span className="text-gray-600 text-sm font-medium">
                  ({stars} out of 5)
                </span>
              </div>
              
              <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-4">
                {item.description}
              </p>
            </div>

            <div className="space-y-4">
              {/* Price Section */}
              <div className="flex items-center gap-4">
                <div className="bg-teal-50 px-4 py-2 rounded-lg">
                  <span className="text-teal2 text-xs uppercase font-bold block">
                    Price
                  </span>
                  <span className="text-2xl font-black text-black">
                    ${item.price}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4"></div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center bg-gray-50 rounded-xl p-4 md:p-8">
            <img
              className="h-64 w-full md:h-96 object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
              src={item.image}
              alt={item.title}
            />
          </div>
        </div>

        {/* Explore More Section */}
        <div className="mt-12">
          <div>
            <Categories />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetails;