"use client";

export default function CartSummary({ products, resetCart }) {
  const totalItems = products.reduce((sum, p) => sum + (p.quantity || 0), 0);
  const totalPrice = products.reduce(
    (sum, p) => sum + (p.quantity || 0) * p.price,
    0
  );

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total items: {totalItems}</p>
      <p>Total price: ${totalPrice}</p>
      <button onClick={resetCart}>Reset Cart</button>
    </div>
  );
}
