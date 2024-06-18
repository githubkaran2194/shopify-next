'use client'
import React,{ useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import ProductsList from '@/components/ProductsList';

async function fetchProductsList() {
    const response = await fetch('https://dummyjson.com/products?limit=500');
    const data = await response.json();
    return data?.products || [];
}

async function fetchProductsByCategory(category) {
    const response = await fetch(`https://dummyjson.com/products/category/${category}`);
    const data = await response.json();
    return data?.products || [];
}

export default function Products() {

    const [products, setProducts] = useState([]);
    const [perProduct, setPerProduct] = useState(28);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch products list and categories on component mount
    useEffect(() => {
        async function fetchData() {
            try {
                const productList = await fetchProductsList();
                const categoriesList = [...new Set(productList.map(item => item.category))];
                setProducts(productList);
                setCategories(categoriesList);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // Fetch products when selectedCategory changes
    useEffect(() => {
        async function fetchProducts() {
            try {
                if (selectedCategory) {
                    const productsByCategory = await fetchProductsByCategory(selectedCategory);
                    setProducts(productsByCategory);
                } else {
                    const productList = await fetchProductsList();
                    setProducts(productList);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, [selectedCategory]);

    // Filter products based on searchQuery
    useEffect(() => {
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filteredProducts);
    }, [searchQuery]);

    const handleLoadMore = () => {
        setPerProduct(prevPerProduct => prevPerProduct + 12);
    };

    return (
        <div className="mx-auto max-w-full p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-semibold text-gray-900">Products: {products.length}</h1>
                <p>{products.length === 0 ? "Product not found" : null}</p>
                <div className="flex items-center space-x-4">
                    <select
                        value={selectedCategory}
                        onChange={e => setSelectedCategory(e.target.value)}
                        className=" border border-gray-700 px-3 py-2 rounded-md"
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category} className='p-2'>{category}</option>
                        ))}
                    </select>
                    <TextField
                        label="Search products"
                        variant="outlined"
                        size="small"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductsList products={products.slice(0, perProduct)} />
            </div>
            {products.length > perProduct && (
                <div className="flex justify-center mt-4">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLoadMore}
                    >
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
}
