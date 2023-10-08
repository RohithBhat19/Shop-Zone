import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import { ShoppingBag } from "phosphor-react";
// import {  User} from "phosphor-react"
import "./navbar.css";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  
  const totalItemsInCart = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );

  const location = useLocation();
  
 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <div className="links">
        <ShoppingBag className="shopping" size={50} />
        <p className="zone">ShopZone</p>
        
        <a href="#review">Reviews</a>
        {location.pathname === "/" ? (
         
          <a onClick={scrollToTop} style={{ cursor: "pointer" }}>
            Shop
          </a>
        ) : (
    
          <Link to="/" style={{ cursor: "pointer" }}>
            Shop
          </Link>
        )}
        <Link to="/about">About</Link> 
        <Link to="/cart">
          <span className="shopping-cart-icon">
            <ShoppingCart size={32} />
            {totalItemsInCart > 0 && (
              <span className="cart-counter">{totalItemsInCart}</span>
            )}
          </span>
          
        </Link>
        {/* <Link to = "/login">
          <User size={32} />
        </Link>
         */}
      </div>
    </div>
  );
};