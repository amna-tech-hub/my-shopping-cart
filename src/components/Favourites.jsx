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
    {items && items.length === 0 ? (
      <NoItemFound title={"Favourites"}/>
    ) : (
      <Cart items={items} forfav={true} />
    )}
  </div>
);
    
}

export default Favourites