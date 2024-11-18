import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm">
              At FarmArt, we aim to connect farmers and buyers directly for a transparent and fair marketplace. Join us in supporting sustainable farming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300 transition duration-200">Home</Link>
              </li>
              <li>
                <Link to="/productpage" className="hover:text-gray-300 transition duration-200">Shop</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300 transition duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-sm mb-4">
              Stay updated on the latest products, deals, and updates from FarmArt.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded bg-gray-100 text-gray-900 mb-2"
              />
              <button
                type="submit"
                className="bg-white text-green-900 py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} FarmArt. All Rights Reserved.
          </p>
          <p className="text-sm">
            Designed and built with ❤️ by the FarmArt team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
