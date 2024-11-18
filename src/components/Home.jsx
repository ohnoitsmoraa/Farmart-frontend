import React from 'react';
import HeroSlider from './HeroSlider'; // Assuming HeroSlider is a separate component
import AboutUs from './AboutUs';
import Testimonials from './Testimonials';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <AboutUs />
      <Testimonials />
      <footer className="bg-green-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
