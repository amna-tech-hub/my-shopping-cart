import React from 'react';
import { NavLink } from 'react-router-dom';

function BestSeller() {
  const categories = [
    {
      title: "For Men",
      image: "https://i.pinimg.com/736x/05/9e/bd/059ebdacf81ad78107e548bf2bacfc67.jpg",
      gridClass: "md:col-span-1 md:row-span-2 h-[450px] md:h-full",
      position: "bg-top" ,
      pathName:"men's clothing",
    },
    {
      title: "For Women",
      image: "https://i.pinimg.com/1200x/5d/57/eb/5d57eba1681f50520df0e9617bb95541.jpg",
      gridClass: "h-[250px]",
      position: "bg-top",
      pathName:"women's clothing",
    },
    {
      title: "Jewelery",
      image: "https://i.pinimg.com/1200x/b1/d1/93/b1d1937a12e3de9b66af31e467b0fc53.jpg",
      gridClass: "h-[250px]",
      position: "bg-center",
      pathName:"jewelery",
    },
    {
      title: "Electronics",
      image: "https://i.pinimg.com/736x/0f/ba/f6/0fbaf63e6815b2b504c495221047a609.jpg",
      gridClass: "md:col-span-2 h-[300px]",
      position: "bg-center",
      pathName:"electronics",
    }
  ];

  return (
    <section className='bg-teal-950 py-20 px-6'>
      {/* Centered Heading Section */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-amber-50 mb-3 uppercase tracking-tighter'>
          Best Selling Products
        </h2>
        <div className='w-24 h-1 bg-teal-500 mx-auto mb-4'></div>
        <p className='text-teal-300/80 text-lg italic'>Premium Quality, Unmatched Style</p>
      </div>

      {/* Grid Layout Fixed */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {categories.map((cat, index) => (
          <NavLink 
            key={index} 
            to={`/ProductOfCategories/${cat.pathName}`}
            className={`${cat.gridClass} block group relative overflow-hidden rounded-2xl border border-teal-800 shadow-2xl cursor-pointer`}
          >
            {/* Background Image */}
            <div 
              className={`absolute inset-0 bg-cover ${cat.position} transition-transform duration-700 group-hover:scale-105`}
              style={{ backgroundImage: `url(${cat.image})` }}
            ></div>

            {/* Dark Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent'></div>

            {/* Text Content */}
            <div className='absolute inset-0 flex items-end p-8'>
              <div className="w-full">
                <p className='text-2xl md:text-3xl font-bold text-amber-50 drop-shadow-2xl uppercase tracking-tight'>
                  {cat.title}
                </p>
                <div className='w-0 group-hover:w-full h-1 bg-teal-400 transition-all duration-500'></div>
              </div>
            </div>
            
            {/* Glossy Hover Effect */}
            <div className='absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default BestSeller;