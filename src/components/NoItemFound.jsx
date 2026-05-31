import React from 'react';
import { Link } from 'react-router-dom';
import { TfiFaceSad } from "react-icons/tfi";
import { FiShoppingBag, FiArrowRight } from "react-icons/fi";

const NoItemFound = ({ title = "Item", message, showAction = true }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="relative max-w-md w-full">
        {/* Animated Background Effects */}
         {/* <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div> */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
         
        {/* Main Card */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center transform transition-all duration-500 hover:scale-105">
          {/* Decorative Circle */}
        

          {/* Content */}
          <div className="mt-5">
            {/* Icon in background */}
            <div className="mb-6 ">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-50 to-teal-50 rounded-2xl mx-auto">
                <FiShoppingBag className="w-10 h-10 text-teal-500" />
              </div>
            </div>

            {/* Text Section */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              No {title} Found
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-400 mx-auto mb-4 rounded-full"></div>
            
            <p className="text-gray-500 text-lg mb-2">
              {message || `Your ${title?.toLowerCase()} list is currently empty`}
            </p>
            
            <p className="text-gray-400 text-sm mb-8">
              Ready to explore and add some amazing items?
            </p>

            {/* Suggestions */}
            <div className="bg-gray-50 rounded-xl p-4 mb-8 text-left">
              <h3 className="text-sm font-semibold text-gray-700 mb-2"> Quick Tips:</h3>
              <ul className="text-xs text-gray-500 space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  Browse our collection to find your favorites
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  Click on "Add to {title}" button on any product
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                  Check back later for new arrivals
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            {showAction && (
              <div className="space-y-3">
                <Link 
                  to='/home'
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-200 hover:scale-105 w-full"
                >
                  <span>Start Shopping</span>
                  
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  to='/'
                  className="inline-flex items-center justify-center gap-2 text-gray-500 hover:text-teal-900 px-6 py-2 rounded-xl font-medium transition-all duration-300 w-full"
                >
                  <span>Go to Homepage</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-r from-amber-50 to-teal-50 rounded-3xl transform rotate-3"></div>
      </div>

      {/* Custom Animations */}
      <style jsx="true">{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NoItemFound;