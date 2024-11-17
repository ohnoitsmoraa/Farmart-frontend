import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [isFarmer, setIsFarmer] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "", // New field for Farmer
  });
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsFarmer((prev) => !prev);
    setFormData((prev) => ({ ...prev, location: "" })); // Reset location when toggling role
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = isFarmer ? "Farmer" : "Buyer";

    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, role }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Error during registration");
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data)); // Store user info in local storage
        if (role === "Farmer") {
          navigate("/farmer-dashboard"); // Redirect farmers to the Farmer Dashboard
        } else {
          navigate("/"); // Redirect buyers to the Animals page
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-4/5 max-w-3xl shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Left side with image */}
        <div
          className="hidden md:block md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1498866441/vector/farm-animals.jpg?s=612x612&w=0&k=20&c=awYgtvPHCsHXbOW7OHAwJ6qq3vdibp_5tcTbkS-Y1fc=')",
          }}
        ></div>

        {/* Right side with form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create an account
          </h2>
          <p className="text-gray-500 mb-6">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 hover:underline">
              Log in
            </a>
          </p>

          {/* Toggle for Farmer/Buyer */}
          <div className="flex items-center mb-6 justify-center">
            <button
              className={`px-6 py-2 text-center font-semibold ${
                isFarmer
                  ? "bg-green-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={handleToggle}
            >
              Farmer
            </button>
            <button
              className={`px-6 py-2 text-center font-semibold ${
                !isFarmer
                  ? "bg-green-700 text-white"
                  : "bg-gray-300 text-gray-700"
              }`}
              onClick={handleToggle}
            >
              Buyer
            </button>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            {isFarmer && (
              <input
                type="text"
                name="location"
                placeholder="Enter Your Farm's Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            )}
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition duration-300"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
