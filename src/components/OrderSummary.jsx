// src/pages/OrderSummary.jsx
import React from 'react';

const OrderSummary = ({ cart }) => {
  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const transportationCost = 3.99;
  const tax = 2.0;
  const total = calculateSubtotal() + transportationCost + tax;

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>

      <div className="order-items">
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <p>{item.name}</p>
            <p>${item.price} / {item.unit}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="order-totals">
        <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
        <p>Transportation: ${transportationCost.toFixed(2)}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>

      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default OrderSummary;
