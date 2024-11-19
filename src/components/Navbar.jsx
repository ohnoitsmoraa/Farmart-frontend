import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems, userRole }) => {
  return (
    <nav className="sticky top-0 z-10 bg-green-900 shadow-md text-yellow-500 font-bold">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold">FarmArt</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-300 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/register" className="hover:text-gray-300 transition duration-200">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300 transition duration-200">
              Login
            </Link>
          </li>
          {userRole === 'farmer' && (
            <li>
              <Link to="/farmer-dashboard" className="hover:text-gray-300 transition duration-200">
                Farmer Dashboard
              </Link>
            </li>
          )}
          <li>
            <Link to="/cart" className="relative hover:text-gray-300 transition duration-200">
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
