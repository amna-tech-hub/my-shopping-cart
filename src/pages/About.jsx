import React from "react";
import CustomerReview from "../components/CustomerReview";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      {/* Hero Section - Matching BestSeller Style */}
      <div className="bg-teal-950 py-20 px-6 relative overflow-hidden ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-amber-50 mb-3 uppercase tracking-tighter">
            About Us
          </h2>
          {/* Breadcrumb Navigation */}
          <nav className="relative z-10 flex justify-center mb-8 text-sm font-medium">
            <ol className="flex items-center space-x-2 text-teal-300/80">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-amber-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-amber-400 font-bold uppercase tracking-wider text-xs">
                  About Us
                </span>
              </li>
            </ol>
          </nav>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-teal-300/80 text-lg italic">
        
            "Crafting experiences, one pixel at a time."
          </p>
        </div>
      </div>

      {/* SECTION 1: OUR STORY - Premium Quality Products */}
      <div className=" px-4 mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image collage - Product focused */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500group-hover:opacity-40 transition duration-700"></div>
            <div className="relative grid grid-cols-2 gap-3">
              <div className="col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-xl">
                <img
   src= "https://res.cloudinary.com/ddkrcxdal/image/upload/q_auto/f_auto/v1775942839/download_ejkyau.webp"
                  className="w-full h-full object-fit transition duration-700 group-hover:scale-105 aspect-[3/4]"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded-2xl shadow-xl">
              {/* men */}
                <img
        src= "https://res.cloudinary.com/ddkrcxdal/image/upload/q_auto/f_auto/v1775942728/Men_s_Classic_Fit_Polo_T-Shirt_cuanf4.webp"
                  alt="Shopping experience"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105 aspect-[4/3]"
                />
              </div>
              <div className="col-span-1 overflow-hidden rounded-2xl shadow-xl">
                <img
        src= "https://res.cloudinary.com/ddkrcxdal/image/upload/q_auto/f_auto/v1775941379/g-5_ppejzx.webp"
                  alt="Quality assurance"
                  className="w-full h-full object-fit transition duration-700 group-hover:scale-105 aspect-[4/3]"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 ">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold tracking-wide uppercase">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Premium Quality <span className="text-teal-600">Products</span>
              Delivered to Your Doorstep
            </h2>
            <div className="w-20 h-0.5 bg-teal-400 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              We started with a simple mission: to bring high-quality,
              affordable products directly to customers without compromising on
              authenticity or service. Today, we're proud to serve thousands of
              happy customers with a carefully curated selection of products
              that combine style, durability, and value.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                  <span className="text-teal-700 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">
                  10,000+ Happy Customers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                  <span className="text-teal-700 font-bold">★</span>
                </div>
                <span className="text-gray-700 font-medium">
                  4.9 Star Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: OUR PHILOSOPHY - Customer First */}
      <div className="mb-10 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-3xl p-6 md:p-10 mx-4 ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold tracking-wide uppercase">
              Our Philosophy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-500">
                Customer First
              </span>
              , Always
            </h2>
            <div className="w-20 h-0.5 bg-teal-400 rounded-full"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Shopping should be joyful, not stressful. That's why we prioritize
              transparent pricing, hassle-free returns, and lightning-fast
              shipping. Every product is handpicked and tested for quality
              before it reaches our virtual shelves. Your satisfaction isn't
              just a goal — it's our promise.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex gap-2 items-start">
                <svg
                  className="w-5 h-5 text-teal-600 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">Free Shipping Worldwide</span>
              </div>
              <div className="flex gap-2 items-start">
                <svg
                  className="w-5 h-5 text-teal-600 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-700">30-Day Returns</span>
              </div>
            </div>
          </div>

          {/* Image - Customer unboxing experience */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-700">
              <img
                src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=600&fit=crop"
                alt="Happy customer unboxing"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: SMART TECH - Secure & Fast Shopping Experience */}
      <div className="mb-28 px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-semibold mb-4">
            Secure Shopping
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Fast, Secure & <span className="text-teal-600">Hassle-Free</span>{" "}
            Checkout
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-amber-400 mx-auto my-5 rounded-full"></div>
          <p className="text-gray-500 text-lg mt-4">
            Experience the future of online shopping with our cutting-edge
            platform
          </p>
        </div>

        <div className="flex gap-12 items-center">

     {/* Features - E-commerce focused */}
<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 sm:gap-6 w-full">
  {/* Feature 1 - Secure Payments */}
  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all flex-1">
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 text-xl shrink-0">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          100% Secure Payments
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          SSL encrypted checkout with multiple payment options
          including cards, UPI, and COD.
        </p>
      </div>
    </div>
  </div>

  {/* Feature 2 - Fast Delivery */}
  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all flex-1">
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 text-xl shrink-0">
<i class="fa-solid fa-cart-flatbed"></i>        
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          Lightning Fast Delivery
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Free express shipping on orders over $50. Track your package
          in real-time.
        </p>
      </div>
    </div>
  </div>

  {/* Feature 3 - Customer Support */}
  <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all flex-1">
    <div className="flex flex-col sm:flex-row items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 text-xl shrink-0">
<i class="fa-regular fa-face-grin"></i>           
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          24/7 Customer Support
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">
          Our friendly support team is always here to help with any
          questions or concerns.
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Stats Section - E-commerce focused metrics */}
      <div className="mb-28 bg-teal-950 rounded-3xl py-12 px-6 text-white shadow-xl mx-4 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white-300">
              50K+
            </div>
            <div className="text-teal-200 font-medium">Products Sold</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white-300">
              10K+
            </div>
            <div className="text-teal-200 font-medium">Happy Customers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white-300">
              24/7
            </div>
            <div className="text-teal-200 font-medium">Support Available</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-white-300">
              4.9★
            </div>
            <div className="text-teal-200 font-medium">Customer Rating</div>
          </div>
        </div>
      </div>

      {/* Customer Review Component */}
      <CustomerReview />

      {/* CTA Section - E-commerce focused */}
      <div className="relative rounded-2xl bg-gradient-to-r from-teal-50 to-amber-50 p-8 md:p-12 text-center overflow-hidden mb-12 mx-4">
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
            Ready to Upgrade Your Shopping Experience?
          </h3>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">
            Join thousands of satisfied customers and discover products you'll
            love.
          </p>
          <button className="mt-6 bg-teal-700 hover:bg-teal-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105">
            Shop Now →
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
