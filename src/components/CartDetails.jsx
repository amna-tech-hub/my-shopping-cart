import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts } from "../redux/slices/fetchProduct";
import Spinner from "./Spinner";
import Categories from "./Categories";
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
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        {/* Main Detail Card */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 border border-gray-200 rounded-2xl p-6 md:p-10 bg-white shadow-sm hover:shadow-md transition-shadow m-3">
          {/* Left Content Section (Detail Section) */}
          <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-4">
                {item.description}
              </p>
            </div>

            <div className="space-y-4">
              {/* Price & Rating Row */}
              <div className="flex items-center gap-6">
                <div className="bg-teal-50 px-4 py-2 rounded-lg">
                  <span className="text-teal2 text-xs uppercase font-bold block">
                    Price
                  </span>
                  <span className="text-2xl font-black text-black">
                    ${item.price}
                  </span>
                </div>
                <div className="bg-orange-50 px-4 py-2 rounded-lg">
                  <span className="text-orange-500 text-xs uppercase font-bold block">
                    Rating
                  </span>
                  <span className="text-xl font-bold text-orange-600">
                    ★ {item.rating.rate}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <Button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition" />
                  <span className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-200">
                    ❤️
                  </span>
                </div>
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
        <div className="mt-12 px-3">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Explore More Products
          </h3>
          <div>
         <Categories/>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartDetails;
