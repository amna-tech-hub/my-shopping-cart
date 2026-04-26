import React from 'react'
import AboutGrid from '../components/AboutGrid'
import {aboutData}  from '../constants/aboutdata'
import CustomerReview from '../components/CustomerReview'
import { NavLink } from 'react-router-dom'
function About() {
  return (
    <>
   
 <div className="relative bg-gradient-to-r from-teal2 via-white to-teal2 py-16 mb-10 border-b border-teal-100">
  
  {/* 1. Navigator (Breadcrumbs) */}
  <nav className="flex justify-center mb-4 text-sm font-medium">
    <ol className="flex items-center space-x-2 text-gray-500">
      <li>
        <NavLink to="/" className="hover:text-teal2 transition-colors">Home</NavLink>
      </li>
      <li className="flex items-center space-x-2">
        <span>/</span>
        <span className="text-teal2 font-bold uppercase tracking-wider text-[10px]">About Us</span>
      </li>
    </ol>
  </nav>

  {/* 2. Main Heading with Rocket Brush Font */}
  <div className="text-center relative">
    {/* Background Decorative Circle (Optional for extra "Pitarra" look) */}
    <div className="absolute inset-0 -top-4 bg-teal2/5 w-32 h-32 rounded-full blur-3xl mx-auto -z-10"></div>
    
    <h1 className="font-[family-name:--font-rocket] text-5xl sm:text-6xl lg:text-7xl text-teal3 leading-tight tracking-wide">
      About <span className="text-teal2 relative">
        Us
        {/* Underline decoration */}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-teal2 rounded-full opacity-30"></span>
      </span>
    </h1>
    
    <p className="mt-4 text-gray-500 font-medium max-w-md mx-auto italic text-sm sm:text-base">
      "Crafting experiences, one pixel at a time."
    </p>
  </div>
</div>

      {aboutData.map((data, index) => (
        <div key={data.title}>
          
          {/* Index 0*/}
          {index === 0 && (
            <div className=' grid grid-cols-2  justify-around gap-x-4 gap-2'>
              <AboutGrid 
                styleName={"bg-black"} 
                firstBox={"row-span-1 "} 
                secBox={"row-span-2"} 
                thirdBox={"col-span-2 "}
                srcClass={"w-full h-46 object-cover transition-transform duration-500 group-hover/item:scale-110"}
                src2Class={"w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"}
                src3Class={"w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"}
                src={data.src} src2={data.src2} src3={data.src3} 
              />
              <div className=' border-solid  flex flex-col gap-2 md:p-4 sm:p-0' >
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold sm:text-teal2 text-teal2 md:text-black leading-tight m-3 ">
           {data.title} 
          </h1>
                <p className='txt-sm text-black px-4 sm:p-2 md:p-0'>{data.parah}</p>
              </div>
            </div>
          )}

          {/* Index 1    women*/}
          {index === 1 && (
            <div className='flex flex-row-reverse justify-around items-center'>
              <AboutGrid 
                styleName={"bg-black"} 
                firstBox={"col-span-2"} 
                secBox={"col-span-1"} 
                thirdBox={"col-span-1"}
                  srcClass={"w-full h-46 object-cover transition-transform duration-500 group-hover/item:scale-110"}
                src2Class={"w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"}
                src3Class={"w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"}
                src={data.src} src2={data.src2} src3={data.src3}
              />
                    <div className=' border-solid  flex flex-col gap-2 md:p-4 sm:p-0' >
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold sm:text-teal2 text-teal2 md:text-black leading-tight m-3 ">
           {data.title} 
          </h1>
                <p className='txt-sm text-black p-2 sm:p-2 md:p-0'>{data.parah}</p>
              </div>
            </div>
          )}

          {/* Index 2  smart tech*/}
          {index === 2 && (
            <div className='flex justify-around items-center'>
              <AboutGrid 
                styleName={"bg-black"} 
                firstBox={"col-span-1"} 
                secBox={"row-span-2 col-span-1"} 
                thirdBox={"col-span-2"} 
                src={data.src} src2={data.src2} src3={data.src3}
                  srcClass={"w-full h-46 object-cover transition-transform duration-500 group-hover/item:scale-110"}
                src2Class={"w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"}
                src3Class={"h-46 w-79 object-fit transition-transform duration-500 group-hover/item:scale-110"}
              />
                   <div className=' border-solid  flex flex-col gap-2 md:p-4 sm:p-0' >
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold sm:text-teal2 text-teal2 md:text-black leading-tight m-3">
           {data.title} 
          </h1>
                <p className='txt-sm text-black p-2 sm:p-2 md:p-0'>{data.parah}</p>
              </div>
            </div>
          )}

        </div>
      ))}
      <CustomerReview/>
    </>
  )
}

export default About