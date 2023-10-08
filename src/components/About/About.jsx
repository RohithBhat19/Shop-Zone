import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../../assets/about.png";
import "./About.css"



const About = () => {
    return (
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-heading">Our Story</h1>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sem
              eu erat condimentum dictum ac a ante. Nulla facilisi. Vestibulum
              sodales vehicula tellus, eget lacinia justo varius sit amet. Sed
              bibendum est sed eros auctor, eu auctor lectus fermentum.
            </p>
            <p className="about-description">
              Fusce euismod mauris sed erat auctor, vel vehicula urna finibus.
              Donec sed vestibulum nulla, ut efficitur felis. Sed id blandit mi.
              Nullam auctor justo sit amet purus elementum, id congue tortor
              ultricies. Praesent id purus non urna fringilla aliquet.
            </p>
            <NavLink to="/contact" className="about-button">
              Contact Us
            </NavLink>
          </div>
          <div className="about-image">
            <img
              src={img}
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;