import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import SellAnimal from './components/SellAnimal';
import FarmerDashboard from './components/FarmerDashboard';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/Aboutus';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import StatsAndProducts from './components/StatsAndProducts';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userRole, setUserRole] = useState(null); // Track the user role ('farmer' or 'buyer')

  // Add to cart functionality
  const addToCart = (animal) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === animal.id);

      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === animal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...animal, quantity: 1 }];
      }
    });
  };

  // Remove from cart functionality
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update cart item quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar cartItems={cartItems} userRole={userRole} />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <div>
                  <HeroSlider />

                  {/* ProductPage Section */}
                  <section className="py-10">
                    <div className="container mx-auto">
                     
                      <ProductPage addToCart={addToCart} cartItems={cartItems} />
                    </div>
                  </section>

                  {/* About Us Section */}
                  <section className="bg-gray-100 py-10">
                    <div className="container mx-auto">
                      <AboutUs />
                    </div>
                  </section>

                  <StatsAndProducts />

                  {/* Testimonials Section */}
                  <section className="bg-gray-100 py-10">
                    <div className="container mx-auto">
                      <Testimonials />
                    </div>
                  </section>

                  {/* Contact Section */}
                  <section className="py-10">
                    <div className="container mx-auto">
                      <Contact />
                    </div>
                  </section>

                  {/* Footer Section */}
                  <Footer />
                </div>
              }
            />

            {/* About Page */}
            <Route
              path="/about"
              element={
                <div className="container mx-auto py-10">
                  <AboutUs />
                </div>
              }
            />

            {/* Contact Page */}
            <Route
              path="/contact"
              element={
                <div className="container mx-auto py-10">
                  <Contact />
                </div>
              }
            />

            {/* Cart Page */}
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />

            {/* Register Page */}
            <Route
              path="/register"
              element={<Register setUserRole={setUserRole} />}
            />

            {/* Login Page */}
            <Route
              path="/login"
              element={<Login setUserRole={setUserRole} />}
            />

            {/* Sell Animal Page */}
            <Route path="/sell-animal" element={<SellAnimal />} />

            {/* Farmer Dashboard */}
            <Route
              path="/farmer-dashboard"
              element={<FarmerDashboard />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
