'use client';

import { useEffect, useState } from 'react';


export default function Catalog() {
  const [products, setProducts] = useState([]);

useEffect(() => {
    fetch("/api/products")
    .then(r=> r.json())
    .then(data => setProducts(Array.isArray(data) ? data : data.products || []))
    .catch(console.error);
}, []);

  return (
    <ul>
        {products.map(product => (
            <li key={product.id}>{product.name}:{product.revenue}</li>
        ))}
    </ul>   
    );
}