/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import AddToCartBtn from './AddToCartBtn';

async function fetchProductCate(category) {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`)
    const data = await res.json()
    return data.products;
}

async function fetchCategories() {
    const res = await fetch('https://dummyjson.com/products/categories')
    const data = await res.json()
    return data;
}

export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Beauty');

    useEffect(() => {
        async function getCategories() {
            const categoriesList = await fetchCategories();
            // Ensure categories are strings; adjust if categories are objects
            const categoryNames = categoriesList.map(category => category.name // Adjust based on your API response
            );
            setCategories(categoryNames);
        }

        getCategories();
    }, []);

    useEffect(() => {
        async function getProducts() {
            const productsList = await fetchProductCate(selectedCategory);
            setProducts(productsList);
        }

        getProducts();
    }, [selectedCategory]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <>
            <div>
                <h2 className="text-2xl font-bold ml-10">Product category: {selectedCategory} ({products.length} products)</h2>
            </div>
            <div className="ml-4">
                <select value={selectedCategory} onChange={handleCategoryChange} className="border border-gray-300 rounded p-2">
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {products.map((product, i) => (
                    <div className="relative mt-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" key={i}>
                        <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href='#'>
                            <img className="object-cover" src={product.thumbnail} alt="product image" />
                            <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                {product.discountPercentage}% OFF
                            </span>
                        </Link>
                        <div className="mt-4 px-5 pb-5">
                            <Link href='#'>
                                <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                            </Link>
                            <div className="mt-2 mb-5 flex items-center justify-between">
                                <p>
                                    <span className="text-2xl font-bold text-slate-900">$ {product.price}</span>
                                    <br />
                                </p>
                                <div className="flex items-center">
                                    {Array(5).fill(0).map((_, index) => (
                                        <svg
                                            key={index}
                                            aria-hidden="true"
                                            className="h-5 w-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                    ))}
                                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                </div>
                            </div>
                           <AddToCartBtn product={product}/>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
