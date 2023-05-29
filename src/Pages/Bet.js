import React from 'react';

export default function Bet({ selectedProduct }) {
  return (
    <div>
      <h2>Product Details</h2>
      {selectedProduct && (
        <div className="product-details">
          <h3>{selectedProduct.name}</h3>
          <p>{selectedProduct.price}</p>
          <p>{selectedProduct.category}</p>
          {/* Add additional product details here */}
        </div>
      )}
    </div>
  );
}
