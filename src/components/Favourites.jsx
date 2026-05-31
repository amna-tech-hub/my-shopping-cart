import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Cart from './Cart';
import NoItemFound from './NoItemFound';
function Favourites() {
  
  let selector=useSelector(state=>state.favourites)
  console.log(selector,"ap ka selectore");
  let items=selector.items
  console.log(items,"aiyuh");

  return (
    
  <div className="p-4"> 
    <div className="flex items-center gap-3 mb-2 items-center justify-start my-10">
                        <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full"></div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 ">
                            My Favourites
                        </h1>
                    </div>
    {items && items.length === 0 ? (
      <NoItemFound title={"Favourites"}/>
    ) : (
      <Cart items={items} forfav={true} />
    )}
  </div>
);
    
}

export default Favourites