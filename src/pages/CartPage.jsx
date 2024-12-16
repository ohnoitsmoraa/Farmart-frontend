import React, { useState } from "react";
import { FaTrashAlt, FaLock } from "react-icons/fa";
import { BsFillCartCheckFill, BsStarFill } from "react-icons/bs";
import { AiOutlineCloseCircle, AiOutlineGift } from "react-icons/ai";
import axios from "axios";

const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Rewards Logic
  const rewardThreshold = 5000;
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const progress = Math.min((subtotal / rewardThreshold) * 100, 100).toFixed(0);
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

      const response = await axios.post("https://farmart-backend-2-okz3.onrender.com/mpesa payment", {
        phone_number: phoneNumber,
        amount: total.toFixed(2),
      });

      if (response.status === 200) {
        setPaymentStatus("Payment Successful! Thank you for your order.");
      } else {
        setPaymentStatus("Payment Failed. Please try again.");
      }
    } catch (error) {
      setPaymentStatus("Payment Failed. Ensure the server is running and try again.");
    } finally {
      setIsProcessing(false);
      setShowModal(false);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 via-white to-gray-200 min-h-screen">
      {/* Loyalty Badge */}
      <div className="mb-6 p-4 bg-yellow-300 text-yellow-900 rounded-md shadow-md flex items-center justify-between animate-bounce">
        <AiOutlineGift size={28} className="text-yellow-800" />
        <span className="font-bold text-lg">Earn rewards! Spend KES 5000 to unlock 10% cashback.</span>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Your Shopping Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-2xl font-semibold text-gray-600">Your cart is empty!</p>
          <BsFillCartCheckFill className="text-6xl text-gray-300 mt-4" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border rounded-lg p-4 bg-white shadow-lg hover:shadow-2xl transform transition-all hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
                    <img
                      src={item.image || "https://via.placeholder.com/150"}
                      alt={item.name}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-green-600 font-bold">KES {item.price.toFixed(2)}</p>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, index) => (
                        <BsStarFill key={index} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => updateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                    className="px-3 py-1 bg-gray-200 rounded-md font-semibold hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-gray-200 rounded-md font-semibold hover:bg-gray-300"
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
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-all">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Subtotal:</span> <span>KES {subtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Transportation:</span> <span>KES {transportationFee.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Tax:</span> <span>KES {tax.toFixed(2)}</span>
              </p>
              <p className="flex justify-between font-bold text-lg text-green-700 mt-4">
                <span>Total:</span> <span>KES {total.toFixed(2)}</span>
              </p>
            </div>

            {/* Reward Progress */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-1">Rewards Progress: {progress}%</p>
              <div className="h-2 bg-gray-200 rounded-md">
                <div
                  className={`h-full rounded-md transition-all ${
                    progress === "100"
                      ? "bg-green-500"
                      : "bg-yellow-400"
                  }`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-md mt-6 font-bold hover:from-green-500 hover:to-green-700"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Proceed to Checkout"}
            </button>

            {/* Security Badges */}
            <div className="mt-4 text-center">
              <FaLock className="inline text-green-500 mr-2" />
              <span className="text-sm text-gray-600">Secure Checkout Powered by Mpesa</span>
            </div>
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

      {/* Checkout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <AiOutlineCloseCircle
              size={30}
              className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-red-500"
              onClick={() => setShowModal(false)}
            />
            <h2 className="text-2xl font-bold mb-4 text-center">Enter Phone Number</h2>
            <input
              type="tel"
              placeholder="e.g., 0712345678"
              className="w-full border border-gray-300 rounded-md p-3 mb-6"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              onClick={handleCheckout}
              className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600"
            >
              Complete Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
