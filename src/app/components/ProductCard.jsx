"use client";

export default function Product({name,price}){
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: {price}</p>
        </div>
    );
}
export default function ProductCard({ product }) {
    if (!product) return null
    const isOutOfStock = product.inventory_count === 0;
    
    return (
        <div className={`product-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>{isOutOfStock ? 'Out of Stock' : `In Stock: ${product.inventory_count}`}</p>
        </div>
    );
}