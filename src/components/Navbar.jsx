import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems, userRole }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-10 bg-green-900 shadow-md text-white font-bold">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Left Section */}
          <h1 className="text-lg font-bold">
            <Link to="/" className="hover:text-yellow-500 transition duration-200">
              FarmArt
            </Link>
          </h1>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Center Section (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-6 justify-center flex-grow">
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

          {/* Right Section (Hidden on Mobile) */}
          <ul className="hidden md:flex space-x-6">
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

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-green-900 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <div className="p-4">
          <button
            className="text-white mb-4 focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block text-lg hover:text-yellow-500 transition duration-200"
                onClick={toggleSidebar}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-lg hover:text-yellow-500 transition duration-200"
                onClick={toggleSidebar}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-lg hover:text-yellow-500 transition duration-200"
                onClick={toggleSidebar}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="block text-lg hover:text-yellow-500 transition duration-200"
                onClick={toggleSidebar}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block text-lg hover:text-yellow-500 transition duration-200"
                onClick={toggleSidebar}
              >
                Login
              </Link>
            </li>
            {userRole === 'farmer' && (
              <li>
                <Link
                  to="/farmer-dashboard"
                  className="block text-lg hover:text-yellow-500 transition duration-200"
                  onClick={toggleSidebar}
                >
                  Farmer Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/cart"
                className="block relative hover:text-yellow-500 transition duration-200"
                onClick={toggleSidebar}
              >
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
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
