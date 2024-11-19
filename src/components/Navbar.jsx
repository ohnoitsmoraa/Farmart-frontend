import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems, userRole }) => {
  return (
    <nav className="sticky top-0 z-10 bg-green-900 shadow-md text-white font-bold">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex-none">
          <h1 className="text-lg font-bold">
            <Link to="/" className="hover:text-yellow-500 transition duration-200">
              FarmArt
            </Link>
          </h1>
        </div>

        {/* Center Section */}
        <ul className="flex space-x-6 justify-center flex-grow">
          <li>
            <Link to="/" className="hover:text-yellow-500 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-500 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/register" className="hover:text-yellow-500 transition duration-200">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-yellow-500 transition duration-200">
              Login
            </Link>
          </li>
          {userRole === 'farmer' && (
            <li>
              <Link to="/farmer-dashboard" className="hover:text-yellow-500 transition duration-200">
                Farmer Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link to="/cart" className="relative hover:text-yellow-500 transition duration-200">
              Cart
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
