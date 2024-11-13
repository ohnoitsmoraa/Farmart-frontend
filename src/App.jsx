// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart or increase quantity if already in cart
  const addToCart = (animal) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === animal.id);

      if (itemInCart) {
        // Update quantity if already in cart
        return prevItems.map((item) =>
          item.id === animal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item to cart with quantity of 1
        return [...prevItems, { ...animal, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to adjust the quantity of an item in the cart
  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  return (
    <Router>
      <div className="app">
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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
