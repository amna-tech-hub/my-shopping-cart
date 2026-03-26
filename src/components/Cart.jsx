import React from "react";
import Button from '../components/Button'
import { NavLink } from "react-router-dom";
import { IoHeartCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AddItems, RemoveItems } from "../redux/slices/favourite";
import { AddCartItems, RemoveCartItems } from "../redux/slices/cartItem";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
function Cart({ items,forfav }) {
 let dispatch=useDispatch()
//  handle Addfavourites
 function handleFav(item){
dispatch(AddItems(item))
  }

  // handle remove favourites
function removeFav(item){
dispatch(RemoveItems(item))
  }

  //  handle AddToCart
 function handleAddCart(item){
dispatch(AddCartItems(item))
console.log("added!");

  }

  // handle removeFromCart
function removeFromCart(item){
dispatch(RemoveCartItems(item))
console.log("removed!");

  }
  let AllFavitems=useSelector(state=>state.favourites.items)
    let AllCartItems=useSelector(state=>state.cartItem.items)


  return (
    <>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

      {items  &&
        items.map((item) => {

      const isAlredyFav=AllFavitems?.some((obj)=>
        (obj.id==item.id  )
      )
       const isAlreadyInCart=AllCartItems?.some((obj)=>
        (obj.id==item.id  )
      )
           return(
            
      
             <div className="p-2    rounded border-2 m-2 border-black flex flex-col justify-between" key={item.id}>
          <img
            className="h-48 w-full mix-blend-multiply touch-pan-x md:touch-auto pointer-events-none  object-contain md:h-64 md:w-full roundedc border-t2"
            src={item.image}
            alt=""
          />
         <h2 className="text-teal2 text-balance text-left  line-clamp-3 ">{item.title}</h2>
         {/* <p className="text-teal2 text-pretty">{item.description}</p> */}
         <div className="flex justify-between">
       <div><span className="text-teal2">price</span><span className="text-black mx-2">{item.price}</span></div>  
       <div className="text-teal2  wrap-anywhere">Rate{item.rating.rate}</div>
       </div>
       <div className="text-center">     <NavLink className="text-xs text-teal2 text-center underline hover:text-black transition cursor-pointer" to={`/CartDetails/${item.id}`}>  See More Details</NavLink>
</div>
      {/* Footer Section: See Details  */}
  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
    <div className="flex gap-3 items-center">
{/* cart button st */}
        <Button >
      {isAlreadyInCart ?
 <span className="text-white cursor-pointer " onClick={()=>removeFromCart(item)}>
<MdOutlineRemoveShoppingCart  size={30} className="hover:scale-110 transition"/>
</span>
:
          <span className="text-white cursor-pointer " onClick={()=>handleAddCart(item)}>
          {/* <MdAddShoppingCart  size={30} className="hover:scale-110 transition" /> */}
          Add to Cart
</span>}
   
    </Button>
{/* cart btn end */}
        {/* 'See Details' as a small link */}
      
    </div>

    <Button >
      {forfav || isAlredyFav  ?
 <span className="text-white cursor-pointer " onClick={()=>removeFav(item)}>
 <MdDeleteOutline  size={30} className="hover:scale-110 transition" />
</span>
:
          <span className="text-white cursor-pointer " onClick={()=>handleFav(item)}>
   <IoHeartCircleOutline size={30} className="hover:scale-110 transition" /> 
</span>}
   
    </Button>

  
  </div>
      </div>
          
        )}
    )
  
  }
          </div> 

    </>
  );
}

export default Cart;
