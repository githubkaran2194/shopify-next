'use client'
import React, { useState, useEffect } from 'react';
import ProductsList from '@/components/ProductsList';

async function fetchProductsList() {
    const response = await fetch('https://dummyjson.com/products?limit=500');
    const data = await response.json();
    return data?.products;
}

async function fetchProductsByCategory(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=500`);
    const data = await response.json();
    return data?.products;
}

export default function Products() {

    const [products, setProducts] = useState([]);
    const [perProduct, setPerProduct] = useState(28);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getProductsAndCategories() {
            const productsList = await fetchProductsList();
            const categoriesList = [...new Set(productsList.map(item => item.category))];
            setCategories(categoriesList);
            setProducts(productsList);
        }
        getProductsAndCategories();
    }, []);

    useEffect(() => {
        async function getProductsByCategory() {
            if (selectedCategory) {
                const cateProducts = await fetchProductsByCategory(selectedCategory);
                setProducts(cateProducts);
            } else {
                const productsList = await fetchProductsList();
                setProducts(productsList);
            }
        }
        getProductsByCategory();
    }, [selectedCategory]);

    const addMoreProducts = () => {
        setPerProduct(perProduct + 12);
    };

    return (
        <div className="mx-auto max-w-full">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-900">Product {products.length}</h1>
            </div>
            <div className="ml-4">
                <select
                    onChange={e => setSelectedCategory(e.target.value)}
                    value={selectedCategory}
                    className="border border-gray-300 rounded p-2"
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
                <ProductsList products={products.slice(0, perProduct)} />
            </div>
            <button
                onClick={addMoreProducts}
                className="flex items-center justify-center rounded-md mx-auto w-[50%] bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                Load More
            </button>
        </div>
    );
}
