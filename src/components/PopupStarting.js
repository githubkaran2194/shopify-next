'use client'
import { Dialog, DialogContent } from '@mui/material';
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';

export default function PopupStarting() {
    const [openPop, setOpenPop] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpenPop(true);
        }, 5000)

        return () => clearTimeout(timer); 
    }, []);

    return (
        <Dialog open={openPop} onClose={() => setOpenPop(false)}>
            <DialogContent>
                <div className="flex items-center justify-center">
                    <div className="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 ">
                        <div className="h-40 bg-rose-500  sm:h-56">
                            <img className="h-full w-full object-contain" src="https://cdn.dummyjson.com/products/images/mens-shoes/Nike%20Air%20Jordan%201%20Red%20And%20Black/1.png" alt="" />
                        </div>
                        <div className="flex flex-col items-center bg-white px-4 py-10">
                            <h2 className="mb-2 text-3xl font-bold text-rose-500 sm:text-4xl">Thank you!</h2>
                            <p className="mb-8 font-medium text-gray-500">For Visiting ! We have 50% OFF</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
