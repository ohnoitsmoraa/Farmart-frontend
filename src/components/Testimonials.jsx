import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Fixed import
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      text: "FarmArt helped me find the perfect animals for my farm. The process was so simple and efficient!",
      name: "Maureen",
      role: "Farmer",
      image: "https://via.placeholder.com/80", 
    },
    {
      text: "I bought a cow through FarmArt, and it arrived in great condition. Highly recommended!",
      name: "Mitchell",
      role: "Buyer",
      image: "https://via.placeholder.com/80", 
    },
    {
      text: "Thanks to FarmArt, I was able to sell my livestock quickly and get a fair price!",
      name: "Nelly",
      role: "Farmer",
      image: "https://via.placeholder.com/80", 
    },
    {
      text: "The platform is user-friendly, and I found exactly what I needed for my farm!",
      name: "Kevin",
      role: "Buyer",
      image: "https://via.placeholder.com/80", 
    },
    {
      text: "FarmArt made the buying process seamless. Great service and trustworthy sellers!",
      name: "Tony",
      role: "Buyer",
      image: "https://via.placeholder.com/80", 
    },
    {
      text: "The platform is user-friendly, and I found exactly what I needed for my farm!",
      name: "Abiud",
      role: "Buyer",
      image: "https://via.placeholder.com/80", 
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-20 min-h-[90vh]"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1659129669/photo/welcome-handshake-and-people-with-b2b-farm-deal-for-agriculture-partnership-or-small-business.jpg?s=612x612&w=0&k=20&c=_774YlIJmeNVEZj0wOgWv9BIbtdJmKd4O0-VSElkcVA=')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative text-white">
        <h2 className="text-4xl font-semibold text-center mb-8 text-yellow-500">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <h3 className="text-green-900 font-bold text-xl">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">{testimonial.role}</p>
                
                <p className="text-black italic text-lg mb-4  text-center">
                 <span className="text-yellow-500 text-5xl mb-4">“</span> {testimonial.text}   <span className=""></span>
                </p>
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
