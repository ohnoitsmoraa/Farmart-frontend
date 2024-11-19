import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
      <AppContent
        cartItems={cartItems}
        addToCart={addToCart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        userRole={userRole}
        setUserRole={setUserRole}
      />
    </Router>
  );
};

const AppContent = ({
  cartItems,
  addToCart,
  updateQuantity,
  removeFromCart,
  userRole,
  setUserRole,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-10 bg-green-900 shadow-md text-yellow-500 font-bold">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">FarmArt</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-gray-300 transition duration-200">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300 transition duration-200">
                Login
              </Link>
            </li>
            {userRole === 'farmer' && (
              <li>
                <Link to="/farmer-dashboard" className="hover:text-gray-300 transition duration-200">
                  Farmer Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link to="/cart" className="relative hover:text-gray-300 transition duration-200">
                Cart
                {/* Show item count on the cart link */}
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow">
        <Routes>
          {/* Homepage Route */}
          <Route
            path="/"
            element={
              <div>
                {/* HeroSlider Section */}
                <HeroSlider />

               

                {/* ProductPage Section */}
                <section className="py-10">
                  <div className="container mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Our Products</h2>
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
          {/* Other Routes */}
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
          <Route path="/register" element={<Register setUserRole={setUserRole} />} />
          <Route path="/login" element={<Login setUserRole={setUserRole} />} />
          <Route path="/sell-animal" element={<SellAnimal />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        </Routes>
      </div>

     
    </div>
  );
};

export default App;
