import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

const StatsAndProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { label: "Customers", value: 100 },
    { label: "Animals", value: 300 },
    { label: "Orders", value: 200 },
  ];

  const products = [
    {
      name: "Dairy Cow",
      description:
        "A high-yielding dairy cow known for producing up to 25 liters of milk daily.",
    },
    {
      name: "Goat",
      description:
        "A versatile farm animal ideal for milk and meat production.",
    },
    {
      name: "Chicken",
      description:
        "Healthy layer chicken known for producing 300 eggs annually.",
    },
  ];

  // Observer to trigger count when stats are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-16">
      {/* Stats Section */}
      <div ref={statsRef} className="container mx-auto text-center mb-16">
        <div className="flex justify-around items-center space-x-4 md:space-x-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-full text-center w-48 h-48 flex flex-col justify-center items-center border-2 border-green-700"
            >
              <h2 className="text-5xl font-bold text-green-800">
                {isVisible ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  "0"
                )}
                +
              </h2>
              <p className="text-green-600 text-lg mt-3">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-green-700 text-white shadow-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex flex-col items-center justify-center p-6 rounded-s-full h-64"
          >
            {/* Text Section */}
            <div className="text-center px-4">
              <h3 className="text-3xl font-semibold mb-4">{product.name}</h3>
              <p className="text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsAndProducts;
