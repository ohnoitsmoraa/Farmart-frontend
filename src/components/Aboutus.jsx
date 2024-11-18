import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-900 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to FarmArt, a platform dedicated to bringing together farmers and buyers for seamless
          transactions of farm animals. Our mission is to empower farmers by providing a digital space to
          showcase their animals, while ensuring a trustworthy and efficient experience for buyers.
        </p>
        <p className="text-lg text-gray-700">
          Whether you're a farmer looking to sell or a buyer looking for the perfect animal, FarmArt is
          here to help. We're committed to making the agricultural marketplace more accessible for all.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
