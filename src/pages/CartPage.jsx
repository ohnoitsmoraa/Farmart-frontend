import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const [isProcessing, setIsProcessing] = useState(false); // For loading state
  const [paymentStatus, setPaymentStatus] = useState(""); // To show payment feedback
  const [showModal, setShowModal] = useState(false); // To control modal visibility
  const [phoneNumber, setPhoneNumber] = useState(""); // For phone number input

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const transportationFee = 200.99;
  const tax = 100.0;
  const total = subtotal + transportationFee + tax;

  const handleCheckout = async () => {
    if (!phoneNumber) {
      setPaymentStatus("Phone number is required for payment.");
      return;
    }

    try {
      setIsProcessing(true);
      setPaymentStatus("");

      // Simulate API call for STK push
      const response = await axios.post("http://127.0.0.1:5000/mpesa-payment", {
        phone_number: phoneNumber,
        amount: total.toFixed(2),
      });

      if (response.status === 200) {
        setPaymentStatus("Payment Successful! Thank you for your order.");
      } else {
        setPaymentStatus("Payment Failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      setPaymentStatus("Payment Failed. Ensure the server is running and try again.");
    } finally {
      setIsProcessing(false);
      setShowModal(false); // Close modal after processing
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-3xl text-black">Your cart is empty.</p>
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

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  <FaTrashAlt size={20} />
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
            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-green-900 text-white py-2 rounded-md mt-4 hover:bg-green-600"
              disabled={isProcessing}
            >
              Check Out
            </button>
            {paymentStatus && (
              <p
                className={`mt-4 text-center ${
                  paymentStatus.includes("Successful") ? "text-green-700" : "text-red-700"
                }`}
              >
                {paymentStatus}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Modal for Phone Number */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4 text-center">Enter Phone Number</h2>
            <input
              type="tel"
              placeholder="e.g., 0712345678"
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              onClick={handleCheckout}
              className="w-full bg-green-900 text-white py-2 rounded-md hover:bg-green-600 mb-2"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Proceed to Pay"}
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
