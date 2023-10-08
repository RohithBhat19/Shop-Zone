
import React, { useEffect } from "react";
import Swiper from "swiper";
import "./Review.css"
import "swiper/swiper-bundle.css"; // Import Swiper styles


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faStar,faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

import rgbImage from "../../images/rgb.jpg";
import rohithImage from "../../images/rohith.jpg";
import praImage from "../../images/pra.jpg";
import sarImage from "../../images/sar.jpg";




const Review = () => {
  useEffect(() => {
    // Initialize the Swiper
    new Swiper(".review-slider", {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 7500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section className="review" id="review">
      <h1 className="heading">
        Customer's <span>Reviews</span>
      </h1>

      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          {/* Review 1 */}
          <div className="swiper-slide box">
            <img src={rohithImage} alt="Rohith" className="review-image" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              doloremque iste quae voluptatum et, eaque voluptatibus tempora.
              Dicta, officia cum.
            </p>
            <h3>Rohith Bhat</h3>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>

          {/* Review 2 */}
          <div className="swiper-slide box">
            <img src={rgbImage} alt="John Deo" className="review-image" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              doloremque iste quae voluptatum et, eaque voluptatibus tempora.
              Dicta, officia cum.
            </p>
            <h3>John Deo</h3>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>

          {/* Review 3 */}
          <div className="swiper-slide box">
            <img src={praImage} alt="Pratyaksha Ambig" className="review-image" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              doloremque iste quae voluptatum et, eaque voluptatibus tempora.
              Dicta, officia cum.
            </p>
            <h3>Pratyaksha Ambig</h3>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>

          {/* Review 4 */}
          <div className="swiper-slide box">
            <img src={sarImage} alt="Sarvajit Bhat" className="review-image" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              doloremque iste quae voluptatum et, eaque voluptatibus tempora.
              Dicta, officia cum.
            </p>
            <h3>Sarvajit Bhat</h3>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;