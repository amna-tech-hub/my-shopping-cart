import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { category } from '../redux/slices/category';
import Cart from './Cart';

function ProductsOfCategories() {
    let params = useParams();
    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(category(`${params.item}`));
    }, [params, dispatch]);

    let selector = useSelector(state => state.category);
    let items = selector.items;
    
    // Format category name for display
    const formattedCategory = params.item?.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

    return (
        <div className="bg-teal-950 min-h-screen">
            {/* Hero Section - Matching BestSeller Style */}
            <div className="relative overflow-hidden py-20 px-6">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-40 left-1/2 w-80 h-80 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-50 mb-3 uppercase tracking-tighter">
                        {formattedCategory}
                    </h1>
                    <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
                    <p className="text-teal-300/80 text-lg italic">
                        Discover our premium collection of {formattedCategory?.toLowerCase()}
                    </p>
                </div>
            </div>

            {/* Products Section */}
            <div className="pb-20">
                {items?.length === 0 ? (
                    <div className="text-center py-20 px-6">
                        <div className="max-w-md mx-auto">
                            <div className="w-24 h-24 bg-teal-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-amber-50 mb-2">No Products Found</h3>
                            <p className="text-teal-300/80">No products available in this category at the moment.</p>
                        </div>
                    </div>
                ) : (
                    <Cart items={items} />
                )}
            </div>

            {/* Custom Animations */}
            <style jsx="true">{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}

export default ProductsOfCategories;