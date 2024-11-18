import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-green-900 mb-4">Testimonials</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-xs">
            <p className="text-lg text-gray-700 mb-4">
              "FarmArt helped me find the perfect animals for my farm. The process was so simple and
              efficient!"
            </p>
            <p className="font-semibold text-green-900">John D.</p>
            <p className="text-gray-500">Farmer</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-xs">
            <p className="text-lg text-gray-700 mb-4">
              "I bought a cow through FarmArt, and it arrived in great condition. Highly recommended!"
            </p>
            <p className="font-semibold text-green-900">Sarah P.</p>
            <p className="text-gray-500">Buyer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
