import React from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div >
      {/* main grid */}
      
<section className="bg-gradient-to-br from-white via-slate-50 to-teal-50/40 px-4 py-16 md:px-8 lg:py-24 max-w-7xl mx-auto relative border-b border-gray-200">        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          {/* --- Left Side: Text Content --- */}
          <div className="flex-1 text-center md:text-left">
            {/* Subheading */}
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full font-semibold text-xs tracking-wider uppercase mb-5">
  New Arrivals
</span>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
  Discover Your <span className="text-teal-600">Sparkle</span>.
</h1>

<p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
  Timeless elegance meets modern design. Explore our exclusive collection of fine jewelry crafted with passion and precision.
</p>

            {/* Action Button */}
            <div className="flex justify-center md:justify-start">
              <Link 
  to="/Categories" 
  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95">
  Shop The Collection
</Link>
            
            </div>
          </div>

          {/* --- Right Side: Jewelry Grid Gallery  --- */}
      {/* --- Right Side: Jewelry Grid Gallery --- */}
<div className="flex-1 w-full max-w-2xl mx-auto md:max-w-none">
  <div className="grid grid-cols-1 sm:grid-cols-4 auto-rows-[120px] sm:auto-rows-[140px] gap-3 sm:gap-5 p-2">

    {/* 1. Feature Image */}
    <div className="sm:col-span-2 sm:row-span-2 overflow-hidden rounded-2xl bg-gray-100 group shadow-xl relative">
      <img
        src="https://res.cloudinary.com/ddkrcxdal/image/upload/q_auto/f_auto/v1775669854/Men_Model-1_vvljp2.jpg"
        alt="Model wearing elegant necklace"
        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
    </div>

    {/* Small Cards */}
    {[
      "camera_tdq5c7.webp",
      "jwel_jwqceo.jpg",
      "women_2_zi3ovk.jpg",
      "laptop_hy0ake.webp",
    ].map((img, i) => (
      <div
        key={i}
        className={`hidden sm:block overflow-hidden rounded-2xl bg-gray-100 group shadow-lg
        transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl
        ${i % 2 === 0 ? "translate-y-2" : "-translate-y-2"}`}
      >
        <img
          src={`https://res.cloudinary.com/ddkrcxdal/image/upload/q_auto/f_auto/v1775670${i === 0 ? "509" : i === 1 ? "490" : i === 2 ? "679" : "727"}/${img}`}
          alt="Jewelry item"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
    ))}

  </div>
</div>
        </div>
      </section>
    
    </div>
    
  );
}

export default Hero;
