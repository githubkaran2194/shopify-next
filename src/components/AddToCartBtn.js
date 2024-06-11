import { addToCart } from '@/redux/slices/CartSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function AddToCartBtn({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isItemInCart = cartItems.some(item => item.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
       }

    return (
        <button
            className={`flex items-center justify-center w-full rounded-md px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300
                ${isItemInCart ? 'bg-gray-500 cursor-not-allowed' : 'bg-slate-900 hover:bg-gray-700'}`}
            onClick={handleAddToCart}
            disabled={isItemInCart}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
            </svg>
            {isItemInCart ? 'Already in cart' : 'Add to cart'}
        </button>
    );
}
