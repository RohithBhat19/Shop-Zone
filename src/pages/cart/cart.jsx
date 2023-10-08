import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const isCartEmpty = Object.values(cartItems).every((count) => count === 0);

  const handleContinueShopping = () => {
    // Scroll to the top of the page before navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  return (
    <div className={`cart ${isCartEmpty ? "empty-cart" : ""}`}>
      <div style={{ marginTop: "60px" }}>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ₹{totalAmount}</p>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};


