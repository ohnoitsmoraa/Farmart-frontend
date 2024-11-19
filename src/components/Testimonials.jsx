import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Jane Doe",
    role: "Farmer",
    text: "FarmArt has transformed the way I sell my animals. The platform is so user-friendly and efficient!",
  },
  {
    name: "John Smith",
    role: "Buyer",
    text: "Purchasing animals directly from farmers has never been easier. I love this platform!",
  },
  {
    name: "Mary Johnson",
    role: "Farmer",
    text: "FarmArt helped me connect with trustworthy buyers. Highly recommend it to other farmers!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 8000); // Keep the testimonial for 8 seconds before transitioning
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-container">
      <div
        className="testimonials-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
