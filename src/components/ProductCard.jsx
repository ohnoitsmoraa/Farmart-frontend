import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3 className="product-name">{product.name}</h3>
    <p className="product-breed">Breed: {product.breed}</p>
    <p className="product-type">Type: {product.type}</p>
    <p className="product-price">${product.price}</p>
    <button onClick={() => addToCart(product)} className="add-to-cart-btn">
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
