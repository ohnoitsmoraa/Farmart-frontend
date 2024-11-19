import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-green-900 p-6 m-3 rounded-lg text-center">
      <div className="max-w-6xl mx-auto px-4 py-6">
        
        <h2 className="text-2xl font-bold mb-4 text-white">Get the freshest FarmArt news</h2>
        <form className="space-y-4 flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter email here"
            className="w-[300px] p-3 bg-transparent border-b-2 border-gray-300 text-white rounded-none focus:outline-none focus:border-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-green-900 px-4 py-2 text-white rounded-lg mt-4"
          >
            Subscribe
          </button>
        </form>

      
        <nav className="mt-6 flex justify-center space-x-8">
          <Link to="/home" className="text-gray-300 hover:text-white hover:underline">
            Home
          </Link>
          <Link to="/aboutus" className="text-gray-300 hover:text-white hover:underline">
            About
          </Link>
          <Link to="/contactus" className="text-gray-300 hover:text-white hover:underline">
            Contact
          </Link>
          <Link to="/cartpage" className="text-gray-300 hover:text-white hover:underline">
            Cart
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-600"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-600"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-green-500"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black py-5 rounded-md mt-4">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-white">
            &copy; 2024 FarmArt, LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
