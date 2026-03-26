import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineTrash } from "react-icons/hi"; //
import { DecrementQty, IncrementQty, RemoveCartItems } from '../redux/slices/cartItem';
import { useState } from 'react';
import NoItemFound from './NoItemFound';
function CartItems() {
    let dispatch=useDispatch()
    let selector=useSelector(state=>state.cartItem)
       let items=selector.items
  
  
  function removeFromCart(item){
dispatch(RemoveCartItems(item))

  }

   const totalPrice = items.reduce((accumulator ,item) => {       //accu   previous value ...item curr
  return accumulator += item.price*(item.quantity || 1);
}, 0)
// shirt increment
 
 return (
    <div className="max-w-7xl mx-auto p-6 lg:px-8 ">
      <h1 className="text-3xl font-bold  text-gray-800">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg">
         <NoItemFound title={"Cart Items"}/>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* /* --- LEFT SIDE: Items List --- */ }
          <div className="lg:w-2/3 space-y-4">
            {items?.map((item) => 
            
            (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition border-2 border-teal2">
                {/* Product Image */}
          
                <img src={item.image} alt={item.title} className="w-24 h-24 object-contain rounded-md" />
                
                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Category: {item.category}</p>
                  <p className="text-lg font-bold text-teal-600 mt-2">${item.price}</p>
                </div>

                {/* Quantity & Delete */}
                <div className="flex flex-col items-end gap-4">
                  <button 
                    onClick={()=>removeFromCart(item)}
                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition"
                  >
                    <HiOutlineTrash size={22} />
                  </button>
                  <div className="flex items-center border rounded-lg bg-gray-50">
                   <button 
                      className="px-3 py-1 hover:bg-gray-200" 
                      onClick={() => dispatch(DecrementQty(item))}
                    >
                      -
                    </button>
                    <span className="px-3 font-medium">{item.quantity || 1}</span>
                    <button 
                      className="px-3 py-1 hover:bg-gray-200" 
                      onClick={() => dispatch(IncrementQty(item))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- RIGHT SIDE: Summary Panel --- */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 sticky top-24">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Order Summary</h2>
              
              <div className="space-y-3 border-b pb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Fee</span>
                  <span className="text-green-600 font-medium">FREE</span>
                </div>
              </div>

              <div className="flex justify-between items-center py-4">
                <span className="text-lg font-bold">Total Amount</span>
                <span className="text-2xl font-extrabold text-teal-700">${totalPrice.toFixed(2)}</span>
              </div>

              <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg active:scale-95">
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4 italic">
                Secure Payment Powered by Stripe/Paypal
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default CartItems