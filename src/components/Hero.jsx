import React from 'react'
import jewelryRing from '../assets/ring.jpg'
import heroModel from '../assets/model-1.jpg'
function Hero() {
  return (
    <div>
        {/* main grid */}
<section className="bg-white px-4 py-12 md:px-8 md:py-20 lg:py-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        
        {/* --- Left Side: Text Content --- */}
        <div className="flex-1 text-center md:text-left">
          {/* Subheading */}
          <span className="inline-block bg-teal/10 text-teal px-4 py-1.5 rounded-full font-semibold text-xs tracking-wider uppercase mb-5">
            New Arrivals
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 leading-tight mb-6">
            Discover Your <span className="text-teal2">Sparkle</span>.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
            Timeless elegance meets modern design. Explore our exclusive collection of fine jewelry crafted with passion and precision.
          </p>

          {/* Action Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-teal2 hover:bg-teal2/90 text-white font-bold py-3.5 px-8 rounded-full transition duration-300 shadow-md transform hover:scale-105 active:scale-95 text-base">
              Shop the Collection
            </button>
          </div>
        </div>

        {/* --- Right Side: Jewelry Grid Gallery (Responsive) --- */}
        <div className="flex-1 w-full max-w-2xl md:max-w-none">
          {/* Grid Container */}
          {/* Default: 1 column (vertical) for mobile. SM+: grid. */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 p-1 rounded-2xl">
         {/* 1. Feature Image: Yeh hamesha nazar ayegi */}
<div className="sm:col-span-2 sm:row-span-2 overflow-hidden rounded-xl bg-gray-100 group shadow-lg">
  <img 
    src={heroModel} 
    alt="Model wearing elegant necklace" 
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  />
</div>

{/* 2. Top-Right Ring - Mobile pe hide kr di */}
<div className="hidden sm:block aspect-square sm:col-span-1 overflow-hidden rounded-xl bg-gray-100 group shadow-md sm:translate-y-2">
  <img 
    src={jewelryRing} 
    alt="Gold and diamond engagement ring" 
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
</div>

{/* 3. Mid-Right Ring - Mobile pe hide kr di */}
<div className="hidden sm:block aspect-square sm:col-span-1 overflow-hidden rounded-xl bg-gray-100 group shadow-lg sm:-translate-x-2 mt-2">
  <img 
    src={jewelryRing} 
    alt="Stack of minimalist silver rings" 
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
</div>

{/* 4. Bottom-Right Ring - Mobile pe hide kr di */}
<div className="hidden sm:block aspect-square sm:col-span-1 overflow-hidden rounded-xl bg-gray-100 group shadow-lg sm:translate-y-2">
  <img 
    src={jewelryRing} 
    alt="Elegant pearl wedding band" 
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
</div>

{/* 5. Bottom Ring 2 - Mobile pe hide kr di */}
<div className="hidden sm:block aspect-square overflow-hidden rounded-xl bg-gray-100 group shadow-md sm:-translate-x-2 sm:translate-y-2">
  <img 
    src={jewelryRing} 
    alt="Statement gold ring" 
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
  />
</div>
         

          </div>
        </div>

      </div>
    </section>
       
    </div>
  )
}

export default Hero