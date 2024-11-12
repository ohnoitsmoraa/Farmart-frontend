

function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => updateQuantity(item.id, e.target.value)}
          className="quantity-input"
        />
        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
