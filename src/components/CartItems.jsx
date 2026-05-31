import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineTrash } from "react-icons/hi";
import { FiShoppingBag, FiTruck, FiShield } from "react-icons/fi";
import { DecrementQty, IncrementQty, RemoveCartItems } from '../redux/slices/cartItem';
import { useState } from 'react';
import NoItemFound from './NoItemFound';

function CartItems() {
    let dispatch = useDispatch()
    let selector = useSelector(state => state.cartItem)
    let items = selector.items
  
    function removeFromCart(item) {
        dispatch(RemoveCartItems(item))
    }

    const totalPrice = items.reduce((accumulator, item) => {
        return accumulator += item.price * (item.quantity || 1);
    }, 0)

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto p-4 lg:px-8">
                
                {/* Page Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-teal-600 rounded-full"></div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            My Shopping Cart
                        </h1>
                    </div>
                    <p className="text-gray-500 ml-4">
                        {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>

                {items.length === 0 ? (
                    <div className="-mt-4">
                        <NoItemFound title={"Cart Items"} />
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col lg:flex-row gap-8">
                            
                            {/* LEFT SIDE: Items List */}
                            <div className="lg:w-2/3 space-y-4">
                              

                                {items?.map((item) => (
                                    <div key={item.id} className="group bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                            {/* Product Image */}
                                            <div className="flex-shrink-0 bg-gray-50 rounded-lg p-2 w-24 h-24 mx-auto sm:mx-0">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-full h-full object-contain rounded-md"
                                                />
                                            </div>
                                            
                                            {/* Product Info */}
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-800 line-clamp-2 text-center sm:text-left">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-gray-500 mt-1 text-center sm:text-left">
                                                    Category: {item.category}
                                                </p>
                                                <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
                                                    <p className="text-lg font-bold text-teal-600">
                                                        ${item.price}
                                                    </p>
                                                    <span className="text-xs text-gray-400 line-through hidden">
                                                        ${(item.price * 1.2).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Quantity & Delete */}
                                            <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-end gap-4">
                                                <div className="flex items-center border rounded-lg bg-gray-50">
                                                    <button 
                                                        className="px-3 py-1.5 hover:bg-gray-200 rounded-l-lg transition font-medium"
                                                        onClick={() => dispatch(DecrementQty(item))}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="px-3 py-1.5 font-medium min-w-[40px] text-center">
                                                        {item.quantity || 1}
                                                    </span>
                                                    <button 
                                                        className="px-3 py-1.5 hover:bg-gray-200 rounded-r-lg transition font-medium"
                                                        onClick={() => dispatch(IncrementQty(item))}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                
                                                <button 
                                                    onClick={() => removeFromCart(item)}
                                                    className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full transition group-hover:scale-110"
                                                >
                                                    <HiOutlineTrash size={20} />
                                                </button>
                                                
                                                {/* Mobile item total */}
                                                <div className="sm:hidden text-right">
                                                    <p className="text-xs text-gray-500">Total</p>
                                                    <p className="font-bold text-teal-600">
                                                        ${(item.price * (item.quantity || 1)).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            {/* Desktop item total */}
                                            <div className="hidden sm:block text-right min-w-[80px]">
                                                <p className="text-sm text-gray-500">Total</p>
                                                <p className="font-bold text-teal-600 text-lg">
                                                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                                {/* Continue Shopping Link */}
                                <div className="mt-4">
                                    <button 
                                        onClick={() => window.history.back()}
                                        className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2 transition group cursor-pointer"
                                    >
                                        ← Continue Shopping
                                    </button>
                                </div>
                            </div>

                            {/* RIGHT SIDE: Summary Panel */}
                            <div className="lg:w-1/3">
                                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg sticky top-24">
                                    <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                                        <FiShoppingBag className="text-teal-600" />
                                        Order Summary
                                    </h2>
                                    
                                    {/* Delivery Info */}
                                    <div className="bg-teal-50 p-3 rounded-lg mb-4 flex items-center gap-3">
                                        <FiTruck className="text-teal-600 text-xl" />
                                        <div>
                                            <p className="text-xs text-teal-800 font-medium">Free Delivery</p>
                                            <p className="text-xs text-teal-600">On all orders above $50</p>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3 border-b pb-4">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal ({items.length} items)</span>
                                            <span>${totalPrice.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Shipping Fee</span>
                                            <span className="text-green-600 font-medium">FREE</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Tax (Estimated)</span>
                                            <span>${(totalPrice * 0.1).toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center py-4">
                                        <span className="text-lg font-bold text-gray-800">Total Amount</span>
                                        <div className="text-right">
                                            <span className="text-2xl font-extrabold text-teal-700">
                                                ${(totalPrice + (totalPrice * 0.1)).toFixed(2)}
                                            </span>
                                            <p className="text-xs text-gray-400">Including taxes</p>
                                        </div>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-4 rounded-xl font-bold hover:from-teal-700 hover:to-teal-800 transition shadow-lg active:scale-95 mb-3">
                                        Proceed to Checkout →
                                    </button>
                                    
                                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                                        <FiShield />
                                        <span>Secure Payment Powered by Stripe/PayPal</span>
                                    </div>
                                </div>
                                
                                {/* Trust Badges */}
                                {/* <div className="mt-4 grid grid-cols-3 gap-2">
                                    <div className="text-center p-2 bg-white rounded-lg border border-gray-100">
                                        <p className="text-xs font-semibold text-gray-600">✓ Easy Returns</p>
                                    </div>
                                    <div className="text-center p-2 bg-white rounded-lg border border-gray-100">
                                        <p className="text-xs font-semibold text-gray-600">✓ Secure Payment</p>
                                    </div>
                                    <div className="text-center p-2 bg-white rounded-lg border border-gray-100">
                                        <p className="text-xs font-semibold text-gray-600">✓ 24/7 Support</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default CartItems