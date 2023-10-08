// import React, { useEffect } from "react";
// import Swiper from "swiper";
// // import "swiper/swiper-bund{le.css"; // Import Swiper styles


// const YourComponent = () => {
//   useEffect(() => {
//     // Initialize the product slider Swiper
    
//     const productSwiper = new Swiper(".product-slider", {
//       loop: true,
//       spaceBetween: 20,
//       autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//       },
//       centeredSlides: true,
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1020: {
//           slidesPerView: 3,
//         },
//       },
//     });

//     // Initialize the review slider Swiper
//     const reviewSwiper = new Swiper(".review-slider", {
//       loop: true,
//       spaceBetween: 20,
//       autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//       },
//       centeredSlides: true,
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1020: {
//           slidesPerView: 3,
//         },
//       },
//     });

//     // Clean up Swiper instances when the component unmounts
//     return () => {
//       productSwiper.destroy();
//       reviewSwiper.destroy();
//     };
//   }, []);

//   return (
//     <div>
//       {/* Your component content here */}
//       <div className="product-slider">
//         {/* Your product slider content here */}
//       </div>
//       <div className="review-slider">
//         {/* Your review slider content here */}
//       </div>
//     </div>
//   );
// };

// export default YourComponent;

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import { ShopContext } from "../context/shop-context";

// import "./navbar.css";

// export const Navbar = () => {
//   const { cartItems } = useContext(ShopContext);

//   // Calculate the total number of items in the cart
//   const totalItemsInCart = Object.values(cartItems).reduce(
//     (total, count) => total + count,
//     0
//   );

//   return (
//     <div className="navbar">
//       <div className="links">
//         <Link to = "/">Review</Link>
//         <Link to="/">Shop</Link>
//         <Link to = "/cart">
       
//           <span className="shopping-cart-icon">
//             <ShoppingCart size={32} />
//             {totalItemsInCart > 0 && (
//               <span className="cart-counter">{totalItemsInCart}</span>
//             )}
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// };