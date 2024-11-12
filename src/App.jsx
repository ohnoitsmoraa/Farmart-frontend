// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (animal) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === animal.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === animal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...animal, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <header className="flex justify-between p-4 bg-green-800 text-white">
          <h1 className="text-xl font-bold">FarmArt</h1>
          <Link to="/cart" className="cart-button">
            🛒 Cart <span className="cart-count">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<ProductPage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
