import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cartItems, updateQuantity, removeFromCart }) => {
  return (
    <div className="product-list">
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
