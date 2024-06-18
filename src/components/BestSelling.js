'use client'
import React, { useState, useEffect } from 'react'
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

async function fetchBestSelling() {
    const res = await fetch(`https://dummyjson.com/products/category/mens-shoes`);
    const data = await res.json();
    return data.products;
}

export default function BestSelling() {
    const [bestSelling, setBestSelling] = useState([]);

    useEffect(() => {
        async function getBestSelling() {
            const sellingProducts = await fetchBestSelling();
            setBestSelling(sellingProducts);
        }
        getBestSelling();

        const intervalId = setInterval(getBestSelling, 5000);

        return () => {
          clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <section className="">
                <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
                    <div className="px-4 py-8 md:px-6 md:py-12 lg:px-20">
                        <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
                            Our Best Selling Collection
                        </h1>

                        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
                            {bestSelling.slice(0, 3).map((product) => (
                                <article key={product.id} className="bg-slate-50 p-8">
                                    <div>
                                        <Link
                                        href={`/products/${product.id}`}
                                        className="text-xl text-gray-600">{product.title}</Link>
                                        <p className="mt-2 text-xl font-semibold text-gray-800">
                                            ${product.price}
                                        </p>
                                    </div>
                                    <div className="mt-8 flex items-center justify-center md:mt-24">
                                    <Link href={`/products/${product.id}`}>
                                        <img className="" src={product.thumbnail} alt={product.title} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">
                            {bestSelling.slice(3, 5).map((product) => (
                                <article key={product.id} className="bg-slate-50 p-8">
                                    <div>
                                        <h2 className="text-xl text-gray-600">{product.title}</h2>
                                        <p className="mt-2 text-xl font-semibold text-gray-800">
                                            ${product.price}
                                        </p>
                                    </div>
                                    <div className="mt-28 flex items-center justify-center md:mt-3">
                                        <img src={product.thumbnail} alt={product.title} />
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
