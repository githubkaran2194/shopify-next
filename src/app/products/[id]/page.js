'use client'
import { useEffect, useState } from 'react';
import ProductDetailAll from '@/components/ProductDetailAll';

async function fetchProductDetails(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

export default function ProductDetails({ params }) {
  const { id } = params;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const productDetails = await fetchProductDetails(id);
      setDetails(productDetails);
    }

    getDetails();
  }, [id]);

  return (
    <div>
      {details ? <ProductDetailAll details={details} /> : <p>Loading...</p>}
    </div>
  );
}
