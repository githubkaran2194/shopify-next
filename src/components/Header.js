'use client'
import Link from "next/link";
import { useSelector } from "react-redux";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
    const items = useSelector((state) => state.cart.items);
    return (
        <header className="bg-white py-4">
            <div className="mx-auto max-w-screen-xl flex justify-between items-center px-4 sm:px-20 xl:px-10">
                <div className="flex items-center">
                    <img
                        src="https://images.unsplash.com/photo-1599751449128-eb7249c3d6b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                        alt="Boleno Logo"
                        className="h-10 w-10 mr-2"
                    />
                    <Link href="/" className="text-gray-600 text-2xl font-bold hover:text-blue-600">
                        shopify
                    </Link>
                </div>
                <nav aria-label="Main Navigation" className="hidden sm:flex gap-8 items-center">
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="text-gray-600 hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-600 hover:text-blue-600">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/products" className="text-gray-600 hover:text-blue-600">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Link href="/login">
                        <button
                            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
                                    d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m8-10a4 4 0 100-8 4 4 0 000 8z"
                                />
                            </svg>
                            Login
                        </button>
                    </Link>
                    <Link href="/cart">
                        <button
                            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
                            cart {items.length}
                        </button>
                    </Link>
                </nav>
                <button className="sm:hidden flex items-center justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
