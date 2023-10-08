import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import './shop.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from "../../components/Review/Review";
export const Shop = () =>{
    const [selectedCategory, setSelectedCategory] = useState("All");
    return(
        <div className="shop">
        <ToastContainer />
        <div className="shopTitle">
          <h1>Shop Zone</h1>
        </div>
        <div className="categoryFilter">
  <label htmlFor="categorySelect">Categories:</label>
  <div className="custom-select">
    <select
      id="categorySelect"
      onChange={(e) => setSelectedCategory(e.target.value)}
      value={selectedCategory}
    >
      <option value="" disabled hidden>
        Categories
      </option>
      <option value="All">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
      <option value="Home">Home</option>
      <option value="Accessories">Accessories</option>
    </select>
    <span className="select-arrow">&#9660;</span>
  </div>
</div>
        <div className="products">
          {PRODUCTS.filter(
            (product) =>
              selectedCategory === "All" || product.category === selectedCategory
          ).map((product) => (
            <Product data={product} key={product.id} />
          ))}
        </div>
        <Review />
      </div>
    );
  };