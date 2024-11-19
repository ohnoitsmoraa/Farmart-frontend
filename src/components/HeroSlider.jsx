import React from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  return (
    <div className="relative h-screen flex items-center ">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.pixabay.com/video/2021/01/20/62474-504238972_tiny.mp4" 
        type="video/mp4"
        autoPlay
        loop
        muted
      />

     
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-8xl md:text-6xl font-bold font-serif mb-6 leading-tight text-yellow-500">
          “No Middlemen,” “Direct Transactions,” and “Trusted Sellers.”
        </h1>
        <p className="text-2xl font-bold md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
          Empowering farmers and buyers by providing a seamless platform for trading high-quality farm animals.
          Start your journey with FarmArt today and experience transparency and trust.
        </p>
        <Link to="/register">
          <button className="bg-green-900 text-white py-4 px-8 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-semibold">
          Join Us 
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSlider;
