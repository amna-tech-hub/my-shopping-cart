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
    <section className="bg-teal-950 py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements - Matching BestSeller */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section - Matching BestSeller Style */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-50 mb-3 uppercase tracking-tighter">
            Explore More <span className="text-teal-400">Categories</span>
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-teal-300/80 text-lg italic">
            Discover our curated selection of premium products
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
              {/* Card Container - Matching BestSeller card style */}
              <div className="relative h-48 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-teal-800 shadow-2xl transition-all duration-500 ease-out group-hover:shadow-3xl group-hover:-translate-y-2 overflow-hidden">
                
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-5"></div>

                {/* Floating Arrow Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Category Icon Placeholder */}
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:from-teal-400 group-hover:to-teal-500">
                    <svg className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>

                {/* Text styling */}
                <h3 className="text-lg font-bold text-gray-800 capitalize group-hover:text-teal-600 transition-colors duration-300 text-center">
                  {item.replace("-", " ")}
                </h3>
                
                {/* Animated underline */}
                <div className="mt-3 h-1 w-8 bg-gray-200 group-hover:w-12 group-hover:bg-teal-500 transition-all duration-500 rounded-full" />
              </div>
            </NavLink>
          ))}
        </div>

        {/* Empty State / Loading */}
        {items?.length === 0 && status === 'loading' && (
          <div className="text-center py-20">
            <div className="inline-block">
              <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-teal-300/80">Loading amazing categories...</p>
          </div>
        )}
        
        {items?.length === 0 && status === 'succeeded' && (
          <div className="text-center py-20">
            <p className="text-teal-300/80 text-lg">No categories found</p>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx="true">{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}

export default Categories;