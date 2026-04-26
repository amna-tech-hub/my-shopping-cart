import React from 'react';
import { Link } from 'react-router-dom';
import { TfiFaceSad } from "react-icons/tfi";
const NoItemFound = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      {/* Icon Section */}
      
       <TfiFaceSad className='w-20 h-20 fill-gray-800' />

      {/* Text Section */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        No {title} Found
      </h1>
      <p className="text-gray-500 max-w-xs mb-8">
       Please add to {title} first
      </p>

      {/* Action Button */}
     <Link className='text-amber-900  underline ' to='/Home'>
        Go To Home Page
     </Link>
       
       
     
    </div>
  );
};

export default NoItemFound;