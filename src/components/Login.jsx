import React, { useState } from 'react';

const Login = () => {
  const [isFarmer, setIsFarmer] = useState(true);

  const handleToggle = () => {
    setIsFarmer((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-4/5 max-w-3xl shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Left side with image */}
        <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1498866441/vector/farm-animals.jpg?s=612x612&w=0&k=20&c=awYgtvPHCsHXbOW7OHAwJ6qq3vdibp_5tcTbkS-Y1fc=')" }}></div>
        
        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <button className="text-gray-600 text-sm mb-4">Back</button>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Login to your account</h2>
          <p className="text-gray-500 mb-6">Don't have an account? <a href="#" className="text-green-600 hover:underline">Sign up</a></p>
          
          {/* Toggle for Farmer/Buyer */}
          <div className="flex items-center mb-6">
            <button
              className={`w-1/2 py-2 text-center font-semibold ${isFarmer ? 'bg-green-700 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => setIsFarmer(true)}
            >
              Farmer
            </button>
            <button
              className={`w-1/2 py-2 text-center font-semibold ${!isFarmer ? 'bg-green-700 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => setIsFarmer(false)}
            >
              Buyer
            </button>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <a href="#" className="text-green-600 hover:underline">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
