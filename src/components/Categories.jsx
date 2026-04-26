import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productCategory } from '../redux/slices/productCategory';
import { NavLink } from 'react-router-dom';

function Categories() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.productCategory);

  useEffect(() => {
    dispatch(productCategory());
  }, [dispatch]);

  return (
    <section className="min-h-[50%] bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-teal-50 to-transparent -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-teal-600 uppercase bg-teal-100 rounded-full">
            Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Explore more <span className="text-teal-600">Categories</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Discover our curated selection of premium products across various departments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {items?.map((item) => (
            <NavLink
              to={`/ProductOfCategories/${item}`}
              key={item}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-40 flex flex-col items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:shadow-teal-100 group-hover:-translate-y-2 group-hover:border-teal-200">
                
                {/* Floating Icon/Circle Background */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Text styling */}
                <h3 className="text-lg font-bold text-gray-800 capitalize group-hover:text-teal-600 transition-colors duration-300 text-center">
                  {item.replace("-", " ")}
                </h3>
                
                <div className="mt-2 h-1 w-8 bg-gray-100 group-hover:w-16 group-hover:bg-teal-500 transition-all duration-500 rounded-full" />
              </div>
            </NavLink>
          ))}
        </div>

        {/* Empty State / Loading */}
        {items?.length === 0 && (
          <div className="text-center py-20">
            <div className="animate-pulse text-gray-400">Loading amazing categories...</div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Categories;