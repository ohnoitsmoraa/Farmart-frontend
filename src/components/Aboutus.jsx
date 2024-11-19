import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative bg-gray-50 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/150672672/photo/golden-sunset-over-idyllic-farmland-landscape.jpg?s=612x612&w=0&k=20&c=ctRVDhsEoTSP8CHNLzO7SnWvLPeznsCXqsriYALF2Qw=')",
        }}
      ></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-5xl font-extrabold text-yellow-600 mb-6 leading-tight">
          About Us
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-bold">
          At <span className="font-bold text-green-800">FarmArt</span>, we believe in the power of connecting farmers directly with buyers to 
          create a seamless agricultural marketplace. Our platform is designed to bridge the gap 
          between sellers and consumers, ensuring transparency, trust, and convenience for all.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Mission Statement */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed font-bold">
              Our mission is to empower farmers by providing them with tools to showcase their livestock
              and reach a larger audience. We aim to eliminate middlemen and ensure farmers receive
              maximum value for their hard work while offering buyers high-quality, ethically sourced animals.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed font-bold">
              We envision a future where technology bridges the gap between rural farmers and urban
              markets. By fostering sustainable farming practices and supporting local communities,
              FarmArt aims to become the leading digital marketplace for farm animals worldwide.
            </p>
          </div>
        </div>

        {/* Additional Paragraph */}
        <div className="mt-16 text-gray-700 max-w-4xl mx-auto">
          <p className="text-lg mb-4 leading-relaxed font-bold">
            Through our platform, we strive to build a community that values hard work, transparency,
            and ethical sourcing. Whether you are a farmer or a buyer, FarmArt is committed to
            ensuring a reliable and efficient experience for everyone involved.
          </p>
          <p className="text-lg leading-relaxed font-bold">
            Join us in creating a sustainable, farmer-focused marketplace where trust and quality
            are the foundations of every transaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
