import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = productId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <nav>
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/cart">
        Cart ({cartItems.length})
      </Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
