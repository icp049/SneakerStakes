
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './shoes.css';

const products = [
    { name: "Product 1", price: "$10", category: "Category 1" },
    { name: "Product 2", price: "$20", category: "Category 1" },
    { name: "Product 3", price: "$30", category: "Category 1" },
    { name: "Product 4", price: "$10", category: "Category 2" },
    { name: "Product 5", price: "$20", category: "Category 2" },
    { name: "Product 6", price: "$30", category: "Category 2" },
    { name: "Product 7", price: "$10", category: "Category 3" },
    { name: "Product 8", price: "$20", category: "Category 3" },
    { name: "Product 9", price: "$30", category: "Category 3" },
];

export default function Shoes() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <>
      <h2>Products</h2>

      <div className="category-buttons">
        <button onClick={() => handleCategoryClick(null)}>All</button>
        <button onClick={() => handleCategoryClick("Category 1")}>Category 1</button>
        <button onClick={() => handleCategoryClick("Category 2")}>Category 2</button>
        <button onClick={() => handleCategoryClick("Category 3")}>Category 3</button>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div
            className="product"
            key={product.name}
            onClick={() => handleProductClick(product)}
          >
            {product.image && <img src={product.image} alt={product.name} />}
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to="/bet">
              <button onClick={() => setSelectedProduct(product)}>Place a Bet</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
