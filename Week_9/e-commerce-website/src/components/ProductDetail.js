import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>{product.details}</p>
    </div>
  );
};

export default ProductDetail;
