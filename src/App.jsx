import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

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
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-10 bg-green-900 text-white shadow-md">
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
              <li>
                <Link to="/cart" className="hover:text-gray-300 transition duration-200">
                  Cart ({cartItems.length})
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<ProductPage addToCart={addToCart} cartItems={cartItems} />}
            />
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
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        
      </div>
    </Router>
  );
};

export default App;
