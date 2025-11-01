"use client";

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>Revenue: {product.revenue}</p>
        </div>
    );
}   