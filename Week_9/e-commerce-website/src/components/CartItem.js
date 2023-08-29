import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
  return (
    <div className="product">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button
        className="cart-link"
        onClick={() => updateQuantity(item.id, item.quantity + 1)}
      >
        + Add
      </button>
      <button
        className="cart-link"
        onClick={() => updateQuantity(item.id, item.quantity - 1)}
        disabled={item.quantity <= 1}
      >
        - Remove
      </button>
      <button
        className="cart-link"
        onClick={() => removeFromCart(item.id)}
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default CartItem;
