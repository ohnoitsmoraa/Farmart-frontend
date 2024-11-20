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
        "A high-yielding dairy cow known for producing up to 25 liters of milk.",
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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Stats Section */}
      <div ref={statsRef} className="container mx-auto text-center mb-16">
        <div className="flex flex-wrap justify-evenly gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-full text-center w-40 h-40 sm:w-48 sm:h-48 flex flex-col justify-evenly items-center border-2 border-green-700"
            >
              <h2 className="text-3xl sm:text-5xl font-bold text-green-800">
                {isVisible ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  "0"
                )}
                +
              </h2>
              <p className="text-green-600 text-base sm:text-lg mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-green-700 text-white shadow-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 flex flex-col items-center justify-center p-6 rounded-tl-full rounded-br-full h-64"
          >
            {/* Text Section */}
            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
                {product.name}
              </h3>
              <p className="text-sm sm:text-lg">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsAndProducts;
