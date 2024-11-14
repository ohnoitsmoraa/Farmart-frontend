import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://example.com/your-background-image.jpg")', // Replace with your image URL
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full bg-green-800 bg-opacity-75 p-4 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">FarmArt</h1>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-300">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-gray-300">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Message Overlay */}
      <div className="relative flex items-center justify-center h-full z-10">
        <div className="text-center text-white px-6">
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">“No Middlemen,” “Direct Transactions,” and “Trusted Sellers.”</h2>
          <p className="text-xl sm:text-2xl mb-6">
            Connecting farmers directly to buyers. Fresh, reliable, and delivered right to you.
          </p>
          <Link
            to="/products"
            className="bg-green-700 hover:bg-green-900 text-white font-semibold py-3 px-8 rounded-md text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
