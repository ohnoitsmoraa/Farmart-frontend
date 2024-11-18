// components/HeroSlider.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('your-image-path.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <Link to="/productpage">
          <button className="bg-green-900 text-white py-4 px-8 rounded-lg hover:bg-green-700 transition duration-300">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;
