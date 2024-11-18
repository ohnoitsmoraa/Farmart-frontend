import React from 'react';

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const transportationFee = 3.99;
  const tax = 2.00;
  const total = subtotal + transportationFee + tax;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Cart</h1>

      {cartItems.length === 0 ? (
        // Message when the cart is empty
        <p className=" text-center text-3xl text-black">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Cart Items */}
          <div className="space-y-4 lg:w-3/5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4 bg-white shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-green-800 font-bold">Kes {item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Quantity Adjustment */}
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                    className="px-2 py-1 bg-gray-200 rounded-md"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded-md"
                  >
                    +
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="mt-8 lg:mt-0 lg:ml-8 p-4 border rounded-lg bg-gray-50 shadow-md w-full lg:w-1/3">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <p className="flex justify-between">
              <span>Subtotal:</span> <span>KES {subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Transportation:</span> <span>KES {transportationFee.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Tax:</span> <span>KES {tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between font-bold text-green-800 mt-4">
              <span>Total:</span> <span>KES {total.toFixed(2)}</span>
            </p>
            <button className="w-full bg-green-500 text-white py-2 rounded-md mt-4 hover:bg-green-600">
              Check out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
