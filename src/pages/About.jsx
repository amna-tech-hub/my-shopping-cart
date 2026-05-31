import React from "react";
import AboutGrid from "../components/AboutGrid";
import { aboutData } from "../constants/aboutdata";
import CustomerReview from "../components/CustomerReview";
import { NavLink } from "react-router-dom";
function About() {
  return (
    <>
      {/* Hero Section - Matching BestSeller Style */}
      <div className="bg-teal-950 py-20 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="relative z-10 flex justify-center mb-8 text-sm font-medium">
          <ol className="flex items-center space-x-2 text-teal-300/80">
            <li>
              <NavLink to="/" className="hover:text-amber-400 transition-colors">
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

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-amber-50 leading-tight tracking-tighter uppercase mb-4">
            About
            <span className="text-teal-400 relative ml-3">
              Us
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-teal-500 rounded-full"></div>
            </span>
          </h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
          <p className="mt-4 text-teal-300/80 font-medium max-w-md mx-auto italic text-base sm:text-lg">
            "Crafting experiences, one pixel at a time."
          </p>
        </div>
      </div>

      {aboutData.map((data, index) => (
        <div key={data.title}>
          {/* Index 0*/}
          {index === 0 && (
            <div className=" grid grid-cols-2  justify-around gap-x-4 gap-2">
              <AboutGrid
                styleName={"bg-black"}
                firstBox={"row-span-1 "}
                secBox={"row-span-2"}
                thirdBox={"col-span-2 "}
                srcClass={
                  "w-full h-46 object-cover transition-transform duration-500 group-hover/item:scale-110"
                }
                src2Class={
                  "w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                }
                src3Class={
                  "w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                }
                src={data.src}
                src2={data.src2}
                src3={data.src3}
              />
              <div className=" border-solid  flex flex-col gap-2 md:p-4 sm:p-0">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold sm:text-teal2 text-teal2 md:text-black leading-tight m-3 ">
                  {data.title}
                </h1>
                <p className="txt-sm text-black px-4 sm:p-2 md:p-0">
                  {data.parah}
                </p>
              </div>
            </div>
          )}

          {/* Index 1    women*/}
          {index === 1 && (
            <div className="flex flex-row-reverse justify-around items-center">
              <AboutGrid
                styleName={"bg-black"}
                firstBox={"col-span-2"}
                secBox={"col-span-1"}
                thirdBox={"col-span-1"}
                srcClass={
                  "w-full h-46 object-cover transition-transform duration-500 group-hover/item:scale-110"
                }
                src2Class={
                  "w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                }
                src3Class={
                  "w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                }
                src={data.src}
                src2={data.src2}
                src3={data.src3}
              />
              <div className=" border-solid  flex flex-col gap-2 md:p-4 sm:p-0">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold sm:text-teal2 text-teal2 md:text-black leading-tight m-3 ">
                  {data.title}
                </h1>
                <p className="txt-sm text-black p-2 sm:p-2 md:p-0">
                  {data.parah}
                </p>
              </div>
            </div>
          )}

          {/* Index 2  smart tech*/}
          {index === 2 && (
            <div className="flex justify-around items-center">
              <AboutGrid
                styleName={"bg-black"}
                firstBox={"col-span-1"}
                secBox={"row-span-2 col-span-1"}
                thirdBox={"col-span-2"}
                src={data.src}
                src2={data.src2}
                src3={data.src3}
                srcClass={
                  "w-full h-46 object-cover transition-transform duration-500 group-hover/item:scale-110"
                }
                src2Class={
                  "w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                }
                src3Class={
                  "h-46 w-79 object-fit transition-transform duration-500 group-hover/item:scale-110"
                }
              />
              <div className=" border-solid  flex flex-col gap-2 md:p-4 sm:p-0">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold sm:text-teal2 text-teal2 md:text-black leading-tight m-3">
                  {data.title}
                </h1>
                <p className="txt-sm text-black p-2 sm:p-2 md:p-0">
                  {data.parah}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
      <CustomerReview />
    </>
  );
}

export default About;
